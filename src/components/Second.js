import React from 'react';
import Friend2 from "../images/friends_2.jpeg";
import "../styles/Second.css";
const Second = () => {
    return (
        <>
        <div className="second_container">
            <div className="top-container">
                <h2>We handcrafted your next scavenger hunt adventure</h2>
                <div className="body-container">
                    <p>You’ll never forget your Let’s Roam adventure. 
                        Our team of explorers has carefully crafted exciting 
                        experiences in 400+ cities across the globe. With wanderers 
                        like you in mind, we’ve created digitally guided Scavenger 
                        Hunts, Bar Hunts, Ghost Tours and more. 
                        Each adventure 
                        is designed to help you explore, laugh, discover, and connect. 
                        Memory making at its funnest.</p>
                </div>
            </div>
            <div className="second-img-container">
                <img src={Friend2} alt="Friend" />
            </div>
            </div>
        </>
    )
}
export default Second;