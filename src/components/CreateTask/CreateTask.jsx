import { useDispatch, useSelector } from "react-redux";
import { useState } from "react"
import { CrearTarea } from "../../Redux/actions";
import { BorrarTarea } from "../../Redux/actions";
import { EditarTarea } from "../../Redux/actions";
import { CompletarTarea } from "../../Redux/actions";
import "./CreateTask.css"


function CreateTask() {
    const dispatch = useDispatch()
    const { createtask, deletetask } = useSelector((state) => state)    // const createtask = useSelector ((state)=> state.createtask)
    const [task, setTask] = useState("")
    const [editTask, setEditTask] = useState("")





    function handleInputChange(event) {
        event.preventDefault()

        setTask(event.target.value)
    }

    function handleInputEdit(event) {
        event.preventDefault()

        setEditTask(event.target.value)

    }


    return (
        <div className="createtask">

            <h3>Escribe tus tareas acá :D</h3>
            <input
                type="text"
                className="tareagregada"
                placeholder="Agregar nueva tarea..."
                onChange={(event) => handleInputChange(event)}
                value={task}
            >
            </input>
            <button
                className="botonestarea"
                onClick={() => {
                    dispatch(CrearTarea({ status: false, task: task, id: createtask.length + 1, edit: false, prevTask: task }))
                    setTask("")    //esto hace que cada vez que se de click se borre todo todito (lo del input)
                }}
            >Agregar Tarea</button>
            <div> {createtask.map((r, index) =>
                <div key={index}>
                    <button
                        className="botoncerrar"
                        onClick={() => {
                            dispatch(BorrarTarea(index))         //
                        }}

                    >X</button>
                    <button
                        onClick={() => {
                            dispatch(EditarTarea())
                            if (r.edit) {
                                dispatch(EditarTarea(index, { ...r, edit: false, task: editTask }))
                                setEditTask("")
                            } else {
                                dispatch(EditarTarea(index, { ...r, edit: true }))
                                setEditTask(r.task)
                            }

                        }}
                    >{r.edit ? "Done" : "Edit"}</button>
                    <button
                        onClick={() => {
                            dispatch(CompletarTarea(index))
                            r.status
                                ? dispatch(EditarTarea(index, { ...r, status: false }))
                                : dispatch(EditarTarea(index, { ...r, status: true }))

                        }}
                    >{r.status ? "Deshacer" : "Complete"}</button>
                    {r.edit
                        ? <input
                            onChange={(event) => handleInputEdit(event)}
                            value={editTask}

                        >
                        </input>

                        : <p
                            key={index}
                            className={r.status
                                ? "completeTask"
                                : "incompleteTask"}
                        >{r.task}</p>}

                </div>)}
            </div>
            <p> Solo editar una tarea a la vez, gracias</p>
        </div>
    )
}

export default CreateTask



// export const mapStateToProps = (state) => {
//     return {
//         createtask: state.createtask
//     }
// }
// export const mapDispatchToProps = (dispatch) => {
//     return {
//         CrearTarea: (payload) => dispatch(CrearTarea(payload))
//     }
// }






    // const [task, setTask] = useState("")
    // const [tarea, setTarea] = useState([])


    // function handleInputChange(event) {
    //     event.preventDefault()
    //     setTask(event.target.value)
    // }
    // function onAgregar() {
    //     setTarea([...tarea, task])
    //     setTask("")
    // }

    // return (
    //     <div className="createtask">

    //         <h3>Escribe tus tareas acá :D</h3>
    //         <input
    //             type="text"
    //             className="tareagregada"
    //             placeholder="Agregar nueva tarea..."
    //             onChange={(event) => handleInputChange(event)}
    //             value={task}
    //         >
    //         </input>
    //         <button
    //             className="botonestarea"
    //         onClick={() => onAgregar()}
    //         >Agregar Tarea</button>
    //         <div> {tarea.map((r, index) => <p key={index}>{r}</p>)}</div>
    //     </div>
    // )

