import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanUpCart, setPopupText, showPopup } from "../../redux/actions/index"
import DummyText from "../add-components/dummy-text/DummyText";
import CartItem from "../add-components/cart-item/CartItem";
import GoBack from "../add-components/go-back/GoBack";
import "./shoppingCart.scss";



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


    return (
        <div className="cart-container">

            <GoBack />

            <div className="cart">
                <div className="cart-items-data">
                    <div className="title-row">
                        <div className="text-row">Shopping Cart</div>
                        <div className="items-amount">{cartItems.length} Items</div>
                    </div>

                    <div className="all-items-list">
                        {
                            cartItems.length > 0
                                ? cartItems.map(item => <CartItem key={item.id} {...item} />)
                                : <DummyText text="Cart is empty..." />
                        }
                    </div>
                </div>


                <div className="tottal-info">
                    <div>
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
                        </div>
                    </div>

                    <div className="checkout-cta">
                        <div className="tottal-price">
                            <div className="text">Total price</div>
                            <div className="numb">${totalPrice}</div>
                        </div>
                        <button
                            className="button"
                            onClick={() => {
                                if (cartItems.length > 0) {
                                    dispatch(setPopupText('Successful'))
                                    dispatch(showPopup(true))
                                };
                                dispatch(cleanUpCart());
                                setCode('');
                            }}
                        >checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart