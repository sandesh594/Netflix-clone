import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from './axios'

import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const base_url="https://image.tmdb.org/t/p/original/";

function Row({title,fetchUrl,isLargeRow}) {

  

    const  [movies,setMovies ]=useState([])

    const [trailerUrl,setTrailerUrl]=useState('')

    

useEffect(()=>{

    async function fetchData(){
        //axios===instance
        const request= await axios.get(fetchUrl)

       // console.log(request,89)

        setMovies(request.data.results)
        

         return request;

    }


    fetchData();

   


},[fetchUrl])

console.log(movies,'lp');


const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick=(movie)=>{



    if(trailerUrl){
      setTrailerUrl('')
    }else{

         movieTrailer(movie?.name || "")
        .then((url) =>{

          console.log(url,25);
          //https://www.youtube.com/watch?v=VIhA2A9JSOY

          const urlParams= new URLSearchParams(new URL(url).search)
          setTrailerUrl(urlParams.get("v"))  

        } )
        .catch(
        (error) => console.log(error)
        );

       

    }



  } 



  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='row_posters'>
            {movies.map((movie)=>{

                return(
                    <>

                     
                     <img key={movie.name}
                     onClick={()=>handleClick(movie)}
                      /*className={isLargeRow ? 'row_posterLarge' :'row_poster' } */
                      className={`row_poster ${isLargeRow && 'row_posterLarge'}`}

                      
                      src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path }`} 
                      alt={movie.id}/>
                     
                    </>
                )
    
            })}

        </div>

       

{trailerUrl &&  <YouTube videoId={trailerUrl} opts={opts}/>}

        
        


        </div>
  )
}

export default Row