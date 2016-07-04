import React from 'react';

class Item extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <li>{this.props.name} <button onClick={this.props.onClick}  disabled={!this.props.canAdd} >Add</button> </li>;
    }
}

export default Item;
