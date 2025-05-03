
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center text-right bg-gradient-to-b from-dark-300 to-dark-200 relative overflow-hidden">
      {/* Abstract decoration */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-neon/20 rounded-full blur-[100px]" />
      <div className="absolute -bottom-40 -right-20 w-96 h-96 bg-neon/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 py-24 relative z-10 flex flex-col md:flex-row-reverse items-center">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <div className="w-64 h-64 mx-auto relative animate-float">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon/30 to-emerald-400/30 blur-xl"></div>
            <div className="absolute inset-2 bg-dark-300 rounded-full flex items-center justify-center">
              <span className="text-7xl text-gradient font-bold">𝘼𝙇</span>
            </div>
            <div className="absolute -bottom-4 -right-4 w-48 h-48 rounded-full bg-gradient-to-r from-neon/30 to-emerald-400/30 blur-xl"></div>
            <div className="absolute -bottom-2 -right-2 w-48 h-48 bg-dark-300 rounded-full flex items-center justify-center">
              <span className="text-7xl text-gradient font-bold">𝙎𝙃𝘽𝙃</span>
            </div>
          </div>
        </div>
        
        <div className="md:w-1/2 text-center md:text-right">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gradient glow">𝘼𝙇𝙎𝙃𝘽𝙃</span> <br />
            <span className="text-white">للحلول التقنية المبتكرة</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-8">
            نحن شركة رائدة في مجال تطوير المواقع الإلكترونية، المتاجر الإلكترونية، الألعاب والتطبيقات، وغيرها من الحلول التقنية المبتكرة.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-4">
            <Button className="bg-neon text-black hover:bg-neon/90 font-bold">اكتشف خدماتنا</Button>
            <Button variant="outline" className="border-neon text-neon hover:bg-neon/10">تواصل معنا</Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-gray-400 mb-2 text-sm">اعرف المزيد</span>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-neon rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
