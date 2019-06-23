import React  from 'react';
import './RouteAd.css';
import Check from '../../../assets/AdsImage/check-icon.png';
import Map from '../../../assets/AdsImage/maps-icon.png';
import Track from '../../../assets/AdsImage/tracking-route-icon.png';
import Arrow from '../../../assets/AdsImage/arrow-icon.png';

const RouteAd =()=>{
        return (

            <div className="row">
                <div className="col-sm col-sm-3">
                    <img className="icon"  src={Map} alt="Logo" />                  
                      <h4>Get a personalized plan</h4>
                    <p>A complete day-by-day itinerary based on your preferences</p>
                </div>
                <div className="col-sm col-sm-1" id="arrow">
                    <img src={Arrow} alt="Logo" />                  
                </div>
                <div className="col-sm col-sm-3">
                    <img className="icon" src={Check} alt="Logo" />                  
                    <h4>Customize it</h4>
                    <p>Refine your plan. We'll find the best routes and schedules</p>
                </div>
                <div className="col-sm col-sm-1 " id="arrow">
                    <img src={Arrow} alt="Logo" />                  
                </div>
                <div className="col-sm col-sm-3">
                    <img className="icon" src={Track} alt="Logo" />                  
                    <h4>Manage it</h4>
                    <p>Everything in one place. Everyone on the same page.</p>
                </div>
            </div>

        )
    
}


export default RouteAd;