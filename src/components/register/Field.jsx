import './registerStyles.css'

export const Field = ({name, type, placeholder,}) => {
  return (
    <div className='inputField'>
        <label htmlFor={type}>{name}</label>
        <input type={type} placeholder={placeholder}/>
    </div>
  )
}
