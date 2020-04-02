import React from 'react'
import {useState} from 'react'

const Monster = (props) =>{

    console.log('Monster - props',props)
    const [monsterData,setmonsterData] = useState([]);

    if(props? true: false){
        const filteredMonsters = props.monsters.filter((monster)=>monster.name === props.match.params.name)[0]
    
         
            // const newMonster = filteredMonsters[0]
              console.log('FILTERED MONSTERS',filteredMonsters && filteredMonsters.name)
            // console.log('filteredMonsters',newMonster)
            // const filteredMonsters = props.monsters.filter((monster, index) => monster.id == props.match.params.id)[0];
            
            return(
            <div>
            <h4>{filteredMonsters && filteredMonsters.name}</h4>
            <h4>{filteredMonsters && filteredMonsters.description}</h4>
            <h4>{filteredMonsters && filteredMonsters.location}</h4>
            <h4>{filteredMonsters && filteredMonsters.weaknessess}</h4>
            </div>
            )
           
    }else{
        return(
            <h1>LOOOOOADING</h1>
        )
    }


}

export default Monster