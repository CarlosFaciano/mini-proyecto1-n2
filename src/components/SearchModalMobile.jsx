import React from 'react'
import Locations from './Locations'
import AdultButtons from './AdultButtons'
import ChildrenButtons from './ChildrenButtons'

export default function SearchModalMobile({open,setOpen,value,setValue,openOption,setOpenOption,openOption2,setOpenOption2,valueAdult,setValueAdult,valueChildren,setValueChildren,HandleFilter}) {
  function Jose(){
     if(!openOption ){
        setOpenOption(!openOption)
        setOpenOption2(false)
     }
  }
  function HermanoJose(){
    if(!openOption2 ){
        setOpenOption2(!openOption2)
        setOpenOption(false)
    }
  }

  return (
    <section className='shadow-lg absolute  w-full h-[90%] bg-slate-100 top-0 md:hidden'>
    <span className='flex justify-end text-2xl cursor-pointer me-2' onClick={()=>setOpen(!open)}>&times;</span>
    <h1 className='m-4 font-bold'>Edit your search</h1>
    <div className='w-[90%] mt-2 shadow-lg rounded-xl mx-auto flex-col  bg-white'>
        <button className='flex flex-col ps-4 py-4 border-b border-gray-300 w-full ' onClick={Jose}>
            <span className='font-bold '>Location</span>
            {value}
        </button>
        <button className='flex flex-col py-4 border-e-[1px] border-gray-300 w-full ps-6' onClick={HermanoJose }>
            <span className='font-bold'>Guests</span>
            {valueAdult + valueChildren}
        </button>
    </div>
    <section className='w-[90%] flex mx-auto mt-3 '>
        {openOption &&
        <div className={`w-1/3 `}>
       <Locations
       value={value}
       setValue={setValue}
       />
       </div>
      }
    <div className='w-3/5 gap-y-2' >
      {openOption2 &&
      <>
        <AdultButtons
        
        valueAdult={valueAdult}
        setValueAdult={setValueAdult}
        />
        <ChildrenButtons
        valueChildren={valueChildren}
        setValueChildren={setValueChildren}
        />
        </>
        }
    </div>
    </section>
    <div className='flex h-2/5 items-end '>
    <button className='bg-[#eb5757] text-white font-extrabold w-1/5 flex rounded-xl h-14 mx-auto items-center mb-12' onClick={HandleFilter} >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-6 font-extrabold">
                    <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                </svg>
                Search
    </button>
    </div>
</section>
  )
}
