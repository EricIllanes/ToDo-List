import { useSelector } from "react-redux";
import "./CompleteTask.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { } from "@fortawesome/free-brands-svg-icons"  //prefijo fab
import { faBell } from "@fortawesome/free-solid-svg-icons"   //prefijo fas

function CompleteTask() {
    const { completetask } = useSelector((state) => state)

    return (
        <div className="createtask">

            <h3>!Felicidades! Estan son tus tareas ya realizadas:</h3>
            <div> {completetask.map((r, index) => <p key={index}>{r.task}</p>)}</div>
        </div>
    )
}

export default CompleteTask



