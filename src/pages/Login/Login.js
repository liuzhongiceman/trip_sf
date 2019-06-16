import React,{Component} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import {Link} from 'react-router-dom';
import './Login.css';

class Login extends Component {
  render() {
    return (
      <div>
        <Navbar />
          <div class="bslf">
            <form action="" method="post">
            <h2 class="text-center">Please login</h2>       
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Username" required="required"/>
            </div>
            <div class="form-group">
                <input type="password" class="form-control" placeholder="Password" required="required"/>
            </div>
            <div class="form-group clearfix">
                <label class="checkbox-inline pull-left"><input type="checkbox"/> Remember me</label>
                <button type="submit" class="btn btn-primary pull-right">Log in</button>
            </div>
            <div class="clearfix">
                <Link href="#" class="pull-left">Forgot Password?</Link>
                <Link href="#" class="pull-right">Create an Account</Link>
            </div>        
            </form>
          </div>
        <Footer />
      </div>
    );
  }
}

export default Login