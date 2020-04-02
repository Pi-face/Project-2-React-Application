import React, {useState} from 'react'
import {Link} from 'react-router-dom'

function Monsters(props){
// console.log('MONSTERS - props',props)
const [inputName, setInputName] = useState('')

const largeMonsters = props.monsters.filter( (monster) =>{
    if(monster.type === 'large'){
        return monster
    }
})
// console.log('MONSTERS - LARGEMONSTERS',largeMonsters)
const handleSearch = monsterName => {
    setInputName(monsterName)
}



const monsterGallery = largeMonsters.map((monster,index)=>{
    
let nameCheck = monster.name.replace (' ', '_',)

const monsterIcon = require(`../monsters/${nameCheck}.png`)
              
        return(
        <Link key={index}  to={`/Monster/${monster.name}`}>
        <div className='Monsters'>
        <img className='MonsterImages' alt='Image Here' src={monsterIcon} />
        <h4 className='mname'>{monster.name}</h4>
        </div>
        </Link>  )  
                         
} )


if(inputName){
    const monsterGallery = largeMonsters.map((monster,index)=>{
    
        let nameCheck = monster.name.replace (' ', '_',)
        
        const monsterIcon = require(`../monsters/${nameCheck}.png`)
                      
                return(
                <Link className='mname' key={index}  to={`/Monster/${monster.name}`}>
                <div className='Monsters'>
                <img className='MonsterImages' alt='Image Here' src={monsterIcon} />
                <h4 className='mname'>{monster.name}</h4>
                </div>
                </Link>  )  
                                 
        } )




}


else{
    
    return(
        <h4>{monsterGallery}</h4>
    )

}








}


export default Monsters