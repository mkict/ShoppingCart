import React from 'react';
import Item from './Item';

export default class ItemList extends React.Component {
    render() {
        return (
        	<ul className="item-list">
        		{this.props.children}
        	</ul>
        );
    }
}