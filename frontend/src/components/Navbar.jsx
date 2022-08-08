import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import search from '../assets/imgs/search.svg'
import menu from '../assets/imgs/menu.svg'

export default function Navbar() {
    const [isOpenModel, setIsOpenModel] = useState(false)
    useEffect(() => {
      return () => {
        setIsOpenModel(false)
      }
    }, [])
    


  return (
    <div className='navbar'>
        <div className='nav flex space-between justify-center align-center'>
        <div className='logo'>
        <h3 className=' flex justify-center align-center'> 
            <img src={search} alt="search" /> Jobi </h3>
        </div>
        <div className='links flex'>
        <Link to ="about" >about</Link>
        <Link to ="" >home</Link>
        <Link to ="signup" >signup</Link>
        <Link to ="login" >Login</Link>
        </div>

        <div className='mobile-nav'>
        <img src={menu} alt="menu"  onClick={()=> {setIsOpenModel(true)}}/>
           {isOpenModel  &&
        <div className='flex column mobile-model align-center'>
        <Link to ="about" >about</Link>
        <Link to ="" >home</Link>
        <Link to ="signup" >signup</Link>
        <Link to ="login" >Login</Link>
          <button onClick={()=> {setIsOpenModel(false)}}>X</button>
        </div>
      }
      </div>
        </div>

   

    </div>
  )
}
