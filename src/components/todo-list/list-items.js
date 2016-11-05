import React, { Component } from 'react';

export  default class ListItems extends Component {
	renderTask(){
		const { isEditing, isCompleted, task, toggleTask } = this.props;
		const taskStyle = {
			color : isCompleted ? 'green' : 'red',
			cursor : 'pointer'
		};
		
		if(isEditing) { 
			return(
				<td>
					<form onSubmit={ this.saveEditedTask.bind(this) }>
						<input ref="editedTask" defaultValue={ task } />
					</form>
				</td>
			);
		}
		return(
			<td style={ taskStyle } onClick={ toggleTask.bind(this, task) }>
				 { task } 
			</td>
		);
	}
	renderItems(){
		const { task } = this.props;
		if(this.props.isEditing){
			return(
				<td>
					<button onClick={ this.saveEditedTask.bind(this) }>Save</button>
					<button onClick={ this.props.toggleEditMode.bind(this, task) }>Cancel</button>
				</td>
			)
		}

		return(
			<td>
				<button onClick={ this.props.toggleEditMode.bind(this, task) }>Edit</button>
				<button onClick={  this.props.deleteTask.bind(this, task) }>Delete</button>
			</td>
		)
	}
	render(){
		return(
			<tr>
				{ this.renderTask() }
				{ this.renderItems() }	
			</tr>
		)
	}
	//Local Methods
	saveEditedTask(e){
		e.preventDefault();
		
		const oldTask = this.props.task;
		const newTask = this.refs.editedTask.value;
		this.props.saveTask(newTask,oldTask);
	}
}