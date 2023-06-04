import favorites from "../css/favorites.css"
import { useState } from "react";
export default function Favorites() {
    return (
        <div className="container">
            <div className="favorites">
                <span className="tittle-favorites">ИЗБРАННОЕ</span>
                <div className="btn-add-all-item">
                    Добавить все товары в корзину
                </div>
                <div className="collection-of-favorites-product">
                    <ItemFavorites
                        tittle="Apple AirPods Pro"
                        price="790$"
                    />
                    <ItemFavorites
                        tittle="Apple AirPods Pro"
                        price="790$"
                    />
                    <ItemFavorites
                        tittle="Apple AirPods Pro"
                        price="790$"
                    />
                </div>
            </div>
        </div>
    )
}

function ItemFavorites({ tittle, price }) {
    const [count, setCount] = useState(1);


    return (
        <div data-aos="zoom-in-right" className="favorites-item-with-button flex-direction-mobile">
            <div className="item-favorites">
                <div className="img-item-basket">
                    <img src="../../../public/img/headphones.jpg" alt="" />
                </div>
                <div className="description">
                    <span className="tittle-item">{tittle}</span>
                    <span><b>{price}</b> / шт.</span>
                </div>
                <div className="quantity-container">
                    
                    <div className="quantity-item">
                        <div className="quantity-minus" onClick={() => count > 1 && setCount(count - 1)} >
                            -
                        </div>
                        <div className="quantity-count">
                            {count}
                        </div>
                        <div className="quantity-plus" onClick={() => setCount(count + 1)}>
                            +
                        </div>
                    </div>
                </div>
            </div>
            <div className="btn-to-basket">
                В корзину
            </div>
        </div>
    )


}