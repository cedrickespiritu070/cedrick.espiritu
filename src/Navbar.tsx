import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Work', to: '/' },
  { label: 'About', to: '/about' },
] as const

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className={`navbar${menuOpen ? ' navbar--open' : ''}`}>
      <div className="grad-blur" aria-hidden="true">
        <div /><div /><div /><div /><div /><div />
      </div>

      <div className="navbar-logo" aria-label="Home">Tr.</div>

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
    </nav>
  )
}
