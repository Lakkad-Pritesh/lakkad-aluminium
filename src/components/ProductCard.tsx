import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  title: string;
  description: string;
  imageUrl: string;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, imageUrl, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-alu-blue-light rounded-2xl overflow-hidden border border-white/5 hover:border-alu-accent/30 transition-all duration-300 shadow-lg hover:shadow-alu-accent/10"
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-alu-blue-light to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="p-8 relative z-20 -mt-12">
        <div className="bg-alu-blue-light p-6 rounded-xl border border-white/10 shadow-xl group-hover:border-alu-accent/20 transition-colors duration-300">
          <h3 className="heading-display text-xl font-bold text-white mb-3 group-hover:text-alu-accent transition-colors">
            {title}
          </h3>
          <p className="text-alu-silver-dark text-sm leading-relaxed mb-6">
            {description}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-alu-accent hover:text-white transition-colors group/btn"
          >
            Request Quote
            <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductCard;
