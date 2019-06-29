import React, { Component } from 'react';
import { Modal } from 'reactstrap';
import './LogInModal.css';

class LogInModal extends Component {

    // Fire API to Login
    handleSubmit = () => {
        console.log("you have clicked on Login")
        this.props.handleLogin();
        // e.preventDefault();
        // this.props.form.validateFields((err, values) => {
        //   if (!err) {
        //     console.log('Received values of form: ', values);
        //     fetch(`${API_ROOT}/login`, {
        //       method: 'POST',
        //       body: JSON.stringify({
        //           username: values.username,
        //           password: values.password,
        //       }),
        //     })
        //       .then((response) => {
        //           if (response.ok) {
        //               return response.text()
        //           }
        //           throw new Error(response.statusText)
        //       })
        //       .then ((response) => { 
        //           message.success("Login Success!")
        //           console.log(response)
        //           const token = JSON.parse(response)["access_token"];
        //           this.props.handleLogin(token);
        //       })
        //       .catch((err) => { 
        //           message.error("Login Failed")
        //           console.log(err)
        //       })
        //   }
        // });
      }

    render() {
        return (
            <Modal isOpen={this.props.isLogInModalOpen} toggle={this.props.handleLogInModal} size="lg"
                style={{ maxWidth: '500px', width: '70%' }}>
                <div className="modalForm">
                    <form action="" method="post" >
                        <h2 className="text-center">Please login</h2>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Username" required="required" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password" required="required" />
                        </div>
                        <div className="form-group clearfix">
                            <label className="checkbox-inline pull-left"><input type="checkbox" /> Remember me</label>
                            <button type="submit" className="btn btn-primary pull-right" onClick={this.handleSubmit}>Log in</button>
                        </div>
                    </form>
                </div>
            </Modal>
    
        );
    }
}

export default LogInModal