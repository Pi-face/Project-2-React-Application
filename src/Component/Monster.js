import React from 'react'

function Monster(props){
    console.log('Monster - props',props)

    const filteredMonsters = props.monsters.filter((monster)=>
    monster.id == props.match.params.id)

    // const park = props.parks.filter(park => park.name === props.match.params.name)
    console.log('filteredMonsters',filteredMonsters)

    
    return(
    <h4>{}</h4>
    )

}

export default Monster