import React from 'react'

function Header() {
  return (
     <header style={{
        // background: 'rgba(26, 26, 46, 1)',
        // textAlign: 'center',
        padding: '-5px 20px',
        // borderBottom: '1px solid rgba(0, 201, 167, 0.3)',
        
      }}>
         <div className="logo-card dark" style={{border:'none',
        boxShadow: 'none',}} >
      <div className="snuk-logo dark-theme">
        <div className="logo-mark">
          <div className="ring"></div>
          <div className="breath-dot"></div>
        </div>
        <div>
          <div className="logo-text">SNUK</div>
          <div className="logo-sub">Smart Nicotine UK</div>
        </div>
      </div>
    </div>
        {/*<p style={styles.subtitle}>Chat with David Haye • {userProfile?.email}</p>*/}
      </header>
  )
}

export default Header