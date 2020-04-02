import React, {useState} from "react"
import { Link } from "react-router-dom"

function Header(props){

    const [searchTerm, setSearchTerm] = React.useState("");

   
    const handleChange = e => {
       setSearchTerm(e.target.value);
     };
     const handleSubmit = () => {
         props.handleNameFromMonsters(searchTerm)
     }
   
   
     console.log('Header - [searchTerm]',searchTerm)




    return(
      <Link to='/'>
        <div className='header'>
      
        <h4>MH</h4>

           <form>  
              <input
              type='text'
              placeholder='Search Monster'
              onChange={handleChange}
              value={searchTerm}
              />
              <button className='button' onClick={handleSubmit}></button> 
           </form>
    </div>
     </Link>
        
    )
}


export default Header;