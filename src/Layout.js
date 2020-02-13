import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { App as API } from './API/src/App';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class LayoutComponent extends Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    return (
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            <div className='logo' />
            <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
              <Menu.Item key='1'>
                <Icon type='pie-chart' />
                <Link to='/API'>API</Link>
              </Menu.Item>
              <Menu.Item key='2'>
                <Icon type='desktop' />
                <Link to='/ExcelSheet'>Excel Sheet</Link>
              </Menu.Item>
              <Menu.Item key='3'>
                <Icon type='user' />
                <Link to='/DMTool'>DMTool</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
              {' '}
              <Switch>
                <Route path='/API'>
                  <API />
                </Route>
                <Route path='/ExcelSheet'>{/* <API /> */}</Route>
                <Route path='/DMTool'>{/* <API /> */}</Route>
              </Switch>
            </Content>
            <Footer style={{ textAlign: 'center' }}>R&D - DAM/DCM</Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}
