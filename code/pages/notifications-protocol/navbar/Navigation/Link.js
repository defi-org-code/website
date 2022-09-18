import React from 'react'

function Link({url, _body}) {
  return (
    <a href={url} className='navbar-navigation-link' target='_blank'>{_body}</a>
  )
}

export default Link