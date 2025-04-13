import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home.jsx'
import Apropos from './pages/Apropos.jsx'

import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Error from './components/Error/Error.jsx'

import LayoutAvecCover from './layouts/LayoutAvecCover.jsx'

createRoot(document.getElementById('root')).render(
  <Router>
    <Header />
    <Routes>
      <Route element={<LayoutAvecCover />}>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
  </Router>,
)
