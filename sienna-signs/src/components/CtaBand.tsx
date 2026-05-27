'use client'

import { useEffect, useRef, useState } from 'react'
import { useWindowSize } from '@/hooks/useWindowSize'

export default function CtaBand() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { isMobile } = useWindowSize()

  useEffect(() => {
    setMounted(true)
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const show = mounted && visible

  return (
    <section
      ref={ref}
      style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        borderBottom: '0.5px solid var(--border)',
      }}
    >
      {/* Dark panel */}
      <div style={{
        background: 'var(--ink)',
        padding: isMobile ? '64px 24px' : '80px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
      }}>
        <p style={{ fontSize: '9px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '24px' }}>
          Ready to begin?
        </p>
        <h2 style={{
          fontFamily: 'var(--serif)',
          fontSize: isMobile ? '36px' : 'clamp(32px, 3.5vw, 48px)',
          fontWeight: 300,
          fontStyle: 'italic',
          color: 'var(--cream)',
          lineHeight: 1.1,
          marginBottom: '20px',
        }}>
          Let's bring your<br />vision to life.
        </h2>
        <div style={{ width: '32px', height: '0.5px', background: 'var(--muted)', marginBottom: '24px' }} />
        <p style={{ fontSize: '12px', lineHeight: 1.85, color: 'var(--muted)', marginBottom: '40px', maxWidth: '320px' }}>
          Every piece is designed from scratch around your event.
          Designs delivered within days. Entirely bespoke. Entirely yours.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
          
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdwusBfzkdnGIfsVbF-fR8s5yN8XuWe1XpefMZ5881dEjhwOA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              fontSize: '10px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--ink)',
              background: 'var(--cream)',
              padding: '16px 32px',
              textDecoration: 'none',
              width: isMobile ? '100%' : 'auto',
              justifyContent: 'center',
              transition: 'opacity 0.25s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Begin your design <span style={{ fontSize: '14px', fontWeight: 200 }}>→</span>
          </a>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '8px' }}>
            {['Free design proof', 'Unlimited revisions', 'Fast turnaround'].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ color: 'var(--muted)', fontSize: '8px' }}>✦</span>
                <span style={{ fontSize: '8px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social panel */}
      <div style={{
        background: 'var(--sand)',
        borderLeft: isMobile ? 'none' : '0.5px solid var(--border)',
        borderTop: isMobile ? '0.5px solid var(--border)' : 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: isMobile ? '56px 24px' : '80px',
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s',
      }}>
        <p style={{ fontSize: '9px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '20px', textAlign: 'center' }}>
          Follow our journey
        </p>
        
        <a
          href="https://www.instagram.com/sienna_signs/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'var(--serif)',
            fontSize: isMobile ? '28px' : 'clamp(28px, 3vw, 40px)',
            fontStyle: 'italic',
            fontWeight: 300,
            color: 'var(--ink)',
            textDecoration: 'none',
            marginBottom: '10px',
            transition: 'opacity 0.25s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.6')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          @sienna_signs
        </a>
        <p style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '40px' }}>
          Instagram &nbsp;·&nbsp; TikTok
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 72px)', gridTemplateRows: 'repeat(2, 72px)', gap: '4px' }}>
          {[...Array(6)].map((_, i) => (
            
            <a
              key={i}
              href="https://www.instagram.com/sienna_signs/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: i % 2 === 0 ? 'var(--sand-dark)' : 'var(--border)',
                border: '0.5px solid var(--sand-dark)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'opacity 0.25s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              <span style={{ fontSize: '7px', color: '#A0937B' }}>✦</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}