import React from 'react';
import { connect } from 'react-redux';
import { removeItemFromCart, increaseItem, DecreaseItem, checkOutFromCart, postItem } from '../actions/CartAction';
import CartItemList from '../components/CartItemList';
import CartItem from '../components/CartItem';
import Promise from 'promise';

function mapDispatchToProps(dispatch) {
    return {
        removeItem: (item) => dispatch(removeItemFromCart(item)),
        increaseItem: (item) => dispatch(increaseItem(item)),
        DecreaseItem: (item) => dispatch(DecreaseItem(item)),
        checkOutFromCart: (items) => dispatch(checkOutFromCart(items)),
        postItem: (items) => dispatch(postItem(items))
    };
}

function mapStateToProps(state) {
    return {
        cartItem: state.cartItem,
        item: state.item
    };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class CartList extends React.Component {

    static contextTypes = {
        store: React.PropTypes.object
    };

    handleRemoveClick(v) {
        this.props.removeItem(v);

    }

    handleIncreaseClick(e) {
        this.props.increaseItem(e);
    }

    handleDecreaseClick(e) {
        this.props.DecreaseItem(e);
    }

    handleCheckOutClick(items) {
        var sequence = Promise.resolve("success");
        sequence.then(() => this.props.checkOutFromCart(items)).then(()=> this.props.postItem(this.props.item));

    }

    render() {
        return (
            <div>
			<button onClick={this.handleCheckOutClick.bind(this,this.props.cartItem)}>CheckOut</button>
				<CartItemList>
	            	{this.props.cartItem.map((v,i)=>
	                	<CartItem name={v.name} amount={v.amount} key={i} 
	                	onClickIncrease={()=>this.handleIncreaseClick(v)} 
	                	onClickDecrease={()=>this.handleDecreaseClick(v)}
	                	onClick={()=>this.handleRemoveClick(v)}/>
	            	)}
	        	</CartItemList>

			</div>
        );
    }
}
