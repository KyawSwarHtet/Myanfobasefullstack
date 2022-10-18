import React from 'react'
import Latestbar from '../../components/catepagerightbar/Latestbar'
import Footer from '../../components/footer/Footer'
import SportMain from '../../components/sport/SportMain'
import SportPopular from '../../components/sport/SportPopular'
import Caneballbanner from '../../components/sport/sportsetmenu/caneball/Caneballbanner'
import Caneballheader from '../../components/sport/sportsetmenu/caneball/Caneballheader'

export default function Caneballpage() {
  return (
    <>
          <section className='container'>
              <Caneballheader/>
          </section>
          <Caneballbanner />
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
