import React, { useState } from 'react';
import {
    Redirect,
    Route,
    Switch,
} from "react-router-dom";
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from "./globalStyles";
import { lightTheme, darkTheme} from './config/theme';
// import Toggle from 'react-toggle';
import './App.css';
import Home from './screens/Home';
import Button from './core/components/Button'

function App() {
    const [theme, setTheme] = useState('light');
    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
        console.log("theme is now", theme);
    }
    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles />
            {/* <button onClick={themeToggler}>Switch Theme</button> */}
            <StyledButton
                type="button"
                title="Toggle Theme"
                onClick={themeToggler}
                />
            <StyledApp>
                <Switch>
                    <Redirect from="/" to="/tasks" exact />
                    <Route path="/" component={Home} />
                </Switch>
            </StyledApp>
        </ThemeProvider>
    );
}

const StyledApp = styled.div`
  width: 1000px;
  height: 100vh; 
  margin: 20px auto;
`
const StyledButton = styled(Button)`
  position: absolute;
  margin-left: 20px;
  background-color: #6eafd7;
`
export default App;
