import React from "react";
import { Link } from "react-router-dom";
import "./category.scss"

const Category = ({ name, img }) => {


    return (
        <div className="block">
            <div className="block-title">{name}</div>
            <div className="block-image">
                <img src={img} alt="" />
            </div>
            <Link to={`/online-store/build/${name}`}>
                <div className="button" >
                    <button className="btn">shop now</button>
                </div>
            </Link>
        </div>
    )
}

export default Category