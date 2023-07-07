// pages/ContactUs.js

import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  /* Your styles here */
`;

function ContactUs() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); // replace this with your form handling logic
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" onChange={handleChange} />
        <input type="email" name="email" onChange={handleChange} />
        <input type="text" name="subject" onChange={handleChange} />
        <textarea name="message" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </Wrapper>
  );
}

export default ContactUs;
