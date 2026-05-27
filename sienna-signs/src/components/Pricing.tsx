'use client'

import { useEffect, useRef, useState } from 'react'
import { useWindowSize } from '@/hooks/useWindowSize'

const CATEGORIES = [
  {
    name: 'Fabric Signage',
    description: 'Luxurious linen & fabric pieces — warm, textural, and timeless.',
    items: [
      { name: 'Welcome Signs', price: 'From £120' },
      { name: 'Order of the Day Signs', price: 'From £120' },
      { name: 'Ceremony Signs', price: 'From £85' },
      { name: 'Seating Chart Signs', price: 'From £160' },
      { name: 'Top Table Signs', price: 'From £105' },
      { name: 'Bar Signs', price: 'From £55' },
      { name: 'Table Numbers', price: 'From £8 each' },
      { name: 'Ribbons for Styling', price: 'From £5' },
    ],
  },
  {
    name: 'Acrylic Signage',
    description: 'Sleek, modern acrylic — elegant, versatile, and bold.',
    items: [
      { name: 'Welcome Signs', price: 'From £105' },
      { name: 'Order of the Day Signs', price: 'From £105' },
      { name: 'Ceremony Signs', price: 'From £105' },
      { name: 'Seating Chart Signs', price: 'From £145' },
      { name: 'Small Table / Bar Signs', price: 'From £35' },
      { name: 'Table Numbers', price: 'From £7.50 each' },
      { name: 'Place Names', price: 'From £3 each' },
    ],
  },
  {
    name: 'Ribboned Stationery',
    description: 'Personalised ribbons for that final polished touch.',
    items: [
      { name: 'Personalised Ribbons', price: 'From £3 each' },
      { name: '"Just Married" Champagne Ribbon', price: '£6' },
      { name: '"Reserved Row" Ceremony Ribbon', price: '£8' },
    ],
  },
  {
    name: 'Stand Hire & Delivery',
    description: 'Everything you need to display your signage beautifully.',
    items: [
      { name: 'Stand Hire', price: '£10/day (3-day min)' },
      { name: 'UK Delivery', price: '£6 (Free over £120)' },
      { name: 'Collection', price: 'Bridgend, South Wales' },
    ],
  },
]

export default function Pricing() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { isMobile, isTablet } = useWindowSize()

  useEffect(() => {
    setMounted(true)
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const show = mounted && visible

  return (
    <section
      ref={ref}
      style={{
        padding: isMobile ? '72px 24px' : isTablet ? '80px 40px' : '120px 80px',
        borderBottom: '0.5px solid var(--border)',
        background: 'var(--cream)',
      }}
    >
      <div style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: isMobile ? 'flex-start' : 'center',
        gap: isMobile ? '12px' : '24px',
        marginBottom: '16px',
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
      }}>
        <p style={{ fontSize: '9px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--muted)', whiteSpace: 'nowrap' }}>
          Investment
        </p>
        {!isMobile && <div style={{ flex: 1, height: '0.5px', background: 'var(--border)' }} />}
        <h2 style={{
          fontFamily: 'var(--serif)',
          fontSize: isMobile ? '32px' : 'clamp(28px, 3vw, 40px)',
          fontWeight: 300,
          fontStyle: 'italic',
          color: 'var(--ink)',
          whiteSpace: isMobile ? 'normal' : 'nowrap',
        }}>
          Transparent pricing
        </h2>
      </div>

      <p style={{
        fontSize: '12px',
        lineHeight: 1.8,
        color: 'var(--body-text)',
        marginBottom: '48px',
        textAlign: isMobile ? 'left' : 'right',
        opacity: show ? 1 : 0,
        transition: 'opacity 0.7s ease 0.1s',
      }}>
        Suitable for weddings, baby showers, hen parties &amp; all events.
        Custom sizes &amp; bespoke designs available on request.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: '1px',
        border: '0.5px solid var(--border)',
        background: 'var(--border)',
      }}>
        {CATEGORIES.map((cat, ci) => (
          <div
            key={cat.name}
            style={{
              background: 'var(--cream)',
              padding: isMobile ? '36px 28px' : '48px 40px',
              opacity: show ? 1 : 0,
              transform: show ? 'translateY(0)' : 'translateY(24px)',
              transition: `opacity 0.7s ease ${ci * 0.1}s, transform 0.7s ease ${ci * 0.1}s`,
            }}
          >
            <p style={{ fontFamily: 'var(--serif)', fontSize: '22px', fontWeight: 300, fontStyle: 'italic', color: 'var(--ink)', marginBottom: '8px' }}>
              {cat.name}
            </p>
            <p style={{ fontSize: '11px', color: 'var(--muted)', marginBottom: '32px', lineHeight: 1.6 }}>
              {cat.description}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {cat.items.map((item, ii) => (
                <div key={item.name} style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  padding: '12px 0',
                  borderBottom: ii < cat.items.length - 1 ? '0.5px solid var(--border)' : 'none',
                  gap: '16px',
                }}>
                  <span style={{ fontSize: '12px', color: 'var(--body-text)' }}>{item.name}</span>
                  <span style={{ fontSize: '12px', fontFamily: 'var(--serif)', fontStyle: 'italic', color: 'var(--ink)', whiteSpace: 'nowrap' }}>
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '32px', opacity: show ? 1 : 0, transition: 'opacity 0.7s ease 0.5s' }}>
        <span style={{ color: 'var(--muted)', fontSize: '10px' }}>✦</span>
        <p style={{ fontSize: '11px', color: 'var(--muted)', lineHeight: 1.7 }}>
          Final pricing may vary depending on sizing, artwork &amp; custom detailing.
          Lead time is approximately <strong style={{ color: 'var(--ink)', fontWeight: 400 }}>3–4 weeks</strong>.
        </p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '56px', opacity: show ? 1 : 0, transition: 'opacity 0.7s ease 0.55s' }}>
        
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
            textDecoration: 'none',
            border: '0.5px solid var(--ink)',
            padding: '16px 40px',
            width: isMobile ? '100%' : 'auto',
            justifyContent: 'center',
            transition: 'background 0.25s, color 0.25s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--ink)'
            e.currentTarget.style.color = 'var(--cream)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.color = 'var(--ink)'
          }}
        >
          Request a quote <span style={{ fontSize: '14px', fontWeight: 200 }}>→</span>
        </a>
      </div>
    </section>
  )
}