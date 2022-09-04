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
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const closeCover = () => {
    setIsOpen(true)
    document.documentElement.requestFullscreen();
    setCurrentPage('home')
    setIsFullscreen(true)
    window.scrollTo(0, 0);
  }


  const pages = [
    { label: 'Pembuka', value: 'home', icon: mdiHomeVariantOutline, content: <Home /> },
    { label: 'Pengantin', value: 'pengantin', icon: mdiHeartMultipleOutline, content: <Pengantin /> },
    { label: 'Acara', value: 'acara', icon: mdiCalendarOutline, content: <Event /> },
    { label: 'Lokasi', value: 'lokasi', icon: mdiMapMarkerOutline, content: <Location /> },
    { label: 'Adab', value: 'adab', icon: mdiTextBoxOutline, content: <Adab /> },
    { label: 'Penutup', value: 'penutup', icon: mdiLogoutVariant, content: <Closing /> },
  ]

  return (
    <div className="App">
      <div>
        <div className="container">
          {pages.map((page, index) => {
            return (
              <Page currentPage={currentPage} page={page} index={index} key={`page-${page.value}`} content={page.content}></Page>
            )
          })}
        </div>
        <Navbar menus={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <Fullscreen isFullscreen={isFullscreen} setIsFullscreen={setIsFullscreen} />
        <BackgroundAudio />
      </div>
      {
        !isOpen &&
        <div className="cover bg-soft-lilac">
          <Cover onClick={closeCover} />
        </div>
      }

    </div>
  );
}

export default App;
