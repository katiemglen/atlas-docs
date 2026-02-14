import './globals.css'

export default function Home() {
  const now = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
    }}>
      <div style={{
        maxWidth: '640px',
        width: '100%',
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: '16px',
        padding: '3rem',
        boxShadow: '0 0 60px var(--accent-glow)',
      }}>
        <div style={{
          fontSize: '3rem',
          marginBottom: '0.5rem',
          textAlign: 'center',
        }}>
          🌍
        </div>
        <h1 style={{
          fontSize: '2rem',
          fontWeight: 700,
          textAlign: 'center',
          marginBottom: '0.5rem',
          background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Atlas
        </h1>
        <p style={{
          textAlign: 'center',
          color: 'var(--text-muted)',
          marginBottom: '2rem',
          fontSize: '0.95rem',
        }}>
          Document Delivery System
        </p>

        <div style={{
          background: 'var(--bg)',
          borderRadius: '12px',
          padding: '1.5rem',
          border: '1px solid var(--border)',
          marginBottom: '1.5rem',
        }}>
          <h2 style={{
            fontSize: '1.1rem',
            fontWeight: 600,
            marginBottom: '1rem',
            color: 'var(--accent)',
          }}>
            ✅ Pipeline Active
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <StatusRow emoji="📦" label="GitHub" status="Connected" />
            <StatusRow emoji="▲" label="Vercel" status="Auto-deploy ON" />
            <StatusRow emoji="🌍" label="Atlas" status="Online" />
          </div>
        </div>

        <div style={{
          background: 'var(--bg)',
          borderRadius: '12px',
          padding: '1.5rem',
          border: '1px solid var(--border)',
          marginBottom: '1.5rem',
        }}>
          <h2 style={{
            fontSize: '1.1rem',
            fontWeight: 600,
            marginBottom: '0.75rem',
          }}>
            How It Works
          </h2>
          <ol style={{
            paddingLeft: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            color: 'var(--text-muted)',
            fontSize: '0.9rem',
          }}>
            <li>Atlas creates a document (report, summary, brief, etc.)</li>
            <li>Converts to clean HTML/CSS</li>
            <li>Pushes to GitHub repo</li>
            <li>Vercel auto-deploys in seconds</li>
            <li>Katie & Chad access from any device 📱</li>
          </ol>
        </div>

        <p style={{
          textAlign: 'center',
          color: 'var(--text-muted)',
          fontSize: '0.8rem',
        }}>
          First deploy • Built with Next.js • Hosted on Vercel
        </p>
      </div>
    </div>
  )
}

function StatusRow({ emoji, label, status }: { emoji: string; label: string; status: string }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      <span style={{ fontSize: '0.9rem' }}>
        {emoji} {label}
      </span>
      <span style={{
        fontSize: '0.8rem',
        color: '#4ade80',
        background: 'rgba(74, 222, 128, 0.1)',
        padding: '0.2rem 0.6rem',
        borderRadius: '999px',
      }}>
        {status}
      </span>
    </div>
  )
}
