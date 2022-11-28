import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.scss"
import CategoryLink from "../add-components/category-link/CategoryLink";

const Header = () => {

    const [active, setActive] = useState(false)

    const categories = useSelector(state => state.allData.categories)
    const { city, country, currency } = useSelector(state => state.userLocation)

    const cart = useSelector(state => state.cart)

    return (
        <div className="header">
            <div className="header-main">

                <div className="location-container">
                    <div className="location-icon">
                        <img src="/online-store/build//images/icons/navigation.png" alt="" />
                    </div>
                    {city &&
                        <div className="location-data">{city}, {country} ({currency})</div>
                    }
                </div>

                <div className="logo-nav">
                    <Link to={'/online-store/build/'}>
                        <div className="logo">
                            <img src="/online-store/build//images/icons/text-1669408186912.png" alt="" />
                        </div>
                    </Link>

                    <div className="header-navigation">
                        <div className="nav-item">
                            <div className="nav-item-name" onClick={() => setActive(!active)}>Shop</div>
                            {active &&
                                <div className="categories-nav" onMouseLeave={() => setActive(!active)}>
                                    {categories &&
                                        categories.map(item => (<CategoryLink key={item} name={item} />))}
                                </div>}
                        </div>
                        <div className="nav-item">About</div>
                        <div className="nav-item">Contact</div>
                        <div className="nav-item">Blog</div>
                    </div>
                </div>


                <div className="headet-items">
                    <div className="item">
                        <div className="wrap">
                            <form action="" onSubmit={e => e.preventDefault()}>
                                <input id="search" name="search" type="text" placeholder="What're you looking for ?" />
                                <input id="search_submit" value="Rechercher" type="submit" />
                            </form>
                        </div>
                    </div>
                    <div className="item">
                        <img src="/online-store/build//images/icons/user.png" alt="" className="item-icon user" />
                    </div>
                    <Link to={'/online-store/build/shopping-cart'}>
                        <div className="item">
                            {cart.length > 0 &&
                                < div className="circle"></div>}
                            <img src="/online-store/build//images/icons/cart.png" alt="" className="item-icon cart" />
                        </div>
                    </Link>
                </div>
            </div >



        </div >
    )
}

export default Header