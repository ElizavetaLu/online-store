import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart, setPopupText, showPopup } from "../../redux/actions/index";
import GoBack from "../add-components/go-back/GoBack";
import "./selectedProduct.scss";


const SelectedProduct = () => {

    const location = useLocation()
    const dispatch = useDispatch()

    const { category, description, image, price, rating, title } = location.state

    const [value, setValue] = useState(1)

    const addProductToCart = () => {
        if (value > rating.count) return;

        dispatch(setPopupText('Product was added to cart'));

        dispatch(addToCart(location.state, value, title));
        dispatch(showPopup(true))
    }

    return (
        <div className="selected-product-container">
            <GoBack />

            <div className="selected-product">

                <div className="selected-product_data">
                    <div className="product-name">{title}</div>

                    <div className="selected-product_photo">
                        <div className="product-image-large">
                            <img className="product-img" src={image} alt="" />
                        </div>
                        <div className="line"></div>
                    </div>

                    <div className="selected-product_info">
                        <div className="product-category">{category}</div>
                        <div className="product-description">
                            <div className="title">Description:</div>
                            <p className="content">{description}</p>
                        </div>

                        <div className="price-amount-block">
                            <div className="product-price">
                                <div className="title">Price:</div>
                                <div className="content">${price * (value || 0)}</div>
                            </div>
                            <div className="cta">
                                <div className="select-amount">
                                    <button className="amount-control" onClick={() => {
                                        if (value === 1) return;
                                        setValue(prev => prev - 1);
                                    }}>
                                        <img className="amount-img" src="/images/icons/minus.png" alt="" />
                                    </button>
                                    <input
                                        type="number"
                                        className="numb-input"
                                        min={1}
                                        value={value}
                                        onChange={e => setValue(parseInt(e.target.value))}
                                    />
                                    <button className="amount-control" onClick={() => {
                                        if (isNaN(value)) return setValue(1);
                                        if (value >= rating.count) return setValue(rating.count);
                                        setValue(prev => prev + 1);
                                    }}>
                                        <img className="amount-img" src="/images/icons/plus.png" alt="" />
                                    </button>
                                </div>
                                <button className="btn" onClick={addProductToCart}>Add to cart </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="extra-data">
                    <div className="data-column">
                        <div className="data-name">Amount:</div>
                        <div className="data-content">{rating.count}</div>
                    </div>
                    <div className="data-column">
                        <div className="data-name">Rate:</div>
                        <div className="data-content">
                            <img className="star" src="/images/icons/star.png" alt="" />
                            <div className="rate">{rating.rate}</div>
                        </div>
                    </div>

                    <div className="data-column">
                        <div className="data-name">Country of origin:</div>
                        <div className="data-content">Denmark</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SelectedProduct