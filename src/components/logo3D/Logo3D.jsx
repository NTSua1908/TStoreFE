import React from 'react';
import './logo3D.scss'

const brand = ['T', 'S', 'T', 'O', 'R', 'E']

function Logo3D(props) {
  return (
    <div className='logo-3d'>
      { 
        brand.map((item, index) => (
          <div className="logo-3d__text" style={{$i : index}}>
            <span style={{'--j' : 0}}>{item}</span>
            <span style={{'--j' : 1}}></span>
            <span style={{'--j' : 2}}></span>
            <span style={{'--j' : 3}}></span>
          </div>
        ))
      }
    </div>
  );
}

export default Logo3D;