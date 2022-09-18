import React from 'react'

function Projects({ projects, _body }) {
    return (
        <div className='projects'>
            <section className='projects-title'>{_body}</section>
            <div className='projects-list'>{projects}</div>

        </div>
    )
}

export default Projects