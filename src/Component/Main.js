import React from 'react'
import Monsters from './Monsters'
import { Route, Switch, Redirect } from "react-router-dom"
import Monster from './Monster'

function Main(){


    return(
        <main>
            <switch>
            <Route exact path="/" component={Monsters} />


     
            </switch>
        </main>
    )
}


export default Main