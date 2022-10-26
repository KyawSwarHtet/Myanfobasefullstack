import React from 'react'
import Doodlebanner from '../../components/artss/artsetmenu/doodle/Doodlebanner'
import Doodleheader from '../../components/artss/artsetmenu/doodle/Doodleheader'
import ArtssMain from '../../components/artss/ArtssMain'
import ArtssPopular from '../../components/artss/ArtssPopular'
import Latestbar from '../../components/catepagerightbar/Latestbar'
import Footer from '../../components/footer/Footer'

export default function Doodlepage() {
  return (
    <>
      <section className="container">
        <Doodleheader />
        <Doodlebanner />
      </section>
      <section className="container">
        <div className="artbody">
          <ArtssMain />
          <div className="allRightBar">
            <ArtssPopular />
            <Latestbar />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
