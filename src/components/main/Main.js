import React, { Component } from 'react';
import TodoList from  '../todo-list/todo-list';

const todos =[{
	task :  'Complete React tutorial',
	isCompleted : false 
},
{
	task :  'Create  a  react app',
	isCompleted : false 
}]


export  default class Main extends Component {
	constructor()
	{
		super();
		this.state = {
			todos
		};
	}
	render(){
		return(
			<div>
				<TodoList  todos={ this.state.todos }/>
			</div>	
		);
	}
}