import {createStore} from 'redux';
import {Reducers} from '../reducers/Reducers';

export default function(){
  var store = createStore(Reducers);
  return store;
}
