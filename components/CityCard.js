import React from 'react'

export default function CityCard({cities, key}) {
  return (
    <div className='city-card' key={key}>
        <img className='city-image' src={cities.imageURL} alt="City" />
        <h3>{cities.city}</h3>
        <p>{cities.description}</p>
        <a href={`/cityDetails/${cities.city}`}><button>City Details</button></a>
    </div>
  )
}