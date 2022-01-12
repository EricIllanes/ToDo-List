import { Link } from "react-router-dom";
import "./NavBar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { } from "@fortawesome/free-brands-svg-icons"  //prefijo fab
import { } from "@fortawesome/free-solid-svg-icons"   //prefijo fas


export default function NavBar() {
    return (
        <header className="header">

            <h1 className="titulo"> Lista de Tareas</h1>

            <nav className="navbar">
                <div className="botonesnav">

                    <Link to="/" ><button className="botonnavbar">Home</button></Link>
                    <Link to="deletetask" ><button className="botonnavbar">Tareas Eliminadas</button></Link>
                    <Link to="about" ><button className="botonnavbar">About</button></Link>
                </div>
            </nav>

        </header>


    )
}