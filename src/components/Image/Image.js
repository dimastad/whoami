import React from 'react'

const Image = ({ src, width, height }) => {
  return (
    <>
      <img src={src} width={width} height={height} alt='' />
    </>
  )
}

export default Image;