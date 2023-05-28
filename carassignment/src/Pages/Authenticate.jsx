import React, { useState } from 'react'
import styles from '../Styles/authentication.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { loginFun, registerFun } from '../Redux/DealerAuth/dealer.action';
import { useNavigate } from 'react-router-dom';

const Authenticate = () => {
    const store=useSelector((state)=>state.dealerReducer);
    //console.log(registerFun,loginFun);
    const dispatch=useDispatch()
    const navigate = useNavigate();

    const [registered, setRegistered] = useState(false)
    const registerState={ name:"", email:"", password:""}
    const loginState={ email:"", password:""}
    const [register,setRegister]=useState(registerState)
    const [login,setLogin]=useState(loginState)
    
   // console.log('login:', login)
    
    const handleRegister=(e)=>{
        setRegister({...register, [e.target.name]: e.target.value })
        
    }
    const handleLogin=(e)=>{
        setLogin({...login, [e.target.name]: e.target.value })
        
    }
    const submitRegister=(e)=>{
      e.preventDefault()
      if(register!=registerState){
        dispatch(registerFun(register))
        setRegistered(true)
        
      }
    }
    const submitLogin=(e)=>{
      e.preventDefault()
      if(login!==loginState){
        dispatch(loginFun(login))
      }
    }
    if(store.isAuth){
      navigate(`/`)
      
    } 


    return (
        <div className={styles.container}>
          <form onSubmit={submitRegister} className={styles.box}>
            <h1 className={styles.title}>Register</h1>
            <input name="name" type="text" onChange={handleRegister} placeholder="Your Name" className={styles.input} />
            <input name="email" type="text" onChange={handleRegister} placeholder="Your Email" className={styles.input} />
            <input name="password" type="text" onChange={handleRegister} placeholder="Your Password" className={styles.input} />
            <button type="submit" className={styles.button}>Register</button>
            {registered ? (
              <p className={styles.register_success}>Now Please Login 👉</p>
            ) : (
              <p className={styles.register_failure}>If you don't have an account please Register..</p>
            )}
          </form>
          <form onSubmit={submitLogin} className={styles.box}>
            <h1 className={styles.title}>Login</h1>
            <input name="email" type="text" onChange={handleLogin} placeholder="Your Email" className={styles.input} />
            <input name="password" type="text" onChange={handleLogin} placeholder="Your Password" className={styles.input} />
            <button type="submit" className={styles.button}>Login</button>
            {store.isAuth ? (
              <p className={styles.login_success}>Login Success</p>
            ) : (
              <p className={styles.login_failure}>have an account Login here..</p>
            )}
          </form>
        </div>
      );
    };

export default Authenticate