import React from 'react'
import './RegisterComponent.css'
import {useState,useRef,useEffect} from 'react'
import {faCheck,faTimes,faInfoCircle, faDiagramSuccessor} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {  useNavigate,Link,useParams } from 'react-router-dom';
import EventService from '../services/EventService';
 
 
const USER_REGEX=/^[A-Za-z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$]).{8,24}$/;
 
export const RegistrationComponent = () => {
 
   //const navigate=useNavigate()
   //focus on user input
   const userRef=useRef()
   //focus on error appearing
   const errorRef=useRef()
   
   //USERNAME RELATED VARS
   //username
   const [username,setUser]=useState('')
   //if username is valid
   const [validName,setValidName]=useState(false)
   //is the focus on username textbox
   const [userFocus,setUserFocus]=useState(false)
   
   //PASSWORD RELATED VARS
   //PASSWORD
   const [pwd,setPwd]=useState('')
   //if password is valid
   const [validPwd, setValidPwd]=useState(false)
   //is the focus on password textbox
   const [pwdFocus,setPwdFocus]=useState(false)
 
     //CONFIRM PASSWORD RELATED VARS
   //CONFIRM PASSWORD
   const [matchPwd,setMatchPwd]=useState('')
   //if password and confirmpassword are the same
   const [validMatch,setValidMatch]=useState(false)
   //is the focus on confirm password textbox
   const [matchFocus,setMatchFocus]=useState(false)
 
   const [errMsg,seterrMsg]=useState('')
   const [success,setSuccess]=useState(false)
   
   //TO SET USER FOCUS
   useEffect(()=>{
         //sets the focus on user input
          userRef.current.focus()
          console.log("First Hook invoked.. Focus is set on user input")
   },[]
   )
 //validates the username
   useEffect(()=>{
         const result=USER_REGEX.test(username)
         console.log("Second Hook invoked.. Result of valid username test for username "+username+" is "+result)
         setValidName(result)
         console.log("Valid username state variable set with value: "+result)
   
 
   },[username])
 
   //validates the password and confirm password match
   useEffect(()=>{
    const result=PWD_REGEX.test(pwd)
    console.log("Third Hook invoked.. result of valid password test for password: "+pwd+" is "+result)
    setValidPwd(result)
    console.log("Valid password state variable set with value: "+result)
 
    const matchResult=pwd===matchPwd;
    console.log("Valid match state variable set with value: "+matchResult)
 
    setValidMatch(matchResult)
 
 
},[pwd,matchPwd])
 
useEffect(()=>{
    console.log("fourth hook invoked.error message is cleared")
    seterrMsg('')
},[username,pwd,matchPwd])
 
const saveUserRegistration=(e)=>{
    e.preventDefault();
    let email='user1234@gmail.com'
    const userRegData={username:username,password:pwd}
    console.log("User data receved in handler : "+userRegData)
    EventService.saveUserRegistration(userRegData).then((response)=>{
        console.log('response from regsiteremployee API : '+JSON.stringify(response.data))
        setSuccess(true)
        //navigate('/login')
    } ).catch(error=>{console.log(error)
    if(!error?.response){
        seterrMsg("No server response")
    }
    else if(error.response?.status==500){
        seterrMsg("username taken")
    }
    else{
        seterrMsg("Registration failed...")
    }
   
    })
  }
 
 
return (
    (success)?<>
    <section>
        <h1>Success!!</h1>
        <p>
            <Link to='/login'>Login</Link>
        </p>
    </section>
    </>:
    <div id="background">
    <section >
        <p ref={errorRef} className={errMsg?"errmsg":"offscreen"} aria-live="assertive">
            {errMsg}
        </p>
        <h1>Register User</h1>
        <form>
            {/* USERNAME */}
            <label htmlFor="username">
                Username:
                <span className={validName?"valid":"hide"}>
                    <FontAwesomeIcon icon={faCheck}/>
                   
                </span>
                <span className={!validName&&username?"invalid":"hide"}>
                    <FontAwesomeIcon icon={faTimes}/>
                   
                </span>
            </label>
            <input
                type="text"
                id="username"
                autoComplete='off'
                ref={userRef}
                onChange={(e)=>{setUser(e.target.value)}}
                required
                aria-invalid={validName?"false":"true"}
                aria-describedby="uidnote"
                onFocus={()=>setUserFocus(true)}
                onBlur={()=>setUserFocus(false)}
                />
                <p id="uidnote" className={userFocus&&!validName?"instructions":"offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle}/>
                    4 to 24 chars.<br/>
                    Must begin with a letter.<br/>
                    Letters,Numbers,underscore,hyphen allowed
                </p>
 
                 {/* PASSWORD */}
                <label htmlFor="password">
                    Password :
                    <FontAwesomeIcon icon={faCheck}
                     className={validPwd?"valid":"hide"}/>
                    <FontAwesomeIcon icon={faTimes}
                    className={validPwd||!pwd?"hide":"invalid"}/>
 
                </label>
                <input
                   type="password"
                   id="password"
                   onChange={(e)=>{setPwd(e.target.value)}}
                   value={pwd}
                   required
                   aria-invalid={validPwd?"false":"true"}
                   aria-describedby="pwdnote"
                   onFocus={()=>setPwdFocus(true)}
                   onBlur={()=>setPwdFocus(false)}/>
                <p id="pwdnote" className={pwdFocus&&!validPwd?"instructions":"offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle}/>
                    8 to 24 chars.<br/>
                    Must include uppercase & lowercase letters, anumber & a spacial symbol<br/>
                    Allowed special characters:
                    <span aria-label="exclamation mark">!</span>
                    <span aria-label="hashtag">#</span>
                    <span aria-label="dollor sign">$</span>
                    <span aria-label="percent">%</span>
                </p>
 
                {/* CONFIRM PASSWORD */}
                <label htmlFor='confirm-pwd'>
                    Confirm Password:
                    <FontAwesomeIcon icon={faCheck}
                    className={validMatch&&matchPwd?"valid":"hide"}/>
                    <FontAwesomeIcon icon={faTimes}
                    className={validMatch||!matchPwd?"hide":"invalid"}/>
                </label>
                <input
                    type="password"
                    id="confirm-pwd"
                    onChange={(e)=>setMatchPwd(e.target.value)}
                    value={matchPwd}
                    required
                    aria-invalid={validMatch?"false":"true"}
                    aria-describedby="confirmnote"
                    onFocus={()=>{ setMatchFocus(true)}}
                    onBlur={()=>{ setMatchFocus(false)}}/>
                    <p id="confirmnote" className={matchFocus&&!validMatch?"instructions":"offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle}/>
                           Confirm password must match with the  password
                       
                    </p>
                <br/>
                <button disabled={!validName||!validPwd||!validMatch?true:false}
                        onClick={(e)=>saveUserRegistration(e)}>Sign Up</button>
               
               <p>
                Already Registered?<br/>
                <span className="line">
                    <Link to="/login">Sign In</Link>
                </span>
               </p>
               </form>
        </section>    
        </div>    
           
           
           
)        
}