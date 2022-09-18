import React from 'react'

function MainGrid({children, className =' '}) {
  return (
    <div className={`main-grid ${className}`}>
        {children}
    </div>
  )
}

export default MainGrid