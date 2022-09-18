import React from 'react'

function Project({ title, _body, url, image, _relativeURL, _ID }) {
    const handleUrl = (url) => {
        return `${_relativeURL(url, _ID)}`;
    }
    return (
        <div className='project'>
            <h4 className='project-title'>{title}</h4>
            <div className='project-body'>{_body}</div>
            <a href={url} target='_blank' className='project-link'>View More</a>
            <img src={handleUrl(image)} className='project-image' />
        </div>
    )
}

export default Project