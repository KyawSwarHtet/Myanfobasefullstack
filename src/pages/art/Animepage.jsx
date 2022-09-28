import React from 'react'
import Animebanner from '../../components/artss/artsetmenu/anime/Animebanner'
import Animeheader from '../../components/artss/artsetmenu/anime/Animeheader'
import ArtssMain from '../../components/artss/ArtssMain'
import ArtssPopular from '../../components/artss/ArtssPopular'
import Latestbar from '../../components/catepagerightbar/Latestbar'
import Footer from '../../components/footer/Footer'


export default function Animepage() {
  return (
    <>
      <section className="container">
        <Animeheader />
        <Animebanner />
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
          <Footer/>
    </>
  );
}
