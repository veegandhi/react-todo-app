import React, { Component } from 'react';
import TodoList from  '../todo-list/todo-list';
import * as Actions from  '../todo-list/actions';
import TodoStore from  '../../store/TodoStore';
import _ from  'lodash';

export  default class Main extends Component {
	constructor()
	{
		super();
		this.state = {
			todos : TodoStore.getAll()
		};
	}

	componentWillMount(){
		TodoStore.on("change" , () => {
			this.setState({
				todos : TodoStore.getAll()
			})
		})
	}

	render(){
		return(
			<div>
				<TodoList  
					todos={ this.state.todos }
					createTask={ this.createTask.bind(this) }
					toggleEditMode={ Actions.toggleEditMode.bind(this) }
					toggleTask={ Actions.toggleTask.bind(this) }
					saveTask={ Actions.saveTask.bind(this) }
					deleteTask={ Actions.deleteTask.bind(this) }
				/>
			</div>	
		);
	}

	createTask(task){
		const foundTodo = _.find(this.state.todos, todo => todo.task === task);
		if(foundTodo) return;

		Actions.createTask(task);
	}
}