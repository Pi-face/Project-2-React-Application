import React from 'react';
import {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';


function Monsters(){
    //calling monster Data
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

   
//this is the information im working with after deconstructing it down to the objects

 const largeMonsters = monster.filter( (monster) =>{
     if(monster.type === 'large'){
         return monster
     }
 })

 const monsterData = largeMonsters.map((monster,index)=>{

    //  console.log('monsterData',monster)
//Replaces all monster spaces with underscore
     let nameCheck = monster.name.replace (' ', '_',)
    //  console.log('Monsters - nameCheck',nameCheck)

     const monsterIcon = require(`../monsters/${nameCheck}.png`)

    

     
  
         return(
            <Link key={index}  to={`Info/${monster.id}`}>
            <div className='Monsters'>
               <img className='MonsterImages' alt='Image Here' src={monsterIcon} />
               <h4 className='mname'>{monster.name}</h4>
            </div>
            </Link>
        
         )  
     
 } )

 return(
     <h4>{monsterData}</h4>
 )

}



export default Monsters