import React, { useState } from 'react'

export default function NavBar({open, setOpen,location, finland,guest}) {
    

    return (
        <>
        <nav className=' shadow-lg w-full justify-between items-center hidden md:flex'>
            <img className='w-32 h-32 ms-4' src="./public/logo.beef9462.svg" alt="" />
            <div className='bg-white shadow-lg rounded-lg me-4 h-12 flex' onClick={()=>setOpen(!open)}>
                <button className='border-e-[1px] border-gray-300 h-full px-5 flex items-center font-bold' >{finland}</button>
                <button className='h-full px-5 text-gray-400 border-e-[1px] flex  items-center' >{guest}</button>
                <button className='h-full px-5 items-center' >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-6">
                        <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </nav>
        <nav className='flex-col shadow-lg w-full  items-center md:hidden pb-2'>
        <img className='w-32 h-32 ms-4' src="./public/logo.beef9462.svg" alt="" />
        <div className='bg-white shadow-lg rounded-xl h-16 flex mx-auto border border-black/30 w-3/5
        ' onClick={()=>setOpen(!open)}>
            <button className='border-e-[1px] border-gray-300 h-full px-5 flex items-center font-bold' >{finland}</button>
            <button className='h-full px-5 text-gray-400 border-e-[1px] flex  items-center' >{guest}</button>
            <button className='h-full px-5 items-center' >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-6">
                    <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                </svg>
            </button>
        </div>
    </nav>
    </>
    )
}
