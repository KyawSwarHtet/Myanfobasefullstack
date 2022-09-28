import React from 'react'
import Latestbar from '../../components/catepagerightbar/Latestbar';
import Tecmain from '../../components/catepagerightbar/Tecmain';
import Koreanbanner from '../../components/enterment/entermentsetmenu/korean/Koreanbanner';
import Koreanheader from '../../components/enterment/entermentsetmenu/korean/Koreanheader';
import Footer from '../../components/footer/Footer';
import TechnologyPopular from '../../components/technology/TechnologyPopular';


export default function Koreanpage() {
  return (
    <>
      <section className="container">
        <Koreanheader />
      </section>
      <Koreanbanner />
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
