import React from 'react'
import Navbar from './Navbar/Navbar'
import Homepage from './Homepage/Home'
import ProgramCards from './ProgrammeCards/ProgramCards'
import WorkingCards from './WorkingCards/Cards'
import Reviews from './Reviews/Reviews'
import About from './About/About'
import FAQ from './FAQ/FAQ'
import SubmittionForm from './SubmittionForm/Form'
import Resources from './EduResources/Resources'
import Footer from './Footer/Footer'

function Home() {
  return (
    <>
     <div className='home'>
        <Navbar/>
        <Homepage/>
        <ProgramCards/>
        <WorkingCards/>
        <About/>
        <Reviews/>
        <FAQ/>
        <SubmittionForm/>
        <Resources/>
        <Footer/>
        </div> 
    </>
  )
}

export default Home


