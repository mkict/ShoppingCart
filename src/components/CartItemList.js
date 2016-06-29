import React from 'react';
import Item from './CartItem';

export default class CartItemList extends React.Component {
    render() {
        return (
        	<ul className="cartItem-list">
        		{this.props.children}
        	</ul>
        );
    }
}