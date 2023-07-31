import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductCard from "../add-components/product-card/ProductCard";
import GoBack from "../add-components/go-back/GoBack";
import RateList from "./rate-list/RateList";
import "./selectedCategory.scss";
import DummyText from "../add-components/dummy-text/DummyText";


const SelectedCategory = () => {

    const { name } = useParams();

    const allCategories = useSelector(state => state.allData);
    const selectedRateIsActive = useSelector(state => state.allData.isActiveSelectedRate);
    const currentCategory = Object.entries(allCategories).find(elem => elem[0].slice(0, 3) === name.slice(0, 3));


    const selectedRateProducts = useSelector(state => state.allData.selectedRate);


    const [isFilterActive, setIsFilterActive] = useState(false)

    return (
        <div className="category-container">
            <div className="row">
                <GoBack />

                {/* mobile filter */}
                <button className="filter-btn" onClick={() => setIsFilterActive(!isFilterActive)}>
                    <img className="filter-icon" src="/online-store/build//images/icons/filter.png" alt="" />
                </button>
 
                    <div className={`filters ${isFilterActive && 'active'}`}>

                        <button className="close-container" onClick={() => setIsFilterActive(!isFilterActive)}>
                            <img className="close" src="/online-store/build//images/icons/plus.png" alt="" />
                        </button>

                        <div className="filter-block">
                            <div className="filter-name">product search</div>
                            <div className="search-product">
                                <input className="search-input" type="text" placeholder="Search..." />
                                <button className="btn">Search</button>
                            </div>
                        </div>
                        <div className="filter-block">
                            <div className="filter-name">filter by price</div>
                            <div className="filter-settings">
                                <div className="scale">
                                    <div className="reg">
                                        <div className="scale-circle left"></div>
                                        <div className="scale-line"></div>
                                        <div className="scale-circle right"></div>
                                    </div>

                                    <div className="scale-price">
                                        <div className="num">$9.99</div>
                                        <div className="num">$700</div>
                                    </div>
                                </div>
                                <div className="price-filter">
                                    <button className="btn">Filter</button>
                                    <div className="filter-text">From $9.99 - $700</div>
                                </div>
                            </div>
                        </div>
                        <div className="filter-block">
                            <div className="filter-name">avarage rating</div>
                            {
                                currentCategory && <RateList />
                            }
                        </div>
                    </div> 
            </div>

            <div className="category-content">
                <div className="filters">
                    <div className="filter-block">
                        <div className="filter-name">product search</div>
                        <div className="search-product">
                            <input className="search-input" type="text" placeholder="Search..." />
                            <button className="btn">Search</button>
                        </div>
                    </div>
                    <div className="filter-block">
                        <div className="filter-name">filter by price</div>
                        <div className="filter-settings">
                            <div className="scale">
                                <div className="reg">
                                    <div className="scale-circle left"></div>
                                    <div className="scale-line"></div>
                                    <div className="scale-circle right"></div>
                                </div>

                                <div className="scale-price">
                                    <div className="num">$9.99</div>
                                    <div className="num">$700</div>
                                </div>
                            </div>
                            <div className="price-filter">
                                <button className="btn">Filter</button>
                                <div className="filter-text">From $9.99 - $700</div>
                            </div>
                        </div>
                    </div>
                    <div className="filter-block">
                        <div className="filter-name">avarage rating</div>
                        {
                            currentCategory && <RateList />
                        }
                    </div>
                </div>
                <div className="products-list">

                    {
                        selectedRateIsActive
                            ? selectedRateProducts.map(item => <ProductCard key={item.id} {...item} />)
                            : currentCategory[1].length > 1 && currentCategory[1].map(item => <ProductCard key={item.id} {...item} />)
                    }

                    {
                        (selectedRateProducts.length === 0 || currentCategory[1].length === 0)
                        && <DummyText text="Products list is empty..." />
                    }

                </div>
            </div>

        </div>
    )
}

export default SelectedCategory