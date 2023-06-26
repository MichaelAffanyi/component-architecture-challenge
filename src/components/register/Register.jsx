import Button from "../Button"
import { Field } from "./Field"
import google from '../../assets/google.png'

const Register = () => {
  return (
    <div className="form">
        <h1>Create Account</h1>
        <Field type='text' name='Name' placeholder='Please enter your name'/>
        <Field type='text' name='E-mail' placeholder='example@gmail.com'/>
        <Field type='password' name='Password' placeholder='********'/>
        <Button value='Create account'/>
        <div className="google-auth">
            <img src={google} alt="" />
            <span>Sign up with Google</span>
        </div>
        <span className="haveAccount">Already have an account? <span className="login-link">log in</span></span>
    </div>
  )
}

export default Register