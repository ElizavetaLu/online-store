import React, { useRef } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../add-components/product-card/ProductCard";
import ImageBlock from "../add-components/image-block/ImageBlock";
import "./Main.scss";


const Main = () => {

    const cardsList = useSelector(state => state.allData.data)

    const container = useRef(null)

    const sideScroll = (direction) => {

        const step = 10;
        let scrollAmount = 0;

        const slideTimer = setInterval(() => {

            if (direction === 'left') {
                container.current.scrollLeft -= step;
            } else {
                container.current.scrollLeft += step;
            }

            scrollAmount += step;

            if (scrollAmount >= 170) {
                window.clearInterval(slideTimer);
            }

        }, 2);
    }

    return (
        <>
            <ImageBlock />

            <div className="block-section">
                <div className="column">
                    <div className="block-large"  >
                        <img src="/images/pexels-jonaorle-3828245.jpg" alt="" loading="lazy" />
                    </div>
                    <div className="block-sm">
                        <img src="/images/pexels-say-straight-2735981.jpg" alt="" loading="lazy" />
                    </div>
                </div>

                <div className="column reverse">
                    <div className="block-large">
                        <img src="/images/thom-bradley-mwa_nzFpnJw-unsplash.jpg" alt="" loading="lazy" />
                    </div>
                    <div className="block-sm text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi vitae reiciendis veniam soluta.
                    </div>
                </div>

                <div className="column">
                    <div className="block-large">
                        <img src="/images/tyler-nix-Zhh3WM2ko3s-unsplash.jpg" alt="" loading="lazy" />
                    </div>
                    <div className="block-sm">
                        <img src="/images/pexels-say-straight-2735970.jpg" alt="" loading="lazy" />
                    </div>
                </div>
            </div>

            <div className="new-arrivals">
                <div className="row-title">New arrivals</div>

                <div className="products-list">
                    <button
                        className="vector-btn"
                        onClick={() => sideScroll('left')}
                    >
                        <img src="/images/icons/vector.png" alt="" className="vector reverse" />
                    </button>
                    <div className="all-cards" ref={container}>
                        {
                            cardsList &&
                            cardsList.map(item => <ProductCard key={item.id} {...item} />)
                        }
                        <div></div>
                    </div>

                    <button
                        className="vector-btn"
                        onClick={() => sideScroll('right')}
                    >
                        <img src="/images/icons/vector.png" alt="" className="vector" />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Main