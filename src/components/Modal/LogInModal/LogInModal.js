import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal } from 'reactstrap';
import './LogInModal.css';

class LogInModal extends Component {
    render() {
        return (
            <Modal isOpen={this.props.isLogInModalOpen} toggle={this.props.handleLogInModal} size="lg"
                style={{ maxWidth: '500px', width: '70%' }}>
                <div class="modalForm">
                    <form action="" method="post">
                        <h2 class="text-center">Please login</h2>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Username" required="required" />
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="Password" required="required" />
                        </div>
                        <div class="form-group clearfix">
                            <label class="checkbox-inline pull-left"><input type="checkbox" /> Remember me</label>
                            <button type="submit" class="btn btn-primary pull-right">Log in</button>
                        </div>
                        <div class="clearfix">
                            <Link href="#" class="pull-left">Forgot Password?</Link>
                            <Link href="#" class="pull-right">Create an Account</Link>
                        </div>
                        <div className="row cancelBtnRow">
                            <Button className="cancelBtn" color="danger" onClick={this.props.handleLogInModal}>Cancel</Button>
                        </div>
                    </form>
                </div>
            </Modal>
    
        );
    }
}

export default LogInModal