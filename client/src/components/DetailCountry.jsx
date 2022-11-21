import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getCountryId} from '../redux/actions'
import {Link} from 'react-router-dom' 
import '../style/DetailCountry.css'
export default function DetailCountry() {

  const {id} = useParams()
  const dispatch= useDispatch();
  const {countryId }= useSelector((state)=> state)
  
  useEffect(()=>{
    dispatch(getCountryId(id))
  },[dispatch, id]);





  return (
    <div className="contain">
       <div>
        <Link to="/countries" className='resetLink'><button id='btnBackhome'>Back!</button></Link>
      </div>
    
        <img src={countryId.flags} className='img-detail'alt="img not found"/>
      {
       countryId ? 
      //  <div className='detail-country'>
      <div className='info'>
      <h4 className='name'>Name: {countryId.name}</h4>
      <p className='continent'>Continent: {countryId.continent}</p>
      <p className='code'>Code: {countryId.id}</p>
      <p className='capital'>Capital: {countryId.capital}</p>
      <p className='subre'>Subregion: {countryId.subregion}</p>
      <p className='area'>Area: {`${countryId.area} km² `}</p>
      <p className='population'>Population: {`${countryId.population} people`}</p>
      </div>
      // </div>
      : <p>Loding..</p>
      }
      <div className='activ'>
        <h2 className='title'>Tourist activities:</h2>
          {
            countryId.activities && countryId.activities.length ? countryId.activities.map((e)=> {
              return (
                <div key= {e.id} className='activity'>
                <p className='activ-name'>Activity Name: {e.name}</p>
                <p >Season: {e.season}</p>
                <p >Difficulty: {e.difficulty}</p>
                <p >Duration: {e.duration}</p>
                 </div>
                 ) 
               } 
            ) : <p className='inval'>No activities assigned yet</p> 
              }
      </div>
    </div>
  )
}
 
