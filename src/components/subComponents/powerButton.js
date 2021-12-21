import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import {Powerbtn} from '../AllSvgs';

const Power = styled.button`
  position: fixed;
  top: 4rem;
  left: 50%;
  transform: translate(-50%, 0);

  background-color: #FCF6F4;
  padding: 0.2rem;
  padding-top: 0.4rem;
  border-radius: 50%;
  border: 3px solid #2a2a2a;
  width: 2.5rem;
  height: 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;

  cursor: pointer;

  &:hover {
    background-color: rgba(0, 255, 0, 0.4);
    box-shadow: 0 0 8px 6px rgba(0, 255, 0, 0.2);
  }

  & > *::first-child {
    text-decoration: none;
    color: inherit;
  }

`

const powerButton = () => {
    return (
        <Power>
            <NavLink to="/">
                <Powerbtn width={24} height={24} fiull='currentColor'/>
            </NavLink>
        </Power>
    );
}


export default powerButton;