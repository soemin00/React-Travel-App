import React from 'react'
import './Packages.css';
import Australia from './Pictures/Destinations/Australia.jpg';
import England from './Pictures/Destinations/England.jpg';
import Germany from './Pictures/Destinations/Germany.jpg';
import Italy from './Pictures/Destinations/Italy.jpg';
import Maldives from './Pictures/Destinations/Maldives.jpg';
import Nepal from './Pictures/Destinations/Nepal.jpg';
import Spain from './Pictures/Destinations/Spain.jpg';
import UAE from './Pictures/Destinations/UAE.jpg';
export default function Packages() {
  return (
    <>
      <h1>OUR DESTINATIONS</h1>
        <div className='cards'>
            <div className='box'>
              <img src={Australia} alt="Australia" />
              <h4>AUSTRALIA</h4>
              <p>Destinations - Sydney, Melbourne, Adeliade</p>
              <button>BOOK NOW</button>
            </div>
            <div className='box'>
              <img src={England} alt="England" />
              <h4>ENGLAND</h4>
              <p>Destinations - London, Manchester, Liverpool, Bristol</p>
              <button>BOOK NOW</button>
            </div>
            <div className='box'>
            <img src={Germany} alt="Germany" />
            <h4>GERMANY</h4>
            <p>Destinations - Barlin, Munich, Frankfurt, Leipzig</p>
            <button>BOOK NOW</button>
            </div>
            <div className='box'>
            <img src={Italy} alt="Italy" />
            <h4>ITALY</h4>
            <p>Destinations - Rome, Turin, Venice, Milan</p>
            <button>BOOK NOW</button>
            </div>
        </div>
        <div className='cards'>
            <div className='box'>
            <img src={Maldives} alt="Maldives" />
            <h4>MALDIVES</h4>
            <p>Destinations - Maafushi Island, Hulhumale</p>
            <button>BOOK NOW</button>
            </div>
            <div className='box'>
            <img src={Nepal} alt="Nepal" />
            <h4>NEPAL</h4>
            <p>Destinations - Kathmandu, Pokhara, Lumbini</p>
            <button>BOOK NOW</button>
            </div>
            <div className='box'>
            <img src={Spain} alt="Spain" />
            <h4>SPAIN</h4>
            <p>Destinations - Madrid, Barcelona, Valencia</p>
            <button>BOOK NOW</button>
            </div>
            <div className='box'>
            <img src={UAE} alt="UAE" />
            <h4>UAE</h4>
            <p>Destinations - Dubai, Abu Dhabi, Sharjah</p>
            <button>BOOK NOW</button>
            </div>
        </div>
    </>
  )
}
