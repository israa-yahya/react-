// components/Box.js
import React from 'react';
import styles from './Box.module.css'; // Import CSS module

const Box = ({ imageUrl, title, description }) => {
  return (
    <div className={styles.blog_item} >
      <img src={imageUrl} alt={title} className={styles.image} />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

export default Box;
