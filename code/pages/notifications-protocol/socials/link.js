import React from 'react'

function Social({ url, image, _relativeURL, _ID }) {
    const handleUrl = (url) => {
        return `${_relativeURL(url, _ID)}`;
    }
    return (
        <a href={url} target='_blank' className='socials-link'>
            <img src={handleUrl(image)} />
        </a>
    )
}

export default Social
