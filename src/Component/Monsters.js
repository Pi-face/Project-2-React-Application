import React from 'react'
import {Link} from 'react-router-dom'

function Monsters(props){
// console.log('MONSTERS - props',props)

const largeMonsters = props.monsters.filter( (monster) =>{
    if(monster.type === 'large'){
        return monster
    }
})
// console.log('MONSTERS - LARGEMONSTERS',largeMonsters)


const monsterGallery = largeMonsters.map((monster,index)=>{
// console.log('MONSTERGALLERY- monster',monster)

let nameCheck = monster.name.replace (' ', '_',)
// console.log('NAMECHECK',nameCheck)

const monsterIcon = require(`../monsters/${nameCheck}.png`)
                    
                        
        return(
        <Link key={index}  to={`/Monster/${monster.id}`}>
        <div className='Monsters'>
        <img className='MonsterImages' alt='Image Here' src={monsterIcon} />
        <h4 className='mname'>{monster.name}</h4>
        </div>
        </Link>  )  
                         
} )

return(
    <h4>{monsterGallery}</h4>
)


}


export default Monsters