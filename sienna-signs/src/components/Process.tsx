'use client'

import { useEffect, useRef, useState } from 'react'
import { useWindowSize } from '@/hooks/useWindowSize'

const STEPS = [
  { num: '01', title: 'Share your vision', desc: 'Complete our bespoke design form. Tell us about your event, colour palette, aesthetic, and any inspiration you have in mind.', detail: 'Takes about 5 minutes' },
  { num: '02', title: 'Receive your design', desc: 'Our designer crafts a completely bespoke layout tailored to your vision — delivered as a digital proof within a few days.', detail: 'Delivered within days' },
  { num: '03', title: 'Refine & approve', desc: 'We offer revisions until every detail is exactly right. Your approval is everything — we never proceed without it.', detail: 'Unlimited revisions' },
  { num: '04', title: 'Celebrate in style', desc: 'Your finished pieces are produced and dispatched, arriving ready to display and leaving a lasting impression on every guest.', detail: 'Ready to display' },
]

export default function Process() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { isMobile, isTablet } = useWindowSize()

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
        marginBottom: isMobile ? '48px' : '72px',
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
      }}>
        <p style={{ fontSize: '9px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--muted)', whiteSpace: 'nowrap' }}>
          How it works
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
          A seamless experience
        </h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : 'repeat(4, 1fr)',
        border: '0.5px solid var(--border)',
      }}>
        {STEPS.map((step, i) => {
          const isLastCol = isMobile ? true : isTablet ? i % 2 === 1 : i === STEPS.length - 1
          const isLastRow = isMobile ? i === STEPS.length - 1 : isTablet ? i >= 2 : true
          return (
            <div
              key={step.num}
              style={{
                padding: isMobile ? '36px 28px' : '48px 36px',
                borderRight: isLastCol ? 'none' : '0.5px solid var(--border)',
                borderBottom: isLastRow ? 'none' : '0.5px solid var(--border)',
                background: 'transparent',
                opacity: show ? 1 : 0,
                transform: show ? 'translateY(0)' : 'translateY(32px)',
                transition: `opacity 0.7s ease ${i * 0.12}s, transform 0.7s ease ${i * 0.12}s, background 0.25s`,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--linen)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent' }}
            >
              <div style={{ fontFamily: 'var(--serif)', fontSize: '56px', fontWeight: 300, color: 'var(--border)', lineHeight: 1, marginBottom: '24px' }}>
                {step.num}
              </div>
              <div style={{ width: '24px', height: '0.5px', background: 'var(--muted)', marginBottom: '20px' }} />
              <p style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink)', marginBottom: '14px' }}>
                {step.title}
              </p>
              <p style={{ fontSize: '12px', lineHeight: 1.8, color: 'var(--body-text)', marginBottom: '28px' }}>
                {step.desc}
              </p>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '8px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                <span>✦</span>{step.detail}
              </div>
            </div>
          )
        })}
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '48px',
        gap: '24px',
        opacity: show ? 1 : 0,
        transition: 'opacity 0.7s ease 0.6s',
      }}>
        {!isMobile && <div style={{ flex: 1, height: '0.5px', background: 'var(--border)' }} />}
        
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
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '14px 32px',
            border: '0.5px solid var(--ink)',
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
          Start your bespoke order <span>→</span>
        </a>
        {!isMobile && <div style={{ flex: 1, height: '0.5px', background: 'var(--border)' }} />}
      </div>
    </section>
  )
}