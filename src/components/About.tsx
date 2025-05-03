
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark-200 relative text-right">
      <div className="absolute top-40 right-20 w-80 h-80 bg-neon/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-gradient">من نحن</span>
        </h2>
        
        <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
          <div className="md:w-1/2">
            <div className="glass-card rounded-xl p-6 md:p-8 border-neon/30">
              <h3 className="text-2xl font-bold mb-4 text-gradient">شركة Alshbh</h3>
              <p className="text-gray-300 mb-4">
                نحن شركة رائدة في مجال تطوير المواقع الإلكترونية، المتاجر الإلكترونية، الألعاب والتطبيقات، 
                وغيرها من الحلول التقنية المبتكرة التي تلبي احتياجات عملائنا في العصر الرقمي.
              </p>
              <p className="text-gray-300">
                تأسست شركتنا عام 2024 بهدف أن نكون في طليعة الشركات التقنية في المنطقة. نسعى دائمًا لتحقيق التميز 
                في كل مشروع نعمل عليه ونقدم حلولًا مبتكرة تحقّق النجاح المستدام لعملائنا.
              </p>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="glass-card rounded-xl p-6 md:p-8 relative overflow-hidden border-neon/30">
              <div className="absolute top-0 right-0 w-40 h-40 bg-neon/10 rounded-full blur-3xl -z-10"></div>
              
              <h3 className="text-2xl font-bold mb-4 text-gradient">محمد عبد العظيم</h3>
              <p className="text-sm text-neon mb-4">المدير التنفيذي لشركة Alshbh</p>
              
              <p className="text-gray-300 mb-4">
                متخصص في تطوير المواقع الإلكترونية وتصميم المتاجر الإلكترونية الحديثة التي تقدم تجربة مستخدم استثنائية. 
                بالإضافة إلى ذلك، أتمتع بخبرة واسعة في برمجة الألعاب وتطوير التطبيقات بأنواعها، وأتطلع دائمًا لتحويل الأفكار 
                إلى حلول تقنية قابلة للتنفيذ.
              </p>
              
              <p className="text-gray-300">
                مهنتي تعتمد على التفاعل مع أحدث التقنيات وتطبيق أفضل الممارسات لتوفير حلول مبتكرة لعملائنا. أحب تحويل التحديات 
                التقنية إلى فرص للابتكار، وأؤمن بأن التكنولوجيا يمكن أن تحدث فرقًا كبيرًا في حياة الأفراد والشركات.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
