import React from 'react'
import { generateUrl } from '../../../utils'

function ListItem({img, _body, _relativeURL, _ID}) {
  return (
    <li className='ton-decetralized-list-item'>
       <img src = {generateUrl(img,  _relativeURL, _ID)} />
       <div className='ton-decetralized-list-item-body'>{_body}</div>
    </li>
  )
}

export default ListItem