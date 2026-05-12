import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { FaCheck, FaCircleNotch, FaShare } from 'react-icons/fa';
import { slideIn } from '../utils/motion';

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
    { icon: '📍', label: 'Location', value: 'Pune, India', sub: 'Open to remote' },
  ];

  const links = [
    { short: 'in', label: 'LinkedIn', display: 'linkedin.com/in/-mayurwagh' },
    { short: 'GH', label: 'GitHub', display: 'github.com/Mayur-wagh4' },
    // { short: 'PF', label: 'Portfolio', display: 'mayurwagh.in' },
  ];

  const pillRow = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    background: 'linear-gradient(to right, #f0f9ff, #eef2ff)',
    border: '1px solid #bae6fd',
    borderRadius: '12px',
    padding: '10px 14px',
  };

  const pillIcon = {
    width: '34px',
    height: '34px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #e0f2fe, #e0e7ff)',
    border: '1px solid #bae6fd',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    flexShrink: 0,
  };

  return (
    <section id="contact" className="py-20 px-6">

      {/* ── Two-column layout, items-stretch so both cols are same height ── */}
      <div className="max-w-6xl mx-auto flex flex-col xl:flex-row gap-10 items-stretch">

        {/* ── LEFT — Form card ── */}
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className="flex-[0.75] bg-white rounded-3xl p-8 border-2 border-sky-100 flex flex-col"
          style={{ boxShadow: '0 8px 40px rgba(56,189,248,0.10), 0 2px 12px rgba(99,102,241,0.07)' }}
        >
          <p className="text-xs uppercase tracking-widest mb-1 text-slate-400">Get in touch</p>
          <h2 className="text-3xl font-semibold mb-2 text-slate-900">
            Contact{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-indigo-600">
              Me
            </span>
          </h2>
          <p className="text-sm mb-8 leading-relaxed text-slate-500">
            Have a project in mind or want to talk DevOps? I'd love to hear from you.
          </p>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex-1 flex flex-col items-center justify-center text-center py-10"
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5 bg-gradient-to-br from-sky-50 to-indigo-50 border-2 border-sky-200">
                <FaCheck className="text-indigo-500 text-xl" />
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-2">Message Sent!</h4>
              <p className="text-sm text-slate-500 max-w-xs">
                Thanks for reaching out. I'll get back to you as soon as possible.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-6 text-sm bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-indigo-600 underline underline-offset-4"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5 flex-1">
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
                      className="text-sm text-slate-800 rounded-xl px-4 py-2.5 outline-none transition-all duration-200 placeholder:text-slate-300 bg-slate-50 border border-slate-200"
                      onFocus={e => {
                        e.target.style.borderColor = '#38bdf8';
                        e.target.style.boxShadow = '0 0 0 3px rgba(56,189,248,0.12)';
                      }}
                      onBlur={e => {
                        e.target.style.borderColor = '#e2e8f0';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-1.5 flex-1">
                <label className="text-xs text-slate-500">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  required
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What's on your mind?"
                  className="text-sm text-slate-800 rounded-xl px-4 py-2.5 outline-none resize-none transition-all duration-200 placeholder:text-slate-300 bg-slate-50 border border-slate-200 flex-1 min-h-[120px]"
                  style={{ fontFamily: 'inherit' }}
                  onFocus={e => {
                    e.target.style.borderColor = '#38bdf8';
                    e.target.style.boxShadow = '0 0 0 3px rgba(56,189,248,0.12)';
                  }}
                  onBlur={e => {
                    e.target.style.borderColor = '#e2e8f0';
                    e.target.style.boxShadow = 'none';
                  }}
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
                      className="text-xs px-3 py-1.5 rounded-full border transition-all duration-200"
                      style={
                        interests.includes(tech)
                          ? { background: 'linear-gradient(to right, #e0f2fe, #e0e7ff)', borderColor: '#818cf8', color: '#4f46e5' }
                          : { background: '#f8fafc', borderColor: '#e2e8f0', color: '#64748b' }
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
                className="self-start flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium text-white transition-all duration-200 disabled:opacity-50 bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500"
                style={{ boxShadow: '0 4px 20px rgba(99,102,241,0.25)' }}
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

        {/* ── RIGHT — Info cards, same height as left via flex-col + justify-between ── */}
        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="xl:flex-1 flex flex-col gap-4"
        >
          {/* Contact details card — grows to fill */}
          <div
            className="flex-1 bg-white rounded-2xl p-5 border-2 border-sky-100 flex flex-col"
            style={{ boxShadow: '0 8px 32px rgba(56,189,248,0.08), 0 2px 8px rgba(99,102,241,0.06)' }}
          >
            <p className="text-xs uppercase tracking-widest mb-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-indigo-600">
              Direct Contact
            </p>
            <div className="flex flex-col gap-2.5 flex-1 justify-around">
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

          {/* Connect card — grows to fill */}
          <div
            className="flex-1 bg-white rounded-2xl p-5 border-2 border-indigo-100 flex flex-col"
            style={{ boxShadow: '0 8px 32px rgba(56,189,248,0.08), 0 2px 8px rgba(99,102,241,0.06)' }}
          >
            <p className="text-xs uppercase tracking-widest mb-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-indigo-600">
              Connect
            </p>
            <div className="flex flex-col gap-2.5 flex-1 justify-around">
              {links.map(({ short, label, display }) => (
                <div key={label} style={pillRow}>
                  <div style={{ ...pillIcon, fontSize: '11px', fontWeight: '500', color: '#4f46e5' }}>
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

          {/* Availability badge */}
          <div
            className="bg-white rounded-2xl p-4 border-2 border-sky-100 flex items-center gap-4"
            style={{ boxShadow: '0 8px 32px rgba(56,189,248,0.08)' }}
          >
            <div className="w-3 h-3 rounded-full bg-green-400 shrink-0 animate-pulse" />
            <div>
              <p className="text-sm font-medium text-slate-800">Available for opportunities</p>
              <p className="text-xs text-slate-400">Open to full-time & freelance roles</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;