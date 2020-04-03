import React, {useState, createContext} from "react"
import { Link } from "react-router-dom"


function Header(props){
  
    return(
      <Link to='/'>
        <div className='header'>
               <img className='title' src='https://www.nicepng.com/png/full/158-1583415_monster-hunter-world-logo-png-monster-hunter-world.png'/>
        </div>
     </Link>
        
    )
}


export default Header;
