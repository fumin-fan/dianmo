import React, {useEffect} from 'react';
import PlatformAdvantage from '../shareComponent/platformAdvantage';
import DianmoAd from '../shareComponent/dianmoAd';
import $ from  'jquery';
import ucads_banner from '../img/ucads/ucads_banner.jpg';
import ucads_power1 from '../img/ucads/ucads_power1.jpg';
import ucads_power2 from '../img/ucads/ucads_power2.jpg';
import ucads_power3 from '../img/ucads/ucads_power3.jpg';

export default function UcAds(){
    useEffect(() =>{
        let $ucads_banner = $('.ucads_banner');
        $ucads_banner.css('height', '85vh');

        return () =>{
            $('#ucadsContent').parent().remove('#ucadsContent');
        }
    }, []);

    return (
        <section id="ucadsContent">
            <div className="ucads_banner">
                <img src={ucads_banner} alt="banner图" />
            </div>
            <div className="ucads_wrap">
                <PlatformAdvantage content="ucads" />
                <div className="ucads_power">
                    <h2>阿里UC旗下移动营销平台</h2>
                    <div className="ucads_power_line"></div>
                    <h3>深耕新兴市场，产品矩阵覆盖双印一半以上网民</h3>
                    <img src={ucads_power1} alt="1" />
                    <img src={ucads_power2} alt="1" />
                    <img src={ucads_power3} alt="1" />
                </div>
                <DianmoAd ad='ucads' />
            </div>      
        </section>
    );
}