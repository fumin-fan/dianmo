import React, {useEffect} from 'react';
import $ from  'jquery';
import solutions_banner from '../img/solutions/solutions_banner.jpg';
import Form from '../shareComponent/form';
import friends from '../img/solutions/friends.jpg';
import address from '../img/solutions/home.png';
import tel from '../img/solutions/tel.png';
import emai from '../img/solutions/email.png';
import html_1 from '../map/map_1';
import html_2 from '../map/map_2';
import html_3 from '../map/map_3';
import html_4 from '../map/map_4';
import solutions_platform from '../img/solutions/platform.jpg'

export default function Solutions(){
    useEffect( () =>{
        let $solutionsBanner = $('.solutionsBanner');
        $solutionsBanner.css('height', '85vh');

        /* window.location.hash = window.decodeURIComponent(window.location.hash);
        const scrollToAnchor = () => {
          const hashParts = window.location.hash.split('#');
          if (hashParts.length > 2) {
            const hash = hashParts.slice(-1)[0];
            document.querySelector(`#${hash}`).scrollIntoView();
          }
        };
        scrollToAnchor();
        window.onhashchange = scrollToAnchor; */



        let $oUl = $('.contactUs_wrap ul');
        let $aLiUl = $oUl.find('li');
        let $oOl = $('.contactUs_wrap ol');
        let $aLiOl = $oOl.find('li');
        let $aIframe = $('.map').find('iframe');
        $aLiUl.on('click', function(){
            let iNow = $aLiUl.index(this);
            $aLiUl.removeClass('active');
            $(this).addClass('active');
            $aLiOl.css('display', 'none');
            $aIframe.css('display', 'none');
            setTimeout(function(){
                $aLiOl.eq(iNow).css('display', 'block');
                $aIframe.eq(iNow).css('display', 'block');
            }, 100);    
        })
        document.getElementById('iframe_1').contentWindow.document.write(html_1);
        document.getElementById('iframe_2').contentWindow.document.write(html_2);
        document.getElementById('iframe_3').contentWindow.document.write(html_3);
        document.getElementById('iframe_4').contentWindow.document.write(html_4);
        return () =>{
            $('#solutionsContent').parent().remove('#solutionsContent');
        }
    },[]);
    return (
        <section id="solutionsContent">
            <div className="solutionsBanner">
                <img src={solutions_banner} alt="banner图" />
            </div>
            
            <div className="solutions_wrap" id="here">
                <div className="information_wrap">
                    <div className="information_wrap_l fl">
                        <h3>仅一步, <br />触达您的全球用户</h3>
                        <div className="line"></div>
                        <p>想要咨询更多服务内容，<br />或有其它合作事宜，请通过邮件联系我们：<br /> clicksmobi@imygbs.com <br />或者在此留下您的联系方式:</p>
                    </div>
                    <Form  className="fr"/>
                </div>
                <dl className=" solutionsFriends clear">
                    <dt className="fl"><img src={friends} alt="合作平台图片" /></dt>
                    <dd className="fr">
                        <h2>优质海内外媒体合作</h2>
                        <b className="clear">Far-reaching & Accurate Targeting</b>
                        <div className="line"></div>
                        <p>通过整合海内外优质媒体资源，我们可以帮助您了<br />解海内外市场，锁定目标客户，选择适合您的广告<br />投放策略，以达到极佳投放效果</p>
                        <span>Google一级代理</span><br />
                        <span>UC Ads顶级代理</span><br />
                        <span>Facebook优质合作伙伴</span><br />
                        <span>今日头条、Inmobi、TikTok一级代理</span>
                    </dd>
                </dl>
            </div>
            <div className="contactUs">
                <h2>联系我们  让天下没有难做的广告</h2>
                <div className="contactUs_wrap">
                    <ul>
                        <li className="active">上海</li>
                        <li>北京</li>
                        <li>成都</li>
                        <li>广州</li>
                    </ul>
                    <ol>
                        <li style={{display: "block"}}>
                            <div style={{
                                backgroundImage:`url(${address})`,
                                backgroundPosition:`0 center`,
                                backgroundRepeat:`no-repeat`
                            }}><p>上海市静安区武宁南路488号智慧广场16F</p></div>
                            <div style={{
                                backgroundImage:`url(${tel})`,
                                backgroundPosition:`0 center`,
                                backgroundRepeat:`no-repeat`
                            }}><p>18918459159</p></div>
                            <div style={{
                                backgroundImage:`url(${emai})`,
                                backgroundPosition:`0 center`,
                                backgroundRepeat:`no-repeat`
                            }}><p>clicksmobi@imygbs.com</p></div>
                        </li>
                        <li>
                        <div style={{
                                backgroundImage:`url(${address})`,
                                backgroundPosition:`0 center`,
                                backgroundRepeat:`no-repeat`
                            }}><p>北京市朝阳区莱锦文化创意产业园CF11</p></div>
                        <div style={{
                                backgroundImage:`url(${tel})`,
                                backgroundPosition:`0 center`,
                                backgroundRepeat:`no-repeat`
                            }}><p>18918459159</p></div>
                        <div style={{
                                backgroundImage:`url(${emai})`,
                                backgroundPosition:`0 center`,
                                backgroundRepeat:`no-repeat`
                            }}><p>clicksmobi@imygbs.com</p></div>
                        </li>
                        <li>
                        <div style={{
                                backgroundImage:`url(${address})`,
                                backgroundPosition:`0 center`,
                                backgroundRepeat:`no-repeat`
                            }}><p>成都市高新区天府二街151号</p></div>
                        <div style={{
                                backgroundImage:`url(${tel})`,
                                backgroundPosition:`0 center`,
                                backgroundRepeat:`no-repeat`
                            }}><p>18918459159</p></div>
                        <div style={{
                                backgroundImage:`url(${emai})`,
                                backgroundPosition:`0 center`,
                                backgroundRepeat:`no-repeat`
                            }}><p>clicksmobi@imygbs.com</p></div>
                        </li>
                        <li>
                            <div style={{
                                backgroundImage:`url(${address})`,
                                backgroundPosition:`0 center`,
                                backgroundRepeat:`no-repeat`
                            }}><p>广州市番禺区南村镇汇智二路236号</p></div>
                            <div style={{
                                backgroundImage:`url(${tel})`,
                                backgroundPosition:`0 center`,
                                backgroundRepeat:`no-repeat`
                            }}><p>18918459159</p></div>
                            <div style={{
                                backgroundImage:`url(${emai})`,
                                backgroundPosition:`0 center`,
                                backgroundRepeat:`no-repeat`
                            }}><p>clicksmobi@imygbs.com</p></div>
                        </li>
                    </ol>
                    <div className="map">
                        <iframe
                        id="iframe_1"
                        title="company map"
                        width="100%"
                        height="100%"
                        style={{display: "block"}}
                        > 
                        </iframe>
                        <iframe
                            id="iframe_2"
                            title="company map"
                            width="100%"
                            height="100%"
                            >    
                        </iframe>
                        <iframe
                            id="iframe_3"
                            title="company map"
                            width="100%"
                            height="100%"
                            >    
                        </iframe>
                        <iframe
                            id="iframe_4"
                            title="company map"
                            width="100%"
                            height="100%"
                            >    
                        </iframe>
                    </div>
                </div>
            </div>
            <div className="solutionsPlatform">
                <h2>合作客户 行业类型全覆盖</h2>
                <img src={solutions_platform} alt="合作平台" />
            </div>
        </section>
    );
}