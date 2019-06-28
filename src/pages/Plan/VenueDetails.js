import React,{Component} from 'react';
import { clientID, clientSecret} from '../../secrets';

export class VenueDetails extends Component{
    constructor(props) {
        super(props);
        this.state = {
            description: ''
        }
        
    }

    componentDidMount() {
        console.log("You are in VenueDetails")
        console.log("componentDidMount")
        console.log(this.props.venueId)
        var foursquare = require('react-foursquare')({
            clientID: clientID,
            clientSecret: clientSecret  
        });

        var params = {
            "venue_id": this.props.venueId,
        };

        foursquare.venues.getVenue(params)
            .then(res=> {
            this.setState({ description: res.response.venue.description });
        });
    }

    render(){
        const description = this.state.description;
        return (
            <div>
                {description}
            </div>
            
        )
    }
}