import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import $ from  'jquery';
import home_banner_1 from  '../img/englishHome/home_banner_1.jpg';
import home_banner_2 from  '../img/home/home_banner_2.jpg';
import box1 from  '../img/home/box1.jpg';
import box2 from  '../img/home/box2.jpg';
import box3 from  '../img/home/box3.jpg';
import box4 from  '../img/home/box4.jpg';
import box5 from  '../img/home/box5.jpg';
import dot from '../img/home/dot.png';
import google_jpg from '../img/englishHome/google.jpg';
import facebook from '../img/home/facebook.jpg';
import inmobi_jpg from '../img/home/inmobi.jpg';
import ucads_jpg from '../img/home/ucads.jpg';
import toutiao_jpg from '../img/englishHome/toutiao.jpg';
import tiktok_jpg from '../img/home/tiktok.jpg';
import Form from '../shareComponent/form';
import email from '../img/home/email.png';

export default function Home(){

useEffect( () =>{
    let $bannerWrap = $('.banner_wrap');
    $bannerWrap.css('height', '85vh');
    let $oUl = $('.banner_wrap').find('ul');
    $oUl.get(0).appendChild($oUl.get(0).firstElementChild.cloneNode(true));
    let timer = null;
    let $aLi = $oUl.find('li');
    let $span = $('.banner_wrap').find('span');
    let oneWidth = $aLi.eq(0).width();
    let iNow = 0;
    let iNow2 = 0;
    let $prev = $('.prev');
    let $next = $('.next');
    
    $oUl.css('width',(oneWidth * $aLi.length)+'px');
    
    function toRun(){
        if(iNow === $aLi.length-1){
            iNow=1;
            $oUl.css('left',0);   
        }else{
            iNow++;
        }

        if (iNow2 === $span.length -1){
            iNow2 = 0;
        }else{
            iNow2++;
        }
        $oUl.animate({left : -oneWidth * iNow},500);
        $span.removeClass('active');
        $span.eq(iNow2).addClass('active');
    }
    function toBack(){
        
        if(iNow === 0){
            iNow=$aLi.length-2;
            $oUl.css('left',(-oneWidth * ($aLi.length-1))+'px');   
        }else{
            iNow--;
        }
        $oUl.animate({left : -oneWidth * iNow},500);
        $span.removeClass('active');
        $span.eq(iNow).addClass('active');
    }
    
    timer = setInterval(toRun, 3000);
    
    $prev.hover(function(){
        $next.removeClass('on');
        $(this).addClass('on');
        clearInterval(timer);
    },function(){
        $(this).removeClass('on');
        $next.addClass('on');
        timer = setInterval(toRun, 3000);
    })
    $next.hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(toRun, 3000);
    })
    
    $next.on('click',toRun);
    $prev.on('click',toBack);
    
    $span.hover(function(){
        iNow2 = iNow = $span.index(this);
        $span.removeClass('active');
        $(this).addClass('active');
        clearInterval(timer);
        $oUl.animate({left : -oneWidth * iNow},500);

    }, function(){
        timer = setInterval(toRun, 3000);
    });

    (function(){
        $aLi = $('.main ul').find('li');
        $aLi.hover(function(){
            $aLi.eq(0).find('.mask').css('background', '#000');
            $aLi.eq(0).find('.line').css('display', 'none');
            $(this).find('.mask').css('background', 'rgba(32, 56, 100, 0.41)');
            $(this).find('a').css('transform', 'scale(0.8)');
            $(this).find('.line').css('display', 'block');
        }, function(){
            $(this).find('.mask').css('background', '#000');
            $(this).find('a').css('transform', 'scale(1)');
            $(this).find('.line').css('display', 'none');
        });
    })();
    

    let $aPartner = $('.partner').find('li');
    $aPartner.hover(function(){
    $($aPartner).find('.mask').css('display', 'block');
    $(this).find('.mask').css('display', 'none');
    }, function(){});

    return () =>{
        $('#homeContent').parent().remove('#homeContent');
    }
}, []);
    return (
        <section id="homeContent">
            <div className="banner"> 
                <div className="banner_wrap">
                    <ul>
                        <li><img src={home_banner_1} alt="home_banner图" /></li>
                        <li><img src={home_banner_2} alt="home_banner图" /></li>
                        <li><img src={home_banner_2} alt="home_banner图" /></li>
                        <li><img src={home_banner_1} alt="home_banner图" /></li>
                        <li><img src={home_banner_2} alt="home_banner图" /></li>
                    </ul>
                    <p>One-stop Digital Marketing & Advertising Solution Provider</p>
                    <div className="prev">&lt;</div>
                    <div className="next on">&gt;</div>
                    <span className="active"></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span> 
                </div>                                                   
            </div>
            <div className="wrap">
                <div className="main">
                    <h3 className = "main_h3">Based on our years of experience in games, e-commerce,  applications and other industries, <br/> CLICKSMOBI Helps companies to thrive both in China and overseas countries.</h3>
                    <ul style={{marginBottom:0}}>
                        <li>
                            <img src={box1}  alt="图片1" />
                            <div className="mask" style={{background: "rgba(32, 56, 100, 0.41)"}}></div>
                            <Link  to='/englishBranding' style={{transform:"scale(0.8)"}}>Branding</Link>
                            <div className="line" style={{display: "block"}}></div>
                        </li>
                        <li>
                            <img src={box2} alt="图片2" />
                            <div className="mask"></div>
                            <Link to='/englishGame'>Game</Link>
                            <div className="line"></div>
                        </li>
                        <li>
                        <img src={box3} alt="图片3" />  
                            <div className="mask"></div>
                            <Link to='/englishApp'>APP</Link>
                            <div className="line"></div>
                        </li>
                        <li>
                            <img src={box4} alt="图片4" />
                            <div className="mask"></div>
                            <Link to='/englishEcommerce'>E-commerce</Link>
                            <div className="line"></div>
                        </li>
                        <li>
                            <img src={box5} alt="图片5" />
                            <div className="mask"></div>
                            <Link to='/englishCreativeShortVideo'>Creative Short Video</Link>
                            <div className="line"></div>
                        </li>
                        <li>
                            <div className="more" style={{
                                backgroundImage:`url(${dot})`,
                                backgroundPosition:`center center`,
                                backgroundRepeat:`no-repeat`   
                            }}></div>
                        </li>
                    </ul>
                </div>
                <div className="partner" id="englishPartmer">
                    <p className="intro" id="partmer_intro" >Aggregating myriad online platforms and key medias as our strategic partner（Google ads，Facebook Ads, Twitter ads, Inmobi, ,Line, Tiktok, Toutiao, UC Ads and more Chinnese social medias），CLICKSMOBI can combine multi-media advantages and provide effect-oriented advertising optimization for advertisers , which greatly reduce the cost of advertising.</p>
                    <ul style={{marginBottom:0}}>
                        <li>
                            <img src={toutiao_jpg} alt="toutiao_jpg" />
                            <div className="mask" ></div>
                            <Link to='/ChineseTopMedias'>Chinese Top Medias</Link>
                        </li>
                        <li>
                            <img src={google_jpg} alt="google_jpg" />
                            <div style={{display: "none"}} className="mask"></div>
                            <Link to='/englishGoogle'>Google</Link>
                        </li>
                        <li>
                            <img src={inmobi_jpg} alt="inmobi_jpg" />
                            <div className="mask"></div>
                            <Link to='/englishInmobi'>Inmobi</Link>
                        </li>
                        <li>
                            <img src={ucads_jpg} alt="ucads_jpg" />
                            <div className="mask"></div>
                            <Link to='/englishUCAds'>UC Ads</Link>
                        </li>
                        <li>
                            <img src={facebook} alt="facebook_jpg" />
                            <div className="mask"></div>
                            <Link to='/englishFacebook'>Facebook</Link>
                        </li>
                        <li>
                            <img src={tiktok_jpg} alt="tiktok_jpg" />
                            <div className="mask"></div>
                            <Link to='/englishTikTok'>TikTok Ads</Link>
                        </li>
                        <li>
                            <div className="more" style={{
                                backgroundImage:`url(${dot})`,
                                backgroundPosition:`center center`,
                                backgroundRepeat:`no-repeat`   
                            }}></div>
                        </li>    
                    </ul>
                </div>
                <div className="information">
                    <h2>Start your <br/> Business in China <br/>in Just a few steps</h2>
                    <p>If you are interested in more details about our solutions or any suggestions, <br/>please contact us via
                        <a href="mailto:clicksmobi@imygbs.com" style={{
                                    backgroundImage:`url(${email})`,
                                    backgroundPosition:`0 0`,
                                    backgroundRepeat:`no-repeat`,
                                    backgroundSize:'13.36898%'    
                                }}>clicksmobi@imygbs.com
                        </a>or leave your massage here:
                    </p>
                    <Form />
            </div> 
            </div>
        </section>
    );
}