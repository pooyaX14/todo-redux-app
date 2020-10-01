import { TaskScreenStateProps } from "./types";
import { TaskActionTypes } from './actionTypes';

export const taskScreenStateProps: TaskScreenStateProps = {
    tasks: [],
}

export function todoScreenReducer(
    state: TaskScreenStateProps = taskScreenStateProps,
    action: any
): TaskScreenStateProps {
    switch (action.type) {
        case TaskActionTypes.ADD_TODO_SUCCESS: 
            const { id, task } = action.payload;
            return {
                ...state,
                tasks: [
                    {id, task, isCompleted: false},
                    ...state.tasks
                ]
            };
        case TaskActionTypes.TOGGLE_TODO_SUCCESS: 
            const updateTodos = state.tasks.map(todo =>
                todo.id === action.payload.id ? { ...todo, isCompleted: !todo.isCompleted } : todo
            )
            return {
                ...state,
                tasks: updateTodos
            };
        case TaskActionTypes.SORT_TODO_SUCCESS: 
            return {
                ...state,
                tasks: [...action.payload.todos]
            }
        default:
            return state;
    }
}


