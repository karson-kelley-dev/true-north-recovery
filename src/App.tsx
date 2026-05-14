import { useEffect } from 'react'
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom'
import Layout from './layout/index.tsx'
import Compliance from './pages/compliance.tsx'
import Contact from './pages/contact.tsx'
import Coverage from './pages/coverage.tsx'
import Home from './pages/home.tsx'
import Services from './pages/services.tsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/compliance' element={<Compliance />}></Route>
          <Route path='/coverage' element={<Coverage />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </Layout>
    </HashRouter>
  )
}

export default App