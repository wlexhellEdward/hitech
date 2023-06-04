import { Link } from "react-router-dom"

const ArrayOfItem = [
    { id: "1", name: "Apple AirPods Pro", price: 790, count: 1 },
    { id: "2", name: "Apple AirPods Pro", price: 790, count: 1 },
    { id: "3", name: "Apple AirPods Pro", price: 790, count: 1 },
    { id: "4", name: "Apple AirPods Pro", price: 790, count: 1 },
    { id: "5", name: "Apple AirPods Pro", price: 790, count: 1 }
]

const totalPrice = 12590


export default function Confirm() {
    return (
        <>
            <div data-aos="fade-up" className="container">
                <div className="basket">
                    <span className="basket-tittle">ПОДТВЕРЖДЕНИЕ</span>
                    <div className="nav-basket">
                        <Link to="/catalog">
                            <div className="back-to-buy">
                                Назад к покупкам
                            </div>
                        </Link>
                        <div className="stages-of-purchase">
                            <div className="stage ">
                                <span >1</span>
                                <p>Корзина</p>
                                <hr />
                            </div>
                            <div className="stage margin-right-left">
                                <hr />
                                <span >2</span>
                                <p>Оформление заказа</p>
                                <hr />
                            </div>
                            <div className="stage">
                                <hr />
                                <span className="background-blue">3</span>
                                <p>Подтверждение</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="fade-down" className="container-confirm">
                <div className="confirm">
                    <span className="order-tittle">ВАШ ЗАКАЗ</span>
                    <div className="confirm-collcetion">
                        {ArrayOfItem.map(product => {
                            return <BasketItem
                                key={product.id}
                                count={product.count}
                                name={product.name}
                                price={product.price}
                            />
                        })}
                    </div>
                    <span className="total-price-order">С Вами свяжуться в течении 20 минут</span>
                    <div className="btn-cancel-order">
                        Отменить заказ
                    </div>
                </div>
            </div>
        </>
    )
}

function BasketItem({ count, name, price }) {

    return (
        <div className="item-making-an-order confirm-item">
            <div className="img-item-order">
                <img src="../../../public/img/headphones.jpg" alt="" />
            </div>
            <div className="description-order">
                <span className="tittle-item">{name}</span>
                <span className="order-price"><b>{price}</b> $</span>
            </div>
            <div className="quantity-container">
                {count}
            </div>

        </div>
    )
}