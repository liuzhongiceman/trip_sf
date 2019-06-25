import React,{Component} from 'react';
import 'antd/dist/antd.css';
import { Drawer, Button, Tabs} from 'antd';

class TabPane extends Component{
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        }
        
    }

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
        const { TabPane } = Tabs;
        return(
            <div>
                <div style={{marginTop: "6%"}}>
                    <div>
                        <Drawer
                            title="Basic Drawer"
                            placement="left"
                            closable={false}
                            onClose={this.onClose}
                            visible={this.state.visible}
                            >
                        <p>
                            Edit destination and time range form goes here
                        </p>
                        </Drawer>
                    </div>
                    <div>
                        <Tabs defaultActiveKey="1" tabPosition={"left"} style={{ height: 500 }}>
                            <TabPane className="" tab="Map" key="1">
                                <div>
                                    <p>
                                        Explore and Map component goes here
                                    </p>
                                </div>
                            </TabPane>
                            <TabPane className="" tab="Timeline" key="2">
                                <div>
                                    <p>
                                        TimeLine and Map component goes here
                                    </p>
                                </div>
                            </TabPane>
                            <TabPane className="" tab="Calendar" key="3">
                                <div>
                                    <p>
                                        Calendar and Map component goes here
                                    </p>
                                </div>
                            </TabPane>
                            <TabPane 
                                className="" 
                                tab={<Button type="primary" onClick={this.showDrawer}>
                                        Edit Destination & Time
                                    </Button>} 
                                key="4">
                            </TabPane>
                        </Tabs>
                    </div>
                </div>
            </div>
        )
    }
}
export default TabPane;