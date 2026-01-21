import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { FaCheck, FaCircleNotch, FaEnvelope, FaShare } from 'react-icons/fa';
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
      
      // Reset the success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1000);
  };

  return (
    <section id='contact'>
    <div  className="accent-contact xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-white/70 backdrop-blur-md p-8 rounded-xl shadow-2xl border border-slate-200 relative overflow-hidden"
      >
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/70 to-white/20 pointer-events-none" />
        <h3 className="text-4xl font-bold">
          Contact
        </h3>
        
        {isSubmitted ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 flex flex-col items-center justify-center text-center py-12"
          >
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg" style={{ background: "linear-gradient(90deg, var(--accent), var(--accent2))" }}>
              <FaCheck e="text-white text-3xl" />
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-3">Message Sent!</h4>
            <p className="text-slate-600 max-w-md">
              Thanks for reaching out! I'll get back to you as soon as possible.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-8 px-6 py-3 bg-white text-slate-900 rounded-lg hover:bg-slate-50 transition-colors duration-300 border border-slate-200"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col gap-6 relative z-10"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <label className="flex flex-col">
                <span className="text-slate-700 font-medium mb-2 flex items-center gap-2">
                  Your Name
                  <span className="text-xs text-red-400">*</span>
                </span>
                <input
                  required
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  className="bg-white py-3 px-4 placeholder:text-slate-400 text-slate-900 rounded-lg border border-slate-200 focus:border-[var(--accent)] focus:outline-none font-medium transition-all duration-300"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-slate-700 font-medium mb-2 flex items-center gap-2">
                  Your Email
                  <span className="text-xs text-red-400">*</span>
                </span>
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email?"
                  className="bg-white py-3 px-4 placeholder:text-slate-400 text-slate-900 rounded-lg border border-slate-200 focus:border-[var(--accent)] focus:outline-none font-medium transition-all duration-300"
                />
              </label>
            </div>
            <label className="flex flex-col">
              <span className="text-slate-700 font-medium mb-2 flex items-center gap-2">
                Your Message
                <span className="text-xs text-red-400">*</span>
              </span>
              <textarea
                required
                rows="6"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="bg-white py-3 px-4 placeholder:text-slate-400 text-slate-900 rounded-lg border border-slate-200 focus:border-[var(--accent)] focus:outline-none font-medium transition-all duration-300 resize-none"
              />
            </label>
            
            {/* Tech stack interests checkboxes */}
            <div className="mt-2">
              <p className="text-slate-700 font-medium mb-3">I'm interested in discussing:</p>
              <div className="flex flex-wrap gap-2">
                {['AWS', 'Kubernetes', 'DevOps', 'CI/CD', 'Frontend'].map((tech) => (
                  <label key={tech} className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-slate-200 cursor-pointer hover:border-[var(--accent)]/40 transition-colors">
                    <input type="checkbox" className="accent-sky-500" />
                    <span className="text-slate-700 text-sm">{tech}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="flex flex-wrap justify-between items-center gap-4 mt-2">
              <p className="text-slate-500 text-sm">
                All fields marked with <span className="text-red-400">*</span> are required
              </p>
              <button
                type="submit"
                className="py-3 px-6 rounded-lg text-white font-medium shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
                style={{ background: "linear-gradient(90deg, var(--accent), var(--accent2))" }}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <FaCircleNotch className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FaShare />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        )}
        
        {/* Decorative elements */}
        <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full blur-xl pointer-events-none" style={{ background: "radial-gradient(circle, color-mix(in srgb, var(--accent) 18%, transparent), transparent 60%)" }} />
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-xl pointer-events-none" style={{ background: "radial-gradient(circle, color-mix(in srgb, var(--accent2) 16%, transparent), transparent 60%)" }} />
      </motion.div>
      
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] relative"
      >
        {/* Decorative gradient border */}
        <div className="absolute inset-0 rounded-xl border border-slate-200 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 to-white/0" />
        </div>
        
        <EarthCanvas />
        
        {/* Contact information floating card */}
        <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-auto bg-white/85 backdrop-blur-md p-4 rounded-lg border border-slate-200 shadow-lg max-w-xs">
          <h4 className="text-slate-900 font-medium mb-3">Direct Contact</h4>
          <div className="space-y-2 text-slate-700">
            <p className="flex items-center gap-2 text-sm">
              <span className="w-6 h-6 rounded-full bg-sky-50 flex items-center justify-center border border-slate-200">
                <FaEnvelope className="text-sky-700 text-xs" />
              </span>
              mayurwagh2001@gmail.com
            </p>
            <p className="text-xs text-slate-500 mt-2">
              Prefer to reach out directly? Feel free to email or connect with me on GitHub or LinkedIn.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
    </section>

  );
};

export default Contact ;