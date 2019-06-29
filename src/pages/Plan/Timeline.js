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
                <div>Venues:</div>
                { this.props.venues.map(venue=> { return <div key={venue.id}>{venue.name}</div>}) }
                {console.log("you reached timeline component")}
                {console.log(this.props.venues)}
            </div>
        )
    }
}