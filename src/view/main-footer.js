import React, {useEffect} from "react";
import {Layout} from "antd";
import {Link} from 'react-router-dom';
import code from './img/code.jpg';
import $ from  'jquery';

export default function MainFooter(){

    useEffect( () =>{
        $('#footer').find('a').hover(function(){
            $(this).css('color','#fff');
        },function(){
            $(this).css('color','#a6a6a6');
        });
    }, []);

        return (
            <Layout.Footer id="footer">
                <div className="foot">
                    <ul style={{marginBottom:0}}>
                        <li>
                            <dl>
                                <dt><Link to='/solutions'>广告解决方案</Link></dt>
                                <dd><Link to='/branding'>品牌营销</Link></dd>
                                <dd><Link to='/game'>游戏推广</Link></dd>
                                <dd><Link to='/app'>APP推广</Link></dd>
                                <dd><Link to='/E-commerce'>电商推广</Link></dd>
                                <dd><Link to='/CreativeShortVideo'>创意短视频</Link></dd>
                                <dd><Link to='/more'>更多</Link></dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt><Link to='/media'>媒体与合作</Link></dt>
                                <dd><Link to='/google'>Google</Link></dd>
                                <dd><Link to='/facebook'>Facebook</Link></dd>
                                <dd><Link to='/inmobi'>Inmobi</Link></dd>
                                <dd><Link to='/ucAds'>头条</Link></dd>
                                <dd><Link to='/tiktok'>TikTok</Link></dd>
                                <dd><Link to='/ucAds'>UC Ads</Link></dd>
                                <dd><Link to='/more'>更多</Link></dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt><Link to='#'>最新资讯</Link></dt>
                                <dd><Link to='#'>行业资讯</Link></dd>
                                <dd><Link to='#'>媒体新闻</Link></dd>
                                <dd><Link to='#'>公司动态</Link></dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>联系我们</dt>
                                <dd><Link to='/about'>公司介绍</Link></dd>
                                <dd><Link to='/jobs'>公司招聘</Link></dd>
                                <dd><Link to='/about'>联系我们</Link></dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>关注我们</dt>
                                <dd><img src={code} alt="二维码" /></dd>
                            </dl>
                        </li>
                    </ul>
                    <p>备案：  京ICP备1111111111号-1</p>
                </div>
            </Layout.Footer>
        );
}