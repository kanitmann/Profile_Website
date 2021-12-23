import React, { Component, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import PowerButton from '../subComponents/powerButton';
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import { NavLink } from "react-router-dom";
import { YinYang } from "../AllSvgs";
import Intro from '../Intro';


const MainContainer = styled.div`
  background: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  h2, h3, h4, h5, h6 {
    font-family: 'Karla', sans-serif;
    font-weight: 500;
  }
`

const Container = styled.div`
  padding: 2rem;

`

const Contact = styled(NavLink)`
  color: ${props => props.theme.text};
  position: absolute;
  top: 3rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`

const Blog = styled(NavLink)`
  color: ${props => props.theme.textRgba};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
`

const Work = styled(NavLink)`
  color: ${props => props.click ? props.theme.bodyRgba : props.theme.textRgba};
  position: absolute;
  top: 50%;
  left: 2rem;
  transform: rotate(-90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
`

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
`


const ABOUT = styled(NavLink)`
  color: ${props => props.click ? props.theme.bodyRgba : props.theme.textRgba};
  text-decoration: none;
  z-index: 1;
`

const SKILLS = styled(NavLink)`
  color: ${props => props.theme.textRgba};
  text-decoration: none;
  z-index: 1;
`
const rotate = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`

const Center = styled.button`
  position: absolute;
  top: ${props => props.click ? '85%' : '50%'};
  left: ${props => props.click ? '92%' : '50%'};
  height: ;
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  & > :first-child {
    animation: ${rotate} infinite 1.5s linear;
  }

  & > :last-child {
    display: ${props => props.click ? 'none' : 'inline-block'};
    padding-top: 1rem;
  }
`
const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  background: ${props =>props.theme.textRgba};
  bottom: 0;
  right: 50%;
  width: ${props => props.click ? '50%' : '0%'};
  height: ${props => props.click ? '100%' : '0%'};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;
`

const Home = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <MainContainer>
      <DarkDiv click={click} />
      <Container>
        <PowerButton />
        <LogoComponent theme={click ? 'light' : 'dark'} />
        <SocialIcons theme={click ? 'light' : 'dark'} />

        <Center click={click}>
          <YinYang onClick={() => handleClick()} width={click ? 120 : 200} height={click ? 120 : 200}
            fill={'currentColor'} />
          <span>
            Click Here
          </span>
        </Center>

        <Contact target="_blank" to={{ pathname: "mailto:mannkanit@gmail.com" }}>
          <h3>
            Drop a mail..
          </h3>
        </Contact>
        <Blog to="/blog">
          <h2>
            Blog
          </h2>
        </Blog>
        <Work to="/mywork" click={click}>
          <h2>
            Work
          </h2>
        </Work>
        <BottomBar>
          <ABOUT to="/aboutme" click={click}>
            <h2>
              About
            </h2>
          </ABOUT>
          <SKILLS to="/skills">
            <h2>
              My Skills
            </h2>
          </SKILLS>
        </BottomBar>
      </Container>
      {click ? <Intro /> : null}
    </MainContainer>
  );
}

export default Home;