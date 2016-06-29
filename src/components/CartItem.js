import React from 'react';

class CartItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <li>{this.props.id} <button onClick={this.props.onClick} >X</button> </li>;
    }
}

export default CartItem;
