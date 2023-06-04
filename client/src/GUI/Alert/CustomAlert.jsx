import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import customAlert from "./customAlert.css"


export default function CustomAlert(type,message ) {
    switch(type){
        case "succes":
            toast.success(message)
            return
        case "error":
            toast.error(message)
            return
        case "cupon":
            toast.success(message)
            return
        case "invalidCupon":
            toast.warn(message)
            return
        default:
            console.log("Неизвестный код alert")
    }
    
}
