import React,{ useEffect,useState } from "react"
import { useParams } from "react-router-dom";


function Info(){

    const [monster, setMonster] = useState([]);
    useEffect(()=>{
        const monsterUrl = 'https://mhw-db.com/monsters';
        const makeApiCall = async() =>{
            const res = await fetch(monsterUrl)
            const json = await res.json()
            setMonster(json)
            // console.log('Info - Json',json)
           
        }
        makeApiCall()
    },[] )


    const largeMonsters = monster.filter( (monster) =>{
        if(monster.type === 'large'){
            return monster
        }
    })


 let linkId = useParams();
 console.log('Info - Id',linkId)
 const filterMonsterId= largeMonsters.filter((monster) => {

    if(monster.id === linkId){
        console.log('filterMonsterId',monster)
    }
 
 
 }

 
 )


 return(
     <div className='detail'>
         <h4>Name: </h4>
         <h4>Weakness: </h4>
     </div>
 )

}



export default Info