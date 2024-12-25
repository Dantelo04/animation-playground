'use client';

import styled from "styled-components";

export const Block = styled.div<{width?: string, color?: string}>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    height: 80px;
    border-radius: 4px;
    background-color: ${props => props.color ? props.color : 'red'};
    width: ${props => props.width ? props.width : '400px'};

    animation: appear 1s ease;
    animation-timeline: view();
    animation-range: entry 0% cover 40%;
`;

export const BlockWrapper = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    gap: 20px;

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

export const Main = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    flex-direction: column;
    padding: 20px;
    padding-top: 80px;
    gap: 40px;
    transform: translateY(0px);

     @keyframes backgroundChange {
        from {
            background-color: white;
            transform: translateY(300px);
        }
        to {
            background-color: black;
            transform: translateY(0px);
        }
    }

    animation: backgroundChange 1s ease;
    animation-timeline: view();
    animation-range: entry 0% cover 40%;
`;
