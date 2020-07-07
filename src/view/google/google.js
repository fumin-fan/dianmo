import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import $ from  'jquery';
import goole_banner from '../img/google/goole_banner.jpg';
import google from '../img/google/google.png';
import google2 from '../img/google/google2.png';
import youtube from '../img/google/youtube.png';
import icon_1 from '../img/google/icon_1.png';
import icon_2 from '../img/google/icon_2.png';
import icon_3 from '../img/google/icon_3.png';
import icon_4 from '../img/google/icon_4.png';
import icon_5 from '../img/google/icon_5.png';
import icon_6 from '../img/google/icon_6.png';
import icon_7 from '../img/google/icon_7.png';
import icon_8 from '../img/google/icon_8.png';
import map from '../img/google/map.png';
import DianmoAd from '../shareComponent/dianmoAd';

export default function Google(){
    useEffect(() =>{
        let $google_banner = $('.google_banner');
        $google_banner.css('height', '85vh');

        return () =>{
            $('#googleContent').parent().remove('#googleContent');
        }
    }, []);
    return(
        <section id="googleContent">
            <div className="google_banner">
                <img src={goole_banner} alt="banner图" />
            </div>
            <div className="goole_wrap">
                <div className="goole_platform">
                    <div className="goole_platform_wrap">
                        <label>
                            <input type="radio" name="nav" />
                            <span>Google搜索广告</span>
                            <ul>
                                <li></li>
                                <li>
                                    <Link to="#" >
                                        <img src={google} alt="1" />
                                    </Link>
                                    <span>Google搜索广告</span>
                                    <h4>搜一搜，看到无限</h4>
                                    <p>每天，Google 上都会发生数十亿次搜索…</p>
                                    <p>搜索广告的主体由三个部分组成：标题、显示网址、描述，是一种通过用户主动检索来帮助广告主寻找潜在客户的广告形式; 通过投放搜索广告，可以确保潜在客户会注意到您的品牌、考虑您提供的产品或服务并采取行动。</p>
                                    <Link to="#" >了解更多</Link>
                                </li>
                            </ul>
                        </label>
                        <label>
                            <input type="radio" name="nav" />
                            <span>Google展示广告</span>
                            <ul>
                                <li></li>
                                <li>
                                    <Link to="#" >
                                        <img src={google2} alt="1" />
                                    </Link>
                                    <span>Google展示广告</span>
                                    <h4>全面展示，无处可逃</h4>
                                    <p>Google展示广告覆盖超过100个国家和88%以上的互联网用户，每天网页浏览量25亿+，每月访问人次456亿+，是全球最大的广告网络平台；</p>
                                    <p>通过先进的人群定位技术，定位您的潜在客户群体，当您的客户群体在任何网站浏览网页的时候，Google展示广告都会把您的广告信息展示给他们，为您带来更多优质的生意线索。</p>
                                    <Link to="#" >了解更多</Link>
                                </li>
                            </ul>
                        </label>
                        <label>
                            <input type="radio" name="nav" />
                            <span>Google应用广告</span>
                            <ul>
                                <li></li>
                                <li>
                                    <Link to="#" >
                                        <img src={google} alt="1" />
                                    </Link>
                                    <span>Google应用广告</span>
                                    <h4>满足不同阶段客户需求</h4>
                                    <p>Google AdMob是目前全球最大的移动APP广告平台， 目前已覆盖200多个国家和地区，超9亿移动设备数；</p>
                                    <p>广告形式：轮播横幅广告、插播广告和视频广告。</p>
                                    <Link to="#" >了解更多</Link>
                                </li>
                            </ul>
                        </label>
                        <label>
                            <input type="radio" defaultChecked name="nav" />
                            <span>YouTube视频广告</span>
                            <ul>
                                <li></li>
                                <li>
                                    <Link to="#" >
                                        <img src={youtube} style={{transform: "scale(0.6)"}} alt="1" />
                                    </Link>
                                    <span>YouTube视频广告</span>
                                    <h4>用视频吸引潜在客户</h4>
                                    <p> 在YouTube上查找、观看和分享原创视频的用户多达数十亿，是世界上最大的视频分享网站，也是目前传播速度最快，转化率最高的海外视频营销平台；</p>
                                    <p>目前YouTube广告分别是图片广告、图文广告以及视频贴片广告，可以在客户观看或搜索视频时，实时向他们展示视频广告，而且只有当他们表现出兴趣时，才需付费，具有超高性比价投放效果。</p>
                                    <Link to="#" >了解更多</Link>
                                </li>
                            </ul>
                        </label>
                        <label>
                            <input type="radio" name="nav" />
                            <span>Google购物广告</span>
                            <ul>
                                <li></li>
                                <li>
                                    <Link to="#" >
                                        <img src={google} alt="1" />
                                    </Link>
                                    <span>Google购物广告</span>
                                    <h4>发现无限商机</h4>
                                    <p>Google shopping是Google旗下购物广告，用户在点击广告之前即可获得详细的产品信息，有助于推广您的产品；</p>
                                    <p>购物广告会向用户展示您产品的照片、名称、价格，以及店铺名等信息，已经成为众多商家除 Facebook 广告以外的重要流量来源入口。</p>
                                    <Link to="#" >了解更多</Link>
                                </li>
                            </ul>
                        </label>
                    </div> 
                </div>
                <div
                     className="google_business"
                     style={{
                        backgroundImage:`url(${map})`,
                        backgroundPosition:`0 27.18%`,
                        backgroundRepeat:`no-repeat`,
                        backgroundSize:'65.75% 58.85%'  
                    }}
                >
                    <h2>全球流量覆盖</h2> 
                    <ul>
                        <li>
                            <h4>Google搜索</h4>
                            <p>拥有全球80%的搜索量</p>
                        </li>
                        <li>
                            <h4>不只是搜索</h4>
                            <p>多款产品超10亿+用户</p>
                            <div>
                                <Link to="#"><img src={icon_1} alt="1" /></Link>
                                <Link to="#"><img src={icon_2} alt="1" /></Link>
                                <Link to="#"><img src={icon_3} alt="1" /></Link>
                                <Link to="#"><img src={icon_4} alt="1" /></Link>
                                <Link to="#"><img src={icon_5} alt="1" /></Link>
                                <Link to="#"><img src={icon_6} alt="1" /></Link>
                                <Link to="#"><img src={icon_7} alt="1" /></Link>
                                <Link to="#"><img src={icon_8} alt="1" /></Link> 
                            </div>
                        </li>
                        <li>
                            <h4>Google网盟</h4>
                            <p>覆盖全球90%的互联网用户</p>
                        </li>
                    </ul>
                </div>
                <DianmoAd />
            </div>   
        </section>
    );
}