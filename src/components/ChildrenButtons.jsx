import React from 'react'

export default function ChildrenButtons({valueChildren,setValueChildren}) {
    function increment(){
        setValueChildren(prevState=>++prevState)
    }
    function decrement(){
        if(valueChildren>= 1){
        setValueChildren(prevState=>--prevState)}
    }
  return (
    <article className='h-[112px] ms-4 md:ms-0 md:h-full'>
    <h2 className='font-bold'>Children</h2>
            <h2 className='text-gray-400'>Age 2-12</h2>
           <div className='flex gap-x-2'>
            <button className='w-8 h-8 bg-white flex items-center rounded-lg justify-center border-gray-300 border-[1px] font-bold' onClick={increment}>+</button>
            <span>{valueChildren}</span>
            <button className='w-8 h-8 bg-white flex items-center rounded-lg justify-center  border-gray-300 border-[1px] font-bold' onClick={decrement}>-</button>
            </div>
    </article>
  )
}
