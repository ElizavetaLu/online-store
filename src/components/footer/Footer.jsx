import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-navigation">
                <div className="nav-item">Shop</div>
                <div className="nav-item">About</div>
                <div className="nav-item">Contact</div>
                <div className="nav-item">Blog</div>
            </div>
            <Link to={'/online-store/build/'}>
                <div className="logo">
                    <img src="/pepper-store/build//images/icons/text-1669408186912.png" alt="" />
                </div>
            </Link>
            <div className="company">@ 2022 Pipka. All rights are reserved</div>
        </div>
    )
}

export default Footer