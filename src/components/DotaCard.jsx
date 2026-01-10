import React from 'react';

const DotaCard = ({ title, description, image, icon, onClick, featured = false }) => {
  return (
    <div
      onClick={onClick}
      className={`dota-card relative rounded-lg overflow-hidden cursor-pointer bg-dota-bg-dark group ${
        featured ? 'md:col-span-2 md:row-span-2' : ''
      }`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        {image && (
          <img
            src={image}
            alt={title}
            className="card-image w-full h-full object-cover"
          />
        )}
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 h-full flex flex-col justify-end min-h-[250px]">
        {icon && (
          <div className="mb-4 text-dota-orange">
            {icon}
          </div>
        )}
        
        <h3
          className="text-2xl md:text-3xl font-bold mb-3 uppercase tracking-widest text-dota-text-white group-hover:text-dota-gold transition-colors"
          style={{ fontFamily: 'Cinzel, serif' }}
        >
          {title}
        </h3>
        
        {description && (
          <p className="text-sm md:text-base text-dota-text-light leading-relaxed">
            {description}
          </p>
        )}

        {/* Hover Border Glow */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-dota-red/50 rounded-lg transition-all pointer-events-none"></div>
      </div>
    </div>
  );
};

export default DotaCard;
