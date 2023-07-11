import React, { useEffect, useState } from 'react'
import './Navbar.css'

function Navbar() {

  const [show,handleShow]=useState(false)

  useEffect(()=>{

    window.addEventListener('scroll',()=>{

      if(window.scrollY>100){
        handleShow(true)
      } else {
        handleShow(false)
      }

      //remove listner

      return ()=>{
       window.removeEventListener('scroll')
      }

    })

  },[] )


  return (

    <div className={`nav ${show && 'nav_black'}`}>

      <img
      className='nav_logo'
      src='https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png'
      alt='Netflix Logo'
       />


        
    </div>
  )
}

export default Navbar