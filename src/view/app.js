import React from "react";
import {connect} from 'react-redux';
import MainHeader from "./main-header";
import RounterIndex from "../router/router";
import MainFooter from "./main-footer";
import EnglishRouter from '../router/englishRouter';
import EnglishHeader from './english-header';

function App(props){  
    return ( 
        props.version ==='chinese' ?(
                <>
                    <MainHeader/>
                    <RounterIndex />
                    <MainFooter/>
                </> 
            
        ) : (
                <>
                <EnglishHeader />
                <EnglishRouter />
                </> 
        )   
             
    );
}

export default connect(state =>state)(App);