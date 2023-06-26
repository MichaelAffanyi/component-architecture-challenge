import Button from '../Button'
import Hobby from './Hobby'
import './hobbiesStyles.css'

const Hobbies = () => {
    const hobbies = ['Gaming', 'Fashion', 'Music', 'Reading']

  return (
    <div className='hobbies'>
        <span className="title">Let’s get started by picking some interests</span>
        <span className="subtitle hobbies-subtitle">Alright, let's pick something we're interested in and get started!</span>
        <div className='hobbies-grid'>
            {hobbies.map((hobby, index) => <Hobby key={index} title={hobby}/>)}
        </div>
        <Button />
    </div>
  )
}

export default Hobbies