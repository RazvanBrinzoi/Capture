import React from "react";
//Animations
import { motion } from 'framer-motion';
import { pageAnimation, titleAnimation } from '../animation';
import { styled } from "styled-components";
 
const ContactUs = () => {
    return(
        <ContactStyle style={{background: "#fff"}} variants={pageAnimation} initial="hidden" animate="show" exit= "exit">
            <Title>
                <Hide>
                    <motion.h2 variants={titleAnimation}>Get in touch.</motion.h2>
                </Hide>
            </Title>
            <div>
                <Hide>
                    <Social variants={titleAnimation}>
                        <Circle></Circle>
                        <h2>Send Us A Message</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnimation}>
                        <Circle></Circle>
                        <h2>Send an email</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnimation}>
                        <Circle></Circle>
                        <h2>Social Media</h2>
                    </Social>
                </Hide>
            </div>
        </ContactStyle>
    )
}

const ContactStyle = styled(motion.div)`
    padding: 5rem 10rem;
    color: #353535;
    min-height: 90vh;
    @media (max-width: 1300px){
        padding: 2rem;
        font-size: 1rem;
    }
    @media (max-width: 500px){
        padding: 1rem;
        font-size: 0.5rem;
    }
`;
const Title = styled.div`
    margin-bottom: 4rem;
    color: black;
`;
const Hide = styled.div`
    overflow: hidden;
`;

const Circle = styled.div`
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    background: #353535;
`

const Social = styled(motion.div)`
    display: flex;
    align-items: center;
    h2{
        margin: 2rem;
    }
`

export default ContactUs;