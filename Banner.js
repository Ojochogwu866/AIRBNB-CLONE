import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./Banner.css";
import Search from "./Search"; 

function Banner() {
    const history = useHistory();
    const [showSearch, setShowSearch] = useState(false);
    return (
        <div className="banner">
           <div className="banner__search">
               {showSearch && < Search />}
               <button  className="banner__searchbutton" onClick={() =>setShowSearch(!showSearch)}>{showSearch? "Hide" :
               "SearchDates"}</button>

               </div>    
           <div className="banner__info">

                <h1>Get out and stretch your Imagination </h1>
                <h5>Plan a different kind of gateway to uncover the hidden gems near you </h5>
                <button onClick={() => history.push('/.search')}>Explore Nearby</button>

            </div>  
            <div className=""></div> 
        </div>
    )
}

export default Banner
