import { motion } from 'motion/react';
import { PenTool, Factory, HardHat, Wrench } from 'lucide-react';

const services = [
  {
    icon: <PenTool className="w-12 h-12 text-alu-accent" />,
    title: 'Design & Engineering',
    description: 'Our in-house engineering team utilizes advanced CAD software to design custom aluminum profiles and structural systems that meet exact architectural specifications and load requirements.',
  },
  {
    icon: <Factory className="w-12 h-12 text-alu-accent" />,
    title: 'Fabrication',
    description: 'State-of-the-art CNC machining centers ensure precise cutting, drilling, and milling of aluminum extrusions, delivering components with microscopic tolerances.',
  },
  {
    icon: <HardHat className="w-12 h-12 text-alu-accent" />,
    title: 'Installation',
    description: 'Certified installation crews with decades of experience guarantee that every window, door, and curtain wall is fitted perfectly, ensuring long-term performance and safety.',
  },
  {
    icon: <Wrench className="w-12 h-12 text-alu-accent" />,
    title: 'Maintenance',
    description: 'Comprehensive after-sales support and preventative maintenance programs to extend the lifespan of your aluminum installations and keep them looking pristine.',
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-alu-blue pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="heading-display text-4xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-alu-silver-dark max-w-3xl mx-auto">
            From concept to completion, we provide end-to-end aluminum solutions tailored to your project's unique demands.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-alu-blue-light p-10 rounded-3xl border border-white/5 hover:border-alu-accent/30 transition-colors group flex flex-col sm:flex-row gap-8 items-start"
            >
              <div className="p-5 bg-alu-blue rounded-2xl shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                {service.icon}
              </div>
              <div>
                <h3 className="heading-display text-2xl font-bold text-white mb-4 group-hover:text-alu-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-alu-silver-dark leading-relaxed text-lg">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
