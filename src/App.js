import React from 'react'
import {useEffect,useState,Link} from 'react'
import Header from './Component/Header'
import Footer from './Component/Footer'


function App(){

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


        const largeMonsters = monster.filter( (monster) =>{
                 if(monster.type === 'large'){
                     return monster
                 }
             })
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const monsterData = largeMonsters.map((monster,index)=>{

                     let nameCheck = monster.name.replace (' ', '_',)
                
                     const monsterIcon = require(`./monsters/${nameCheck}.png`)
                
                    
                        return(
                            // <Link key={index}  to={`Info/${monster.id}`}>
                            <div className='Monsters'>
                               <img className='MonsterImages' alt='Image Here' src={monsterIcon} />
                               <h4 className='mname'>{monster.name}</h4>
                            </div>
                            // </Link>
                        
                         )  
                     
                 } )
                
                 return(
                     <div className='App'>
                     <Header/>
                     <h4>{monsterData}</h4>
                     <Footer/>
                     </div>
                     
                 )




}





export default App