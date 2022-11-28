import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../add-components/product-card/ProductCard";
import ImageBlock from "../add-components/image-block/ImageBlock";
import "./Main.scss"

const Main = () => {
    const test = useSelector(state => state.allData.data)

    return (
        <div className="main-container">

            <ImageBlock />

            <div className="block-section">
                <div className="column">
                    <div className="block-large">
                        <img src="/online-store/build//images/pexels-jonaorle-3828245.jpg" alt="" />
                    </div>
                    <div className="block-sm">
                        <img src="/online-store/build//images/pexels-say-straight-2735981.jpg" alt="" />
                    </div>
                </div>

                <div className="column reverse">
                    <div className="block-large">
                        <img src="/online-store/build//images/thom-bradley-mwa_nzFpnJw-unsplash.jpg" alt="" />
                    </div>
                    <div className="block-sm text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi vitae reiciendis veniam soluta.
                    </div>
                </div>

                <div className="column">
                    <div className="block-large">
                        <img src="/online-store/build//images/tyler-nix-Zhh3WM2ko3s-unsplash.jpg" alt="" />
                    </div>
                    <div className="block-sm">
                        <img src="/online-store/build//images/pexels-say-straight-2735970.jpg" alt="" />
                    </div>
                </div>
            </div>

            <div className="new-arrivals">


                <div className="row-title">New arrivals</div>
                <div className="all-cards">
                    {test &&
                        test.map(item => (<ProductCard key={item.id} {...item} />))}

                </div>
            </div>

        </div>
    )
}

export default Main