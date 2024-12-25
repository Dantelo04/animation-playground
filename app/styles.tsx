"use client";

import styled from "styled-components";

export const Main = styled.div<{animate?: string}>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    padding-top: 80px;
    gap: 40px;
    transform: translateY(0px);

    ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        padding: 0;
        gap: 5px;
        margin: 0;
    }

    li {
        font-size: 20px;
        height: 40px;
        width: 200px;
        border: 1px solid lightgray;
        border-radius: 4px;
        transition: transform 0.2s;
        &:hover {
            transform: scale(1.1);
        }
    }

    a {
        text-decoration: none;
        width: 100%;
        color: black;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const Hero = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    height: 80vh;
`;