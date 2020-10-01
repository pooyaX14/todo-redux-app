import React from 'react';
import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import styled from 'styled-components';

import './App.css';
import Home from './screens/Home';

function App() {
    return (      
		<StyledApp>
			<Switch>                     
				<Redirect from="/" to="/tasks" exact/>
				<Route path="/" component={Home}/>             
			</Switch>
		</StyledApp>
    );
}

const StyledApp = styled.div`
  width: 1000px;
  height: 100vh; 
  margin: 20px auto;

`
export default App;
