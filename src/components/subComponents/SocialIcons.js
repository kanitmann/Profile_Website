import React from 'react';
import {Github, LinkedIn, Twitter, Wakatime} from "../AllSvgs";
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {darkTheme} from "../themes";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 2rem;
  left: 2rem;

  z-index: 3;

  & > *:not(: last-child) {
    margin: 0.5rem 0;
  }
`
const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${props => props.theme.text};
`
const SocialIcons = (props) => {
    return (
        <Icons>
            <div>
                <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname: "https://github.com/kanitmann"}}>
                    <Github width={25} height={25}
                            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}></Github>
                </NavLink>
            </div>
            <div>
                <NavLink style={{color: 'inherit'}} target="_blank"
                         to={{pathname: "https://wakatime.com/@kanitmann"}}>
                    <Wakatime width={25} height={25}
                              fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}></Wakatime>
                </NavLink>
            </div>
            <div>
                <NavLink style={{color: 'inherit'}} target="_blank"
                         to={{pathname: "https://www.linkedin.com/in/kanitmann/"}}>
                    <LinkedIn width={25} height={25}
                              fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}></LinkedIn>
                </NavLink>
            </div>
            <div>
                <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname: "https://twitter.com/mannkanit"}}>
                    <Twitter width={25} height={25}
                             fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}></Twitter>
                </NavLink>
            </div>
            <Line/>
        </Icons>
    )
}

export default SocialIcons;