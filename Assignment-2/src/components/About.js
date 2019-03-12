import React from 'react';
import ColorChanger from '../HOC/ColorChanger';
import Display from './Display';
import './App.css';
import Popup from "reactjs-popup";
// We are creating functional components because we are not storing any states over here.
// className container and center are materialzied classes to give our app a look.

const About = () => {
  return(
    <div>
      <div className='center container'>
        <h4>About My Assignment 2</h4>
        <p> This my About page. </p>

      </div>
      <div className="cards">
         <Display name='John' age='31' Birthmonth='January' />
        <br />
        <input type="text" />
<Popup trigger={<button> Click Me !!</button>} position="right center">
  <div>Popup content here !!</div>
    </Popup>
        </div>
        <br/>
    </div>

  )
}

export default ColorChanger(About);
