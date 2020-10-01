import React, { useState } from 'react';
import styled from 'styled-components';
import './styles/index.css';
interface Props  {
    index: number;
    text: string;
    isCompleted?: boolean;
    onTodoToggle: (id: number) => void;
}


function TodoItem(props: Props) {
    const [isChecked, toggleCheck] = useState(false);
    const {
        index,
        isCompleted,
        text,
        onTodoToggle,
    } = props;

    const handleClick = (id: number) => () => {
        onTodoToggle(id);
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        toggleCheck(event.currentTarget.checked);
    }
   
    return (
        <StyledLabel
            htmlFor={`multi-terms${index}`}
            className="pure-checkbox"
            isCompleted={isCompleted}
            onClick={handleClick(index)}
        >
            <StyledCheckbox
                type="checkbox"
                id={`multi-terms${index}`}
                value={text}
                checked={isCompleted}
                onChange={handleChange}
            />
            <span>{text}</span>
        </StyledLabel>
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
