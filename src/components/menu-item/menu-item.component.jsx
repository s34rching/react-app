import React from 'react';
import './menu-item.styles.scss'

const MenuItem = ({ title, id, imageUrl, size }) => {
  return (
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className={`${size} menu-item`}
      key={id}
    >
      <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>Shop now</span>
      </div>
    </div>
  )
}

export default MenuItem
