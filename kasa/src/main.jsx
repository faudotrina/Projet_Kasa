import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './pages/Home/App.jsx'
import Survey from './pages/Home/Survey.jsx'
import Header from './components/Header/index.jsx'
import Error from './components/Error/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/survey" element={<Survey />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
