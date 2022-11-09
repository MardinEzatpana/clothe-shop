import React from 'react'
import "./menuItem.scss"
import { useNavigate } from 'react-router-dom';

const MenuItem = ({ item }) => {
  const { title, imageUrl, size, linkUrl } = item;
    const navigate = useNavigate();
    return (
      <div className={`${size} menu-item`}
      >
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
        <div className="content" onClick={() => navigate(`${linkUrl}`)}>
          <h1 className="title">{title.toUpperCase()}</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    );
}

export default MenuItem