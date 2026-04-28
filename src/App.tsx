import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import texturePng from './assets/texture.png'
import Navbar from './Navbar'
import Hero from './Hero'
import WorkCards from './WorkCards'
import About from './About'
import Resume from './Resume'
import ProjectDetail from './ProjectDetail'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function Home() {
  return (
    <>
      <Hero />
      <WorkCards />
    </>
  )
}

export default function App() {
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem('theme')
    if (stored) return stored === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <BrowserRouter>
      <div
        className="bg-cover h-full mix-blend-overlay opacity-50 pointer-events-none fixed top-0 w-full z-[9999999]"
        style={{ backgroundImage: `url(${texturePng})` }}
      />
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-[1000] bg-[length:200px_200px] mix-blend-overlay opacity-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />
      <ScrollToTop />
      <Navbar dark={dark} onToggle={() => setDark(d => !d)} />
      <main className="pt-[72px] bg-[#f1f1ee] dark:bg-[#111110]">
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
