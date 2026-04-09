import React from 'react';
import { ArrowRight } from 'lucide-react';

interface NextStepCardProps {
  title: string;
  description: string;
  nextPage: string;
  buttonText: string;
  setCurrentPage: (page: string) => void;
  scrollToTop: () => void;
  colors: {
    terracotta: string;
    charcoal: string;
  };
  isAr?: boolean;
}

const NextStepCard: React.FC<NextStepCardProps> = ({ 
  title, 
  description, 
  nextPage, 
  buttonText, 
  setCurrentPage, 
  scrollToTop,
  colors,
  isAr = false
}) => {
  return (
    <section className="mt-16 mb-8">
      <div className="bg-[#FAFAFA] border border-gray-100 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
        <div className={`flex-1 ${isAr ? 'text-right' : 'text-left'}`}>
          <span className="text-[14px] font-bold tracking-widest uppercase mb-3 block text-gray-400">
            {isAr ? 'الخطوة الجاية' : 'Next Step'}
          </span>
          <h3 className="text-3xl font-extrabold mb-4 tracking-tight">{title}</h3>
          <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
            {description}
          </p>
        </div>
        <button 
          onClick={() => { setCurrentPage(nextPage); scrollToTop(); }}
          style={{ backgroundColor: colors.terracotta }}
          className="text-white px-10 py-5 rounded-full font-bold text-lg hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-lg flex items-center gap-3 shrink-0"
        >
          {buttonText}
          <ArrowRight size={20} className={isAr ? 'rotate-180' : ''} />
        </button>
      </div>
    </section>
  );
};

export default NextStepCard;
