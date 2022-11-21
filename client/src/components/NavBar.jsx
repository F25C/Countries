import React from 'react'
import { useState } from 'react';
import {useDispatch} from "react-redux"
import '../style/NavBar.css'
import { getCountryName } from "../redux/actions"


function NavBar() {
const [name, setName]= useState("")
const dispatch = useDispatch()
 

const handleChange = (e) => {
  let boton = document.getElementById("boton")
  let nav = document.getElementById("nav")
  nav.length !== 0 ? boton.disabled = false : boton.disabled = true;
  setName(e.target.value)

 }

const handleClick =(e)=>{ 
    e.preventDefault()
    dispatch(getCountryName(name))
     setName("");
  }
  
  return (

    <div >
      <form onSubmit={handleClick}>
        <div>
          <label className='input2' >Know your destiny <br/></label>
          <input type="text" className='input' value={name} name="name" id ="nav" placeholder='I want to meet ...' onChange={handleChange} />
          <input type="submit" id="boton" disabled={true} value="GO!"></input>
      </div>
    </form>
    </div>
  )
}

export default NavBar;