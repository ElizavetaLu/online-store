import React from "react";
import { Link } from "react-router-dom";
import "./category.scss";

const Category = ({ name, img }) => {

    return (
        <div className="block">
            <div className="block-title">{name}</div>
            <div className="image-container">
                <img className="block-image" src={img} alt="" />
            </div>
            <Link to={`/${name}`}>
                <button className="btn">shop now</button>
            </Link>
        </div>
    )
}

export default Category