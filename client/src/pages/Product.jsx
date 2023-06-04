import DiscountContainer from "../components/DiscountContainer/DiscountContainer"
import HitsOfSell from "../components/HitsOfSell/HitsOfSell"
import { useParams } from "react-router-dom"

import product from "../css/product.css"
import iphone from "../../public/img/iphone.png"
import star from "../../public/img/star.svg"
import nostar from "../../public/img/nostar.svg"
import basket from "../../public/img/cart.svg"
import font from "../../public/img/phoneFirst/font.png"
import back from "../../public/img/phoneFirst/back.png"
import camera from "../../public/img/phoneFirst/camera.png"
import left from "../../public/img/phoneFirst/left.png"
import ZoomableImage from "../components/ZoomableImage/ZoomableImage"

import like from "../../public/img/like.svg"
import Characteristic from "../components/Characteristic/Characteristic.jsx"
import { useState } from "react"

const IPHONE = [
    { id: 1, name: "IPHONE 13 MINI 256GB СИНИЙ", camera: camera, left: left, back: back, font: font, countReview: 12, rating: 2, price: 970.204, count: 3 },
    { id: 2, name: "IPHONE 13 MINI 256GB СИНИЙ", camera: camera, left: left, back: back, font: font, countReview: 12, rating: 2, price: 970.204, count: 3 },
    { id: 3, name: "IPHONE 13 MINI 256GB СИНИЙ", camera: camera, left: left, back: back, font: font, countReview: 12, rating: 2, price: 970.204, count: 3 },
    { id: 4, name: "IPHONE 13 MINI 256GB СИНИЙ", camera: camera, left: left, back: back, font: font, countReview: 12, rating: 2, price: 970.204, count: 3 },
    { id: 5, name: "IPHONE 13 MINI 256GB СИНИЙ", camera: camera, left: left, back: back, font: font, countReview: 12, rating: 2, price: 970.204, count: 3 }
]








export default function Product() {
    const params = useParams()

    const product = IPHONE.filter(product => product.id == params.id)


    const ArrayImage = [
        { src: product[0].camera },
        { src: product[0].left },
        { src: product[0].back },
        { src: product[0].font },
    ]

    const [image, setImage] = useState(ArrayImage)

    function handleSetImage(currentPosition) {
        const currentMain = image[3].src
        const currentImage = image[currentPosition].src

        const updatedImages = image.map((item, index) =>
            index === currentPosition ? { src: currentMain } :
                index === 3 ? { src: currentImage } :
                    item
        )

        setImage(updatedImages)
    }




    return (
        <>
            <div className="container mobile-product">
                <div className="product-container">
                    <span className="tittle-product">{product[0].name}</span>
                    <div className="product-card">
                        <div data-aos="zoom-in-right" className="imagine-container">
                            <div className="left-section-image">
                                <div onClick={() => handleSetImage(0)} className="border-container">
                                    <img data-aos="fade-up" src={image[0].src} alt="" />
                                </div>
                                <div onClick={() => handleSetImage(1)} className="border-container">
                                    <img data-aos="fade-up" src={image[1].src} alt="" />
                                </div>
                                <div onClick={() => handleSetImage(2)} className="border-container">
                                    <img data-aos="fade-up" src={image[2].src} alt="" />
                                </div>
                            </div>

                            <div onClick={() => handleSetImage(3)} className="right-section-big-image">
                                <ZoomableImage src={image[3].src} />
                            </div>
                        </div>
                        <div data-aos="zoom-in-left" className="description-container">
                            <div className="border-description">
                                <span className="tittle-description">{product[0].name}</span>
                                <div className="container-rating">
                                    <Rating
                                        key={Date.now()}
                                        countRating={product[0].rating}
                                    />
                                    <span>{product[0].countReview} отзывов</span>
                                </div>
                                <span className="price-product"><b>{product[0].price} $</b></span>
                                <div className="container-btn">
                                    <div className="btn-to-basket-img-and-tittle">
                                        <img src={basket} alt="" />
                                        <span>В корзину</span>
                                    </div>
                                    <div className="btn-to-favorite">
                                        <img src={like} alt="" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Characteristic
                id={params}
            />
            <HitsOfSell />
            <DiscountContainer />
        </>
    )
}



function Rating({ countRating }) {
    const imgArray = [];
    for (let i = 0; i < 5; i++) {
        if (i < countRating) {
            imgArray.push(<img className="star-ico" src={star} alt="" />);
        } else {
            imgArray.push(<img className="star-ico" src={nostar} alt="" />);
        }
    }
    return imgArray;
}