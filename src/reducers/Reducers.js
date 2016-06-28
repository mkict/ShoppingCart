import {ADD_ACTION,REMOVE_ACTION, CHANGE_ACTION} from '../actions/Actions';
export const initialState = {id:[],amount:{}};

export function Reducers(state=initialState, action) {
  switch (action.type) {
    case ADD_ACTION:
      var index = state.id.indexOf(action.id);
      if(index!== -1){
        return {...state};
      }
      return {
        ...state,
        id: [...state.id, action.id],
      };
    case REMOVE_ACTION:
       state.id.splice(action.id-1,1);
      return{
          state
      };
    default:
      return state
  }
}
