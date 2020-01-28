const initialState = {
    friends: []
}

export function manageFriends(state = initialState, action){
    switch(action.type){
        case "ADD_FRIEND":
            return {...state, friends: [...state.friends, action.friend]}
            break;
        case "REMOVE_FRIEND":
            let foundIndex = null
            state.friends.find((friend, i) => {
                friend.id == action.id ? foundIndex = i : null
            })
            return foundIndex ? {...state, friends: [...state.friends.slice(0, foundIndex), ...state.friends.slice(foundIndex+1)]} : state
            break;
        default:
            return state
    }
}
