import React, {useState, createContext} from "react"
import { Link } from "react-router-dom"






function Header(props){

     
    // const [searchTerm, setSearchTerm] = React.useState("");

 
    // const handleChange = e => {
    //    setSearchTerm(e.target.value);
    //  };

    return(
      <Link to='/'>
        <div className='header'>
               <h4>MH</h4>
              <form>  
              {/* <input
              type='text'
              placeholder='Search Monster'
              onChange={handleChange}
              value={searchTerm}
              /> */}
           </form>
    </div>
     </Link>
        
    )
}


export default Header;
