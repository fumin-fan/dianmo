import React from 'react';

export default function Form(props) {
    return (
        <form className = {props.className ? props.className : ''}>
            <input type="text" defaultValue="姓名" />
            <input type="text" defaultValue="邮箱" />
            <input type="text" defaultValue="手机" />
            <input type="text" defaultValue="企业名称" />
            <select id="industry"><option defaultValue="">行业（可选择）</option></select>
            <label>
                选择您想要咨询的媒体？<select id="media"><option defaultValue="">请选择</option></select>
            </label>
            <label >
                选择您想要推广的地区<select id="area"><option defaultValue="">请选择</option></select>
            </label>
            <textarea placeholder="其他合作事宜："></textarea>
            <input type="button" defaultValue="提     交" />
        </form>
    );
}
