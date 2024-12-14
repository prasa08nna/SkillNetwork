import React from 'react'

function Github() {
  return (
    <div>
       <div style={{ backgroundColor: '#0D1117', color: 'white', height: '100vh', textAlign: 'center', padding: '3rem 1rem', fontFamily: 'Arial, sans-serif' }}>
     
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 3rem', alignItems: 'center' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Skill Network</div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="#product" style={{ color: 'white', textDecoration: 'none' }}>Product</a>
          <a href="#solutions" style={{ color: 'white', textDecoration: 'none' }}>Solutions</a>
          <a href="#resources" style={{ color: 'white', textDecoration: 'none' }}>Resources</a>
          <a href="#enterprise" style={{ color: 'white', textDecoration: 'none' }}>Enterprise</a>
          <a href="#pricing" style={{ color: 'white', textDecoration: 'none' }}>Pricing</a>
        </div>
        <div>
          <button style={{ backgroundColor: 'transparent', color: 'white', border: 'none', marginRight: '1rem', cursor: 'pointer' }}>Sign in</button>
          <button style={{ backgroundColor: '#238636', color: 'white', padding: '0.5rem 1rem', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Sign up</button>
        </div>
      </nav>

     
      <div style={{ marginTop: '5rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Build and ship software on a <br /> single, collaborative platform
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          Join the world’s most widely adopted AI-powered developer platform.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              padding: '0.75rem',
              border: '1px solid #30363D',
              borderRadius: '5px',
              width: '300px',
              color: '#0D1117',
            }}
          />
          <button
            style={{
              backgroundColor: '#238636',
              color: 'white',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Sign up for Skill Network
          </button>
          <button
            style={{
              backgroundColor: 'transparent',
              color: 'white',
              border: '1px solid #30363D',
              padding: '0.75rem 1.5rem',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Try Skill AI Copilot
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Github
