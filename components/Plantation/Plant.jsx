'use client';
import React from 'react'
import Image from 'next/image';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { UseDispatch, useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../redux/features/cartSlice';
import { FaCloudDownloadAlt } from 'react-icons/fa';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    // width: '80%',
    transform: 'translate(-50%, -50%)',
    outline: 'none',
    // width: '40%',
    // bgcolor: 'white',
    // p: 4,
};

function Plant({ img, name, rate, category, deliver, tag, id }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const dispatch = useDispatch()
    function addToCart() {
        dispatch(addItem({
            id: id,
            name: name,
            img: img,
            rate: parseInt(rate, 10),
            // size: details.size
        }))
        handleClose()
    }
    return (
        <>
            <div className='select-none'>
                <div className='rounded-3xl w-full focus:outline-none shadow-lg flex cursor-pointer h-[28rem] justify-between flex-col p-1 items-center space-y-4'>
                    <div onClick={handleOpen} className='flex flex-col gap-4'>
                        <img src={img} alt={name} className='h-full w-full' />
                        <h1 className='text-[rgb(59,99,20)] w-full text-left'>{name}</h1>
                        <p className='text-[#DC0303] w-full text-left text-xs'>₹{rate}</p>
                        <p className="text-gray-700 w-full text-left text-xs flex items-center">
                        <FaCloudDownloadAlt size={20} color="#0000FF" />
                        <span className="ml-2">Digital Download</span>
                        </p>
                    </div>
                    <button onClick={addToCart} className='rounded-full border border-[#5F8638] text-[#5F8638] w-full p-2 hover:bg-[#5F8638] hover:text-white'>Add to cart →</button>
                </div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    sx={{
                        backdropFilter: 'blur(5px)',
                        outline: 'none'
                    }}
                >
                    <Box sx={style}>
                        <div className='w-[90vw] md:w-[70vw] lg:w-[40vw] shadow-xl bg-white rounded-3xl border mx-auto flex flex-col items-center text-left gap-7 px-10 py-5'>
                            <Image src={img} width={200} height={200} alt={name} ></Image>
                            <h1 className='w-full text-center text-2xl font-bold'>{name}</h1>
                            <p className='w-full'><strong>Category:</strong>{category}</p>
                            <p className='w-full'><strong>Deliver:</strong>{deliver}</p>
                            {/* <p className='w-full'><strong>Tag:</strong>{tag}</p> */}
                            {/* <p className='w-full'>{details.extra}</p> */}
                            <div className='w-full flex justify-end items-center gap-4'>
                                <p className='text-[#DC0303]'>₹{rate}</p>
                                <button onClick={addToCart} className='rounded-full border bg-[#5F8638] text-white w-2/3 md:w-1/3 p-2'>Add to cart --{'>'}</button>
                            </div>
                        </div>
                    </Box>
                </Modal>
            </div >
        </>
    )
}

export default Plant


