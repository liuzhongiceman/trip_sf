import React from 'react';

export class Calendar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            
        }

    }


    render(){
        return(
            <div className="plan-left-content">
                <h3>I am Calendar</h3>
                <div>Venues:</div>
                { this.props.venues.map(venue=> { return <div key={venue.id}>{venue.name}</div>}) }
                {console.log("you reached calendar component")}
                {console.log(this.props.items)}
            </div>
        )
    }
}