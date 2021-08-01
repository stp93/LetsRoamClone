import React from 'react';
import Jumping from "../images/jumping.jpeg";
import Outdoor from "../images/outdoor-hunt.jpeg";
import RemoteWork from "../images/remote_work.jpeg";
import Event_1 from '../images/small_1.jpeg';
import Event_2 from '../images/small_2.jpeg';
import Event_3 from '../images/small_3.jpeg';
import "../styles/Events.css";
import "../styles/Lower.css";

const Lower = () => {
    return(
    <>
    <section className="events-section">
    <div className="events-text">
                <h2>Custom events: an adventure that’s all about your group</h2>
                <p>Your get-together is about to get WAY more exciting.</p>
            </div>
            <div className="events-container">
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
    </section>
        <section className="blog-section">
            <div className="blog-header">
                <h2>Roam Our Blog</h2>
                <a href="/">See Blog &gt; </a>
            </div>
            <div className="blog-card-container">
                
                    <div className="blog-card">
                        <img src={RemoteWork} alt="" />
                        <a href="/" className="blog-card-header">
                        11 Virtual Games Your Remote Team Will Love
                        </a>
                        <p>
                        These top virtual games for remote teams will help your employees bond and feel closer than ever!
                        </p>
                        <div className="lower-card-container">
                            <p>
                            Charlie .
                            </p>
                            <p>
                            May 1, 2020
                            </p>
                        </div>
                    </div>
                    <div className="blog-card">
                        <img src={Outdoor} alt="" />
                        <a href="/" className="blog-card-header">
                        What To Bring On An Outdoor Scavenger Hunt
                        </a>
                        <p>Prepare to don your explorer hat and get your monocle on – you’re about to head out on a scavenger hunt! Unsure of what you need to...</p>
                        <div className="lower-card-container">
                            <p>Jordan .</p>
                            <p>Apr 27, 2021</p>
                        </div>
                    </div>
                
               
                    <div className="blog-card">
                        <img src={Jumping} alt="" />
                        <a href="/" className="blog-card-header">
                        Can Team Bonding Improve Productivity?
                        </a>
                        <p>
                        Team building is undoubtedly a great resource for better workplace relations, but how effective is it at improving productivity? We've done the...
                        </p>
                        <div className="lower-card-container">
                            <p>
                            Charlie .
                            </p>
                            <p>
                            May 1, 2020
                            </p>
                        </div>
                    </div>
            </div>
        </section>
        <section className="email-section">
            <div className="form-container">
                <h2>Join our Newsletter!</h2>
                <p>Join to get exclusive access to adventure tips, promotions, news, and giveaways.</p>
                <form className="email-newsletter">
                    <label className="email-label" htmlFor="email">Subscribe</label>
                    <input type="email" name="email" id="email-input" />
                </form>
            </div>
        </section>
    </>
    )
}
export default Lower;