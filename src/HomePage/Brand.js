import React from 'react'
import "./Brand.css"
import gridA from "../Images/philips.jpg"
import gridB from "../Images/apple.jpg"
import gridC from "../Images/adidas.jpg"
import gridD from "../Images/samsung.png"
import gridE from "../Images/hp.png"
import gridF from "../Images/intel.png"
import gridG from "../Images/cocacola.jpg"
import gridH from "../Images/nivea.jpg"

function Brand() {
  return (
    <div className='brand'>
        <div className="grid-item">
            <img src={gridA} alt='a'/>
        </div>
        <div className="grid-item">
            <img src={gridB} alt='a'/>
        </div>
        <div className="grid-item">
            <img src={gridC} alt='a'/>
        </div>
        <div className="grid-item">
            <img src={gridD} alt='a'/>
        </div>
        <div className="grid-item">
            <img src={gridE} alt='a'/>
        </div>
        <div className="grid-item">
            <img src={gridF} alt='a'/>
        </div>
        <div className="grid-item">
            <img src={gridG} alt='a'/>
        </div>
        <div className="grid-item">
            <img src={gridH} alt='a'/>
        </div>
        
    </div>
  )
}

export default Brand
