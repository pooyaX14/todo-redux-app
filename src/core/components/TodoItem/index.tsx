import React, { useState } from 'react';
import styled from 'styled-components';
import './styles/index.css';

interface Props  {
    id: number;
    text: string;
    isCompleted?: boolean;
    onTodoToggle: (id: number) => void;
    moveUpTodos: (id: number) => void;
    moveDownTodo: (id: number) => void;
    length: number;
    index: number;
}


function TodoItem(props: Props) {
    const [isChecked, toggleCheck] = useState(false);
    const {
        id,
        index,
        isCompleted,
        text,
        onTodoToggle,
    } = props;

    const handleClick = (id: number) => () => {
        console.log("id is now", id)
        onTodoToggle(id);
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        toggleCheck(event.currentTarget.checked);
    }
   
    const handleUpClick = (index: number) => (e: any) => {

        e = e || window.event;
       
        if (e.target.id === 'up' &&  index !== 0 ) {
            // props.moveUp
            console.log("up is pressed", index)
            props.moveUpTodos(index)
        }
        else if (e.target.id === 'down' && index !== props.length-1) {
            console.log("donw  is::: presses", index)
            props.moveDownTodo(index)
        }
    }

    return (
        <>
            <StyledLabel
                htmlFor={`multi-terms${id}`}
                className="pure-checkbox"
                isCompleted={isCompleted}
                onClick={handleClick(id)}
            >
                <StyledCheckbox
                    type="checkbox"
                    id={`multi-terms${id}`}
                    value={text}
                    checked={isCompleted}
                    onChange={handleChange}
                />
                <span>{text}</span>
            </StyledLabel>
            <span style={{'marginLeft': "20px", display: 'inline-block'}}>
                <button 
                    style={{ 'marginRight': "30px"}} 
                    id="up"
                    onClick={handleUpClick(index)}
                >Up</button>
                <button 
                    id="down" 
                    onClick={handleUpClick(index)}
                >Down</button>
            </span>
        </>
    );
}

export default TodoItem;

const StyledLabel = styled.label<{ isCompleted?: boolean }>`
    text-decoration: ${props => (props.isCompleted ? 'line-through' : 'none')};
`;

const StyledCheckbox = styled.input`
    margin-right: 10px;
    display: inline-block;
    width: 30px;
    height: 30px;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
    outline: 0;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    vertical-align: middle;
`;
