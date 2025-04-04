import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './pages/Home/index.jsx'
import Survey from './pages/Home/Survey.jsx'
import Header from './components/Header/index.jsx'
import Footer from './components/Footer/index.jsx'
import Error from './components/Error/index.jsx'
import Cover from './components/Cover/index.jsx'
import LayoutAvecCover from './layouts/LayoutAvecCover'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route element={<LayoutAvecCover />}>
          <Route path="/" element={<App />} />
          <Route path="/survey" element={<Survey />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
)
