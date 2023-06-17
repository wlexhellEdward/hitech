import Slider from "../Slider/Slider";
import basket from "../../css/basket.css"
import { Link } from "react-router-dom"
import ContainerPayments from "../../components/ContainerPayments/ContainerPayments";
import DiscountContainer from "../../components/DiscountContainer/DiscountContainer";
import { useState } from "react";
import CustomAlert from "../../GUI/Alert/CustomAlert";


const user_id = 1;

CustomAlert("succes", "Добро пожаловать!")

export default function ProductsBasket({ productsBasket, HandleMinusCountProduct, HandlePlusCountProduct, HandleDeleteProduct, totalPrice }) {


    return (
        <>
            <div className="container">

                <div data-aos="fade-down" className="basket">
                    <span className="basket-tittle">КОРЗИНА</span>
                    <div className="nav-basket">
                        <Link to="/catalog">
                            <div className="back-to-buy">
                                Назад к покупкам
                            </div>
                        </Link>
                        <div className="stages-of-purchase">
                            <div className="stage ">
                                <span className="background-blue">1</span>
                                <p>Корзина</p>
                                <hr />
                            </div>
                            <div className="stage margin-right-left">
                                <hr />
                                <span>2</span>
                                <p>Оформление заказа</p>
                                <hr />
                            </div>
                            <div className="stage">
                                <hr />
                                <span>3</span>
                                <p>Подтверждение</p>
                            </div>
                        </div>
                    </div>
                    <span className="product-in-basket">ТОВАРЫ В КОРЗИНЕ</span>
                    <div className="main-section-basket flex-direction-mobile">
                        <div data-aos="fade-up-right" className="collection-of-basket-item">

                            {
                                productsBasket.length != 0 ?
                                    productsBasket.map(product => {
                                        return <BasketItem
                                            key={product.id}
                                            image={product.font}
                                            count={product.count}
                                            name={product.name}
                                            price={product.price}
                                            onClickDelete={() => HandleDeleteProduct(product.id)}
                                            onClickMinus={() => HandleMinusCountProduct(product.id)}
                                            onClickPlus={() => HandlePlusCountProduct(product.id)}
                                        />
                                    })
                                    :
                                    <div className="loader-container">
                                        <h3 className="loader-tittle">У вас ещё нету товаров в корзине</h3>
                                        <span class="loader"></span>
                                    </div>
                            }
                        </div>
                        <ContainerPayments
                            count={productsBasket.length}
                            totalPrice={
                                totalPrice
                            }
                        />
                    </div>
                </div>
            </div>
            <DiscountContainer />
        </>
    )
}

function BasketItem({ image, count, name, price, onClickMinus, onClickPlus, onClickDelete }) {

    return (
        <div className="item-basket">
            <div className="img-item-basket">
                <img src={image} alt="" />
            </div>
            <div className="description">
                <span className="tittle-item">{name}</span>
                <span><b>{price}</b> / шт.</span>
            </div>
            <div className="quantity-container">
                <div className="quantity-item">
                    <div className="quantity-minus" onClick={onClickMinus} >
                        -
                    </div>
                    <div className="quantity-count">
                        {count}
                    </div>
                    <div className="quantity-plus" onClick={onClickPlus}>
                        +
                    </div>
                    <div className="delete-item" onClick={onClickDelete}>
                        X
                    </div>
                </div>
            </div>
        </div>
    )
}
