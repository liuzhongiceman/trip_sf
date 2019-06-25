import React, {Component} from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import 'react-dates/initialize';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './Form.css';
import { Redirect, Route,BrowserRouter as Router } from 'react-router-dom';
import { DateRangePicker } from 'react-dates';
import Plan from '../../pages/Plan/Plan';


class Form extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            startDate: null,
            endDate: null,
            focusedInput: null,
        };
    }

    handleRecommend () {
        console.log("you have clicked Recommmend")
        
    }

    handleCreate () {
        console.log("you have clicked Create My Own")
    }

    render(){
        return(
            <div className="form-container">
                <form className="form-div">
                    <div className="row">
                        <p className="itinerary">Itinerary Planner</p>
                        <div className="form-group col-md-12">
                            <input type="text" className="form-control" id="inputDestination" placeholder="Enter Destination" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-12" id="datepicker">
                            <DateRangePicker
                                startDateId="startDate"
                                endDateId="endDate"
                                startDate={this.state.startDate}
                                endDate={this.state.endDate}
                                onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate }) }}
                                focusedInput={this.state.focusedInput}
                                onFocusChange={(focusedInput) => { this.setState({ focusedInput }) }}
                            />
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="form-group btn-recommend">
                            <button className="large red button" onClick={this.handleRecommend}>Recommend</button>
                        </div>
                        <div className="form-group">
                            <button className="large red button" onClick={this.handleCreate}>Create My Own</button>
                        </div>
                    </div>
                </form>
            </div>
            

        )
    }
}

export default Form;