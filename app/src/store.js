import { createStore } from 'redux'

const reducer = (state, action) => {
    if(action.type === 'ADD_MESSAGE'){
        return {
            ...state,
            mensaje: action.mensaje
        }
    }
    return state;
}

export default createStore(reducer, { mensaje: ''});