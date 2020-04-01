import React from 'react'

function Monster(props){
    console.log('Monster - props',props)

    const monsterDetail = props.monsters.filter((monster)=>{
        // console.log('monsterDetail - monster',monster)

       if(monster.id === props.match.params.id){
           return(
              <h4>{monster.name}</h4>
            )
       }
    }
   
    )

    return(
    <h4>{monsterDetail}</h4>
    )
}

export default Monster