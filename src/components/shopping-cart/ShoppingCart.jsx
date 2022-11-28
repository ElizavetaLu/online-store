import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../add-components/cart-item/CartItem";
import "./shoppingCart.scss"
import { cleanUpCart } from "../../redux/actions/index"
import GoBack from "../add-components/go-back/GoBack";

const deliveryPrice = 5;

const ShoppingCart = () => {

    const dispatch = useDispatch()

    const cartItems = useSelector(state => state.cart)

    const [delivery, setDelivery] = useState(true)
    const [code, setCode] = useState('')


    const totals = cartItems.length > 0 ? cartItems.map(item => {
        return Number((item.qty * item.price).toFixed(2))
    }) : []


    const allItemsPrice = Number((totals.reduce((prev, cur) => prev + cur, 0)).toFixed(2))
    const totalPrice = Number((totals.reduce((prev, cur) => prev + cur, 0)).toFixed(2)) + (delivery ? deliveryPrice : 0)


    const [popUp, setPopUp] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setPopUp(false)
        }, 5000);
    }, [popUp])

    return (
        <div className="cart-container">

            <GoBack />

            <div className="popUp" style={{ opacity: popUp ? 1 : 0 }}>
                <div className="icon">
                    <img src="/online-store/build//images/icons/ok.png" alt="" />
                </div>
                <div className="pupUp-text">Successful</div>
                <div className="close" onClick={() => setPopUp(false)}>+</div>
            </div>

            <div className="cart">
                <div className="cart-items-data">
                    <div className="title-row">
                        <div className="text-row">Shopping Cart</div>
                        <div className="items-amount">{cartItems.length} Items</div>
                    </div>

                    <div className="all-items-list">
                        {cartItems.length > 0 &&
                            cartItems.map(item => (<CartItem
                                key={item.id}
                                {...item}
                            />))
                        }
                    </div>


                    <div className="home-page_nav">
                        <div className="nav-icon">
                            <img src="/online-store/build//images/icons/d-arrow.png" alt="" />
                        </div>
                        <Link to={'/online-store/build/'}>
                            <div className="nav-text">Go to home page</div>
                        </Link>
                    </div>
                </div>


                <div className="tottal-info">
                    <div className="summary-text">Summary</div>

                    <div className="extra-set">
                        <div className="tottal-row">
                            <div className="text">Items {cartItems.length}</div>
                            <div className="numb">${allItemsPrice}</div>
                        </div>

                        <div className="form-group">
                            <div className="form-name">shopping</div>
                            <select className="form-control" onChange={() => setDelivery(!delivery)} >
                                <option value="delivery">Delivery ($5.00)</option>
                                <option value="pickUp">Pick Up</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <div className="form-name">give code</div>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your code..."
                                value={code}
                                onChange={e => setCode(e.target.value)}
                            />
                        </div>


                        <div className="tottal-row last">
                            <div className="text">Total price</div>
                            <div className="numb">${totalPrice}</div>
                        </div>
                    </div>

                    <div className="button" onClick={() => {
                        dispatch(cleanUpCart())
                        setCode('')
                        if (cartItems.length > 0) setPopUp(!popUp)
                    }}>
                        <button className="btn">checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart