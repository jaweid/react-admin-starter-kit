import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Dashboard from '../dashboard/index';
import Analysis from '../analysis/index';
import Monitor from '../monitor/index';
import {Layout, Menu, Icon} from 'antd';
import './layout.css';

const {Header, Sider, Content} = Layout;

class SiderDemo extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Router>

                <Layout>
                    <Sider
                        theme='light'
                        trigger={null}
                        collapsible
                        collapsed={this.state.collapsed}
                    >
                        <div className="logo">
                            <span className='logo-name'>React</span>
                        </div>
                        <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1">
                                <Icon type="home"/>
                                <span>
                                <Link to='/dashboard'>首页</Link>
                            </span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="video-camera"/>
                                <span>
                                    <Link to='/analysis'>分析页</Link>
                                    </span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="upload"/>
                                <span>
                                    <Link to='/monitor'>监控页</Link>
                                </span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{background: '#1890ff', padding: 0}}>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                        </Header>
                        <Content style={{margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280}}>
                            <Route exact path='/dashboard' component={Dashboard}/>
                            <Route exact path='/analysis' component={Analysis}/>
                            <Route exact path='/monitor' component={Monitor}/>

                        </Content>
                    </Layout>


                </Layout>


            </Router>

        );
    }
}

export default SiderDemo