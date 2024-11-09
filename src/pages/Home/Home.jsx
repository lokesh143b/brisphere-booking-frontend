import React from 'react'
import Header from '../../components/Header/Header'
import Discover from '../../components/Discover/Discover'
import Services from '../../components/Services/Services'
import './Home.css'

const Home = () => {
  return (
    <div className='home-container'>
      <Header/>
      <Discover/>
      <Services/>
    </div>
  )
}

export default Home