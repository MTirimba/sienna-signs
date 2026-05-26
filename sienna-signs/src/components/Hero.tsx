'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const MARQUEE_ITEMS = [
  'Welcome Signs', 'Seating Charts', 'Table Numbers', 'Menus',
  'Order of Service', 'Acrylic', 'Fabric & Linen', 'Ribbons',
  'Bar Signs', 'Place Names', 'Top Table Signs', 'Ceremony Boards',
]

export default function Hero() {
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return
      const x = (e.clientX / window.innerWidth - 0.5) * 10
      const y = (e.clientY / window.innerHeight - 0.5) * 6
      imageRef.current.style.transform = `translate(${x}px, ${y}px) scale(1.04)`
    }
    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  return (
    <>
      {/* HERO SECTION */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: '100vh',
          paddingTop: '72px',
        }}
      >
        {/* LEFT — Copy */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '80px 64px 80px 80px',
            borderRight: '0.5px solid var(--border)',
            animation: 'fadeUp 0.9s ease both',
          }}
        >
          <p
            style={{
              fontSize: '9px',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              marginBottom: '28px',
              animation: 'fadeUp 0.9s ease 0.1s both',
            }}
          >
            Bespoke Wedding &amp; Event Signage
          </p>

          <h1
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(48px, 5.5vw, 72px)',
              fontWeight: 300,
              fontStyle: 'italic',
              lineHeight: 1.05,
              color: 'var(--ink)',
              marginBottom: '28px',
              animation: 'fadeUp 0.9s ease 0.2s both',
            }}
          >
            Every detail,<br />
            beautifully<br />
            considered.
          </h1>

          <div
            style={{
              width: '32px',
              height: '0.5px',
              background: 'var(--muted)',
              marginBottom: '28px',
              animation: 'fadeUp 0.9s ease 0.3s both',
            }}
          />

          <p
            style={{
              fontSize: '13px',
              lineHeight: 1.85,
              color: 'var(--body-text)',
              maxWidth: '320px',
              marginBottom: '48px',
              animation: 'fadeUp 0.9s ease 0.35s both',
            }}
          >
            Handcrafted fabric &amp; acrylic signage designed around
            your vision. From intimate ceremonies to grand celebrations
            — each piece is entirely, uniquely yours.
          </p>

          {/* Trust pills */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '20px',
              marginBottom: '40px',
              animation: 'fadeUp 0.9s ease 0.4s both',
            }}
          >
            {['Fabric & Acrylic', '3–4 week lead time', 'UK Delivery'].map((pill, i) => (
              <div key={pill} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {i > 0 && <span style={{ color: 'var(--border)', fontSize: '8px' }}>·</span>}
                <span
                  style={{
                    fontSize: '9px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--muted)',
                  }}
                >
                  {pill}
                </span>
              </div>
            ))}
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '32px',
              animation: 'fadeUp 0.9s ease 0.45s both',
            }}
          >
            {/* Primary CTA */}
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
                color: 'var(--cream)',
                background: 'var(--ink)',
                padding: '16px 32px',
                textDecoration: 'none',
                transition: 'opacity 0.25s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.75')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              Begin your design
              <span style={{ fontSize: '14px', fontWeight: 200 }}>→</span>
            </a>

            {/* Secondary CTA */}
            <a
              href="https://www.instagram.com/sienna_signs/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '9px',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--body-text)',
                textDecoration: 'none',
                borderBottom: '0.5px solid var(--border)',
                paddingBottom: '2px',
                transition: 'color 0.2s, border-color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--ink)'
                e.currentTarget.style.borderColor = 'var(--ink)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--body-text)'
                e.currentTarget.style.borderColor = 'var(--border)'
              }}
            >
              View our work
            </a>
          </div>
        </div>

        {/* RIGHT — Hero Image */}
        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
            animation: 'fadeIn 1.2s ease 0.3s both',
          }}
        >
          <div
            ref={imageRef}
            style={{
              position: 'absolute',
              inset: '-5%',
              transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }}
          >
            <Image
              src="/Media/Hero Sienna Signs.png"
              alt="Sienna Signs — Bespoke Wedding Signage"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
              sizes="50vw"
            />
          </div>

          {/* Vignette */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, rgba(253,252,249,0.15) 0%, transparent 20%)',
              pointerEvents: 'none',
              zIndex: 1,
            }}
          />

          {/* Floating badge */}
          <div
            style={{
              position: 'absolute',
              bottom: '48px',
              left: '40px',
              zIndex: 2,
              background: 'rgba(253,252,249,0.92)',
              backdropFilter: 'blur(8px)',
              border: '0.5px solid var(--border)',
              padding: '14px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              animation: 'fadeUp 1s ease 0.7s both',
            }}
          >
            <span style={{ color: 'var(--muted)', fontSize: '12px' }}>✦</span>
            <div>
              <p
                style={{
                  fontSize: '9px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--ink)',
                  marginBottom: '3px',
                }}
              >
                Bespoke &amp; Handcrafted
              </p>
              <p
                style={{
                  fontSize: '8px',
                  letterSpacing: '0.12em',
                  color: 'var(--muted)',
                }}
              >
                3–4 week lead time · UK delivery from £6
              </p>
            </div>
          </div>

          {/* Vertical text */}
          <p
            style={{
              position: 'absolute',
              right: '20px',
              top: '50%',
              transform: 'translateY(-50%) rotate(90deg)',
              fontSize: '8px',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'rgba(253,252,249,0.5)',
              whiteSpace: 'nowrap',
              zIndex: 2,
            }}
          >
            Weddings &nbsp;·&nbsp; Events &nbsp;·&nbsp; Celebrations
          </p>
        </div>
      </section>

      {/* MARQUEE STRIP */}
      <div
        style={{
          borderTop: '0.5px solid var(--border)',
          borderBottom: '0.5px solid var(--border)',
          padding: '12px 0',
          overflow: 'hidden',
          background: 'var(--linen)',
        }}
      >
        <div
          style={{
            display: 'flex',
            animation: 'marquee 32s linear infinite',
            whiteSpace: 'nowrap',
          }}
        >
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={i}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '24px',
                fontSize: '9px',
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                paddingRight: '24px',
              }}
            >
              {item}
              <span style={{ color: 'var(--border)', fontSize: '6px' }}>◆</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </>
  )
}