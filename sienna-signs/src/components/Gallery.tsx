'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const TABS = ['All', 'Fabric', 'Acrylic'] as const
type Tab = typeof TABS[number]

const ITEMS = [
  { src: '/Media/Linen sign.jpg', label: 'Welcome Sign', material: 'Fabric', tag: 'Fabric' as Tab, price: 'From £120' },
  { src: '/Media/Welcome Sign.jpg', label: 'Welcome Sign', material: 'Acrylic', tag: 'Acrylic' as Tab, price: 'From £105' },
  { src: '/Media/Seating chart.jpg', label: 'Seating Chart', material: 'Fabric', tag: 'Fabric' as Tab, price: 'From £160' },
  { src: '/Media/Order of Service.jpg', label: 'Order of Service', material: 'Fabric', tag: 'Fabric' as Tab, price: 'From £120' },
  { src: '/Media/Table Numbers.JPG', label: 'Table Numbers', material: 'Fabric', tag: 'Fabric' as Tab, price: 'From £8 each' },
  { src: '/Media/Ribbon signs.jpg', label: 'Ribbon Styling', material: 'Fabric', tag: 'Fabric' as Tab, price: 'From £5' },
]

export default function Gallery() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [hovered, setHovered] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState<Tab>('All')

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
  const filtered = ITEMS.filter((item) => activeTab === 'All' || item.tag === activeTab)

  return (
    <section
      ref={ref}
      style={{
        padding: '120px 80px',
        borderBottom: '0.5px solid var(--border)',
        background: 'var(--linen)',
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginBottom: '48px',
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
      }}>
        <div>
          <p style={{
            fontSize: '9px',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            marginBottom: '16px',
          }}>Our work</p>
          <h2 style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(36px, 4vw, 56px)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: 'var(--ink)',
            lineHeight: 1.05,
            margin: 0,
          }}>
            Crafted with<br />intention.
          </h2>
        </div>
        
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
            marginBottom: '6px',
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
          View all on Instagram →
        </a>
      </div>

      {/* Filter tabs */}
      <div style={{
        display: 'flex',
        marginBottom: '32px',
        border: '0.5px solid var(--border)',
        width: 'fit-content',
        opacity: show ? 1 : 0,
        transition: 'opacity 0.7s ease 0.1s',
      }}>
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '10px 28px',
              fontSize: '9px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              border: 'none',
              borderRight: tab !== 'Acrylic' ? '0.5px solid var(--border)' : 'none',
              background: activeTab === tab ? 'var(--ink)' : 'transparent',
              color: activeTab === tab ? 'var(--cream)' : 'var(--body-text)',
              cursor: 'pointer',
              transition: 'background 0.25s, color 0.25s',
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: filtered.length > 2 ? '1.5fr 1fr 1fr' : 'repeat(auto-fill, minmax(300px, 1fr))',
        gridTemplateRows: filtered.length > 3 ? '320px 240px' : '360px',
        gap: '6px',
      }}>
        {filtered.map((item, i) => (
          <div
            key={`${item.src}-${i}`}
            style={{
              gridRow: i === 0 && filtered.length > 3 ? 'span 2' : 'auto',
              position: 'relative',
              overflow: 'hidden',
              border: '0.5px solid var(--sand-dark)',
              cursor: 'pointer',
              opacity: show ? 1 : 0,
              transform: show ? 'scale(1)' : 'scale(0.97)',
              transition: `opacity 0.6s ease ${i * 0.07}s, transform 0.6s ease ${i * 0.07}s`,
            }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <Image
              src={item.src}
              alt={`${item.label} — ${item.material}`}
              fill
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
                transform: hovered === i ? 'scale(1.04)' : 'scale(1)',
                transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
              sizes={i === 0 ? '40vw' : '25vw'}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(44,42,37,0.35)',
              opacity: hovered === i ? 1 : 0,
              transition: 'opacity 0.35s ease',
            }} />
            <div style={{
              position: 'absolute',
              bottom: 0, left: 0, right: 0,
              padding: '12px 16px',
              background: 'rgba(253,252,249,0.95)',
              backdropFilter: 'blur(4px)',
              borderTop: '0.5px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              transform: hovered === i ? 'translateY(0)' : 'translateY(100%)',
              transition: 'transform 0.32s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }}>
              <div>
                <p style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink)', marginBottom: '3px' }}>
                  {item.label}
                </p>
                <p style={{ fontSize: '8px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                  {item.material}
                </p>
              </div>
              <span style={{ fontSize: '11px', fontFamily: 'var(--serif)', fontStyle: 'italic', color: 'var(--ink)' }}>
                {item.price}
              </span>
            </div>
            <div style={{
              position: 'absolute',
              top: '14px', right: '14px',
              background: 'rgba(253,252,249,0.88)',
              backdropFilter: 'blur(4px)',
              padding: '4px 10px',
              fontSize: '7px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--ink)',
              border: '0.5px solid rgba(216,210,196,0.6)',
            }}>
              {item.material}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}