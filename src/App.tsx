import React, { useState, useEffect } from 'react';
import { 
  Plane,
  ChevronDown,
  ArrowUp,
  MapPin,
  X,
  Menu,
  Palmtree
} from 'lucide-react';
import HomePage from './components/HomePage';
import HomePageAr from './components/HomePageAr';
import PreTripPage from './components/PreTripPage';
import PreTripPageAr from './components/PreTripPageAr';
import RoutePage from './components/RoutePage';
import RoutePageAr from './components/RoutePageAr';
import ColomboPage from './components/ColomboPage';
import ColomboPageAr from './components/ColomboPageAr';
import SigiriyaPage from './components/SigiriyaPage';
import SigiriyaPageAr from './components/SigiriyaPageAr';
import KandyPage from './components/KandyPage';
import KandyPageAr from './components/KandyPageAr';
import EllaPage from './components/EllaPage';
import EllaPageAr from './components/EllaPageAr';
import HiriketiyaPage from './components/HiriketiyaPage';
import HiriketiyaPageAr from './components/HiriketiyaPageAr';
import WeligamaPage from './components/WeligamaPage';
import WeligamaPageAr from './components/WeligamaPageAr';
import { 
  cities, 
  colomboMapLocations, 
  sigiriyaMapLocations,
  kandyMapLocations,
  ellaMapLocations,
  hiriketiyaMapLocations,
  weligamaMapLocations
} from './data';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [language, setLanguage] = useState<'en' | 'ar'>('en');
  const [isVisible, setIsVisible] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollDir, setScrollDir] = useState("up");
  const [activeMapQuery, setActiveMapQuery] = useState<string | null>(null);

  const colors = {
    green: '#3B594F',
    yellow: '#B59C3B',
    terracotta: '#DE7A59',
    beige: '#E0D4C4',
    charcoal: '#292926'
  };

  const openMap = (urlOrQuery: string) => {
    if (!urlOrQuery) return;
    if (urlOrQuery.includes('query=')) {
      setActiveMapQuery(urlOrQuery.split('query=')[1]);
    } else {
      setActiveMapQuery(urlOrQuery + ' Sri Lanka');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      if (currentScrollY > lastScrollY) {
        setScrollDir("down");
      } else {
        setScrollDir("up");
      }
      lastScrollY = currentScrollY;
      setIsVisible(currentScrollY > 300);
      setIsAtTop(currentScrollY < 50);
      if (currentScrollY > 50) setIsMobileMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isAr = language === 'ar';

  return (
    <div className="min-h-screen bg-white text-[#292926] font-sans selection:bg-[#B59C3B] selection:text-white pb-32" dir={isAr ? 'rtl' : 'ltr'}>
      
      {/* --- STICKY TOP NAVIGATION --- */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 border-b ${
          isAtTop 
          ? 'bg-white/0 border-transparent py-6' 
          : 'bg-[#F9F8F6]/95 backdrop-blur-md border-gray-200 py-3 shadow-sm'
        } ${isMobileMenuOpen ? 'bg-white border-gray-200' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-3 font-bold text-xl tracking-tight cursor-pointer" onClick={() => { setCurrentPage('home'); scrollToTop(); setIsMobileMenuOpen(false); }}>
            <div className="text-white p-1.5 rounded-lg" style={{ backgroundColor: colors.terracotta }}>
              <Plane size={18} fill="currentColor" className={`transform ${isAr ? '-rotate-45' : 'rotate-45'}`} />
            </div>
            {isAr ? 'سريلانكا مع محسن' : 'Sri Lanka by Mohsen'}
          </div>
          
          <div className="hidden md:flex items-center gap-1 border border-gray-100 bg-white/50 rounded-full p-1 text-[11px] font-black uppercase tracking-wider relative">
            <button 
              onClick={() => setCurrentPage('home')} 
              className={`px-5 py-2 rounded-full transition-all text-[15px] ${currentPage === 'home' ? 'bg-[#292926] text-white shadow-md' : 'text-gray-400 hover:text-[#292926]'}`}
            >
              {isAr ? 'ابدأ هنا' : 'Start Here'}
            </button>
            <button 
              onClick={() => setCurrentPage('route')} 
              className={`px-5 py-2 rounded-full transition-all text-[15px] ${currentPage === 'route' ? 'bg-[#292926] text-white shadow-md' : 'text-gray-400 hover:text-[#292926]'}`}
            >
              {isAr ? 'المسار' : 'The Route'}
            </button>
            <button 
              onClick={() => setCurrentPage('pretrip')} 
              className={`px-5 py-2 rounded-full transition-all text-[15px] ${currentPage === 'pretrip' ? 'bg-[#292926] text-white shadow-md' : 'text-gray-400 hover:text-[#292926]'}`}
            >
              {isAr ? 'قبل الرحلة' : 'Pre-Trip'}
            </button>
            
            {/* Cities Dropdown */}
            <div className="relative group">
              <button className={`px-5 py-2 rounded-full transition-all flex items-center gap-1 cursor-pointer text-[15px] ${cities.some(c => c.id === currentPage) ? 'bg-[#292926] text-white shadow-md' : 'text-gray-400 hover:text-[#292926]'}`}>
                {isAr ? 'المدن' : 'Cities'} <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
              </button>
              <div className={`absolute top-full mt-1 ${isAr ? 'left-0' : 'right-0'} w-48 bg-white border border-gray-100 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col p-2 z-[150]`}>
                {cities.map((city, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => { setCurrentPage(city.id); scrollToTop(); }}
                    className={`text-${isAr ? 'right' : 'left'} px-4 py-2.5 text-[11px] font-black uppercase tracking-wider text-gray-600 hover:bg-gray-50 hover:text-[#3B594F] rounded-xl transition-colors`}
                  >
                    {isAr ? city.nameAr || city.name : city.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 md:gap-3">
            <div className="flex items-center gap-2 text-[13px] font-black border border-gray-100 bg-white/50 rounded-full px-3 md:px-4 py-2 uppercase tracking-widest">
              <button onClick={() => { setLanguage('en'); setIsMobileMenuOpen(false); }} className={`transition-colors ${!isAr ? 'text-[#292926]' : 'text-gray-300 hover:text-gray-500'}`}>ENG</button>
              <button onClick={() => { setLanguage('ar'); setIsMobileMenuOpen(false); }} className={`transition-colors ${isAr ? 'text-[#292926]' : 'text-gray-300 hover:text-gray-500'}`}>عربي</button>
            </div>

            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center bg-white border border-gray-100 rounded-full text-[#292926] shadow-sm"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="p-6 flex flex-col gap-4">
            <button 
              onClick={() => { setCurrentPage('home'); scrollToTop(); setIsMobileMenuOpen(false); }}
              className={`flex items-center justify-between p-4 rounded-2xl transition-all ${currentPage === 'home' ? 'bg-[#292926] text-white' : 'bg-gray-50 text-gray-700'}`}
            >
              <span className="font-bold uppercase tracking-widest text-sm">{isAr ? 'ابدأ هنا' : 'Start Here'}</span>
            </button>
            <button 
              onClick={() => { setCurrentPage('route'); scrollToTop(); setIsMobileMenuOpen(false); }}
              className={`flex items-center justify-between p-4 rounded-2xl transition-all ${currentPage === 'route' ? 'bg-[#292926] text-white' : 'bg-gray-50 text-gray-700'}`}
            >
              <span className="font-bold uppercase tracking-widest text-sm">{isAr ? 'المسار' : 'The Route'}</span>
            </button>
            <button 
              onClick={() => { setCurrentPage('pretrip'); scrollToTop(); setIsMobileMenuOpen(false); }}
              className={`flex items-center justify-between p-4 rounded-2xl transition-all ${currentPage === 'pretrip' ? 'bg-[#292926] text-white' : 'bg-gray-50 text-gray-700'}`}
            >
              <span className="font-bold uppercase tracking-widest text-sm">{isAr ? 'قبل الرحلة' : 'Pre-Trip'}</span>
            </button>
            
            <div className="mt-2">
              <span className="text-[14px] font-black uppercase tracking-[0.3em] text-gray-400 mb-4 block px-2">{isAr ? 'المدن' : 'Cities'}</span>
              <div className="grid grid-cols-2 gap-3">
                {cities.map(city => (
                  <button 
                    key={city.id}
                    onClick={() => { setCurrentPage(city.id); scrollToTop(); setIsMobileMenuOpen(false); }}
                    className={`p-3 rounded-xl text-xs font-bold uppercase tracking-wider text-center border transition-all ${currentPage === city.id ? 'bg-[#292926] text-white border-[#292926]' : 'bg-white text-gray-600 border-gray-100'}`}
                  >
                    {isAr ? city.nameAr || city.name : city.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className={`max-w-7xl mx-auto px-4 md:px-12 mt-24 transition-all duration-1000 transform ${isAtTop ? 'translate-y-0 opacity-100' : scrollDir === 'up' ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-95'}`}>
        
        {currentPage === 'home' && (isAr ? <HomePageAr colors={colors} isAtTop={isAtTop} setCurrentPage={setCurrentPage} scrollToTop={scrollToTop} cities={cities} /> : <HomePage colors={colors} isAtTop={isAtTop} setCurrentPage={setCurrentPage} scrollToTop={scrollToTop} cities={cities} />)}
        {currentPage === 'pretrip' && (isAr ? <PreTripPageAr colors={colors} /> : <PreTripPage colors={colors} />)}
        {currentPage === 'route' && (isAr ? <RoutePageAr colors={colors} /> : <RoutePage colors={colors} />)}
        {currentPage === 'colombo' && (isAr ? <ColomboPageAr colors={colors} openMap={openMap} colomboMapLocations={colomboMapLocations} /> : <ColomboPage colors={colors} openMap={openMap} colomboMapLocations={colomboMapLocations} />)}
        {currentPage === 'sigiriya' && (language === 'en' ? <SigiriyaPage colors={colors} openMap={openMap} sigiriyaMapLocations={sigiriyaMapLocations} /> : <SigiriyaPageAr colors={colors} openMap={openMap} sigiriyaMapLocations={sigiriyaMapLocations} />)}
        {currentPage === 'kandy' && (language === 'en' ? <KandyPage colors={colors} openMap={openMap} kandyMapLocations={kandyMapLocations} /> : <KandyPageAr colors={colors} openMap={openMap} kandyMapLocations={kandyMapLocations} />)}
        {currentPage === 'ella' && (language === 'en' ? <EllaPage colors={colors} openMap={openMap} ellaMapLocations={ellaMapLocations} /> : <EllaPageAr colors={colors} openMap={openMap} ellaMapLocations={ellaMapLocations} />)}
        {currentPage === 'hiriketiya' && (language === 'en' ? <HiriketiyaPage colors={colors} openMap={openMap} hiriketiyaMapLocations={hiriketiyaMapLocations} /> : <HiriketiyaPageAr colors={colors} openMap={openMap} hiriketiyaMapLocations={hiriketiyaMapLocations} />)}
        {currentPage === 'weligama' && (language === 'en' ? <WeligamaPage colors={colors} openMap={openMap} weligamaMapLocations={weligamaMapLocations} /> : <WeligamaPageAr colors={colors} openMap={openMap} weligamaMapLocations={weligamaMapLocations} />)}

        {/* --- FOOTER --- */}
        <footer className="border-t border-gray-200 pt-10 pb-20 mt-12">
          <div className="flex flex-col md:flex-row justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <h4 className="text-base font-black uppercase tracking-widest mb-4">{isAr ? 'إخلاء مسؤولية سريع' : 'Quick disclaimer'}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {isAr ? 'الأسعار ممكن تتغير حسب الموسم، أسعار الصرف، والاختيارات. مقدرش أضمن كل تفصيلة، بس الخطة العامة دي قوية ومتجربة شخصياً.' : 'Prices can change depending on season, exchange rates, and choices. I cannot guarantee every detail, but this general plan is solid and personally tested.'}
              </p>
            </div>
            <div>
              <button 
                onClick={scrollToTop}
                className="flex items-center gap-2 text-[14px] font-black uppercase tracking-widest text-gray-400 hover:text-[#292926] transition-all hover:-translate-y-1"
              >
                {isAr ? 'الرجوع لأعلى' : 'Back to top'} <ArrowUp size={14} />
              </button>
            </div>
          </div>
          <div className="text-[14px] text-gray-400 font-black uppercase tracking-[0.2em]">
            {isAr ? '© 2026 لانكا روت.' : '© 2026 LankaRoute.'}
          </div>
        </footer>

      </main>

      {/* --- FLOATING NAVIGATION BAR --- */}
      <div className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-90'}`}>
        <div style={{ backgroundColor: colors.charcoal }} className="p-1.5 rounded-full shadow-2xl flex items-center gap-1 border border-white/10 overflow-x-auto no-scrollbar max-w-[95vw]">
          {cities.map((city, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrentPage(city.id)}
              className={`whitespace-nowrap px-5 py-2.5 rounded-full text-white text-[14px] font-black uppercase tracking-widest hover:bg-white/10 transition-all active:scale-95 ${currentPage === city.id ? 'bg-white/20' : ''}`}
            >
              {isAr ? city.nameAr || city.name : city.name}
            </button>
          ))}
          <div className="w-[1px] h-6 bg-white/20 mx-1 shrink-0" />
          <button 
            onClick={scrollToTop}
            style={{ backgroundColor: colors.terracotta }} 
            className="p-2.5 rounded-full text-white shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-90 shrink-0"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      {/* --- MAP MODAL --- */}
      {activeMapQuery && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-[#292926]/80 backdrop-blur-sm" onClick={() => setActiveMapQuery(null)}>
          <div className="bg-white rounded-[2rem] w-full max-w-5xl h-[85vh] flex flex-col overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200 border border-gray-100" onClick={e => e.stopPropagation()}>
            <div className="p-4 md:p-6 border-b border-gray-100 flex justify-between items-center bg-white shadow-sm z-10">
              <h3 className="font-extrabold text-xl flex items-center gap-2 text-[#292926]"><MapPin className="text-blue-600" /> {isAr ? 'خريطة الموقع' : 'Location Map'}</h3>
              <button onClick={() => setActiveMapQuery(null)} className="w-10 h-10 flex items-center justify-center bg-gray-50 hover:bg-gray-100 text-gray-500 rounded-full transition-colors"><X size={20}/></button>
            </div>
            <div className="flex-grow w-full relative bg-gray-100">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                src={`https://maps.google.com/maps?q=${activeMapQuery}&output=embed`}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-in-from-right {
          from { transform: translateX(20px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-in {
          animation-fill-mode: forwards;
        }
      `}} />

    </div>
  );
}
