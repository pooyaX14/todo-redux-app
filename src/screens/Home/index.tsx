import React from 'react';
import { connect } from 'react-redux';

import Header from '../../core/components/Header';
import AddTodo, { TodoActions } from './AddTodo';
import TodoList from './TodoList';

import { StateProps } from '../../globalStore/types'
import { toggleTodo, sortTodos, addTodo, moveUpTodos, moveDownTodo } from './store/action';
import { getTodoList } from './store/selector';
import { Task } from './store/types';

interface Props {
    todos: Array<Task>;
    addTodo: (title: string) => void;
    toggleTodo: (id: number) => void;
    sortTodos: (todos: Array<Task>) => void;
    moveUpTodos: (id: number) => void;
    moveDownTodo: (id: number) => void;
}

function Home(props: Props) {
    const {
        todos,
        addTodo,
        sortTodos,
        toggleTodo,
        moveUpTodos,
        moveDownTodo
    } = props;
    
    return (
        <>
            <Header title="Tasks" size="medium" />
            <AddTodo
                onAddTodo={addTodo}
                todos={todos}
                actions={[TodoActions.SORT]}
                syncTodos={sortTodos} />
            <TodoList
                todos={todos}
                toggleTodo={toggleTodo}
                moveUpTodos={moveUpTodos}
                moveDownTodo={moveDownTodo}
            />
        </>
    );
}

function mapStateToProps(state: StateProps) {
    return {
        todos: getTodoList(state)
    }
}



export default connect(mapStateToProps, {
    addTodo: addTodo,
    sortTodos: sortTodos,
    toggleTodo: toggleTodo,
    moveUpTodos: moveUpTodos,
    moveDownTodo: moveDownTodo
})(Home);