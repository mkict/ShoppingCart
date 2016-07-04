import React from 'react';

class CartItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <li>{this.props.name} <button onClick={this.props.onClickDecrease}> - </button>
        	{this.props.amount} <button onClick={this.props.onClickIncrease}>+</button>
        	<button onClick={this.props.onClick} >X</button> </li>;
    }
}

export default CartItem;
