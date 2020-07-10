import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import PlatformAdvantage from '../shareComponent/platformAdvantage';
import DianmoAd from '../shareComponent/dianmoAd';
import $ from  'jquery';
import xigua from '../img/toutiao/xigua.png';
import douyin from '../img/toutiao/douyin.png';
import toutiao from '../img/toutiao/toutiao.jpg';
import chuanshanjia from '../img/toutiao/chuanshanjia.png';

export default function Toutiao(){
    useEffect(() =>{
        let $toutiao_banner = $('.toutiao_banner');
        $toutiao_banner.css('height', '85vh');

        return () =>{
            $('#toutiaoContent').parent().remove('#toutiaoContent');
        }
    }, []);

    return (
        <section id="toutiaoContent">
            <div className="toutiao_banner">
            <p>发挥字节跳动大数据优势，基于600T+的海量用户画像，对用户行为特征进行动态分析、深度建模，智能化呈现用户真实状态及兴趣偏好。积累丰富的定向体系，帮助您准确识别目标人群，让他们看见您的推广，成为您的客户。</p>
            </div>
            <div className="toutiao_wrap">
                <PlatformAdvantage content="toutiao" />
                <div className="toutiao_power">
                    <h2>海量流量营销平台</h2>
                    <div className="toutiao_power_wrap">
                        <label>
                            <input type="radio" name="nav" />
                            <span>西瓜视频</span>
                            <ul>
                                <li></li>
                                <li>
                                    <dl>
                                        <dt>
                                        <Link to="#">
                                                <img src={xigua} alt="1" />
                                            </Link>
                                        </dt>
                                        <dd>
                                            <h4>西瓜视频</h4>
                                            <p>西瓜视频的广告穿插在视频内容中进行原生展示，通过定向技术触达目标客户群体，能够更好的让客户对品牌进行感知，完成推广目标</p>
                                            <Link to="#">了解更多</Link>
                                        </dd>
                                    </dl>
                                </li>
                            </ul>
                        </label>
                        <label>
                            <input type="radio" name="nav" />
                            <span>抖音</span>
                            <ul>
                                <li></li>
                                <li>
                                    <dl>
                                        <dt>
                                            <Link to="#">
                                                <img src={douyin} alt="1" />
                                            </Link>
                                        </dt>
                                        <dd>
                                            <h4>抖音</h4>
                                            <p>抖音广告强势锁定新生代消费主力，支持人群属性标签、兴趣、场景等多种灵活、精准的人群触达方式，适用于移动下载、电商分享功能、品牌宣传等多种推广目标</p>
                                            <Link to="#">了解更多</Link>
                                        </dd>
                                    </dl>
                                </li>
                            </ul>
                        </label>
                        <label>
                            <input type="radio" defaultChecked name="nav" />
                            <span>今日头条</span>
                            <ul>
                                <li></li>
                                <li>
                                    <dl>
                                        <dt>
                                        <Link to="#">
                                                <img src={toutiao} alt="1" />
                                            </Link>
                                        </dt>
                                        <dd>
                                            <h4>今日头条</h4>
                                            <p>今日头条是一款基于数据挖掘技术的个性化资讯推荐引擎产品，今日头条广告以原生方式出现在资讯信息流中，能够精准实现广告投放千人千面，让您的广告更好地触达目标客户，支持多种投放目的</p>
                                            <Link to="#">了解更多</Link>
                                        </dd>
                                    </dl>
                                </li>
                            </ul>
                        </label>
                        <label>
                            <input type="radio" name="nav" />
                            <span>穿山甲</span>
                            <ul>
                                <li></li>
                                <li>
                                    <dl>
                                        <dt>
                                        <Link to="#">
                                                <img src={chuanshanjia} alt="1" />
                                            </Link>
                                        </dt>
                                        <dd>
                                            <h4>穿山甲</h4>
                                            <p>穿山甲是巨量引擎旗下领先的视频化广告平台，聚合30000+优质媒体，覆盖7亿日活用户，为全球APP和广告主提供高 效的用户增长和变现解决方案，推动广告价值高效转化。穿山甲搭配付费直投能有效提升后端效果。截至2020年1月31日，穿山甲日均请求607亿，日均展示100亿，覆盖独立DAU 7亿和1/5的移动互联网用户时长。</p>
                                            <Link to="#">了解更多</Link>
                                            </dd>
                                    </dl>
                                </li>
                            </ul>
                        </label>
                    </div>
                </div>
                <DianmoAd ad='toutiao' />
            </div>      
        </section>
    );
}