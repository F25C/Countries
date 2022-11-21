import { useSelector, useDispatch } from 'react-redux'
import React from 'react'
import { useEffect } from 'react'
import { allActivities} from '../redux/actions'
import { Link } from 'react-router-dom'
import '../style/Activities.css'

function Activities({id}) {
const {activity} = useSelector(state => state)
const dispatch = useDispatch()

useEffect(()=>{
    dispatch(allActivities())
},[dispatch, id])


  return (
    <div >
    <div>
      <Link to= '/countries' className='resetLink'><button id='btnBack'>Back!</button></Link>
    </div>
        {
         activity.length > 0 ? activity.map(e=>
            <div key= {e.id} className='inf-act'>
             <h3>Activity Name: {e.name}</h3>
             <p>Season: {e.season}</p>
             <p>Difficulty: {e.difficulty}</p>
             <p>Duration: {e.duration}</p>
             <h4>Countries:  </h4>
             {
             e.countries.map(c=> <p key={c.id}>{c.name}</p>)
             }
            
             </div>
             )  : <p>There is no activity created yet</p>
        }
              
        
    </div>
  )
}

export default Activities