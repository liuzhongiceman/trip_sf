import React, {Component} from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import 'react-dates/initialize';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './Form.css';

import { DateRangePicker } from 'react-dates';


class Form extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            startDate: null,
            endDate: null,
            focusedInput: null,
        };
    }

    render(){
        return(
            <div className="form-container">
                <form className="form-div">
                    <div className="row">
                        <p className="itinerary">Itinerary Planner</p>
                        <div class="form-group col-md-12">
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
                            <button class="large red button">Recommend</button>
                        </div>
                        <div class="form-group">
                            <button class="large red button">Create My Own</button>
                        </div>
                    </div>
                </form>
            </div>
            

        )
    }
}

export default Form;