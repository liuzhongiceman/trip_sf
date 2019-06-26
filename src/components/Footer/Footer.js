import React, { Component } from 'react';
import './Footer.css';
import Human1 from '../../assets/FooterImage/human/1.png';
import Human2 from '../../assets/FooterImage/human/2.png';
import Human3 from '../../assets/FooterImage/human/3.png';
import Human4 from '../../assets/FooterImage/human/4.png';
import Human5 from '../../assets/FooterImage/human/5.png';
import Human6 from '../../assets/FooterImage/human/6.png';
import Human7 from '../../assets/FooterImage/human/7.png';
import Human8 from '../../assets/FooterImage/human/8.png';
import Human9 from '../../assets/FooterImage/human/9.png';
import Facebook from '../../assets/FooterImage/media/facebook.png';
import Google from '../../assets/FooterImage/media/google.png';
import Instgram from '../../assets/FooterImage/media/instgram.png';
import Snapchat from '../../assets/FooterImage/media/snapchat.png';
import Twitter from '../../assets/FooterImage/media/twitter.png';
import Wechat from '../../assets/FooterImage/media/wechat.png';
import Whatsapp from '../../assets/FooterImage/media/whatsapp.png';
import Youtube from '../../assets/FooterImage/media/youtube.png';


class Footer extends Component {
    render() {
        return (
            <section className="footer">
                <div className="container-fluid padding">
                    <div className="row text-center">
                        <div className="col-md-4">
                            <h3>Contact</h3>
                            <p>E-mail: trip-advisor@gmail.com</p>
                            <p>Tel: 9096880999</p>
                            <p>6024 Silver Creek Valley Rd, San Jose, CA 95138</p>
                        </div>
                        <div className="col-md-4">
                            <p className="team">Meet Our Team</p>
                            <ul className="team1">
                                <li><img className="huamn-icon" id="name-group" src={Human1} alt="" />Hui xiang</li>
                                <li><img className="huamn-icon" id="name-group" src={Human2} alt="" />Xin yi</li>
                                <li><img className="huamn-icon" id="name-group" src={Human3} alt="" />Yi shi</li>
                            </ul>
                            <ul className="team2">
                                <li><img className="huamn-icon" id="name-group" src={Human4} alt="" />Zhi yu</li>
                                <li><img className="huamn-icon" id="name-group" src={Human5} alt="" />Zhong liu</li>
                                <li><img className="huamn-icon" id="name-group" src={Human6} alt="" />Kyle</li>
                            </ul>
                            <ul className="team3">
                                <li><img className="huamn-icon" id="name-group" src={Human7} alt="" />Chao Duan</li>
                                <li><img className="huamn-icon" id="name-group" src={Human8} alt="" />Meng di</li>
                                <li><img className="huamn-icon" id="name-group" src={Human9} alt="" />Jacky</li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <p className="followSocial">Follow Us On Social Media</p>
                            <ul className="social1">
                                <li><img className="company-icon" src={Facebook} alt="" /></li>
                                <li><img className="company-icon" src={Google} alt="" /></li>
                                <li><img className="company-icon" src={Twitter} alt="" /></li>
                                <li><img className="company-icon" src={Youtube} alt="" /></li>
                            </ul>
                            <ul className="social2">
                                <li><img className="company-icon" src={Snapchat} alt="" /></li>
                                <li><img className="company-icon" src={Wechat} alt="" /></li>
                                <li><img className="company-icon" src={Instgram} alt="" /></li>
                                <li><img className="company-icon" src={Whatsapp} alt="" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}
export default Footer;