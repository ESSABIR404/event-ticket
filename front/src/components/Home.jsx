import React from 'react';
import Header from './Home/Header';
import './Home.scss';
import Psection from './Home/Psection';
import Dsection from './Home/Dsection';

function Home() {
  return (
    <div className='Home'>
        <div className='psection-home'>
        <Header/>
        <Psection/>
        </div>
     <Dsection/>
    </div>
  );
}

export default Home;