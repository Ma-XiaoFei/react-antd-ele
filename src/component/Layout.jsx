
import React from 'react'
import {Slide} from '../menus';
import { Layout, Breadcrumb } from 'antd';
import Main from './Content';
const { Header, Footer, Sider} = Layout;



function Container (){
    return (
    <Layout>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
          }}
        >
          
            <div className="logo" />
            <Slide></Slide>
          
        </Sider>
        <Layout style={{ marginLeft: 200 }}>
          <Header style={{ background: '#fff', padding: 0 }}>
          <Breadcrumb style={{padding:'20px', boxSizing:'border-box'}}>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Application Center</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Application List</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>An Application</Breadcrumb.Item>
  </Breadcrumb>
          </Header>
          <Main></Main>
          <Footer style={{ textAlign: 'center', position:'',bottom:0 }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>);
}



export default Container