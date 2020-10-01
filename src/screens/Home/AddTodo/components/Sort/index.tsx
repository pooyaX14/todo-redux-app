import React from 'react';
import Button from '../../../../../core/components/Button';
import { Task } from '../../../store/types';
import {compareValues } from './utils/sort';

interface Props {
    todos: Array<Task>
    syncTodos: (todos: Array<Task>) => void;
}

const Sort = (props: Props) => {
    const { syncTodos, todos } = props;
    
    const sorthandleClick = (list: Array<Task>, sortKey: keyof Task) => (e : any) => {
        e.preventDefault();
        const sortedList = list.sort(compareValues(sortKey));
        syncTodos(sortedList)
    }

    return (   
        <Button 
            type="button"
            title="Sort" 
            onClick={ sorthandleClick(todos, 'task')} 
        />
    );
}

export default Sort;