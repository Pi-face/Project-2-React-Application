import React from 'react'
import {useEffect,useState } from 'react';


const monsterIcon = require('../monsters/Acidic_Glavenus_thumb.png')

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

     console.log('monsterData',index)
//Replaces all monster spaces with underscore
     let nameCheck = monster.name.replace (' ', '_',)
     console.log('Monsters - nameCheck',nameCheck)

     const monsterIcon = require(`../monsters/${nameCheck}.png`)

     
     if(index){
         return(
            <div className='Monsters' key={index}>
               <img className='MonsterImages' src={monsterIcon} />
               <h4>{monster.name}</h4>
            </div>
         )  
     }
 } )

 return(
     <h4>{monsterData}></h4>
 )

}



export default Monsters