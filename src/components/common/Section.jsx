import React from 'react';

const Section = ({ title, description, children, className = '' }) => {
  return (
    <section className={`py-12 ${className}`}>
      {(title || description) && (
        <div className="mb-8 text-center">
          {title && <h2 className="text-3xl font-bold mb-4">{title}</h2>}
          {description && <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>}
        </div>
      )}
      {children}
    </section>
  );
};

export default Section;