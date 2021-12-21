import React, {Component} from 'react';
import {Facebook, Github, Twitter, YouTube} from "../AllSvgs";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 2rem;
  left: 2rem;

  z-index: 3;

  & > *: not(: last-child) {
  margin: 0.5rem 0;
}
`
const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${props => props.theme.text};
`
const SocialIcons = () => {
    return (
        <Icons>
            <div>
                <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname: "https://github.com/kanitmann"}}>
                    <Github width={25} height={25} fille={'currentColor'}></Github>
                </NavLink>
            </div>
            <div>
                <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname: "https://twitter.com/mannkanit"}}>
                    <Twitter width={25} height={25} fille={'currentColor'}></Twitter>
                </NavLink>
            </div>
            <div>
                <NavLink style={{color: 'inherit'}} target="_blank"
                         to={{pathname: "https://wakatime.com/@kanitmann"}}>
                    <Facebook width={25} height={25} fille={'currentColor'}></Facebook>
                </NavLink>
            </div>
            <div>
                <NavLink style={{color: 'inherit'}} target="_blank" to={"/"}>
                    <YouTube width={25} height={25} fille={'currentColor'}></YouTube>
                </NavLink>
            </div>
            <Line/>
        </Icons>
    )
}

export default SocialIcons;