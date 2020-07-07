import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import $ from  'jquery';
import job_banner from '../img/job/job_banner.jpg';
import job from '../img/job/job.jpg';
import line from '../img/job/line.jpg';
import platform_1 from '../img/job/platform_1.png';
import platform_2 from '../img/job/platform_2.png';
import platform_3 from '../img/job/platform_3.png';
import platform_4 from '../img/job/platform_4.png';

export default function Job(){
    useEffect(() =>{
        let $brandingBanner = $('.brandingBanner');
        $brandingBanner.css('height', '85vh');

        let $oUl = $('.job ul');
        let $aLiUl = $oUl.find('li');
        let $oOl = $('.job ol');
        let $aLiOl = $oOl.find('li');
        $aLiUl.on('click', function(){
            let iNow = $aLiUl.index(this);
            $aLiUl.removeClass('active');
            $(this).addClass('active');
            $aLiOl.css('display', 'none');
            $aLiOl.eq(iNow).css('display', 'block');
        })

        return () =>{
            $('#brandingContent').parent().remove('#brandingContent');
        }
    }, []);

    return (
        <section id="jobContent">
            <div className="brandingBanner">
                <img src={job_banner} alt="banner图" />
            </div>
            <div className="job">
                <ul>
                    <li className="active">海外优化师</li>
                    <li>初级海外优化师</li>
                    <li>短视频编导</li>
                    <li>广告视频设计师</li>
                    <li>广告销售</li>
                    <li>广告客户执行AE</li>
                </ul>
                <ol>
                    <li 
                        style={{
                            display: "block",
                            backgroundImage:`url(${line})`,
                            backgroundPosition:`7.126% 9.621%`,
                            backgroundRepeat:`no-repeat`,
                            backgroundSize:'20.14%'
                        }}
                    >
                        <h2>海外优化师</h2>
                        <div className="wrap_1">
                            <h3>岗位职责 /</h3>
                            <p>1、操作谷歌adwords/Facebook广告投放及优化，针对不同产品制定广告投放机制和策略；</p>
                            <p>2、运用广告素材与文案进行广告账户操作，并确保所负责的广告的正确性；</p>
                            <p>3、广告账户数据分析，根据分析结果给出优化建议，并不断优化推广效果。</p>
                        </div>
                        <div className="wrap_2">
                            <h3>岗位要求 /</h3>
                            <p>1、有adwords或Facebook广告平台操作经验；</p>
                            <p>2、对数字敏感，数据分析能力强；</p>
                            <p>3、逻辑性强，具有高度的责任心，能够独立思考；</p>
                            <p>4、资深经验者待遇从优。</p>
                        </div>
                        <p className="location">工作地点：上海/北京/成都</p>
                        <Link to="#" className="email">简历投递：hr@imygbs.com</Link>
                        <img src={job} alt="1" style={{width:'85%'}} />
                    </li>
                    <li
                        style={{
                            backgroundImage:`url(${line})`,
                            backgroundPosition:`7.126% 9.621%`,
                            backgroundRepeat:`no-repeat`,
                            backgroundSize:'20.14%'   
                        }}
                    >
                        <h2>初级海外优化师</h2>
                        <div className="wrap_1">
                            <h3>岗位职责 /</h3>
                            <p>1、操作谷歌adwords/Facebook广告投放及优化，针对不同产品制定广告投放机制和策略；</p>
                            <p>2、运用广告素材与文案进行广告账户操作，并确保所负责的广告的正确性；</p>
                            <p>3、进行广告账户数据分析，根据分析结果给出优化建议，并不断优化推广效果。</p>
                        </div>
                        <div className="wrap_2">
                            <h3>岗位要求 /</h3>
                            <p>1、本科及以上学历，英语CET-4及以上优秀应届毕业生；</p>
                            <p>2、热爱互联网广告营销行业，对数字敏感、数据分析能力强、逻辑性强；</p>
                            <p>3、具备努力进取的精神、踏实肯干、配合度高、积极灵活、悟性高、善于交流措辞、乐于独立思考。</p>
                        </div>
                        <p className="location">工作地点：成都</p>
                        <Link to="#" className="email">简历投递：hr@imygbs.com</Link>
                        <img src={job} alt="1" />
                    </li>
                    <li
                        style={{
                            backgroundImage:`url(${line})`,
                            backgroundPosition:`7.126% 9.621%`,
                            backgroundRepeat:`no-repeat`,
                            backgroundSize:'20.14%'   
                        }}
                    >
                        <h2>短视频编导</h2>
                        <div className="wrap_1">
                            <h3>岗位职责 /</h3>
                            <p>1、主要负责广告短视频内容的编导工作，包括策划、创意、情节构思、编剧、导演等；</p>
                            <p>2、负责视频的拍摄工作，对短视频有自己的见解，熟悉新媒体短视频行业；</p>
                            <p>3、熟练使用专业的剪辑合成工具，能够有效的整理素材并剪辑制作成片；</p>
                            <p>4、根据视频脚本或文案，准确理解视频意图，把控视频逻辑及剪辑节奏；</p>
                            <p>5、负责视频制作时所需的音频、影像、图片等素材的剪辑以及制作整理，独立完成视频的后期剪辑、特效、后期合成、音乐音效字幕等技术，完成视频的包装与特效处理工作。</p>
                        </div>
                        <br />
                        <div className="wrap_2">
                            <h3>岗位要求 /</h3>
                            <p>1、了解PS、PR、AE等相关软件；</p>
                            <p>2、了解各类视频风格，能进行相关风格视频创作；</p>
                            <p>3、具有优秀的美术功底与视觉感，对构图、色彩及镜头语言有清晰的认识；</p>
                            <p>4、有想法及创意，思维灵活，具有良好的团队意识以及较强的主动性和创造性；</p>
                            <p>5、具备较强的沟通意识与能力。</p>
                        </div>
                        <p className="location">工作地点：成都</p>
                        <Link to="#" className="email">简历投递：hr@imygbs.com</Link>
                        <img src={job} alt="1" style={{width:'60%'}} />
                    </li>
                    <li
                        style={{
                            backgroundImage:`url(${line})`,
                            backgroundPosition:`7.126% 9.621%`,
                            backgroundRepeat:`no-repeat`,
                            backgroundSize:'20.14%'   
                        }}
                    >
                        <h2>广告视频设计师</h2>
                        <div className="wrap_1">
                            <h3>岗位职责 /</h3>
                            <p>1、负责各类APP的推广视频创意制作;</p>
                            <p>2、了解公司广告项目与市场用户喜好，针对不同市场的用户提供创意设计支持，来提升广告投放效果。</p>
                        </div>
                        <br />
                        <br />
                        <div className="wrap_2">
                            <h3>岗位要求 /</h3>
                            <p>1、熟练运用AE、Pr、Ps、AI等设计软件</p>
                            <p>2、美术设计相关专业，具有良好的视觉设计及审美能力，有丰富的想象力和创作欲望及激情；</p>
                            <p>3、具有良好的沟通与表达能力、踏实努力；</p>
                            <p>4、有效果类广告公司或游戏、工具类广告主工作经验者优先。</p>
                        </div>
                        <p className="location">工作地点：北京/上海/成都</p>
                        <Link to="#" className="email">简历投递：hr@imygbs.com</Link>
                        <img src={job} alt="1"  style={{width:'90%'}} />
                    </li>
                    <li
                        style={{
                            backgroundImage:`url(${line})`,
                            backgroundPosition:`7.126% 9.621%`,
                            backgroundRepeat:`no-repeat`,
                            backgroundSize:'20.14%'   
                        }}
                    >
                        <h2>广告销售</h2>
                        <div className="wrap_1">
                            <h3>岗位职责 /</h3>
                            <p>1、负责公司广告资源销售，熟练掌握资源信息；</p>
                            <p>2、客户关系的建立和维护，定期与客户沟通，及时就客户的要求提出建设性意见；</p>
                            <p>3、协调内、外部的资源，完成个人和团队的销售任务；</p>
                            <p>4、应收款项的跟进回笼，强化客户关系的维护管理及深化。</p>
                        </div>
                        <div className="wrap_2">
                            <h3>岗位要求 /</h3>
                            <p>1、有丰富的海外移动广告，Google或Facebook经验优先；</p>
                            <p>2、形象较好，沟通能力强，有较强的总结能力和团队精神，具有较强的责任心和服务意识；</p>
                            <p>3、工作积极主动，认真负责，做事有条理，善于处理繁杂事务；</p>
                            <p>4、语流利加分。</p>
                        </div>
                        <p className="location">工作地点：上海/广州</p>
                        <Link to="#" className="email">简历投递：hr@imygbs.com</Link>
                        <img src={job} alt="1" style={{width:'70%'}} />
                    </li>
                    <li
                        style={{
                            backgroundImage:`url(${line})`,
                            backgroundPosition:`7.126% 9.621%`,
                            backgroundRepeat:`no-repeat`,
                            backgroundSize:'20.14%'   
                        }}
                    >
                        <h2>广告客户执行AE</h2>
                        <div className="wrap_1">
                            <h3>岗位职责 /</h3>
                            <p>1、理解客户需求，制定执行计划；</p>
                            <p>2、为客户提供协调工作，并辅助客户经理工作；</p>
                            <p>3、协调部门内部以及各团队之间的相互关系和协作；</p>
                            <p>4、处理客户合同相关事宜。</p>
                        </div>
                        <div className="wrap_2">
                            <h3>岗位要求 /</h3>
                            <p>1、熟练使用办公软件Excel、Word等；</p>
                            <p>2、有广告行业从业经验优先；</p>
                            <p>3、细心细致，有强烈的服务意识。</p>
                        </div>
                        <p className="location">工作地点：广州</p>
                        <Link to="mailto:hr@imygbs.com" className="email">简历投递：hr@imygbs.com</Link>
                        <img src={job} alt="1"  style={{width:'85%'}} />
                    </li>
                </ol>
            </div>
            <div className="job_platform">
                <h2>通过以下合作平台了解更多职位详情</h2>
                <div className="job_platform_wrap">
                    <img src={platform_1} alt="1" />
                    <img src={platform_2} alt="1" />
                    <img src={platform_3} alt="1" />
                    <img src={platform_4} alt="1" />
                </div>
            </div>
        </section>
    );
}