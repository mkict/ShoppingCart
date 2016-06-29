import React from 'react';
import ItemList from '../components/ItemList';
import Item from '../components/Item';
import {connect} from 'react-redux';
import {addItemToCart} from '../actions/CartAction';

function mapStateToProps(state){
    return {
        item: state.item,
        cartItem: state.cartItem
    };
}

function mapDispatchToProps(dispatch){
    return {
        addItemToCart: (item)=> dispatch(addItemToCart(item))
    };
}

@connect(mapStateToProps,mapDispatchToProps)
export default class ProductList extends React.Component {
 static contextTypes = {
      store: React.PropTypes.object
 };

 addItemToCart(v){
    this.props.addItemToCart(v);
 }

 render() {
    return (
        <ItemList>
            {this.props.item.map((v,i)=>
                <Item id={v.id} key={i} onClick={()=>this.addItemToCart(v)}/>
            )}
        </ItemList>

    )
  }
}
    
