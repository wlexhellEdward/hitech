import { Link } from "react-router-dom"






export default function Confirm({ productBasket }) {
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
                        {productBasket.map(product => {
                            return <BasketItem
                                key={product.id}
                                count={product.count}
                                name={product.name}
                                photo={product.font}
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

function BasketItem({ count, name,photo, price }) {

    return (
        <div className="item-making-an-order confirm-item">
            <div className="img-item-order">
                <img src={photo} alt="" />
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