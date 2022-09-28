import React from 'react'
import Latestbar from '../../components/catepagerightbar/Latestbar';
import Footer from '../../components/footer/Footer';
import SportMain from '../../components/sport/SportMain';
import SportPopular from '../../components/sport/SportPopular';
import Boxingbanner from '../../components/sport/sportsetmenu/boxing/Boxingbanner';
import Boxingheader from '../../components/sport/sportsetmenu/boxing/Boxingheader'

export default function Boxingpage() {
  return (
    <>
      <section className="container">
        <Boxingheader />
          </section>
          <Boxingbanner />
          <section className='container'>
        <div className='sportbody'>
          <SportMain />
          <div className='allRightBar'>
            <SportPopular />
            <Latestbar/>
          </div>
              </div>
      </section>
      <Footer/>
    </>
  );
}
