import React from 'react'

function Socials({list, _body}) {
    return (
        <div className='socials'>
            <section className='socials-title'>{_body}</section>
            <div className='socials-list'>
            {list}
            </div>
        </div>
    )
}

export default Socials
