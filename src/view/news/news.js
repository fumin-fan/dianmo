import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import $ from  'jquery';
import news_banner from '../img/news/news_banner.jpg';
import span_bg from '../img/about/span_bg.jpg';
import newsPic1 from '../img/news/newsPic1.jpg';
import newsPic2 from '../img/news/newsPic2.jpg';
import newsPic3 from '../img/news/newsPic3.jpg';
import newsPic4 from '../img/news/newsPic4.jpg';
import newsPic5 from '../img/news/newsPic5.jpg';
import newsPic6 from '../img/news/newsPic6.jpg';

export default function News(props){
    let path = props.location.pathname.split("/");
    let tab = path[path.length-1];
    useEffect( () =>{
       let $aInput = $('.news_wrap').find('input');
        let $aSpan = $aInput.next('span');
        $aSpan.css('background', 'none');
        
        switch(tab){
            case 'industryInfo':
                $aSpan.eq(0).css({
                    backgroundImage:`url(${span_bg})`,
                    backgroundRepeat:`no-repeat`,  
                }); 
                $aInput.eq(0).css('checked', 'checked');
                    break;
            case 'companyInfo':
                $aSpan.eq(1).css({
                    backgroundImage:`url(${span_bg})`,
                    backgroundRepeat:`no-repeat`,  
                }); 
                $aInput.eq(1).css('checked', 'checked');
                    break;
            case 'mediaInfo':
                $aSpan.eq(2).css({
                    backgroundImage:`url(${span_bg})`,
                    backgroundRepeat:`no-repeat`,  
                }); 
                $aInput.eq(2).css('checked', 'checked');
                    break;
                default :
                $aSpan.eq(0).css({
                    backgroundImage:`url(${span_bg})`,
                    backgroundRepeat:`no-repeat`,  
                });
                $aInput.eq(0).css('checked', 'checked'); 
                 return;

        }
        $aSpan.on('click', function(){
            $aSpan.css('background', 'none');
            $(this).css({
                backgroundImage:`url(${span_bg})`,
                backgroundRepeat:`no-repeat`,  
            });
        });

        return ()=>{
            $('#newsContent').parent().remove('#newsContent');
        }
    } , [tab]);
    return(
        <section id="newsContent">
            <div className="news_banner">
                <img src={news_banner} alt="banner图" />
            </div>
            <div className="news_content_wrap">
                <div className="news_wrap">
                    <label>
                        
                        {tab === "industryInfo" ? (
                            <input type="radio" defaultChecked name="nav" />
                            ) : (
                            <input type="radio" name="nav" /> 
                        
                            )}
                       <span className="news_span_1">行业资讯</span>
                        <ul className="industryInfo">
                            <li>
                                <dl className="clear">
                                    <dt>
                                        <img src={newsPic3} alt="banner图" />
                                    </dt>
                                    <dd>
                                        <h2>2019中国互联网实用工具营销策略报告</h2>
                                        <em>发表于 2020年5月25日</em>
                                        <p>营销环境：作为解决用户日常上网场景各类问题和需求的互联网实用工具，其已经进入存量市场，用户普及度较高，加上用户粘性较低...<Link to="/artical">阅读全文</Link></p>
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <dl className="clear">
                                    <dt>
                                        <img src={newsPic4} alt="banner图" />
                                    </dt>
                                    <dd>
                                        <h2>乘风破浪| 全球电子商务发展状况</h2>
                                        <em>发表于 2019年12月31日</em>
                                        <p>2019年，全球APP下载量创下了2040亿次的新纪录，其中购物App下载量超过54亿次，同比增长20%；同时日均使用购物App时长持续增加...<Link to="/artical">阅读全文</Link></p>
                                    </dd>
                                </dl>
                            </li>
                        </ul>
                    </label>
                    <label>
                        {tab === "companyInfo" ? (
                            <input type="radio" defaultChecked name="nav" />
                            ) : (
                            <input type="radio" name="nav" /> 
                            
                        )}
                        <span className="news_span_2">公司动态</span>
                        <ul className="companyInfo">
                            <li>
                                <dl className="clear">
                                    <dt>
                                        <img src={newsPic5} alt="banner图" />
                                    </dt>
                                    <dd>
                                        <h2>点摩5周年| 躬身入局，创无限可能</h2>
                                        <em>发表于 2020年7月20日</em>
                                        <p>5年，瞬息万变，5年，不进则退;从单一到多元,从天真到成熟；5年，不忘初心，爱心足迹踏南走北。沟通、交流、协作、创新，把一切...<Link to="/artical">阅读全文</Link></p>
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <dl className="clear">
                                    <dt>
                                        <img src={newsPic6} alt="banner图" />
                                    </dt>
                                    <dd>
                                        <h2>十月小春好| 第四届点摩爱心助学公益暨公司团建活动圆满结束</h2>
                                        <em>发表于 2020年1月15日</em>
                                        <p>热水塘小学，地处云南元阳县山区，交通不便，生活条件艰苦。目前，该校共有54名学生，都来自哈尼族。秋冬将至，心系贫困山区孩子...<Link to="/artical">阅读全文</Link></p>
                                    </dd>
                                </dl>
                            </li>
                        </ul>
                    </label>
                    <label>
                        {tab === "mediaInfo" ? (
                            <input type="radio" defaultChecked name="nav" />
                            ) : (
                            <input type="radio" name="nav" /> 
                            
                        )}
                        <span className="news_span_3">媒体动态</span>
                        <ul className="mediaInfo">
                            <li>
                                <dl className="clear">
                                    <dt>
                                        <img src={newsPic1} alt="banner图" />
                                    </dt>
                                    <dd>
                                        <h2>线上活动| “重拳出击”，中重度游戏出海无忧</h2>
                                        <em>发表于 2020年6月17日</em>
                                        <p>直播内容:1. Adjust2020应用趋势报告解析;2. Adjust只是一个追踪工具？如何通过Adjust实现更有效的线上推广;3. 如何利用...<Link to="/artical">阅读全文</Link></p>
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <dl className="clear">
                                    <dt>
                                        <img src={newsPic2} alt="banner图" />
                                    </dt>
                                    <dd>
                                        <h2>携手Google-探寻国内流量新机遇</h2>
                                        <em>发表于 2019年12月11日</em>
                                        <p>12月11日下午，点摩广告携手Google举办的探寻国内流量新机遇大会在北京万达文华酒店举办，现场邀请了一百多位对谷歌国内流量...<Link to="/artical">阅读全文</Link></p>
                                    </dd>
                                </dl>
                            </li>
                        </ul>
                    </label>
                    <Link className="nextPage" to="#">下一页</Link>
                    <Link className="prevPage" to="#">上一页</Link>
                </div>
            </div>
        </section>
    );
}