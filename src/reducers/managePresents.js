const initialState = {
    numberOfPresents: 0
}

export function managePresents(state = initialState, action){
    switch(action.type){
        case "INCREASE": 
            return {...state, numberOfPresents: state.numberOfPresents + 1}
            break;
        default:
            return state
    }
}
