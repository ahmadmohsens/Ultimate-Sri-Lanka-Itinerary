import React from 'react';
import { 
  Calendar, 
  MapPin, 
  BedDouble, 
  Utensils, 
  Camera, 
  Route, 
  Compass, 
  Globe, 
  FileText,
  Sparkles,
  CheckCircle2,
  Palmtree,
  Heart,
  Map
} from 'lucide-react';

interface HomePageProps {
  colors: {
    green: string;
    yellow: string;
    terracotta: string;
    beige: string;
    charcoal: string;
  };
  isAtTop: boolean;
  setCurrentPage: (page: string) => void;
  scrollToTop: () => void;
  cities: { name: string; id: string }[];
}

const HomePage: React.FC<HomePageProps> = ({ colors, isAtTop, setCurrentPage, scrollToTop, cities }) => {
  const customShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.03)";

  return (
    <div className="animate-in fade-in duration-700">
      {/* --- HERO SECTION --- */}
      <section className={`grid lg:grid-cols-2 gap-12 items-center mb-16 transition-all duration-1000 ${isAtTop ? 'scale-100 opacity-100' : 'scale-[0.98] opacity-90'}`}>
        <div className="flex flex-col items-start pt-8 lg:pr-8">
          <span className="text-xs font-bold tracking-widest text-gray-500 uppercase border border-gray-200 rounded-md px-3 py-1 mb-6">
            Curated Travel Guide
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6">
            The <br/> Ultimate <br/>
            <span style={{ color: '#fa820c' }}>Sri Lanka</span> <br/>
            Itinerary.
          </h1>
          <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-md leading-relaxed">
            Your complete step-by-step guide from arrival to departure, built for ease and budget-friendly exploration.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <button 
              onClick={() => document.getElementById('planning')?.scrollIntoView({ behavior: 'smooth' })}
              style={{ backgroundColor: colors.charcoal }}
              className="text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition-all hover:scale-105 active:scale-95"
            >
              Start Planning
            </button>
            <button 
              onClick={() => setCurrentPage('route')}
              className="px-8 py-4 rounded-full font-bold border border-gray-200 hover:bg-gray-50 transition-all hover:scale-105 active:scale-95"
            >
              View Route
            </button>
          </div>
        </div>
        
        <div className="relative h-[400px] lg:h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl group">
          <img 
            src="https://images.unsplash.com/photo-1619531103472-7cc0d6479b59?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Sri Lanka Coastal Nature" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          <div className="absolute bottom-8 left-8 text-white">
            <div className="flex items-center gap-2 mb-1">
              <MapPin size={14} />
              <span className="text-xs font-bold uppercase tracking-widest">Southern Coastline</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- GUIDE SECTION (1.1 What this guide includes) --- */}
      <section id="planning" className="bg-[#FAFAFA] border border-gray-100 rounded-[2.5rem] p-8 md:p-14 mb-8">
        <span className="text-[10px] font-bold tracking-widest uppercase mb-4 block" style={{ color: colors.terracotta }}>
          Part 1. Pre-Trip Planning
        </span>
        <h2 className="text-4xl font-extrabold mb-6 tracking-tight">How to use this guide</h2>
        
        <div className="prose text-gray-600 mb-12 max-w-4xl space-y-4 text-lg leading-relaxed">
          <p>
            I put this guide together to make your trip to Sri Lanka <strong>easier and more affordable</strong>. I built this guide based on personal experience and research that took me a very long time. I traveled across Sri Lanka with my daughter, then combined my firsthand experience with the most common recommendations from dozens of videos, blogs, and planning resources to develop this itinerary and save you hours of doing the research yourself.
          </p>
          <p>
            <strong>My goal was to create a single guide to help you:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Avoid unnecessary planning stress</strong></li>
            <li><strong>Move through your journey with greater confidence</strong></li>
            <li><strong>Save money and avoid costly mistakes</strong></li>
            <li><strong>Enjoy the trip without having to constantly plan every step while you're in the middle of it</strong></li>
          </ul>
          <p>
            You should be able to use this guide as your primary travel document, from the initial planning stages all the way to your flight back home, keeping all the essential details in one place rather than scattered across various links, notes, and screenshots.
          </p>
        </div>

        <h3 className="text-3xl font-bold mb-8">1.1 What this guide includes</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {/* ROW 1 */}
          <div style={{ backgroundColor: colors.green, boxShadow: customShadow }} className="text-white rounded-[1.8rem] p-7 flex flex-col justify-between min-h-[200px] hover:-translate-y-2 transition-transform duration-300">
            <FileText size={24} className="opacity-70 mb-4" />
            <div>
              <div className="text-5xl font-bold mb-1">67</div>
              <div className="text-sm opacity-90 leading-tight font-medium">pages of detailed itinerary planning</div>
            </div>
          </div>
          <div style={{ boxShadow: customShadow }} className="bg-white rounded-[1.8rem] p-7 flex flex-col justify-between min-h-[200px] hover:-translate-y-2 transition-transform duration-300">
            <Calendar size={24} className="text-gray-400 mb-4" />
            <div>
              <div className="text-5xl font-bold mb-1 text-gray-800">12</div>
              <div className="text-sm text-gray-500 leading-tight font-medium">easy-to-follow chapters</div>
            </div>
          </div>
          <div style={{ backgroundColor: colors.terracotta, boxShadow: customShadow }} className="text-white rounded-[1.8rem] p-7 flex flex-col justify-between min-h-[200px] hover:-translate-y-2 transition-transform duration-300">
            <Route size={24} className="opacity-70 mb-4" />
            <div>
              <div className="text-5xl font-bold mb-1">2</div>
              <div className="text-sm opacity-90 leading-tight font-medium">complete Sri Lanka route options</div>
            </div>
          </div>
          <div style={{ boxShadow: customShadow }} className="bg-white rounded-[1.8rem] p-7 flex flex-col justify-between min-h-[200px] hover:-translate-y-2 transition-transform duration-300">
            <BedDouble size={24} className="text-gray-400 mb-4" />
            <div>
              <div className="text-5xl font-bold mb-1 text-gray-800">80+</div>
              <div className="text-sm text-gray-500 leading-tight font-medium">hotel picks</div>
            </div>
          </div>
          <div style={{ boxShadow: customShadow }} className="bg-white rounded-[1.8rem] p-7 flex flex-col justify-between min-h-[200px] hover:-translate-y-2 transition-transform duration-300">
            <Utensils size={24} className="text-gray-400 mb-4" />
            <div>
              <div className="text-5xl font-bold mb-1 text-gray-800">80+</div>
              <div className="text-sm text-gray-500 leading-tight font-medium">food picks</div>
            </div>
          </div>
          
          {/* ROW 2 */}
          <div style={{ boxShadow: customShadow }} className="bg-white rounded-[1.8rem] p-7 flex flex-col justify-between min-h-[200px] hover:-translate-y-2 transition-transform duration-300">
            <Camera size={24} className="text-gray-400 mb-4" />
            <div>
              <div className="text-5xl font-bold mb-1 text-gray-800">50+</div>
              <div className="text-sm text-gray-500 leading-tight font-medium">sights and activity ideas</div>
            </div>
          </div>
          <div style={{ backgroundColor: colors.charcoal, boxShadow: customShadow }} className="text-white rounded-[1.8rem] p-7 flex flex-col justify-between min-h-[200px] hover:-translate-y-2 transition-transform duration-300">
            <Sparkles size={24} className="opacity-70 mb-4" />
            <div>
              <div className="text-2xl font-extrabold mb-1 tracking-tight">START</div>
              <div className="text-sm opacity-90 leading-tight font-medium">Step-by-step guidance</div>
            </div>
          </div>
          <div style={{ backgroundColor: colors.green, boxShadow: customShadow }} className="text-white rounded-[1.8rem] p-7 flex flex-col justify-between min-h-[200px] hover:-translate-y-2 transition-transform duration-300">
            <MapPin size={24} className="opacity-70 mb-4" />
            <div>
              <div className="text-5xl font-bold mb-1">6</div>
              <div className="text-sm opacity-90 leading-tight font-medium">Detailed city executions</div>
            </div>
          </div>
          <div style={{ backgroundColor: colors.terracotta, boxShadow: customShadow }} className="text-white rounded-[1.8rem] p-7 flex flex-col justify-between min-h-[200px] hover:-translate-y-2 transition-transform duration-300">
            <Compass size={24} className="opacity-70 mb-4" />
            <div>
              <div className="text-2xl font-extrabold mb-1 tracking-tight">EASY</div>
              <div className="text-sm opacity-90 leading-tight font-medium">Getting around guide</div>
            </div>
          </div>
          <div style={{ backgroundColor: colors.charcoal, boxShadow: customShadow }} className="text-white rounded-[1.8rem] p-7 flex flex-col justify-between min-h-[200px] hover:-translate-y-2 transition-transform duration-300">
            <Map size={24} className="opacity-70 mb-4" />
            <div>
              <div className="text-2xl font-extrabold mb-1 tracking-tight">MAPS</div>
              <div className="text-sm opacity-90 leading-tight font-medium">Use Google Maps data for accurate routing</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CHAPTERS OVERVIEW --- */}
      <section className="bg-[#FAFAFA] border border-gray-100 rounded-[2.5rem] p-8 md:p-14 mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10 tracking-tight">Chapters Overview</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
             <span className="text-[10px] font-bold tracking-widest uppercase mb-6 block" style={{ color: colors.terracotta }}>
              Part 1. Pre-Trip Planning
            </span>
            <ul className="space-y-4">
              {[
                "Chapter 1. How to use this guide",
                "Chapter 2. Understanding Sri Lanka",
                "Chapter 3. Route summary",
                "Chapter 4. Key Travel Information for Sri Lanka",
                "Chapter 5. Packing and trip preparation"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium group cursor-pointer">
                  <span className="w-1.5 h-1.5 rounded-full transition-all group-hover:scale-150" style={{ backgroundColor: colors.terracotta }}></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
             <span className="text-[10px] font-bold tracking-widest uppercase mb-6 block" style={{ color: colors.green }}>
              Part 2. Arrival & The Trip By City
            </span>
            <ul className="space-y-4">
              {cities.map((city, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium group cursor-pointer" onClick={() => { setCurrentPage(city.id); scrollToTop(); }}>
                  <span className="w-1.5 h-1.5 rounded-full transition-all group-hover:scale-150" style={{ backgroundColor: colors.green }}></span>
                  Chapter {i + 6}. {city.name}
                </li>
              ))}
              <li className="flex items-center gap-3 text-gray-700 font-medium group cursor-pointer">
                  <span className="w-1.5 h-1.5 rounded-full transition-all group-hover:scale-150" style={{ backgroundColor: colors.green }}></span>
                  Chapter 12. Departure
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- 1.2 WHO THIS GUIDE IS FOR --- */}
      <section style={{ boxShadow: customShadow }} className="bg-white rounded-[2.5rem] p-8 md:p-12 mb-8 border border-gray-50">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <h3 className="text-3xl font-extrabold mb-4 tracking-tight">1.2 Who this guide is for</h3>
            <p className="text-gray-500 leading-relaxed mb-6">
              This guide is for travelers who want a clear, organized Sri Lanka route they can follow without doing endless research.
            </p>
            <div style={{ backgroundColor: colors.beige }} className="p-5 rounded-2xl border border-white/50">
              <p className="text-sm font-bold text-gray-700 italic">
                "Ideal if you want the trip planned in a way that feels simple, smooth, budget-friendly, and great value for money."
              </p>
            </div>
          </div>
          
          <div className="lg:w-2/3 grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-2">
                <div style={{ backgroundColor: colors.green }} className="p-1.5 rounded-lg text-white">
                  <Palmtree size={18} />
                </div>
                <h4 className="font-bold text-xl">Works well for</h4>
              </div>
              <ul className="space-y-3">
                {[
                  { title: "Nature lovers", desc: "Mountains, waterfalls, and scenic stops" },
                  { title: "Beach lovers", desc: "A route ending with slow coastal days" },
                  { title: "Foodies", desc: "Local cafés and everyday Sri Lankan meals" }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <CheckCircle2 size={18} style={{ color: colors.green }} className="shrink-0 mt-1" />
                    <div>
                      <span className="font-bold block text-[#292926]">{item.title}</span>
                      <span className="text-sm text-gray-500">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-2">
                <div style={{ backgroundColor: colors.terracotta }} className="p-1.5 rounded-lg text-white">
                  <Heart size={18} />
                </div>
                <h4 className="font-bold text-xl">Best for</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Couples", "Solo Travelers", "Families", 
                  "Friends", "First-timers"
                ].map((tag, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-full text-xs font-bold text-gray-600">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
