import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Application from './pages/Application';

import Footer from './containers/footer'
import Header from './containers/header'


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/application" element={<Application />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
