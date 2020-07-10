import React, {useEffect} from 'react';
import PlatformAdvantage from '../shareComponent/platformAdvantage';
import DianmoAd from '../shareComponent/dianmoAd';
import $ from  'jquery';
import facebook_banner from '../img/facebook/facebook_banner.jpg';
import bg from '../img/facebook/bg.jpg';
import facebook_power1 from '../img/facebook/facebook_power1.jpg';
import facebook_power2 from '../img/facebook/facebook_power2.jpg';


export default function Facebook(){
    useEffect(() =>{
        let $facebook_banner = $('.facebook_banner');
        $facebook_banner.css('height', '85vh');

        return () =>{
            $('#facebookContent').parent().remove('#facebookContent');
        }
    }, []);

    return (
        <section id="facebookContent">
            <div className="facebook_banner">
                <img src={facebook_banner} alt="banner图" />
            </div>
            <div className="facebook_wrap">
                <PlatformAdvantage content="facebook" />
                <img src={bg} alt="" />
                <div className="facebook_power">
                    <h2>利用Facebook和Instagram广告 <br /> 推动更多优质客户成功转化</h2>
                    <img src={facebook_power1} alt="1" />
                    <img src={facebook_power2} alt="1" />
                </div>
                <DianmoAd ad='facebook' />
            </div>      
        </section>
    );
}