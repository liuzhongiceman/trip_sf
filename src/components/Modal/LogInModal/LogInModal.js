import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal } from 'reactstrap';
import './LogInModal.css';

class LogInModal extends Component {
    render() {
        return (
            <Modal isOpen={this.props.isLogInModalOpen} toggle={this.props.handleLogInModal} size="lg"
                style={{ maxWidth: '500px', width: '70%' }}>
                <div className="modalForm">
                    <form action="" method="post">
                        <h2 className="text-center">Please login</h2>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Username" required="required" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password" required="required" />
                        </div>
                        <div className="form-group clearfix">
                            <label className="checkbox-inline pull-left"><input type="checkbox" /> Remember me</label>
                            <button type="submit" className="btn btn-primary pull-right">Log in</button>
                        </div>
                        <div className="clearfix">
                            <Link href="#" className="pull-left">Forgot Password?</Link>
                            <Link href="#" className="pull-right">Create an Account</Link>
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