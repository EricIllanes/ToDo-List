import { useDispatch, useSelector } from "react-redux";
import { useState } from "react"
import { CrearTarea } from "../../Redux/actions";
import { BorrarTarea } from "../../Redux/actions";
import { EditarTarea } from "../../Redux/actions";
import { CompletarTarea } from "../../Redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { } from "@fortawesome/free-brands-svg-icons"  //prefijo fab
import { faBell } from "@fortawesome/free-solid-svg-icons"   //prefijo fas



function About() {


    return (
        <div>
            <button><i class="fas fa-bell"></i></button>
        </div>
    )
}

export default About