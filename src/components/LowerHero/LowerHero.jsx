import React from 'react'
import "./LowerHero.css"
import plainBlackTshirt from '../../Assets/images/black-tshirt.png'
import blackCompression from '../../Assets/images/blackhalfbranded.png'
export default function LowerHero() {
  return (
    <div className="second-part">
        <img src={plainBlackTshirt} className="gif-tshirt black three relative"/>
        <img src={blackCompression} className="gif-tshirt black four relative"/>
        <img src={blackCompression} className="gif-tshirt black five relative"/>
        <img src={plainBlackTshirt} className="gif-tshirt black six relative"/> 
    </div>
  )
}
