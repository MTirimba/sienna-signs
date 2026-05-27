'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useWindowSize } from '@/hooks/useWindowSize'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { isMobile } = useWindowSize()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on resize to desktop
  useEffect(() => {
    if (!isMobile) setMenuOpen(false)
  }, [isMobile])

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: isMobile ? '0 24px' : '0 48px',
          height: '72px',
          borderBottom: scrolled || menuOpen ? '0.5px solid var(--border)' : '0.5px solid transparent',
          background: scrolled || menuOpen ? 'rgba(253,252,249,0.97)' : 'transparent',
          backdropFilter: scrolled || menuOpen ? 'blur(12px)' : 'none',
          transition: 'all 0.4s ease',
        }}
      >
        {/* Logo */}
        <Image
          src="/Media/SIENNA SIGNS.png"
          alt="Sienna Signs"
          width={100}
          height={40}
          style={{ objectFit: 'contain', objectPosition: 'left center' }}
          priority
        />

        {/* Desktop links */}
        {!isMobile && (
          <ul style={{ display: 'flex', gap: '36px', listStyle: 'none', margin: 0, padding: 0 }}>
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
        )}

        {/* Desktop CTA / Mobile hamburger */}
        {isMobile ? (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
            }}
          >
            <span style={{
              display: 'block', width: '22px', height: '0.5px',
              background: 'var(--ink)',
              transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none',
              transition: 'transform 0.3s ease',
            }} />
            <span style={{
              display: 'block', width: '22px', height: '0.5px',
              background: 'var(--ink)',
              opacity: menuOpen ? 0 : 1,
              transition: 'opacity 0.3s ease',
            }} />
            <span style={{
              display: 'block', width: '22px', height: '0.5px',
              background: 'var(--ink)',
              transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
              transition: 'transform 0.3s ease',
            }} />
          </button>
        ) : (
          
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
        )}
      </nav>

      {/* Mobile dropdown menu */}
      {isMobile && (
        <div style={{
          position: 'fixed',
          top: '72px', left: 0, right: 0,
          zIndex: 99,
          background: 'rgba(253,252,249,0.97)',
          backdropFilter: 'blur(12px)',
          borderBottom: '0.5px solid var(--border)',
          padding: menuOpen ? '32px 24px 40px' : '0 24px',
          maxHeight: menuOpen ? '400px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.4s ease, padding 0.4s ease',
        }}>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {['Our Work', 'Process', 'Pricing', 'About'].map((item) => (
              <li
                key={item}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: 'var(--body-text)',
                  cursor: 'pointer',
                }}
              >
                {item}
              </li>
            ))}
          </ul>
          
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdwusBfzkdnGIfsVbF-fR8s5yN8XuWe1XpefMZ5881dEjhwOA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              marginTop: '36px',
              fontSize: '10px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--cream)',
              background: 'var(--ink)',
              padding: '14px 28px',
              textDecoration: 'none',
            }}
          >
            Begin your design →
          </a>
        </div>
      )}
    </>
  )
}