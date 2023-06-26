import './styles.css'
import { useDispatch, useSelector } from 'react-redux'
import { setPage } from '../feature/pageSlice'

const Button = ({value}) => {
  const {page: {page}} = useSelector(state => state.page)
  const dispatch = useDispatch()

  const handleClick = () => {
    if(page === 'page_5'){
      dispatch(setPage('home'))
      return
    }
    const nextPage = Number(page.split('_')[1]) + 1
    dispatch(setPage(`page_${nextPage}`))
  }

  return (
    <button className='main-button' onClick={handleClick}>
        {value || 'Continue'}
    </button>
  )
}

export default Button