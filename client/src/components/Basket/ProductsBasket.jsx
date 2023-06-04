import Slider from "../Slider/Slider";
import basket from "../../css/basket.css"
import { Link } from "react-router-dom"
import ContainerPayments from "../../components/ContainerPayments/ContainerPayments";
import DiscountContainer from "../../components/DiscountContainer/DiscountContainer";
import { useState } from "react";
import CustomAlert from "../../GUI/Alert/CustomAlert";



const ArrayOfItem = [
    { id: "1", name: "Apple AirPods Pro", price: 790, count: 1 },
    { id: "2", name: "Apple AirPods Pro", price: 790, count: 1 },
    { id: "3", name: "Apple AirPods Pro", price: 790, count: 1 },
    { id: "4", name: "Apple AirPods Pro", price: 790, count: 1 },
    { id: "5", name: "Apple AirPods Pro", price: 790, count: 1 }
]


CustomAlert("succes","Добро пожаловать!")

export default function ProductsBasket() {
    const [products, setProducts] = useState(ArrayOfItem);
    const totalPrice = products.reduce((totalPrice, product) =>
        totalPrice + product.price * product.count
    , 0)

    
    function handlePlusCountProduct(selectedID) {
        setProducts(
            products.map(product => {
                if (product.id != selectedID || product.count > 20) return product
                return {
                    ...product, count: product.count + 1
                }
            })
        )
    }

    function handleMinusCountProduct(selectedID) {
        setProducts(
            products.map(product => {
                if (product.id != selectedID || product.count < 2) return product
                return {
                    ...product, count: product.count - 1
                }
            })
        )
    }

    function handleDeleteProduct(selectedID) {
        setProducts(
            products.filter(product => product.id != selectedID)
        )
    }


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
                    <div  className="main-section-basket flex-direction-mobile">
                        <div data-aos="fade-up-right" className="collection-of-basket-item">
                            
                            {products.map(product => {
                                return <BasketItem
                                    key={product.id}
                                    count={product.count}
                                    name={product.name}
                                    price={product.price}
                                    onClickDelete={() => handleDeleteProduct(product.id)}
                                    onClickMinus={() => handleMinusCountProduct(product.id)}
                                    onClickPlus={() => handlePlusCountProduct(product.id)}
                                />
                            })}

                        </div>
                        <ContainerPayments
                            count={products.length}
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


function BasketItem({ count, name, price, onClickMinus, onClickPlus, onClickDelete }) {
    
    return (
        <div className="item-basket">
            <div className="img-item-basket">
                <img src="../../../public/img/headphones.jpg" alt="" />
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
