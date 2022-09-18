import React from 'react'
import MainGrid from './MainGrid'

function BasePage({children, id=''}) {
  return (
    <div className='base-page' id={id}>
        <MainGrid>
            {children}
        </MainGrid>
    </div>
  )
}

export default BasePage