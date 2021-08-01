import React from "react"
import Event_1 from '../images/small_1.jpeg'
import Event_2 from '../images/small_2.jpeg'
import Event_3 from '../images/small_3.jpeg'
import "../styles/Events.css"

const Events = () => {
    return(
        <>
            <div className="events-text">
                <h2>Custom events: an adventure that’s all about your group</h2>
                <p>Your get-together is about to get WAY more exciting.</p>
            </div>
            <div className="events-grid">
                <div className="events-card">
                    <img src={Event_1} alt="" />
                    <p className="link">Team Building Activities</p>
                </div>
                <div className="events-card">
                    <img src={Event_3} alt="" />
                    <p className="link">Bachelorette Party Scavenger Hunt</p>
                </div>
                <div className="events-card">
                    <img src={Event_2} alt="" />
                    <p className="link">Birthdat Party Scavenger Hunt</p>
                </div>
            </div>
        </>
    )
}
export default Events