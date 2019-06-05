import React from 'react'
import Img from 'gatsby-image'

const Image = ({ objFit = `cover`, objPosition = `50% 50%`, ...props }) => (
    <Img
      {...props}
      imgStyle={{
        ...props.imgStyle,
        objectFit: objFit,
        objectPosition: objPosition,
        fontFamily: `"object-fit: ${objFit}; object-position: ${objPosition}"`,
      }}
    />
)

export default Image