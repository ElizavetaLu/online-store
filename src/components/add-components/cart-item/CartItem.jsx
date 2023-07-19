import React from "react";
import {
    removeFromCart,
    decrementInCart,
    incrementInCart,
    onHandChangeInCart
} from "../../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./cartItem.scss";


const CartItem = (props) => {
    const { image, price, title, category } = props

    const cart = useSelector(state => state.cart)
    const qty = cart.find(item => item.title === title).qty

    const dispatch = useDispatch()



    return (

        <div className="cart-item">
            <div className="product-cart-img">
                <img className="product-img" src={image} alt="" />
            </div>

            <div className="main-item-data">
                <div className="item-name">
                    <div className="item-category">{category}</div>
                    <Link className="item-title-link" to={`/product/${title.slice(0, 15)}`} state={props}>
                        <p className="item-title">{title}</p>
                    </Link>
                </div>

                <div className="counter">
                    <div className="count-amount">
                        <button className="count-btn" onClick={() => dispatch(decrementInCart(title))
                        }>
                            <img className="count-img" src="/images/icons/minus.png" alt="" />
                        </button>
                        <input
                            type="number"
                            className="counter-input"
                            value={qty}
                            onChange={e => dispatch(onHandChangeInCart(e.target.value, title))}
                        />
                        <button className="count-btn" onClick={() => dispatch(incrementInCart(title))}>
                            <img className="count-img" src="/images/icons/plus.png" alt="" />
                        </button>
                    </div>


                    <div className="item-price">${Number((qty * price).toFixed(2))}</div>
                </div>
            </div>

            <button className="delete-item" onClick={() => dispatch(removeFromCart(title))}>
                <img className="delete-img" src="/images/icons/plus.png" alt="" />
            </button>
        </div>

    )
}

export default CartItem                         
