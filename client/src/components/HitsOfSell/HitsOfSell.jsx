import { useState } from "react"
import hitsOfSell from './hitsOfSell.css'
import phone from '../../../public/img/phone.svg'
import like from '../../../public/img/like.svg'
import { Link } from "react-router-dom"
function HitsOfSell() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div className="container bg-color-div">
        <div className="section-sell">
          <div data-aos="zoom-out-right" className="tittle-section-sell">
            ХИТЫ ПРОДАЖ
          </div>
          <div className="collection-items">
            <Item
              dataName="fade-left"
              id={1}
              name={"Iphone Watch Nike SE, 44мм, корпус серебристого цвета"}
              price={"23.45$"} />
            <Item
              dataName="fade-up"
              id={2}
              name={"Iphone Watch Nike SE, 44мм, корпус серебристого цвета"}
              price={"23.45$"} />
            <Item
              dataName="fade-up"
              id={3}
              name={"Iphone Watch Nike SE, 44мм, корпус серебристого цвета"}
              price={"23.45$"} />
            <Item
              dataName="fade-right"
              id={4}
              name={"Iphone Watch Nike SE, 44мм, корпус серебристого цвета"}
              price={"23.45$"} />
          </div>
        </div>
      </div>
    </>
  )
}


function Item({ id,name, price, dataName }) {
  return (
    <Link to={`product/${id}`}>
      <div className="item" data-aos={dataName}>
        <div className="up-section">
          <div className="icon-item">
            <img className="like" src={like} alt="" />
            <img className="to-cart" src={like} alt="" />
          </div>
        </div>
        <hr />
        <div className="item-description">
          <p className="name-item">{name}</p>
          <p className="price-item"><b>{price}</b></p>
          <div className="btn-container">
            <div className="btn-more">
              Подробнее
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default HitsOfSell
