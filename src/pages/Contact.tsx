import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    alert('Thank you for your inquiry. We will get back to you shortly.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-alu-blue pt-32 pb-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="heading-display text-4xl md:text-6xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-alu-silver-dark max-w-3xl mx-auto">
            Ready to start your next project? Contact our team of experts for a comprehensive consultation and quotation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div className="bg-alu-blue-light p-10 rounded-3xl border border-white/5 space-y-8">
              <h3 className="heading-display text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <a 
                href="https://maps.app.goo.gl/rxyvXoHBVC81qzot6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-6 group"
              >
                <div className="w-12 h-12 bg-alu-accent/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-alu-accent/20 transition-colors">
                  <MapPin className="w-6 h-6 text-alu-accent" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1 group-hover:text-alu-accent transition-colors">Headquarters</h4>
                  <p className="text-alu-silver-dark leading-relaxed">
                    B1/2 Silver BusinessHub, Mota varacha,
                    <br />
                     Surat
                    <br />
                    India
                  </p>
                </div>
              </a>

              <a 
                href="tel:+15551234567"
                className="flex items-start gap-6 group"
              >
                <div className="w-12 h-12 bg-alu-accent/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-alu-accent/20 transition-colors">
                  <Phone className="w-6 h-6 text-alu-accent" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1 group-hover:text-alu-accent transition-colors">Phone</h4>
                  <p className="text-alu-silver-dark leading-relaxed">
                    +91 7621800722<br />
                    Mon-Fri: 8:00 AM - 6:00 PM EST
                  </p>
                </div>
              </a>

              <a 
                href="mailto:info@alucraft.com"
                className="flex items-start gap-6 group"
              >
                <div className="w-12 h-12 bg-alu-accent/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-alu-accent/20 transition-colors">
                  <Mail className="w-6 h-6 text-alu-accent" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1 group-hover:text-alu-accent transition-colors">Email</h4>
                  <p className="text-alu-silver-dark leading-relaxed">
                    info@lkd.com<br />
                    quotes@lkd.com
                  </p>
                </div>
              </a>
            </div>

            {/* Google Map Embed */}
            <div className="h-80 rounded-3xl overflow-hidden border border-white/5 shadow-lg">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2275.408450981162!2d72.88895600246552!3d21.23824316698823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDE0JzIxLjUiTiA3MsKwNTUnNTkuNyJF!5e1!3m2!1sen!2sin!4v1772185747848!5m2!1sen!2sin"
                width="1000"
                height="450" 
                style={{border:0}} 
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
               </iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-alu-blue-light p-10 rounded-3xl border border-white/5 shadow-2xl">
              <h3 className="heading-display text-2xl font-bold text-white mb-8">Send us a Message</h3>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-alu-silver mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-alu-blue border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-alu-accent focus:ring-1 focus:ring-alu-accent transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-alu-silver mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-alu-blue border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-alu-accent focus:ring-1 focus:ring-alu-accent transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-alu-silver mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-alu-blue border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-alu-accent focus:ring-1 focus:ring-alu-accent transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-alu-silver mb-2">Project Details</label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-alu-blue border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-alu-accent focus:ring-1 focus:ring-alu-accent transition-colors resize-none"
                    placeholder="Please describe your project requirements, dimensions, and preferred materials..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-alu-accent text-alu-blue font-bold rounded-xl hover:bg-sky-300 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Inquiry
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
