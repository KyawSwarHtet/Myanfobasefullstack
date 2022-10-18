import React from 'react'
import Latestbar from '../../components/catepagerightbar/Latestbar';
import Tecmain from '../../components/catepagerightbar/Tecmain';
import Musicbanner from '../../components/enterment/entermentsetmenu/music/Musicbanner'
import Musicheader from '../../components/enterment/entermentsetmenu/music/Musicheader'
import Footer from '../../components/footer/Footer';
import TechnologyPopular from '../../components/technology/TechnologyPopular';

export default function Music() {
  return (
    <>
      <section className="container">
        <Musicheader />
      </section>
      <Musicbanner />
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
