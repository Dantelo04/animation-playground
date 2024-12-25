"use client";

import styled from "styled-components";

export const NavbarWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 20px;
    position: sticky;
    top: 0;
    background-color: white;
    border-bottom: 1px solid lightgray;
    z-index: 100;

    a {
        text-decoration: none;
        color: black;
        font-size: 20px;
        font-weight: bold;
    }
`;