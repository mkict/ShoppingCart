import React from 'react';
import ProductList from './ProductList';
import CartList from './CartList';
import {Provider} from 'react-redux';
import createStore from '../store/store';

const store = createStore();

export default class Application extends React.Component {
    render() {
        return (
        	<Provider store = {store}>
        		<div>
        			<ProductList/>
        			<CartList/>
        		</div>
        	</Provider>
        );
    }
}
