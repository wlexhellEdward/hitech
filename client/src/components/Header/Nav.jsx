import { useState } from "react"
import { Link } from "react-router-dom"
import "./header.css"

function NavBar() {


  return (
    <>
      <nav className="nav-menu">
        <div className="link-catalog">
          <Link to="/catalog" className="nav-catalog">Каталог</Link>
          <div className="contains-catalog-link">
            <Link className="nav-catalog" to="/catalog">Всё </Link>
            <Link to="/catalog/phone" >Смартфоны</Link>
            <Link to="/catalog/computer" >Компьютеры</Link>
            <Link to="/catalog/plansh" >Планшеты</Link>
            <Link to="/catalog/headphones" >Наушники</Link>
            <Link to="/catalog/smart-clock" >Умные часы</Link>
            <Link to="/catalog/acc" >Акссесуары</Link>
          </div>
        </div>
        <Link to="/send_and_payments">Доставка и оплата</Link>
        <Link to="/contacts">Контакты</Link>
      </nav>
    </>
  )
}

export default NavBar
