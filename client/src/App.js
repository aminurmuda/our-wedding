import { useState } from 'react'
import './App.css';
import Page from './Page'
import Navbar from './components/Navbar'
import Fullscreen from './components/Fullscreen'
import { mdiHomeVariantOutline, mdiMapMarkerOutline, mdiHeartMultipleOutline, mdiCalendarOutline, mdiTextBoxOutline, mdiLogoutVariant } from '@mdi/js';
import Location from './Location'
import Pengantin from './Pengantin'
import Event from './Event'
import Home from './Home'
import Adab from './Adab'
import Closing from './Closing'
import Cover from './Cover'
import BackgroundAudio from './components/BackgroundAudio';

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [isOpen, setIsOpen] = useState(false)


  const handleScroll = event => {
    // console.log('scrollTop: ', event.currentTarget.scrollTop);
    // console.log('offsetHeight: ', event.currentTarget.offsetHeight);
  };

  const handleClick = (page) => {
    // setCurrentPage(page)
    setIsOpen(true)
  }


  const pages = [
    { label: 'Home', value: 'home', icon: mdiHomeVariantOutline, content: <Home /> },
    { label: 'Pengantin', value: 'pengantin', icon: mdiHeartMultipleOutline, content: <Pengantin /> },
    { label: 'Acara', value: 'acara', icon: mdiCalendarOutline, content: <Event /> },
    { label: 'Lokasi', value: 'lokasi', icon: mdiMapMarkerOutline, content: <Location /> },
    { label: 'Adab', value: 'adab', icon: mdiTextBoxOutline, content: <Adab /> },
    { label: 'Penutup', value: 'penutup', icon: mdiLogoutVariant, content: <Closing /> },
  ]

  return (
    <div className="App">
      {
        isOpen ?
          <>
            <div className="container"
              onScroll={handleScroll}>
              {pages.map((page, index) => {
                return (
                  <Page currentPage={currentPage} page={page} index={index} key={`page-${page.value}`} content={page.content}></Page>
                )
              })}
            </div>
            <Navbar menus={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <Fullscreen />
            <BackgroundAudio />
          </> :
          <div className="cover bg-soft-lilac">
            <Cover onClick={handleClick} />
          </div>
      }
    </div>
  );
}

export default App;
