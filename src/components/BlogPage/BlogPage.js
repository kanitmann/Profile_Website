import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import img from "../../assets/Images/bg.jpg"
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/powerButton.js';


import { Blogs } from './BlogData';
import BlogComponent from './BlogComponent'
import AnchorComponent from '../subComponents/Anchor'
import BigTitle from "../subComponents/BigTitle"
import { motion } from 'framer-motion'

const MainContainer = styled.div`
background-image: url(${img});
background-size:cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
`

const Container = styled.div`
background-color: ${props => `rgba(${props.theme.realrgba},0.8)`};

width: 100%;
height:100vh;

position: relative;
padding-bottom: 5rem;

`

const Center = styled.div`
display:flex;
justify-content:center;
align-items:center;
padding-top:10rem;
`

const Grid = styled.div`
display:grid;
grid-template-columns:repeat(2, minmax(calc(10rem + 15vw), 1fr));
grid-gap:3rem;
`
const container = {

    hidden: { opacity: 0 },
    show: {
        opacity: 1,

        transition: {
            staggerChildren: 0.5,
            duration: 0.5,
        }
    }

}


const BlogPage = () => {

    const [numbers, setNumbers] = useState(0);

    useEffect(() => {
        let num = (window.innerHeight - 70) / 30;
        setNumbers(parseInt(num));
    }, [])


    return (
        <motion.MainContainer
            variants={container}
            initial='hidden'
            animate='show'
            exit={{
                opacity: 0, transition: { duration: 0.5 }
            }}
        >
            <Container>
                <LogoComponent />
                <PowerButton />
                <SocialIcons />
                <AnchorComponent number={numbers} />
                <Center>
                    <Grid>

                        {
                            Blogs.map(blog => {
                                return <BlogComponent key={blog.id} blog={blog} />
                            })
                        }
                    </Grid>
                </Center>
                <BigTitle text="BLOG" top="5rem" left="5rem" />
            </Container>
        </motion.MainContainer>
    )
}

export default BlogPage;