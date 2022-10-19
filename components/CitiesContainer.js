import React, {useState, useEffect} from 'react';
import { useSpring, animated as s} from 'react-spring';
import CityCard from './CityCard';

export default function CitiesContainer({cities}) {

    const springLeft = useSpring({
        from: {marginRight: 300, opacity: 0},
        opacity: 1, 
        marginRight: 40, 
        config: {mass: 1, tension: 25, friction: 20}
    });
    const springRight = useSpring({
        from: {marginLeft: 300, opacity: 0},
        opacity: 1, 
        marginLeft: 40, 
        config: {mass: 1, tension: 20, friction: 20}
    });

    const scrollToTop = () =>{
        window.scrollTo(0, 0); 
    }

    const [display, setDisplay] = useState(false); 

    useEffect(() => {
        document.addEventListener("scroll", () => {
          if (window.scrollY > 100) {
            setDisplay(true); 
          } else {
            setDisplay(false);
          }
        })
      }, [display]);


  return (
    <div>
        <div className='citiesContainerHeaderDiv'>
            <s.div style={{...springLeft}}>
                <i className='fa-solid fa-city fa-7x'></i>
            </s.div>
            <div>
                <h1>Most Popular Cities Around the World!</h1>
                <h3>Find your dream city from the 25 most visited in the world!</h3>
                <h5>Cities start at most popular!</h5>
            </div>
            <s.div style={{...springRight}}>
                <i className='fa-solid fa-earth-europe fa-7x'></i>
            </s.div>
        </div>
        <div className='cities-container'>
            {
            cities.map( 
              city => { 
                return <CityCard key={cities.key} cities={city} />
              }
            )
            }
        </div>
        <div className={ (display) ?'toTopArrowDiv' :'slideOffScreen' }>
            <i className='fa-solid fa-circle-up fa-2x' onClick={scrollToTop}></i>
        </div>
  </div>
  )
}
