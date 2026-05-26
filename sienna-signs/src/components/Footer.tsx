'use client'

const LINKS = {
  Explore: ['Our Work', 'Process', 'About', 'Contact'],
  Services: ['Welcome Signs', 'Seating Charts', 'Table Numbers', 'Menus & More'],
  Connect: ['Instagram', 'TikTok', 'Pinterest', 'Linktree'],
}

const LINK_HREFS: Record<string, string> = {
  Instagram: 'https://www.instagram.com/sienna_signs/',
  Linktree: 'https://linktr.ee/sienna_signs',
  'Our Work': 'https://www.instagram.com/sienna_signs/',
}

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--ink)',
        color: 'var(--cream)',
        padding: '80px 80px 40px',
      }}
    >
      {/* Top row */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
          gap: '48px',
          paddingBottom: '64px',
          borderBottom: '0.5px solid rgba(255,255,255,0.08)',
          marginBottom: '40px',
        }}
      >
        {/* Brand column */}
        <div>
          <p
            style={{
              fontFamily: 'var(--serif)',
              fontSize: '22px',
              fontWeight: 400,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--cream)',
              marginBottom: '20px',
            }}
          >
            Sienna Signs
          </p>
          <p
            style={{
              fontSize: '12px',
              lineHeight: 1.85,
              color: 'var(--muted)',
              marginBottom: '32px',
              maxWidth: '240px',
            }}
          >
            Bespoke wedding &amp; event signage crafted with care. Every piece designed around your unique vision.
          </p>

          {/* CTA Button */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdwusBfzkdnGIfsVbF-fR8s5yN8XuWe1XpefMZ5881dEjhwOA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '9px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--cream)',
              textDecoration: 'none',
              borderBottom: '0.5px solid rgba(253,252,249,0.3)',
              paddingBottom: '2px',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.6')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Begin your design →
          </a>
        </div>

        {/* Link columns */}
        {Object.entries(LINKS).map(([heading, items]) => (
          <div key={heading}>
            <p
              style={{
                fontSize: '8px',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                marginBottom: '24px',
              }}
            >
              {heading}
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {items.map((item) => (
                <li key={item}>
                  <a
                    href={LINK_HREFS[item] || '#'}
                    target={LINK_HREFS[item] ? '_blank' : undefined}
                    rel={LINK_HREFS[item] ? 'noopener noreferrer' : undefined}
                    style={{
                      fontSize: '12px',
                      color: 'rgba(253,252,249,0.55)',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                      letterSpacing: '0.05em',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--cream)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(253,252,249,0.55)')}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <p
          style={{
            fontSize: '9px',
            letterSpacing: '0.15em',
            color: 'rgba(253,252,249,0.25)',
          }}
        >
          © {new Date().getFullYear()} Sienna Signs. All rights reserved.
        </p>

        <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
          {['✦', '✦', '✦'].map((s, i) => (
            <span
              key={i}
              style={{
                fontSize: i === 1 ? '10px' : '6px',
                color: 'rgba(253,252,249,0.2)',
              }}
            >
              {s}
            </span>
          ))}
        </div>

        <p
          style={{
            fontSize: '9px',
            letterSpacing: '0.15em',
            color: 'rgba(253,252,249,0.25)',
          }}
        >
          Designed with intention.
        </p>
      </div>
    </footer>
  )
}