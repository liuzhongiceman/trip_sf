import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal } from 'reactstrap';
import './SignUpModal.css';

class SignUpModal extends Component {
    render() {
        return (
            <Modal isOpen={this.props.isSignUpModalOpen} toggle={this.props.handleSignUpModal} size="lg"
                style={{ maxWidth: '500px', width: '80%' }}>
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12 col-md-offset-12 col-sm-offset-12">
                        <div class="register-form">
                            <form action="" method="post" >
                                <h2 class="text-center">Registration</h2>
                                <p class="hint-text">Create your account. It's free and takes just a minute.</p>
                                <div class="row">
                                    <div class="col-md-6 col-xs-12">
                                        <div class="form-group">
                                            <input type="text" name="first_name" class="form-control" placeholder="First Name" required="required" />
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-xs-12">
                                        <div class="form-group">
                                            <input type="text" name="last_name" class="form-control" placeholder="Last Name" required="required" />
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <input type="email" name="email" class="form-control" placeholder="Email" required="required" />
                                </div>
                                <div class="form-group">
                                    <input type="password" name="password" class="form-control" placeholder="Password" required="required" />
                                </div>
                                <div class="form-group">
                                    <input type="password" name="confirm_password" class="form-control" placeholder="Confirm Password" required="required" />
                                </div>
                                <div class="form-group">
                                    <label class="checkbox-inline">
                                        <input type="checkbox" required="required" /> You agree to the <Link href="#">Terms</Link> <Link href="#">Conditions</Link>.
                        </label>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 col-xs-12">
                                        <div class="form-group">
                                            <input type="submit" value="Register" class="btn btn-primary btn-block btn-lg" id="btnx" tabindex="7" />
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-xs-12">
                                        <div class="form-group">
                                            <Link href="#" class="btn btn-success btn-block btn-lg">Sign In</Link>
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