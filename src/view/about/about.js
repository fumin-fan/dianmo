import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import $ from  'jquery';
import about_banner from  '../img/about/about_banner.jpg';
import bg from '../img/about/bg.jpg';
import span_bg from '../img/about/span_bg.jpg';
import dot from '../img/about/dot.png';
import photo from '../img/about/photo.png';
import photo1 from '../img/about/photo1.jpg';
import photo2 from '../img/about/photo2.jpg';
import photo3 from '../img/about/photo3.jpg';
import photo4 from '../img/about/photo4.jpg';
import photo5 from '../img/about/photo5.jpg';
import photo6 from '../img/about/photo6.jpg';
import photo7 from '../img/about/photo7.jpg';
import iWorksPrev from '../img/game/iWorksPrev.png';
import iWorksNext from '../img/game/iWorksNext.png';
import pig1 from '../img/about/1.jpg';
import pig2 from '../img/about/2.jpg';
import pig3 from '../img/about/3.jpg';
import pig4 from '../img/about/4.jpg';
import pig5 from '../img/about/5.jpg';

export default function About(){
    useEffect( () =>{

        let $aboutContentBanner = $('.aboutContent_banner');
        $aboutContentBanner.css('height', '85vh');

        let $aInput = $('.about_wrap').find('input');
        let $aSpan = $aInput.next('span');
        $aSpan.on('click', function(){
            $aSpan.css('background', 'none');
            $(this).css({
                backgroundImage:`url(${span_bg})`,
                backgroundRepeat:`no-repeat`,  
            });
        });
        let aboutList=document.querySelector("#about_list");
        let aboutListLi=aboutList.children;
        let aboutListPrev=document.querySelector("#about_list_prev");
        let aboutListNext=document.querySelector("#about_list_next");
        let arr=[];
        let timer = null;
        for(let i=0;i<aboutListLi.length;i++){
                arr[i]={left:getStyle(aboutListLi[i],"left"),scale:getStyle(aboutListLi[i],"transform"),zIndex:getStyle(aboutListLi[i],"z-index")};
            }  
         
        timer = setInterval(function(){
            arr.unshift(arr.pop());
            toStyle();
        }, 3000);

        $(aboutListPrev).hover(function(){
            clearInterval(timer);
        }, function(){
            timer = setInterval(function(){
                arr.push(arr.shift());
                toStyle();
            }, 3000);
        })
        $(aboutListNext).hover(function(){
            clearInterval(timer);
        }, function(){
            timer = setInterval(function(){
                arr.unshift(arr.pop());
                toStyle();
            }, 3000);
        })
        aboutListPrev.onclick=function(){
            arr.push(arr.shift());
            toStyle();
        };
        aboutListNext.onclick=function(){
            arr.unshift(arr.pop());
            toStyle();
        }; 
        function toStyle(){
            for(var i=0;i<aboutListLi.length;i++)
            {
                aboutListLi[i].style.left=arr[i].left;
                aboutListLi[i].style.transform=arr[i].scale;
                aboutListLi[i].style.zIndex=arr[i].zIndex;	
            }	
        }
 
        function getStyle(obj,attr){
            if( obj.currentStyle){
                    return obj.currentStyle[attr];        
            }
            return getComputedStyle(obj)[attr];        
        }

        (function(){
            let $aboutHonerUl = $('.about_honer_wrap').find('ul');
            $aboutHonerUl.get(0).appendChild($aboutHonerUl.get(0).firstElementChild.cloneNode(true));
            let timer = null;
            let $aLi = $aboutHonerUl.find('li');
            let oneWidth = $aLi.eq(0).width();
            let iNow = 0;
            let $go = $('.go');
            let $back = $('.back');
            
            $aboutHonerUl.css('width',(oneWidth * $aLi.length)+'px');
            function toRun(){
                
                if(iNow === $aLi.length-1){
                    iNow=1;
                    $aboutHonerUl.css('left',0);   
                }else{
                    iNow++;
                }
                $aboutHonerUl.animate({left : -oneWidth * iNow},500);
            }
            function toBack(){
                
                if(iNow === 0){
                    iNow=$aLi.length-2;
                    $aboutHonerUl.css('left',(-oneWidth * ($aLi.length-1))+'px');   
                }else{
                    iNow--;
                }
                $aboutHonerUl.animate({left : -oneWidth * iNow},500);
            }
            
            timer = setInterval(toRun, 1000);
            
            $back.hover(function(){
                $go.removeClass('active');
                $(this).addClass('active');
                clearInterval(timer);
            },function(){
                $(this).removeClass('active');
                $go.addClass('active');
                timer = setInterval(toRun, 1000);
            })
            $go.hover(function(){
                clearInterval(timer);
            },function(){
                timer = setInterval(toRun, 1000);
            })
            
            $go.on('click',toRun);
            $back.on('click',toBack);
            
            })();
            (function(){
                var oFilm=document.querySelector(".about_film");
                var oUl=oFilm.querySelector("ul");
                var lis=oUl.querySelectorAll("li");
                var goBack=document.querySelector("#about_film_goBack");
                var goNext=document.querySelector("#about_film_goNext");
                var newArr=[]; 
                let timer = null;    
                for(var i=0;i<lis.length;i++){
                    newArr[i]={left:getStyle(lis[i],"left"),scaleX:getStyle(lis[i],"transform")};
                    }  
                timer = setInterval(function(){
                    newArr.unshift(newArr.pop());
                    toStyle();
                   
                }, 2000);
                goNext.addEventListener('mouseover', function(){
                    clearInterval(timer);
                })
                goNext.addEventListener('mouseout', function(){
                    timer = setInterval(function(){
                        newArr.unshift(newArr.pop());   
                        toStyle();
                    }, 2000);
                })
                goBack.addEventListener('mouseover', function(){
                    clearInterval(timer);
                })
                goBack.addEventListener('mouseout', function(){
                    timer = setInterval(function(){
                       newArr.unshift(newArr.pop());
                        toStyle();
                    }, 2000);
                })
                goBack.onclick=function(){
                    newArr.push(newArr.shift());
                    toStyle();
                };
                goNext.onclick=function(){
                    newArr.unshift(newArr.pop());    
                    toStyle();
                }; 
                function toStyle(){
                    for(var i=0;i<lis.length;i++){
                        lis[i].style.left=newArr[i].left;
                        lis[i].style.transform=newArr[i].scaleX;	
                    }	
                }
                function getStyle(obj,attr){
                    if( obj.currentStyle){
                     return obj.currentStyle[attr];        
                    }
                    return getComputedStyle(obj)[attr];        
                }  
            })();

            (function(){
                let $aboutLeadMessageUl = $('.about_lead_message').find('ul');
                $aboutLeadMessageUl.get(0).appendChild($aboutLeadMessageUl.get(0).firstElementChild.cloneNode(true));
                let timer = null;
                let $aLi = $aboutLeadMessageUl.find('li');
                let $aA = $('.about_lead').find('a');
                let oneWidth = $aLi.eq(0).width();
                let iNow = 0;
                let iNow2 = 0;
                let $up = $('.about_lead_up');
                let $down = $('.about_lead_down');
                
                $aboutLeadMessageUl.css('width',(oneWidth * $aLi.length)+'px');
                
                function toRun(){
                    if(iNow === $aLi.length-1){
                        iNow=1;
                        $aboutLeadMessageUl.css('left',0);   
                    }else{
                        iNow++;
                    }
            
                    if (iNow2 === $aA.length -1){
                        iNow2 = 0;
                    }else{
                        iNow2++;
                    }
                    $aboutLeadMessageUl.animate({left : -oneWidth * iNow},500);
                    $aA.removeClass('active');
                    $aA.eq(iNow2).addClass('active');
                }
                function toBack(){
                    
                    if(iNow === 0){
                        iNow=$aLi.length-2;
                        $aboutLeadMessageUl.css('left',(-oneWidth * ($aLi.length-1))+'px');   
                    }else{
                        iNow--;
                    }
                    $aboutLeadMessageUl.animate({left : -oneWidth * iNow},500);
                    $aA.removeClass('active');
                    $aA.eq(iNow).addClass('active');
                }
                
                timer = setInterval(toRun, 5000);
                
                $up.hover(function(){
                    $down.removeClass('on');
                    $(this).addClass('on');
                    clearInterval(timer);
                },function(){
                    $(this).removeClass('on');
                    $down.addClass('on');
                    timer = setInterval(toRun, 5000);
                })
                $down.hover(function(){
                    clearInterval(timer);
                },function(){
                    timer = setInterval(toRun, 5000);
                })
                
                $down.on('click',toRun);
                $up.on('click',toBack);
                
                $aA.hover(function(){
                    iNow2 = iNow = $aA.index(this);
                    $aA.removeClass('active');
                    $(this).addClass('active');
                    clearInterval(timer);
                    $aboutLeadMessageUl.animate({left : -oneWidth * iNow},500);
            
                }, function(){
                    timer = setInterval(toRun, 5000);
                });
            
                })();

                return () =>{
                    $('#aboutContent').parent().remove('#aboutContent');
                }
    }, []);

    return (
        <section id="aboutContent">
            <div className="aboutContent_banner">
                 <img src={about_banner} alt="banner图" />
            </div>
            <ul 
                className="about_wish"
                style={{
                    backgroundImage:`url(${bg})`,
                    backgroundRepeat:`no-repeat`,
                    backgroundSize:'cover'  
                }}
            >
                <li>
                    <strong>使命</strong>
                    <p>◆ 让广告行业不再处处是坑</p>
                    <p>◆ 让天下没有难推的广告</p>
                    <p>◆ 让互联网广告变化更加文明</p>
                </li>
                <li>
                    <strong>愿景</strong>
                    <p>◆ 成为移动广告领域最专业的公司</p>
                    <p>◆ 成为以专业技术作为竞争力的广告公司</p>
                    <p>◆ 成为一个行业内幸福指数最高的企业</p>
                </li>
                <li>
                    <strong>价值观</strong>
                    <p>◆ 反思、创新、诚信、敬业</p>
                    <p>◆ 敢于拥抱变化，迎接每一个挑战</p>
                    <p>◆ 专业是最好的服务</p>
                </li>
            </ul>
            <div className="about_animate_wrap">
                <div className="about_wrap">
                    <label>
                        <input type="radio" name="nav" />
                        <span>团队介绍</span>
                        <div 
                            className="about_team"
                            style={{
                                backgroundImage:`url(${dot})`,
                                backgroundPosition:`center 2.5%`,
                                backgroundRepeat:`no-repeat`,
                                backgroundSize:'5.33%'   
                            }}
                        >
                            <p>来自北京、上海、广州、成都4个城市近100名精英员工组成优化团队、媒介团队、销售团队、AM、设计团队；<br />深度挖掘潜力市场和用户，分析行业数据，量身定制投放策略，月均3000+创意素材设计，帮助广告主高效出海</p>
                            <div 
                                className="about_film"
                                style={{
                                    backgroundImage:`url(${photo})`,
                                    backgroundRepeat:`no-repeat`,
                                    backgroundSize:'cover'   
                                }}
                            >
                                <ul>
                                    <li
                                         style={{
                                            backgroundImage:`url(${photo1})`,
                                            backgroundSize:'cover'   
                                        }}
                                    ></li>
                                    <li
                                         style={{
                                            backgroundImage:`url(${photo2})`,
                                            backgroundSize:'cover'   
                                        }}
                                    ></li>
                                    <li
                                         style={{
                                            backgroundImage:`url(${photo3})`,
                                            backgroundSize:'cover'   
                                        }}
                                    ></li>
                                    <li
                                         style={{
                                            backgroundImage:`url(${photo4})`,
                                            backgroundSize:'cover'   
                                        }}
                                    ></li>
                                    <li
                                         style={{
                                            backgroundImage:`url(${photo5})`,
                                            backgroundSize:'cover'   
                                        }}
                                    ></li>
                                    <li
                                         style={{
                                            backgroundImage:`url(${photo6})`,
                                            backgroundSize:'cover'   
                                        }}
                                    ></li>
                                    <li
                                         style={{
                                            backgroundImage:`url(${photo7})`,
                                            backgroundSize:'cover'   
                                        }}
                                    ></li>
                                  
                                </ul>
                                <div className="about_film_mask"></div>
                                <div className="about_film_mask"></div>
                                <div id="about_film_goBack">&lt;</div>
                                <div id="about_film_goNext">&gt;</div>                   
                            </div> 
                        </div>
                    </label>
                    <label>
                        <input type="radio" name="nav" />
                        <span>荣誉资质</span>
                        <div className="about_honer">
                            <div 
                                className="about_honer_wrap"
                                style={{
                                    backgroundImage:`url(${dot})`,
                                    backgroundPosition:`center 0`,
                                    backgroundRepeat:`no-repeat`,
                                    backgroundSize:'10.67%'   
                                }}
                            >
                                <p>上海市“专精特新”企业</p>
                                <p>上海市高新技术企业</p>
                                <p>上海市科技小巨人企业</p>
                                <ul>
                                    <li> inmobi年度优秀代理商</li>
                                    <li> inmobi年度优秀代理商</li>
                                    <li> inmobi年度优秀代理商</li>
                                    <li> inmobi年度优秀代理商</li> 
                                    <li> inmobi年度优秀代理商</li> 
                                </ul>
                            </div>
                            <div className="go active"> &gt;</div>
                            <div className="back">&lt;</div>        
                        </div>
                    </label>
                    <label>
                        <input type="radio" defaultChecked  name="nav" />
                        <span
                            style={{
                                backgroundImage:`url(${span_bg})`,
                                backgroundRepeat:`no-repeat`,  
                            }}
                        >爱心公益</span>
                        <div id="about_pig_wrap">
                            <ul id="about_list">
                                <li><p>2016年 <br/> 山西 大同</p><img src={pig2} alt="" /></li>
                                <li><p>2017年 <br/>河南 新乡</p><img src={pig4} alt="" /></li>
                                <li><p>2019年 <br/>云南 建水</p><img src={pig3} alt="" /></li>
                                <li><p>2018年 <br/>山西 辉源</p><img src={pig1} alt="" /></li>
                                <li><p>2020年 <br/>步履不止</p><img src={pig5} alt="" /></li>
                            </ul>
                            <div 
                                id="about_list_prev" 
                                className="about_list_btn"
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
                                id="about_list_next" 
                                className="about_list_btn"
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
                    </label>
                    <label>
                        <input type="radio" name="nav" />
                        <span>总裁寄语</span>
                        <div className="about_lead">
                            <div className="about_lead_message">
                                <ul>
                                    <li
                                       style={{
                                        backgroundImage:`url(${dot})`,
                                        backgroundPosition:`center 23.13%`,
                                        backgroundRepeat:`no-repeat`,
                                        backgroundSize:'7.2%'   
                                        }} 
                                    >
                                        <p>“来自北京、上海、广州、成都4个城市近100名精英员工组成优化团队、媒介团队、销售团队、AM、设计团队；深度挖掘潜力市场和用户，分析行业数据，量身定制投放策略，月均3000+创意素材设计，帮助广告主高效出海”</p>
                                    </li>
                                    <li
                                        style={{
                                            backgroundImage:`url(${dot})`,
                                            backgroundPosition:`center 23.13%`,
                                            backgroundRepeat:`no-repeat`,
                                            backgroundSize:'7.2%'   
                                         }} 
                                    >
                                        <p>分析人士认为，“地摊经济”相关政策放开之后，消费行业的市场表现会有一定提升，在市场走势较弱的环境下提升更为明显。具体到行业层面而言，食品饮料相对于休闲服务、商业贸易表现更好，低端消费品如啤酒、调味品的市场表现也会有所提升</p>
                                    </li>
                                    <li
                                        style={{
                                            backgroundImage:`url(${dot})`,
                                            backgroundPosition:`center 23.13%`,
                                            backgroundRepeat:`no-repeat`,
                                            backgroundSize:'7.2%'   
                                        }} 
                                    >
                                        <p>受消息影响，在港股上市的五菱汽车昨日股价一度飙升近130%。截至昨日收盘，五菱汽车股价报0.305港元，涨幅达53.7%。在A股方面，相关汽车板块在尾盘时也出现了一波上涨，包括福田汽车</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="about_lead_up">&lt;</div>
                            <div className="about_lead_down about_lead_on">&gt;</div>
                            <Link to="#" className="active"></Link>
                            <Link to="#"></Link>
                            <Link to="#"></Link>
                        </div>
                    </label>
                </div>        
            </div>
        </section>
    );
}