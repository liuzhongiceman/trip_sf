import React,{Component} from 'react';
import 'antd/dist/antd.css';
import './SideMenu.css';
import { Drawer, Layout, Menu, Icon} from 'antd';

class SideMenu extends Component{
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            visible: false,
        }
        
    }

    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    showDrawer = () => {
        this.setState({
          visible: true,
        });
    };
    
    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render(){
        const { Header, Sider, Content } = Layout;

        return(
            <div style={{marginTop: '6%', height: '923px'}}>
                <Drawer
                    title="Basic Drawer"
                    placement="left"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    style={{marginTop: '5%'}}
                    >
                    <p>
                        Edit destination and time range form goes here
                    </p>
                </Drawer>
                <Layout style={{height: '-webkit-fill-available'}}>
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                        <Icon type="search" />
                        <span>Explore</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                        <Icon type="schedule" />
                        <span>Timeline</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                        <Icon type="calendar" />
                        <span>Calendar</span>
                        </Menu.Item>
                        <Menu.Item key="4" onClick={this.showDrawer}>
                        <Icon type="edit" />
                        <span>Edit Trip</span>
                        </Menu.Item>
                    </Menu>
                    </Sider>
                    <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                        className="trigger"
                        type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.toggle}
                        />
                        <span className="plan-title">Plan Title Goes Here</span>
                    </Header>
                    <Content
                        style={{
                        margin: '24px 16px',
                        padding: 24,
                        background: '#fff',
                        minHeight: 280,
                        }}
                    >
                        Content
                    </Content>
                    {/* <p style={{
                        margin: '24px 16px',
                        padding: 24,
                        background: '#fff',
                        minHeight: 280,
                        }}>
                        Content
                    </p> */}
                    </Layout>
                </Layout>
            </div>
        )
    }
}
export default SideMenu;