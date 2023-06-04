import { Navigate, Outlet } from "react-router-dom"
import { MAIN_ROUTE } from "../utils/const"

export default function AuthRoute(){
    const isAuth = true
    return (
        isAuth? <Outlet/>: <Navigate to={MAIN_ROUTE}/>
    )
}