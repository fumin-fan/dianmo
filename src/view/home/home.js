import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import $ from  'jquery';
import home_banner_1 from  '../img/home/home_banner_1.jpg';
import home_banner_2 from  '../img/home/home_banner_2.jpg';
import home_banner_3 from  '../img/home/home_banner_3.jpg';
import box1 from  '../img/home/box1.jpg';
import box2 from  '../img/home/box2.jpg';
import box3 from  '../img/home/box3.jpg';
import box4 from  '../img/home/box4.jpg';
import box5 from  '../img/home/box5.jpg';
import dot from '../img/home/dot.png';
import google_jpg from '../img/home/google.jpg';
import google_png from '../img/home/google.png';
import facebook from '../img/home/facebook.jpg';
import facebook_png from '../img/home/facebook.png';
import inmobi_jpg from '../img/home/inmobi.jpg';
import inmobi_png from '../img/home/inmobi.png';
import ucads_jpg from '../img/home/ucads.jpg';
import ucads_png from '../img/home/ucads.png';
import toutiao_jpg from '../img/home/toutiao.jpg';
import toutiao_png from '../img/home/toutiao.png';
import tiktok_jpg from '../img/home/tiktok.jpg';
import tiktok_png from '../img/home/tiktok.png';
import newsPic from '../img/home/newsPic.jpg';
import more from '../img/home/more.png';
import Form from '../shareComponent/form';
import canlendar from '../img/canlendar.png';
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
                        <li><img src={home_banner_3} alt="home_banner图" /></li>
                        <li><img src={home_banner_2} alt="home_banner图" /></li>
                        <li><img src={home_banner_3} alt="home_banner图" /></li>
                    </ul>
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
                    <h2>一站式互联网广告整合营销方案解决商</h2>
                    <h3>全球区域全覆盖     行业类型全覆盖</h3>
                    <ul style={{marginBottom:0}}>
                        <li>
                            <img src={box1}  alt="图片1" />
                            <div className="mask" style={{background: "rgba(32, 56, 100, 0.41)"}}></div>
                            <Link  to='/branding' style={{transform:"scale(0.8)"}}>品牌营销</Link>
                            <div className="line" style={{display: "block"}}></div>
                        </li>
                        <li>
                            <img src={box2} alt="图片2" />
                            <div className="mask"></div>
                            <Link to='/game'>游戏推广</Link>
                            <div className="line"></div>
                        </li>
                        <li>
                        <img src={box3} alt="图片3" />  
                            <div className="mask"></div>
                            <Link to='/app'>APP推广</Link>
                            <div className="line"></div>
                        </li>
                        <li>
                            <img src={box4} alt="图片4" />
                            <div className="mask"></div>
                            <Link to='/E-commerce'>电商案例</Link>
                            <div className="line"></div>
                        </li>
                        <li>
                            <img src={box5} alt="图片5" />
                            <div className="mask"></div>
                            <Link to='/CreativeShortVideo'>创意短视频</Link>
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
                <div className="partner">
                    <h2>国内外多家知名媒体平台深度合作伙伴</h2>
                    <p className="intro">我们拥有覆盖全球多个地区的丰富渠道资源，<br />以及多年Google、Facebook、Twitter、InMobi、Line、Tiktok、今日头条、UC Ads等<br />海内外主流媒体实际投放经验</p>
                    <ul style={{marginBottom:0}}>
                        <li>

                            <img src={google_jpg} alt="google_jpg" />
                            <div className="mask" ></div>
                            <Link to='/google'><img src={google_png} alt="google_png" /></Link>
                        </li>
                        <li>
                            <img src={facebook} alt="facebook_jpg" />
                            <div style={{display: "none"}} className="mask"></div>
                            <Link to='/facebook'><img src={facebook_png} alt="facebook_png" /></Link>
                        </li>
                        <li>
                            <img src={inmobi_jpg} alt="inmobi_jpg" />
                            <div className="mask"></div>
                            <Link to='/inmobi'><img src={inmobi_png} alt="inmobi_png" /></Link>
                        </li>
                        <li>
                            <img src={ucads_jpg} alt="ucads_jpg" />
                            <div className="mask"></div>
                            <Link to='/ucAds'><img src={ucads_png} alt="ucads_png" /></Link>
                        </li>
                        <li>
                            <img src={toutiao_jpg} alt="toutiao_jpg" />
                            <div className="mask"></div>
                            <Link to='/toutiao'><img src={toutiao_png} alt="toutiao_png" /></Link>
                        </li>
                        <li>
                            <img src={tiktok_jpg} alt="tiktok_jpg" />
                            <div className="mask"></div>
                            <Link to='/tiktok'><img src={tiktok_png} alt="tiktok_png" /></Link>
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
                <div className="news">
                    <h2>最新资讯</h2>
                    <h3>行业动态、公司新闻、媒体互动、你想看的都在这里</h3>
                    <ul>
                        <li>
                            <img src={newsPic} alt="newsPic" />
                            <span style={{
                                backgroundImage:`url(${canlendar})`,
                                backgroundPosition:`0 center`,
                                backgroundRepeat:`no-repeat`,
                                backgroundSize:'auto 60%'   
                            }}>2020-5-25</span>
                            <p>这是一段新闻概述，可能要写二排哦，也能只有一排，最多显示二排,如果写不下就...</p>
                        </li>
                        <li>
                            <img src={newsPic} alt="newsPic" />
                            <span style={{
                                backgroundImage:`url(${canlendar})`,
                                backgroundPosition:`0 center`,
                                backgroundRepeat:`no-repeat`,
                                backgroundSize:'auto 60%'    
                            }}>2020-5-25</span>
                            <p>防范化解重大疫情和突发公共卫生风险，事关国家安全和发展，事关社会政治大局稳定,新冠肺炎疫情暴发以来，湖北人民、武汉人民为疫情防控作出了重大贡献</p>
                        </li>
                        <li>
                            <img src={newsPic} alt="newsPic" />
                            <span style={{
                                backgroundImage:`url(${canlendar})`,
                                backgroundPosition:`0 center`,
                                backgroundRepeat:`no-repeat`,
                                backgroundSize:'auto 60%'    
                            }}>2020-5-25</span>
                            <p>现在，出门佩戴口罩、垃圾分类投放、保持社交距离、推广分餐公筷、看病网上预约等，正在悄然成为良好社会风尚。这些健康文明的做法要推广开来、坚持下去</p>
                        </li>
                        <li>
                            <img src={newsPic} alt="newsPic" />
                            <span style={{
                                backgroundImage:`url(${canlendar})`,
                                backgroundPosition:`0 center`,
                                backgroundRepeat:`no-repeat` ,
                                backgroundSize:'auto 60%'   
                            }}>2020-5-25</span>
                            <p>这是一段新闻概述，可能要写二排哦，也能只有一排，最多显示二排,如果写不下就...</p>
                        </li>
                        <li>
                            <img src={newsPic} alt="newsPic" />
                            <span style={{
                                backgroundImage:`url(${canlendar})`,
                                backgroundPosition:`0 center`,
                                backgroundRepeat:`no-repeat`,
                                backgroundSize:'auto 60%'    
                            }}>2020-5-25</span>
                            <p>这是一段新闻概述，可能要写二排哦，也能只有一排，最多显示二排,如果写不下就...</p>
                        </li>
                        <li>
                            <img src={newsPic} alt="newsPic" />
                            <span style={{
                                backgroundImage:`url(${canlendar})`,
                                backgroundPosition:`0 center`,
                                backgroundRepeat:`no-repeat`,
                                backgroundSize:'auto 60%'    
                            }}>2020-5-25</span>
                            <p>这是一段新闻概述，可能要写二排哦，也能只有一排，最多显示二排,如果写不下就...</p>
                        </li> 
                    </ul>
                    <Link className="moreNews" to=''><img src={more}  alt="more" /></Link>
                </div>
                <div className="information">
                    <Form />
                    <h2>资深营销专家快速响应您的需求</h2>
                    <p>留下您的联系方式或通过邮件联系我们</p>
                    <a href="mailto:clicksmobi@imygbs.com" style={{
                                backgroundImage:`url(${email})`,
                                backgroundPosition:`0 0`,
                                backgroundRepeat:`no-repeat`,
                                backgroundSize:'13.36898%'    
                            }}>clicksmobi@imygbs.com
                    </a>
            </div> 
            </div>
        </section>
    );
}