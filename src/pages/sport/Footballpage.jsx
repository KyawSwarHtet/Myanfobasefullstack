import React from 'react'
import Latestbar from '../../components/catepagerightbar/Latestbar'
import Footer from '../../components/footer/Footer'
import SportMain from '../../components/sport/SportMain'
import SportPopular from '../../components/sport/SportPopular'
import Footballbanner from '../../components/sport/sportsetmenu/football/Footballbanner'
import Footballheader from '../../components/sport/sportsetmenu/football/Footballheader'


export default function Footballpage() {
  return (
    <>
      <section className="container">
        <Footballheader />
      </section>
      <Footballbanner />
      <section className="container">
        <div className="sportbody">
          <SportMain />
          <div className="allRightBar">
            <SportPopular />
            <Latestbar />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
