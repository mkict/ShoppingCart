import React from 'react';
import {connect} from 'react-redux';
import {removeItemFromCart} from '../actions/CartAction';
import CartItemList from '../components/CartItemList';
import CartItem from '../components/CartItem';

function mapDispatchToProps(dispatch){
    return{
        removeItem: (item)=> dispatch(removeItemFromCart(item))
    };
}

function mapStateToProps(state){
    return {
        cartItem: state.cartItem
    };
}

@connect(mapStateToProps,mapDispatchToProps)
export default class CartList extends React.Component{
	
	static contextTypes = {
      store: React.PropTypes.object
    };

	handleRemoveClick(v){
		console.log(v);
        this.props.removeItem(v);

	}

	render(){
		return(
			<div>
				<CartItemList>
	            	{this.props.cartItem.map((v,i)=>
	                	<CartItem id={v.id} key={i} onClick={()=>this.handleRemoveClick(v)}/>
	            	)}
	        	</CartItemList>
			</div>
		);	
	}
}