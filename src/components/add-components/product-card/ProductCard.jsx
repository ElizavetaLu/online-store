import React from "react";
import "./productCard.scss"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/actions";

const ProductCard = (props) => {

    const dispatch = useDispatch()

    const { image, price, rating, title } = props

    return (
        <Link to={`/online-store/build/product/${title.slice(0, 15)}`} state={props}>
            <div className="card">
                <div className="product-photo">
                    <img src={image} alt="" />
                </div>
                <div className="brief-product-info">
                    <div className="name">{title}</div>
                    <div className="rate">
                        <div className="star">
                            <img src="/pepper-store/build//images/icons/star.png" alt="" />
                        </div>
                        <div className="rate0numb"> {rating.rate}</div>
                    </div>
                    <div className="price">${price}</div>
                </div>

                <div className="button" onClick={e => {
                    e.preventDefault()
                    dispatch(addToCart(props, 1, title))
                }}>
                    <button className="btn">Add to cart</button>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard