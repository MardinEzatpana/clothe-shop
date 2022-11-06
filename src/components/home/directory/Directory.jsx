import React, { useState } from 'react'
import data from '../../../data/data';
import MenuItem from '../menuItem/MenuItem';
import "./directory.scss"

const Directory = () => {
    const [item] = useState(data);
  return (
    <div className='directory-menu'>
        {item.map(({id, ...other}) => (
      <MenuItem key={id} {...other} />
        ))}
    </div>
  )
}

export default Directory