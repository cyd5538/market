import React from 'react'
import Lottie from 'react-lottie-player'
import styled from 'styled-components'
import lottieJson from '../assets/add-to-cart.json'

const HomeStyle = styled.div`
  background-color: ${props => props.theme.pageBackground};
`

const Home = () => {
  return (
    <HomeStyle>
      <Lottie
        style={{height: "100vh", paddingTop: 100, paddingBottom: 100}}
        loop
        animationData={lottieJson}
        play
      />
    </HomeStyle>
  )
}

export default Home