import React, { Component } from 'react';
import Particles from 'react-particles-js';
import styled from 'styled-components';

import configLight from "../../config/particlesjs-config-light.json";
import configDark from "../../config/particlesjs-config.json";

const Box = styled.div`
position:absolute;
top:0;
right:0;
bottom:0;
left:0;
z-index:0;
`

const ParticleComponent = (props) => {
    return (
        <div>
            <Box>
                <Particles params={props.theme === 'light' ? configLight : configDark} />
            </Box>
        </div >
    );

}

export default ParticleComponent;