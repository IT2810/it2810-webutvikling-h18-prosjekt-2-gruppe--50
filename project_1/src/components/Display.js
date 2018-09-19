import React from 'react'

import SVG from './SVG.js'
import Text from './Text.js'
import Sound from './Sound.js'

const Display = ({combo}) => {
  if (combo == null) return <div />
  return (
    <div className='Display'>
      <SVG name={combo.image} />
      <Sound name={combo.sound} />
      <Text name={combo.text} />
    </div>
  )
}

export default Display
