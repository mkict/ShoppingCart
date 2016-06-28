import React from 'react';
import {addAction} from '../actions/Actions';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Item';
    }
    render() {
        return <div>Item</div>;
    }
}

export default Item;
