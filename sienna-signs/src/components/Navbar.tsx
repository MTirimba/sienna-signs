'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 48px',
        height: '72px',
        borderBottom: scrolled ? '0.5px solid var(--border)' : '0.5px solid transparent',
        background: scrolled ? 'rgba(253,252,249,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'all 0.4s ease',
      }}
    >
      {/* Logo */}
      <Image
        src="/Media/SIENNA SIGNS.png"
        alt="Sienna Signs"
        width={140}
        height={52}
        style={{ objectFit: 'contain' }}
        priority
      />

      {/* Links */}
      <ul style={{ display: 'flex', gap: '36px', listStyle: 'none' }}>
        {['Our Work', 'Process', 'Pricing', 'About'].map((item) => (
          <li
            key={item}
            style={{
              fontSize: '10px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--body-text)',
              cursor: 'pointer',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ink)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--body-text)')}
          >
            {item}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSdwusBfzkdnGIfsVbF-fR8s5yN8XuWe1XpefMZ5881dEjhwOA/viewform"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontSize: '9px',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: 'var(--ink)',
          textDecoration: 'none',
          borderBottom: '0.5px solid var(--ink)',
          paddingBottom: '2px',
          transition: 'opacity 0.2s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.5')}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
      >
        Begin your design
      </a>
    </nav>
  )
}