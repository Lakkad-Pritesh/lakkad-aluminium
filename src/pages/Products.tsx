import React from 'react';
import { motion } from 'motion/react';
import ProductCard from '../components/ProductCard';

const products = [
  {
    title: 'Aluminum Windows',
    description: 'High-performance thermal break windows offering superior insulation, noise reduction, and sleek modern aesthetics for residential and commercial spaces.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Sliding Doors',
    description: 'Smooth-gliding, heavy-duty aluminum sliding doors designed for maximum natural light and seamless indoor-outdoor transitions.',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Curtain Walls',
    description: 'Structural glass and aluminum facade systems engineered to resist wind and seismic loads while providing stunning architectural exteriors.',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Aluminum Sheets',
    description: 'Premium grade aluminum sheets available in various thicknesses and finishes, perfect for industrial manufacturing and cladding.',
    imageUrl: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Custom Fabrication',
    description: 'Bespoke aluminum components precision-machined to your exact specifications using state-of-the-art CNC technology.',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
  },
];

export default function Products() {
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
            Our Products
          </h1>
          <p className="text-xl text-alu-silver-dark max-w-3xl mx-auto">
            Engineered for excellence. Discover our comprehensive range of premium aluminum solutions designed for durability and style.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={product.title}
              title={product.title}
              description={product.description}
              imageUrl={product.imageUrl}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
