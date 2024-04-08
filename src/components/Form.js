// components/Form.js

import React, { useState } from 'react';
import styles from './Form.module.css'; // Import CSS module

const Form = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
    // You can make API calls or perform any other actions
    console.log('Form submitted:', title, description);
    // Clear form fields
    setTitle('');
    setDescription('');
  };

  return (
    <div id="newsForm" className={styles.form}>
      <h2>Add Blog:</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Title">Title (maximum 50 characters, letters only):</label><br />
        <input 
          type="text" 
          className={styles.myInput} 
          id="Title" 
          name="title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
          pattern="[A-Za-z\s]{1,50}"
        /><br />
        <label htmlFor="Description">Description (maximum 500 characters):</label><br />
        <input 
          type="text" 
          className={styles.myInput} 
          id="Description" 
          name="Description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required 
          maxLength="500"
        /><br /><br />
        <input type="submit" className={styles.myButton} value="Post" />
      </form>
    </div>
  );
}

export default Form;
