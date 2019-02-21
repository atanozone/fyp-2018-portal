import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CalendarTable from './Calendar/Table';

import {Layout} from 'antd';


const {
  Header, Footer, Sider, Content,
} = Layout;

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
      <Header>Header</Header>
      <Layout>
        <Sider width='300'>Left</Sider>
        <Content>
          <CalendarTable/>
        </Content>
        <Sider width='400'>Date stuffs</Sider>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
    </div>
    );
  }
}

export default App;