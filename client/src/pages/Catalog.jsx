import FilteringSidebar from "../../../client/src/components/FilteringSidebar/FilteringSidebar.jsx"
import SectionCatalog from "../components/SectionCatalog/SectionCatalog.jsx"
import catalog from "../css/catalog.css"

export default function Catalog(){
    
    
    return (
        <>
            <h1>КАТАЛОГ</h1>

            <div className="container flex-direction-mobile">
                
                <FilteringSidebar/>
                <SectionCatalog/>

            </div>
        </>
    )
}