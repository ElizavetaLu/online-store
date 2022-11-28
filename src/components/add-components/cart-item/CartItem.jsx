import React from "react";
import "./cartItem.scss"
import {
    removeFromCart,
    decrementInCart,
    incrementInCart,
    onHandChangeInCart
} from "../../../redux/actions/index"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartItem = (props) => {
    const { image, price, title, category } = props

    const cart = useSelector(state => state.cart)
    const qty = cart.find(item => item.title === title).qty

    const dispatch = useDispatch()



    return (

        <div className="cart-item">
            <div className="product-cart-img">
                <img src={image} alt="" />
            </div>

            <div className="main-item-data">
                <div className="item-name">
                    <div className="item-category">{category}</div>
                    <Link to={`/online-store/build/product/${title.slice(0, 15)}`} state={props}>
                        <div className="item-title">{title}</div>
                    </Link>
                </div>

                <div className="counter">
                    <div className="count-btn" onClick={() => dispatch(decrementInCart(title))
                    }>-</div>
                    <input
                        type="number"
                        className="counter-input"
                        value={qty}
                        onChange={e => dispatch(onHandChangeInCart(e.target.value, title))}
                    />
                    <div className="count-btn" onClick={() => dispatch(incrementInCart(title))}>+</div>
                </div>

                <div className="item-price">${Number((qty * price).toFixed(2))}</div>

                <div className="delete-item" onClick={() => dispatch(removeFromCart(title))}>+</div>
            </div>

        </div>

    )
}

export default CartItem                         
