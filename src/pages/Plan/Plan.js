import React,{Component} from 'react';
import Navbar from '../../components/Navbar/Navbar';
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
                <Navbar />
                <SideMenu />
                <Footer />
            </div>
        )
    }
}
export default Plan;