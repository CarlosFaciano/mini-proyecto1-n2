import Card from './components/Card'
import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import SearchModal from './components/SearchModal'

export function App() {
  const[location, setLocation] = useState([])
  const[open,setOpen] = useState(true)
  const[finland, setFinland] = useState("Whole, Finland")
  const[guest, setGuest] = useState("Add guests")
 

  return (
    <>
       <NavBar
        guest={guest}
        finland={finland}
        open={open}
        setOpen={()=>setOpen(!open)
        }
       />
       {!open &&
       <SearchModal
       setGuest={setGuest}
       setFinland={setFinland}
       location={location}
       setOpen={setOpen}
       setLocation={setLocation}
       />
       }
       <div className='flex justify-between'>
         <h2 className="font-bold text-2xl m-4 text-blue-950">Stays in finland</h2>
         <h2 className='m-4 font-bold'>{location.length} Stays</h2>
       </div>
       <div className='flex flex-wrap justify-evenly'>
       
      {
        
       location.map((hotel)=>{
        return(<Card 
          key={hotel.title} 
          title={hotel.title} 
          photo={hotel.photo} 
          rating={hotel.rating}
          type={hotel.type}
          beds={hotel.beds}
          superHost={hotel.superHost}
          maxGuests={hotel.maxGuests}
          city={hotel.city}

          />) 
         
      })
      }
      </div>
      
      <FetchData 
      location={location}
      setLocation={setLocation}/>
    </>
  )
}

export function FetchData({setLocation,location}){
 useEffect(()=>{
  axios.get("./stays.json")
  .then((data)=>setLocation(data.data))
 },[])
 
  
}


export default App
