export function manageFriends(state, action){

        switch (action.type) {
            case "ADD_FRIEND":
                let newState = {...state},
                    newFriends = [...newState.friends,action.friend]
                    console.log({...state,friends: newFriends});
                return {...state,friends: newFriends}
            case "REMOVE_FRIEND":
                let newStateFriends = [...state.friends].filter(friend => friend.id !== action.id)
                console.log(newStateFriends);
                return  {...state,friends:newStateFriends}
            default:
                return state
        }
    
}
