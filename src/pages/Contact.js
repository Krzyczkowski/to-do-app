import React, { useState } from 'react';
import '../App.css';

function Contact() {
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !title || !message) {
      setError('Wszystkie pola są wymagane!');
      return;
    }

    // Tutaj możesz umieścić kod obsługujący wysłanie formularza

    setEmail('');
    setTitle('');
    setMessage('');
    setError('');
  };

  return (
    <center>
      <div className='Contact'>
        <h1>Contact</h1>
        <form onSubmit={handleSubmit} className='form-grid'>
          <div className='form-row'>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className='form-row'>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={handleTitleChange}
            />
          </div>
          <div className='form-row'>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={handleMessageChange}
            />
          </div>
          {error && <p>{error}</p>}
          <button className='submitButton' type="submit">send</button>
        </form>
        
        
      </div>
      
    </center>
  );
}

export default Contact;
