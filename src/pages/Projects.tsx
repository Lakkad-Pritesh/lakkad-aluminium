import { motion } from 'motion/react';

const projects = [
  {
    id: 1,
    title: 'Skyline Corporate Center',
    category: 'Curtain Wall',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Oceanview Residences',
    category: 'Sliding Doors & Windows',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'TechHub Innovation Lab',
    category: 'Custom Fabrication',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Metro Transit Station',
    category: 'Aluminum Sheets & Cladding',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Grand Hotel Atrium',
    category: 'Structural Glazing',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Eco-Friendly Office Park',
    category: 'Thermal Break Windows',
    imageUrl: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=800&auto=format&fit=crop',
  },
];

export default function Projects() {
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
            Featured Projects
          </h1>
          <p className="text-xl text-alu-silver-dark max-w-3xl mx-auto">
            A showcase of our engineering prowess and commitment to architectural excellence across global developments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-alu-blue via-alu-blue/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-alu-accent text-sm font-semibold tracking-wider uppercase mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {project.category}
                </span>
                <h3 className="heading-display text-2xl font-bold text-white">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
