import React, { Component } from 'react';

export  default class CreateItem extends Component {
	render(){
		return(
			<form onSubmit={ this.handleCreate.bind(this) }>
				<input placeholder="Please enter task name" ref="createInput" />
				<button>Save</button>
			</form>
		);
	}

	handleCreate(e) {
		e.preventDefault();

		var newTask = this.refs.createInput.value 
		if(newTask){	
			this.props.createTask(newTask);
			this.refs.createInput.value  = '';
		}
	}
}