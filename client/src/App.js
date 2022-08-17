import { useState, useEffect } from 'react'
import './App.css';
import Page from './Page'
import Navbar from './components/Navbar'
import Fullscreen from './components/Fullscreen'
import { mdiHomeVariantOutline, mdiMapMarkerOutline, mdiHeartMultipleOutline, mdiCalendarOutline, mdiTextBoxOutline, mdiLogoutVariant } from '@mdi/js';
import Location from './Location'
import Pengantin from './Pengantin'
import Event from './Event'
import Home from './Home'

function App() {
  const [apiResponse, setApiResponse] = useState('')
  const [page, setPage] = useState('home')

  function callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => setApiResponse(res))
  }

  const handleScroll = event => {
    console.log('scrollTop: ', event.currentTarget.scrollTop);
    console.log('offsetHeight: ', event.currentTarget.offsetHeight);
  };


  const list = [
    { label: 'Home', value: 'home', icon: mdiHomeVariantOutline, content: <Home /> },
    { label: 'Pengantin', value: 'pengantin', icon: mdiHeartMultipleOutline, content: <Pengantin /> },
    { label: 'Acara', value: 'acara', icon: mdiCalendarOutline, content: <Event /> },
    { label: 'Lokasi', value: 'lokasi', icon: mdiMapMarkerOutline, content: <Location /> },
    { label: 'Adab', value: 'adab', icon: mdiTextBoxOutline },
    { label: 'Penutup', value: 'penutup', icon: mdiLogoutVariant },
  ]

  useEffect(() => {
    callAPI();
  })

  return (
    <div className="App">
      <div className="container"
        onScroll={handleScroll}>
        {list.map((page, index) => {
          return (
            <Page page={page} index={index} key={`page-${page.value}`} content={page.content}></Page>
          )
        })}
      </div>
      <Navbar menu={list} page={page} setPage={setPage} />
      <Fullscreen />
    </div>
  );
}

export default App;
