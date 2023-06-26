import './styles.css'
import { useSelector, useDispatch } from 'react-redux'
import user from '../assets/user.png'
import { setPage } from '../feature/pageSlice'

const Home = () => {
    const dispatch = useDispatch()
    const {profile} = useSelector(state => state.page)
  return (
    <div className='home'>
    <nav>
        <div className="logo" onClick={() => {
            dispatch(setPage('page_1'))
        }}>
            <span>Logo</span>
        </div>
        <div className="nav-links">
            <span>Home</span>
            <span>About</span>
            <span>Contact</span>
        </div>
        <div className="nav-profile">
            <img src={profile ? URL.createObjectURL(profile) : user} alt="" />
        </div>

    </nav>
    <div className="container">
        <h1>Welcome to home page</h1>
    </div>
    </div>
  )
}

export default Home