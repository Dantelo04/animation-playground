'use client';

import { motion, MotionValue } from "motion/react";
import styled from "styled-components";

export const FixedScreen = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    align-items: center;
`;

export const Screen = styled(motion.div)<{scale: MotionValue<number>, color: MotionValue<string>}>`
    width: 1000px;
    height: 600px;
    border: 1px solid lightgray;
    border-radius: 10px;
    transform: scaleX(${props => props.scale && props.scale.get()});
    background-color: ${props => props.color && props.color.get()};
`;

export const BlockWrapper = styled.div`
    position: sticky;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid red;
    width: 100%;
    height: 100vh;


    @keyframes appear {
        from {
            opacity: 0;
            transform: translateX(-100px);
        }
        to {
            opacity: 1;
            transform: translateX(0px);
        }
    }
`;

export const Block = styled.div`
    width: 200px;
    height: 100px;
    animation: appear 4s ease;
    animation-timeline: view();
    animation-range: entry 0% cover 70%;
    background-color: ${props => props.color || 'red'};


`;