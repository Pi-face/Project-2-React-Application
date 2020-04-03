import React, {useState} from 'react'
import {Link} from 'react-router-dom'


function Monsters(props){
    
const [inputName, setInputName] = useState('')

const largeMonsters = props.monsters.filter( (monster) =>{
    if(monster.type === 'large'){
        return monster
    }
})

// if(monster.nametoLowerCase().includes(props.searchTerm))

const monsterGallery = largeMonsters.map((monster,index)=>{

if(monster.name.toLowerCase().includes(props.searchTerm)){   
     
let nameCheck = monster.name.replace (' ', '_',)

const monsterIcon = require(`../monsters/${nameCheck}.png`)
              
        return(
        <Link key={index}  to={`/Monster/${monster.name}`}>
        <div className='Monsters'>
        <img className='MonsterImages' alt='Image Here' src={monsterIcon} />
        <h4 className='mname'>{monster.name}</h4>
        </div>
        </Link>  )  
                         
} })

    return(
        <h4>{monsterGallery}</h4>
    )
}


export default Monsters