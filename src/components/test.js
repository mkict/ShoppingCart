import React from 'react';
import {bindActionCreators} from 'redux';
import {testAction,removeAction} from '../actions/testAction';
import {testReducer,initialState} from '../reducers/testReducer';
import createStore from '../store/store';
import {connect} from 'react-redux'

var store = createStore();

function mapDispatchToProps(dispatch){
	return{
		addItem: (id)=> store.dispatch(testAction(id)),
   		removeItem: (id)=> store.dispatch(removeAction(id))
	};
}

function mapStateToProps(state){
	id: store.getState()
}

class test extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			id: []
		}
	}

	componentDidMount() {
	    store.subscribe(()=>{
	    	this.setState(store.getState());
		})  
	}

	ClickHandle(e){
		 this.props.addItem(e.target.value);
		// store.dispatch(testAction(e.target.value));
	}
	HandleRemove(e){
		this.props.removeItem(e.target.value);
		// store.dispatch(removeAction(e.target.value));
	}

    render() {
        return (<div>
        		<button onClick = {this.ClickHandle.bind(this)} value = "1">ClickHere1</button>
        		<button onClick = {this.ClickHandle.bind(this)} value = "2">ClickHere2</button>
        		<button onClick = {this.ClickHandle.bind(this)} value = "3">ClickHere3</button>
        		<ShopList id= {this.state.id}></ShopList>
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



export default connect(mapDispatchToProps)(test)