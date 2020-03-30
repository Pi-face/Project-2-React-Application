import React from 'react'
import {createContext,useState,useEffect} from "react";

export const MonstersContext = createContext();

export const MonstersProvider = ({children}) =>{

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
    
console.log('Large-Monsters',largeMonsters)

    return(
        <MonstersContext.Provider
         value={{largeMonsters,monster}}>
               {children}
        </MonstersContext.Provider>
    )



}


