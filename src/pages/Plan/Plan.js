import React,{Component} from 'react';
import Footer from '../../components/Footer/Footer';
import SideMenu from './SideMenu';

class Plan extends Component{
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,

        }
        
    }

    render(){
        return(
            <div>
                <SideMenu />
                <Footer />
            </div>
        )
    }
}
export default Plan;