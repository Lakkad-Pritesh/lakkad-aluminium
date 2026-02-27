import { motion } from 'motion/react';
import { ArrowRight, Shield, Zap, Wrench, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Shield className="w-8 h-8 text-alu-accent" />,
    title: 'Premium Quality',
    description: 'We use only the highest grade aluminum alloys for maximum durability and strength.',
  },
  {
    icon: <Zap className="w-8 h-8 text-alu-accent" />,
    title: 'Fast Execution',
    description: 'Streamlined processes ensure your project is completed on time, every time.',
  },
  {
    icon: <Wrench className="w-8 h-8 text-alu-accent" />,
    title: 'Custom Engineering',
    description: 'Bespoke solutions tailored to your specific architectural requirements.',
  },
];

const testimonials = [
  {
    quote: "LKD delivered exceptional curtain walls for our new corporate headquarters. The precision and quality are unmatched.",
    author: "Sarah Jenkins",
    role: "Lead Architect, Skyline Designs",
  },
  {
    quote: "Their custom fabrication team solved a complex structural issue we had. Professional, timely, and incredibly skilled.",
    author: "Michael Chen",
    role: "Project Manager, BuildCorp",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-alu-blue">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-alu-blue/80 mix-blend-multiply z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-alu-blue/50 to-alu-blue z-10" />
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop"
            alt="Aluminum Industry"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heading-display text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Strength in <span className="text-transparent bg-clip-text bg-gradient-to-r from-alu-accent to-blue-400">Every Frame</span>
            </h1>
            <p className="text-xl md:text-2xl text-alu-silver mb-10 max-w-3xl mx-auto font-light">
              Precision-engineered aluminum solutions for modern architecture and industrial applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-alu-accent text-alu-blue font-bold rounded-md hover:bg-sky-300 transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                Get a Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/products"
                className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-md hover:bg-white/5 transition-all flex items-center justify-center gap-2"
              >
                Explore Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-display text-3xl md:text-4xl font-bold text-white mb-6">
                Pioneering Aluminum Excellence Since 1998
              </h2>
              <p className="text-alu-silver-dark text-lg leading-relaxed mb-8">
                At LKD Industries, we blend cutting-edge technology with decades of metallurgical expertise. We don't just manufacture aluminum; we engineer structural integrity and aesthetic brilliance into every piece.
              </p>
              <ul className="space-y-4">
                {['ISO 9001:2015 Certified', 'Sustainable Manufacturing Practices', 'Global Distribution Network'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-alu-silver">
                    <CheckCircle2 className="w-6 h-6 text-alu-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 relative">
                <div className="absolute inset-0 bg-alu-accent/10 mix-blend-overlay z-10" />
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
                  alt="Manufacturing Facility"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-alu-blue-light p-8 rounded-xl border border-white/10 shadow-2xl hidden md:block">
                <p className="text-4xl font-bold text-alu-accent mb-2">25+</p>
                <p className="text-sm text-alu-silver-dark uppercase tracking-wider">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Services */}
      <section className="py-24 bg-alu-blue-light border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-display text-3xl md:text-4xl font-bold text-white mb-4">Why Choose LKD?</h2>
            <p className="text-alu-silver-dark max-w-2xl mx-auto">We deliver uncompromising quality and innovative solutions across all our service offerings.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-alu-blue p-8 rounded-2xl border border-white/5 hover:border-alu-accent/30 transition-colors group"
              >
                <div className="mb-6 p-4 bg-alu-blue-light rounded-xl inline-block group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-alu-silver-dark leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-display text-3xl md:text-4xl font-bold text-white mb-16 text-center">Trusted by Industry Leaders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-alu-blue-light p-10 rounded-2xl border border-white/5 relative"
              >
                <div className="text-6xl text-alu-accent/20 absolute top-6 left-6 font-serif">"</div>
                <p className="text-lg text-alu-silver relative z-10 mb-8 italic">
                  {t.quote}
                </p>
                <div>
                  <p className="font-bold text-white">{t.author}</p>
                  <p className="text-sm text-alu-accent">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
