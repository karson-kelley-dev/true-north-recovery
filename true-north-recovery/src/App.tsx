import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout'
import ComingSoon from './pages/coming-soon'
import Home from './pages/home'

function App() {
  return (
    <div style={{ margin: 0, padding: 0, border: 'none' }}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route element={<Home />} />
            <Route path='/' element={<ComingSoon />}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App