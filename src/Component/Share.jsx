import React, { Component } from 'react';
import { BiArrowBack } from 'react-icons/bi'
import { VscCopy } from 'react-icons/vsc'
import { MdEdit, MdOutlineQrCode2, MdMailOutline } from 'react-icons/md'
import { Link } from 'react-router-dom'

class Share extends Component {
    state = {}
    render() {
        return (
            <>
                <div className='logo_div'>
                    <img src="images/Layer 1.png" alt="not found" />
                </div>
                <button className='back_button'><Link to="/" className='back_button'><BiArrowBack />back</Link></button>
                <div className='section'>
                    <div className='section_div'>
                        <div className='card_div'>
                            <p>Your Card</p>
                            <div className='yourCrad_img'>
                                <div className='inputfield'>
                                    <div className='inputfield_text'>
                                        <p>full Name</p>
                                        <p>Email Address</p>
                                    </div>
                                    <div className='edit_icon'>
                                    <MdEdit/>
                                    </div>
                                </div>
                                <button className='create_card'><Link to='createCard'>Create A New Card</Link></button>
                            </div>
                        </div>
                        <div className='card_div'>
                            <p>Share Your Card</p>
                            <div className='shareCrad_img'>
                                <img src="images/Group.png" alt="not fount" />
                                <p>Scan or Click to Preview</p>
                            </div>
                        </div>
                        <div className='card_div'>
                            <p>Unlock Features</p>
                            <div className='unlockCrad_img'>
                                <p>upgrade your plan to unlock more exciting features</p>
                                <button>UPGRADE PLAN</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='tools_div'>
                    <div className='tools'>
                        <div className='tool_first'>
                            <div className='tools_logo'>
                            <MdOutlineQrCode2/>
                            </div>
                            <p className='tools_text'>code</p>
                        </div>
                        <div className='tool_second'>
                            <div className='tools_logo'><MdMailOutline/></div>
                            <p className='tools_text'>Email</p>
                        </div>
                        <div className='tool_third'>
                            <div ><VscCopy/></div>
                            <p >Copy Text</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Share;