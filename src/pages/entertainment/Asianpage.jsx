import React from 'react'
import Latestbar from '../../components/catepagerightbar/Latestbar'
import Tecmain from '../../components/catepagerightbar/Tecmain'
import Asianbanner from '../../components/enterment/entermentsetmenu/asian/Asianbanner'
import Asianheader from '../../components/enterment/entermentsetmenu/asian/Asianheader'
import TechnologyPopular from '../../components/technology/TechnologyPopular'

export default function Asianpage() {
  return (
    <>
      <section className="container">
        <Asianheader />
      </section>
      <Asianbanner />
      <section className="container">
        <div className="tecbody">
          <Tecmain />
          <div className="allRightBar">
            <TechnologyPopular />
            <Latestbar />
          </div>
        </div>
      </section>
    </>
  );
}
