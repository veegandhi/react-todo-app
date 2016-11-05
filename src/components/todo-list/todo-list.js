import React, { Component } from 'react';
import ListHeader from  './list-header';
import ListItems from  './list-items';
import CrearteItem from  './create-item';
import _ from  'lodash';

export  default class Todolist extends Component {
	renderItems() {
		const todos = this.props.todos;
		const props = _.omit(this.props, 'todos');
		return (
			_.map(todos, ( todo , index ) => <ListItems key={ index }  {...todo} {...props} />)
		);
	}
	render(){
		const createItemStyle = { 
			marginTop : 20
		}
		return(
			<div>
				<CrearteItem createTask={ this.props.createTask }/> 
				<table style={ createItemStyle }> 
					<ListHeader />		
					<tbody>
						{ this.renderItems() } 		
					</tbody>
				</table>
			</div>
		);
	}
}