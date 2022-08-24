import React from 'react'
import Latestbar from '../../components/catepagerightbar/Latestbar'
import Tecmain from '../../components/catepagerightbar/Tecmain'

import Cinemabanner from '../../components/enterment/entermentsetmenu/cinema/Cinemabanner'
import Cinemaheader from '../../components/enterment/entermentsetmenu/cinema/Cinemaheader'
import Footer from '../../components/footer/Footer'
import TechnologyPopular from '../../components/technology/TechnologyPopular'

export default function Cinemapage() {
  return (
    <>
      <section className="container">
        <Cinemaheader />
      </section>
      <Cinemabanner />
      <section className="container">
        <div className="tecbody">
          <Tecmain />
          <div className="allRightBar">
            <TechnologyPopular />
            <Latestbar />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
