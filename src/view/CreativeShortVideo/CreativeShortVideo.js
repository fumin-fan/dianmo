import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import $ from  'jquery';
import CreativeShortVideo_banner from '../img/CreativeShortVideo/CreativeShortVideo_banner.jpg';
import start from '../img/CreativeShortVideo/start.png';
import title from '../img/CreativeShortVideo/title.png';
import pic_1 from '../img/CreativeShortVideo/pic-1.jpg';
import pic_2 from '../img/CreativeShortVideo/pic-2.jpg';
import pic_3 from '../img/CreativeShortVideo/pic-3.jpg';
import pic_4 from '../img/CreativeShortVideo/pic-4.jpg';
import pic_5 from '../img/CreativeShortVideo/pic-5.jpg';
import pic_6 from '../img/CreativeShortVideo/pic-6.jpg';
import video from '../img/CreativeShortVideo/video.mp4';
import more from '../img/CreativeShortVideo/more.png';
import big5 from '../img/CreativeShortVideo/big5.png';
import p1 from '../img/CreativeShortVideo/p1.jpg';
import p2 from '../img/CreativeShortVideo/p2.jpg';
import p3 from '../img/CreativeShortVideo/p3.jpg';
import p4 from '../img/CreativeShortVideo/p4.jpg';
import p5 from '../img/CreativeShortVideo/p5.jpg';
import p6 from '../img/CreativeShortVideo/p6.jpg';
import p7 from '../img/CreativeShortVideo/p7.jpg';
import ads from '../img/CreativeShortVideo/ads.jpg';

export default function CreativeShortVideo(){
    useEffect( () =>{
        let $CreativeShortVideoBannerWrap = $('.CreativeShortVideo_banner_wrap');
        $CreativeShortVideoBannerWrap.css('height', '85vh');

        let $oUl = $('.CreativeShortVideo_content_wrap').find('ul');
        $oUl.get(0).appendChild($oUl.get(0).firstElementChild.cloneNode(true));
        let timer = null;
        let $aLi = $oUl.find('li');
        let $aA = $('.CreativeShortVideo_content_wrap').find('a');
        let oneWidth = $aLi.eq(0).width();
        let iNow = 0;
        let iNow2 = 0; 
        $oUl.css('width',(oneWidth * $aLi.length)+'px');
        function toRun(){
            if(iNow === $aLi.length-1){
                iNow=1;
                $oUl.css('left',0);   
            }else{
                iNow++;
            }
    
            if (iNow2 === $aA.length -1){
                iNow2 = 0;
            }else{
                iNow2++;
            }
            $oUl.animate({left : -oneWidth * iNow},500);
            $aA.removeClass('active');
            $aA.eq(iNow2).addClass('active');
        }
        
        timer = setInterval(toRun, 2000);
        
        $aA.hover(function(){
            iNow2 = iNow = $aA.index(this);
            $aA.removeClass('active');
            $(this).addClass('active');
            clearInterval(timer);
            $oUl.animate({left : -oneWidth * iNow},500);
    
        }, function(){
            timer = setInterval(toRun, 2000);
        });

        return () =>{
            $('#CreativeShortVideoContent').parent().remove('#CreativeShortVideoContent');
        }
    }, []);
    return (
        <section id="CreativeShortVideoContent">
            <div className="CreativeShortVideo_banner_wrap">
                <img src={CreativeShortVideo_banner} alt="banner图" />
                <p>
                    <span>真人实拍</span>
                    <span>短视频</span>
                    <span>游戏特效</span>
                    <span>宣传片</span>
                    <span>广告片</span>
                    <span>后期配乐</span>
                </p>
                <Link to="#"
                    style={{
                        backgroundImage:`url(${start})`,
                        backgroundRepeat:`no-repeat`,
                        backgroundSize:'cover'   
                    }}
                > 开启创意时刻</Link>
            </div>
            <div className="CreativeShortVideo_wrap">
                <div className="CreativeShortVideo_goodIdea_wrap">
                    <div 
                        className="CreativeShortVideo_goodIdea"
                        style={{
                            backgroundImage:`url(${title})`,
                            backgroundPosition:`center 4.3%`,
                            backgroundRepeat:`no-repeat`,
                            backgroundSize: '16.67% '  
                        }}
                    >
                        <div className="CreativeShortVideo_line"></div>
                        <span>沟通、协作、交流，把一切0的想法变为无限可能</span>
                        <div className="CreativeShortVideo_pic_wrap">
                            <img src={pic_1} alt="1" />
                            <img src={pic_2} alt="1" />
                            <img src={pic_3} alt="1" />
                            <img src={pic_4} alt="1" />
                            <img src={pic_5} alt="1" />
                            <img src={pic_6} alt="1" />
                        </div>
                        <Link to="#" className="more"><img src={more} alt="" /></Link>
                        <Link to="#" className="more"><img src={more} alt="" /></Link>
                        <div className="CreativeShortVideo_pic_wrap2">
                            <video src={video} controls="controls">
                                your browser does not support the video tag
                            </video>
                        </div>
                        <div className="CreativeShortVideo_pic_wrap3"
                             style={{
                                backgroundImage:`url(${big5})`,
                                backgroundRepeat:`no-repeat`,
                                backgroundSize: '55.1867% '  
                            }} 
                        >
                            <h2>小时创意链</h2>
                            <p>抢占最佳创意时机 <br /> 保证高效率优质创意产出</p>
                        </div>
                        <div className="CreativeShortVideo_content_wrap">
                            <ul>
                                <li style={{display: "block"}}>
                                    <p>专业高效创意团队 <br /> 20,000+视频创意经验累积</p>
                                    <em>创意策划、拍摄、优化等一站式服务<br /> 创意团队平均业内从业经验5年以上</em>
                                </li>
                                <li>
                                    <p>顶尖设备</p>
                                    <em>专业高端的拍摄设备<br /> 拍摄高质量视频素材</em>
                                </li>
                                <li>
                                    <p>精细化创意运营 <br />追踪效果落地</p>
                                    <em>实现创意精细化运营<br /> 专属团队追踪每一个创意的最强转化</em>
                                </li>
                                <li>
                                    <p>脑洞新奇</p>
                                    <em>90/95后创意达人<br /> 创意时代的新生力量 </em>
                                </li>
                                <li>
                                    <p>国内海外服务经验<br />满足多样的KPI达成</p>
                                    <em>投放、优化、监测、执行流程、应急服务等标准化流程作业 </em>
                                </li>
                                <li>
                                    <p>经验丰富<br />10年+</p>
                                    <em>创意行业资深人士<br />拍摄作品曾获得行业内外众多奖项</em>
                                </li>
                                <li>
                                    <p>演艺资源</p>
                                    <em>内部有稳定且经验丰富的演职员工<br />外部对接专业经纪公司</em>
                                </li>
                            </ul>
                            <Link to="#" className="active"></Link>
                            <Link to="#"></Link>
                            <Link to="#"></Link>
                            <Link to="#"></Link>
                            <Link to="#"></Link>
                            <Link to="#"></Link>
                            <Link to="#"></Link>  
                        </div>
                    </div>
                </div>
                <div className="CreativeShortVideo_server">
                    <h2>服务流程</h2>
                    <div className="CreativeShortVideo_server_line"></div>
                    <h3>专人一站式对接，7*24小时随时响应，中途不换人</h3>
                    <ul>
                        <li>
                            <img src={p1} alt="1" />
                            <div>创意分析</div>
                            <p><b>•</b>人群分析</p>
                            <p><b>•</b>创意洞察</p>
                            <p><b>•</b>目标定制</p>
                            <p><b>•</b>创意方向</p>
                        </li>
                        <li>
                        <img src={p2} alt="1" />
                            <div>创意脚本</div>
                            <p><b>•</b>创意方向</p>
                            <p><b>•</b>创意脚本</p>
                        </li>
                        <li>
                        <img src={p3} alt="1" />
                            <div>演员筛选</div>
                            <p><b>•</b>确定演员</p>
                            <p><b>•</b>演员及场<br/>地沟通</p>
                            <p><b>•</b>确定排期</p>
                        </li>
                        <li>
                        <img src={p4} alt="1" />
                            <div>设计&拍摄制作</div>
                            <p><b>•</b>视频平面支持</p>
                            <p><b>•</b>视频前期拍摄</p>
                        </li>
                        <li>
                        <img src={p5} alt="1" />
                            <div>后期制作</div>
                            <p><b>•</b>创意剪辑</p>
                            <p><b>•</b>声音处理</p>
                            <p><b>•</b>后期效果合成</p>
                        </li>
                        <li>
                        <img src={p6} alt="1" />
                            <div>优化&调整</div>
                            <p><b>•</b>字幕优化</p>
                            <p><b>•</b>声音优化</p>
                            <p><b>•</b>剪辑优化</p>
                        </li>
                        <li>
                        <img src={p7} alt="1" />
                            <div>报告&追踪</div>
                            <p><b>•</b>效果追踪</p>
                            <p><b>•</b>创意优化建议</p>
                        </li>
                    </ul>
                    <span>提前制定【备选方案】</span>
                    <br />
                    <br />
                    <span>各环节实施实时监测，做好项目【风险预警】</span>
                    <h2>国内海外-客户服务经验</h2>
                    <div className="line"></div>
                    <h3>与国内海外顶尖社交公司及金融、教育、电商、游戏等广告主建立稳定长期合作关系</h3>
                    <img id="CreativeShortVideo_server_ads" src={ads} alt="广告商家logo图" />
                </div>
            </div>
        </section>
    );
}