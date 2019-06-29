import React,{Component} from 'react';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import Footer from '../../components/Footer/Footer';
import Tutorial from '../../components/Tutorial/Tutorial';
import RouteAd from '../../components/Ads/RouteAd/RouteAd';
import './Home.css';


class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            destination: '',
            startDate: '',
            endDate: ''
        }
    }

    render(){
        return(
            <div>
                <Jumbotron />
                <div className="container">
                    <Tutorial/>
                    <RouteAd/>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default Home;