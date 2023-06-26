import '../styles.css'
import done from '../../assets/congrats.png'
import Button from '../Button'

const Congrats = () => {
  return (
    <div className='congrats'>
        <span className="title">Woohoo!</span>
        <span className="subtitle">Hey there! Your registration is complete, get excited for the ultimate quiz experience of your life. Let's do this!</span>
        <img src={done} alt="" />
        <Button />
    </div>
  )
}

export default Congrats