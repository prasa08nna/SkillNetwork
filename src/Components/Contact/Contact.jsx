import React from 'react'

function Contact() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
    <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem' }}>Contact us</h1>
    <p style={{ textAlign: 'center', marginBottom: '3rem' }}>
      The quickest way to get in touch with us is by using the contact information below.
    </p>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '2rem' }}>
      {/* Learners */}
      <div>
        <h4 style={{ fontWeight: 'bold' }}>Learners</h4>
        <hr />
        <p>
          Visit our <a href="#help-center">Help Center</a> <br />
          <a href="#support-team">How to reach our support team</a>
        </p>
      </div>

      {/* Skill Network Business */}
      <div>
        <h4 style={{ fontWeight: 'bold' }}>Skill Network Business</h4>
        <hr />
        <p>
          Visit our <a href="#help-center">Help Center</a> <br />
          Enterprise <a href="#new-inquiry">New Customer Inquiry</a>
        </p>
      </div>

      {/* Instructors */}
      <div>
        <h4 style={{ fontWeight: 'bold' }}>Instructors</h4>
        <hr />
        <p>
          Visit our <a href="#help-center">Help Center</a> and explore our{' '}
          <a href="#teaching-center">Teaching Center</a>
        </p>
      </div>

      {/* Privacy */}
      <div>
        <h4 style={{ fontWeight: 'bold' }}>Privacy</h4>
        <hr />
        <p>
          View <a href="#privacy-policy">privacy policy</a> <br />
          Email <a href="mailto:privacy@skillnetwork.com">privacy@skillnetwork.com</a>
        </p>
        <p>
          Mail: <br />
          Skill Network, Inc. <br />
          Attn: Legal <br />
          600 Harrison Street, 3rd Floor <br />
          San Francisco, CA 94107
        </p>
      </div>

      
    </div>
  </div>
  )
}

export default Contact
