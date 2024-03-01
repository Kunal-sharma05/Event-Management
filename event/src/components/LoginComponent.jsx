import React from 'react'
import { useRef, useState, useEffect, useContext } from 'react'
import { AuthContext } from './context/AuthProvider';
import EventService from '../services/EventService';
import { Link, useNavigate, useLocation } from 'react-router-dom'
export const LoginComponent = () => {
    const userRef = useRef();
    const errorRef = useRef();
    const navigate = useNavigate()
    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";


    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)

    const { setAuth } = useContext(AuthContext)
    useEffect(() => {
        userRef?.current?.focus();
    }, [])

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        console.log("username and password received from login form :" + user + " " + pwd)
        const userlogindata = { username: user, password: pwd }
        EventService.userLogin(userlogindata).then((response) => {
            console.log('response from login API : ' + JSON.stringify(response.data))
            const accessToken = response.data.token
            console.log('response from login API : ' + accessToken)
            setAuth({ user, pwd, accessToken })
            setUser('')
            setPwd('')
            setSuccess(true)
            navigate('/events')
        }).catch(error => {
            console.log(error)
            if (!error?.response) {
                setErrMsg("No server response")
            }
            else if (error.response?.status === 400) {
                setErrMsg("username taken")

            }
            else {
                setErrMsg("Registration failed...")
            }

        })
        setUser('')
        setPwd(' ')
        setSuccess(true)

    }

    return ((success) ? <>
        <section>
            <br />
            <p>
                {navigate('/events')}
            </p>
        </section>
    </> :
        <section>
            <p ref={errorRef} className={errMsg ? "errmsg" : "offscreen"}
                aria-live="assertive">{errMsg}</p>
            <h1>Sign In</h1>

            <form>
                {/* USERNAME */}
                <label htmlFor="username">
                    Username:
                </label>
                <input
                    type="text"
                    id="username"
                    onChange={(e) => { setUser(e.target.value) }}
                    required
                    value={user}
                />

                {/* PASSWORD */}
                <label htmlFor="password">
                    Password:
                </label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => { setPwd(e.target.value) }}
                    required
                    value={pwd}
                />
                <button onClick={(e) => handleLoginSubmit(e)}>Sign In</button>
                <p>Need an account?<br />
                    <span className='line'>
                        {/* <Link to='/register??' */}
                        <Link to="/register">click here to register</Link>
                    </span>


                </p>

            </form>
        </section>

    )
}