import FilteringSidebar from "../../../client/src/components/FilteringSidebar/FilteringSidebar.jsx"
import SectionCatalog from "../components/SectionCatalog/SectionCatalog.jsx"
import catalog from "../css/catalog.css"

export default function Catalog({AllProducts,handleToBasket,handleToFavorite}){
    
    
    return (
        <>
            <h1>КАТАЛОГ</h1>

            <div className="container flex-direction-mobile">
                
                <FilteringSidebar/>
                <SectionCatalog AllProducts={AllProducts} handleToBasket={handleToBasket} handleToFavorite={handleToFavorite}/>

            </div>
        </>
    )
}