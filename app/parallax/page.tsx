"use client";

import { Navbar } from '@/components/Navbar/Navbar'
import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div style={{
        height: '100vh',
        overflowY: 'auto',
        overflowX: 'hidden',
        perspective: '10px', 
        }}>
        <Navbar></Navbar>
        <header style={{
            transformStyle: 'preserve-3d',
            position: 'relative',
            zIndex: -1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            }}>
                <Image src={'/images/mountains.png'} alt='Mountains' width={2000} height={1500}
                style={{
                    zIndex: -1,
                    position: 'absolute',
                    width: '100%',
                    objectFit: 'cover',
                    height: '100%',
                    transform: 'translateZ(-10px) scale(2)',
                }}
                ></Image>
                <Image src={'/images/mountainsmid.png'} alt='Mountains' width={2000} height={1500}
                style={{
                    position: 'absolute',
                    zIndex: -1,
                    top: '800px',
                    width: '100%',
                    objectFit: 'cover',
                    height: '40%',
                    transform: 'translateZ(-6px) scale(1.6)',
                    filter: 'blur(1px) brightness(0.7)',
                }}
                ></Image>
                <div
                style={{
                    position: 'absolute',
                    zIndex: -1,
                    top: '840px',
                    transform: 'translateZ(-1px) scale(1.3)',
                }}>
                    <Image src={'/images/mountainsfront.png'} alt='Mountains' width={2000} height={1500} style={{
                        objectFit: 'cover',
                        width: '100%',
                        height: '0%',
                        transform: 'translateY(10px)',
                        filter: 'blur(3px) brightness(0.5)',
                    }}/>
                    <div style={{
                        background: 'black',
                        height: "100vh",
                    }}>

                    </div>
                </div>
                
            </header> 
    </div>
    
  )
}

export default page