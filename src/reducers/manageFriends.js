export function manageFriends(state, action){

    switch(action.type) {
        case 'ADD_FRIEND': 
            return {
                friends: [...state.friends, action.friend]
            }
        case 'REMOVE_FRIEND':
            let copyOfFriends = [...state.friends]
            let newArr = copyOfFriends.filter(function(value, index, arr) {
                return value.id !== action.id
            })
            return {
                friends: newArr
            }
        default: 
            return state; 

    }

}
