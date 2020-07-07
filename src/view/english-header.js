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
        <Link to='/englishBranding'>Branding</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/englishGame'>Game</Link>
      </Menu.Item>
      <Menu.Item>
      <Link to='/englishApp'>APP</Link>
      </Menu.Item>
      <Menu.Item>
      <Link to='/englishEcommerce'>E-commerce</Link>
      </Menu.Item>
      <Menu.Item>
      <Link to='/englishCreativeShortVideo'>Creative Short Video</Link>
      </Menu.Item>
      <Menu.Item>
      <Link to='#'>More</Link>
      </Menu.Item>
    </Menu>
  );
  const mediaMenu = (
    <Menu>
      <Menu.Item>
        <Link to='/ChineseTopMedias'>Chinese Top Medias</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/englishGoogle'>Google</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/englishFacebook'>Facebook</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/englishInmobi'>Inmobi</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/englishTikTok'>TikTok</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/englishUCAds'>UC Ads</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='#'>More</Link>
      </Menu.Item>
    </Menu>
  );
  const aboutUsMenu = (
    <Menu>
      <Menu.Item>
        <Link to='/englishAbout'>About Us</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/englishAbout'>Conract Us</Link>
      </Menu.Item>
    </Menu>
  );
  const homeMenu = (
    <div></div>
  );
  const languageMenu = (
    <div></div>
  );
  let {dispatch} = props;
    useEffect(() =>{

     $('#nav').find('a:last').on('click', function(){
       
      dispatch({type:'chinese'})
      
     }) 
  }, [dispatch]);
        return (
            <div id="header">
                <h1 id="logo"><img src={logo} alt='logo图片' /></h1>
                <nav id="nav">
                <Menu defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                      <Dropdown overlay={homeMenu} placement="bottomLeft">
                      <Button><Link to='/englishHome'>Home</Link></Button>
                      </Dropdown>
                    </Menu.Item>
                    <Menu.Item key="2">
                      <Dropdown overlay={solutionsMenu} placement="bottomLeft">
                        <Button><Link to='/englishSolutions'>Solutions</Link><DownOutlined /></Button>
                      </Dropdown>
                    </Menu.Item>
                    <Menu.Item key="3">
                      <Dropdown overlay={mediaMenu} placement="bottomLeft">
                        <Button><Link to='#'>Media Partners</Link><DownOutlined /></Button>
                      </Dropdown>
                    </Menu.Item>
                    <Menu.Item key="4">
                      <Dropdown overlay={aboutUsMenu} placement="bottomLeft">
                        <Button><Link to='/englishAbout'>About Us</Link><DownOutlined /></Button>
                      </Dropdown>
                      </Menu.Item>
                    <Menu.Item key="5">
                      <Dropdown overlay={languageMenu} placement="bottomLeft">
                        <Button><Link to='/'>Simplified Chinese</Link></Button>
                      </Dropdown>
                    </Menu.Item>
                </Menu>
              </nav>
        </div>
        );
}

export default connect(state =>state)(MainHeader);