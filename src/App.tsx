import { BrowserRouter, Routes, Route } from 'react-router-dom'
import texturePng from './assets/texture.png'
import Navbar from './Navbar'
import Hero from './Hero'
import WorkCards from './WorkCards'
import About from './About'
import Resume from './Resume'
import ProjectDetail from './ProjectDetail'
import './App.css'

function Home() {
  return (
    <>
      <Hero />
      <WorkCards />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="texture" style={{ backgroundImage: `url(${texturePng})` }} />
      <div
        aria-hidden="true"
        style={{
          position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 1000,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
          mixBlendMode: 'overlay',
          opacity: 0.5,
        }}
      />
      <Navbar />
      <main style={{ paddingTop: '72px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
