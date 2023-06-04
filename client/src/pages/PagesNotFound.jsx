import DiscountContainer from "../components/DiscountContainer/DiscountContainer"
import pagesnotfound from "../css/pagesnotfound.css"
import { Link } from "react-router-dom"
export default function PagesNotFound() {
    return (
        <>
            <div className="container flex-row">
                <span className="tittle-pages-not-found">СТРАНИЦА НЕ НАЙДЕНА</span>
                <div className="pages-not-found-container">
                    <p>404</p>
                    <Link to="/">
                        <button className="btn-return-to-main-page">Перейти на главную</button>
                    </Link>
                </div>
            </div>
            <DiscountContainer />
        </>
    )
}