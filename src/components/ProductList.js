import React from 'react';
import createStore from '../store/store';
import Item from './Item';
import {connect} from 'react-redux';


function mapDispatchToProps(dispatch){
	return{
		addItem: (id)=> dispatch(addAction(id)),
   		removeItem: (id)=> dispatch(removeAction(id))
	};
}

function mapStateToProps(state){
	return {
		id: state.id
	};
}

@connect(mapStateToProps,mapDispatchToProps)
export default class ProductList extends React.Component {
	static contextTypes = {
	  store: React.PropTypes.object
	};

	constructor(props,context){
		super(props);
		this.state = {
			id: []
		}
	}

	ClickHandle(e){
		 this.props.addItem(e.target.value);
	}
	HandleRemove(e){
		this.props.removeItem(e.target.value);
	}

    render() {
        return (<div>
        		<button onClick = {this.ClickHandle.bind(this)} value = "1">ClickHere1</button>
        		<button onClick = {this.ClickHandle.bind(this)} value = "2">ClickHere2</button>
        		<button onClick = {this.ClickHandle.bind(this)} value = "3">ClickHere3</button>
        		<Item></Item>
        		<ShopList id= {this.props.id}></ShopList>
        	</div>);
    }
}

class ShopList extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div>
				{this.props.id.map((v)=> <li>{v}<input type="text"></input><button>X</button></li>)}
			</div>
		);	
	}
}