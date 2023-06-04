import contacts from "../css/contacts.css"
import map from "../../public/img/map.jpg"
import DiscountContainer from "../components/DiscountContainer/DiscountContainer"

export default function Contacts() {
    return (
        <>
            <div data-aos="fade-down" className="container flex-direction-mobile">
                <span className="contacts-tittle">КОНТАКТЫ</span>
                <div className="contacts flex-direction-mobile">
                    <div className="container-map">
                        <div className="container-map-in"></div>
                    </div>
                    <div className="description-contacts">
                        <span>КОНТАКТЫ</span>
                        <ul>
                            <li>+375-29-260-30-47</li>
                            <li>ipshop@gmail.com</li>
                            <li>Витебск, ул. Гагарина 41</li>
                            <li>ИНН 683521412</li>
                        </ul>
                        <span>ОСТАВИТЬ ОТЗЫВ</span>
                        <input className="contacts-name-input" type="text" placeholder="Имя и Фамилия*" />
                        <input className="contacts-review-input" type="text" placeholder="Отзыв: " />
                        <button className="send-review">Отправить</button>
                    </div>
                </div>
            </div>
            <DiscountContainer />
        </>
    )
}