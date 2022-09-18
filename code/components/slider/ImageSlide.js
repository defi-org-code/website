import React from 'react'
import { generateUrl } from '../../utils'

function ImageSlide({image, _relativeURL, _ID}) {
  return (
    <div className="swiper-slide swiper-image-slide">
         <img src = {generateUrl(image, _relativeURL, _ID)} />
    </div>
  
  )
}

export default ImageSlide