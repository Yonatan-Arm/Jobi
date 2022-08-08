import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { userService } from "../services/user.service.js";
import {  onSignup } from '../store/actions/userActions.js';
// import Loader from '../components/Loader'


export default function Signup() {
  const [user, handleChange, setUser] = useForm(null);
  const dispatch = useDispatch()
  const navigate = useNavigate();


  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    let user = await userService.getEmptyUser();
    setUser(user);
  };

  const onSaveUser = async (ev) => {
    ev.preventDefault();
    if (!user.name && !user.password) return;
    await dispatch(onSignup(JSON.parse(JSON.stringify(user))))
    navigate("/")
  };

  if (!user) return <span> loading..</span>;
  return (
    <div className="login-page" >
        <h3 className="text-center">signup</h3>
      <form onSubmit={onSaveUser} className="flex column">
        <div className="flex column">
          <label htmlFor="username">username</label>
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
            type="text"
            name="password"
            id="password"
          />
        </div>
        <button>Signup</button>
      </form>
    </div>
  );
}

