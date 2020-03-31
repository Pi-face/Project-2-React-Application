import React,{ useEffect,useState } from "react"


function Info(){

    const [monster, setMonster] = useState([]);
    useEffect(()=>{
        const monsterUrl = 'https://mhw-db.com/monsters';
        const makeApiCall = async() =>{
            const res = await fetch(monsterUrl)
            const json = await res.json()
            setMonster(json)
            console.log('Info - Json',json)
           
        }
        makeApiCall()
    },[] )
 

    return(
        <>
        <h4>name</h4>
        </>
    )
}


export default Info