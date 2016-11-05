import Dispatcher from '../../dispatcher' ;

export function createTask(task){
	Dispatcher.dispatch({
		type : "CREATE_TODO" ,
		value : task
	});
}

export function saveTask(newTask, oldTask){
	Dispatcher.dispatch({
		type : "SAVE_TODO" ,
		value : {
			newTask,
			oldTask
		}
	});
}

export function deleteTask(task){
	Dispatcher.dispatch({
		type : "DELETE_TODO" ,
		value : task
	});
}

export function toggleEditMode(task){
	Dispatcher.dispatch({
		type : "CHANGE_TODO_MODE" ,
		value : task
	});
}

export function toggleTask(task){
	Dispatcher.dispatch({
		type : "TOGGLE_TODO" ,
		value : task
	});	
}
