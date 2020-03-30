import React, { useState,useContext, createContext} from "react"
import { Link } from "react-router-dom"

function Header(){

    const [searchTerm, setSearchTerm] = React.useState("");

   
    const handleChange = e => {
       setSearchTerm(e.target.value);
       
     };
   
   
     console.log('Header - [searchTerm]',searchTerm)




    return(
      <Link to='/'>
        <div className='header'>
      
        <h4>MHAPPLOGO</h4>

           <form>  
              <input
              type='text'
              placeholder='Search Monster'
              onChange={handleChange}
              value={searchTerm}
              />
           </form>
    </div>
     </Link>
        
    )
}


export default Header;