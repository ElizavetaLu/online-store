import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart } from "../../redux/actions/index";
import GoBack from "../add-components/go-back/GoBack";
import "./selectedProduct.scss"

const SelectedProduct = () => {
    const location = useLocation()

    const { category, description, image, price, rating, title } = location.state

    const dispatch = useDispatch()


    const [value, setValue] = useState(1)
    return (
        <div className="selected-product_container">
            <GoBack />
            
            <div className="selected-product">

                <div className="selected-product_data">
                    <div className="product-name">{title}</div>

                    <div className="selected-product_photo">
                        <div className="product-image-large">
                            <img src={image} alt="" />
                        </div>
                        <div className="line"></div>
                    </div>


                    <div className="selected-product_info">
                        <div className="product-category">{category}</div>
                        <div className="product-description">
                            <div className="title">Description:</div>
                            <div className="content">{description}</div>
                        </div>

                        <div className="product-price">
                            <div className="title">Price:</div>
                            <div className="content">${price}</div>
                        </div>

                        <div className="cta">
                            <input
                                type="number"
                                className="numb-input"
                                value={value}
                                onChange={e => setValue(e.target.value)}
                            />

                            <div className="button-cta">
                                <button
                                    className="btn"
                                    onClick={() => dispatch(addToCart(location.state, value, title))}
                                >Add to cart
                                </button>
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
                            <div className="star">
                                <img src="/online-store/build//images/icons/star.png" alt="" />
                            </div>
                            <div className="rate">  {rating.rate}</div>
                        </div>
                    </div>

                    <div className="data-column">
                        <div className="data-name">Country of origin:</div>
                        <div className="data-content">Denmark</div>
                    </div>

                </div>
            </div>




            <div></div>
        </div>
    )
}

export default SelectedProduct