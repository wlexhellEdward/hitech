import Basket from "./pages/BasketRoute";
import Catalog from "./pages/Catalog";
import Contacts from "./pages/Contacts";
import SendAndPayments from "./pages/SendAndPayments";
import Authenficate from "./pages/Authenficate";
import { BASKET_ROUTE, AUTHENFICATE,  CONTACTS, SEND_AND_PAYMENTS, CATALOG_WITH_ITEM} from "./utils/const";

export const PublicRoute = [
    
    {
        path:AUTHENFICATE,
        Component: Authenficate,
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
    }

]