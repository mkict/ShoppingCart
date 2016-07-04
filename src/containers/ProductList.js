import React from 'react';
import ItemList from '../components/ItemList';
import Item from '../components/Item';
import { connect } from 'react-redux';
import { addItemToCart, fetchItems } from '../actions/CartAction';

function mapStateToProps(state) {
    return {
        item: state.item,
        cartItem: state.cartItem
    };
}

function canAdd(id) {
    let t = this.props.item.find((v) => v.id == id);
    let ct = this.props.cartItem.find((v) => v.id == id);
    if (!ct) {
        if (t.amount <= 0) {
            return false;
        } else {
            return true;
        }
    }else{
        return t.amount > ct.amount;
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addItemToCart: (item) => dispatch(addItemToCart(item)),
        fetchItems: () => dispatch(fetchItems())
    };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class ProductList extends React.Component {
    static contextTypes = {
        store: React.PropTypes.object
    };

    addItemToCart(v) {
        this.props.addItemToCart(v);
    }

    componentDidMount() {
        this.props.fetchItems();
    }

    render() {
        let _canAdd = canAdd.bind(this);
        return (
            <ItemList>
            {this.props.item.map((v,i)=>
                <Item name={v.name} key={i} onClick={()=>this.addItemToCart(v)} canAdd={_canAdd(v.id)}/>
            )}
        </ItemList>

        )
    }
}
