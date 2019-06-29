import React, {Component} from 'react';
import { Redirect } from 'react-router-dom'
import './Form.css';
import Plan from '../../pages/Plan/Plan';
import { DatePicker } from 'antd';
import { TOKEN_KEY, AUTH_HEADER, API_ROOT } from '../../constants';


class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            startDate: '',
            endDate: '',
            destination: '',
            planData: '',
        };

    }

    renderRedirect = () => {
        if(this.state.redirect){
            return <Redirect to='/plan' />
        }
    }

    handleRecommend = () => {
        console.log("you have clicked Recommmend")
        console.log(
            this.state.startDate,
            this.state.endDate,
            this.state.destination
        )
        this.setState({
            redirect: true
        })
        // Fire API call
        // fetch(`${API_ROOT}/endpoint`, {
        //     method: "GET/POST",
        //     headers: {
        //         Authorization: `${AUTH_HEADER} ${token}`
        //     }
        // })
        // .then((response) => {
        //     if (response.ok) {
        //         return response.json();
        //     }
        //     throw new Error("Fail to load create Recommended plan.");
        // })
        // .then((data) => {
        //     this.setState({
        //         planData: data ? data : [],
        //     })
        //     // console.log(this.state.planData);
        // })
        // .catch((e) => {
        //     this.setState({
        //         error: e.message,
        //     })
        //     console.log(e);
        // })
    }

    handleCreate = () => {
        console.log("you have clicked Create My Own");
        console.log(
            this.state.startDate,
            this.state.endDate,
            this.state.destination
        )
        this.setState({
            redirect: true
        })
        // Fire API call
        // fetch(`${API_ROOT}/endpoint`, {
        //     method: "GET/POST",
        //     headers: {
        //         Authorization: `${AUTH_HEADER} ${token}`
        //     }
        // })
        // .then((response) => {
        //     if (response.ok) {
        //         return response.json();
        //     }
        //     throw new Error("Fail to load create blank plan.");
        // })
        // .then((data) => {
        //     this.setState({
        //         planData: data ? data : [],
        //     })
        //     // console.log(this.state.planData);
        // })
        // .catch((e) => {
        //     this.setState({
        //         error: e.message,
        //     })
        //     console.log(e);
        // })
        
    }

    handleDestination = (event) => {
        this.setState({ 
            destination: event.target.value,
        })
    }

    handleDateRange = (date, dateString) => {
        this.setState({ 
            startDate: dateString[0],
            endDate: dateString[1]
        })
    }

    render(){
        const { RangePicker } = DatePicker;
        return(
            <div>
                {this.renderRedirect()}
                <div className="form-container">
                    <form className="form-div">
                        <div className="row">
                            <p className="itinerary">Itinerary Planner</p>
                            <div className="form-group col-md-12">
                                <input type="text" destination={this.state.input} onChange={this.handleDestination} className="form-control" id="inputDestination" placeholder="Enter Destination" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-12" id="datepicker">
                                <RangePicker onChange={this.handleDateRange} />
                            </div>
                        </div>

                        <div className="row align-items-center">
                            <div className="form-group btn-recommend">
                                <button className="large red button" onClick={this.handleRecommend} type="button">Recommend</button>
                            </div>
                            <div className="form-group">
                                <button className="large red button" onClick={this.handleCreate} type="button">Create My Own</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            
        )
    }
}

export default Form;