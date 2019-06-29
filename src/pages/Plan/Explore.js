import React,{Component} from 'react';
import { List, Avatar, Icon } from 'antd';
import { VenueDetails } from './VenueDetails';

export class Explore extends Component{
    constructor(props) {
        super(props);
        this.state = {
            description: '',
            photoURL: '',
        }
        
    }

    render(){
        const listData = [];
        console.log("hey, I am about to map items", this.props.venues)
        this.props.venues.map(venue=> {
            listData.push({
            href: '',
            title: venue.name,
            avatar: 'https://banner2.kisspng.com/20180913/scp/kisspng-clip-art-image-travel-avatar-kawaii-5b9a2ac61224a5.3540012315368301500743.jpg',
            address: 
                venue.location.formattedAddress,
            content:
            // <VenueDetails venueId={venue.id} />
            <p>Description: intro of this venue goes here</p>,
            category: venue.categories[0].name,
            });
        })

        const IconText = ({ type, text }) => (
        <span>
            <Icon type={type} style={{ marginRight: 8 }} />
            {text}
        </span>
        );

        return(
            <div className="plan-left-content">
                {console.log("you reached explore component")}
                {console.log(this.props.venues)}
                <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 3,
                    }}
                    dataSource={listData}
                    renderItem={item => (
                        <List.Item
                            key={item.title}
                            actions={[
                            <IconText type="save" text="Add" />,
                            <IconText type="heart" text="Like" />,
                            <IconText type="delete" text="Delete" />,
                            ]}
                            extra={
                            <img
                                width={272}
                                alt="logo"
                                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                            />
                            }
                        >
                            <List.Item.Meta
                            avatar={<Avatar className = "venueAvatar" src={item.avatar} />}
                            // avatar={<Avatar icon="camera" theme="twoTone" />}
                            title={<a href={item.href}>{item.title}</a>}
                            description={item.address}
                            />
                            <div>{item.content}</div>
                            <div>Category: {item.category}</div>
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}
