import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard';
import Library from './Library';
const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/Library" element={<Library />} />
        </Routes>
      </Router>

    </>

  )
}
export default App;