import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <h3 className="text-xl font-black text-foreground mb-1.5">Send a Message</h3>
        <p className="text-xs sm:text-sm text-muted-foreground">
          Have an internship opportunity, project collaboration, or question? Send a note directly.
        </p>
      </div>

      {status === 'success' && (
        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm flex items-start gap-3">
          <CheckCircle className="text-emerald-400 shrink-0 mt-0.5" size={18} />
          <div>
            <p className="font-bold text-emerald-300">Message Received!</p>
            <p className="text-emerald-300/80 mt-1 text-xs">
              Thank you for connecting! I'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 rounded-2xl bg-destructive/10 border border-destructive/30 text-destructive text-xs sm:text-sm flex items-start gap-3">
          <AlertCircle className="text-destructive shrink-0 mt-0.5" size={18} />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground mb-2"
          >
            Your Name <span className="text-primary">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Adarsh"
            className="w-full px-4 py-3 rounded-2xl bg-muted/40 border border-border text-foreground text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground mb-2"
          >
            Your Email <span className="text-primary">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="you@domain.com"
            className="w-full px-4 py-3 rounded-2xl bg-muted/40 border border-border text-foreground text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground mb-2"
          >
            Message <span className="text-primary">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Hello Adarsh, I saw your portfolio and would like to connect regarding..."
            className="w-full px-4 py-3 rounded-2xl bg-muted/40 border border-border text-foreground text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full py-3.5 px-6 rounded-2xl font-bold text-sm bg-primary text-primary-foreground hover:opacity-90 flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              <span>Sending Message...</span>
            </>
          ) : (
            <>
              <Send size={16} />
              <span>Send Message</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
};
