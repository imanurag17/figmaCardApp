import React, { Component } from 'react';
import {Link} from 'react-router-dom'
 class NavBar extends Component {
    state = {  } 
    render() { 
        return (
        <>
        <div className='nav_bar'>
            <div className='nav_img'>
                <img src='images/Layer 1.png' alt='notFound'/>
            </div>
            <div className='nav_heading'>
                <h4>FEATURES</h4>
                <h4>PRICING</h4>
                <h4>BUSINESS</h4>
                <h4>SMART CARD</h4>
                <button className='button'>
                <Link to='share'>CREATE A CARD</Link>
                </button>
            </div>
        </div>
        </>
        );
    }
 }
  
 export default NavBar;