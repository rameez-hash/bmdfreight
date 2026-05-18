import { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock, Send, Truck, Headphones, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact BMD Freight | Auto Transport Support & Quotes',
  description: 'Get in touch with BMD Freight for a free car shipping quote, shipment tracking, or any questions. Call (872) 204-2373 or email info@bmdfreight.com. We respond fast.',
};

export default function ContactPage() {
  return (
    <>
      {/* Banner */}
      <section className="relative py-20 bg-navy">
        <div className="absolute inset-0 opacity-20 bg-[url('/img/contact-banner.webp')] bg-cover bg-center" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Contact BMD Freight</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Questions, quotes, or tracking help — our team is available 7 days a week and always picks up the phone.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-slate-50 rounded-xl p-8 border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Send Us a Message</h2>
                <p className="text-slate-500 mb-6">Fill out the form below and a member of our team will get back to you within a few hours, usually much sooner.</p>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Name <span className="text-red-500">*</span></label>
                      <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none" placeholder="Your name" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Phone <span className="text-red-500">*</span></label>
                      <input type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none" placeholder="(555) 123-4567" required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email <span className="text-red-500">*</span></label>
                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none" placeholder="email@example.com" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Subject <span className="text-red-500">*</span></label>
                    <div className="flex flex-wrap gap-4">
                      {['Quote Request', 'General Question', 'Tracking', 'Feedback'].map((s) => (
                        <label key={s} className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="subject" value={s} className="w-4 h-4 text-accent" />
                          <span className="text-slate-700 text-sm">{s}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Message <span className="text-red-500">*</span></label>
                    <textarea rows={5} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none" placeholder="How can we help you?" required />
                  </div>
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 mt-1 text-accent" required />
                    <span className="text-sm text-slate-600">I agree to the privacy policy and terms of service.</span>
                  </label>
                  <button type="submit" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                    <Send className="w-5 h-5" /> Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Side Info */}
            <div className="space-y-6">
              <div className="bg-slate-50 rounded-xl p-8 border border-slate-100">
                <h3 className="text-xl font-bold text-slate-800 mb-6">Reach Us Directly</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">Our Office</p>
                      <p className="text-slate-600 text-sm">4444 Main St, Skokie IL 60076</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">Phone</p>
                      <a href="tel:872-204-2373" className="text-slate-600 text-sm hover:text-accent transition-colors">(872) 204-2373</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">Email</p>
                      <a href="mailto:info@bmdfreight.com" className="text-slate-600 text-sm hover:text-accent transition-colors">info@bmdfreight.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">Available Hours</p>
                      <p className="text-slate-600 text-sm">Mon – Fri: 8am – 8pm EST</p>
                      <p className="text-slate-600 text-sm">Sat – Sun: 9am – 5pm EST</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-navy rounded-xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Skip the Form — Get a Quote Instantly</h3>
                <p className="text-slate-300 text-sm mb-6">
                  Use our online calculator to get a real, locked-in price in under 60 seconds. No phone call needed.
                </p>
                <a href="/car-shipping-calculator" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Get Instant Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
