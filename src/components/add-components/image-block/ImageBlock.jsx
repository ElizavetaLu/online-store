import React from "react";
import { useSelector } from "react-redux";
import Category from "../category/Category";
import "./imageBlock.scss"

const categoryImg = [
    '/images/julian-hochgesang-GV8ORHon4v4-unsplash.jpg',
    '/images/diamond-g967a34c2d_1280.jpg',
    '/images/man-g328695e3b_1920.jpg',
    '/images/woman-g4d452a983_1920.jpg',
]

const ImageBlock = () => {

    const categories = useSelector(state => state.allData.categories)

    return (
        <div className="image-section" style={{ backgroundImage: 'url("/images/architecture-g89febe089_1920.jpg")' }}>
            <div className="image-container">
                <div className="background"></div>
            </div>

            <div className="categories">
                {
                    categories &&
                    categories.map((item, i) => <Category key={item} name={item} img={categoryImg[i]} />)
                }
            </div>
        </div>
    )
}

export default ImageBlock