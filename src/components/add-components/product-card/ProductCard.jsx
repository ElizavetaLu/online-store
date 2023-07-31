import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, setPopupText, showPopup } from "../../../redux/actions";
import "./productCard.scss"

const ProductCard = (props) => {

    const dispatch = useDispatch()

    const { image, price, rating, title } = props

    return (
        <Link className="card-link" to={`/online-store/build/product/${title.slice(0, 15)}`} state={props}>
            <div className="card">
                <div className="product-photo">
                    <img className="photo" src={image} alt="" />
                </div>

                <div className="name">{title}</div>
                <div className="rate-price-row">
                    <div className="price">${price}</div>
                    <div className="rate">
                        <img className="star" src="/online-store/build//images/icons/star.png" alt="" />
                        <div className="rate0numb"> {rating.rate}</div>
                    </div>
                </div>

                <button
                    className="button"
                    onClick={e => {
                        e.preventDefault()
                        dispatch(setPopupText('Product was added to cart'))
                        
                        dispatch(addToCart(props, 1, title))
                        dispatch(showPopup(true))
                    }}
                >
                    Add to cart
                </button>
            </div>
        </Link>
    )
}

export default ProductCard