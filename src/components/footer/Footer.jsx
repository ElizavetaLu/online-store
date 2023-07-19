import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const navList = ['shop', 'about', 'contact', 'blog'];

const Footer = () => {

    return (
        <div className="footer-container">
            <div className="footer">
                <div className="footer-navigation">
                    {
                        navList.map(item => <div key={item} className="nav-item">{item}</div>)
                    }
                </div>

                <Link to="/" className="logo">
                    <img className="logo-icon" src="/images/icons/text-1669408186912.png" alt="" />
                </Link>

                <p className="company">&#64; 2022 Pipka. All rights are reserved</p>


                {/* mobile */}
                <div className="footer-mobile-logo">
                    <Link to="/" className="logo-mobile">
                        <img className="logo-icon-mobile" src="/images/icons/text-1669408186912.png" alt="" />
                    </Link>

                    <p className="company-mobile">&#64; 2022 Pipka. All rights are reserved</p>
                </div>

                <div className="footer-mobile-navigation">
                    {
                        navList.map(item => <div key={item} className="nav-item">{item}</div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Footer