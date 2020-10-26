import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    size?: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    disabled?: boolean | undefined;
    className?: string;
}

function Button(props: Props) {
    const { disabled, title, onClick, className } = props;

    const buttonClass =
        classNames('pure-button', (disabled
            ? "pure-button-disabled"
            : "pure-button-primary")
        );
    return (
        <StyledButton
            className={`${buttonClass} ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {title}
        </StyledButton>
    );
}

const StyledButton = styled.button<{disabled: boolean | undefined}>`
    font-size: 125%; 
    background-color: ${(props) => !props.disabled ? "#0082D4" : "" };
`;

export default Button;