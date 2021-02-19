import React from 'react';
import './SearchResults.css';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from '@material-ui/icons/Star';

function SearchResults({
    img,
    location,
    title,
    description,
    star,
    price,
    total,
}) {
    return (
        <div className="searchresults">
            <img src={img} alt="" />
            <FavoriteBorderIcon className="searchresult__heart" />

            <div className="searchresults__info">
            <div className="searchresults__infoTop">
                <p>{location}</p>
                <h3>{title}</h3>
                <p>____</p>
                <p>{description}</p>
                
                </div>
                <div className="searchresults__infoBottom">
                    <div className="searchresults__stars">
                        <StarIcon className="searchresult__star" />
                        <p><strong>{star}</strong></p>

                    </div>
                    <div className="searchresults__price">
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>
                
            </div>

            </div>

        </div>
    )
}

export default SearchResults
