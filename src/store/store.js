import {createStore} from 'redux';
import {testReducer} from '../reducers/testReducer';

export default function(){
  var store = createStore(testReducer);
  return store;
}
