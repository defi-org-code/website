import React from 'react'

function BackButton({_body}) {
  return (
    <button className='announcement-page-back'>
       <a href='/announcements'>
       <p>{"<<"}</p>
        {_body}
       </a>
    </button>
  )
}

export default BackButton