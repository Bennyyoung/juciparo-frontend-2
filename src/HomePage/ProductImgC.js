import React, { useEffect, useState } from 'react'
import "./ProductImgC.css"
//import { firstCarousel } from '../util/Data'

const ProductImgC = (props) => {
  const {children, show} = props;
  // ...
  const [currentIndex, setCurrentIndex] = useState(0)
  const [length, setLength] = useState(children?.length)
  const [touchPosition, setTouchPosition] = useState(null)

  // ...
  const handleTouchStart = (e) => {
      const touchDown = e.touches[0].clientX
      setTouchPosition(touchDown)
  }

  const handleTouchMove = (e) => {
    const touchDown = touchPosition

    if(touchDown === null) {
        return
    }

    const currentTouch = e.touches[0].clientX
    const diff = touchDown - currentTouch

    if (diff > 5) {
        next()
    }

    if (diff < -5) {
        prev()
    }

    setTouchPosition(null)
  }

  // Set the length to match current children from props
  useEffect(() => {
      setLength(children?.length)
  }, [children])


  

  // ...
  const next = () => {
    if (currentIndex < (length - 1)) {
        setCurrentIndex(prevState => prevState + 1)
    }
  }

  const prev = () => {
    if (currentIndex > 0) {
        setCurrentIndex(prevState => prevState - 1)
    }
  }
  // ...ImgC


  return (
      <div className="productImgC-carousel-container">
          <div className="productImgC-carousel-wrapper">
            {
              currentIndex > 0 &&
              <button onClick={prev} className="productImgC-left-arrow">
                &lt;
              </button>
            }
            <div 
              className="productImgC-carousel-content-wrapper"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
            >
                <div
                    className="productImgC-carousel-content"
                    style={{ transform: `translateX(-${currentIndex * 100/show}%)` }}
                >
                    {children}
                </div>
            </div>
            {
              currentIndex < (length - 1) &&
              <button onClick={next} className="productImgC-right-arrow">
                &gt;
              </button>
            }

        </div>
      </div>
  )
}

export default ProductImgC;
