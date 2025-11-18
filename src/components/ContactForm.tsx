"use client";
import { useState } from 'react';
import Modal from './Modal';
import { useTranslation } from '../lib/i18n/useTranslation';

export default function ContactForm() {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSuccess, setModalSuccess] = useState<boolean | null>(null);
  const [modalMessage, setModalMessage] = useState('');

  async function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch('/api/send_form', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      const json = await res.json();
      setModalSuccess(!!json.success);
      setModalMessage(String(json.message || ''));
      setModalOpen(true);
      if (json.success) form.reset();
    } catch {
      setModalSuccess(false);
      setModalMessage('Erro ao enviar mensagem. Por favor, tente novamente.');
      setModalOpen(true);
    }
  }

  return (
    <>
      <div className="relative bg-octo-blue p-8 rounded-xl border border-octo-yellow/20 shadow-xl">
        <div className="absolute -right-3 -top-3 bg-octo-yellow text-octo-blue px-4 py-1 text-sm font-medium rounded-full">{t('contact.form.cta')} <i className="fas fa-calendar-check ml-1"></i></div>
        <form onSubmit={submitForm}>
          <div className="mb-6 relative group"><label htmlFor="nome" className="block mb-2 text-sm font-medium xl:text-base group-focus-within:text-octo-yellow transition-colors">{t('contact.labels.name')}</label><div className="relative"><input type="text" id="nome" name="nome" className="w-full px-5 py-3 bg-octo-blue/50 border border-octo-yellow/30 rounded-lg focus:outline-none focus:border-octo-yellow xl:text-lg" required placeholder={t('contact.placeholders.name')} /><div className="absolute inset-0 border border-octo-yellow/0 rounded-lg group-focus-within:border-octo-yellow/30 group-focus-within:shadow-octo-yellow/10 pointer-events-none transition-all"></div></div></div>
          <div className="mb-6 relative group"><label htmlFor="email" className="block mb-2 text-sm font-medium xl:text-base group-focus-within:text-octo-yellow transition-colors">{t('contact.labels.email')}</label><div className="relative"><input type="email" id="email" name="email" className="w-full px-5 py-3 bg-octo-blue/50 border border-octo-yellow/30 rounded-lg focus:outline-none focus:border-octo-yellow xl:text-lg" required placeholder={t('contact.placeholders.email')} /><div className="absolute inset-0 border border-octo-yellow/0 rounded-lg group-focus-within:border-octo-yellow/30 group-focus-within:shadow-octo-yellow/10 pointer-events-none transition-all"></div></div></div>
          <div className="mb-8 relative group"><label htmlFor="mensagem" className="block mb-2 text-sm font-medium xl:text-base group-focus-within:text-octo-yellow transition-colors">{t('contact.labels.message')}</label><div className="relative"><textarea id="mensagem" name="mensagem" rows={4} className="w-full px-5 py-3 bg-octo-blue/50 border border-octo-yellow/30 rounded-lg focus:outline-none focus:border-octo-yellow xl:text-lg" required placeholder={t('contact.placeholders.message')}></textarea><div className="absolute inset-0 border border-octo-yellow/0 rounded-lg group-focus-within:border-octo-yellow/30 group-focus-within:shadow-octo-yellow/10 pointer-events-none transition-all"></div></div></div>
          <button type="submit" className="w-full bg-octo-yellow text-octo-blue px-6 py-4 rounded-lg font-medium transition-all transform hover:-translate-y-1 hover:scale-105 hover:bg-octo-green hover:text-white xl:text-xl group"><span className="relative z-10 inline-flex items-center">{t('contact.form.cta')}<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></span></button>
          <p className="text-center text-octo-yellow/70 text-sm mt-4">{t('contact.form.note')}</p>
        </form>
      </div>
      <Modal open={modalOpen} success={modalSuccess} message={modalMessage} onClose={() => setModalOpen(false)} />
    </>
  );
}