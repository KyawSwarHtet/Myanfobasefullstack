import React from 'react'
import Latestbar from '../../components/catepagerightbar/Latestbar'
import Tecmain from '../../components/catepagerightbar/Tecmain'
import Moviebanner from '../../components/enterment/entermentsetmenu/movie/Moviebanner'
import Movieheader from '../../components/enterment/entermentsetmenu/movie/Movieheader'
import TechnologyPopular from '../../components/technology/TechnologyPopular'


export default function Moviepage() {
  return (
    <>
          <section className='container'>
              <Movieheader/>
          </section>
          <Moviebanner/>
          <section className='container'>
              <div className='tecbody'>
                  <Tecmain />
                  <div className='allRightBar'>
                      <TechnologyPopular />
                      <Latestbar/>
                  </div>
              </div>
          </section>
    </>
  )
}
