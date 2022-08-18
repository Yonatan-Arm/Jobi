import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userService } from "../services/user.service.js";
import { useForm } from "../hooks/useForm";
import { useDispatch } from "react-redux";
import { onLogin, onSignup } from '../store/actions/userActions.js'


export default function Login() {
  const [user, handleChange, setUser] = useForm(null);
  const navigate = useNavigate();
  const [warning, setWarning] = useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
    loadUser();
  }, []);


  const loadUser = async () => {
    const user = await userService.getEmptyUser();
    setUser(user);
  };


  const login = async (ev) => {
    ev.preventDefault();
    try {
      if(!user.password || !user.username){
        setWarning(true);
            user.password = "";
            setTimeout(() => {
              setWarning(false);
            }, 3000);
            return;
      } 

     const userLogin = await dispatch(onLogin((JSON.parse(JSON.stringify(user)))))
     if(!userLogin) return
     else navigate("jobs")
    } catch (err) {
      setWarning(true);
    }
  }

  const loginGuset = async () => {
    let guset = await userService.getGusetUser()
    await dispatch(onSignup(JSON.parse(JSON.stringify(guset))))
    navigate("jobs")
  }



 

  if (!user) return <span> loading..</span>;
  return (
    <section className="login-page">
      <span className="login-pic flex align-center justify-center" > <h3 className="text-center">Login</h3></span>
      
      <form onSubmit={login} className="flex column align-center">
          <input
            onChange={handleChange}
            value={user.username}
            type="text"
            name="username"
            id="username"
            placeholder="username"
          />
          <input
            onChange={handleChange}
            value={user.password}
            type="text"
            name="password"
            id="password"
            placeholder="password"
          />
        <button>Login</button>
      </form>
      <span className="text-center"> OR</span>
      <button onClick={loginGuset} className="guset-login">Login as Guset</button>
      {warning && (
        <span className="warning text-center"> Invalid username or password</span>
      )}
    </section>
  );
}
