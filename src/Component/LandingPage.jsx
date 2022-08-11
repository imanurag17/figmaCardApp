import React, { Component } from 'react';
import NavBar from './NavBar';

class LandingPage extends Component {
    state = {}
    render() {
        return (
            <>
            <div className='landingPage_background'>
                <NavBar />
                <div className='main_div'>
                    <div className='text_div'>
                        <p className='para_first'>Make your professional life easy</p>
                        <p className='para_second'>Create your <span className='para_first'>Free</span> <h1>Virtual Business Card</h1></p>
                        <p className='para_third'>Take your first step towards a successful business</p>
                        <button className='button'>CREATE A CARD</button>
                    </div>
                    <div className='lp_img'>
                        <img src="images/solid.png" alt="not found" />
                    </div>
                </div>
            </div>
            <div className='lp_image'>
                <div className='iPhoneMain_img' >
                    <img src="images/iPhone.png" className='iPhone_img' alt="not found" />
                </div>
                <div className='card_text'>
                    <p className='first_text'>Create your <h2>DIGITAL BUSINESS CARD</h2></p>
                    <p className='second_text'>Just enter the information you want to show on the card. Share anywhere, anytime on any Platform</p>
                    <button className='contact_btn'>Contact Us</button>
                </div>
            </div>
            </>

        );
    }
}

export default LandingPage;