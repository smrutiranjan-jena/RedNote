import '../index.css'
import { useState } from 'react'
import axios from 'axios'
import swal from 'sweetalert'
import NavBar from "../component/NavBar"
import Footer from "../component/Footer"
const RegisterPage = (props) => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const registeredData = {
            username: username,
            email: email,
            password: password
        }
        axios.post('http://localhost:3003/api/users/register',registeredData)
             .then((response)=>{
                 swal("good job",`${response.data.message}`,"success",{buttons:"Ok"})
                 props.history.push('/login')
             })
             .catch((err)=>{
                swal("Registration Failed try again",`${err.response.data.message}`,"error",{buttons:"Ok"})
                console.log(err)
             })
        const reset = () => {
            setUsername('')
            setEmail('')
            setPassword('')
        }
        reset()
    }
    const redirect = () => {
        props.history.push('/login')
    }
    return (
        <div>
            <NavBar />
            <div className="FormContainer">
                <i className="fa fa-address-card"></i>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="username" value={username} onChange={handleUsernameChange} /><br />
                    <input type="text" placeholder="email" value={email} onChange={handleEmailChange} /><br />
                    <input type="password" placeholder="password" value={password} onChange={handlePasswordChange} /><br />
                    <input type="checkbox" /><span className='f-text'> I agree to the terms & conditions</span><br />
                    <input type="submit" className='btn' value="Create Account" /><br />
                    <p className='ff'>Already have an account?<span className='f-login' onClick={redirect}> Login</span></p>
                </form>
            </div>
            <Footer />
        </div>
    )
}
export default RegisterPage