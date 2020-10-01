import React, { useState }  from 'react';
import styled from 'styled-components';
import addGray from './img/add-gray.png';
import addBlue from './img/add-blue.png';
import './styles/index.css';

import { Error, validateInputField } from './utils/validators';

interface Props {
    value: string; 
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onError?: (error: Error | null) => void;
    minLength?: number;
    maxLength?: number;
}
  
const Input = (props: Props) => {
    const [errorMessage, setError] = useState("");
    const {
        value,
        onChange,
        onError,
        placeholder,
        minLength = 2,
        maxLength = 20
    } = props;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const validationResult = validateInputField(minLength, maxLength, e.target.value);
        if (validationResult) {
            setError(validationResult.message);
            onError && onError(validationResult.type);
            
        } else {
            setError("");
            onError && onError(null);
        }
        onChange(e);
    }

    return (  
        <Container className="pure-control-group">
            <StyledImage src={errorMessage ? addGray : addBlue}/>
            <StyledInput 
                type="text"
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
                className="pure-input-1"
                minLength={minLength}
            />
            {
                errorMessage &&
                <Message>
                    {errorMessage}
                </Message>
            }
        </Container>
       
    );
}

export default Input;

const Container = styled.div`
    position: relative;
`;

const StyledInput = styled.input`
    font-size: 125%;
    color: #0082D4;
`;

const StyledImage = styled.img`
    position: absolute;
    width: 20px;
    top: 12px;
    left: 12px;
`;

const Message = styled.header`
    margin-top: 10px;
    font-family: 'Open Sans', sans-serif;
    font-size: "30px";
    color: #c22a22;  
`;