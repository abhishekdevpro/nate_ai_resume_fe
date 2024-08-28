import React from 'react'
import Homefirst from './Home/Homefirst'
import Home_Second from './Home/Homesecond'
import Homelast from './Home/Homelast'
import Teamdetail from './Home/Teamdetail'
import Teamseconddetail from './Home/Teamseconddetail'
import HowItWorks from './Home/Howitworks'

function Home_page() {
  return (
    <>
      <Homefirst/>
      <Home_Second/>
      <Teamdetail/>
      <HowItWorks/>
      <Teamseconddetail/>
      <Homelast/>
      
    </>
  )
}

export default Home_page
