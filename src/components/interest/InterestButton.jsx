import { useState } from 'react'
import addBlack from '../../assets/add-black.png'
import addWhite from '../../assets/add-white.png'


const InterestButton = ({value}) => {
    const [clicked, setClicked] = useState(false)


  return (
    <button onClick={() => setClicked(!clicked)} className={`interest-button ${clicked && 'bg-blue'}`}>
        <img src={clicked ? addWhite : addBlack} alt="" />
        <span>{value}</span>
    </button>
  )
}

export default InterestButton