import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getCountries, postActivity} from '../redux/actions'
import {Link}from 'react-router-dom'
import '../style/CreateActivity.css'


// const inputValidate = (form) =>{
//   let errors= {}
  
//   if( form.countriesAct.length === 0)
//     errors.countriesAct= "You must choose"
//   if(!form.season || form.season === "vacio") errors.season = "You must choose an option"
//   if(!form.difficulty) errors.difficulty= "must assign a value"
//   if(!form.name) errors.name= "Required field"
//   else if(/[0-9]+/gi.test(form.name)) errors.name= "Only letters"
//   return errors;
//   }


function CreateActivity() {
const [ form , setForm] = useState({
  name:"",
  difficulty:0, 
  duration:1,
  season:"",
  countriesAct:[]
});
const [errors, setError]= useState({});
const [ flag, setFlag]=useState(false)
const dispatch = useDispatch()

const {countries}= useSelector((state)=>state)


const inputValidate = (form) =>{
  let errors= {}
  
  if( form.countriesAct.length === 0) errors.countriesAct= "You must choose"
  if(!form.season || form.season === "vacio") errors.season = "You must choose an option"
  if(!form.difficulty) errors.difficulty= "must assign a value"
  if(!form.name) errors.name= "Required field"
  else if(/[0-9]+/gi.test(form.name)) errors.name= "Only letters"
  return errors;
  }


const handleChange =(e)=>{
  setForm({
    ...form,
    [e.target.name]: e.target.value  
  }
)
  setError(inputValidate({
    ...form,
      [e.target.name]: e.target.value 
   }
  )
 )

}

const handleSubmit = (e) =>{
  console.log(form, 'estoy en form')
   e.preventDefault()
   if(!form.name || !form.difficulty || !form.season || !form.duration || !form.countriesAct.length){
  
     return alert('please complete the field requered befor submit')
    } 
    dispatch(postActivity(form))
   
    alert("activity created")
    setForm({
     name:"",
     difficulty:0, 
     duration:1,
     season:"",
     countriesAct:[]
   }
 )
}

  const handleClick=(e)=>{
    if(form.countriesAct.includes(e.target.value)) return 1
    setForm({
      ...form,
      countriesAct:[...form.countriesAct, e.target.value]
      }
    )
  }
  
  const deleteClick = (e, name) =>{
    e.preventDefault()
    setForm({
      ...form,
      countriesAct:[...form.countriesAct.filter(e => e !== name)]
    })
  }
  

 useEffect(()=>{
  dispatch(getCountries())
 
 },[dispatch])



return (
    <div>
         <div >
            <Link to="/countries" className='resetLink'><button id='btnBackact'>Back!</button></Link>
          </div>
     <form onSubmit={handleSubmit}>
        <div className='formContenedor' >
           <label id='wor'>Name: </label>
               <input type= "text"  id='inp' placeholder='Activity name' onChange={handleChange} name='name' value={form.name}/>
                     { errors.name && (<p id='error'>{errors.name}</p>)}
                      <hr/>

           <label id='wor'>Difficulty: </label>
                 <input id="inp" type="range" min="1" max="5"  name="difficulty" onChange={handleChange} value={form.difficulty}/>
                    <p>difficulty asigned: {form.difficulty}</p>
                      <hr/>
                     { errors.difficulty && (<p id='error'>{ errors.difficulty}</p>)}

           <label id='wor'>Duration: </label>
                 <input id="inp" type="range" min="1" max ="7"  name="duration" onChange={handleChange} value={form.duration}/>
                    <p>{`${form.duration} hours or more`}</p>
                      <hr/>
                     { errors.duration && (<p id='error'>{errors.duration}</p>)}

           <label id='wor'>Season: </label>
                 <select name="season" id='season' onChange={handleChange} value={form.season}>
                      <option value="vacio"></option>
                      <option value="Spring">Spring</option>
                      <option value="Summer">Summer</option>
                      <option value="Fall">Fall</option>
                      <option value="Winter">Winter</option>
                 </select>
                     { errors.season && (<p id='error'>{errors.season}</p>)}
                       <hr/>

           <label id='wor'>Countries:</label>
                <select id='chose'name='countriesAct' onChange={handleClick}>
                       <option value='vacio'></option>
                       
                       { countries.map((e, i )=> 
                       <option id='selectorCountry' key={e.id} value={e.name}>{e.name}</option> )}     
                </select>
    
                     { form.countriesAct.map((c, i)=> 
                         <div id='contryCard' key={i}>
                             <p>{c}</p>
                               <button id='btnDelete' onClick={(e)=>deleteClick(e,c)}>x</button>
                         </div>  )} 
              
                           {/* { errors.countriesAct && (<p id='error'>{errors.countriesAct}</p>)} */}
              </div>
            <hr/>
          <button type= "submit" id='btnCreate' disabled={flag}>Create new activity</button>
        </form>
      </div>
 
  )
}

export default CreateActivity



