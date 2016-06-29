import * as ActionType from '../actions/ActionTypes';
import _products from '../api/Product.json';

export const initialState = {id:[],item:[{id:"1",amount:5},{id:"2",amount:5}],cartItem:[]};
export function Reducers(state=initialState, action) {
  switch (action.type) {
    case ActionType.ADD_ITEM_TO_CART:
      var index = state.cartItem.indexOf(action.item);
      if(index!== -1){
        return {...state};
      }
      return {
        ...state,
        cartItem: [...state.cartItem, action.item]
      };
    case ActionType.REMOVE_ITEM_FROM_CART:
      return{
         ...state,
         cartItem:[...state.cartItem.filter((v,i)=>(v!=action.item))]
      };
    default:
      return state
  }
}
