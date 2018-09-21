import React from 'react'

import SVG from './SVG.js'
import Text from './Text.js'
import Sound from './Sound.js'

const Display = ({combo}) => {
  if (combo == null) return <div />
  return (
    <div className='Display'>
      <Sound name={combo.sound} />
      <SVG name={combo.image} />
      <Text name={combo.text} />
    </div>
  )
}

export default Display
