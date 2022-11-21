import React from 'react'
import {Link} from 'react-router-dom'
import '../style/Country.css'
function Country({id,name, flags, continent}) {

  return (
    <div className='card'>
        <img src={flags} className='img'alt="img not found"/>
        <h4 className="text-title">{name}</h4>
        <h4  className='card-info'>{continent}</h4>
        <Link to = {`/countries/${id}`} className='resetLink'><button className='card-button '>Read more</button></Link>
    </div>
  )
}

export default Country