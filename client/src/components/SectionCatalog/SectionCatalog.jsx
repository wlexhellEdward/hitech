import sectionCatalog from "./sectionCatalog.css"
import { Link, redirect, useNavigate, useParams } from "react-router-dom"
import iphone from "../../../public/img/iphone.png"
import like from "../../../public/img/like.svg"
import Liked from "../../../public/img/Liked.png"
import cart from "../../../public/img/cart.svg"
import CustomAlert from "../../GUI/Alert/CustomAlert.jsx"
import filtereingSidebar from "../FilteringSidebar/filtereingSidebar.css"
import { useState, useEffect, useMemo } from "react";







let min, max, count = 0

const checkboxes = [
    {
        name: 'phone',
        key: '1',
        label: 'СМАРТФОНЫ',
    },
    {
        name: 'acc',
        key: '2',
        label: 'АКССЕСУАРЫ',
    },
    {
        name: 'headphones',
        key: '3',
        label: 'НАУШНИКИ',
    },
    {
        name: 'smart-clock',
        key: '4',
        label: 'УМНЫЕ ЧАСЫ',
    },
    {
        name: 'plansh',
        key: '5',
        label: 'ПЛАНШЕТЫ',
    },
    {
        name: 'computer',
        key: '6',
        label: 'КОМПЬЮТЕРЫ',
    },
]





export default function SectionCatalog({ AllProducts, handleToBasket, handleToFavorite }) {

    const params = useParams()

    var arrayOfOCategory = []

    try {
        if (params['item'].length > 0) {
            arrayOfOCategory.push([params['item']])
        }
    }
    catch {
        if (!params['item']) {
            arrayOfOCategory.push(checkboxes.map(item => item.name))
        }
    }

    const [checkedItems, setCheckedItems] = useState(...arrayOfOCategory);
    const [price, setPrice] = useState(0)
    const [currentValue, setCurrentValue] = useState(0)
    const [selectedSort, setSelectedSort] = useState('')
    const [showFilters, setShowFilters] = useState(true)





    useEffect(() => {
        checkedItems.map((item) => {
            Array.from(document.querySelectorAll(`input[name="${item}"]`)).forEach((checkbox) => {
                checkbox.checked = true;
            })
        })

    })


    function ChangeshowFilters() {
        setShowFilters(!showFilters)
    }


    const sortProduct = (sort) => {
        setSelectedSort(sort)
    }


    const sortedProducts = useMemo(() => {
        if (sortProduct) {
            try {
                return AllProducts.sort((a, b) => {
                    if (selectedSort === "low") {
                        return a.price - b.price
                    }
                    else {
                        return b.price - a.price
                    }
                })
            }
            catch {
                console.log("error")
            }
        }
        return AllProducts
    }, [selectedSort, AllProducts])



    const sortedAndCategorySortedProducts = useMemo(() => {
        try {
            return sortedProducts.filter(product => checkedItems.includes(product.type))
        }
        catch {
            return sortedProducts
        }
    }, [checkedItems, sortedProducts])

    const sortedAndCategorySortedProductsAndPrice = useMemo(() => {
        const arrayPrice = []
        try {
            sortedAndCategorySortedProducts.forEach(item => arrayPrice.push(item.price))
            max = Math.max.apply(Math, arrayPrice)
            min = Math.min.apply(Math, arrayPrice)
            count = sortedAndCategorySortedProducts.filter(product => product.price > price).length
            setCurrentValue(price)
            return sortedAndCategorySortedProducts.filter(product => product.price > price)
        }
        catch{
            return sortedProducts
        }
        
    }, [price, sortedAndCategorySortedProducts])


    const handleChange = (event) => {
        if (event.target.name == 'all') {
            setCheckedItems(checkboxes.map(item => item.name))
            return
        }
        event.target.checked ?
            setCheckedItems([...checkedItems, event.target.name])
            :
            setCheckedItems(checkedItems.filter(
                checkedItems => checkedItems != event.target.name
            ))
    }







    return (
        <>

            {showFilters &&
                <div data-aos="fade-right" className="sidebar-catalog-filters">
                    <span className="tittle-price">Цена</span>
                    <div className="price-filter">
                        <div className="container-current-price">
                            <span className="range-span">{currentValue} $</span>
                        </div>
                        <input className="range-input" type="range" value={price} onChange={e => setPrice(e.target.value)} min={0} max={max} />
                        <div className="from-to">
                            <span>От {min}</span>
                            <span>До {max}</span>
                        </div>
                    </div>
                    <div className="type-of-items">
                        <span className="tittle-type">ТИП ТОВАРА</span>
                        {checkboxes.map(item => {
                            return <CheckBoxCreator
                                key={item.id}
                                name={item.name}
                                labelName={item.label}
                                handleCheckBox={handleChange}
                            />
                        })}

                    </div>
                </div>
            }

            <div data-aos="zoom-in-right" className="section-catalog">
                <div className="up-section-catalog">
                    <div className="filters-btn" onClick={ChangeshowFilters}>
                        <span className="button-show-filters" >{showFilters ? "Cкрыть" : "Показать"} фильтры</span>
                    </div>
                    <div className="total-product">
                        <span>Всего найдено <b> {count} товаров</b></span>
                    </div>
                    <div className="sort-product">
                        <select id="selectPrice" value={selectedSort} onChange={e => sortProduct(e.target.value)}>
                            <option value={"high"}>Сначала дорогие</option>
                            <option value={"low"}>Сначала дешёвые</option>

                        </select>
                    </div>
                </div>
                <div className="container-items">
                    {sortedAndCategorySortedProductsAndPrice.map(product => {
                        return <Item
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            price={product.price}
                            photo={product.font}
                            url={"/product/" + product.id}
                            favorite={product.favorite}
                            basket={product.basket}
                            onClickToFavorite={() => handleToFavorite(product.id)}
                            onClickToBasket={() => handleToBasket(product.id)}
                        />
                    })}
                </div>
            </div>
            {!showFilters && (
                <>
                    {Array.from(document.getElementsByClassName("section-catalog")).forEach((element) => {
                        element.style.width = "100%";
                    })}
                </>
            )}
            {showFilters && (
                <>
                    {Array.from(document.getElementsByClassName("section-catalog")).forEach((element) => {
                        element.style.width = "70%";
                    })}
                </>
            )}
        </>
    )
}

function CheckBoxCreator({ name, labelName, handleCheckBox }) {
    return (
        <div className="checkbox">
            <input className="custom-checkbox" onChange={handleCheckBox} name={name} id={name} type="checkbox" />
            <label htmlFor={name} className="description-span">{labelName}</label>
        </div>
    )

}

function Item({ id, name, price, url, photo, basket, favorite, onClickToFavorite, onClickToBasket }) {
    var image = { backgroundImage: "url(" + { photo } + ") !important" }
    var likeItem = favorite ? likeItem = Liked : likeItem = like
    var cartItem = basket ? cartItem = cart : cartItem = cart

    return (
        <>
            <div data-aos="fade-down" className="item">
                <div className="up-section-item" style={image}>
                    <div className="icon-item-catalog">
                        <img className="like" src={likeItem} onClick={onClickToFavorite} alt="" />
                        <img className="to-cart" src={cartItem} onClick={onClickToBasket} alt="" />
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