import React,{Component} from 'react';
import { clientID, clientSecret} from '../../secrets';

export class VenueDetails extends Component{
    //this class component is only used for getting data at this development stage, 
    //it will become deprecated after backend is completed
    
    constructor(props) {
        super(props);
        this.state = {
            description: '',
            photoURL: '',
        }
        
    }

    componentDidMount() {
        console.log("You are in VenueDetails")
        console.log("class VenueDetails componentDidMount")
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
            console.log(res);
            this.setState({ 
                description: res.response.venue.description
                // photoURL: res.response.venue.bestPhoto.prefix 
                //         + res.response.venue.bestPhoto.width 
                //         + 'x' 
                //         + res.response.venue.bestPhoto.height 
                //         + res.response.venue.bestPhoto.suffix,
                
            });
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