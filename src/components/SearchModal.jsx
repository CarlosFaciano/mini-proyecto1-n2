import React, { useState } from 'react'
import AdultButtons from './AdultButtons'
import ChildrenButtons from './ChildrenButtons'
import Locations from './Locations'
import SearchModalMobile from './SearchModalMobile'
export default function SearchModal({open,setOpen,location,setLocation,finland, setFinland,setGuest}) {
    const[value,setValue] = useState("Whole, Finland")
    const[valueAdult,setValueAdult] = useState(0)
    const[valueChildren,setValueChildren] = useState(0)
    const[openOption,setOpenOption] = useState(false)
    const[openOption2, setOpenOption2] = useState(false)
    const[style,setStyle] = useState("invisible")
    
    function HandleFilter(e){
        e.preventDefault
      
       const copy = [...location]
       const index= copy.filter((data)=>valueAdult + valueChildren !== 0 && value !== "Whole, Finland" ? data.city === value && data.maxGuests >= valueAdult + valueChildren  : data.city === value && (data.maxGuests >= valueAdult + valueChildren )  )
       setLocation(index)
       setFinland(value + ", Finland")
       setGuest(valueAdult + valueChildren)
       setOpen(!open)
       console.log(index)
    }
    function Guests(){
        setOpenOption2(!openOption2)
        setStyle("invisible")
    }
    function Location(){
        setStyle("visible")
        if(!openOption){
        setOpenOption2(false)
        }
    }
    return (
        <>
        {/* desktop and tablet */}
        <section className='shadow-lg absolute  w-full h-2/3 bg-slate-100 top-0 hidden md:block'>
            <span className='flex justify-end text-2xl cursor-pointer me-2' onClick={()=>setOpen(!open)}>&times;</span>
            <h1 className='m-4 font-bold'>Edit your search</h1>
            <div className='w-[90%] mt-2 shadow-lg rounded-xl mx-auto flex  bg-white'>
                <button className='flex flex-col ps-4 py-4 border-e-[1px] border-gray-300 w-3/5' onClick={Location }>
                    <span className='font-bold '>Location</span>
                    {value}
                </button>
                <button className='flex flex-col py-4 border-e-[1px] border-gray-300 w-full ps-6' onClick={Guests}>
                    <span className='font-bold'>Guests</span>
                    {valueAdult + valueChildren}
                </button>
                <button className='bg-[#eb5757] text-white font-extrabold w-2/5 flex items-center rounded-e-xl' onClick={HandleFilter} >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-6 font-extrabold">
                        <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                    </svg>
                    Search</button>
            </div>
            <section className='w-[90%] flex mx-auto mt-3'>
                <div className={`w-1/3  ${style}`}>
                
               <Locations
               value={value}
               setValue={setValue}
               />
               </div> 

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
        </section>
        {/* mobile */}
        <SearchModalMobile
        value={value}
        setValue={setValue}
        valueAdult={valueAdult}
        setValueAdult={setValueAdult}
        valueChildren={valueChildren}
        setValueChildren={setValueChildren}
        openOption={openOption}
        setOpenOption={setOpenOption}
        openOption2={openOption2}
        setOpenOption2={setOpenOption2}
        HandleFilter={HandleFilter}
        finland={finland}
        setGuest={setGuest}
        location={location}
        setLocation={setLocation}
        setOpen={setOpen}
        />
    </>
    )
}
