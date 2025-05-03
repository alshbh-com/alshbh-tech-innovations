
import React from 'react';
import { Button } from '@/components/ui/button';

const FeaturedProject = () => {
  return (
    <section id="projects" className="py-20 bg-dark-200 relative overflow-hidden">
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-neon/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 text-right">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-gradient">الموقع المتصدر</span>
        </h2>
        
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-neon/30 to-emerald-400/30 transform rotate-3 rounded-lg blur-sm"></div>
              <div className="relative bg-dark-100 border border-neon/20 rounded-lg p-2 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="bg-dark-300 rounded-md p-2 flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="mt-2 h-64 bg-gradient-to-b from-dark-200 to-dark-100 rounded-md flex items-center justify-center">
                  <h3 className="text-4xl sm:text-5xl font-bold text-gradient">elsharqawy.com</h3>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-8 md:mt-0">
            <h3 className="text-2xl font-bold mb-4">موقع الشرقاوي</h3>
            <p className="text-gray-300 mb-6">
              نحن فخورون بتطوير elsharqawy.com، الموقع الذي أصبح الأول في محركات البحث بفضل خدماتنا الاحترافية 
              والتصميم المتميز. إنه مثال على جودة العمل الذي نقدمه وكيف نساعد العملاء في الوصول إلى أهدافهم التقنية.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-end mb-8">
              <span className="px-3 py-1 bg-dark-100 rounded-full text-neon text-xs border border-neon/30">تصميم متجاوب</span>
              <span className="px-3 py-1 bg-dark-100 rounded-full text-neon text-xs border border-neon/30">تحسين محركات البحث</span>
              <span className="px-3 py-1 bg-dark-100 rounded-full text-neon text-xs border border-neon/30">تجربة مستخدم متميزة</span>
              <span className="px-3 py-1 bg-dark-100 rounded-full text-neon text-xs border border-neon/30">سرعة تحميل عالية</span>
            </div>
            
            <Button className="bg-neon text-black hover:bg-neon/90" asChild>
              <a href="https://elsharqawy.com" target="_blank" rel="noopener noreferrer">
                زيارة الموقع
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
