import React,{Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Plan from './pages/Plan/Plan';
import Navbar from './components/Navbar/Navbar';
import MyTrips from './pages/MyTrips/MyTrips';


class App extends Component{

  state = {
    isLoggedIn: false,
    // isLoggedIn: !!localStorage.getItem(TOKEN_KEY)

  }

  //callback function 1
  // handleLogin = (token) => {
  //     this.setState({ isLoggedIn: true });
  //     localStorage.setItem(TOKEN_KEY, token);
  // }

  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  }

  //callback function 2
  handleLogout = () => {
      this.setState({ isLoggedIn: false });
      // const token = localStorage.getItem(TOKEN_KEY);
      // // Fire API call
      // fetch(`${API_ROOT}/logout`, {
      //     method: "GET",
      //     headers: {
      //         Authorization: `${AUTH_HEADER} ${token}`
      //     }
      // })
      // localStorage.removeItem(TOKEN_KEY);
  }

  render(){
    return(
      <div className="App">
        <Router>
          <Navbar 
            isLoggedIn={this.state.isLoggedIn}
            handleLogin={this.handleLogin}
            handleLogout={this.handleLogout}
          />
          <Route exact path='/' component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/plan" component={Plan}/>
          <Route path="/mytrips" component={MyTrips}/>
        </Router>
      </div>
    )
  }
}

export default App;
