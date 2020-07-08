import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import $ from  'jquery';
import game_banner from  '../img/home/home_banner_1.jpg';
import server_content from '../img/game/server_content.jpg';
import pic1_small from '../img/game/pic1_small.png';
import pic2 from '../img/game/pic2.png';
import pic3 from '../img/game/pic3.png';
import pic4 from '../img/game/pic4.png';
import example1 from '../img/game/example1.png';
import example2 from '../img/game/example2.png';
import example3 from '../img/game/example3.png';
import example1_blur from '../img/game/example1_blur.png';
import example2_blur from '../img/game/example2_blur.png';
import example3_blur from '../img/game/example3_blur.png';
import iWorksPrev from '../img/game/iWorksPrev.png';
import iWorksNext from '../img/game/iWorksNext.png';
import more from '../img/game/more.png';
import game_friends from '../img/game/friends.jpg';

export default function Game(){
    useEffect( () =>{
        let $gameBanner = $('.gameBanner');
        $gameBanner.css('height', '85vh');

        let $gameAdvantage_li = $('.game_advantage_wrap').find('li');
            $gameAdvantage_li.hover(function(){
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

            let gameExampleList=document.getElementById("game_example_list");
            let gameExampleLi=gameExampleList.children;
            let gameExamplePrev=document.getElementById("game_example_prev");
            let gameExampleNext=document.getElementById("game_example_next");
            let arr=[];
            let timer = null;
            for(let i=0;i<gameExampleLi.length;i++){
                let oSpan=gameExampleLi[i].children[0];
                arr[i]={
                        left:getStyle(gameExampleLi[i],"left"),
                        opacity:getStyle(gameExampleLi[i],"opacity"),
                        scale:getStyle(gameExampleLi[i],"transform"),
                        zIndex:getStyle(gameExampleLi[i],"z-index"),
                        alpha:getStyle(oSpan,"opacity")
                };
            }
             timer = setInterval(function(){
                arr.unshift(arr.pop());
                toStyle(); 
            }, 2000);
            gameExamplePrev.addEventListener('mouseover', function(){
                clearInterval(timer);
            });
            gameExamplePrev.addEventListener('mouseout', function(){
                timer = setInterval(function(){
                    arr.push(arr.shift());
                    toStyle(); 
                }, 2000);
            });
            gameExampleNext.addEventListener('mouseover', function(){
                clearInterval(timer);
            });
            gameExampleNext.addEventListener('mouseout', function(){
                timer = setInterval(function(){
                    arr.unshift(arr.pop());
                    toStyle(); 
                }, 2000);
            });
            gameExamplePrev.onclick=function(){
                clearInterval(timer);
                arr.push(arr.shift()); 
                toStyle();
            };
            gameExampleNext.onclick=function(){
                clearInterval(timer);
                arr.unshift(arr.pop());
                toStyle();
            };
            function toStyle(){
                for(let i=0;i<gameExampleLi.length;i++)
                {
                    let oSpan=gameExampleLi[i].children[0];
                    gameExampleLi[i].style.left=arr[i].left;
                    gameExampleLi[i].style.opacity=arr[i].opacity;
                    gameExampleLi[i].style.transform=arr[i].scale;	
                    gameExampleLi[i].style.zIndex=arr[i].zIndex;	
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
                $('#gameContent').parent().remove('#gameContent');
            }
    }, []);
    return (
        <section id="gameContent">
            <div className="gameBanner">
                <img src={game_banner} alt="banner图" />
            </div>
            <div className="game_wrap">
                <div className="game_advantage">
                    <h2>服务优势</h2>
                    <div className="game_line"></div>
                    <h3>服务游戏行业多年，专业与专注</h3>
                    <div 
                        className="game_advantage_wrap"
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
                <div className="game_example">
                    <h2>经典案例</h2>
                    <div className="game_line"></div>
                    <h3>从创意素材制作到效果优化，助力游戏app高效推广</h3>
                    <div id="game_example_wrap">
                        <ul id="game_example_list">
                            <li
                                style={{
                                    backgroundImage:`url(${example3})`,
                                    backgroundRepeat:`no-repeat`,
                                    backgroundSize:'cover'   
                                }}
                            >
                                <span
                                     style={{
                                        backgroundImage:`url(${example3_blur})`,
                                        backgroundSize:'cover'   
                                    }} 
                                ></span>
                            </li>
                            <li
                                style={{
                                    backgroundImage:`url(${example1})`,
                                    backgroundRepeat:`no-repeat`,
                                    backgroundSize:'cover'   
                                }}
                            >
                                <span
                                    style={{
                                        backgroundImage:`url(${example1_blur})`,
                                        backgroundSize:'cover'   
                                    }} 
                                ></span>
                            </li>
                            <li
                                style={{
                                    backgroundImage:`url(${example2})`,
                                    backgroundRepeat:`no-repeat`,
                                    backgroundSize:'cover'   
                                }}
                            >
                                <span
                                    style={{
                                        backgroundImage:`url(${example2_blur})`,
                                        backgroundSize:'cover'   
                                    }}
                                ></span>
                            </li>
                        </ul>
                        <div 
                            id="game_example_prev" 
                            className="game_example_btn"
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
                            id="game_example_next" 
                            className="game_example_btn"
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
                    <Link className="game_example_more" to="#"><img src={more} alt="" /></Link>
                </div>
                <div className="game_partner">
                    <h2>合作伙伴</h2>
                    <div className="game_line"></div>
                    <img src={game_friends} alt="合作伙伴logo图" />
                </div>
            </div>
        </section>
    );
}