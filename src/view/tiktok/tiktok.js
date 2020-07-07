import React, {useEffect} from 'react';
import PlatformAdvantage from '../shareComponent/platformAdvantage';
import DianmoAd from '../shareComponent/dianmoAd';
import $ from  'jquery';
import tiktok_banner from '../img/tiktok/tiktok_banner.jpg';
import tiktok_power from '../img/tiktok/tiktok_power.png';

export default function Tiktok(){
    useEffect(() =>{
        let $tiktok_banner = $('.tiktok_banner');
        $tiktok_banner.css('height', '85vh');

        return () =>{
            $('#tiktokContent').parent().remove('#tiktokContent');
        }
    }, []);

    return (
        <section id="tiktokContent">
            <div className="tiktok_banner">
                <img src={tiktok_banner} alt="banner图" />
            </div>
            <div className="tiktok_wrap">
                <PlatformAdvantage content="tiktok" />
                <div className="tiktok_power">
                    <h2>Tiktok</h2>
                    <div className="tiktok_power_line"></div>
                    <h3>用今天的故事打动明天的客户</h3>
                    <img src={tiktok_power} alt="1" />
                </div>
                <DianmoAd />
            </div>      
        </section>
    );
}