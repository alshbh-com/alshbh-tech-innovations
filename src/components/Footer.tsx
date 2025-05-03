
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-100 border-t border-white/10 py-12 text-center">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-4">
          <div className="h-10 w-10 overflow-hidden rounded-full mr-2 border border-neon/30">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=64&h=64" 
              alt="Tech Logo" 
              className="h-full w-full object-cover"
            />
          </div>
          <h3 className="text-2xl font-bold text-gradient">Alshbh</h3>
        </div>
        
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          شركة رائدة في مجال تطوير المواقع الإلكترونية وتطوير التطبيقات والألعاب
        </p>
        
        <nav className="flex justify-center space-x-8 mb-8">
          <a href="#about" className="text-gray-400 hover:text-neon transition-colors">من نحن</a>
          <a href="#services" className="text-gray-400 hover:text-neon transition-colors">خدماتنا</a>
          <a href="#projects" className="text-gray-400 hover:text-neon transition-colors">مشاريعنا</a>
          <a href="#contact" className="text-gray-400 hover:text-neon transition-colors">تواصل معنا</a>
        </nav>
        
        <div className="border-t border-white/10 pt-8 text-sm text-gray-500">
          <p>© {currentYear} Alshbh. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
