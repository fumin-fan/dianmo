import React, {useEffect} from "react";
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import { Menu, Dropdown, Button} from 'antd';
import { DownOutlined } from '@ant-design/icons';
import logo from  './img/logo.png';
import $ from  'jquery';

function MainHeader(props) {
   const solutionsMenu =(
    <Menu>
      <Menu.Item>
        <Link to='/branding'>品牌营销</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/game'>游戏推广</Link>
      </Menu.Item>
      <Menu.Item>
      <Link to='/app'>APP推广</Link>
      </Menu.Item>
      <Menu.Item>
      <Link to='/E-commerce'>电商推广</Link>
      </Menu.Item>
      <Menu.Item>
      <Link to='/CreativeShortVideo'>创意短视频</Link>
      </Menu.Item>
      <Menu.Item>
      <Link to='#'>更多</Link>
      </Menu.Item>
    </Menu>
  );
  const mediaMenu = (
    <Menu>
      <Menu.Item>
        <Link to='/google'>Google</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/facebook'>Facebook</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/inmobi'>Inmobi</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/ucAds'>UC Ads</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/toutiao'>今日头条</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/tiktok'>TikTok</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='#'>更多</Link>
      </Menu.Item>
    </Menu>
  );
  const aboutUsMenu = (
    <Menu>
      <Menu.Item>
        <Link to='/about'>公司介绍</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/jobs'>公司招聘</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/contactUs'>联系我们</Link>
      </Menu.Item>
    </Menu>
  );
  const newsMenu = (
    <Menu>
      <Menu.Item>
        <Link to='#'>行业资讯</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='#'>媒体新闻</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='#'>公司动态</Link>
      </Menu.Item>
    </Menu>
  );
  const homeMenu = (
    <div></div>
  );
  const languageMenu = (
    <Menu>
      <Menu.Item>
        <Link to='#'>中文简体</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='#'>英语</Link>
      </Menu.Item>
    </Menu>
  );
  let {dispatch} = props;
    useEffect(() =>{

     $('#nav').find('a:last').on('click', function(){
       
      dispatch({type:'english'})
      
     }) 
  }, [dispatch]);
        return (
            <div id="header">
                <h1 id="logo"><img src={logo} alt='logo图片' /></h1>
                <nav id="nav">
                <Menu defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                      <Dropdown overlay={homeMenu} placement="bottomLeft">
                      <Button><Link to='/index'>首页</Link></Button>
                      </Dropdown>
                    </Menu.Item>
                    <Menu.Item key="2">
                      <Dropdown overlay={solutionsMenu} placement="bottomLeft">
                        <Button><Link to='/#'>广告解决方案</Link><DownOutlined /></Button>
                      </Dropdown>
                    </Menu.Item>
                    <Menu.Item key="3">
                      <Dropdown overlay={mediaMenu} placement="bottomLeft">
                        <Button><Link to='#'>媒体与合作</Link><DownOutlined /></Button>
                      </Dropdown>
                    </Menu.Item>
                    <Menu.Item key="4">
                      <Dropdown overlay={newsMenu} placement="bottomLeft">
                        <Button><Link to='#'>最新资讯</Link><DownOutlined /></Button>
                      </Dropdown>
                    </Menu.Item>
                    <Menu.Item key="5">
                      <Dropdown overlay={aboutUsMenu} placement="bottomLeft">
                        <Button><Link to='/about'>关于我们</Link><DownOutlined /></Button>
                      </Dropdown>
                      </Menu.Item>
                    <Menu.Item key="6">
                      <Dropdown overlay={languageMenu} placement="bottomLeft">
                        <Button><Link to='/'>语言</Link><DownOutlined /></Button>
                      </Dropdown>
                    </Menu.Item>
                </Menu>
              </nav>
        </div>
        );
}

export default connect(state =>state)(MainHeader);