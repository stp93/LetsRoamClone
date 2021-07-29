import React from 'react';
import "../styles/Search.css";
const Search = () => {
    return (
        <>
            <div className="container">
                <div className="search-box">
                    <label htmlFor="search-bar">Where do you want to roam?</label>
                    <input type="search-bar" className="search-bar" placeholder="Enter a city to explore our activities" />
                    <button className="search-button">Search For Activities</button>
                    <button className="activity-button">Staying Inside?</button>
                </div>
            </div>
        </>
    )
}
export default Search;