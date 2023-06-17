import React from 'react'
import { useState } from 'react'
import characteristic from "./characteristic.css"
import iphone from "../../../public/img/iphone.png"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import star from "../../../public/img/star.svg"
import FirstReview from "../../../public/img/Review/1.jpg"
import SecondReview from "../../../public/img/Review/2.webp"
import ThirdReview from "../../../public/img/Review/3.jpg"

import nostar from "../../../public/img/nostar.svg"

const ALLCHARACTERISTIC = [
    { id: 1, tittle: "Объём памяти", description: "1ТБ", idProduct: 1 },
    { id: 2, tittle: "Объём памяти", description: "512GB", idProduct: 2 },
    { id: 3, tittle: "Диапазон в грецах", description: "30-22000", idProduct: 3 },
    { id: 4, tittle: "Диапазон в грецах", description: "60-20000", idProduct: 4 },
    { id: 5, tittle: "Кол-во часов без подзарядки", description: "12ч", idProduct: 5 },
    { id: 6, tittle: "Технология экрана", description: "ALS", idProduct: 5 },
    { id: 7, tittle: "Технология экрана", description: "TSF", idProduct: 1 },
]









export default function Characteristic({ CharactaristicProducts,id }) {
    const CharactaristicProduct = CharactaristicProducts.filter(product=>product.product_id==id.id)
    console.log(CharactaristicProduct)

    const [activeIndex, setActiveIndex] = useState(0)


    return (
        <>
            <hr className="hr-characteristic" />
            <div  className="container flex-dircetion-column">
                <div className="container-characteristic">
                    <div className="swicth-container" >
                        <div className="choose-characteristic" onClick={() => setActiveIndex(0)}>Харктеристики</div>
                        <div className="choose-review" onClick={() => setActiveIndex(1)}>Отзывы</div>
                    </div>
                    {
                        activeIndex == 0 ?
                            <div className="container-characteristic" >
                                <span data-aos="fade-in-right" className="tittle-switch">Характеристики</span>
                                {CharactaristicProduct.map(item => {
                                    return <CreateCharacteristic
                                        key={item.id}
                                        color={item.color}
                                        model={item.model}
                                        functionFastCharge={item.functionFastCharge}
                                        features={item.features}
                                        constructFeatures={item.constructFeatures}
                                        weight={item.weight}
                                        width={item.width}
                                    />
                                })}
                            </div>
                            :
                            < div className="container-choouse">
                                <span className="tittle-switch">Отзывы</span>
                                <div data-aos="zoom-in-right" className="collection-choouses">
                                    <OwlCarousel className='owl-theme'  items = "2" autoplay nav dots loop  margin={250}>
                                        
                                        <CreateChoose
                                            image={FirstReview}
                                            tittle={"Иванова Екатерина"}
                                            description={"Заказала дочери на новый год, оплатила на сайте, через 2 часа курьер уже привёз подарок. Цена очень низкая, товар пришёл в идеальном состоянии, спасибо!"}
                                            star={5}
                                        />
                                        <CreateChoose
                                            image={SecondReview}
                                            tittle={"Иванова Кристина"}
                                            description={"Купила для себя, полностью довольна качеством и скорость доставки"}
                                            star={5}
                                        />
                                        <CreateChoose
                                            image={ThirdReview}
                                            tittle={"Иванова Ольга"}
                                            description={"Ставлю 3 звезды, потомучто доставка заняла 2 недели, хотя обещали не больше недели и комплектация была без наклеек"}
                                            star={3}
                                        />
                                    </OwlCarousel>;

                                </div>
                            </div>
                    }

                </div>
            </div >
        </>
    )
}

function CreateChoose({ image, tittle, description, star }) {
    return (
        <div className="choose-border">
            <div className="choouse">
                <div className="column-image">
                    <img src={image} alt="" />
                </div>
                <div className="column-titel-and-description">
                    <span className="name-author">
                        {tittle}
                    </span>
                    <p className="description-author">
                        {description}
                    </p>
                    <div className="container-rating-review">
                        <Rating
                            key={Date.now()}
                            countRating={star}
                        />
                    </div>
                </div>

            </div>
        </div>
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


function CreateCharacteristic({ color, model, functionFastCharge, features, constructFeatures, weight, width }) {
    return (
        <div data-aos="fade-up" className="characteristic">
            <div className="container-tittle-description">
                <div className="tittle-characteristic">
                    <b>Цвет</b>
                </div>
                <div className="description-characteristic">
                    {color}
                </div>
            </div>
            <div className="container-tittle-description">

                <div className="tittle-characteristic">
                    <b>Модель</b>
                </div>
                <div className="description-characteristic">
                    {model}
                </div>
            </div>
            <div className="container-tittle-description">
                <div className="tittle-characteristic">
                    <b>Функция быстрой зарядки</b>
                </div>
                <div className="description-characteristic array-text">
                    {functionFastCharge}
                </div>
            </div>
            <div className="container-tittle-description">
                <div className="tittle-characteristic">
                    <b>Особенности</b>
                </div>
                <div className="description-characteristic">
                    {features}
                </div>
            </div>
            <div className="container-tittle-description">
                <div className="tittle-characteristic">
                    <b>Конструктивные особенности</b>
                </div>
                <div className="description-characteristic">
                    {constructFeatures}
                </div>
            </div>
            <div className="container-tittle-description">
                <div className="tittle-characteristic">
                    <b>Вес</b>
                </div>
                <div className="description-characteristic">
                    {weight}
                </div>
            </div>
            <div className="container-tittle-description">
                <div className="tittle-characteristic">
                    <b>Ширина</b>
                </div>
                <div className="description-characteristic">
                    {width}
                </div>
            </div>

        </div>
    )
}