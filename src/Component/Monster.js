import React, { useContext } from 'react'
import {MonstersContext} from '../context/MonstersContext'

function Monster(){
    const monsterData = useContext(MonstersContext)

    return(
    <>
    <h4>{MonstersContext.name}</h4>
    </>
    )
}

export default Monster