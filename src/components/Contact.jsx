import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { slideIn } from '../utils/motion';
import { EarthCanvas } from './canvas';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate a delay for the form submission
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      setForm({
        name: '',
        email: '',
        message: '',
      });
    }, 1000); // You can change this delay time if needed
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-gradient-to-br from-teal-900 to-blue-900 p-8 rounded-2xl shadow-2xl"
      >
        <p className={styles.sectionSubText}></p>
        <h3 className={styles.sectionHeadText}>Let's Connect.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-gray-800 py-4 px-6 placeholder:text-gray-400 text-white rounded-lg border-2 border-transparent focus:border-teal-300 focus:outline-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-gray-800 py-4 px-6 placeholder:text-gray-400 text-white rounded-lg border-2 border-transparent focus:border-teal-300 focus:outline-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-gray-800 py-4 px-6 placeholder:text-gray-400 text-white rounded-lg border-2 border-transparent focus:border-teal-300 focus:outline-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-gradient-to-r  from-teal-500 to-blue-600 py-3 px-8 outline-none w-fit text-white font-bold shadow-lg shadow-teal-300 rounded-xl hover:scale-105 transition-transform"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
        {isSubmitted && (
          <div className="mt-3 bg-teal-200 text-teal-800 px-4 py-2 rounded-md transition-opacity duration-300 opacity-100">
            Your message has been successfully sent!
          </div>
        )}
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
