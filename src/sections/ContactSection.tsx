import React, { useState } from 'react';
import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const INITIAL_FORM: FormState = { name: '', email: '', message: '' };

const ContactSection: React.FC = () => {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'sent'>('idle');

  // Input change handler - functional update, zero remounts, permanent focus retention
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => (prev[name as keyof FormErrors] ? { ...prev, [name]: undefined } : prev));
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) {
      newErrors.name = 'Please enter your full name.';
    }
    if (!form.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address (e.g. name@example.com).';
    }
    if (!form.message.trim()) {
      newErrors.message = 'Please enter a message.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit handler - strict explicit click submission, prevents default reload
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');

    const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name.trim()}`);
    const body = encodeURIComponent(
      `Hi Om,\n\n${form.message.trim()}\n\n---\nFrom: ${form.name.trim()}\nEmail: ${form.email.trim()}`
    );
    const mailto = `mailto:ushirom444@gmail.com?subject=${subject}&body=${body}`;
    window.open(mailto, '_blank');

    setStatus('sent');
  };

  const handleReset = () => {
    setForm(INITIAL_FORM);
    setErrors({});
    setStatus('idle');
  };

  return (
    <section
      id="contact"
      className="relative px-5 sm:px-8 md:px-10 py-20 sm:py-28 md:py-36 bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]"
    >
      {/* Ambient gradient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(182,0,168,0.06) 0%, transparent 70%)',
        }}
      />

      <FadeIn delay={0} y={40}>
        <h2
          className="font-black uppercase leading-none tracking-tight text-center mb-4"
          style={{ color: '#0C0C0C', fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Contact
        </h2>
        <p
          className="text-center uppercase tracking-[0.3em] font-light mb-16 sm:mb-20"
          style={{ color: '#B600A8', fontSize: 'clamp(0.65rem, 1.2vw, 0.9rem)' }}
        >
          Full-Stack AI Developer · Nashik, Maharashtra, India
        </p>
      </FadeIn>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16">

        {/* Left — Contact Details */}
        <FadeIn delay={0.1} x={-40} y={0}>
          <div className="flex flex-col gap-8">
            <div>
              <h3
                className="font-black uppercase mb-1"
                style={{ color: '#0C0C0C', fontSize: 'clamp(1.8rem, 5vw, 3.5rem)' }}
              >
                Om Ushir
              </h3>
              <p
                className="font-medium uppercase tracking-wider"
                style={{ color: '#0C0C0C', opacity: 0.5, fontSize: 'clamp(0.75rem, 1.4vw, 1rem)' }}
              >
                Full-Stack AI Developer
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {[
                { label: 'Email', value: 'ushirom444@gmail.com', href: 'mailto:ushirom444@gmail.com' },
                { label: 'Phone', value: '+91 9890881549', href: 'tel:+919890881549' },
                { label: 'Location', value: 'Nashik, Maharashtra, India', href: undefined },
              ].map((item) => (
                <div key={item.label}>
                  <p
                    className="uppercase tracking-[0.25em] font-light mb-0.5"
                    style={{ color: '#0C0C0C', opacity: 0.4, fontSize: '0.6rem' }}
                  >
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-medium transition-opacity hover:opacity-60"
                      style={{ color: '#0C0C0C', fontSize: 'clamp(0.85rem, 1.5vw, 1.1rem)' }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p
                      className="font-medium"
                      style={{ color: '#0C0C0C', fontSize: 'clamp(0.85rem, 1.5vw, 1.1rem)' }}
                    >
                      {item.value}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <p
              className="font-light uppercase tracking-wider"
              style={{ color: '#0C0C0C', opacity: 0.35, fontSize: '0.7rem' }}
            >
              Social links coming soon — LinkedIn · GitHub · Instagram
            </p>
          </div>
        </FadeIn>

        {/* Right — Interactive Contact Form */}
        <FadeIn delay={0.2} x={40} y={0}>
          {status === 'sent' ? (
            /* Success confirmation */
            <div className="flex flex-col items-center justify-center h-full gap-5 text-center py-10">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-2xl"
                style={{ background: 'rgba(182,0,168,0.1)', border: '2px solid rgba(182,0,168,0.4)' }}
              >
                ✉️
              </div>
              <p
                className="font-black uppercase"
                style={{ color: '#0C0C0C', fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)' }}
              >
                Email client opened!
              </p>
              <p
                className="font-light leading-relaxed max-w-xs"
                style={{ color: '#0C0C0C', opacity: 0.55, fontSize: '0.9rem' }}
              >
                Your message is pre-filled. Click send in your email application — Om will reply shortly.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="mt-2 uppercase tracking-widest font-medium text-xs underline underline-offset-4 transition-opacity hover:opacity-60"
                style={{ color: '#B600A8' }}
              >
                Send another message
              </button>
            </div>
          ) : (
            /* Controlled React Form */
            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col gap-4"
            >
              {/* Name */}
              <div className="flex flex-col gap-1">
                <input
                  type="text"
                  name="name"
                  id="contact-name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  autoComplete="name"
                  className="w-full rounded-2xl px-5 py-3.5 text-black outline-none transition-all duration-200 focus:border-[#B600A8] focus:ring-2 focus:ring-[#B600A8]/20"
                  style={{
                    background: 'rgba(12,12,12,0.05)',
                    border: errors.name ? '1.5px solid #dc2626' : '1px solid rgba(12,12,12,0.2)',
                    fontSize: 'clamp(0.85rem, 1.4vw, 1rem)',
                    fontFamily: "'Kanit', sans-serif",
                  }}
                />
                {errors.name && (
                  <span className="text-xs font-medium pl-2 text-red-600">
                    {errors.name}
                  </span>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1">
                <input
                  type="email"
                  name="email"
                  id="contact-email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  autoComplete="email"
                  className="w-full rounded-2xl px-5 py-3.5 text-black outline-none transition-all duration-200 focus:border-[#B600A8] focus:ring-2 focus:ring-[#B600A8]/20"
                  style={{
                    background: 'rgba(12,12,12,0.05)',
                    border: errors.email ? '1.5px solid #dc2626' : '1px solid rgba(12,12,12,0.2)',
                    fontSize: 'clamp(0.85rem, 1.4vw, 1rem)',
                    fontFamily: "'Kanit', sans-serif",
                  }}
                />
                {errors.email && (
                  <span className="text-xs font-medium pl-2 text-red-600">
                    {errors.email}
                  </span>
                )}
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1">
                <textarea
                  name="message"
                  id="contact-message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={5}
                  className="w-full rounded-2xl px-5 py-3.5 text-black outline-none transition-all duration-200 focus:border-[#B600A8] focus:ring-2 focus:ring-[#B600A8]/20 resize-none"
                  style={{
                    background: 'rgba(12,12,12,0.05)',
                    border: errors.message ? '1.5px solid #dc2626' : '1px solid rgba(12,12,12,0.2)',
                    fontSize: 'clamp(0.85rem, 1.4vw, 1rem)',
                    fontFamily: "'Kanit', sans-serif",
                  }}
                />
                {errors.message && (
                  <span className="text-xs font-medium pl-2 text-red-600">
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Explicit Submit Button */}
              <div className="mt-2">
                <ContactButton
                  type="submit"
                  label={status === 'submitting' ? 'Opening...' : 'Contact Me'}
                  fullWidth
                />
              </div>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
};

export default ContactSection;
