
import React from 'react';
import { MessageSquare } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/+201204486263" 
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
    >
      <MessageSquare size={28} />
    </a>
  );
};

export default WhatsAppButton;
