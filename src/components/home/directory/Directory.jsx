import React from 'react';
import { useSelector } from 'react-redux';
import MenuItem from '../menuItem/MenuItem';
import "./directory.scss"

const Directory = () => {
  const { sections } = useSelector((state) => state.directory);
  return (
    <div className='directory-menu'>
        {sections.map((item) => (
      <MenuItem key={item.id} item={item} />
        ))}
    </div>
  )
}

export default Directory