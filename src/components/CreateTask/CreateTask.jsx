import React, { Component } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
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



    function handleInputChange(event) {
        event.preventDefault()

        setTask(event.target.value)
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
                    dispatch(CrearTarea(task))
                    setTask("")    //esto hace que cada vez que se de click se borre todo todito (lo del input)
                }}
            >Agregar Tarea</button>
            <div> {createtask.map((r, index) =>
                <div>
                    <button
                        className="botoncerrar"
                        onClick={() => {
                            dispatch(BorrarTarea(index))         //
                        }}

                    > X </button>
                    <button
                        onClick={() => { dispatch(EditarTarea()) }}
                    > Edit </button>
                    <button

                    > Complete </button>
                    <p key={index}>{r}</p>

                </div>)}
            </div>

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

