import React from 'react';
import {Route, Routes, Link} from 'react-router-dom'
import Usuario from './Usuario';
import Header from './Header';

export default function App() {
  return (
      <>
    <header>
    <p><Link to='/usuario'>Usuario</Link></p>
    <p><Link to='/header'>Header</Link></p>
    </header>
    <main>
        <Routes>
          <Route path='/usuario' element= {<Usuario/>}/>
          <Route path='/header' element= {<Header/>}/>
        </Routes>
    </main></>
  );
}
