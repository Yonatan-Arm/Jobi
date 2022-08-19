import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onLogout } from '../store/actions/userActions.js'
import search from "../assets/imgs/search.svg";
import menu from "../assets/imgs/menu.svg";

export default function Navbar() {
  const [isOpenModel, setIsOpenModel] = useState(false);
  const { user } = useSelector(({ userModule }) => userModule);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const location = useLocation()
  useEffect(() => {
    return () => {
      setIsOpenModel(false);
    };
  }, [location]);

  const onLogOut = async () => {
     dispatch(onLogout())
    navigate("/login");
  };

  const navigateJobs = async () => {
    navigate("/jobs");
  };

  return (
    <div className="navbar">
      <div className="nav flex space-between justify-center align-center">
        <div className="logo">
          <h3 className=" flex justify-center align-center clickable" onClick={navigateJobs}>
            <img src={search} alt="search" /> Jobi{" "}
          </h3>
        </div>
        <div className="links flex">
          <Link to="/about">About</Link>
          <Link to="/jobs">Jobs</Link>
          {user ? (
            <span onClick={onLogOut} className="clickable">
              {" "}
              logout
            </span>
          ) : (
            <div>
             <span> <Link to="/signup">Signup</Link>  </span>
             <span> <Link to="/login">Login</Link>  </span>
            </div>
          )}
        </div>

        <div className="mobile-nav">
          <img
            src={menu}
            alt="menu"
            onClick={() => {
              setIsOpenModel(true);
            }}
          />
          {isOpenModel && (
            <div className="flex column mobile-model align-center justify-center">
              <Link to="/about">About</Link>
              <Link to="/jobs">Jobs</Link>
              {user ? (
            <span onClick={onLogOut} className="clickable">
              {" "}
              logout
            </span>
          ) : (
            <div className="flex column gap">
             <span> <Link to="/signup">Signup</Link>  </span>
             <span> <Link to="/login">Login</Link>  </span>
            </div>
          )}
              <button
                onClick={() => {
                  setIsOpenModel(false);
                }}
              >
                X
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
