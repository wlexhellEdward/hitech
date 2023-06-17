import favorites from "../css/favorites.css"
import { useMemo, useState, useEffect } from "react";


export default function Favorites({ handleAddToBasketFromFavorites,
    handleDeleteFromFavorites,
    FavoriteItems }) {

    return (
        <div className="container">

            <div className="favorites">
                <span className="tittle-favorites">ИЗБРАННОЕ</span>
                <div className="btn-add-all-item">
                    Добавить все товары в корзину
                </div>
                <div className="collection-of-favorites-product">
                    {
                        FavoriteItems.length != 0 ?
                            FavoriteItems.map(item => {
                                return (
                                    <ItemFavorites
                                        key={item.id}
                                        tittle={item.name}
                                        price={item.price}
                                        count={item.count - 1}
                                        image={item.font}
                                        AddToBasketClick={() => handleAddToBasketFromFavorites(item.id)}
                                        DeleteFromBasketClick={() => handleDeleteFromFavorites(item.id)}
                                    />
                                )
                            })
                            :
                            <div className="loader-container">
                                <h3 className="loader-tittle">У вас ещё нету товаров в избранном</h3>
                                <span class="loader"></span>
                            </div>
                    }


                </div>
            </div>
        </div>
    )
}

function ItemFavorites({ tittle, price, image, AddToBasketClick, DeleteFromBasketClick }) {


    return (
        <div className="favorites-item-with-button flex-direction-mobile">
            <div className="item-favorites">
                <div className="img-item-basket">
                    <img src={image} alt="" />
                </div>
                <div className="description">
                    <span className="tittle-item">{tittle}</span>
                    <span><b>{price}</b> / шт.</span>
                </div>
                <div className="quantity-container">
                    <div className="quantity-item">

                        <div className="delete-item" onClick={DeleteFromBasketClick}>
                            X
                        </div>
                    </div>
                </div>
            </div>
            <div className="btn-to-basket" onClick={AddToBasketClick}>
                В корзину
            </div>
        </div>
    )


}