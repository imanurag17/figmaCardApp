import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import { FaDiscord, FaLinkedinIn, FaWhatsapp, FaFacebookF, FaInstagram, FaSnapchatGhost } from 'react-icons/fa'

class CreateCard extends Component {
    state = {}
    render() {
        return (
            <>
                <div className='logo_div'>
                    <img src="../../mainLogo.png" alt="not found" />
                </div>
                <button className='back_button'><Link to="/share" className='back_button'><BiArrowBack />back</Link></button>
                <div className='userinfo'>
                    <div>
                        <div className='uploadimg_div'>
                            <img src="../images/Vector.png" alt="not found" />
                            <p>upload and image</p>
                            <img className='addlogo_img' src="../images/addLogo.png" alt="not found" />
                        </div>
                        <form action="#" className='user_form'>

                            <label htmlFor="">First Name</label><br />
                            <input type="text" />

                            <div>
                                <label htmlFor="">First Name</label><br />
                                <input type="text" />
                            </div>
                            <div>
                                <label htmlFor="">First Name</label><br />
                                <input type="text" />
                            </div>
                            <div>
                                <label htmlFor="">First Name</label><br />
                                <input type="text" />
                            </div>
                            <div>
                                <label htmlFor="">First Name</label><br />
                                <input type="text" />
                            </div>
                            <div>
                                <label htmlFor="">First Name</label><br />
                                <input type="text" />
                            </div>
                            <div>
                                <label htmlFor="">First Name</label><br />
                                <input type="text" />
                            </div>
                            <div>
                                <label htmlFor="">First Name</label><br />
                                <input type="text" />
                            </div>
                        </form>
                    </div>
                    <div className='additionalInfo_div'>
                        <h2>ADD ADDITIONAL INFORMATION</h2>
                        <div className='additionalInfo'>
                            <div className='socialMedia_logo'>
                                <div><FaDiscord /></div>
                                <p>Discord</p>
                            </div>
                            <div className='socialMedia_logo'>
                                <div><FaLinkedinIn /></div>
                                <p>LinkedinIn</p>
                            </div>
                            <div className='socialMedia_logo'>
                                <div><FaWhatsapp /></div>
                                <p>Whatsapp</p>
                            </div>
                            <div className='socialMedia_logo'>
                                <div><FaFacebookF /></div>
                                <p>Facebook</p>
                            </div>
                            <div className='socialMedia_logo'>
                                <div><FaInstagram /></div>
                                <p>Instagram</p>
                            </div>
                            <div className='socialMedia_logo'>
                                <div><FaSnapchatGhost /></div>
                                <p>Snapchat</p>
                            </div>
                            <div className='socialMedia_logo'>
                                <div><FaDiscord /></div>
                                <p>Discord</p>
                            </div>
                            <div className='socialMedia_logo'>
                                <div><FaDiscord /></div>
                                <p>Discord</p>
                            </div>
                            <div className='socialMedia_logo'>
                                <div><FaDiscord /></div>
                                <p>Discord</p>
                            </div>
                            <div className='socialMedia_logo'>
                                <div><FaDiscord /></div>
                                <p>Discord</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default CreateCard;