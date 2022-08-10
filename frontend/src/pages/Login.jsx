import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userService } from "../services/user.service.js";
import { useForm } from "../hooks/useForm";
import { useDispatch } from "react-redux";
import { onLogin } from '../store/actions/userActions.js'
// import Loader from '../components/Loader'

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
     else navigate('/')
    } catch (err) {
      setWarning(true);
    }
  }




 

  if (!user) return <span> loading..</span>;
  return (
    <section className="login-page">
      <h3 className="text-center">Login</h3>
      <form onSubmit={login} className="flex column">
        <div className="flex column">
          <label htmlFor="username">username:</label>
          <input
            onChange={handleChange}
            value={user.username}
            type="text"
            name="username"
            id="username"
          />
        </div>
        <div className="flex column">
          <label htmlFor="password">password</label>
          <input
            onChange={handleChange}
            value={user.password}
            type="password"
            name="password"
            id="password"
          />
        </div>
        <button>Login</button>
      </form>
      {warning && (
        <span className="warning"> Invalid username or password</span>
      )}
    </section>
  );
}
