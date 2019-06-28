import React from 'react';

export class Timeline extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            
        }
        
    }

    render(){
        return(
            <div className="plan-left-content">
                <h3>I am Timeline</h3>
                <div>items:</div>
                { this.props.items.map(item=> { return <div key={item.id}>{item.name}</div>}) }
            </div>
        )
    }
}