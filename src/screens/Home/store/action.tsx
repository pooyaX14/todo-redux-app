import { TaskActionTypes } from './actionTypes';
import { Task } from './types';
  
export const success = (actionType: any, data?: any) => {
	return {
		type: actionType,
		payload: {
			data: data
		}
	}
}
export const error = (actionType: any, data?: any) => {
	return {
		type: actionType,
		payload: {
			data: data
		},
		error: true
	}
}

let nextTodoId = 0;
export const addTodoAction = (task: string) => ({
	type: TaskActionTypes.ADD_TODO_SUCCESS,
	payload: {
	  id: ++nextTodoId,
	  task,
	}
});

export const toggleTodoAction = (id: number) => ({
	type: TaskActionTypes.TOGGLE_TODO_SUCCESS,
	payload: {
		id
	}
});

export const sortTodosAction = (sortedTodos: Array<{}>) => ({
	type: TaskActionTypes.SORT_TODO_SUCCESS,
	payload: {
		todos: sortedTodos
	}

})

export function addTodo(task: string) {
	return(dispatch: any) => {
		dispatch(success(TaskActionTypes.ADD_TODO_PENDING));
		return new Promise((resolve, reject) => {

			if(task){
				resolve(dispatch(addTodoAction(task)))
			} else {
				reject(dispatch(error(TaskActionTypes.ADD_TODO_ERROR, task)))
			}

		});
		
	}
}

export function sortTodos(sortedTodos: Task[]) {
	return(dispatch: any) => {
		dispatch(success(TaskActionTypes.SORT_TODO_PENDING));
		return new Promise((resolve, reject) => {
			if(sortedTodos){
				resolve(dispatch(sortTodosAction(sortedTodos)))
			} else {
				reject(dispatch(error(TaskActionTypes.SORT_TODO_ERROR, sortedTodos)))
			}

		});
		
	}
}


export function toggleTodo(id: number) {
	return(dispatch: any) => {
		dispatch(success(TaskActionTypes.TOGGLE_TODO_PENDING));
		return new Promise((resolve, reject) => {
			if(id){
				resolve(dispatch(toggleTodoAction(id)))
			} else {
				reject(dispatch(error(TaskActionTypes.TOGGLE_TODO_ERROR, id)))
			}

		});
		
	}
}
