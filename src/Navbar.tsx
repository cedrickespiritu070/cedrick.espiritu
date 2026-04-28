import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import ceLogo from './assets/ce-logo.svg'

const NAV_LINKS = [
  { label: 'Work', to: '/' },
  { label: 'About', to: '/about' },
] as const

interface NavbarProps {
  dark: boolean
  onToggle: () => void
}

export default function Navbar({ dark, onToggle }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className={`navbar${menuOpen ? ' navbar--open' : ''}`}>
      <div className="grad-blur" aria-hidden="true">
        <div /><div /><div /><div /><div /><div />
      </div>

      <div className="navbar-logo" aria-label="Home">
        <img src={ceLogo} alt="CE" style={{ height: '26px', width: 'auto' }} />
      </div>

      {/* Right side — wrapper keeps toggle + hamburger together without disrupting dropdown positioning */}
      <div className="flex items-center gap-1">
        <button
          onClick={onToggle}
          aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          className="w-9 h-9 rounded-full flex items-center justify-center text-black/45 dark:text-white/45 hover:bg-black/8 dark:hover:bg-white/10 transition-colors duration-200 relative z-10"
        >
          {dark ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4"/>
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          )}
        </button>

        <button
          className="navbar-hamburger"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(o => !o)}
        >
          <span /><span /><span />
        </button>

        <ul className="navbar-links">
          {NAV_LINKS.map(({ label, to }) => (
            <li key={label}>
              <NavLink
                to={to}
                end
                className={({ isActive }) =>
                  `navbar-link${isActive ? ' navbar-link--active' : ''}`
                }
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink
              to="/resume"
              end
              className={({ isActive }) =>
                `navbar-link${isActive ? ' navbar-link--active' : ''}`
              }
              onClick={() => setMenuOpen(false)}
            >
              Resume
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
