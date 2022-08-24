import React from 'react'
import Surreatbanner from '../../components/artss/artsetmenu/surreat/Surreatbanner'
import Surreatheader from '../../components/artss/artsetmenu/surreat/Surreatheader'
import ArtssMain from '../../components/artss/ArtssMain'
import ArtssPopular from '../../components/artss/ArtssPopular'
import Latestbar from '../../components/catepagerightbar/Latestbar'
import Footer from '../../components/footer/Footer'

export default function Surreatpage() {
  return (
    <>
      <section className="container">
        <Surreatheader />
        <Surreatbanner />
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
