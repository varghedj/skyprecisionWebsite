import React from 'react'
import Content from '../../Content'
import {
  homeObjOne, 
  homeObjTwo} from './Data'

function Home() {
  return (
    <>
      <Content {...homeObjOne} />
      <Content {...homeObjTwo}/>
    </>
  )
}

export default Home
