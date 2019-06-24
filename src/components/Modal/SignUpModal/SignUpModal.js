import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal } from 'reactstrap';
import './SignUpModal.css';

class SignUpModal extends Component {
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
                                <div className="form-group">
                                    <label className="checkbox-inline">
                                        <input type="checkbox" required="required" /> You agree to the <Link href="#" to="\">Terms</Link> <Link href="#" to="\">Conditions</Link>.
                        </label>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-xs-12">
                                        <div className="form-group">
                                            <input type="submit" value="Register" className="btn btn-primary btn-block btn-lg" id="btnx" tabindex="7" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-xs-12">
                                        <div className="form-group">
                                            <Link href="#" className="btn btn-success btn-block btn-lg" to="\">Sign In</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <Button className="cancelBtn" color="danger" onClick={this.props.handleSignUpModal}>Cancel</Button>
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