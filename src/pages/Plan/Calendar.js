import React from 'react';

export class Calendar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            
        }

    }


    render(){
        {console.log("you reached calendar component")}
        {console.log("is planData empty" + this.props.planData)}

        return(
            <div className="plan-left-content">
                <h3>I am Calendar</h3>
                { this.props.planData ?
                    this.props.planData.map( venue => { 
                        return (
                                <div key={venue.id}>
                                    {venue.title}
                                    {venue.address}
                                </div>
                        )
                    })  : "empty plandata"
                }
            </div>
        )
    }
}