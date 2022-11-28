import React from "react";
import "./selectedCategory.scss";
import ProductCard from "../add-components/product-card/ProductCard";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import GoBack from "../add-components/go-back/GoBack";
import RateList from "./rate-list/RateList";

const SelectedCategory = () => {

    const { name } = useParams();

    const allCategories = useSelector(state => state.allData);
    const selectedRateIsActive = useSelector(state => state.allData.isActiveSelectedRate);
    const currentCategory = Object.entries(allCategories).find(elem => elem[0].slice(0, 3) === name.slice(0, 3));


    const selectedRateProducts = useSelector(state => state.allData.selectedRate);


    return (
        <div className="category-container">
            <GoBack />

            <div className="category-content">
                <div className="filters">
                    <div className="filter-block">
                        <div className="filter-name">product search</div>
                        <div className="search-product">
                            <input type="text" placeholder="Search product..." />
                            <button>Search</button>
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
                                <button>Filter</button>
                                <div className="filter-text">From $9.99 - $700</div>
                            </div>
                        </div>
                    </div>
                    <div className="filter-block">
                        <div className="filter-name">avarage rating</div>
                        {currentCategory &&
                            <RateList />
                        }
                    </div>
                </div>
                <div className="category-content">

                    {
                        selectedRateIsActive ? selectedRateProducts.map(item => (<ProductCard key={item.id} {...item} />))
                            : currentCategory[1].length > 1 && currentCategory[1].map(item => (<ProductCard key={item.id} {...item} />))
                    }

                </div>
            </div>

        </div>
    )
}

export default SelectedCategory