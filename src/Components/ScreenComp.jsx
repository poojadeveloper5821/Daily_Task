import React from 'react'
import useScreen from './useScreen'

function ScreenComp() {
    const screenSize=useScreen();
  return (
    <div className='App border'>
      <h1> Screen Dimension</h1>
      <h2>We are in {screenSize} Screen </h2>
    </div>
  )
}

export default ScreenComp
