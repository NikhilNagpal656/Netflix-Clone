import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import './Tvshows.css'

import React from 'react'

const TvShows = () => {
  return (
    <div className='TvShows'>
        <Navbar/>
        <div className='TvShows-cards'>
        <h1>Tv Shows</h1>
        <h2>popular</h2>
        </div>
    </div>
  )
}

export default TvShows