import logo from './logo.svg';
import './App.css';
import GlobalStyle from './globalStyles';
import {ThemeProvider} from 'styled-components';
import {darkTheme, lightTheme} from './components/themes';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home/home.js';
import aboutMe from './components/AboutMe/aboutMe.js';
import blogPage from './components/BlogPage/blogPage.js';
import contactPage from './components/ContactMe/contactMe.js';
import skills from './components/mySkills/myskill.js';
import myWork from './components/workPage/workPage.js';
import footer from './components/Footer/footer.js';

function App() {
    return <>
        <GlobalStyle/>
        <ThemeProvider theme={lightTheme}>
            <Switch>
                <Route exact path="/" component={Home}/>;
                <Route exact path="/aboutme" component={aboutMe}/>;
                <Route exact path="/blog" component={blogPage}/>;
                <Route exact path="/contact" component={contactPage}/>;
                <Route exact path="/skills" component={skills}/>;
                <Route exact path="/mywork" component={myWork}/>;
                <Route exact path="/footer" component={footer}/>;
            </Switch>
        </ThemeProvider>
    </>
}

export default App;
