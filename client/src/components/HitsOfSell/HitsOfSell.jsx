import { useState } from "react"
import hitsOfSell from './hitsOfSell.css'
import phone from '../../../public/img/phoneFirst/font.png'
import basket from '../../../public/img/cart.svg'
import like from '../../../public/img/like.svg'
import { Link } from "react-router-dom"
import Liked from "../../../public/img/Liked.png"






function HitsOfSell({hitsProduct,handleToBasket,handleToFavorite}) {
  return (
    <>
      <div className="container bg-color-div">
        <div className="section-sell">
          <div data-aos="zoom-out-right" className="tittle-section-sell">
            ХИТЫ ПРОДАЖ
          </div>
          <div className="collection-items  flex-direction-mobile">
            {hitsProduct.map(product => {
              return <Item
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                photo={product.font}
                url={"/product/" + product.id}
                favorite={product.favorite}
                onClickToFavorite={() => handleToFavorite(product.id)}
                onClickToBasket={() => handleToBasket(product.id)}
              />
            })}
          </div>
        </div>
      </div>
    </>
  )
}


function Item({ id, name, price, photo, url, favorite, onClickToFavorite, onClickToBasket }) {
  var likeItem = favorite ? likeItem = Liked : likeItem = like
  return (
    <>
      <div data-aos="fade-down" className="item">
        <div className="up-section-item" >
          <div className="icon-item-catalog">
            <img className="like" src={likeItem} onClick={onClickToFavorite} alt="" />
            <img className="to-cart" src={basket} onClick={onClickToBasket} alt="" />
          </div>
          <div className="image-container-item">
            <img src={photo} alt="" />
          </div>
        </div>
        <hr className="catalog-hr" />
        <div className="container-description">
          <p className="name-item">{name}</p>
          <div className="container-btn-price">
            <div className="item-description">
              <p className="price-item"><b>{price} $</b></p>
            </div>
            <Link className="btn-more-item" to={url}>
              <div className="btn-more-catalog">
                Подробнее
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default HitsOfSell
