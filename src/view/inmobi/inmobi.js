import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import PlatformAdvantage from '../shareComponent/platformAdvantage';
import DianmoAd from '../shareComponent/dianmoAd';
import $ from  'jquery';
import inmobi_banner from '../img/inmobi/inmobi_banner.jpg';
import inmobi_power1 from '../img/inmobi/inmobi_power1.jpg';
import inmobi_power2 from '../img/inmobi/inmobi_power2.jpg';
import inmobi_power3 from '../img/inmobi/inmobi_power3.jpg';
import line from '../img/inmobi/line.jpg';

export default function Inmobi(){
    useEffect(() =>{
        let $inmobi_banner = $('.inmobi_banner');
        $inmobi_banner.css('height', '85vh');

        return () =>{
            $('#facebookContent').parent().remove('#facebookContent');
        }
    }, []);

    return (
        <section id="inmobiContent">
            <div className="inmobi_banner">
                <img src={inmobi_banner} alt="banner图" />
            </div>
            <div className="inmobi_wrap">
                <PlatformAdvantage content="inmobi" />
                <div className="inmobi_power">
                    <h2>InMobi在中国</h2>
                    <div className="inmobi_power_line"></div>
                    <h3>iOS移动广告平台InMobi在国内iOS拥有无可匹敌的优势</h3>
                    <div className="inmobi_power_wrap">
                        <div>
                            <p>ios流量占比<strong>60%</strong></p>
                            <strong>覆盖中国80%的iOS用户</strong>
                        </div>
                        <div>
                            <p>Android流量占比<strong>40%</strong></p>
                            <strong>覆盖中国50%的Android用户</strong>
                        </div>
                        <ul>
                            <li></li>
                            <li>
                                    <dl>
                                        <dt>
                                        <Link to="#">
                                                <img src={inmobi_power1} alt="1" />
                                                <img src={inmobi_power2} alt="1" />
                                                <img src={inmobi_power3} alt="1" />
                                            </Link>
                                        </dt>
                                        <dd 
                                            style={{
                                                backgroundImage:`url(${line})`,
                                                backgroundPosition:`0 18.69%`,
                                                backgroundRepeat:`no-repeat`
                                            }}
                                        >
                                            <h4>58同城</h4>
                                            <p>投放地：中国</p>
                                            <p>项目简介：生活服务类产品，主打app激活</p>
                                            <p>营销目的：主推租房，招聘，二手物品</p>
                                            <p>营销需求：精准锁定目标用户，配合优质投放素材</p>
                                            <p>营销效果：激活成本低，ROI远超预期</p>
                                            <Link to="#" >了解更多</Link>
                                        </dd>
                                    </dl>
                            </li>
                        </ul>
                    </div>
                </div>
                <DianmoAd ad='inmobi' />
            </div>    
        </section>
    );
}