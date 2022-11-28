import React from "react";
import { useNavigate } from "react-router-dom";
import "./goBack.scss"

const GoBack = () => {

    const navigate = useNavigate();

    return (
        <div className="nav-btn" onClick={() => navigate(-1)}>
            <div className="arrow-back">
                <img src="/pepper-store/build//images/icons/d-arrow.png" alt="" />
            </div>
            <div className="text">Go back</div>
        </div>
    )
}

export default GoBack