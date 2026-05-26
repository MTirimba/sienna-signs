'use client'

import { useEffect, useRef, useState } from 'react'

const STEPS = [
  {
    num: '01',
    title: 'Share your vision',
    desc: 'Complete our bespoke design form. Tell us about your event, colour palette, aesthetic, and any inspiration you have in mind.',
    detail: 'Takes about 5 minutes',
  },
  {
    num: '02',
    title: 'Receive your design',
    desc: 'Our designer crafts a completely bespoke layout tailored to your vision — delivered as a digital proof within a few days.',
    detail: 'Delivered within days',
  },
  {
    num: '03',
    title: 'Refine & approve',
    desc: 'We offer revisions until every detail is exactly right. Your approval is everything — we never proceed without it.',
    detail: 'Unlimited revisions',
  },
  {
    num: '04',
    title: 'Celebrate in style',
    desc: 'Your finished pieces are produced and dispatched, arriving ready to display and leaving a lasting impression on every guest.',
    detail: 'Ready to display',
  },
]

export default function Process() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      style={{
        padding: '120px 80px',
        borderBottom: '0.5px solid var(--border)',
        background: 'var(--cream)',
      }}
    >
      {/* Section header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
          marginBottom: '72px',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        <p
          style={{
            fontSize: '9px',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            whiteSpace: 'nowrap',
          }}
        >
          How it works
        </p>
        <div style={{ flex: 1, height: '0.5px', background: 'var(--border)' }} />
        <h2
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(28px, 3vw, 40px)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: 'var(--ink)',
            whiteSpace: 'nowrap',
          }}
        >
          A seamless experience
        </h2>
      </div>

      {/* Steps grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          border: '0.5px solid var(--border)',
        }}
      >
        {STEPS.map((step, i) => (
          <div
            key={step.num}
            style={{
              padding: '48px 36px',
              borderRight: i < STEPS.length - 1 ? '0.5px solid var(--border)' : 'none',
              position: 'relative',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(32px)',
              transition: `opacity 0.7s ease ${i * 0.12}s, transform 0.7s ease ${i * 0.12}s`,
              cursor: 'default',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget
              el.style.background = 'var(--linen)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget
              el.style.background = 'transparent'
            }}
          >
            {/* Step number */}
            <div
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '56px',
                fontWeight: 300,
                color: 'var(--border)',
                lineHeight: 1,
                marginBottom: '24px',
                transition: 'color 0.3s',
              }}
            >
              {step.num}
            </div>

            {/* Divider */}
            <div
              style={{
                width: '24px',
                height: '0.5px',
                background: 'var(--muted)',
                marginBottom: '20px',
              }}
            />

            {/* Title */}
            <p
              style={{
                fontSize: '10px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--ink)',
                marginBottom: '14px',
              }}
            >
              {step.title}
            </p>

            {/* Description */}
            <p
              style={{
                fontSize: '12px',
                lineHeight: 1.8,
                color: 'var(--body-text)',
                marginBottom: '28px',
              }}
            >
              {step.desc}
            </p>

            {/* Detail tag */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '8px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
              }}
            >
              <span>✦</span>
              {step.detail}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA line */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '56px',
          gap: '24px',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.7s ease 0.6s',
        }}
      >
        <div style={{ flex: 1, height: '0.5px', background: 'var(--border)' }} />

        {/* CTA Button */}
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

        <div style={{ flex: 1, height: '0.5px', background: 'var(--border)' }} />
      </div>
    </section>
  )
}