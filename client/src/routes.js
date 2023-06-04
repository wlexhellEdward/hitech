import Basket from "./pages/BasketRoute";
import Catalog from "./pages/Catalog";
import Contacts from "./pages/Contacts";
import Favorites from "./pages/Favorites";
import Index from "./pages/Index";
import Product from "./pages/Product";
import SendAndPayments from "./pages/SendAndPayments";
import { BASKET_ROUTE, MAIN_ROUTE, FILTERED_CATALOG, FAVORITES_ROUTE,  CATALOG, CONTACTS, SEND_AND_PAYMENTS, CATALOG_WITH_ITEM} from "./utils/const";

export const PublicRoute = [
    {
        path: MAIN_ROUTE,
        Component: Index
    },
    {
        path: CATALOG,
        Component: Catalog
    },
    {
        path: CONTACTS,
        Component: Contacts
    },
    {
        path:SEND_AND_PAYMENTS,
        Component:SendAndPayments
    },
    {
        path:CATALOG_WITH_ITEM,
        Component:Catalog
    }

]

export const authRoutes = [
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
    {
        path:FAVORITES_ROUTE,
        Component: Favorites
    }

]