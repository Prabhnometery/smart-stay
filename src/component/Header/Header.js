import React from 'react';
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';

import './Header.css';
import logo from '../../assets/logo.png'

const Header = () => (
    <div className='header'>
        <img 
            className='header_icon' 
            src={logo}
            alt='logo'
        >
        </img>

        <div className='header_center'>
            <input type='text'></input>
            <SearchIcon />
        </div>

        <div className='header_right'>
            <p>Become a host</p>
            <ExpandMoreIcon />
            <Avatar />


        </div>
    </div>
);

export default Header;
