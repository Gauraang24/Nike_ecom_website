import ProductDetailsCarousel from '@/components/ProductDetailsCarousel'
import RelatedProducts from '@/components/RelatedProducts'
import Wrapper from '@/components/Wrapper'
import { fetchDataFromApi } from '@/utils/api'
import { getDiscountedPricePercentage } from '@/utils/helpers'
import React, { useState } from 'react'
import { IoMdHeartEmpty } from 'react-icons/io'
import ReactMarkdown from 'react-markdown'
//redux methods and action
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '@/store/cartSlice'
//toast message
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProductDetails = ({ prod, products, }) => {

    const p = prod?.data[0]?.attributes
    const dispatch = useDispatch()

    const [selectedSize, setSelectedSize] = useState()
    const [showError, setShowError] = useState(false)

    const notify = () => {

        toast.success('Product added successfully inside cart', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
    }
    return (
        <div className='w-full md:py-20'>
            <ToastContainer />
            <Wrapper>
                <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>

                    {/* left column */}
                    <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0'><ProductDetailsCarousel images={p?.image?.data} /></div>

                    {/* //right column */}
                    <div className='flex-[1] py-3'>
                        {/* title */}
                        <div className='text-[34px] font-semibold mb-2 leading-tight'>
                            {p?.name}
                        </div>

                        {/* product subTitle */}
                        <div className='text-lg font-semibold mb-5'>
                            {p?.subtitle}
                        </div>

                        {/* Product price */}
                        <div className='flex items-center'>

                            <div className='mr-2 text-lg font-semibold'>
                                MRP : &#8377; {p?.price}
                            </div>

                            {p?.original_price && (
                                <>
                                    <p className='text-base font-medium line-through'
                                    >&#8377; {p?.original_price}</p>

                                    <p className='ml-auto text-base font-medium text-green-500'>
                                        {getDiscountedPricePercentage(p?.original_price, p?.price)}% off
                                    </p>
                                </>
                            )}

                        </div>


                        <div className='text-md font-medium text-black/[0.5]'>
                            incl. of taxes
                        </div>
                        <div className='text-md font-medium text-black/[0.5] mb-20'>
                            {`(Also includes all applicable duties)`}
                        </div>

                        {/* product Size Range  */}

                        <div className='mb-10'>
                            <div className='flex justify-between mb-2'>
                                {/* heading start */}
                                <div className='text-md font-semibold'>
                                    Select Size
                                </div>
                                <div className='text-md font-medium text-black/[0.5] cursor-pointer'>
                                    Select Guide
                                </div>
                            </div>
                            {/* heading end */}
                            {/* size start */}
                            <div id='sizesGrid' className='grid grid-cols-3 gap-2'>

                                {
                                    p?.size?.data.map((item, i) => (
                                        <div
                                            key={i}
                                            className={`border rounded-md text-center py-3 font-medium ${item?.enabled ? "hover:border-black cursor-pointer" : "cursor-not-allowed bg-black/[0.1] opacity-50"} 
                                            ${selectedSize === item.size ? "border-black" : ""}
                                            `}
                                            onClick={() => {
                                                setSelectedSize(item.size)
                                                setShowError(false)
                                            }}
                                        >
                                            {item.size}
                                        </div>
                                    ))
                                }

                            </div>
                            {/* size end */}

                            {showError && <div className='text-red-600 mt-1'>
                                Size selection is required
                            </div>}
                        </div>

                        <button className='w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75'
                            onClick={() => {
                                if (!selectedSize) {
                                    setShowError(true)
                                    document.getElementById("sizesGrid").scrollIntoView({
                                        block: "center",
                                        behavior: "smooth"
                                    })
                                } else {
                                    dispatch(addToCart({
                                        ...prod?.data?.[0],
                                        selectedSize,
                                        oneQuantityPrice: p?.price
                                    }))
                                    notify()
                                }

                            }}>
                            Add to Cart
                        </button>
                        <button className='w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex justify-center items-center gap-2 mb-10 hover:opacity-75'>
                            WishList
                            <IoMdHeartEmpty size={20} />
                        </button>

                        <div>
                            <div className='text-lg font-bold mb-5'>
                                Product Details
                            </div>
                            <div className='markdown text-md mb-5'>
                                <ReactMarkdown>
                                    {p?.description}
                                </ReactMarkdown>
                            </div>
                        </div>
                    </div>
                </div>
                <RelatedProducts products={products} />
            </Wrapper >

        </div >
    )
}

export default ProductDetails

export async function getStaticPaths() {
    const products = await fetchDataFromApi('api/products?populate=*')

    const paths = products?.data?.map((p) => ({
        params: {
            slug: p?.attributes.slug
        }
    }))

    return {
        paths,
        fallback: false
    }

}

export async function getStaticProps({ params: { slug } }) {
    const prod = await fetchDataFromApi(`api/products?populate=*&filters[slug][$eq]=${slug}`)
    const products = await fetchDataFromApi(`api/products?populate=*&[filters][slug][$ne]=${slug}`)

    return {
        props: {
            prod,
            products,
            slug
        }
    }
}