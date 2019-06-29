import React from 'react';

export class Timeline extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            
        }
        
    }

    render(){
        {console.log("you reached timeline component")}
        {console.log("is planData empty:" + this.props.planData)}

        return(
            <div className="plan-left-content">
                <h3>I am Timeline</h3>
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