import { Link, useNavigate  } from "react-router-dom"
import { useState } from "react";
import authenficate from "../css/authenficate.css"

export default function Authenficate() {
    <div className="contianer">
        <form action="" className="register">
            <label htmlFor="">Логин</label>
            <input type="text" />
            <label htmlFor="">Пароль</label>
            <input type="text" />
            <label htmlFor="">Повторите пароль</label>
            <input type="text" />
            <button>Зарегистрироваться</button>
        </form>
        <form action="" className="login">
            <label htmlFor="">Логин</label>
            <input type="text" />
            <label htmlFor="">Пароль</label>
            <input type="text" />
            <button>Войти</button>
        </form>
    </div>
}