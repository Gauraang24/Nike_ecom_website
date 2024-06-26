import React, { useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Wrapper from '@/components/Wrapper'
import CartItem from '@/components/CartItem'
import { useSelector } from 'react-redux'

const Cart = () => {

    const { cartItems } = useSelector((state) => state.cart)

    const subTotal = useMemo(() => {
        return cartItems.reduce((total, val) => total + val.attributes.price, 0)
    }, [cartItems])
    return (
        <div className='w-full md:py-20'>
            <Wrapper>
                {cartItems.length > 0 && (
                    <>

                        {/* heading and paragraph start */}
                        <div className='text-center max-w-[800px] mx-auto mt-8 md:mt-0 '>
                            <div className='text-[28px] md:text-[34px] mb-5 font-semibold leading-tight'>Shopping Cart</div>
                        </div>
                        {/* heading and paragraph end */}

                        {/* cart content start */}
                        <div className='flex flex-col lg:flex-row gap-12 py-10'>
                            {/* cart items start */}
                            <div className='flex-[2]'>
                                <div className='text-lg font-bold'>
                                    {cartItems.map((item) => {
                                        return <CartItem key={item.id} data={item} />
                                    })}
                                </div>
                            </div>
                            {/* cart items end */}
                            {/* summary staaaaaaaaaaaaart */}
                            <div className='flex-[1]'>
                                <div className='text-lg font-bold'>
                                    Summary
                                </div>

                                <div className='p-5 my-5 bg-black/[0.05] rounded-xl'>
                                    <div className='flex justify-between'>
                                        <div className='uppercase text-md md:text-lg font-medium text-black'>SubTotal</div>
                                        <div className='text-md md:text-lg font-medium text-black'>
                                            &#8377;{subTotal}
                                        </div>
                                    </div>

                                    <div className='text-sm md:text-md py-5 border-t mt-5'> The subtotal reflects the total price of your oder, including dutites and taxes, beofre any applicable discounts. It does not include delivery cost and international transaction fees.</div>
                                </div>
                                {/* button start  */}
                                <button className='w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75'>Checkout</button>
                                {/* button end  */}
                            </div>

                            {/* summary end */}
                        </div>
                        {/* cart content end */}

                    </>
                )}


                {/* ----------------------this is empty card screen----------------------- */}

                {cartItems.length < 1 && <div className='flex-[2] flex flex-col items-center pb-[50px] md:-mt-14'>
                    <Image src='/empty-cart.jpg' width={300} height={300} className='w-[300px] md:w-[400px]' alt='' />
                    <span className='text-xl font-bold'>Your cart is empty</span>
                    <span className='tect-center mt-4'>
                        Looks like you haven't added anything in your cart.
                        <br />
                        Go ahead and explore top categies.
                    </span>

                    <Link
                        href="/"
                        className='py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8'>
                        Continue Shopping
                    </Link>
                </div>}
                {/* ----------------------this is empty card screen----------------------- */}
            </Wrapper>
        </div>
    )
}

export default Cart
