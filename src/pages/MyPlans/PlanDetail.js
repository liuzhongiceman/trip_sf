import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import PlanModel from './plan_model';
import { myPlans } from './dummydata';
// import LA from '../../assets/Cities/Banners/la.jpg';
// import NY from '../../assets/Cities/Banners/ny.jpg';
// import SF from '../../assets/Cities/Banners/sf.jpg';
// import Others from '../../assets/Cities/Banners/others.jpg'
import LA from '../../assets/Cities/Thumbnails/la.jpg';
import NY from '../../assets/Cities/Thumbnails/ny.jpg';
import SF from '../../assets/Cities/Thumbnails/sf.jpg';
import Others from '../../assets/Cities/Thumbnails/others.jpg'
import './PlanDetail.css'


class PlanDetail extends Component {

    render() {
        return (
            <div>
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-12 col-md-6">
                            <img alt="Grandfather with child" src={Others} style={{width:400}}/>
                        </div>
                        <div class="col-12 col-md-6">
                            <h3>Aenean tincidunt tincidunt suscipit</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo nunc, euismod eu tempor vel, bibendum eu libero. Sed nec metus ut dolor blandit euismod. Pellentesque lectus lacus, vulputate sit amet fermentum a, gravida eget urna. Mauris at ipsum diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin gravida nisl a libero efficitur bibendum. Aliquam dolor enim, ullamcorper ut quam at, faucibus iaculis velit.</p>
                        </div>
                    </div>
                    </div>
                <Footer />
            </div>
        );
    }
}

export default PlanDetail;