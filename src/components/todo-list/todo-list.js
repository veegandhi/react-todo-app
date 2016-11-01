import React, { Component } from 'react';
import ListHeader from  './list-header';
import ListItems from  './list-items';
import _ from  'lodash';

export  default class Todolist extends Component {
	renderItems() {
		const todos = this.props.todos;
		return (
			_.map(todos, ( todo , index ) => <ListItems key={ index }  {...todo} />)
		);
	}
	render(){
		return(
			<table> 
				<ListHeader />		
				{ this.renderItems() } 		
			</table>
		);
	}
}