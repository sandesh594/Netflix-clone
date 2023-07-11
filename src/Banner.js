import React, { useEffect, useState } from 'react'
import './Banner.css'
import requests from './requests'
import axios from './axios'

function Banner() {

  const [movie,setMovie]=useState([]);
  //console.log(movie,211);

  useEffect(()=>{

    async function fetchData(){

       const request= await axios.get(requests.fetchNetflixOriginals);
      // console.log(request,23);
       setMovie(request.data.results[ 
       Math.floor(Math.random() * request.data.results.length - 1)])


      return request;

    }

    fetchData(); 

  },[])

  


  return (
   
      <header className='banner'
      style={{
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: 'center center',
        backgroundSize:'cover'
      }}
      >
        <div className='banner_contents'>
       
       
        <h1 className='banner_title'>
          
         {movie?.name || movie?.title || movie?.original_name}
        </h1>
       
        <div className='banner_buttons'>
         <button className='banner_button'>Play</button>
         <button className='banner_button'>My List</button>
         </div>

         <h1 className='banner_description'>

         {movie?.overview}


        </h1>
      </div>

      <div className='banner--fadeBottom'></div>

    </header>





    
    
  )
}

export default Banner