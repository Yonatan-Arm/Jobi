import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { userService } from "../services/user.service.js";
import {  onSignup } from '../store/actions/userActions.js';


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
    navigate("/jobs")
  };

  if (!user) return <span> loading..</span>;
  return (
    <div className="login-page" >
            <span className="login-pic flex align-center justify-center" > <h3 className="text-center">Signup</h3></span>
      <form onSubmit={onSaveUser} className="flex column align-center">
          <input
            onChange={handleChange}
            value={user.username}
            placeholder="username"
            type="text"
            name="username"
            id="username"
          />
          <input
            onChange={handleChange}
            value={user.password}
            type="text"
            name="password"
            id="password"
            placeholder="password"
          />
        <button>Signup</button>
      </form>
    </div>
  );
}

