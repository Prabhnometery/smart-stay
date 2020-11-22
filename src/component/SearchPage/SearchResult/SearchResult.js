import React from 'react';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star'

import './SearchResult.css';

const SearchResult = (props) => (
    <div className='searchResult'>
        <img src={props.img} alt='' />
        <div className='searchResult_heart'>
            <FavoriteBorderIcon className='searchResult_heart' />
        </div>
        <div className='searchResult_info'>
            <div className='searchResult_infoTop'>
                <p>{props.location}</p>
                <h3>{props.title}</h3>
                <p>______</p>
                <p>{props.description}</p>
            </div>

            <div className='searchResult_infoBottom'>
                <div className='searchResult_stars'> 
                    <StarIcon className='searchResult_star' />
                    <p><strong>{props.star}</strong></p> 
                </div>
                <div className='searchResult_price'>
                    <h2>{props.price}</h2>
                    <p>{props.total}</p>
                </div>
            </div>

        </div>

    </div>
);

export default SearchResult;
