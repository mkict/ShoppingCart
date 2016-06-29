import * as ActionType from './ActionTypes';

export function addItemToCart(item){
	return{
		type: ActionType.ADD_ITEM_TO_CART,
		item: item,
		id: item.id,
		amount: item.amount
	};
}

export function removeItemFromCart(id){
	return{
		type: ActionType.REMOVE_ITEM_FROM_CART,
		id: id
	};
}
