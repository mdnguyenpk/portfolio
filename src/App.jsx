import { Routes, Route } from 'react-router-dom'
import Layout from '@components/layout/Layout'
import Home from '@/pages/Home'
import Work from '@/pages/Work'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import Sandbox from '@/pages/Sandbox'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="work" element={<Work />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="sandbox" element={<Sandbox />} />
      </Route>
    </Routes>
  )
}
