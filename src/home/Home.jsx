import React from 'react'
import Community from '../Components/community/Community'
import Start from '../Components/startpage/Start'
import Subscribe from '../Components/subscribe/Subscribe'
import Wework from '../Components/wework/Wework'

export default function Home() {
  return (
    <>
      <Start />
      <Community />
      <Wework />
      <Subscribe />
    </>
  )
}
