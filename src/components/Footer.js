import React from 'react';
import { FaAndroid, FaApple, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import "../styles/Footer.css";

const Footer = () => {
    return(
    <>
        <section className="footer">
            <div className="link-container">
            <div className="footer-links-container">
                <h2>Custom Events</h2>
                <ul>
                    <li className="footer-list-item"><a href="/" className="footer-links">Virtual Team Building Activities</a></li>
                    <li className="footer-list-item"><a href="/" className="footer-links">Team Building Activities</a></li>
                    <li className="footer-list-item"><a href="/" className="footer-links">Bachelorette Party Scavenger Hunts</a></li>
                    <li className="footer-list-item"><a href="/" className="footer-links">Virtual Birthday Party</a></li>
                    <li className="footer-list-item"><a href="/" className="footer-links">Birthday Party Scavenger Hunts</a></li>
                    <li className="footer-list-item"><a href="/" className="footer-links">Scavenger Hunt Fundraisers</a></li>
                    <li className="footer-list-item"><a href="/" className="footer-links">Public Events</a></li>
                </ul>
            </div>
            <div className="footer-links-container">
                <h2>Popular</h2>
                <ul>
                    <li className="footer-list-item"><a href="/" className="footer-links">Virtual Team Building Activities</a></li>
                    <li className="footer-list-item"><a href="/" className="footer-links">Team Building Activities</a></li>
                    <li className="footer-list-item"><a href="/" className="footer-links">Bachelorette Party Scavenger Hunts</a></li>
                    <li className="footer-list-item"><a href="/" className="footer-links">Virtual Birthday Party</a></li>
                    <li className="footer-list-item"><a href="/" className="footer-links">Birthday Party Scavenger Hunts</a></li>
                    <li className="footer-list-item"><a href="/" className="footer-links">Scavenger Hunt Fundraisers</a></li>
                    <li className="footer-list-item"><a href="/" className="footer-links">Public Events</a></li>
                </ul>
            </div>
            <div className="footer-links-container">
                <h2>Community</h2>
                <ul>
                    <li className="footer-list-item"><a href="/" className="footer-links">Virtual Team Building Activities</a></li>
                    <li className="footer-list-item"><a href="/" className="footer-links">Team Building Activities</a></li>
                    <li className="footer-list-item"><a href="/" className="footer-links">Bachelorette Party Scavenger Hunts</a></li>
                    <li className="footer-list-item"><a href="/" className="footer-links">Virtual Birthday Party</a></li>
                    <li className="footer-list-item"><a href="/" className="footer-links">Birthday Party Scavenger Hunts</a></li>
                    <li className="footer-list-item"><a href="/" className="footer-links">Scavenger Hunt Fundraisers</a></li>
                    <li className="footer-list-item"><a href="/" className="footer-links">Public Events</a></li>
                </ul>
            </div>
            </div>
            <div className="social">
                <div className="social-links">
                    <a href="/"><FaFacebook/></a>
                    <a href="/"><FaTwitter/></a>
                    <a href="/"><FaInstagram/></a>
                </div>
                <div className="social-links">
                    <a href="/"><FaAndroid/></a>
                    <a href="/"><FaApple/></a>
                </div>
            </div>
            <div className="legal-container">
                <p>© 2021 Let's Roam, LLC. All Rights Reserved</p>
                <p>Let’s Roam® is a registered trademark.</p>
            </div>
            <div className="legal-other">
                <a href="/">Terms Of Service</a>
                <a href="/">Privacy Policy</a>
                <a href="/">Sitemap</a>
            </div>
        </section>
    </>
    )
}
export default Footer;