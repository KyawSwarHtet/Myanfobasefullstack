import React from 'react'
import Latestbar from '../../components/catepagerightbar/Latestbar'
import Tecmain from '../../components/catepagerightbar/Tecmain'
import Cartoonbanner from '../../components/enterment/entermentsetmenu/cartoon/Cartoonbanner'
import Cartoonheader from '../../components/enterment/entermentsetmenu/cartoon/Cartoonheader'
import Footer from '../../components/footer/Footer'
import TechnologyPopular from '../../components/technology/TechnologyPopular'

export default function Cartoonpage() {
  return (
    <>
      <section className="container">
        <Cartoonheader />
      </section>
      <Cartoonbanner />
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
