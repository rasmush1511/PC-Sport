import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Ydelser from './pages/Ydelser'
import Cykler from './pages/Cykler'
import OmOs from './pages/OmOs'
import Kontakt from './pages/Kontakt'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="ydelser" element={<Ydelser />} />
          <Route path="cykler" element={<Cykler />} />
          <Route path="om-os" element={<OmOs />} />
          <Route path="kontakt" element={<Kontakt />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
