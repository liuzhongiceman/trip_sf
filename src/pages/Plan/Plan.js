import React,{Component} from 'react';
import Footer from '../../components/Footer/Footer';
import { clientID, clientSecret} from '../../secrets';
import { Drawer, Layout, Menu, Icon, Cascader, Checkbox } from 'antd';
import { Explore } from './Explore';
import { Map } from './Map';
import { Timeline } from './Timeline';
import { Calendar } from './Calendar';

class Plan extends Component{
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            venues: [],
            destination: '',
            visible: false,
            selectedKeys: 1,
            planTitle: 'Plan Title Goes here',
            planData: [],
            placeholder: 'please select',
        }
        
    }

    componentDidMount() {
        console.log("class Plan componentDidMount")
        console.log("isDestinationEmpty:" + this.props.destination)
        var foursquare = require('react-foursquare')({
            clientID: clientID,
            clientSecret: clientSecret  
        });

        var params = {
            "near": "San Francisco, CA",
            // "near": this.props.destination,
            "limit": "3",
            "categoryId": "52e81612bcbc57f1066b7a21,4bf58dd8d48988d181941735",
        };
        
        foursquare.venues.getVenues(params)
            .then(res=> {             
            this.setState({ venues: res.response.venues });
        });
        console.log("made API call to fourSquare getVenues")

        const populatePlan = [];
        for(let i = 0; i < 10; i++){
            populatePlan.push({
                id: `${i}`,
                title: `venueTitle ${i}`,
                address: 'address',
                category: 'category',
                description: 'description',
                rating: 'rating',
                date: 'date',
                startTime: 'startTime',
                endTime: 'endTime',
                like: [],
            })
        }
        this.setState({ planData: populatePlan})
        console.log("isPlanPopulated:" + populatePlan);
    }
    
    // callback function to handle add venue to plan from class Explore
    onClickAdd = () => {
        this.setState({ })
    }
    // callback function to handle add a heart-ed venue to plan from class Explore
    onClickLike = () => {
        this.setState({ })
    }
    // callback function to handle deleting an added venue in a plan, from class Timeline
    onClickDelete = () => {
        this.setState({ })
    }

    onSelect = (info) => {
        console.log('selected ', info);
        this.setState({
            selectedKeys: info.selectedKeys,
        });
    };

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

    getContentLeft = () => {
        if(this.state.selectedKeys == 1){
            return <Explore venues={this.state.venues} />
        }
        else if(this.state.selectedKeys == 2){
            return <Timeline planData={this.state.planData}/>
        }else if(this.state.selectedKeys == 3){
            return <Calendar planData={this.state.planData}/>
        }else if(this.state.selectedKeys == 4 || 5) {
            return <Explore venues={this.state.venues}/>
        }
        else if(this.state.venues === []){
            console.log("no venues received");
        }
    }

    getPlanTitle = () => {
        return <span className="plan-title">{this.state.planTitle}</span>
        
    }

    // onChange (value)  {
    //     console.log(value)
    // }

    render(){
        const { Header, Sider, Content } = Layout;

        const listVenueIDs = [];
        this.state.venues.map( venue => {
            listVenueIDs.push({
                id: venue.id,
            })
        })

        // const options = [
        //     { value: 'trending', label: <Checkbox onChange={this.onChange}>Trending</Checkbox> },
        //     { value: 'outdoors', label: <Checkbox onChange={this.onChange}>Outdoors</Checkbox> },
        //     { value: 'Museum', label: <Checkbox onChange={this.onChange}>Museum</Checkbox> },
        //     { value: 'MusicVenue', label: <Checkbox onChange={this.onChange}>Music Venue</Checkbox> },
        //     { value: 'NationalPark', label: <Checkbox onChange={this.onChange}>National Park</Checkbox> },
        //     { value: 'Food', label: <Checkbox onChange={this.onChange}>Food</Checkbox> },
        //     { value: 'ChineseRestaurant', label: <Checkbox onChange={this.onChange}>Chinese Restaurant</Checkbox> },
        // ]
        
        return(
            <div style={{marginTop: '6%', height: '923px'}}>
                {console.log("venues: " + this.state.venues)}
                {/* <SideMenu /> */}
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
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onSelect={this.onSelect}>
                        <Menu.Item key="4" onClick={this.showDrawer}>
                        <Icon type="edit" />
                        <span>Edit Trip</span>
                        </Menu.Item>
                        <Menu.Item key="5">
                        <Icon type="setting" />
                        <span>Filter</span>
                        </Menu.Item>
                        <Menu.Item key="1">
                        <Icon type="search" />
                        <span>Explore</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                        <Icon type="align-left" />
                        <span>Timeline</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                        <Icon type="calendar" />
                        <span>Calendar</span>
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
                        {/* <Cascader options={options} onChange={this.onChange} placeholder={this.state.placeholder} /> */}
                        {this.getPlanTitle()}
                    </Header>
                    <Content
                        style={{
                        margin: '24px 16px',
                        padding: 24,
                        background: '#fff',
                        minHeight: 280,
                        }}
                    >   
                        {this.getContentLeft()}
                        <Map />
                    </Content>
                    </Layout>
                </Layout>
                <Footer />
            </div>
        )
    }
}
export default Plan;