import { useState } from 'react';
import { CheckCircle2, Lock, Send } from 'lucide-react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import Icon from '../components/Icon';
import Eyebrow from '../components/Eyebrow';
import { CONTACT_METHODS, OFFICES, SERVICE_OPTIONS } from '../data/content';

const CONTACT_EMAIL = 'viswanath.alikonda@appstechsoft.com';

const FIELD = 'w-full rounded-xl bg-surface2 border border-edge/10 px-4 py-3 text-sm text-ink placeholder:text-ink3 outline-none focus:border-brand-500/50 transition-colors';
const LABEL = 'block text-xs font-semibold text-ink2 mb-2';

export default function Contact() {
  const [form, setForm] = useState({ first: '', last: '', email: '', phone: '', size: '', service: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sent
  const [error, setError] = useState('');

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.first || !form.email) {
      setError('Please fill in at least your name and work email.');
      return;
    }
    setError('');
    const subject = encodeURIComponent(`Free Consultation Request — ${form.first} ${form.last}`.trim());
    const body = encodeURIComponent(
      `Name: ${form.first} ${form.last}\nEmail: ${form.email}\nPhone: ${form.phone}\nCompany size: ${form.size}\nService needed: ${form.service}\n\nRequirements:\n${form.message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setStatus('sent');
    setTimeout(() => setStatus('idle'), 6000);
  };

  return (
    <div>
      <PageHero
        crumb="Contact"
        title={<>Let's Build Something <span className="text-gradient">Together</span></>}
        sub="Free 45-minute discovery call. We assess your setup, identify quick wins, and deliver a roadmap — on the call."
      />

      <section className="pb-24 px-5 sm:px-8 bg-surface/40 border-y border-edge/10">
        <div className="mx-auto max-w-[1200px] pt-4 grid lg:grid-cols-[1fr_1.15fr] gap-14">
          <div>
            <Reveal><Eyebrow>Get in Touch</Eyebrow></Reveal>
            <Reveal delay={0.06}><h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink mt-4 mb-4">Ready to <span className="text-gradient">transform?</span></h2></Reveal>
            <Reveal delay={0.1}><p className="text-ink2 leading-relaxed mb-9 max-w-[440px]">Our certified consultants respond within 2 business hours. No sales pitch — just an honest conversation about how we can help.</p></Reveal>

            <div className="space-y-4 mb-9">
              {CONTACT_METHODS.map((m, i) => (
                <Reveal key={m.label} delay={i * 0.05}>
                  <a href={m.href} target={m.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="flex items-center gap-4 group">
                    <div className="w-11 h-11 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 shrink-0 group-hover:scale-105 transition-transform"><Icon name={m.icon} size={18} /></div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-ink3">{m.label}</div>
                      <div className="text-[14px] font-semibold text-ink">{m.value}</div>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-2">
                {OFFICES.map((o) => <span key={o} className="text-xs text-ink2 border border-edge/12 rounded-full px-3 py-1.5">{o}</span>)}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.14}>
            <form onSubmit={submit} className="rounded-3xl border border-edge/10 bg-surface p-7 sm:p-9 relative overflow-hidden">
              <div className="absolute inset-0 bg-grad-mesh pointer-events-none" />
              <div className="relative">
                <h3 className="font-display font-bold text-xl text-ink mb-1">Book Free Consultation</h3>
                <p className="text-xs text-ink3 mb-7">Response within 2 business hours</p>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div><label className={LABEL}>First Name</label><input className={FIELD} placeholder="Rajesh" value={form.first} onChange={set('first')} /></div>
                  <div><label className={LABEL}>Last Name</label><input className={FIELD} placeholder="Kumar" value={form.last} onChange={set('last')} /></div>
                </div>
                <div className="mb-4"><label className={LABEL}>Work Email</label><input type="email" className={FIELD} placeholder="rajesh@company.com" value={form.email} onChange={set('email')} /></div>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div><label className={LABEL}>Phone</label><input className={FIELD} placeholder="+91 98XXX XXXXX" value={form.phone} onChange={set('phone')} /></div>
                  <div>
                    <label className={LABEL}>Company Size</label>
                    <select className={FIELD} value={form.size} onChange={set('size')}>
                      <option value="">Select size</option>
                      {['1–10', '11–50', '51–200', '201–500', '500+'].map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                </div>
                <div className="mb-4">
                  <label className={LABEL}>What do you need?</label>
                  <select className={FIELD} value={form.service} onChange={set('service')}>
                    <option value="">Select service</option>
                    {SERVICE_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div className="mb-5"><label className={LABEL}>Tell us your requirements</label><textarea rows={4} className={FIELD} placeholder="Describe your challenges and goals..." value={form.message} onChange={set('message')} /></div>

                {error && <p className="text-xs text-rose-400 mb-4">{error}</p>}

                <button type="submit" className={`w-full rounded-xl py-3.5 font-bold text-sm flex items-center justify-center gap-2 transition-all ${status === 'sent' ? 'bg-teal-500 text-void' : 'bg-grad-brand text-white shadow-glow hover:brightness-110'}`}>
                  {status === 'sent' ? <><CheckCircle2 size={17} /> Opening your email client…</> : <><Send size={15} /> Schedule Free Consultation</>}
                </button>
                <p className="flex items-center justify-center gap-1.5 text-[11px] text-ink3 mt-4"><Lock size={11} /> Your information is secure. No spam, ever.</p>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
