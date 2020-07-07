import React from "react";
import {Switch,Route,Redirect} from "react-router-dom";
import EnglishHome from "../view/englishHome/englishHome";
export default function EnglishRouter(){
        return (
            <Switch>
                <Route path="/" exact render={()=>(<Redirect to="/index" />)}/>
                <Route path="/index" component={EnglishHome}/>
            </Switch>
        );
}