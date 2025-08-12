import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '400px',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h2 style={{ marginBottom: '1rem', fontSize: '2rem', color: '#374151' }}>Not Found</h2>
      <p style={{ marginBottom: '2rem', color: '#6b7280' }}>
        Could not find the requested resource
      </p>
      <Link 
        href="/"
        style={{
          background: '#3b82f6',
          color: 'white',
          padding: '0.75rem 1.5rem',
          borderRadius: '0.5rem',
          textDecoration: 'none',
          fontSize: '1rem'
        }}
      >
        Return Home
      </Link>
    </div>
  )
}

