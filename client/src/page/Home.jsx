import React from 'react'
import Lottie from 'react-lottie-player'

import lottieJson from '../assets/add-to-cart.json'

const Home = () => {
  return (
    <div>
      <Lottie
        style={{height: "100vh"}}
        loop
        animationData={lottieJson}
        play
      />
    </div>
  )
}

export default Home