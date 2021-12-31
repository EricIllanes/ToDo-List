
import { Link } from "react-router-dom";
import "./NavBar.css"


export default function NavBar() {
    return (
        <header className="navbar">
            <div className="botonesnav">

                <Link to="/" ><button className="botonnavbar">Home</button></Link>
                <Link to="deletetask" ><button className="botonnavbar">Tareas Eliminadas</button></Link>
                <Link to="about" ><button className="botonnavbar">About</button></Link>
            </div>
            <div className="textoimg">
                <img src="https://cdn-icons-png.flaticon.com/512/2132/2132707.png" alt="logo" className="logo1"></img>
                <h1 className="titulo"> Lista de Tareas</h1>
                <img src="https://cdn-icons-png.flaticon.com/512/2132/2132707.png" alt="logo" className="logo2"></img>
            </div>
        </header>


    )
}