import ProductDetailsCarousel from '@/components/ProductDetailsCarousel'
import RelatedProducts from '@/components/RelatedProducts'
import Wrapper from '@/components/Wrapper'
import React from 'react'
import { IoMdHeartEmpty } from 'react-icons/io'


const ProductDetails = () => {
    return (
        <div className='w-full md:py-20'>
            <Wrapper>
                <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>

                    {/* left column */}
                    <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0'><ProductDetailsCarousel /></div>

                    {/* //right column */}
                    <div className='flex-[1] py-3'>
                        {/* title */}
                        <div className='text-[34px] font-semibold mb-2'>
                            Jordan Retro 6 G
                        </div>

                        {/* product subTitle */}
                        <div className='text-lg font-semibold mb-5'>
                            Men&apos;s Golf Shoes
                        </div>

                        {/* Product price */}
                        <div className='text-lg font-semibold'>
                            MRP : $1000
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
                            <div className='grid grid-cols-3 gap-2'>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 6
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 7
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 8
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 9
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 10
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50'>
                                    UK 11
                                </div>
                            </div>
                            {/* size end */}

                            <div className='text-red-600 mt-1'>
                                Size selection is required
                            </div>
                        </div>

                        <button className='w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75'>
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
                            <div className='text-md mb-5'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus neque veniam maiores, accusamus expedita dolore deserunt a laudantium reprehenderit nostrum eius optio explicabo. Illum consectetur aspernatur quidem, ex veritatis, nulla atque esse numquam optio fuga doloribus tempora odit? Vitae, ab suscipit sapiente architecto sint ipsa, ex perspiciatis iste fugit quas, veritatis consequuntur sunt iusto! Maxime vitae error omnis quod quibusdam incidunt possimus eaque quasi nemo, id, a, quos excepturi!
                            </div>
                            <div className='text-md mb-5'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus neque veniam maiores, accusamus expedita dolore deserunt a laudantium reprehenderit nostrum eius optio explicabo. Illum consectetur aspernatur quidem, ex veritatis, nulla atque esse numquam optio fuga doloribus tempora odit? Vitae, ab suscipit sapiente architecto sint ipsa, ex perspiciatis iste fugit quas, veritatis consequuntur sunt iusto! Maxime vitae error omnis quod quibusdam incidunt possimus eaque quasi nemo, id, a, quos excepturi!
                            </div>
                        </div>
                    </div>
                </div>
                <RelatedProducts />
            </Wrapper>

        </div>
    )
}

export default ProductDetails
