
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ServiceCard = ({ 
  title, 
  description, 
  icon 
}: { 
  title: string;
  description: string;
  icon: React.ReactNode;
}) => {
  return (
    <Card className="bg-dark-100 border border-white/10 card-hover text-right">
      <CardContent className="p-6">
        <div className="mb-4 text-neon flex justify-end">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </CardContent>
    </Card>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-dark-300 text-right">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-gradient">خدماتنا</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          نقدم مجموعة متكاملة من الخدمات التقنية المتميزة لمساعدة عملائنا على النجاح في العالم الرقمي
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard 
            title="تطوير مواقع الويب"
            description="نطور مواقع ويب متميزة باستخدام أحدث الأدوات والتقنيات لتحقيق تجربة فريدة للمستخدم."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
              </svg>
            }
          />
          <ServiceCard 
            title="المتاجر الإلكترونية"
            description="إنشاء متاجر إلكترونية تنافسية تتيح للعملاء التفاعل بسهولة وسرعة وتحقق المبيعات."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="8" cy="21" r="1"></circle>
                <circle cx="19" cy="21" r="1"></circle>
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
              </svg>
            }
          />
          <ServiceCard 
            title="تطوير الألعاب"
            description="تصميم وتطوير الألعاب التي تتسم بالإبداع والفاعلية لمختلف المنصات وبأحدث التقنيات."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            }
          />
          <ServiceCard 
            title="حلول تقنية مبتكرة"
            description="نقدم حلول تقنية مبتكرة تواكب احتياجات السوق والعملاء في كافة المجالات التقنية."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
