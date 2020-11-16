import React from 'react';
import ReactDOM from 'react-dom'
import styled from 'styled-components';
import Header from './components/Header';
import Profile from './components/Profile';
import GlobalStyle from './theme/GlobalStyle';

const Button = styled.button `
    cursor: pointer;
    background-color: transparent;
    padding: 10px;
    border-radius: 3px;
    color: ${props => (props.primary ? 'red' : 'green')};
    border: ${props => (props.primary ? '2px dotted blue' : '3px solid grey')};
    margin: 0 1em;
    padding: 0.25em 1em;
    transition: 0.5s all ease-out;

    &:hover {
        background-color: palevioletred;
        color: white;
    }
`;


const App = () => {
    return (
        <div>
            <GlobalStyle/>
            <Header />
            <Profile />
        </div>
       
        
    )
};


ReactDOM.render (
    <App/> ,
    document.querySelector('#root')
);

export default App;