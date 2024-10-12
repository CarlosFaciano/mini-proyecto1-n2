import React from 'react'

export default function AdultButtons({valueAdult,setValueAdult}) {
    function increment(){
        setValueAdult(prevState=>++prevState)
    }
    function decrement(){
        if(valueAdult>= 1){
        setValueAdult(prevState=>--prevState)}
    }
  return (
    <article className='h-3/5  w-3/5'>
                        <h2 className='font-bold'>Adult</h2>
                        <h2 className='text-gray-400'>Age 13 or above</h2>
                       <div className='flex gap-x-2'>
                        <button className='w-8 h-8 bg-white flex items-center rounded-lg justify-center border-gray-300 border-[1px] font-bold' onClick={increment}>+</button>
                        <span>{valueAdult}</span>
                        <button className='w-8 h-8 bg-white flex items-center rounded-lg justify-center  border-gray-300 border-[1px] font-bold' onClick={decrement}>-</button>
                        </div>
    </article>
  )
}
