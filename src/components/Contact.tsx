
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-dark-300 relative text-right">
      <div className="absolute top-40 left-20 w-80 h-80 bg-neon/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-gradient">للتواصل معنا</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          إذا كنت مهتمًا بالتعاون معنا أو ترغب في مناقشة مشروعك، يمكنك التواصل معنا بسهولة
        </p>
        
        <div className="flex flex-col md:flex-row-reverse gap-8">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="glass-card rounded-xl p-6 md:p-8 h-full border-neon/20">
              <h3 className="text-2xl font-bold mb-6">معلومات التواصل</h3>
              
              <div className="space-y-6">
                <div className="flex flex-row-reverse items-start gap-4">
                  <div className="bg-neon/20 p-3 rounded-full text-neon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400 mb-1">واتساب</h4>
                    <p className="text-white">اضغط على زر الواتساب أسفل الصفحة</p>
                  </div>
                </div>
                
                <div className="flex flex-row-reverse items-start gap-4">
                  <div className="bg-neon/20 p-3 rounded-full text-neon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400 mb-1">البريد الإلكتروني</h4>
                    <a href="mailto:Alshbhh@outlook.com" className="text-white hover:text-neon">
                      Alshbhh@outlook.com
                    </a>
                  </div>
                </div>
                
                <div className="mt-8">
                  <p className="text-gray-300 mb-4">
                    نحن في Alshbh هنا لمساعدتك في كل خطوة من خطواتك التقنية!
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <form className="glass-card rounded-xl p-6 md:p-8 border-neon/20">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    الاسم
                  </label>
                  <Input id="name" className="bg-dark-100 border-white/10" dir="rtl" />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    البريد الإلكتروني
                  </label>
                  <Input id="email" className="bg-dark-100 border-white/10" dir="rtl" />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                    الموضوع
                  </label>
                  <Input id="subject" className="bg-dark-100 border-white/10" dir="rtl" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    الرسالة
                  </label>
                  <Textarea id="message" rows={5} className="bg-dark-100 border-white/10" dir="rtl" />
                </div>
                
                <Button className="w-full bg-neon text-black hover:bg-neon/90 mt-2">
                  إرسال الرسالة
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
