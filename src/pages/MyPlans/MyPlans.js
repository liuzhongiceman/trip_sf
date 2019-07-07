import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import PlanModel from './plan_model';
import {myPlans} from './dummydata';
import LA from '../../assets/Cities/Thumbnails/la.jpg';
import NY from '../../assets/Cities/Thumbnails/ny.jpg';
import SF from '../../assets/Cities/Thumbnails/sf.jpg';
import Others from '../../assets/Cities/Thumbnails/others.jpg'
import './MyPlans.css'

class MyPlans extends Component {

    render() {
        const plan = myPlans.map((p, i) =>
            <PlanModel key={i}  city={p.city} start_date={p.start_date} end_date={p.end_date} />)
        return (
            <div>
                <div className="container">
                    <div className="card-columns">
                            {plan}
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default MyPlans;