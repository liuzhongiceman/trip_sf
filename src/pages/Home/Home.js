import React,{Component} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import Footer from '../../components/Footer/Footer';
import Tutorial from '../../components/Tutorial/Tutorial';


class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isUserLogIn: false,
            logInModalOpen: false,
            signUpModalOpen: false,
            destination: '',
            startDate: '',
            endDate: ''
        }
        // this.handleLogInModalOpen = this.handleLogInModalOpen.bind(this);
        this.handleSignUpModalOpen = this.handleSignUpModalOpen.bind(this);
    }

    handleSignUpModalOpen(){
        console.log('clicked')
        console.log('signUpModalOpen', this.state.signUpModalOpen)
        this.setState(prevState=>{
            return{
                signUpModalOpen: !prevState.signUpModalOpen
            }
        })
    }

    render(){
        return(
            <div>
                <Navbar 
                    handleSignUpModalOpen={this.handleSignUpModalOpen} 
                    isSignUpModalOpen={this.state.signUpModalOpen}
                    isLogInModalOpen={this.state.logInModalOpen} />
                <Jumbotron />
                <div className="container">
                    <Tutorial/>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat orci eu nulla sagittis, pulvinar dignissim lectus consequat. Etiam in lobortis ligula, vitae ornare lacus. Vivamus scelerisque lorem arcu, vitae eleifend ex commodo a. Quisque rutrum, augue sit amet egestas efficitur, magna nulla lacinia elit, sed suscipit tortor erat vitae enim. Donec egestas odio id aliquet rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque mi dolor, egestas nec lacinia non, sodales eu lacus. Donec ultricies nec elit ac ornare. Quisque fermentum ligula ut feugiat cursus. Aliquam auctor suscipit ex a lacinia. Mauris sollicitudin, justo quis fringilla finibus, dui diam ullamcorper nulla, sit amet placerat justo neque quis quam. Praesent nec nibh at tortor ornare dignissim. Morbi tincidunt fringilla turpis at luctus. Vivamus dapibus ligula eget pellentesque luctus. Maecenas ut consectetur lacus, non dignissim nisi. Praesent sodales tellus sit amet faucibus tempus.
                    </p>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default Home;