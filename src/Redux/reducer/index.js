import { CREATE_TASK, DELETE_TASK, EDIT_TASK, COMPLETE_TASK } from "../actions";

const initialState = {
  createtask: [],
  deletetask: [],
  edittask: [],
  completetask: []

};


function rootReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_TASK:
      return {
        ...state,
        createtask: [...state.createtask, action.payload]
      }
    case DELETE_TASK:
      // state.createtask.splice(action.payload, 0)
      state.deletetask.push(state.createtask.splice(action.payload, 1)) // acá con el splice borra la tarea deseada y hace un pusheo al array de las tareas eliminadas
      return {
        ...state,
        createtask: state.createtask
      }
    case EDIT_TASK:
      // let tareaeditada = state.createtask[action.payload[0]] = action.payload[1]
      let array = state.createtask
      let payload = action.payload

      array[payload[0]] = payload[1]

      return {
        ...state,
        createtask: array
      }
    case COMPLETE_TASK:
      return {
        ...state,
        completetask: action.payload
      }
  }
  return state
}

export default rootReducer



/*

array = [1,2,3,4,5,6]

payload = [1, "tarea2"]


array[payload[0]] = payload[1]






*/