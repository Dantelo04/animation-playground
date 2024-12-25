"use client";

import { Navbar } from '@/components/Navbar/Navbar'
import React from 'react'
import { FixedScreen, Screen, BlockWrapper, Block } from './styles'
import { useMotionValueEvent, useScroll, useTransform } from 'motion/react'


const page = () => {
  const {scrollYProgress} = useScroll();
  const [value, setValue] = React.useState(0);

  useMotionValueEvent(scrollYProgress, "change", 
    (value) => {
      console.log(value);
      setValue(Number(value));
    });

  const scale = useTransform(scrollYProgress, [0, 0.1], [0.5, 1]);
  const backgroundColor = useTransform(scrollYProgress, [0.2, 0.4, 0.5, 0.7, 0.8, 0.9], ["#fff", "#00ff00", "#00ff00", "#0000ff", "#0000ff", "#FF0000"]);

  return (
    <>
        <Navbar></Navbar>
        <FixedScreen>
            <h1>Product View</h1>
            <Screen scale={scale} color={backgroundColor}></Screen>
        </FixedScreen>
        <div style={{height: "450vh", display: 'flex', justifyContent: 'center', alignItems: 'center'}}></div>
    </>
  )
}

export default page