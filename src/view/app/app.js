import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import $ from  'jquery';
import app_banner from  '../img/home/home_banner_1.jpg';
import server_content from '../img/game/server_content.jpg';
import pic1_small from '../img/game/pic1_small.png';
import pic2 from '../img/game/pic2.png';
import pic3 from '../img/game/pic3.png';
import pic4 from '../img/game/pic4.png';
import app1 from '../img/app/1.png';
import app2 from '../img/app/2.png';
import app3 from '../img/app/3.png';
import app4 from '../img/app/4.png';
import app5 from '../img/app/5.png';
import app1_blur from '../img/app/1_blur.png';
import app2_blur from '../img/app/2_blur.png';
import app3_blur from '../img/app/3_blur.png';
import app4_blur from '../img/app/4_blur.png';
import app5_blur from '../img/app/5_blur.png';
import iWorksPrev from '../img/game/iWorksPrev.png';
import iWorksNext from '../img/game/iWorksNext.png';
import more from '../img/game/more.png';
import app_advs from '../img/app/advs.jpg';

export default function App(){
    useEffect( () =>{
        let $appBanner = $('.appBanner');
        $appBanner.css('height', '85vh');

        let $appAdvantage_li = $('.app_advantage_wrap').find('li');
            $appAdvantage_li.hover(function(){
                $(this).find('img').css({
                    'transform': 'scale(0.35)',
                    'top': '0.075rem',
                    'transition': '0.5s'
                });
                $(this).find('div').css({
                    'top':'0.38rem',
                    'transition': '0.5s'
                })
                $(this).find('span').css({
                    'display': 'block',
                    'transition': '0.8s'
                });
                $(this).find('p').css({
                    'display': 'block',
                    'transition': '1s'
                });
            },
            function(){
                $(this).find('img').css({
                    'transform': 'scale(1)',
                    'top': '0.2rem',
                    'transition': '0.5s'
                });
                $(this).find('div').css({
                    'top':'0.62777778rem',
                    'transition': '0.5s'
                })
                $(this).find('span').css({
                    'display': 'none',
                    'transition': '0.5s'
                });
                $(this).find('p').css({
                    'display': 'none',
                    'transition': '0.5s'
                });
            });

            let appExampleList=document.getElementById("app_example_list");
            let appExampleLi=appExampleList.children;
            let appExamplePrev=document.getElementById("app_example_prev");
            let appExampleNext=document.getElementById("app_example_next");
            let arr=[];
            let timer = null;
            for(let i=0;i<appExampleLi.length;i++){
                let oSpan=appExampleLi[i].children[0];
                arr[i]={
                        left:getStyle(appExampleLi[i],"left"),
                        opacity:getStyle(appExampleLi[i],"opacity"),
                        scale:getStyle(appExampleLi[i],"transform"),
                        zIndex:getStyle(appExampleLi[i],"z-index"),
                        alpha:getStyle(oSpan,"opacity")
                };
            }
            timer = setInterval(function(){
                arr.unshift(arr.pop());
                toStyle();
               
            }, 2000);
            appExamplePrev.addEventListener('mouseover', function(){
                clearInterval(timer);
            });
            appExamplePrev.addEventListener('mouseout', function(){
                timer = setInterval(function(){
                    arr.push(arr.shift());
                    toStyle(); 
                }, 2000);
            });
            appExampleNext.addEventListener('mouseover', function(){
                clearInterval(timer);
            });
            appExampleNext.addEventListener('mouseout', function(){
                timer = setInterval(function(){
                    arr.unshift(arr.pop());
                    toStyle(); 
                }, 2000);
            });
            appExamplePrev.onclick=function(){
                clearInterval(timer);
                arr.push(arr.shift());
                toStyle();
            };
            appExampleNext.onclick=function(){
                clearInterval(timer);
                arr.unshift(arr.pop());
                toStyle();
            };
            function toStyle(){
                for(let i=0;i<appExampleLi.length;i++)
                {
                    let oSpan=appExampleLi[i].children[0];
                    appExampleLi[i].style.left=arr[i].left;
                    appExampleLi[i].style.opacity=arr[i].opacity;
                    appExampleLi[i].style.transform=arr[i].scale;	
                    appExampleLi[i].style.zIndex=arr[i].zIndex;	
                    oSpan.style.opacity=arr[i].alpha;
                }	
            }
            function getStyle(obj,attr){
                if( obj.currentStyle){
                        return obj.currentStyle[attr];        
                }
                return getComputedStyle(obj)[attr];        
            }

            return () =>{
                $('#appContent').parent().remove('#appContent');
            }
    }, []);
    return (
        <section id="appContent">
            <div className="appBanner">
                <img src={app_banner} alt="banner图" />
            </div>
            <div className="app_wrap">
                <div className="app_advantage">
                    <h2>服务优势</h2>
                    <div className="app_line"></div>
                    <h3>服务工具app行业多年，专业与专注</h3>
                    <div 
                        className="app_advantage_wrap"
                        style={{
                            backgroundImage:`url(${server_content})`,
                            backgroundPosition:`0 center`,
                            backgroundRepeat:`no-repeat`,
                            backgroundSize:'contain'   
                        }}
                    >
                        <ul>
                            <li>
                                <img src={pic1_small} alt="1" />
                                <div>资深团队</div>
                                <span></span>
                                <p>植根互联网广告行业多年，经验丰富，团队稳定，快速高效响应客户需求</p>
                            </li>
                            <li>
                                <img src={pic2} alt="1" />
                                <div>立足全球市场<br /> 本地化推广</div>
                                <span></span>
                                <p>海外市场洞察，本土化广告营销服务，提高转化率</p>
                            </li>
                            <li>
                                <img src={pic3} alt="1" />
                                <div>创意素材策划</div>
                                <span></span>
                                <p>月均3000+高质量创意素材产出，真人实拍经验丰富</p>
                            </li>
                            <li>
                                <img src={pic4} alt="1" />  
                                <div>数据驱动<br />全域营销</div>
                                <span></span>
                                <p>媒体覆盖广泛，数据获取全面，实现客户洞察与精准营销</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="app_example">
                    <h2>经典案例</h2>
                    <div className="app_line"></div>
                    <h3>从创意素材制作到效果优化，助力APP高效推广</h3>
                    <div id="app_example_wrap">
                        <ul id="app_example_list">
                            <li
                                style={{
                                    backgroundImage:`url(${app1})`,
                                    backgroundRepeat:`no-repeat`,
                                    backgroundSize:'100%'   
                                }}
                            >
                                <span
                                     style={{
                                        backgroundImage:`url(${app1_blur})`,
                                        backgroundSize:'100%'   
                                    }} 
                                ></span>
                            </li>
                            <li
                                style={{
                                    backgroundImage:`url(${app2})`,
                                    backgroundRepeat:`no-repeat`,
                                    backgroundSize:'100%'    
                                }}
                            >
                                <span
                                    style={{
                                        backgroundImage:`url(${app2_blur})`,
                                        backgroundSize:'100%'   
                                    }} 
                                ></span>
                            </li>
                            <li
                                style={{
                                    backgroundImage:`url(${app3})`,
                                    backgroundRepeat:`no-repeat`,
                                    backgroundSize:'100%'   
                                }}
                            >
                                <span
                                    style={{
                                        backgroundImage:`url(${app3_blur})`,
                                        backgroundSize:'100%'   
                                    }}
                                ></span>
                            </li>
                            <li
                                style={{
                                    backgroundImage:`url(${app4})`,
                                    backgroundRepeat:`no-repeat`,
                                    backgroundSize:'100%'   
                                }}
                            >
                                <span
                                    style={{
                                        backgroundImage:`url(${app4_blur})`,
                                        backgroundSize:'100%'   
                                    }}
                                ></span>
                            </li>
                            <li
                                style={{
                                    backgroundImage:`url(${app5})`,
                                    backgroundRepeat:`no-repeat`,
                                    backgroundSize:'100%'   
                                }}
                            >
                                <span
                                    style={{
                                        backgroundImage:`url(${app5_blur})`,
                                        backgroundSize:'100%'   
                                    }}
                                ></span>
                            </li>
                        </ul>
                        <div 
                            id="app_example_prev" 
                            className="app_example_btn"
                            style={{
                                backgroundImage:`url(${iWorksPrev})`,
                                backgroundRepeat:`no-repeat`,
                                backgroundSize:'cover'   
                            }}
                        >
                            <span></span>
                            <span></span>
                        </div>
                        <div 
                            id="app_example_next" 
                            className="app_example_btn"
                            style={{
                                backgroundImage:`url(${iWorksNext})`,
                                backgroundRepeat:`no-repeat`,
                                backgroundSize:'cover'   
                            }}
                        >
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <Link className="app_example_more" to="#"><img src={more} alt="" /></Link>
                </div>
                <div className="app_partner">
                    <h2>合作伙伴</h2>
                    <img src={app_advs} alt="合作伙伴logo图" />
                </div>
            </div>
        </section>
    );
}