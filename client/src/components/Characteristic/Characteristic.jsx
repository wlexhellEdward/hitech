import React from 'react'
import { useState } from 'react'
import characteristic from "./characteristic.css"
import iphone from "../../../public/img/iphone.png"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import star from "../../../public/img/star.svg"
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






const CHARACTERISTICSPRODUCT = [
    { id: 1, idProduct: 1, model: "Телефон", functionFastCharge: "15 минут до полной зарядки", features: "Нету", constructFeatures: "Влагозащита", weight: 15, width: 15.6, color: "Белый" },
    { id: 2, idProduct: 2, model: "Телефон", functionFastCharge: "Отсутствует", features: "Нету", constructFeatures: "Влагозащита", weight: 24, width: 15.9, color: "Синий" },
    { id: 3, idProduct: 3, model: "Наушники", functionFastCharge: "15 минут до полной зарядки", features: "Нету", constructFeatures: "Влагозащита", weight: 23, width: 16.1, color: "Белый" },
    { id: 4, idProduct: 4, model: "Умные часы", functionFastCharge: "Отсутствует", features: "Нету", constructFeatures: "Влагозащита", weight: 21, width: 14.9, color: "Красный" },
    { id: 5, idProduct: 5, model: "Телефон", functionFastCharge: "Отсутствует", features: "Нету", constructFeatures: "Влагозащита", weight: 20, width: 15.2, color: "Красный" },
]


export default function Characteristic({ id }) {
    const CharactaristicProduct = CHARACTERISTICSPRODUCT.filter(product => product.idProduct == id.id)
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
                                            image={iphone}
                                            tittle={"Иванова Екатерина"}
                                            description={"Заказала дочери на новый год планшет, оплатила на сайте, через 2 часа курьер уже привёз подарок. Цена очень низкая, товар пришёл в идеальном состоянии, спасибо!"}
                                            star={5}
                                        />
                                        <CreateChoose
                                            image={iphone}
                                            tittle={"Иванова Кристина"}
                                            description={"Заказала дочери на новый год планшет, оплатила на сайте, через 2 часа курьер уже привёз подарок. Цена очень низкая, товар пришёл в идеальном состоянии, спасибо!"}
                                            star={5}
                                        />
                                        <CreateChoose
                                            image={iphone}
                                            tittle={"Иванова Ольга"}
                                            description={"Заказала дочери на новый год планшет, оплатила на сайте, через 2 часа курьер уже привёз подарок. Цена очень низкая, товар пришёл в идеальном состоянии, спасибо!"}
                                            star={5}
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