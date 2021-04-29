import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom'; 
import styled from 'styled-components';

import { routes } from 'main/routes';

import './App.scss';

const AppWrap = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  flex-direction: column;
`;

function App () {
    return (
        <AppWrap>
            <h1 className="App-title">
            ERC-721
            </h1>
            <div className="App-route">
                <Switch>
                    {routes.map((route, index) => (
                    <Route
                        key={index}
                        {...route}
                    />
                    ))}
                </Switch>
            </div>
        </AppWrap>
    );
}

export default App;
