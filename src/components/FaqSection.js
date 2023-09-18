import React from "react";
//Import Styles
import { About } from "../styles";
import styled from "styled-components";
import Toggle from "./Toggle"
import { LayoutGroup } from "framer-motion";
//Scroll
import {scrollReveal} from "../animation";
import { useScroll } from "./useScroll";

const FaqSection = () => {
    const [element, controls] = useScroll();
    return(
        <Faq variants={scrollReveal} animate={controls} initial="hidden" ref={element}>
            <h2>
                Any Questions <span>FAQ</span>
            </h2>
            <LayoutGroup>
            <Toggle title="How do I start ?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, similique.</p>
                    </div>
            </Toggle>
            <Toggle title="Daily Schedule ?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, similique.</p>
                    </div>
            </Toggle>
            <Toggle title="Payment methods ?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, similique.</p>
                    </div>
            </Toggle>
            <Toggle title="What do you ofer ?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, similique.</p>
                    </div>
            </Toggle>
            </LayoutGroup>
        </Faq>
    )
}

const Faq = styled(About)`
    display: block;
    span{
        display: block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }

    .faq-line{
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }

    .question{
        padding: 3rem 0rem;
        cursor: pointer;
    }

    .answer {
        padding: 2rem 0rem;
        p {
            padding: 1rem 0rem;
        }
    }
`

export default FaqSection;