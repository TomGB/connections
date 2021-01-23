import React from 'react';
import { render } from 'react-dom';
import { Layout, Menu } from 'antd';
import { Route, Switch, HashRouter as Router, Link } from 'react-router-dom'
import { PlayCircleOutlined, EditOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './index.css';

import Create from './components/Create';
import UrlQuestions from './components/UrlQuestions';
import DefaultQuestions from './components/DefaultQuestions';

const { Footer, Content } = Layout;

const App = () => (
  <Layout style={{ minHeight: "100vh" }}>
    <Router>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item icon={<EditOutlined />}><Link to='/create'>Create your own questions</Link></Menu.Item>
        <Menu.Item icon={<PlayCircleOutlined />}><Link to='/'>Play example questions</Link></Menu.Item>
      </Menu>
      <Content style={{ maxWidth: '800px', width: '100%', margin: 'auto', marginTop: '100px' }}>
        <Switch>
          <Route exact path='/'>
            <DefaultQuestions />
          </Route>
          <Route exact path='/create'><Create /></Route>
          <Route path='/play/:encodedQuestion'>
            <UrlQuestions />
          </Route>
        </Switch>
      </Content>
    </Router>
    <Footer style={{ textAlign: 'center' }}>Connections ©2021 Created by <a target="_blank" href="https://github.com/tomgb/">Tom Banister</a></Footer>
  </Layout >
)

render(<App />, document.getElementById('root'));
