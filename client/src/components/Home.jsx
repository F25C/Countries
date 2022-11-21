
import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getCountries, filterByContinent, orderCountry, orderPopulation} from "../redux/actions"
import NavBar from "./NavBar";
import Country from './Country';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../style/Home.css'






export default function Home() {
const dispatch= useDispatch();
const { filterCountries} = useSelector((state)=> state);
const [current, setCurrent] = useState(0)
let length= 10

const paginate = (countryArr)=>{
return current === 0 ? countryArr.slice(current, length -1) : countryArr.slice(current, current + length)
}

const btnNext=()=>{setCurrent(c => filterCountries[c + length] ? c + length : c  )}
const btnPrev=()=>{setCurrent(c => c && c - length)}




const handleClick = (e) => { 
  dispatch(filterByContinent(e.target.value))
  setCurrent(0)
}
const handleChange = (e) => { 
  dispatch(orderCountry(e.target.value))
 setCurrent(0) 
} 
const handleClickpop =(e) => { 
  dispatch(orderPopulation(e.target.value))
  setCurrent(0)
}



useEffect(()=>{
  dispatch(getCountries())
}, [dispatch])


  return (  
    <div>
 
      <NavBar/>
      <br/>

      <div className='contein-home'>
<Link to={ '/activities'} className='resetLink' ><option id='words'>Activities</option></Link>
 
       <select id='words' onChange ={handleChange}>
       <option value= "All">Alphabetic Names</option>
        <option value="asc"> A  -  Z</option>
        <option value="des">Z  -  A</option>
       </select>
    
       <select id='words' onChange ={handleClickpop}>
        <option value="All">Population</option>
        <option value="asc">asc</option>
        <option value="des">des</option>
       </select>
      
        <select id='words' onChange={handleClick}>
          <option  value={"All"}>Continent</option>
          <option value={"Africa"}>Africa</option>
          <option value={"North America"}>North America</option>
          <option value={"South America"}>South America</option>
          <option value={"Europe"}>Europe</option>
          <option value={"Asia"}>Asia</option>
          <option value={"Oceania"}>Oceania</option>
          <option value={"Antarctica"}>Antarctica</option>
        </select>
     </div>
        <button onClick={btnPrev} id='btnN'>Prev</button>
        <button onClick={btnNext} id='btnN'>Next</button>
        
        <Link to= "/activity" className='resetLink'><button className='btnA'>Create Activity</button></Link>
     <div className='cards'>
     { paginate(filterCountries).map((e)=><Country key={e.id} {...e}/>) }
     </div>
        
    </div>
  )
}

