import React from "react";
import { Route,Switch } from "react-router";
// import App from "../App";
export const Router=()=>{

    return(
        <div>
            <Switch>
            <Route exact path="/"><App/></Route>
            <Route  path="/men">MEN</Route>
            </Switch>
        </div>
    )
}