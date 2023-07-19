import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setSelectedRateProducts, setActiveRate } from "../../../redux/actions/index";
import "./rateList.scss";


const RateList = () => {

    const { name } = useParams();
    const dispatch = useDispatch();

    const allCategories = useSelector(state => state.allData);
    const currentCategory = Object.entries(allCategories).find(elem => elem[0].slice(0, 3) === name.slice(0, 3));

    const createArrayWithStars = length => [...Array(length)].fill('/images/icons/star.png', 0);

    const handleProducts = productsArr => {
        dispatch(setSelectedRateProducts(productsArr));
        dispatch(setActiveRate(true));
    }


    return (
        <div className="rate-list">

            {
                Array.from({ length: 5 }, (_, i) => i + 1).map(num => {

                    const rating = currentCategory ? currentCategory[1].filter(item => Math.floor(item.rating.rate) === num) : [];

                    return (
                        <div
                            key={num}
                            className="stars-row"
                            onClick={() => handleProducts(rating)}
                        >
                            <div className="star-icons">{createArrayWithStars(num).map((e, i) => <img className="star-img" src={e} key={i} alt="" />)} </div>
                            <div className="product-amount" >({rating.length})</div>
                        </div>

                    )
                })
            }

            <div className="showAll" onClick={() => dispatch(setActiveRate(false))} >Show all</div>
        </div>
    )
}

export default RateList