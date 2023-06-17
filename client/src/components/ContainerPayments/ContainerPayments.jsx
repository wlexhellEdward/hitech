import { Link,useNavigate } from "react-router-dom"
import { useState } from "react"
import CustomAlert from "../../GUI/Alert/CustomAlert"

export default function ContainerPayments({ count, totalPrice }) {

    const [buttonIsActive, setButtonActive] = useState(true)
    const [promocode, setPromocode] = useState("")
    const navigate = useNavigate();


    function ClickCuponButton() {
        switch (promocode) {
            case "123":
                CustomAlert("succes", "Промокод успешно применён")
                handleSetButtonActive()
                return
            case "321":
                CustomAlert("succes", "Промокод успешно применён")
                handleSetButtonActive()
                return
            default:
                CustomAlert("invalidCupon", "Введённый промокод не действителен")

        }

    }

    function handlePromocodeChanged(e) {
        setPromocode(e.target.value)
    }

    function handleSetButtonActive() {
        setButtonActive(!buttonIsActive)
    }
    function ClickChangeButton() {
        setButtonActive(!buttonIsActive)
    }


    var changedPrice = buttonIsActive ? changedPrice = totalPrice : changedPrice = totalPrice - totalPrice * 0.15



    return (
        <div data-aos="fade-up-left" className="left-container-with-payments">
            <div className="count-product-and-price">
                <span className="color-light-grey">{count} товара на сумму</span>
                <span><b>{totalPrice} $</b></span>
            </div>
            <div className="delivery">
                <span className="color-light-grey">Доставка</span>
                <span><b>{0} $</b></span>
            </div>
            <hr className="hr-basket" />
            <div className="to-purchase">
                <span className="to-purchase-span"><b>К оплате</b></span>
                {buttonIsActive ?
                    <span className="all-price"><b>{changedPrice} $</b></span>
                    :
                    <span className="all-price"><b>{changedPrice} $</b></span>

                }
            </div>
            {buttonIsActive ?
                <div className="promocode">
                    <span className="color-light-grey">Введите промокод</span>
                    <div className="input-container">
                        <input placeholder="Промокод" onChange={handlePromocodeChanged} value={promocode} type="text" />
                        <button onClick={ClickCuponButton}>применить</button>
                    </div>
                </div>
                :
                <div className="promocode">
                    <div className="input-container justify-content-space-between">

                        <span className="color-light-grey"><b>Скидка 15%</b> <br /><br />Введённый промокод: <b className="cl-blue">{promocode}</b>  </span>
                        <button className="changeButton" onClick={ClickChangeButton}>Изменить</button>
                    </div>
                </div>

            }


            <div className="container-button">
                <button onClick={confirmOrder}>Оформить заказ</button>
            </div>
        </div>
    )
    function confirmOrder(){
        if(count<=0){
            CustomAlert("error", "В вашей корзине нету товаров")
        }
        else{
            navigate( "/basket/MakingAnOrder")
        }
    }
}
