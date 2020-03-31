import React from 'react'
import Monsters from './Monsters'
import { Route, Switch, Redirect } from "react-router-dom"
import Info from './Info'


function Main(){


    return(
        <main>
            <Switch>
            <Route exact path="/" component={Monsters} />
            <Route path='/Info/:id'
             render={routerProps => <Info {...routerProps} />}/>
            <Redirect to="/" />
           

     
            </Switch>
        </main>
    )
}


export default Main