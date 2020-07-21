import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import $ from  'jquery';
import news_banner from '../img/news/news_banner.jpg';
import span_bg from '../img/about/span_bg.jpg';
import newsPic from '../img/news/newsPic.jpg';

export default function News(){

    useEffect( () =>{
       let $aInput = $('.news_wrap').find('input');
        let $aSpan = $aInput.next('span');
        $aSpan.on('click', function(){
            $aSpan.css('background', 'none');
            $(this).css({
                backgroundImage:`url(${span_bg})`,
                backgroundRepeat:`no-repeat`,  
            });
        });
    } , []);
    return(
        <section id="newsContent">
            <div className="news_banner">
                <img src={news_banner} alt="banner图" />
            </div>
            <div className="news_content_wrap">
                <div className="news_wrap">
                    <label>
                        <input type="radio" defaultChecked name="nav" />
                        <span
                            style={{
                                backgroundImage:`url(${span_bg})`,
                                backgroundRepeat:`no-repeat`,  
                            }}
                            className="news_span_1"
                        >行业资讯</span>
                        <ul className="industryInfo">
                            <li>
                                <dl className="clear">
                                    <dt>
                                        <img src={newsPic} alt="banner图" />
                                    </dt>
                                    <dd>
                                        <h2>2019中国互联网实用工具营销策略报告</h2>
                                        <em>发表于 2020年7月20日</em>
                                        <p>营销环境：作为解决用户日常上网场景各类问题和需求的互联网实用工具，其已经进入存量市场，用户普及度较高，加上用户粘性较低...<Link to="/artical">阅读全文</Link></p>
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <dl className="clear">
                                    <dt>
                                        <img src={newsPic} alt="banner图" />
                                    </dt>
                                    <dd>
                                        <h2>2019中国互联网实用工具营销策略报告</h2>
                                        <em>发表于 2020年7月20日</em>
                                        <p>营销环境：作为解决用户日常上网场景各类问题和需求的互联网实用工具，其已经进入存量市场，用户普及度较高，加上用户粘性较低...<Link to="/artical">阅读全文</Link></p>
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <dl className="clear">
                                    <dt>
                                        <img src={newsPic} alt="banner图" />
                                    </dt>
                                    <dd>
                                        <h2>2019中国互联网实用工具营销策略报告</h2>
                                        <em>发表于 2020年7月20日</em>
                                        <p>营销环境：作为解决用户日常上网场景各类问题和需求的互联网实用工具，其已经进入存量市场，用户普及度较高，加上用户粘性较低...<Link to="/artical">阅读全文</Link></p>
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <dl className="clear">
                                    <dt>
                                        <img src={newsPic} alt="banner图" />
                                    </dt>
                                    <dd>
                                        <h2>2019中国互联网实用工具营销策略报告</h2>
                                        <em>发表于 2020年7月20日</em>
                                        <p>营销环境：作为解决用户日常上网场景各类问题和需求的互联网实用工具，其已经进入存量市场，用户普及度较高，加上用户粘性较低...<Link to="/artical">阅读全文</Link></p>
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <dl className="clear">
                                    <dt>
                                        <img src={newsPic} alt="banner图" />
                                    </dt>
                                    <dd>
                                        <h2>2019中国互联网实用工具营销策略报告</h2>
                                        <em>发表于 2020年7月20日</em>
                                        <p>营销环境：作为解决用户日常上网场景各类问题和需求的互联网实用工具，其已经进入存量市场，用户普及度较高，加上用户粘性较低...<Link to="/artical">阅读全文</Link></p>
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <dl className="clear">
                                    <dt>
                                        <img src={newsPic} alt="banner图" />
                                    </dt>
                                    <dd>
                                        <h2>2019中国互联网实用工具营销策略报告</h2>
                                        <em>发表于 2020年7月20日</em>
                                        <p>营销环境：作为解决用户日常上网场景各类问题和需求的互联网实用工具，其已经进入存量市场，用户普及度较高，加上用户粘性较低...<Link to="/artical">阅读全文</Link></p>
                                    </dd>
                                </dl>
                            </li>
                        </ul>
                    </label>
                    <label>
                        <input type="radio" name="nav" />
                        <span className="news_span_2">公司动态</span>
                        <ul className="companyInfo">
                            <li>
                                <dl className="clear">
                                    <dt>
                                        <img src={newsPic} alt="banner图" />
                                    </dt>
                                    <dd>
                                        <h2>2019中国互联网实用工具营销策略报告</h2>
                                        <em>发表于 2020年7月20日</em>
                                        <p>营销环境：作为解决用户日常上网场景各类问题和需求的互联网实用工具，其已经进入存量市场，用户普及度较高，加上用户粘性较低...<Link to="/artical">阅读全文</Link></p>
                                    </dd>
                                </dl>
                            </li>
                        </ul>
                    </label>
                    <label>
                        <input type="radio" name="nav" />
                        <span className="news_span_3">媒体动态</span>
                        <ul className="mediaInfo">
                            <li>
                                <dl className="clear">
                                    <dt>
                                        <img src={newsPic} alt="banner图" />
                                    </dt>
                                    <dd>
                                        <h2>2019中国互联网实用工具营销策略报告</h2>
                                        <em>发表于 2020年7月20日</em>
                                        <p>营销环境：作为解决用户日常上网场景各类问题和需求的互联网实用工具，其已经进入存量市场，用户普及度较高，加上用户粘性较低...<Link to="/artical">阅读全文</Link></p>
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