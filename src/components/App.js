import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Tour from "./Tour";
import "regenerator-runtime/runtime";
import data from "./data.json"


const App = () => {
  const[loading,setLoading]=useState(true);
  const[tours,setTours]=useState([]);

  

  const fetchtours=async()=>{
    setLoading(true)
    try{
      console.log(data)
      setTours(data)
      setLoading(false)
    }
    catch(error){
      console.log(error)
      setLoading(false)
    }
    finally{
      setLoading(false)
    }
     
  }
 
  useEffect(()=>{
    fetchtours();
  },[])

  const removeTour=(id)=>{
     const newtours=tours.filter((tour)=>tour.id!==id)
     setTours(newtours);

  }

  if(tours.length===0){
    return(
        <main>
          <p>No tours left</p>
          <button onClick={fetchtours}>Refresh</button>
        </main>
    )
  }

    return(
      <main id="main">
        {tours.map((tour)=>(
          <Tour key={tour.id} {...tour} removeTour={removeTour}/>
        ))
      }
      </main>
    )
}
export default App;
