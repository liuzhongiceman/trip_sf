import React,{Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Plan from './pages/Plan/Plan';


class App extends Component{
  render(){
    return(
      <Router>
        <div>
          <Route exact path='/' component={Home}/>
           <Route path="/about" component={About}/>
           <Route path="/contact" component={Contact}/>
           <Route path="/plan" component={Plan}/>
        </div>
      </Router>
    )
  }
}

export default App;
