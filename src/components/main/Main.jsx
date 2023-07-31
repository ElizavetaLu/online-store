import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../add-components/product-card/ProductCard";
import ImageBlock from "../add-components/image-block/ImageBlock";
import "./Main.scss";


const Main = () => {

    const cardsList = useSelector(state => state.allData.data)

    const container = useRef(null)
    const [isDisabled, setIsDisabled] = useState(false)

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

            if (scrollAmount >= 600) {
                window.clearInterval(slideTimer);
            }

            if (container.current.scrollLeft > 200) {
                setIsDisabled(true)
            } else {
                setIsDisabled(false)
            }
        }, 2);
    }

    return (
        <>
            <ImageBlock />

            <div className="block-section">
                <div className="column">
                    <div className="block-large"  >
                        <img src="/online-store/build//images/pexels-jonaorle-3828245.jpg" alt="" loading="lazy" />
                    </div>
                    <div className="block-sm">
                        <img src="/online-store/build//images/pexels-say-straight-2735981.jpg" alt="" loading="lazy" />
                    </div>
                </div>

                <div className="column reverse">
                    <div className="block-large">
                        <img src="/online-store/build//images/thom-bradley-mwa_nzFpnJw-unsplash.jpg" alt="" loading="lazy" />
                    </div>
                    <div className="block-sm text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi vitae reiciendis veniam soluta.
                    </div>
                </div>

                <div className="column">
                    <div className="block-large">
                        <img src="/online-store/build//images/tyler-nix-Zhh3WM2ko3s-unsplash.jpg" alt="" loading="lazy" />
                    </div>
                    <div className="block-sm">
                        <img src="/online-store/build//images/pexels-say-straight-2735970.jpg" alt="" loading="lazy" />
                    </div>
                </div>
            </div>

            <div className="new-arrivals">
                <div className="row-title">New arrivals</div>

                <div className="products-list">
                    <button
                        className={`vector-btn  ${isDisabled || 'disabled-left'}`}
                        onClick={() => sideScroll('left')}
                    >
                        <img src="/online-store/build//images/icons/vector.png" alt="" className="vector reverse" />
                    </button>
                    <div className="all-cards" ref={container}>
                        {
                            cardsList &&
                            cardsList.map(item => <ProductCard key={item.id} {...item} />)
                        }
                    </div>

                    <button
                        className={`vector-btn  ${!isDisabled || 'disabled-right'}`}
                        onClick={() => sideScroll('right')}
                    >
                        <img src="/online-store/build//images/icons/vector.png" alt="" className="vector" />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Main