import React from 'react'
import Latestbar from '../../components/catepagerightbar/Latestbar'
import Tecmain from '../../components/catepagerightbar/Tecmain'
import Myanmarbanner from '../../components/enterment/entermentsetmenu/myanmar/Myanmarbanner'
import Myanmarheader from '../../components/enterment/entermentsetmenu/myanmar/Myanmarheader'
import Footer from '../../components/footer/Footer'
import TechnologyPopular from '../../components/technology/TechnologyPopular'

export default function Myanmar() {
  return (
    <>
      <section className="container">
        <Myanmarheader />
      </section>
      <Myanmarbanner />
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
