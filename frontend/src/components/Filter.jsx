import React from "react";
import { useFormRegister } from '../hooks/useFormRegister.js'
import barsImg from '../assets/imgs/bars.svg'
import logoImg from '../assets/imgs/logo.svg'

export default function Filter(props) {
    const [register] = useFormRegister({
        company: '',
    }, props.onChangeFilter)

 

  return (
        <div className="filter flex column">
          <label htmlFor="company">
          <input type="text"{...register('company')} placeholder="company name" />
          <img src={barsImg} alt="bars" className="barsImg"/>
          <img src={logoImg} alt="bars" className="logoImg"/>
          </label>
        
        </div>
  );
}





   