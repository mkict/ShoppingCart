import * as ActionType from './ActionTypes';
import fetch from 'isomorphic-fetch';

export function fetchItems(items){
	return (dispatch)=>{
		fetch('http://localhost:3000/api/item/all').then((response)=>{
			if (response.status >= 400) {
				throw new Error("Bad response from server");
			}
			return response.json();
		}).then(({result})=>{
			dispatch(addItem(result));
		});
		
	};
}

export function postItem(items){
	return (dispatch)=>{
        fetch('http://localhost:3000/api/item/update', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
    			'Content-Type': 'application/json'
            },
            body: JSON.stringify(items)
        }).then(function(response){
        	return response.json();
        });
	}
}

export function checkOutFromCart(items){
	return{
		type: ActionType.CHECK_OUT_FROM_CART,
		items: items
	};
}

export function addItem(items){
	return {
		type:ActionType.ADD_ITEM,
		items:items
	};
}

export function addItemToCart(item){
	return{
		type: ActionType.ADD_ITEM_TO_CART,
		item: item,
		id: item.id,
		name: item.name
	};
}

export function removeItemFromCart(item){
	return{
		type: ActionType.REMOVE_ITEM_FROM_CART,
		item: item,
		id: item.id,
		amount: item.amount
	};
}

export function increaseItem(item){
	return{
		type: ActionType.INCREASE_ITEM_IN_CART,
		item: item,
		id: item.id,
		amount: item.amount
	};
}

export function DecreaseItem(item){
	return{
		type: ActionType.DECREASE_ITEM_IN_CART,
		item: item,
		id: item.id,
		amount: item.amount
	};
}

