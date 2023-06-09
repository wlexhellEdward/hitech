import Advantages from "../components/Advantages/Advantages.jsx";
import HitsOfSell from "../components/HitsOfSell/HitsOfSell.jsx";
import Slider from "../components/Slider/Slider";
import CategoryTovars from "../components/TovarsCategory/CategoryTovars.jsx";
import DiscountContainer from "../components/DiscountContainer/DiscountContainer.jsx";
export default function Index({handleToBasket,hitsProduct,handleToFavorite}){
    return(
        <>
            <Slider/>
            <HitsOfSell handleToBasket={handleToBasket} hitsProduct={hitsProduct} handleToFavorite={handleToFavorite}/>
            <Advantages/>
            <CategoryTovars/>
            <DiscountContainer/>
        </>
    )
}
