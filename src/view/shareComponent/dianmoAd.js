import React from 'react';
import {Link} from "react-router-dom";
import dianmo from './dianmo.png';
import {Data} from './data';

function reducer(action) {
    switch(action){
        case 'facebook':
            return Data[0].key;
        case 'inmobi':
            return Data[1].key;
        case 'ucads':
            return Data[2].key;
        case 'tiktok':
            return Data[3].key;
        case 'toutiao':
            return Data[4].key;
        case 'google':
            return Data[5].key;
        default:
            return '';
    }
}

export default function DianmoAd(props){
    const {ad} = props;
    const key = reducer(ad);
    return (
        <div className="dianmo">
                <h2>点摩广告：让{key}营销更简单</h2>
                <ol>
                    <li>
                        <div>
                            <h3>调查与报告</h3>
                            <p>了解您的产品、营销目的，分析目标受众</p>
                        </div>
                        <div>
                            <h3>专业{key}优化师</h3>
                            <p>植根行业多年的{key}优化师为您提供全程一对一广告优化服务</p>
                        </div>
                        <div>
                            <h3>广告计划</h3>
                            <p>根据您的广告营销目的，量身定制广告营销计划并以日报的形势汇报，以确保达成营销目的。</p>
                        </div>
                    </li>
                    <li>
                        <Link to="#"><img src={dianmo} alt="点摩业务介绍图" /></Link>
                    </li>
                    <li>
                        <div>
                            <h3>精准锁定用户</h3>
                            <p>通过现有数据、网站流量、以及{key}营销工具，来为您挑选极精准匹配的受众</p>
                        </div>
                        <div>
                            <h3>跟踪&分析</h3>
                            <p>我们确保所有的投放与转化数据、分析等都准确真实，让您花的每分钱都有迹可循</p>
                        </div>
                        <div>
                            <h3>测试&优化</h3>
                            <p>我们会反复测试不同人群受众、创意和出价、设置等，并不断优化账户以达极佳效果</p>
                        </div>
                    </li>
                </ol>
        </div>
    );
}