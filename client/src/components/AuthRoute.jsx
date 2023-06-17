import { Navigate, Outlet } from "react-router-dom"

export default function AuthRoute(){
    const isAuth = true
    return (
        isAuth? <Outlet/>: <Navigate to={"/"}/>
    )
}