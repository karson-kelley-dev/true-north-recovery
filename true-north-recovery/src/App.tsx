import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout'
import Compliance from './pages/compliance.tsx'
import Contact from './pages/contact.tsx'
import Coverage from './pages/coverage.tsx'
import Home from './pages/home.tsx'
import Services from './pages/services.tsx'

function App() {
  return (
    <div style={{ margin: 0, padding: 0, border: 'none' }}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/services' element={<Services />} />
            <Route path='/compliance' element={<Compliance />}></Route>
            <Route path='/coverage' element={<Coverage />}></Route>
            <Route path='contact' element={<Contact />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App