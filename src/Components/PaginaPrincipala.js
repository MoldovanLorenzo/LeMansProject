import React from 'react'
import '../Styles/PaginaPrincipala.css'
import Poza from '../Assets/trofeulemanfarabackground.png';

function PaginaPrincipala() {
  return (
    <div className='paginaHome'>
      <div className='bara'></div>
 <div class="circle" style={{ listStyleType: 'none' }}>
    <ol>
      <li>M</li>
      <li>i</li>
      <li>c</li>
      <li>h</li>
      <li>e</li>
      <li>l</li>
      <li>i</li>
      <li>n</li>
      <li> </li>
      <li>L</li>
      <li>e</li>
      <li> </li>
      <li>M</li>
      <li>a</li>
      <li>n</li>
      <li>s</li>
      <li> </li>
      <li>C</li>
      <li>u</li>
      <li>p</li>
      <li> </li>
    </ol>
  </div>
    <div className='trofeu'>
        <img src={Poza} alt='Poza' className='TrofeuPluteste'/>
    </div>
    </div>
  )
}

export default PaginaPrincipala