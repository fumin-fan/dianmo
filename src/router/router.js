import React from "react";
import {Switch,Route,Redirect} from "react-router-dom";
import Home from "../view/home/home";
import ContactUs from "../view/contactUs/contactUs";
// import Media from "../view/media/media";
import News from "../view/news/news";
import Artical from "../view/artical/artical";
import About from "../view/about/about";
/* import EnglishHome from "../view/englishHome/englishHome"; */
import Branding from "../view/branding/branding";
import Game from "../view/game/game";
import App from "../view/app/app";
import Ecommerce from "../view/E-commerce/E-commerce";
import CreativeShortVideo from "../view/CreativeShortVideo/CreativeShortVideo";
import Google from "../view/google/google";
import Facebook from "../view/facebook/facebook";
import Inmobi from "../view/inmobi/inmobi";
import UcAds from "../view/ucAds/ucAds";
import Toutiao from "../view/toutiao/toutiao";
import Tiktok from "../view/tiktok/tiktok";
import Jobs from '../view/jobs/jobs';
export default function RouterIndex(){
        return (
            <Switch>
                <Route path="/" exact render={()=>(<Redirect to="/index" />)}/>
                <Route path="/index" component={Home}/>
                <Route path="/contactUs" component={ContactUs}/>
                {/* <Route path="/media" component={Media} />*/}
                <Route path="/news" component={News} /> 
                <Route path="/artical" component={Artical}/> 
                <Route path="/about" component={About}/>
                {/* <Route path="/englishHome" component={EnglishHome}/> */}
                <Route path="/branding" component={Branding}/>
                <Route path="/game" component={Game}/>
                <Route path="/app" component={App}/>
                <Route path="/E-commerce" component={Ecommerce}/>
                <Route path="/CreativeShortVideo" component={CreativeShortVideo}/>
                <Route path="/google" component={Google}/>
                <Route path="/facebook" component={Facebook}/>
                <Route path="/inmobi" component={Inmobi}/>
                <Route path="/ucAds" component={UcAds}/>
                <Route path="/toutiao" component={Toutiao}/>
                <Route path="/tiktok" component={Tiktok}/>
                <Route path="/jobs" component={Jobs}/>
            </Switch>
        );
}