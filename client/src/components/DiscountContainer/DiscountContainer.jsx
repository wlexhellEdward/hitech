import discountContainer from "./discountContainer.css"


export default function DiscountContainer(){
    return(
        <div data-aos="zoom-in-down" className="container bg-blue">
            <div className="container-discount">
                <p className="tittle-discount">СКИДКА 5% ЗА ПОДПИСКУ ПРИ ОНЛАЙН ЗАКАЗЕ</p>
                <p className="description-discount">Узнавайте первым о новых скидках</p>
            </div>
            <div className="discount-right-section">
                <input className="discount-input" type="email" placeholder="Введите ваш e-mail:" />
                <button className="discount-subscribe">ПОДПИСАТЬСЯ</button>
                <p>нажимая на кнопку подписаться вы даёте согласие на обработку ваших данных</p>
            </div>
        </div>
    )
}