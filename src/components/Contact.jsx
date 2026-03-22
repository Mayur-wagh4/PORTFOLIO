import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { FaCheck, FaCircleNotch, FaShare } from 'react-icons/fa';
import { slideIn } from '../utils/motion';
import { EarthCanvas } from './canvas';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [interests, setInterests] = useState([]);

  const techOptions = ['AWS', 'Kubernetes', 'CI/CD', 'DevSecOps', 'Infrastructure'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const toggleInterest = (tech) => {
    setInterests((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      setForm({ name: '', email: '', message: '' });
      setInterests([]);
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  const contactDetails = [
    { icon: '✉', label: 'Email', value: 'mayurwagh2001@gmail.com' },
    { icon: '📞', label: 'Phone', value: '+91 73853 60404' },
    { icon: '📍', label: 'Location', value: 'Mumbai, India', sub: 'Open to remote' },
  ];

  const links = [
    { short: 'in', label: 'LinkedIn', display: 'linkedin.com/in/-mayurwagh' },
    { short: 'GH', label: 'GitHub', display: 'github.com/Mayur-wagh4' },
  ];

  const glassCard = {
    background: 'rgba(255, 255, 255, 0.65)',
    border: '1px solid rgba(120, 100, 255, 0.15)',
    borderRadius: '24px',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    boxShadow: '0 8px 40px rgba(120,100,255,0.08), inset 0 1px 0 rgba(255,255,255,0.95)',
    padding: '2rem',
  };

  const smallGlassCard = {
    background: 'rgba(255, 255, 255, 0.65)',
    border: '1px solid rgba(120, 100, 255, 0.15)',
    borderRadius: '20px',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    boxShadow: '0 8px 32px rgba(120,100,255,0.07), inset 0 1px 0 rgba(255,255,255,0.95)',
    padding: '1.4rem',
  };

  const pillRow = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    background: 'rgba(120,100,255,0.04)',
    border: '1px solid rgba(120,100,255,0.1)',
    borderRadius: '12px',
    padding: '10px 14px',
  };

  const pillIcon = {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    background: 'rgba(120,100,255,0.1)',
    border: '1px solid rgba(120,100,255,0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    flexShrink: 0,
  };

  return (
    <section id="contact" className="relative overflow-hidden">

      {/* EarthCanvas full background */}
      <div className="absolute inset-0 z-0">
        <EarthCanvas />
      </div>

      {/* Soft white overlay — keeps white bg feel, Earth subtly visible */}
      <div className="absolute inset-0 z-0 bg-white/55" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 xl:flex xl:flex-row flex-col flex gap-10 items-start">

        {/* Left — Glass Form Card */}
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className="flex-[0.75]"
          style={glassCard}
        >
          <p className="text-xs uppercase tracking-widest mb-1 text-slate-400">
            Get in touch
          </p>
          <h2 className="text-3xl font-semibold mb-2 text-slate-900">Contact</h2>
          <p className="text-sm mb-8 leading-relaxed text-slate-500">
            Have a project in mind or want to talk DevOps? I'd love to hear from you.
          </p>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center text-center py-16"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
                style={{ background: 'rgba(120,100,255,0.1)', border: '1px solid rgba(120,100,255,0.3)' }}
              >
                <FaCheck className="text-violet-500 text-xl" />
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-2">Message Sent!</h4>
              <p className="text-sm text-slate-500 max-w-xs">
                Thanks for reaching out. I'll get back to you as soon as possible.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-6 text-sm text-violet-500 underline underline-offset-4"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Name', name: 'name', type: 'text', placeholder: 'Your name' },
                  { label: 'Email', name: 'email', type: 'email', placeholder: 'your@email.com' },
                ].map(({ label, name, type, placeholder }) => (
                  <div key={name} className="flex flex-col gap-1.5">
                    <label className="text-xs text-slate-500">
                      {label} <span className="text-red-400">*</span>
                    </label>
                    <input
                      required
                      type={type}
                      name={name}
                      value={form[name]}
                      onChange={handleChange}
                      placeholder={placeholder}
                      className="text-sm text-slate-800 rounded-xl px-4 py-2.5 outline-none transition-all duration-200 placeholder:text-slate-300"
                      style={{
                        background: 'rgba(255,255,255,0.85)',
                        border: '1px solid rgba(120,100,255,0.2)',
                      }}
                      onFocus={e => e.target.style.border = '1px solid rgba(120,100,255,0.55)'}
                      onBlur={e => e.target.style.border = '1px solid rgba(120,100,255,0.2)'}
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-slate-500">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What's on your mind?"
                  className="text-sm text-slate-800 rounded-xl px-4 py-2.5 outline-none resize-none transition-all duration-200 placeholder:text-slate-300"
                  style={{
                    background: 'rgba(255,255,255,0.85)',
                    border: '1px solid rgba(120,100,255,0.2)',
                    fontFamily: 'inherit',
                  }}
                  onFocus={e => e.target.style.border = '1px solid rgba(120,100,255,0.55)'}
                  onBlur={e => e.target.style.border = '1px solid rgba(120,100,255,0.2)'}
                />
              </div>

              <div>
                <p className="text-xs text-slate-500 mb-2">Interested in discussing:</p>
                <div className="flex flex-wrap gap-2">
                  {techOptions.map((tech) => (
                    <button
                      key={tech}
                      type="button"
                      onClick={() => toggleInterest(tech)}
                      className="text-xs px-3 py-1.5 rounded-full transition-all duration-200"
                      style={
                        interests.includes(tech)
                          ? { background: 'rgba(120,100,255,0.12)', border: '1px solid rgba(120,100,255,0.45)', color: '#6d4aff' }
                          : { background: 'rgba(255,255,255,0.75)', border: '1px solid rgba(120,100,255,0.15)', color: '#64748b' }
                      }
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="self-start mt-1 flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium text-white transition-all duration-200 disabled:opacity-50"
                style={{
                  background: 'linear-gradient(135deg, #7c6fef, #5b8dee)',
                  boxShadow: '0 4px 20px rgba(120,100,255,0.25)',
                }}
              >
                {loading ? (
                  <><FaCircleNotch className="animate-spin" /> Sending...</>
                ) : (
                  <><FaShare /> Send Message</>
                )}
              </button>
            </form>
          )}
        </motion.div>

        {/* Right — Glass Info Cards */}
        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="xl:flex-1 flex flex-col gap-4"
        >
          {/* Contact details card */}
          <div style={smallGlassCard}>
            <p className="text-xs uppercase tracking-widest mb-3 text-slate-400">
              Direct Contact
            </p>
            <div className="flex flex-col gap-2.5">
              {contactDetails.map(({ icon, label, value, sub }) => (
                <div key={label} style={pillRow}>
                  <div style={pillIcon}>{icon}</div>
                  <div>
                    <p className="text-xs text-slate-400">{label}</p>
                    <p className="text-sm font-medium text-slate-800">{value}</p>
                    {sub && <p className="text-xs text-slate-400">{sub}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Connect card */}
          <div style={smallGlassCard}>
            <p className="text-xs uppercase tracking-widest mb-3 text-slate-400">
              Connect
            </p>
            <div className="flex flex-col gap-2.5">
              {links.map(({ short, label, display }) => (
                <div key={label} style={pillRow}>
                  <div
                    style={{
                      ...pillIcon,
                      fontSize: '11px',
                      fontWeight: '500',
                      color: '#7c6fef',
                    }}
                  >
                    {short}
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">{label}</p>
                    <p className="text-sm text-slate-800">{display}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;