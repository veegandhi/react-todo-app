import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher';
import _ from  'lodash';

class TodoStore extends EventEmitter { 
	constructor(){
		super();

		this.todos = [{
			task :  'Complete React tutorial',
			isCompleted : false,
			isEditing : false
		},
		{
			task :  'Create  a  react app',
			isCompleted : true,
			isEditing : false 
		}];
	}

	createTask(task){
		this.todos.push({
			task,
			isCompleted : false,
			isEditing : false
		});
		this.emit("change");
	}
	saveTask(task){
		const { newTask, oldTask } = task;
		const foundTodo = _.find(this.todos, todo => todo.task === oldTask);
		
		foundTodo.task = newTask;
		foundTodo.isEditing = !foundTodo.isEditing;
		this.emit("change");
	}
	toggleEditMode(task){
		const foundTodo = _.find(this.todos, todo => todo.task === task);	
		foundTodo.isEditing = !foundTodo.isEditing;	
		this.emit("change");
	}
	changeCompleted(task){
		const foundTodo = _.find(this.todos, todo => todo.task === task);

		foundTodo.isCompleted = !foundTodo.isCompleted;
		this.emit("change");
	}
	deleteTask(task){
		_.remove(this.todos, todo => todo.task === task);

		this.emit("change");
	}

	getAll(){
		return this.todos;
	}

	handleAction(action){
		switch(action.type){
			case "CREATE_TODO" : {
				this.createTask(action.value);
				break;
			}
			case "SAVE_TODO" : {
				this.saveTask(action.value);
				break;
			}
			case "DELETE_TODO" : {
				this.deleteTask(action.value);
				break;
			}
			case "TOGGLE_TODO" : {
				this.changeCompleted(action.value);
				break;
			}
			case "CHANGE_TODO_MODE" : {
				this.toggleEditMode(action.value);
				break;
			}
			default : return;
		}
	}
}

const todoStore = new TodoStore();
Dispatcher.register(todoStore.handleAction.bind(todoStore));
export default todoStore;