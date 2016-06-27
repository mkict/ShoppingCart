import React from 'react';
import Test from '../components/test';
import {Provider} from 'react-redux';
import createStore from '../store/store';

const store = createStore();

export default class Application extends React.Component {
    render() {
        return (
        	<Provider store = {store}>
        		<Test/>
        	</Provider>
        );
    }
}
