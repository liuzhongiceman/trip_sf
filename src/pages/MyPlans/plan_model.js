import React, {Component} from 'react';
import LA from '../../assets/Cities/Thumbnails/la.jpg';
import NY from '../../assets/Cities/Thumbnails/ny.jpg';
import SF from '../../assets/Cities/Thumbnails/sf.jpg';
import CH from '../../assets/Cities/Thumbnails/ch.jpg';
import SD from '../../assets/Cities/Thumbnails/sd.jpg';
import ST from '../../assets/Cities/Thumbnails/st.jpg';
import Others from '../../assets/Cities/Thumbnails/others.jpg'
import { Link } from 'react-router-dom';

class Plan_Model extends Component{
    constructor(props) {
        super(props);
        this.state = {
            imageShow: Others,
            city:props.city,
            date: props.start_date + " - " + props.end_date,
            days:0
        };
        this.setImageShow = this.setImageShow.bind(this);
        this.daysCaculateHandler = this.daysCaculateHandler.bind(this);
    }

    setImageShow(){
        switch (this.props.city){
            case "los angeles":
                this.setState({
                    imageShow:LA,
                });
            break;
            case "new york":
                this.setState({
                    imageShow: NY,
                });
                break;
            case "san francisco":
                this.setState({
                    imageShow: SF,
                });
                break;
            case "chicago":
                this.setState({
                    imageShow: CH ,
                });
                break;
            case "seattle":
                this.setState({
                    imageShow: ST,
                });
                break;
            case "san diego":
                this.setState({
                    imageShow: SD,
                });
                break;
            default:
                this.setState({
                    imageShow: Others,
                });
        }
    }
        
    componentDidMount(){
        this.setImageShow();
        this.daysCaculateHandler(this.props.start_date, this.props.end_date);
    }

    daysCaculateHandler(date1, date2) {
        var dt1 = new Date(date1);
        var dt2 = new Date(date2);
        var daysCaculate = Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24));
        this.setState({
            days: daysCaculate,
        });
    }



    render(){
        // const routeUrl = this.state.days + "-days-" + "in-" + this.state.city + "-" + Math.floor(Math.random() * 90000) + 10000;
            return(
                <Link className="card" to='/detail' style={{ color: 'black' }}>
                    <img src={this.state.imageShow} className="card-img-top" alt="city"/>
                        <div class="card-body">
                        <h5 class="card-title">{this.props.city}</h5>
                        <p class="card-text">{this.state.date}</p>
                        <button type="button" class="btn btn-info">See day by day plan</button>
                        </div>
                </Link>
        )
    }
}


export default Plan_Model;