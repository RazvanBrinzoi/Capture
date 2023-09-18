import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
//Images import
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
//Animations
import { motion } from 'framer-motion';
import { pageAnimation, fade, PhotoAnimation, LineAnimation, slider } from '../animation';
//Scroll
import {scrollReveal} from "../animation";
import { useScroll } from "../components/useScroll";
//Scroll Top
import ScrollTop from "../components/ScrollTop";

const OurWork = () => {
    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();
    return(
        <Work style={{background:"#fff"}} variants={pageAnimation} initial="hidden" animate="show" exit="exit"> 
            <Frame1 variants={slider}></Frame1>
            <Frame2 variants={slider}></Frame2>
            <Frame3 variants={slider}></Frame3>
            <Frame4 variants={slider}></Frame4>
            <Movie>
                <motion.h2 variants={scrollReveal}><Link to="/work/the-athlete">The Athlete</Link></motion.h2>
                <motion.div variants={LineAnimation} className="line"></motion.div>
                <Link to="/work/the-athlete">
                    <Hide>
                        <motion.img variants={PhotoAnimation} src={athlete} alt="athlete" />
                    </Hide>
                </Link>
            </Movie>
            <Movie variants={scrollReveal} animate={controls} initial="hidden" ref={element}>
                <motion.h2 variants={fade}><Link to="/work/the-racer">The Racer</Link></motion.h2>
                <motion.div variants={LineAnimation} className="line"></motion.div>
                <Link to="/work/the-racer">
                    <motion.img variants={PhotoAnimation} src={theracer} alt="racer" />
                </Link>
            </Movie>
            <Movie variants={fade} animate={controls2} initial="hidden" ref={element2}>
                <motion.h2 variants={fade}><Link to="/work/good-times">Good Times</Link></motion.h2>
                <motion.div variants={LineAnimation} className="line"></motion.div>
                <Link to="/work/good-times">
                    <motion.img variants={PhotoAnimation} src={goodtimes} alt="goodtimes" />
                </Link>
            </Movie>
            <ScrollTop />
        </Work>
    )
}

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2{
        padding: 1rem 0rem;
        a{
            font-size: 4rem;
            color: #323131;
            text-decoration: none;
            transition: all 0.5s ease;
            &:hover{
                color: #23d997;
            }
        }
    }
`;

const Movie = styled(motion.div)`
    padding-bottom: 10rem;
    .line{
        height: 0.5rem;
        background: #23d997;
        margin-bottom: 3rem;
    }

    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

const Hide = styled.div`
    overflow: hidden;
`
//Frame Animation
const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index: 3;
`;

const Frame2 = styled(Frame1)`
    background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
    background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
    background: #8effa0;
`;

export default OurWork;