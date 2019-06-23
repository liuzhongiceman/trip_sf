import React,{Component} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import Footer from '../../components/Footer/Footer';
import Tutorial from '../../components/Tutorial/Tutorial';
import RouteAd from '../../components/Ads/RouteAd/RouteAd';


class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isUserLogIn: false,
            logInModalOpen: false,
            signUpModalOpen: false,
            destination: '',
            startDate: '',
            endDate: ''
        }
        // this.handleLogInModalOpen = this.handleLogInModalOpen.bind(this);
        this.handleSignUpModalOpen = this.handleSignUpModalOpen.bind(this);
    }

    handleSignUpModalOpen(){
        console.log('clicked')
        console.log('signUpModalOpen', this.state.signUpModalOpen)
        this.setState(prevState=>{
            return{
                signUpModalOpen: !prevState.signUpModalOpen
            }
        })
    }

    render(){
        return(
            <div>
                <Navbar 
                    handleSignUpModalOpen={this.handleSignUpModalOpen} 
                    isSignUpModalOpen={this.state.signUpModalOpen}
                    isLogInModalOpen={this.state.logInModalOpen} />
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