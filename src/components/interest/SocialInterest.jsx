import './interestStyles.css'
import Button from "../Button"
import InterestButton from "./InterestButton"

const SocialInterest = () => {

  const interesArr = ['Social Interaction', 'Personal development', 'Entertainment and Fun', 'Rewards and recognition']

  return (
    <div className="addSocialInterest">
      <span className='title'>Hey there! What brings you here?</span>
      <span className='subtitle'>This will help us make great recommendations.</span>
      <div className='interests'>
      {interesArr.map((element, index) => <InterestButton key={index} value={element}/>)}
      </div>
      <div className="button">
        <Button />
      </div>
    </div>
  )
}

export default SocialInterest