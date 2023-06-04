import footer from "./footer.css"
import {Link} from "react-router-dom"
export default function Footer(){
    return (
        <div  className="footer">
            <div className="container">
                <div className="column">
                    <p>КАТАЛОГ</p>
                    <Link to="/catalog/">Смартфоны</Link>
                    <Link to="/catalog/">Компьютеры</Link>
                    <Link to="/catalog/">Планшеты</Link>
                    <Link to="/catalog/">Акссесуары</Link>
                    <Link to="/catalog/">Наушники</Link>
                    <Link to="/catalog/">Тупые часы</Link>
                </div>
                <div className="column">
                    <p>КЛИЕНТАМ</p>
                    <Link to="/catalog/">О нас</Link>
                    <Link to="/catalog/">Оплата</Link>
                    <Link to="/catalog/">Доставка</Link>
                    <Link to="/catalog/">Возврат</Link>
                    <Link to="/catalog/">ИНН</Link>
                    <Link to="/catalog/">Договор оферты</Link>
                </div>
                <div className="column">
                    <p>КОНТАКТЫ</p>
                    <span>+375-29-260-30-47</span>
                    <span>techno@mail.ru</span>
                    <span>г. Витебск</span>
                </div>
                <div className="column width-one-tree">
                    <input className="message-to-me-input" type="text" placeholder="Связь с нами" />
                    <button className="messsage-submit">ОТПРАВИТЬ</button>
                </div>
            </div>
            <div className="down-section-footer">
                <Link to="/">IPSHOP</Link> 
                <div className="social-links">
                    <Link to="/instagram">
                        <img src="../../../public/img/instagram.svg" alt="" />
                    </Link>
                    <Link>
                        <img src="../../../public/img/telegram.svg" alt="" />
                    </Link>
                    <Link>                        
                        <img src="../../../public/img/youtube.svg" alt="" />
                    </Link>
                </div>
            </div>
        </div>
        
    )
}