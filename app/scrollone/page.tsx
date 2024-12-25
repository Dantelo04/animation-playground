import { Navbar } from '@/components/Navbar/Navbar'
import React from 'react'
import { Hero } from '../styles'
import { Block, BlockWrapper, Main } from './styles'

const page = () => {
  return (
    <>
        <Navbar></Navbar>
        <Hero>
          <h1>Scroll Animation One</h1>
        </Hero>
        <Main>
          <BlockWrapper>
            <Block></Block>
            <Block width='600px' color='blue'></Block>
            <Block></Block>
          </BlockWrapper>
          <BlockWrapper>
            <Block></Block>
            <Block></Block>
            <Block width='600px' color='blue'></Block>
          </BlockWrapper>
          <BlockWrapper>
            <Block></Block>
            <Block width='600px' color='blue'></Block>
            <Block></Block>
          </BlockWrapper>
          <BlockWrapper>
            <Block width='600px' color='blue'></Block>
            <Block></Block>
            <Block></Block>
          </BlockWrapper>
          <div style={{height: "400px", display: 'flex', justifyContent: 'center', alignItems: 'center'}}></div>
        </Main>
    </>
  )
}

export default page