import React, { Component } from 'react';
import { Modal } from 'reactstrap';
import './SignUpModal.css';

class SignUpModal extends Component {

    // Fire API to register
    handleSubmit = (e) => {
        console.log("you clicked on Register")
        // e.preventDefault();
        // this.props.form.validateFieldsAndScroll((err, values) => {
        //   if (!err) {
        //     console.log('Received values of form: ', values);
        //     fetch(`${API_ROOT}/register`, {
        //       method: 'POST',
        //       body: JSON.stringify({
        //           username: values.username,
        //           password: values.password,
        //           email: values.email,
        //           first_name: values.firstname,
        //           last_name: values.lastname
        //       }),
        //     })
        //     .then((response) => {
        //       if (response.ok) {
        //         return response;
        //       }
        //       throw new Error(response.statusText);
        //     })
  
        //     .then((response) => response.text())
        //     .then ((response) => {
        //       message.success("Registration Success!")
        //       this.props.history.push("/login")
        //       console.log(response)
        //     })
            
        //     .catch ((err) => {
        //       message.error("Registration Failed")
        //       console.log(err)
        //     })
        //   }
        // });
      }
    render() {
        return (
            <Modal isOpen={this.props.isSignUpModalOpen} toggle={this.props.handleSignUpModal} size="lg"
                style={{ maxWidth: '500px', width: '80%' }}>
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12 col-md-offset-12 col-sm-offset-12">
                        <div className="register-form">
                            <form action="" method="post" >
                                <h2 className="text-center">Registration</h2>
                                <p className="hint-text">Create your account. It's free and takes just a minute.</p>
                                <div className="row">
                                    <div className="col-md-6 col-xs-12">
                                        <div className="form-group">
                                            <input type="text" name="first_name" className="form-control" placeholder="First Name" required="required" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-xs-12">
                                        <div className="form-group">
                                            <input type="text" name="last_name" className="form-control" placeholder="Last Name" required="required" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="email" name="email" className="form-control" placeholder="Email" required="required" />
                                </div>
                                <div className="form-group">
                                    <input type="password" name="password" className="form-control" placeholder="Password" required="required" />
                                </div>
                                <div className="form-group">
                                    <input type="password" name="confirm_password" className="form-control" placeholder="Confirm Password" required="required" />
                                </div>
                                {/* <div className="form-group">
                                    <label className="checkbox-inline">
                                        <input type="checkbox" required="required" /> You agree to the <Link href="#">Terms</Link> <Link href="#">Conditions</Link>.
                                    </label>
                                </div> */}
                                <div className="row">
                                    <div className="col-md-6 col-xs-12">
                                        <div className="form-group">
                                            <input type="submit" value="Register" className="btn btn-primary btn-block btn-lg" id="btnx" tabIndex="7" onClick={this.handleSubmit} />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Modal>
        );
    }
}

export default SignUpModal;