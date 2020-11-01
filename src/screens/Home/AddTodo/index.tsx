import React, { useState } from 'react';
import Input from '../../../core/components/Input';
import { Error } from '../../../core/components/Input/utils/validators';
import Button from '../../../core/components/Button';
import styled from 'styled-components';
import { Task } from '../store/types';
import Sort from './components/Sort';

export enum TodoActions {
    SORT = "SORT"
}

interface Props {
    onAddTodo: (title: string) => void;
    syncTodos: (todos: Array<Task>) => void;
    todos: Array<Task>
    actions: TodoActions[];
}

function AddTodo(props: Props) {
    const [content, setInputValue] = useState("");
    const [isDisabled, disableAdd] = useState(false);

    function mapToAction(action: TodoActions, index: number) {
        switch(action) {
            case TodoActions.SORT:
                return <Sort
                    todos={props.todos}
                    syncTodos={props.syncTodos}
                    key={index}
                />;
            default:
                return null;
        }
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(e.target.value);
    }

    function handleError(error: Error | null) {
        if (error) {
            disableAdd(true);
        } else {
            disableAdd(false);
        }
    }
    
    function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        content && props.onAddTodo(content)
        setInputValue("")
    }

    return (
        <Row className="pure-g pure-form">
            <div className="pure-u-3-5">
                <Input
                    placeholder="Add a task"
                    value={content}
                    onChange={handleChange}
                    onError={handleError}
                />
            </div>
            <Actions className="pure-u-2-5">
                <Button
                    type="button"
                    id="addTodo"
                    title="Add Todo"
                    onClick={handleClick}
                    disabled={isDisabled}
                />
                {
                    props.actions.map(mapToAction)
                }
            </Actions>
        </Row>
    );
}

export default AddTodo;

const Row = styled('form')`
    justify-content: center;
    margin-top: 20px;
`;

const Actions = styled.div`
    > button {
        margin-left: 20px;
    }
`;