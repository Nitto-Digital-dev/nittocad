import React, { useState, forwardRef } from 'react';
import styles from '../style';
import SendButton from './SendButton';

const Contact = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section ref={ref} id="contact" className={`${styles.flexCenter} ${styles.paddingY} ${styles.paddingX} flex-col`}>
      <div className="w-full max-w-[600px] text-center xl:px-16 sm:px-16 px-6 py-10">
        <h2 className={styles.heading2}>Contact Us</h2>
      </div>
      <div className="w-full max-w-[600px]">
        <form onSubmit={handleSubmit} className="mt-8">
          <div className="mb-4">
            <label className="block text-white text-sm font-poppins mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-poppins mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-poppins mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Your Message"
              rows="4"
            />
          </div>
          <SendButton type="submit" styles="w-full py-3" text="Send" />
        </form>
      </div>
    </section>
  );
});

export default Contact;
