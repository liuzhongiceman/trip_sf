import React,{Component} from 'react';

export class Explore extends Component{
    constructor(props) {
        super(props);
        this.state = {
            
        }
        
    }

    render(){
        return(
            <div className="plan-left-content">
                <h3>I am Explore</h3>
                <div>items:</div>
                { this.props.items.map(item=> { return <div key={item.id}>{item.name}</div>}) }
            </div>
        )
    }
}
