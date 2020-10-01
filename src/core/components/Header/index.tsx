import React from 'react';
import styled from 'styled-components';

interface Props {
    title: string; 
    size?: string;
}
  
function Header(props: Props) {
    const { size, title } = props;
    return (     
        <HeaderStyle theme={{size: size }}>
            {title}
        </HeaderStyle>
    );
}

const HeaderStyle = styled.header`
    margin-top: 10px;
    padding: 10px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    font-size: ${ props => ( props.theme.size === "medium"? "36px" : "40px" )};
    color: #444444;
`;

export default Header;
