import React from 'react';
import {Link} from "react-router-dom";
import news_banner from '../img/news/news_banner.jpg';
import artical_top from '../img/artical/artical_top.jpg';
import artical_1 from '../img/artical/artical_1.jpg';
import artical_2 from '../img/artical/artical_2.jpg';
import artical_3 from '../img/artical/artical_3.jpg';
import artical_4 from '../img/artical/artical_4.jpg';
import artical_5 from '../img/artical/artical_5.jpg';

export default function Artical(){
    return (
        <section id="articalContent">
            <div className="artical_banner">
                <img src={news_banner} alt="banner图" />
            </div>
            <div className="artical_content_wrap">
                <div className="artical_wrap">
                    <h2>2019中国互联网实用工具营销策略报告</h2>
                    <img className="artical_pic0" src={artical_top} alt="" />
                    <p>
                        营销环境：作为解决用户日常上网场景各类问题和需求的互联网实用工具，其已经进入存量市场，用户普及度较高，加上用户粘性较低，用户转化较难，盈利变现较弱等特征，促使其在营销上也面临着增长乏力、预算不足、策略难做、效果难评等痛点，同时也使得实用工具企业在营销策略的制定上有着更高的要求。
                    </p>
                    <p>
                        用户洞察：互联网实用工具用户普及度高，画像分布覆盖丰富全面，在对实用工具的使用行为上，呈现出使用场景和时间碎片化，关注功能价值，可替代性强导致的忠诚度较低，以及使用需求明确等特征。由此也决定了实用工具在差异化、功能化、新鲜感等方面的营销需求的重要性。
                    </p>
                    <p>
                        营销策略：实用工具企业在营销决策中主要受到产品定位、产品生命周期、产品发展目标、竞品动作、时事热点、淡旺季和节庆日等相关因素的影响，在不同产品周期和不同营销路径下，都对应着不同的营销策略。
                    </p>
                    <p>营销趋势：</p>
                    <p>1）营销目标变化，实用工具存量市场愈加凸显，未来从拉新逐渐向促活转型；</p>
                    <p>2）营销模式变化，对数据和技术驱动的服务商依赖程度越来越深；</p>
                    <p>3）营销诉求变化，从简单的功能诉求，向更多元的差异化诉求辐射。</p>
                    <h3>营销环境</h3>
                    <p>1）用户增长乏力</p>
                    <p>
                        随着互联网流量红利的消失，众多互联网产品纷纷进入存量时代，尤其是发展时间较长的互联网实用工具，用户渗透率已经接近饱和。根据艾瑞UserTracker数据显示，中国实用工具APP月独立设备数增长逐渐放缓，2018年Q1月独立设备数为11.5亿台，同比增长率为19.5%，而2019年Q1月独立设备数仅增长到12.6亿台，同比增长率降至9.7%。从实用工具APP用户在所有APP中的渗透率来看，2019年Q3渗透率已经达到92.2%，并且近两年来基本维持不变，可见实用工具APP的用户渗透率已经达到天花板，这也是实用工具用户增长乏
                    </p>
                    <img className="artical_pic1" src={artical_1} alt="" />
                    <p>
                        2）粘性：用户使用次数和时长增长缓慢，粘性瓶颈愈加明显
                    </p>
                    <p>
                        2017年以来，移动APP整体的用户粘性不断在增强，而实用工具的用户粘性则增长缓慢。2017年Q1实用工具APP单机单日使用次数和所有APP整体情况的差距为15.5次，而这一差距到2019年Q3扩大到了26.7次。同样，2019年Q1实用工具APP单机单日有效使用时间和所有APP整体情况差距为130分钟，这一差距到2019年Q3扩大到了180分钟。可以看出实用工具用户在每天打开的次数和投入的时间上，均出现了比较明显的天花板。
                    </p>
                    <img className="artical_pic2" src={artical_2} alt="" />
                    <p>粘性：有需才用，用完即走</p>
                    <p>
                        实用工具在用户粘性方面的表现也并不理想。单机单日使用次数、单机单日有效使用时间和单机单次有效使用时间等代表用户粘性的指标均处于第七位。其中通讯聊天是单机单日使用次数最高的APP类别，平均每个设备每天会打开12次，而实用工具仅有5.8次，另外每个设备每天花费在视频服务上的时间高达94.2分钟，实用工具仅有33.6分钟。可见，实用工具的高普及度并没有带来高使用粘性，相比通讯聊天、视频、阅读、资讯等内容类APP，“有需才用，用完即走”仍然是广大实用工具产品的典型用户使用特征。
                    </p>
                    <h3>营销环境总结</h3>
                    <p>
                        通过以上营销环境的分析，可以将实用工具企业在营销策略层面的特征总结为四个方面：
                    </p>
                    <img className="artical_pic3" src={artical_3} alt="" />
                    <h3>用户洞察</h3>
                    <p>
                        1）	体验便捷和功能实用是用户对实用工具的主要需求，从调研结果来看，功能的专业度、丰富度以及便捷度成为用户最重视的三大原因，用户占比分别为37.4%、33.7%和31.3%。可见，当前用户对实用工具的需求和认知仍是功能导向。
                    </p>
                    <img className="artical_pic4" src={artical_4} alt="" />
                    <p>
                        2）	实用工具产品更换周期通常在一年内，主要原因仍是功能，由于实用工具产品的更换成本较低，因此用户更换实用工具产品的时间周期也较短，有64.8%的用户会在一年内更换实用工具产品。
                    </p>
                    <img className="artical_pic5" src={artical_5} alt="" />
                </div>
                <div className="artical_bottom">
                    <Link to="/news/industryInfo">返回列表</Link>
                    <Link to="#">上一篇</Link>
                    <Link to="#">下一篇</Link>
                </div>
                
            </div>
        </section>
    );
}