export const ADD_ACTION = 'ADD_ACTION';
export const REMOVE_ACTION = 'REMOVE_ACTION';
export const CHANGE_ACTION = 'CHANGE_ACTION';

export function addAction(id){
	return{
		type: ADD_ACTION,
		id: id,
		amount: 1
	};
}

export function removeAction(id){
	return{
		type: REMOVE_ACTION,
		id: id
	}
}

export function changeAction(id, amount){
	return{
		type: CHANGE_ACTION,
		amount: amount
	}
}