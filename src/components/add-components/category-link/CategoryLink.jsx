import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setActiveRate } from "../../../redux/actions/index"
import "./categoryLink.scss"

const CategoryLink = ({ name }) => {

    const dispatch = useDispatch()

    return (
        <Link to={`/online-store/build/${name}`} className="item-link">
            <div className="category-item" onClick={() => dispatch(setActiveRate(false))}>
                {name}
            </div>
        </Link>
    )
}

export default CategoryLink