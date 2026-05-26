'use client'

import { useEffect, useRef, useState } from 'react'

export default function CtaBand() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
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
        gridTemplateColumns: '1fr 1fr',
        borderBottom: '0.5px solid var(--border)',
        minHeight: '420px',
      }}
    >
      {/* LEFT — Dark panel */}
      <div style={{
        background: 'var(--ink)',
        padding: '80px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        opacity: show ? 1 : 0,
        transform: show ? 'translateX(0)' : 'translateX(-24px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
      }}>
        {[...Array(8)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute', left: 0, right: 0,
            top: `${10 + i * 12}%`,
            height: '0.5px',
            background: 'rgba(255,255,255,0.03)',
            pointerEvents: 'none',
          }} />
        ))}

        <p style={{ fontSize: '9px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '24px' }}>
          Ready to begin?
        </p>

        <h2 style={{
          fontFamily: 'var(--serif)',
          fontSize: 'clamp(32px, 3.5vw, 48px)',
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
          {/* Main CTA */}
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
              transition: 'opacity 0.25s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Begin your design <span style={{ fontSize: '14px', fontWeight: 200 }}>→</span>
          </a>

          {/* Trust signals */}
          <div style={{ display: 'flex', gap: '28px', marginTop: '8px' }}>
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

      {/* RIGHT — Social panel */}
      <div style={{
        background: 'var(--sand)',
        borderLeft: '0.5px solid var(--border)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px',
        opacity: show ? 1 : 0,
        transform: show ? 'translateX(0)' : 'translateX(24px)',
        transition: 'opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s',
      }}>
        <p style={{ fontSize: '9px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '28px', textAlign: 'center' }}>
          Follow our journey
        </p>

        <a
          href="https://www.instagram.com/sienna_signs/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(28px, 3vw, 40px)',
            fontStyle: 'italic',
            fontWeight: 300,
            color: 'var(--ink)',
            textDecoration: 'none',
            marginBottom: '12px',
            transition: 'opacity 0.25s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.6')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          @sienna_signs
        </a>

        <p style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '48px' }}>
          Instagram &nbsp;·&nbsp; TikTok
        </p>

        {/* Photo Grid */}
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
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              <span style={{ fontSize: '7px', color: '#A0937B' }}>✦</span>
            </a>
          ))}
        </div>

        <p style={{ marginTop: '20px', fontSize: '8px', letterSpacing: '0.15em', color: 'var(--muted)', textTransform: 'uppercase' }}>
          Replace with Instagram feed
        </p>
      </div>
    </section>
  )
}