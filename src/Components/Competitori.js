import React from 'react';
import '../Styles/Competitori.css';
import LogoCad from '../Assets/logo cadiliac.webp';
import LogoPor from '../Assets/porschelogo4.png';
import LogoToy from '../Assets/logo toyota.png';
import Logfer from '../Assets/logo5.png';

function Competitori() {
  return (
    <div className='DivEchipe'>
    <div className='Echipa1 logo-1'>
      <img src={LogoCad}/>
    </div>
    <div className='Echipa2 logo-2'>
      <img src={LogoPor}/>
    </div>
    <div className='Echipa3 logo-3'>
      <img src={LogoToy}/>
    </div>
    <div className='Echipa4 logo-4'>
      <img src={Logfer}/>
    </div>
</div>
  )
}

export default Competitori