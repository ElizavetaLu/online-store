import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showPopup } from "../../../redux/actions";
import "./popup.scss";


const Popup = () => {

    const dispatch = useDispatch()
    const { isActive, message } = useSelector(state => state.popup)

    useEffect(() => {
        if (isActive) {
            setTimeout(() => {
                dispatch(showPopup(false))
            }, 4000);
        }
    }, [isActive])

    return (
        <div className={`popup ${isActive && 'active'}`}>

            <img className="icon" src="/online-store/build//images/icons/ok.png" alt="" />

            <div className="pupup-text">{message}</div>

            <button className="close" onClick={() => dispatch(showPopup(false))}>
                <img className="close-img" src="/online-store/build//images/icons/plus.png" alt="" />
            </button>
        </div>
    )
}

export default Popup