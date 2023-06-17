import { useEffect, useState } from "react"
import "./header.css"


import { Link } from 'react-router-dom'
import CustomAlert from "../../GUI/Alert/CustomAlert"
import NavBar from "./nav"
import iphone from "../../../public/img/iphone.png"
import like from '../../../public/img/like.svg'
import cart from '../../../public/img/cart.svg'







function Header({CountBasketItems,CountFavoriteItems,user_id}) {
  const [showMenu, setShowMenu] = useState(false)
  const [showCategory, setShowCategory] = useState(false)


  function handleSetShowMenu() {
    setShowMenu(!showMenu)
  }
  function handleSetCategoryShow() {
    setShowCategory(!showCategory)
  }


  return (

    <>
      <header>
        <div className="name-shop">
          <Link to="/">IPSHOP</Link>
        </div>
        <NavBar />
        <div className="right-section-header">
          <div className="search">
            <input type="text" placeholder="Поиск всех товаров" />
          </div>

          <div className="header-icons">

            <>
              <Link to={`/favorites/${user_id}`}>
                <img className="like-ico" src={like} alt="" />
                <span className="quantity-liked-item">{CountFavoriteItems}</span>
              </Link>
              <Link to="/basket/ProductsBasket">
                <img className="cart-ico" src={cart} alt="" />
                <span className="quantity-basket-item">{CountBasketItems}</span>
              </Link>
            </>


          </div>
        </div>
        <button className="btn-nav-menu" onClick={handleSetShowMenu}>=</button>
      </header>
      {showMenu &&
        <>
          <div data-aos="zoom-in-right" className="mobile-menu">
            <Link to="/">IPSHOP</Link>

            <div className="header-icons-mobile">
              <Link to="/favorites">
                <img className="like-ico" src={like} alt="" />
              </Link>
              <Link to="/basket/ProductsBasket">
                <img className="cart-ico" src={cart} alt="" />
              </Link>
            </div>
            <div className="link-catalog">
              <div className="nav-catalog" onClick={handleSetCategoryShow}>Каталог</div>
              {showCategory &&
                <div className="contains-catalog-link-mobile">
                  <Link className="nav-catalog" to="/catalog">Всё </Link>
                  <Link to="/catalog/phone" >Смартфоны</Link>
                  <Link to="/catalog/computer" >Компьютеры</Link>
                  <Link to="/catalog/tablets" >Планшеты</Link>
                  <Link to="/catalog/headphones" >Наушники</Link>
                  <Link to="/catalog/SmartClock" >Умные часы</Link>
                  <Link to="/catalog/acc" >Акссесуары</Link>
                </div>
              }
            </div>
            <Link to="/send_and_payments">Доставка и оплата</Link>
            <Link to="/contacts">Контакты</Link>
            <Link to="/more">Ещё</Link>

            <div className="search-mobile">
              <input type="text" placeholder="Поиск всех товаров" />
            </div>
          </div>
        </>
      }

    </>
  )
}

export default Header
