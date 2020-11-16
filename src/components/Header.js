// import React, { Component } from 'react';
import styled from 'styled-components';
// import { ReactComponent as Explore } from '../explore.svg';

const Nav = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`;

const NavHeader = styled.div `
  max-width: 1010px;
  padding: 26px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  font-family: sans-serif;
`;

const NavLeft = styled.div `
  width: 33.333%;
  text-align: left;
`;

const NavCenter = styled.div `
  width: 33.333%;
  text-align: center;
`;

const Input = styled.input `
  font-size: 16px;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  color: #262626;
  padding: 7px 33px;
  border-radius: 3px;
  color: #999;
  cursor: text;
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  background: #fafafa;
 
  &:active,
  &:focus {
    text-align: left;
  }
`;

const NavRight = styled.div `
  width: 33.333%;
  text-align: right;
 
  svg {
    margin-right: 20px;
  }
`; 

const MenuLink = styled.a `
    padding: 10px 15px;
    border-radius: 50px;
    border: 1px solid grey;
    outline: none;
    cursor: pointer;
    margin-left: 10px;
    color: black;
    text-decoration: none;
    transition: border ease-in-out 0.2s;

    &:hover {
        border: 1px solid black;
    }
`;

function Header() {
    return (

        <Nav>
            <NavHeader>
                <NavLeft>Stylagram</NavLeft>
                <NavCenter>
                    <Input typeof='text' placeholder='Search for something'></Input>
                </NavCenter>

                <NavRight>
                    <MenuLink href='#'>1</MenuLink>
                    <MenuLink href='#'>2</MenuLink>
                    <MenuLink href='#'>3</MenuLink>

                </NavRight>
            </NavHeader>
        </Nav>

    );
}

export default Header;