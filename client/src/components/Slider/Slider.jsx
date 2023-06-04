import { useState } from "react"
import "./slider.css"
import { Link } from "react-router-dom"
import phone from '../../../public/img/phone.svg'

function Slider() {
  return (
    <>
      <div data-aos="fade-right" className="slider">
        <div className="left-section-slider">
          <span className="tittle">НОВИНКА</span>
          <span className="name-of-phone">IPHONE 14 PRO</span>
          <span className="description">Бесплатная доставка на первый заказ</span>
          <div className="button-more">
            <Link to="/product/1">
              ПОДРОБНЕЕ
            </Link>
          </div>
        </div>
        <div className="right-section-slider">
          <img className="img-slider" src={phone} alt="" />
        </div>
      </div>
    </>
  )
}

export default Slider
