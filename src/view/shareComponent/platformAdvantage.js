import React from 'react';
import {Link} from "react-router-dom";
import {Data} from './data';
import line from './line.jpg';
import platformAdvantage_1 from './platformAdvantage_1.jpg';
import platformAdvantage_2 from './platformAdvantage_2.jpg';
import platformAdvantage_3 from './platformAdvantage_3.jpg';
import platformAdvantage_4 from './platformAdvantage_4.jpg';


function reducer(action) {
    switch(action){
        case 'facebook':
            return Data[0].data;
        case 'inmobi':
            return Data[1].data;
        case 'ucads':
            return Data[2].data;
        case 'tiktok':
            return Data[3].data;
        case 'toutiao':
            return Data[4].data;
        default:
            return {}
    }
}

export default function PlatformAdvantage(props){
    const {content} = props;
    const data = reducer(content);
    
    return (
        <div className="paltform_advantage">
            <h2>平台优势</h2>
            <div className="paltform_advantage_line"></div>
            <h3>{data.head}</h3>
            <ul>
                <li
                    style={{
                        backgroundImage:`url(${platformAdvantage_1})`,
                        backgroundPosition:`center 0`,
                        backgroundRepeat:`no-repeat`,
                        backgroundSize:'43.33333333%'   
                    }}
                >
                    <div>{data.brief[0]}</div>
                    <img src={line} alt="1" />
                    <p>{data.details[0]}</p>
                </li>
                <li
                    style={{
                        backgroundImage:`url(${platformAdvantage_2})`,
                        backgroundPosition:`center 0`,
                        backgroundRepeat:`no-repeat`,
                        backgroundSize:'43.33333333%'   
                    }}
                >
                    <div>{data.brief[1]}</div>
                    <img src={line} alt="1" />
                    <p>{data.details[1]}</p>
                </li>
                <li
                    style={{
                        backgroundImage:`url(${platformAdvantage_3})`,
                        backgroundPosition:`center 0`,
                        backgroundRepeat:`no-repeat`,
                        backgroundSize:'43.33333333%'   
                    }}
                >
                    <div>{data.brief[2]}</div>
                    <img src={line} alt="1" />
                    <p>{data.details[2]}</p>
                </li>
                <li
                    style={{
                        backgroundImage:`url(${platformAdvantage_4})`,
                        backgroundPosition:`center 0`,
                        backgroundRepeat:`no-repeat`,
                        backgroundSize:'43.33333333%'   
                    }}
                >
                    <div>{data.brief[3]}</div>
                    <img src={line} alt="1" />
                    <p>{data.details[3]}</p>
                </li>
            </ul>
            <Link to="#">{data.customized}</Link>
        </div>
    );
}