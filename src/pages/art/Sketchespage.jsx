import React from 'react'
import Sketchesbanner from '../../components/artss/artsetmenu/sketches/Sketchesbanner'
import Sketchesheader from '../../components/artss/artsetmenu/sketches/Sketchesheader'
import ArtssMain from '../../components/artss/ArtssMain'
import ArtssPopular from '../../components/artss/ArtssPopular'
import Latestbar from '../../components/catepagerightbar/Latestbar'
import Footer from '../../components/footer/Footer'

export default function Sketchespage() {
  return (
    <>
          <section className='container'>
              <Sketchesheader />
              <Sketchesbanner />
              <section className='contaier'>
                  <div className='artbody'>
                      <ArtssMain />
                      <div className='allRightBar'>
                          <ArtssPopular />
                          <Latestbar/>
                      </div>
                  </div>
              </section>
          </section>
          <Footer/>
    </>
  )
}
