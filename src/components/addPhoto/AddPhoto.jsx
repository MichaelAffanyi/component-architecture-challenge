import './addphotoStyles.css'
import user from '../../assets/user.png'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setPage, setProfile } from '../../feature/pageSlice'

const AddPhoto = () => {
  const [photo, setPhoto] = useState(null)
  const dispatch = useDispatch()

  const handleClick = () => {
    if(photo){
      dispatch(setProfile(photo))
      dispatch(setPage('page_3'))
    }
  }

  return (
    <div className='addPhoto'>
        <span className='title'>Add Photo</span>
        <span className='subtitle'>Add a photo so other members know who you are</span>
        <label htmlFor='dp' className='profile-img'>
          <div className={photo ? 'profile' : 'user'}>
            <img src={photo ? URL.createObjectURL(photo) : user} alt="" />
          </div>
        </label>
        <input type="file" id='dp'hidden onChange={(e) => setPhoto(e.target.files[0])}/>
        <label htmlFor={!photo && 'dp'} className='upload-button ' onClick={handleClick}>
          {photo ? 'Continue' : 'Upload a photo'}
        </label>
        <span className='skip' onClick={() => {
          dispatch(setPage('home'))
        }}>Skip</span>
    </div>
  )
}

export default AddPhoto