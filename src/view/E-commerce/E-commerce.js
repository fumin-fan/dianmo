import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import $ from  'jquery';
import ecommerce_banner from  '../img/ecommerce/ecommerce_banner.jpg';
import server_content from '../img/game/server_content.jpg';
import pic1_small from '../img/game/pic1_small.png';
import pic2 from '../img/game/pic2.png';
import pic3 from '../img/game/pic3.png';
import pic4 from '../img/game/pic4.png';
import ecommerce_more from '../img/game/more.png';
import channel_content from '../img/ecommerce/channel_content.png';
import channe2_content from '../img/ecommerce/channel2_content.jpg';
import channe3_content from '../img/ecommerce/channel3_content.png';
import channe4_content from '../img/ecommerce/channel4_content.jpg';
import channe5_content from '../img/ecommerce/channel5_content.jpg';
import channe6_content from '../img/ecommerce/channel6_content.png';
import trangle from '../img/ecommerce/trangle.png';
import channel_1 from '../img/ecommerce/1.png';
import channel_2 from '../img/ecommerce/2.jpg';
import channel_3 from '../img/ecommerce/3.jpg';
import channel_4 from '../img/ecommerce/4.jpg';
import channel_5 from '../img/ecommerce/5.jpg';
import channel_6 from '../img/ecommerce/6.jpg';

export default function Ecommerce(){
    useEffect( () =>{
        let $ecommerceBanner = $('.ecommerceBanner');
        $ecommerceBanner.css('height', '85vh');

        let $ecommerceAdvantage_li = $('.ecommerce_advantage').find('li');
            $ecommerceAdvantage_li.hover(function(){
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
            let $aDiv = $('.ecommerce_channel').find('div');
            let $aImg = $('.ecommerce_channel dt').find('img');
            $aDiv.hover(function(){
                let index = $aDiv.index(this);
                $(this).siblings('img').css('display', 'block');
                $aImg.css('display', 'none');
                $aImg.eq(index).css('display', 'block');
            },function(){
                $(this).siblings('img').css('display', 'none');
            });

            return () =>{
                $('#ecommerceContent').parent().remove('#ecommerceContent');
            }
    }, []);
    return (
        <section id="ecommerceContent">
            <div className="ecommerceBanner">
                <img src={ecommerce_banner} alt="banner图" />
            </div>
            <div className="ecommerce_wrap">
                <h2>服务优势</h2>
                <div className="ecommerce_line"></div>
                <h3>多渠道精准引流促进订单成交</h3>
                <div 
                    className="ecommerce_advantage"
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
                            <div>精准用户画像</div>
                            <span></span>
                            <p>浏览记录、年龄、性别、爱好、搜索词条、应用类购买频率、已观看影片等</p>
                        </li>
                        <li>
                            <img src={pic2} alt="1" />
                            <div>全流量覆盖</div>
                            <span></span>
                            <p>国内外主流媒体全覆盖，<br />组合推广优势</p>
                        </li>
                        <li>
                            <img src={pic3} alt="1" />
                            <div>创意素材策划</div>
                            <span></span>
                            <p>优质广告素材<br />（图片、视频、GIF等）、<br />落地页，实拍广告制作</p>
                        </li>
                        <li>
                            <img src={pic4} alt="1" />  
                            <div>智能优化</div>
                            <span></span>
                            <p>机器学习助力，可以即时帮助广告做出更明智的决策，实时分析超过3亿个潜在信号组合</p>
                        </li>
                    </ul>
                </div>
                <h2>全流量、多场景、多广告样式</h2>
                <div className="ecommerce_line_2"></div>
                <h3>多款优质广告流量组合优势</h3>
                <dl className="ecommerce_channel">
                    <dt>
                        <img style={{display: "block"}} src={channel_content} alt="1" />
                        <img src={channe2_content} alt="1" />
                        <img src={channe3_content} alt="1" />
                        <img src={channe4_content} alt="1" />
                        <img src={channe5_content} alt="1" />
                        <img src={channe6_content} alt="1" />
                    </dt>
                    <dd>
                        <div
                            style={{
                                backgroundImage:`url(${channel_1})`,
                                backgroundPosition:`center center`,
                                backgroundRepeat:`no-repeat`,
                                backgroundSize:'60%'
                            }}
                        ></div>
                        <img src={trangle} alt="1" />
                        <span>国内头条</span>
                    </dd>
                    <dd>
                        <div
                            style={{
                                backgroundImage:`url(${channel_2})`,
                                backgroundPosition:`center center`,
                                backgroundRepeat:`no-repeat`,
                                backgroundSize:'60%'
                            }}
                        ></div>
                        <img src={trangle} alt="1" />
                        <span>快手</span>
                    </dd>
                    <dd>
                        <div
                            style={{
                                backgroundImage:`url(${channel_3})`,
                                backgroundPosition:`center center`,
                                backgroundRepeat:`no-repeat`,
                                backgroundSize:'60%'
                            }}
                        ></div>
                        <img src={trangle} alt="1" />
                        <span>腾讯广告（原广点通）</span>
                    </dd>
                    <dd></dd>
                    <dd>
                        <div
                            style={{
                                backgroundImage:`url(${channel_4})`,
                                backgroundPosition:`center center`,
                                backgroundRepeat:`no-repeat`,
                                backgroundSize:'60%'
                            }}
                        ></div>
                        <img src={trangle} alt="1" />
                        <span>Tiktok</span>
                    </dd>
                    <dd>
                        <div
                            style={{
                                backgroundImage:`url(${channel_5})`,
                                backgroundPosition:`center center`,
                                backgroundRepeat:`no-repeat`,
                                backgroundSize:'60%'
                            }}
                        ></div>
                        <img src={trangle} alt="1" />
                        <span>Facebook</span>
                    </dd>
                    <dd>
                        <div
                            style={{
                                backgroundImage:`url(${channel_6})`,
                                backgroundPosition:`center center`,
                                backgroundRepeat:`no-repeat`,
                                backgroundSize:'60%'
                            }}
                        ></div>
                        <img src={trangle} alt="1" />
                        <span>Google</span>
                    </dd>
                </dl> 
                <Link to="#"><img src={ecommerce_more} alt="" /></Link>
            </div>
        </section>
    );
}