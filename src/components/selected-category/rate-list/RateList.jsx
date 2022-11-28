import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setSelectedRateProducts,setActiveRate } from "../../../redux/actions/index";
import "./rateList.scss";


const RateList = () => {
    
    const { name } = useParams();
    const dispatch = useDispatch();

    const allCategories = useSelector(state => state.allData);
    const currentCategory = Object.entries(allCategories).find(elem => elem[0].slice(0, 3) === name.slice(0, 3));

    const rating5 = currentCategory ? currentCategory[1].filter(item => Math.floor(item.rating.rate) === 1) : [];
    const rating4 = currentCategory ? currentCategory[1].filter(item => Math.floor(item.rating.rate) === 2) : [];
    const rating3 = currentCategory ? currentCategory[1].filter(item => Math.floor(item.rating.rate) === 3) : [];
    const rating2 = currentCategory ? currentCategory[1].filter(item => Math.floor(item.rating.rate) === 4) : [];
    const rating1 = currentCategory ? currentCategory[1].filter(item => Math.floor(item.rating.rate) === 5) : [];


    const createArrayWithStars = length => [...Array(length)].fill('/images/icons/star.png', 0);

    const handleProducts = productsArr => {
        dispatch(setSelectedRateProducts(productsArr));
        dispatch(setActiveRate(true));
    }


    return (
        <div className="rate-list">
            <div className="showAll"
            onClick={() => dispatch(setActiveRate(false))} >Show all</div>
            <div className="stars-row" onClick={() => handleProducts(rating5)}>
                <div className="star-icons">{createArrayWithStars(5).map((e, i) => <img src={e} key={i} alt="" />)} </div>
                <div className="product-amount" >( {rating5.length} )</div>
            </div>
            <div className="stars-row" onClick={() => handleProducts(rating4)}>
                <div className="star-icons">{createArrayWithStars(4).map((e, i) => <img src={e} key={i} alt="" />)} </div>
                <div className="product-amount">( {rating4.length} )</div>
            </div>
            <div className="stars-row" onClick={() => handleProducts(rating3)}>
                <div className="star-icons">{createArrayWithStars(3).map((e, i) => <img src={e} key={i} alt="" />)} </div>
                <div className="product-amount">( {rating3.length} )</div>
            </div>
            <div className="stars-row" onClick={() => handleProducts(rating2)}>
                <div className="star-icons">{createArrayWithStars(2).map((e, i) => <img src={e} key={i} alt="" />)} </div>
                <div className="product-amount">( {rating2.length} )</div>
            </div>
            <div className="stars-row" onClick={() => handleProducts(rating1)}>
                <div className="star-icons">{createArrayWithStars(1).map((e, i) => <img src={e} key={i} alt="" />)} </div>
                <div className="product-amount">( {rating1.length} )</div>
            </div>
        </div>
    )
}

export default RateList