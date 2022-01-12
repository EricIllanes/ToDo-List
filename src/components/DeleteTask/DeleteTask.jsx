import { useDispatch, useSelector } from "react-redux";
import "./DeleteTask.css"
import { recuperarTarea } from "../../Redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { } from "@fortawesome/free-brands-svg-icons"  //prefijo fab
import { faBell } from "@fortawesome/free-solid-svg-icons"   //prefijo fas

function DeleteTask() {
   const dispatch = useDispatch()
   const { deletetask } = useSelector((state) => state)

   return (
      <div>

         <h3>Acá puedes encontrar tus tareas eliminadas:</h3>
         <div>{deletetask.map((r, index) =>
            <div key={index} className="tareas">
               <button
                  className="recuperar"
                  onClick={() => { dispatch(recuperarTarea(index)) }}
               > Recuperar</button>
               <p key={index}>{r.task}</p>
            </div>
         )}</div>

      </div>

   )
}

export default DeleteTask