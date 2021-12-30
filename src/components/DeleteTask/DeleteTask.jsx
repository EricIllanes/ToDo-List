import { useSelector } from "react-redux";
import "./DeleteTask.css"

function DeleteTask() {
   const { deletetask } = useSelector((state) => state)

   return (
      <div className="createtask">

         <h3>Acá puedes encontrar tus tareas eliminadas:</h3>
         <div> {deletetask.map((r, index) => <p key={index}>{r.task}</p>)}</div>
      </div>
   )
}

export default DeleteTask