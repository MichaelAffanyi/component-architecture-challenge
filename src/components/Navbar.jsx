import './styles.css'
import arrow from '../assets/arrow.png'
import { useSelector, useDispatch } from 'react-redux'
import { setPage } from '../feature/pageSlice'

const Navbar = () => {
  const {page: {page}} = useSelector(state => state.page)
  const dispatch = useDispatch()

  const handleClick = () => {
    if(page === 'page_1'){
      return
    }
    const prevPage = Number(page.split('_')[1]) - 1
    dispatch(setPage(`page_${prevPage}`))
  }
  return (
    <div className="nav">
        <div className='back' onClick={handleClick}>
            <img src={arrow} alt="" />
            <span>Back</span>
        </div>
        <span><span className='step-num'>Step {page.split('_')[1]}</span> of 4</span>
        <span className='exit' onClick={() => {
          dispatch(setPage('home'))
        }}>Exit</span>
    </div>
  )
}

export default Navbar