import React from 'react'
import {useEffect,useState} from 'react'
import Header from './Component/Header'
import Footer from './Component/Footer'
import {Link, Switch, Route} from 'react-router-dom'
import Monster from './Component/Monster'
import Monsters from './Component/Monsters'


function App(props){

    const [monster, setMonster] = useState([]);

        useEffect(()=>{
            const monsterUrl = 'https://mhw-db.com/monsters';
            const makeApiCall = async() =>{
                const res = await fetch(monsterUrl)
                const json = await res.json()
                setMonster(json)
                // console.log('App - Json',json)
               
            }
            makeApiCall()
        },[] )
          
                  const [searchTerm, setSearchTerm] = React.useState("")

                  const handleChange = e => {
                  setSearchTerm(e.target.value);
                 };
                  console.log('[SearchTerm]',searchTerm)
                 
                 return(
                     <div className='App'>
                         <Header/>
                           <main className='wrapper'>
                            <div>
                              <form className='inputSearch'>  
                                  <input
                                  type='text'
                                  placeholder='Search Monster'
                                  onChange={handleChange}
                                  value={searchTerm}
                                  />
                              </form>
                            </div>   
                              <Switch>
                                  <Route path='/Monster/:name'
                                   render={props => <Monster {...props} monsters={monster}/>}/>
                                  <Route exact path = '/' render={props => <Monsters monsters={monster} searchTerm={searchTerm} {...props} />}/>
                  
                              </Switch>
                          </main>
                     <Footer/>
                     </div>
                     
                 )

}


export default App