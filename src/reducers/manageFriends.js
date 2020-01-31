export function manageFriends(state, action){
	switch(action.type) {
		case "ADD_FRIEND":
			return {
				...state,
				friends: [...state.friends, action.friend]
			}
			break;
		case "REMOVE_FRIEND":
			let tempFriends = state.friends
			
			return {
				...state,
				friends: tempFriends.filter((friends) => {return friends.id !== action.id})
			}
			break;
		default:
			return state;
	}
}
