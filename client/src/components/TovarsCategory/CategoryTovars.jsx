import categoryTovars from "./categoryTovars.css"
import media from "../../css/media.css"
import { Link } from "react-router-dom"

export default function CategoryTovars() {
    return (
        <div className="container">
            <p  data-aos="zoom-out-right" className="tittle-category-tovars">КАТЕГОРИИ ТОВАРОВ</p>

            <table>
                <tbody  data-aos="zoom-out-down">
                    <tr>
                        <td  data-aos="zoom-out-right" className="td-phone" colSpan={2} rowSpan={2}>
                            <Link to="/catalog/phone">
                                <img className="phone-img" src="../../../public/img/fivephone.jpg" alt="" />
                                <p>СМАРТФОНЫ</p>
                            </Link>
                        </td>
                        <td  data-aos="zoom-out-up" className="td-acces">
                            <Link to="/catalog/acc">
                                <img src="../../../public/img/acces.jpg" alt="" />
                                <p>АКССЕСУАРЫ</p>
                            </Link>
                        </td>
                        <td  data-aos="zoom-out-left" className="td-heaphones">
                            <Link to="/catalog/headphones">
                                <img src="../../../public/img/headphones.jpg" alt="" />
                                <p>НАУШНИКИ</p>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td  data-aos="zoom-out-down" className="td-smartLock" colSpan={2}>
                            <Link to="/catalog/smart-clock">
                                <img src="../../../public/img/smartClock.jpg" alt="" />
                                <p>УМНЫЕ ЧАСЫ</p>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td  data-aos="zoom-out-right" className="td-planshet" colSpan={2} rowSpan={2}>
                            <Link to="/catalog/plansh">
                                <img src="../../../public/img/planshet.jpg" alt="" />
                                <p>ПЛАНШЕТЫ</p>
                            </Link>
                        </td>
                        <td  data-aos="zoom-out-left" className="td-computer" colSpan={2} rowSpan={2}>
                            <Link to="/catalog/computer">
                                <img src="../../../public/img/computer.jpg" alt="" />
                                <p>КОМПЬЮТЕРЫ</p>
                            </Link>
                        </td>
                    </tr>
                </tbody>

            </table>

        </div>
    )
}