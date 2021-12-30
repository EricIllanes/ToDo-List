export const CREATE_TASK = " CREATE_TASK"
export const DELETE_TASK = "DELETE_TASK"
export const EDIT_TASK = "EDIT_TASK"
export const COMPLETE_TASK = "COMPLETE_TASK"



export function CrearTarea(payload) {
    return {
        type: CREATE_TASK,
        payload: payload
    }
}

export function BorrarTarea(index) {

    return {
        type: DELETE_TASK,
        payload: index
    }
}


export function EditarTarea(index, data) {

    return {
        type: EDIT_TASK,
        payload: [index, data]

    }
}


export function CompletarTarea(index) {

    return {
        type: COMPLETE_TASK,
        payload: index

    }
}