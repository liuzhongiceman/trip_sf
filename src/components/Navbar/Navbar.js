import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/Logo/logo.png';
import './Navbar.css';
import LogInModal from '../Modal/LogInModal/LogInModal';
import SignUpModal from '../Modal/SignUpModal/SignUpModal';


class Navbar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            logInModalOpen: false,
            signUpModalOpen: false,
            isSignUpModalOpen: this.props.isSignUpModalOpen,
            isLogInModalOpen: this.props.isLogInModalOpen,
        };
        this.handleSignUpModalOpen = this.handleSignUpModalOpen.bind(this);
        this.handleSignUpModal = this.handleSignUpModal.bind(this);
        this.handleLogInModal = this.handleLogInModal.bind(this);
    }

    handleLogin = () => {
        this.props.handleLogin();
    }

    handleLogout = () => {
        this.props.handleLogout();
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

    handleSignUpModal() {
        this.setState({
            isSignUpModalOpen: !this.state.isSignUpModalOpen
        });
    }

    handleLogInModal() {
        this.setState({
            isLogInModalOpen: !this.state.isLogInModalOpen
        });
    }

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light navbar-fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={Logo} height="70" alt=""/>
                    </Link>
                 
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" id="home" to="/">Home<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link " id="aboutUs" to="/about">About Us</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" id="contact" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" id="plan" to="/plan">Plan</Link>
                            </li>
                        </ul>
                        {   this.props.isLoggedIn ? 
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <Link className="nav-link" id="mytrips" to="/mytrips">My Trips</Link>
                                    </li>
                                    <li className="nav-item active">
                                        <button className="btn bg-transparent" onClick={this.handleLogout} >Logout</button> 
                                    </li>
                                </ul> 
                            :
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <button className="btn bg-transparent" id="signIn" onClick={this.handleLogInModal}>Sign In</button>
                                    </li>
                                    <li className="nav-item active">
                                        <button className="btn bg-transparent" id="signUp" onClick={this.handleSignUpModal}>Sign Up</button>
                                    </li>
                                </ul>
                        }
                    </div>
                </div>
                <LogInModal isLogInModalOpen={this.state.isLogInModalOpen} handleLogInModal={this.handleLogInModal} handleLogin={this.handleLogin}/>
                <SignUpModal isSignUpModalOpen={this.state.isSignUpModalOpen} handleSignUpModal={this.handleSignUpModal}/>
            </nav>
        )
    }
}

export default Navbar;