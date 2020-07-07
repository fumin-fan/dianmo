import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import $ from  'jquery';
import branding_banner  from  '../img/home/home_banner_1.jpg';
import pic1 from '../img/branding/pic1.jpg';
import pic2 from '../img/branding/pic2.jpg';
import pic3 from '../img/branding/pic3.jpg';
import pic4 from '../img/branding/pic4.jpg';

export default function Branding(){
    useEffect(() =>{
        let $brandingBanner = $('.brandingBanner');
        $brandingBanner.css('height', '85vh');

        return () =>{
            $('#brandingContent').parent().remove('#brandingContent');
        }
    }, []);
    return (
        <section id="brandingContent">
            <div className="brandingBanner">
                <img src={branding_banner} alt="banner图" />
            </div>
            <div className="branding_wrap">
                <h2>品牌分析与定位</h2>
                <div className="branding_line"></div>
                <h3>市场人群分析、同行竞品分析、消费者洞察、投放决策、客户维护</h3>
               <ul>
                   <li>
                       <dl>
                           <dt><img src={pic1} alt="1" /></dt>
                           <dd>
                               <div>精准狙击，拳拳到肉</div>
                               <p><b>.</b>AI大数据精准营销，只获取你需要的客户</p>
                               <p><b>.</b>解决营销不聚焦、不精准、不连贯，<br />盲目追逐热点营销徒劳无功等问题</p>
                               <Link to='#'>了解更多</Link>
                           </dd>
                       </dl>
                   </li>
                   <li>
                        <dl>
                            <dt><img src={pic2} alt="1" /></dt>
                            <dd>
                                <div>差异化营销，全面突围</div>
                                <p><b>.</b>针对品牌规模、发展方向、产品、目标人群等的不同，<br />选择差异化营销重点</p>
                                <p><b>.</b>差异化选择广告素材内容、投放渠道、投放方式等</p>
                                <Link to='#'>了解更多</Link>
                            </dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt><img src={pic3} alt="1" /></dt>
                            <dd>
                                <div>社群营销</div>
                                <p>高质量内容营销，使效益提升至最佳化</p>
                                <p><b>.</b>在Facebook、Instagram、Twitter、Tiktok等海内外主流社交媒体平台，进行创意内容营销，增强用户品牌粘度</p>
                                <p><b>.</b>有效增加目标受众对品牌的信心与好感度，<br />积累品牌的美誉度与信任度</p>
                                <Link to='#'>了解更多</Link>
                            </dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt><img src={pic4} alt="1" /></dt>
                            <dd>
                                <div>热点营销</div>
                                <p><b>.</b>结合全球热点，制造热点话题，扩大品牌影响力</p>
                                <p><b>.</b>打造热点品牌推广事件，包括线下快闪店、虚拟偶像、<br />超媒体展览等</p>
                                <Link to='#'>了解更多</Link>
                            </dd>
                        </dl>
                    </li>
               </ul>
            </div>
        </section>
    );
}