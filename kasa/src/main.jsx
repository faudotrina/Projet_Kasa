import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home.jsx'
import Apropos from './pages/Apropos.jsx'
import Fiche from './pages/Fiche.jsx'

import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Error from './components/Error/Error.jsx'

createRoot(document.getElementById('root')).render(
  <Router>
    <Header />
    <main role="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/fiche/:id" element={<Fiche />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </main>
    <Footer />
  </Router>,
)
