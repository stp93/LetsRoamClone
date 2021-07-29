import React from 'react';
import Atlanta from "../images/atlanta.jpeg";
import Boston from "../images/boston.jpeg";
import Chicago from "../images/chicago.jpeg";
import Denver from "../images/denver.jpeg";
import Melbourne from "../images/melbourne.jpeg";
import NewOrleans from "../images/newOrleans.jpeg";
import NewYork from "../images/new_york.jpeg";
import SanFran from "../images/sanfran.jpeg";
import "../styles/Cities.css";
import City from "./City";

const cities = [
    {
        photo:Boston,
        text:"Boston"
    },
    {
        photo: NewYork,
        text:"New York"
    },
    {
        photo: Atlanta,
        text:"Atlanta"
    },
    {
        photo: Chicago,
        text:"Chicago"
    },
    {
        photo: Denver,
        text:"Denver"
    },
    {
        photo: SanFran,
        text:"San Francisco"
    },
    {
        photo: Melbourne,
        text:"Melbourne"
    },
    {
        photo: NewOrleans,
        text:"New Orleans"
    },
]

const Cities = () => {
    return (
        <div className="cities-section">
            <div className="top-cities">
                <h2>Popular places to roam with your friends and family</h2>
                <p>With top-rated activities in 400+ cities across the world 
                    you'll be sure to find something fun to do with your friends, 
                    family, or coworkers.</p>
                    <a href="#">Find your city</a>
            </div>
            <div className="grid-cities-container">
            <div className="grid-cities">
            {cities.map((e) => {
                return(
                <City photo={e.photo} text={e.text}/>
                )
                }
            )}
            </div>
            </div>
        </div>
    )
}
export default Cities;