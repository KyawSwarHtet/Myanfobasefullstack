import React from 'react'
import "./art.css"
import Artssbanner from '../../components/artss/Artssbanner';
import Artssheader from '../../components/artss/Artssheader'
import ArtssMain from '../../components/artss/ArtssMain';
import ArtssPopular from '../../components/artss/ArtssPopular';
import Latestbar from '../../components/catepagerightbar/Latestbar';
import Footer from '../../components/footer/Footer';


export default function Art() {
  return (
    <>
      <Artssheader />
      <section className="container">
        <Artssbanner />
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
