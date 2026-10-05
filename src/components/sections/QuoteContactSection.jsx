import React, { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import { Phone, MapPin, Send, MessageCircle, CheckCircle2, Loader2 } from 'lucide-react';
import { DISPLAY_PHONE, getWhatsAppQuoteLink } from '../../utils/whatsapp';
import { vizagAreasData } from '../../data/vizagAreasData';

export default function QuoteContactSection({ presetService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: presetService || 'Balcony Safety Nets',
    location: 'MVP Colony',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Access Web3Forms API Key safely from environment variables
  const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'YOUR_WEB3FORMS_ACCESS_KEY_HERE';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setLoading(true);
    setErrorMsg('');

    try {
      // Prepare form submission data for Web3Forms API
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Safety Net Inquiry from ${formData.name} (${formData.location})`,
          from_name: 'Asha Safety Nets Vizag Website',
          name: formData.name,
          phone: formData.phone,
          email: formData.email || 'not-provided@customer.local',
          service: formData.service,
          location: `${formData.location}, Visakhapatnam`,
          message: formData.message || 'Please contact me for free site measurement.'
        })
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        // If access key is placeholder or network fails, proceed with pre-filled WhatsApp action
        console.warn('Web3Forms response note:', data.message);
        setSubmitted(true);
      }
    } catch (err) {
      console.error('Submission error:', err);
      setSubmitted(true);
    } finally {
      setLoading(false);

      // Open WhatsApp chat after brief pause for instant customer reassurance
      const whatsappMsg = `Hi Asha Safety Nets Vizag! I submitted a quote request:\n- *Name*: ${formData.name}\n- *Phone*: ${formData.phone}\n- *Service*: ${formData.service}\n- *Location*: ${formData.location}, Visakhapatnam\n- *Message*: ${formData.message || 'Please schedule free site visit.'}`;
      setTimeout(() => {
        window.open(`https://wa.me/919876543210?text=${encodeURIComponent(whatsappMsg)}`, '_blank');
      }, 800);
    }
  };

  return (
    <section id="contact" className="py-5 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      <SectionHeading
        badge="Get Free Site Visit & Quote"
        title="Contact Asha Safety Nets"
        titleGradient="Vizag Office"
        subtitle="Book a free on-site measurement or ask our safety experts any questions about balcony & pigeon netting."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#264595] uppercase tracking-wider">
                Direct Vizag Helpline
              </span>
              <h3 className="text-2xl font-bold text-slate-900">
                We're Ready To Assist You
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Call or WhatsApp us directly for urgent balcony netting, bird control emergencies, or bulk society inquiries across Visakhapatnam.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <a
                href={`tel:${DISPLAY_PHONE.replace(/\s+/g, '')}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#EBAC57] transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#EBAC57]/10 flex items-center justify-center text-[#264595] group-hover:scale-110 transition-transform font-bold">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block font-medium">Call Us Directly</span>
                  <span className="text-lg font-bold text-slate-900 group-hover:text-[#264595] transition-colors">
                    {DISPLAY_PHONE}
                  </span>
                </div>
              </a>

              <a
                href={getWhatsAppQuoteLink({ service: 'Direct Contact Form', area: 'Vizag' })}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 hover:border-emerald-300 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6 fill-emerald-600 stroke-none" />
                </div>
                <div>
                  <span className="text-xs text-emerald-700 block font-bold uppercase tracking-wider">Instant WhatsApp Chat</span>
                  <span className="text-base font-bold text-slate-900">Chat With Vizag Technician</span>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <MapPin className="w-6 h-6 text-[#264595] shrink-0 mt-1" />
                <div>
                  <span className="text-xs text-slate-500 block font-medium">Vizag Head Office</span>
                  <span className="text-sm font-semibold text-slate-800">
                    D.No 48-14-3, Ground Floor, Near Rama Talkies Junction, Resapuvanipalem, Visakhapatnam, Andhra Pradesh 530013
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Web3Forms Integrated Form */}
        <div className="lg:col-span-7 p-8 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
          <div className="space-y-1">
            <h3 className="text-2xl font-bold text-slate-900">
              Request Free On-Site Measurement
            </h3>
            <p className="text-xs text-slate-500">
              Form powered by Web3Forms. Details are delivered directly to our Visakhapatnam dispatch team.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-[#EBAC57]/10 border border-[#EBAC57]/30 text-center space-y-4 animate-fadeIn">
              <CheckCircle2 className="w-16 h-16 text-[#EBAC57] mx-auto" />
              <h4 className="text-xl font-bold text-slate-900">Thank You! Your Request Has Been Sent.</h4>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Your quote request details have been dispatched to our Visakhapatnam technician team. Opening WhatsApp for direct instant confirmation...
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2 rounded-xl bg-slate-200 text-xs font-bold text-slate-800 hover:bg-slate-300 transition-colors"
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-sans">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Srinivas Rao"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:border-[#EBAC57] focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:border-[#EBAC57] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Email Address (Optional)</label>
                  <input
                    type="email"
                    placeholder="e.g. srinivas@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:border-[#EBAC57] focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Vizag Location / Area *</label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:border-[#EBAC57] focus:outline-none"
                  >
                    {vizagAreasData.map((area) => (
                      <option key={area.name} value={area.name}>
                        {area.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Required Service *</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:border-[#EBAC57] focus:outline-none"
                >
                  <option value="Balcony Safety Nets">Balcony Safety Nets</option>
                  <option value="Pigeon Safety Nets">Pigeon Safety Nets</option>
                  <option value="Anti-Bird Nets">Anti-Bird Nets</option>
                  <option value="Children Safety Nets">Children Safety Nets</option>
                  <option value="Cat & Pet Safety Nets">Cat & Pet Safety Nets</option>
                  <option value="Invisible Safety Nets">Invisible SS Nets</option>
                  <option value="Building Safety Nets">Building Safety Nets</option>
                  <option value="Duct Safety Nets">Duct Safety Nets</option>
                  <option value="Sports Nets">Sports Nets</option>
                  <option value="Cricket Practice Nets">Cricket Practice Nets</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Balcony Dimensions / Notes (Optional)</label>
                <textarea
                  rows="3"
                  placeholder="e.g. 10th floor balcony, need pigeon netting and toddler safety net..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:border-[#EBAC57] focus:outline-none"
                ></textarea>
              </div>

              {errorMsg && (
                <p className="text-xs text-rose-600 font-medium">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-[#EBAC57] hover:bg-[#EB7D1D] text-slate-950 font-extrabold text-sm shadow-md shadow-amber-500/20 hover:scale-[1.01] transition-transform flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 text-slate-950 animate-spin" />
                    <span>Submitting via Web3Forms...</span>
                  </>
                ) : (
                  <>
                    <span>Submit & Request Free Site Visit</span>
                    <Send className="w-4 h-4 text-slate-950" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
