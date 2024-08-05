import React, { useEffect, useState } from 'react'
import { FiShoppingCart } from "react-icons/fi";
import Navbar from '../Navbar';
import { IoChevronBackOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import { decrementItem, deleteItem, incrementItem } from '../../redux/features/cartSlice';
import { FaRegTrashCan } from "react-icons/fa6";
import Link from 'next/link';



function Cart({ setCart }) {

    const cartItems = useSelector(state => state.cart.cartItems)
    const cartValue = useSelector(state => state.cart.cartValue)
    const dispatch = useDispatch()

    return (
        <>
            <div className='text-3xl w-4/5 mx-auto flex gap-2 items-center mt-16 border-b-2 p-4'>
                <IoChevronBackOutline onClick={() => {
                    setCart(false)
                }} className='cursor-pointer' />
                <h1>
                    Continue Shopping
                </h1>
            </div>
            <div className='w-4/5 mx-auto my-5'>
                <h1 className='text-2xl my-2'>Shopping Cart</h1>
                <p>You have {cartValue.quantity} items in your cart.</p>
            </div>
            <div className='w-11/12 md:w-4/5 mx-auto flex flex-col gap-4'>
                {
                    cartItems.map((item, idx) => {
                        // const [quant, setQuant] = useState(item.quantity)
                        return <div key={idx} className='flex text-xs md:text-base justify-between h-24 md:h-32 rounded-lg shadow-md p-2 items-center border md:px-10'>
                            <Image src={item.img} height={50} width={50}
                            //  className='h-full w-auto'
                            />
                            <div>
                                <h1>{item.name}</h1>
                                <p>{item.size}</p>
                            </div>
                            <div className='flex items-center gap-1 md:gap-3 text-sm md:text-lg select-none'>
                                <CiSquareMinus onClick={() => { dispatch(decrementItem({ id: item.id, rate: item.rate })) }} className='md:text-2xl cursor-pointer' />
                                <p className=''>{item.quantity}</p>
                                <CiSquarePlus onClick={() => { dispatch(incrementItem({ id: item.id, rate: item.rate })) }} className='md:text-2xl cursor-pointer' />
                            </div>
                            <p className='text-red-600'>{item.rate}</p>
                            <FaRegTrashCan className='md:text-2xl cursor-pointer' onClick={() => { dispatch(deleteItem({ id: item.id })) }} />
                        </div>
                    })
                }

                <div className='flex w-4/5 mx-auto justify-end my-16'>
                    <div className='w-1/2 text-[#A4A4A4] text-lg gap-2 flex flex-col'>
                        <div className='flex justify-between '>
                            <p>Subtotal</p>
                            <p>{cartValue.value}</p>
                        </div>
                        <div className='flex justify-between'>
                            <p>Shipping</p>
                            <p>{cartValue.value > 0 ? 50 : 0}</p>
                        </div>
                        <div className='flex justify-between'>
                            <p>Tax</p>
                            <p>{cartValue.value * .02}</p>
                        </div>
                        <hr />
                        <div className='flex justify-between text-black text-2xl'>
                            <p>Order Total</p>
                            <p>{cartValue.value > 0 ? (cartValue.value + cartValue.value * .02 + 50) : 0}</p>
                        </div>
                    </div>
                </div>
                <Link className='w-2/5 mx-auto' href={'/checkout'}>
                    <button className='bg-primaryGreen text-white w-full py-4 rounded-lg'>Checkout</button>
                </Link>
            </div>
        </>
    )
}

export default Cart