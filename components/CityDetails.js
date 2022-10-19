import React from 'react'
import { useParams } from 'react-router-dom'; 

export default function CityDetails({cities}) {
    const {city} = useParams(); 
    const currentCity = cities.filter(item =>item.city === city); 
  return (
    <div className='city-details-container'>
        <img className='detail-image' src={ currentCity[0].imageURL } alt='city' />
        <h3>{ currentCity[0].city.toUpperCase()}</h3>
        <strong>Population: {currentCity[0].population}</strong>
        <p>{ currentCity[0].description}</p>
    </div>
  )
}