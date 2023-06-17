import { useState, useEffect, useMemo } from 'react'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import Footer from "./components/Footer/Footer.jsx"
import Header from './components/Header/Header.jsx'
import CustomAlert from './GUI/Alert/CustomAlert'
import { ToastContainer } from 'react-toastify';


const user_id = 1


const allProductResponce = await fetch(`http://localhost:5252/api/products/get_all`)
const dataAllProducts = await allProductResponce.json()

const ProductBasketResponce = await fetch(`http://localhost:5252/api/basket/get_basket_product/${user_id}`)
const dataBasket = await ProductBasketResponce.json()


const responceFavorite = await fetch(`http://localhost:5252/api/favorite/get_favorite_product/${user_id}`)
const dataFavorte = await responceFavorite.json()

const quantityResponceFavorite = await fetch(`http://localhost:5252/api/favorite/get_count/${user_id}`)
const quantityFavorite = await quantityResponceFavorite.json()

const quantityResponceBasket = await fetch(`http://localhost:5252/api/basket/get_count/${user_id}`)
const quantityBasket = await quantityResponceBasket.json()


function App() {
  useEffect(() => {
    AOS.init()
  }, [])


  const [CountFavoriteItems, setCountFavoriteItems] = useState(quantityFavorite)
  const [CountBasketItems, setCountBasketItems] = useState(quantityBasket)
  const [FavoriteItems, setFavorites] = useState(dataFavorte)
  const [productsBasket, setProducts] = useState(dataBasket)
  const [AllProducts, setAllProducts] = useState(dataAllProducts)



  function handleAddToBasketFromFavorites(product_id) {
    setFavorites(
      FavoriteItems.filter(product => product.id != product_id)
    )

    const newProducts = [...AllProducts].filter(product => product.id === product_id)
    fetch(`http://localhost:5252/api/basket/add_to_basket/from_favorite/user_id=${user_id}/product_id=${product_id}`, { method: "POST" }).then(
      respone => {
        if (respone.ok) {
          if (productsBasket.length === 0) {
            setProducts(newProducts)
            setCountBasketItems(1)
          }
          else {
            const updatedBasket = productsBasket.some(item => item.id == selectedID)
            if (!updatedBasket) {
              setProducts([...productsBasket, ...newProducts])
              setCountBasketItems((prevCount) => prevCount + 1)
            } else {
              setProducts(productsBasket.filter(item => item.id !== selectedID), ...newProducts)
              setCountBasketItems((prevCount) => prevCount - 1)
            }
          }
        }
      }
    )
    setCountFavoriteItems((prevCount)=>prevCount-1)


    fetch(`http://localhost:5252/api/favorite/add_to_favorite/user_id=${user_id}/product_id=${product_id}`, { method: "POST" })

    setAllProducts(prevProducts =>
      prevProducts.map(product => {
        if (product.id !== product_id) {
          return product;
        }
        return {
          ...product,
          favorite: !product.favorite
        };
      })
    );
    setAllProducts(prevProducts =>
      prevProducts.map(product => {
        if (product.id !== product_id) {
          return product;
        }
        return {
          ...product,
          basket: !product.basket
        };
      })
    );
  }


  function handleDeleteFromFavorites(product_id) {
    setFavorites(
      FavoriteItems.filter(product => product.id != product_id)
    )
    setAllProducts(prevProducts =>
      prevProducts.map(product => {
        if (product.id !== product_id) {
          return product;
        }
        return {
          ...product,
          favorite: !product.favorite
        };
      })
    );
    fetch(`http://localhost:5252/api/favorite/add_to_favorite/user_id=${user_id}/product_id=${product_id}`, { method: "POST" })
    setCountFavoriteItems((prevCount) => prevCount - 1)
  }


  const totalPrice = useMemo(() => {
    return productsBasket.reduce((totalPrice, product) => {
      return totalPrice + product.price * product.count;
    }, 0);
  }, [productsBasket, handleAddToBasketFromFavorites, handlePlusCountProduct, handleMinusCountProduct, handleDeleteProduct]);



  function handlePlusCountProduct(selectedID) {
    setProducts(
      productsBasket.map(product => {
        if (product.id != selectedID || product.count > 20) return product
        return {
          ...product, count: product.count + 1
        }
      })
    )
  }

  function handleMinusCountProduct(selectedID) {
    setProducts(
      productsBasket.map(product => {
        if (product.id != selectedID || product.count < 2) return product
        return {
          ...product, count: product.count - 1
        }
      })
    )
  }

  function handleToFavorite(selectedID) {
    const newProducts = [...AllProducts].filter(product => product.id === selectedID);
    fetch(`http://localhost:5252/api/favorite/add_to_favorite/user_id=${1}/product_id=${selectedID}`, { method: "POST" })
      .then(response => {
        if (response.ok) {
          if (FavoriteItems.length === 0) {
            setFavorites(newProducts);
            setCountFavoriteItems(1);
          } else {
            const updatedFavorites = FavoriteItems.some(item => item.id === selectedID);
            if (!updatedFavorites) {
              setFavorites([...FavoriteItems, ...newProducts]);
              setCountFavoriteItems((prevCount) => prevCount + 1);
            } else {
              setFavorites(FavoriteItems.filter(item => item.id !== selectedID), ...newProducts);
              setCountFavoriteItems((prevCount) => prevCount - 1);

            }
          }
        }
      })


    setAllProducts(prevProducts =>
      prevProducts.map(product => {
        if (product.id !== selectedID) {
          return product;
        }
        return {
          ...product,
          favorite: !product.favorite
        };
      })
    );
  }






  function handleToBasket(selectedID) {
    const newProducts = [...AllProducts].filter(product => product.id === selectedID)
    fetch(`http://localhost:5252/api/basket/add_to_basket/user_id=${1}/product_id=${selectedID}`, { method: "POST" }).then(
      response => {
        if (response.ok) {
          if (productsBasket.length === 0) {
            setProducts(newProducts)
            setCountBasketItems(1)
          }
          else {
            const updatedBasket = productsBasket.some(item => item.id == selectedID)
            if (!updatedBasket) {
              setProducts([...productsBasket, ...newProducts])
              setCountBasketItems((prevCount) => prevCount + 1)
            } else {
              setProducts(productsBasket.filter(item => item.id !== selectedID), ...newProducts)
              setCountBasketItems((prevCount) => prevCount - 1)
            }
          }
        }
      }
    )
    setAllProducts(prevProducts =>
      prevProducts.map(product => {
        if (product.id !== selectedID) {
          return product;
        }
        return {
          ...product,
          basket: !product.basket
        };
      })
    );
  }

  function handleDeleteProduct(selectedID) {
    fetch(`http://localhost:5252/api/basket/add_to_basket/user_id=${1}/product_id=${selectedID}`, { method: "POST" })
    setProducts(
      productsBasket.filter(product => product.id != selectedID)
    )
    setCountBasketItems((prevCount) => prevCount - 1)
    setAllProducts(prevProducts =>
      prevProducts.map(product => {
        if (product.id !== selectedID) {
          return product;
        }
        return {
          ...product,
          basket: !product.basket
        };
      })
    );
  }



  return (

    <BrowserRouter>
      <Header CountBasketItems={CountBasketItems} user_id={user_id} CountFavoriteItems={CountFavoriteItems} />
      <AppRouter
        FavoriteItems={FavoriteItems}
        quantityBasket={quantityBasket}
        quantityFavorite={quantityFavorite}
        productsBasket={productsBasket}
        handleAddToBasketFromFavorites={handleAddToBasketFromFavorites}
        handleDeleteFromFavorites={handleDeleteFromFavorites}
        CountFavoriteItems={CountFavoriteItems}
        CountBasketItems={CountBasketItems}
        HandlePlusCountProduct={handlePlusCountProduct}
        HandleMinusCountProduct={handleMinusCountProduct}
        totalPrice={totalPrice}
        HandleDeleteProduct={handleDeleteProduct}
        AllProducts={AllProducts}
        handleToFavorite={handleToFavorite}
        handleToBasket={handleToBasket}
      />
      <Footer />
      <ToastContainer />
    </BrowserRouter>



  )
}

export default App
