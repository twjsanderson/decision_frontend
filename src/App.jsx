import { Routes, Route } from 'react-router-dom';

import Footer from "./containers/footer"
import Header from "./containers/header"
import Home from './pages/Home';

import CheckoutButton from './containers/CheckoutButton';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<CheckoutButton />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
