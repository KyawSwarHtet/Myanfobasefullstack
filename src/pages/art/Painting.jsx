import React from 'react'
import Paintingbanner from '../../components/artss/artsetmenu/painting/Paintingbanner'
import Paintingheader from '../../components/artss/artsetmenu/painting/Paintingheader'
import ArtssMain from '../../components/artss/ArtssMain'
import ArtssPopular from '../../components/artss/ArtssPopular'
import Latestbar from '../../components/catepagerightbar/Latestbar'
import Footer from '../../components/footer/Footer'

export default function Painting() {
  return (
    <>
      <section className="container">
        <Paintingheader />
        <Paintingbanner />
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
