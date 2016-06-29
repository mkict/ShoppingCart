import React from 'react';

class Item extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <li>{this.props.id} <button onClick={this.props.onClick} >Add</button> </li>;
    }
}

export default Item;
