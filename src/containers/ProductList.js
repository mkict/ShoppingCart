import React from 'react';
import {connect} from 'react-redux';

function mapStateToProps(state){
	return {
		id: state.id
	};
}

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'ProductList';
    }
    render() {
        return <div>ProductList</div>;
    }
}

export default ProductList;
