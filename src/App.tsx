import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, BookShelf, Blog } from './pages'
import Header from './components/Header'
import './App.css'
import { Spacer } from '@nextui-org/react'

function App() {

  return (
    <Router>
      <Header />
      <Spacer y={3} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shelf" element={<BookShelf />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
    </Router>
  )
}

export default App
