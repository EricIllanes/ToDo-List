import { Link } from "react-router-dom";
import "./NavBar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { } from "@fortawesome/free-brands-svg-icons"  //prefijo fab
import { } from "@fortawesome/free-solid-svg-icons"   //prefijo fas
import { Icon } from '@iconify/react';


export default function NavBar() {
    return (

        <header className="header">
            <head>
                <script defer src="https://kit.fontawesome.com/719cf28918.js" integrity="sha384-sCI3dTBIJuqT6AwL++zH7qL8ZdKaHpxU43dDt9SyOzimtQ9eyRhkG3B7KMl6AO19" crossorigin="anonymous"></script>
                <script defer src="https://kit.fontawesome.com/719cf28918.js" integrity="sha384-7ox8Q2yzO/uWircfojVuCQOZl+ZZBg2D2J5nkpLqzH1HY0C1dHlTKIbpRz/LG23c" crossorigin="anonymous"></script>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Moon+Dance&display=swap" rel="stylesheet" />
                <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>

            </head>

            <h1 className="titulo"> Lista de Tareas</h1>

            <nav className="navbar">
                <div className="botonesnav">
                    <i class="fas fa-home"></i>
                    <Link to="/" ><button className="botonnavbar"><Icon className="home" icon="ant-design:home-filled" /></button></Link>
                    <Link to="deletetask" ><button className="botonnavbar">Tareas Eliminadas</button></Link>
                    <Link to="about" ><button className="botonnavbar">About</button></Link>
                </div>
            </nav>

        </header >


    )
}