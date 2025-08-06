import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Shopping from '../components/Shopping'
import Arrivals from '../components/Arrivals'
import Others from '../components/Others'
import Footer from '../components/Footer'

const Home = () => {
  return (
   <>
   <Header/>
   <Navbar/>
   <Banner/>
   <Shopping/>
   <Arrivals/>
   <Others/>
   <Footer/>
   </>
  )
}

export default Home