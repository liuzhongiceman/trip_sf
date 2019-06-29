import React,{Component} from 'react';
import { List, Avatar, Icon } from 'antd';
import { VenueDetails } from './VenueDetails';

export class Explore extends Component{
    constructor(props) {
        super(props);
        this.state = {
            
        }
        
    }

    render(){
        const listData = [];
        console.log("hey, I am about to map items", this.props.venues)
        this.props.venues.map(venue=> {
            listData.push({
            href: 'http://ant.design',
            // title: `ant design part ${i}`,
            title: venue.name,
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            description: 
                venue.location.formattedAddress
              + ' description goes here.',
            content:
            // 'content goes here',
            <VenueDetails venueId={venue.id} />,
            });
        })
        // for (let i = 0; i < 23; i++) {
        // listData.push({
        //     href: 'http://ant.design',
        //     // title: `ant design part ${i}`,
        //     titie: this.props.items.name,
        //     avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        //     description:
        //     'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        //     content:
        //     'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        // });
        // }

        const IconText = ({ type, text }) => (
        <span>
            <Icon type={type} style={{ marginRight: 8 }} />
            {text}
        </span>
        );

        return(
            <div className="plan-left-content">
                {/* <h3>I am Explore</h3>
                <div>items:</div>
                {this.props.items.map(item=> { return <div key={item.id}>{item.name}</div>})}
                {console.log("you reached explore component")}
                {console.log(this.props.items)} */}
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
                    // footer={
                    // <div>
                    //     <b>ant design</b> footer part
                    // </div>
                    // }
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
                            avatar={<Avatar src={item.avatar} />}
                            // avatar={<Avatar icon="camera" theme="twoTone" />}
                            title={<a href={item.href}>{item.title}</a>}
                            description={item.description}
                            />
                            {item.content}
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}
