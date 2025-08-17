import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Tour from "./Tour";

const App = () => {
  const[loading,setLoading]=useState(true);
  const[tours,setTours]=useState([]);

  if(loading){
    return <Loading/>
  }

  

  const fetchtours=async()=>{
    setLoading(true)
    try{
      const response=await fetch("https://course-api.com/react-tours-project")
      const data= await response.json();
      setTours(data)
      setLoading(false)
    }
    catch(error){
      console.log(error)
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
        <div>
          <p>No tours left</p>
          <button onClick={fetchtours}>Refresh</button>
        </div>
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
