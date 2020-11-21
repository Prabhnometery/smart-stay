import React, { Component } from 'react';
import { Button } from '@material-ui/core';

import './Banner.css';
import DatePicker from './DatePicker/DatePicker';

class Banner extends Component {

    state = {
        showSearch: false
    }

    onClickHandler = () => {
        this.setState({showSearch: !this.state.showSearch})
    }

    render() {
        return (
        
        <div className='banner'>
            <div className='banner_search'>
                <Button onClick={this.onClickHandler} className='banner_searchButton' variant='outline'>{this.state.showSearch ? 'Hide' : 'Search Date'}</Button>
                {this.state.showSearch ? <DatePicker /> : null}

            </div>
            <div className='banner_info'>
                <h1>Get out and stretch your imagination</h1>
                <h5>Plan a different kind of getaway to uncover the hidden gems near you.</h5>
                <Button variant='outlined'> Explore Nearby </Button>

            </div>
        </div>
        )}
};

export default Banner;