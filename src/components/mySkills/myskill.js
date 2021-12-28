import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../themes';
import styled from 'styled-components';
import { Design, Develop } from '../AllSvgs';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/powerButton';
import ParticleComponent from '../subComponents/ParticleComponent';

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
padding-top:2rem;
`

const Main = styled.div`
border: 2px solid ${props => props.theme.textRgba};
color: ${props => props.theme.textRgba};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 70vh;
z-index: 3;
line-height: 1.5;

font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;
&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.textRgba};
}
cursor:pointer;
overflow:auto;
`

const Title = styled.h2`
display:flex;
justify-content:center;
align-items:center;
font-size:calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.text};
    }
}
&>*:first-child{
margin-right: 1rem;

}
`

const Description = styled.div`
color: ${props => props.theme.textRgba};
font-size: calc(0.3em + 0.7vw);
padding: 0.5rem 0;
${Main}:hover &{
   
        color:${props => props.theme.body};
    
}
ul,p{
    margin-left: 2rem;
}
li::marker{
    color:${props => props.theme.text};
}
li:hover{
    color:${props => props.theme.text};
}
`

class myskill extends Component {
    render() {
        return (
            <div>
                <ThemeProvider theme={lightTheme}>
                    <Box>
                        <LogoComponent />
                        <SocialIcons theme={'dark'} />
                        <PowerButton />
                        <ParticleComponent theme='light' />
                        <Main>
                            <Title>
                                <Develop width={40} height={40} /> Developer
                            </Title>
                            <Description>
                                I'm a Polyglot Programmer from India 👋.
                            </Description>
                            <Description>
                                I love to experiment around and create tools which can be used by everyone on internet.
                            </Description>
                            <Description>
                                <h3> Languages </h3>
                                <br></br>
                                <a href="https://www.c.com/" target="blank"><img height={26} align="center" src="https://img.shields.io/badge/C-E34C0?style=for-the-badge&logo=c&logoColor=white" alt="C" /></a>
                                <a href="https://www.cplusplus.com/" target="blank"><img height={26} align="center" src="https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white" alt="C++" /></a>
                                <a href="https://www.python.org/" target="blank"><img height={26} align="center" src="https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=darkgreen" alt="Python" /></a>
                                <a href="https://www.java.com/" target="blank"><img height={26} align="center" src="https://img.shields.io/badge/Java-B07219?style=for-the-badge&logo=java&logoColor=white" alt="Java" /></a>
                                <a href="https://reactjs.org/" target="blank"><img height={26} align="center" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="reactJS" /></a>
                                <a href="https://html.com" target="blank"><img height={26} align="center" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" /></a>
                                <a href="https://www.css.com/" target="blank"><img height={26} align="center" src="https://img.shields.io/badge/CSS3-F34B7D?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" /></a>
                                <a href="https://www.javascript.com/" target="blank"><img height={26} align="center" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JavaScript" /></a>


                            </Description>
                            <Description>
                                <h3>ML/DL:</h3>
                                <br></br>
                                <a href="https://www.tensorflow.org/" target="blank"><img height={26} align="center" src="https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white" alt="Tensforflow" /></a>
                                <a href="https://numpy.org/" target="blank"><img height={26} align="center" src="https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white" alt="Numpy" /></a>
                                <a href="https://pandas.pydata.org/" target="blank"><img height={26} align="center" src="https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white" alt="Pandas" /></a>
                                <a href="https://opencv.org/" target="blank"><img height={26} align="center" src="https://img.shields.io/badge/opencv-%23white.svg?style=for-the-badge&logo=opencv&logoColor=white" alt="CV2" /></a>


                            </Description>
                            <Description>
                                <h3>Blockchain</h3> <br></br>

                                <a href="https://soliditylang.org/" target="blank"><img height={26} align="center" src="https://img.shields.io/badge/Solidity-e6e6e6?style=for-the-badge&logo=solidity&logoColor=black" alt="Solidity" /></a>

                            </Description>
                            <Description>
                                <h3>Tools</h3>
                                <br></br>
                                <a href="https://www.mysql.com/" target="blank"><img height={26} align="center" src="https://img.shields.io/badge/MySQL-E34C0?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" /></a>
                                <a href="https://www.sqlite.org/index.html" target="blank"><img height={26} align="center" src="https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white" alt="SQLite" /></a>
                                <a href="" target="blank"><img height={26} align="center" src="https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white" alt="markdown" /></a>
                                <a href="https://www.github.com/" target="blank"><img height={26} align="center" src="https://img.shields.io/badge/GitHub-F29F35?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" /></a>
                                <a href="https://www.heroku.com/" target="blank"><img height={26} align="center" src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" alt="Heroku" /></a>
                                <a href="https://www.bootstrapcdn.com/" target="blank"><img height={26} align="center" src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap" /></a>
                                <a href="https://material-ui.com" target="blank"><img height={26} align="center" src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white" alt="material-ui" /></a>
                                <a href="https://git-scm.com" target="blank"><img height={26} align="center" src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="git" /></a>

                            </Description>
                            <Description>
                                <h3>Operting Systems:</h3>
                                <br></br>
                                <a href="https://manjaro.org/" target="blank"><img height={26} align="center" src="https://img.shields.io/badge/Manjaro-35BF5C?style=for-the-badge&logo=Manjaro&logoColor=white" alt="Manjaro Linux" /></a>
                                <a href="https://ubuntu.com/" target="blank"><img height={26} align="center" src="https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white" alt="Ubuntu" /></a>
                                <a href="https://start.fedoraproject.org/" target="blank"><img height={26} align="center" src="https://img.shields.io/badge/Fedora-294172?style=for-the-badge&logo=fedora&logoColor=white" alt="Fedora" /></a>

                            </Description>
                        </Main>
                        <Main>
                            <Title>
                                <Design width={40} height={40} /> Designer
                            </Title>
                            <Description>
                                I also love designing! Designing everything mentioned below and more:
                            </Description>
                            <Description>
                                <li>Logo Design </li>
                                <li>Web Design</li>
                                <li>Mobile Apps</li>
                                <li>Smart Watch Faces</li>
                            </Description>
                            <Description>
                                <h3>Tools</h3>
                                <br></br>
                                <a href="https://www.adobe.com/in/products/illustrator.html" target="blank"><img height={26} align="center" src="https://img.shields.io/badge/adobeillustrator-%23FF9A00.svg?style=for-the-badge&logo=adobeillustrator&logoColor=white" alt="Adobe Illustrator" /></a>
                                <a href="https://www.adobe.com/products/photoshop.html" target="blank"><img height={26} align="center" src="https://img.shields.io/badge/adobephotoshop-%2331A8FF.svg?style=for-the-badge&logo=adobephotoshop&logoColor=white" alt="Adobe Photoshop" /></a>
                                <a href="https://www.adobe.com/products/xd.html" target="blank"><img height={26} align="center" src="https://img.shields.io/badge/Adobe%20XD-470137?style=for-the-badge&logo=Adobe%20XD&logoColor=#FF61F6" alt="Adobe XD" /></a>
                                <a href="https://www.figma.com/" target="blank"><img height={26} align="center" src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white" alt="Figma" /></a>

                            </Description>
                            <Description>
                            </Description>

                        </Main>
                    </Box>
                </ThemeProvider>
            </div>
        );
    }
}

export default myskill;