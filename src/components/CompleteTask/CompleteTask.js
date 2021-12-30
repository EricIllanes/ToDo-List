import { useSelector } from "react-redux";
import "./CompleteTask.css"

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



