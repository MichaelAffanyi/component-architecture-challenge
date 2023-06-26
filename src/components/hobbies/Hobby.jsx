import { useState } from 'react'
import './hobbiesStyles.css'
import done from '../../assets/done.png'

const Hobby = ({title}) => {
    const [added, setAdded] = useState(false)

  return (
    <div className={`hobby ${title.toLowerCase()}`}>
        <span className='hobby-title'>{title}</span>
        <button className='hobby-button' onClick={() => setAdded(!added)}>
            {added ? 'Added' : 'Add'}
            {added && <img src={done} alt="" />}
        </button>
    </div>
  )
}

export default Hobby