import React,{Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';


class App extends Component{
  render(){
    return(
      <Router>
        <div>
          <Route exact path='/' component={Home}/>
          <Route path='/signup' component={Signup} />
           <Route path="/about" component={About}/>
           <Route path="/contact" component={Contact}/>
            <Route path='/login' component={Login} />
        </div>
      </Router>
    )
  }
}

export default App;
