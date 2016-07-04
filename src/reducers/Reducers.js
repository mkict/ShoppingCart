import * as ActionType from '../actions/ActionTypes';
// bug : 7 to 1
export const initialState = { item: [], cartItem: [] };
export function Reducers(state = initialState, action) {
    switch (action.type) {
        case ActionType.CHECK_OUT_FROM_CART:
        function checkOut(v,i){
            var item = action.items.find((value) => value.id === v.id );
           if(item){
                return {...v,amount: (v.amount - item.amount)};
           }
           return v;
        }
        var temp = state.item.map(checkOut);
          return{
            ...state,
            item: temp,
            cartItem: initialState.cartItem
          };
        case ActionType.ADD_ITEM:
          return {
            ...state,
            item:action.items
          };
        case ActionType.ADD_ITEM_TO_CART:
            var item = state.cartItem.find((v) => v.id === action.id);
            if (item) {
                return {...state };
            }
            return {
                ...state,
                cartItem: [...state.cartItem, { id: action.id, amount: 1 ,name: action.name}]
            };
        case ActionType.REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cartItem: [...state.cartItem.filter((v, i) => (v != action.item))]
            };
        case ActionType.INCREASE_ITEM_IN_CART:

            function checkReturn(v, i) {
                if (v.id === action.id) {
                    return {...v,amount:v.amount+1};
                }
                return v;
            }

            var itemAmount =  state.item.find((v) => v.id == action.id);
            if(action.amount>= itemAmount.amount){
              return {...state};
            }
            return {
                ...state,
                cartItem: [...state.cartItem.map(checkReturn)]
            };
         case ActionType.DECREASE_ITEM_IN_CART:
            function checkReturn(v, i) {
                if (v.id === action.id) {
                    return {...v,amount: v.amount-1};
                }
                return v;
            }
            if(action.amount=== 1){
              return {...state};
            }
            return {
                ...state,
                cartItem: [...state.cartItem.map(checkReturn)]
            };
        default:
            return state
    }
}
