import React from 'react'


// navbar
import Navbar from '../src/assets/Components/Navbar'


//Main vedio and slider section
import DetailsMainSection from './assets/Detailpage/Components/DetailsMainSection'

//CopyrightFooter
import CopyrightFooter from '../src/assets/Components/CopyrightFooter'

const DetailPage = () => {
  return (
    <div className='DetailPage'>
      <Navbar/>

      <DetailsMainSection/>

      <CopyrightFooter/>
    </div>
  )
}

export default DetailPage
