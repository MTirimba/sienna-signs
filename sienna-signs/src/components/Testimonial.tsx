'use client'

import { useEffect, useRef, useState } from 'react'

const TESTIMONIALS = [
  {
    quote: 'Sienna created the most beautiful welcome sign — exactly what I envisioned but even better. Every single guest stopped to take a photo.',
    author: 'Charlotte R.',
    event: 'Bride · June 2024',
  },
  {
    quote: 'From the first email to delivery, the process was effortless. The acrylic seating chart was an absolute showstopper.',
    author: 'Amara & James T.',
    event: 'Couple · August 2024',
  },
  {
    quote: 'I cannot recommend Sienna enough. The attention to detail is extraordinary — our signage looked like something from a magazine.',
    author: 'Sophie L.',
    event: 'Event Planner',
  },
]

export default function Testimonial() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const t = TESTIMONIALS[active]

  return (
    <section
      ref={ref}
      style={{
        padding: '120px 80px',
        borderBottom: '0.5px solid var(--border)',
        background: 'var(--sand)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background large serif number */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: 'var(--serif)',
          fontSize: 'clamp(200px, 30vw, 320px)',
          fontWeight: 300,
          fontStyle: 'italic',
          color: 'var(--sand-dark)',
          opacity: 0.35,
          lineHeight: 1,
          pointerEvents: 'none',
          userSelect: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        ❝
      </div>

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '680px',
          margin: '0 auto',
          textAlign: 'center',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}
      >
        {/* Label */}
        <p
          style={{
            fontSize: '9px',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            marginBottom: '48px',
          }}
        >
          What our clients say
        </p>

        {/* Quote — animates on change */}
        <blockquote
          key={active}
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(22px, 2.8vw, 32px)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: 'var(--ink)',
            lineHeight: 1.5,
            margin: '0 0 40px',
            animation: 'fadeUp 0.5s ease both',
          }}
        >
          {t.quote}
        </blockquote>

        {/* Author */}
        <div
          key={`author-${active}`}
          style={{
            animation: 'fadeUp 0.5s ease 0.08s both',
          }}
        >
          <p
            style={{
              fontSize: '10px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--ink)',
              marginBottom: '6px',
            }}
          >
            {t.author}
          </p>
          <p
            style={{
              fontSize: '9px',
              letterSpacing: '0.15em',
              color: 'var(--muted)',
            }}
          >
            {t.event}
          </p>
        </div>

        {/* Dots */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            marginTop: '48px',
          }}
        >
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Testimonial ${i + 1}`}
              style={{
                width: i === active ? '24px' : '6px',
                height: '1px',
                background: i === active ? 'var(--ink)' : 'var(--border)',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                transition: 'width 0.4s ease, background 0.3s ease',
              }}
            />
          ))}
        </div>
      </div>

      {/* Side decorations */}
      <div
        style={{
          position: 'absolute',
          left: '80px',
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          opacity: visible ? 0.4 : 0,
          transition: 'opacity 1s ease 0.4s',
        }}
      >
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            style={{
              width: '1px',
              height: `${24 - i * 4}px`,
              background: 'var(--muted)',
            }}
          />
        ))}
      </div>
      <div
        style={{
          position: 'absolute',
          right: '80px',
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          opacity: visible ? 0.4 : 0,
          transition: 'opacity 1s ease 0.4s',
        }}
      >
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            style={{
              width: '1px',
              height: `${8 + i * 4}px`,
              background: 'var(--muted)',
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}