'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

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
      <h2 style={{ marginBottom: '1rem', color: '#dc2626' }}>Something went wrong!</h2>
      <p style={{ marginBottom: '2rem', color: '#6b7280' }}>
        {error.message || 'An unexpected error occurred'}
      </p>
      <button
        onClick={reset}
        style={{
          background: '#3b82f6',
          color: 'white',
          padding: '0.75rem 1.5rem',
          border: 'none',
          borderRadius: '0.5rem',
          cursor: 'pointer',
          fontSize: '1rem'
        }}
      >
        Try again
      </button>
    </div>
  )
}

