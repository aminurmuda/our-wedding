import { useState, useEffect } from 'react'
import './App.css';

function App() {
  const [apiResponse, setApiResponse] = useState('')
  const [page, setPage] = useState('Home')

  function callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => setApiResponse(res))
  }

  // const list = ['Home', 'Pengantin', 'Acara']

  const goToPage = (index) => {
    setPage(index)
    document.querySelector(`#page-${index}`).scrollIntoView({
      behavior: 'smooth'
    });
  }

  useEffect(() => {
    callAPI();
  })

  const isActive = (item) => {
    return item === page
  }

  const NavbarItem = (props) => {
    return (
      <div className={`navbar-item ${isActive(props.item) ? 'is-active' : ''}`} onClick={() => { goToPage(props.item) }}>{props.item}</div>
    )
  }


  const Floating = () => {
    return (
      <div className="float">
        <p>Current Page: {page}</p>
        <div className='scroll-bar'>
          <div className="navbar">
            <NavbarItem item="Home" />
            <NavbarItem item="Pengantin" />
            <NavbarItem item="Acara" />
            <NavbarItem item="Lokasi" />
            <NavbarItem item="Penutup" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="App">
      <div id="page-Home" className="container center bg-white">

        <Floating />
        Home
        {apiResponse}
      </div>

      <div id="page-Pengantin" className="container center bg-cream">
        Pengantin
      </div>

      <div id="page-Acara" className="container center bg-white">
        Acara
      </div>

      <div id="page-Lokasi" className="container center bg-cream">
        Lokasi
      </div>

      <div id="page-Penutup" className="container center bg-white">
        Penutup
      </div>
    </div>
  );
}

export default App;
