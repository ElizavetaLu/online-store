import React from "react";
import { useNavigate } from "react-router-dom";
import "./goBack.scss";

const GoBack = () => {

    const navigate = useNavigate();

    return (
        <button className="back" onClick={() => navigate(-1)}>
            <img className="back-icon" src="/images/icons/vector.png" alt="" />
        </button>
    )
}

export default GoBack