import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CategoryLink from "../add-components/category-link/CategoryLink";
import "./Header.scss";


const Header = () => {

    const [active, setActive] = useState(false)

    const categories = useSelector(state => state.allData.categories)
    const { city, country } = useSelector(state => state.userLocation)

    const cart = useSelector(state => state.cart)

    const [isMenuHidden, setIsMenuHidden] = useState(true)

    return (
        <div className="header">

            <div className={`header-mobile ${isMenuHidden && 'hidden'}`}>

                <button className="close-container" onClick={() => setIsMenuHidden(!isMenuHidden)}>
                    <img className="close" src="/online-store/build//images/icons/plus.png" alt="" />
                </button>

                <div className="navigation-mobile">
                    <div className="nav-item-mobile">
                        <div className="nav-item-name-mobile" onClick={() => setActive(!active)}>
                            <span>Shop</span>
                            <img className={`vector ${active && 'active'}`} src="/online-store/build//images/icons/vector.png" alt="" />
                        </div>
                        {
                            active &&
                            <div className="categories-nav-mobile" onClick={() => {
                                setIsMenuHidden(!isMenuHidden);
                                setActive(!active);
                            }}>
                                {
                                    categories &&
                                    categories.map(item => <CategoryLink key={item} name={item} />)
                                }
                            </div>
                        }
                    </div>
                    <div className="nav-item-mobile">About</div>
                    <div className="nav-item-mobile">Contact</div>
                    <div className="nav-item-mobile">Blog</div>
                </div>
            </div>


            <div className="header-main">

                <div className="location-container">
                    <img className="location-icon" src="/online-store/build//images/icons/navigation.png" alt="" />

                    {
                        city &&
                        <div className="location-data">{city}, {country}</div>
                    }
                </div>

                <div className="logo-nav">
                    <Link className="logo-link" to="/online-store/build">
                        <img className="logo" src="/online-store/build//images/icons/text-1669408186912.png" alt="" />
                    </Link>

                    <div className="header-navigation">
                        <div className="nav-item">
                            <div className="nav-item-name" onClick={() => setActive(!active)}>Shop</div>
                            {
                                active &&
                                <div className="categories-nav" onMouseLeave={() => setActive(!active)}>
                                    {
                                        categories &&
                                        categories.map(item => <CategoryLink key={item} name={item} />)
                                    }
                                </div>
                            }
                        </div>
                        <div className="nav-item">About</div>
                        <div className="nav-item">Contact</div>
                        <div className="nav-item">Blog</div>
                    </div>
                </div>


                <div className="header-items">
                    <div className="item">
                        <div className="wrap">
                            <form action="" onSubmit={e => e.preventDefault()}>
                                <input id="search" name="search" type="text" placeholder="What're you looking for?" />
                                <input id="search_submit" value="Rechercher" type="submit" />
                            </form>
                        </div>
                    </div>
                    <div className="item">
                        <img src="/online-store/build//images/icons/user.png" alt="" className="item-icon" />
                    </div>
                    <Link to="online-store/build/shopping-cart">
                        <div className="item">
                            {
                                cart.length > 0 && <div className="circle"></div>
                            }
                            <img src="/online-store/build//images/icons/cart.png" alt="" className="item-icon" />
                        </div>
                    </Link>
                </div>

                <img className="menu-mobile" onClick={() => setIsMenuHidden(!isMenuHidden)} src="/online-store/build//images/icons/menu.png" alt="" />
            </div >
        </div >
    )
}

export default Header