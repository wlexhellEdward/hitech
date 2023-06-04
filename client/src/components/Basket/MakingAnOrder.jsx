import { Link, useNavigate  } from "react-router-dom"
import { useState } from "react";

const ArrayOfItem = [
    { id: "1", name: "Apple AirPods Pro", price: 790, count: 1 },
    { id: "2", name: "Apple AirPods Pro", price: 790, count: 1 },
    { id: "3", name: "Apple AirPods Pro", price: 790, count: 1 },
    { id: "4", name: "Apple AirPods Pro", price: 790, count: 1 },
    { id: "5", name: "Apple AirPods Pro", price: 790, count: 1 }
]

const totalPrice = 12590

export default function MakingAnOrder() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nameAndSecondName: '',
        phoneNumber: '',
        email: '',
        pickup: false,
        deliveryByCourier: false,
        date: '',
        region: '',
        city: '',
        adress: '',
        index: '',
        cart: false,
        cartToCurer: false,
        moneyCurer: false
    })
    const [errorArray, setErrorArray] = useState(
        {
            nameAndSecondName: false,
            phoneNumber: false,
            email: false,
            date: false,
            region: false,
            city: false,
            adress: false,
            index: false,
        }
    )

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));



        if (formData.nameAndSecondName != "") {
            setErrorArray((preventData) => ({
                ...preventData,
                nameAndSecondName: false
            }))
        }
        if (formData.phoneNumber != "") {
            setErrorArray((preventData) => ({
                ...preventData,
                phoneNumber: false
            }))
        }
        if (formData.email != "") {
            setErrorArray((preventData) => ({
                ...preventData,
                email: false
            }))
        }
    };
    const handleInputTypeCheckedChange = (event) => {
        const { id, checked } = event.target;
        const fieldMap = {
            "cart-on-site1": { cart: checked, cartToCurer: false, moneyCurer: false },
            "cart-to-curer1": { cart: false, cartToCurer: checked, moneyCurer: false },
            "money-curer1": { cart: false, cartToCurer: false, moneyCurer: checked },
            "delivery-human": { deliveryByCourier: false, pickup: checked },
            "delivery-curer": { deliveryByCourier: checked, pickup: false },
        };

        setFormData((prevFormData) => ({
            ...prevFormData,
            ...fieldMap[id],
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (formData.nameAndSecondName == "") {
            setErrorArray((preventData) => ({
                ...preventData,
                nameAndSecondName: true
            }))
        }
        const onlyDigits = !(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im).test(formData.phoneNumber)
        const isValidEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)

        

        if (formData.phoneNumber == "" || onlyDigits) {
            setErrorArray((preventData) => ({
                ...preventData,
                phoneNumber: true
            }))
        }
        if (formData.email == "" || isValidEmail) {
            setErrorArray((preventData) => ({
                ...preventData,
                email: true
            }))
        }
        var allSucces = !formData.nameAndSecondName || !formData.phoneNumber || !formData.email ? allSucces=false : allSucces=true
        console.log(allSucces)
        if(allSucces){
            navigate("/basket/Confirm")
        }
        console.log(errorArray);
    };

    return (
        <div className="container">
            <div data-aos="fade-down" className="basket">
                <span className="basket-tittle">ОФОРМЛЕНИЕ ЗАКАЗА</span>
                <div className="nav-basket flex-direction-mobile">
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
                            <span className="background-blue">2</span>
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
                <div className="container-user-info">
                    <div data-aos="fade-up-right" className="user-order">
                        <span className="order-tittle">ВАШ ЗАКАЗ</span>
                        <div className="collection-of-order-item">
                            {ArrayOfItem.map(product => {
                                return <BasketItem
                                    key={product.id}
                                    count={product.count}
                                    name={product.name}
                                    price={product.price}
                                />
                            })}
                        </div>
                        <span className="total-price-order">Сумма : <b>{totalPrice} $</b></span>
                    </div>
                    <div data-aos="fade-up-left" className="container-form-user-info">
                        <form action="" >
                            <span>ПОКУПАТЕЛЬ</span>
                            <div className="container-name-number">
                                <input style={{ 'border': ` ${errorArray.nameAndSecondName ? '2px solid red' : 'none'}` }} name="nameAndSecondName" value={formData.nameAndSecondName} onChange={handleInputChange} className="name-input" type="text" placeholder="Имя и фамилия*" />
                                <input style={{ 'border': ` ${errorArray.phoneNumber ? '2px solid red' : 'none'}` }} name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} className="number-input" type="text" placeholder="Телефон*" />
                            </div>
                            <input style={{ 'border': ` ${errorArray.email ? '2px solid red' : 'none'}` }} name="email" value={formData.email} onChange={handleInputChange} className="email-input" type="email" placeholder="E-mail*" />
                            <div className="container-type-and-data">
                                <div className="container-type">
                                    <span>СПОСОБ ДОСТАВКИ</span>
                                    <div className="container-type-delivery flex-direction-mobile">
                                        <fieldset id="group" className="flex-direction-mobile">
                                            <div className="col-1-delivery-type">
                                                <div className="checkbox">
                                                    <input name="group" onChange={handleInputTypeCheckedChange} className="custom-checkbox" id="delivery-human" type="radio" />
                                                    <label htmlFor="delivery-human" className="description-span">Самовывоз</label>
                                                </div>
                                            </div>
                                            <div className="col-2-delivery-type">
                                                <div className="checkbox">
                                                    <input name="group" onChange={handleInputTypeCheckedChange} className="custom-checkbox" id="delivery-curer" type="radio" />
                                                    <label htmlFor="delivery-curer" className="description-span">Доставка курьером</label>
                                                </div>
                                            </div>

                                        </fieldset>

                                    </div>
                                </div>
                                <div className="container-date">
                                    <span>ДАТА</span>
                                    <div className="container-date-input">
                                        <input name="date" value={formData.date} onChange={handleInputChange} type="date" />
                                    </div>
                                </div>
                            </div>
                            <span>АДРЕСС ДОСТАВКИ</span>
                            <div className="container-adress-input">
                                <input name="region" value={formData.region} onChange={handleInputChange} type="text" placeholder="Регион" />
                                <input name="city" value={formData.city} onChange={handleInputChange} type="text" placeholder="Город" />
                                <div className="container-adress-index">
                                    <input name="adress" value={formData.adress} onChange={handleInputChange} className="adress-input" type="text" placeholder="Адресс" />
                                    <input name="index" value={formData.index} onChange={handleInputChange} className="index-input" type="text" placeholder="Индекс" />
                                </div>
                            </div>
                            <span className="tittle-purchase">СПОСОБ ОПЛАТЫ</span>
                            <div className="container-type-purchase">
                                <fieldset id="group2" className="flex-direction-mobile">
                                    <div className="checkbox">
                                        <input name="group2" onChange={handleInputTypeCheckedChange} id="cart-on-site1" className="custom-checkbox" type="radio" />
                                        <label htmlFor="cart-on-site1" className="description-span">Картой на сайте</label>
                                    </div>
                                    <div className="checkbox">
                                        <input name="group2" onChange={handleInputTypeCheckedChange} id="cart-to-curer1" className="custom-checkbox" type="radio" />
                                        <label htmlFor="cart-to-curer1" className="description-span">Картой курьеру</label>
                                    </div>
                                    <div className="checkbox">
                                        <input name="group2" onChange={handleInputTypeCheckedChange} id="money-curer1" className="custom-checkbox" type="radio" />
                                        <label htmlFor="money-curer1" className="description-span">Наличными курьеру</label>
                                    </div>
                                </fieldset>

                            </div>

                            <button className="btn-submit" onClick={handleSubmit} type="btn">ОФОРМИТЬ ЗАКАЗ</button>
                        </form>

                    </div>
                </div>
            </div>



        </div >
    )
}

function BasketItem({ count, name, price }) {

    return (
        <div className="item-making-an-order">
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