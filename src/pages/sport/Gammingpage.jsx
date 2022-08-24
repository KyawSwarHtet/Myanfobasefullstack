import React from 'react'
import Latestbar from '../../components/catepagerightbar/Latestbar'
import Footer from '../../components/footer/Footer'
import SportMain from '../../components/sport/SportMain'
import SportPopular from '../../components/sport/SportPopular'
import Gammingbanner from '../../components/sport/sportsetmenu/gamming/Gammingbanner'
import Gammingheader from '../../components/sport/sportsetmenu/gamming/Gammingheader'

export default function Gammingpage() {
  return (
    <>
          <section className='container'>
              <Gammingheader/>
          </section>
          <Gammingbanner />
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
  )
}
