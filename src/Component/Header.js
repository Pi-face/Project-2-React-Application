import React, { createContext } from 'react'
import {useState,useEffect,useContext} from 'react'

function Header(){

  const seachValue = createContext()

  const [searchTerm, setSearchTerm] = React.useState("");
 

  const handleChange = e => {
    setSearchTerm(e.target.value);
    
  };


  console.log('Header - [searchTerm]',searchTerm)



    return(
        <div className='header'>
        <h4>MHAPP</h4>
          <form>  
             <input
             type='text'
             placeholder='Search Monster'
             onChange={handleChange}
             value={searchTerm}
             />
          </form>
        </div>
    )
}

export default Header
