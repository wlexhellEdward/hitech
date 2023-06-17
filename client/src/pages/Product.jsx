import DiscountContainer from "../components/DiscountContainer/DiscountContainer"
import HitsOfSell from "../components/HitsOfSell/HitsOfSell"
import { useParams } from "react-router-dom"
import product from "../css/product.css"
import star from "../../public/img/star.svg"
import nostar from "../../public/img/nostar.svg"
import basket from "../../public/img/cart.svg"
import ZoomableImage from "../components/ZoomableImage/ZoomableImage"
import like from "../../public/img/like.svg"
import Characteristic from "../components/Characteristic/Characteristic.jsx"
import { useState } from "react"


const responceFetching = await fetch('http://localhost:5252/api/characteristic/get_all')
const CharactaristicProducts = await responceFetching.json()


export default function Product({hitsProduct,handleToBasket,handleToFavorite,allProduct}) {

    const params = useParams()
    const product = allProduct.filter(product => product.id == params.id)

    console.log(product)

    const ArrayImage = [
        { src: product[0].camera },
        { src: product[0].leftImage },
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
                CharactaristicProducts={CharactaristicProducts}
            />
            <HitsOfSell hitsProduct={hitsProduct} handleToBasket={handleToBasket} handleToFavorite={handleToFavorite} />
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