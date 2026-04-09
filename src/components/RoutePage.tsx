import React from 'react';
import { 
  Sun,
  Info,
  CheckCircle2,
  CalendarDays,
  Check,
  MapPin,
  AlertCircle,
  Plane,
  Wallet,
  Car,
  Train
} from 'lucide-react';

import NextStepCard from './NextStepCard';

interface RoutePageProps {
  colors: {
    green: string;
    yellow: string;
    terracotta: string;
    beige: string;
    charcoal: string;
  };
  setCurrentPage: (page: string) => void;
  scrollToTop: () => void;
}

const RoutePage: React.FC<RoutePageProps> = ({ colors, setCurrentPage, scrollToTop }) => {
  const customShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.03)";

  return (
    <div className="animate-in slide-in-from-right duration-700">
      <section style={{ boxShadow: customShadow }} className="bg-white border border-gray-50 rounded-[2.5rem] overflow-hidden mb-8 min-h-[80vh]">
        
        {/* Chapter Image Banner */}
        <div className="relative h-[450px] w-full">
          <img 
            src="https://images.unsplash.com/photo-1649856092355-eee498b1d0f2?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Sigiriya Countryside View" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#292926]/90 via-[#292926]/30 to-transparent"></div>
          <div className="absolute bottom-12 left-12 md:bottom-16 md:left-14 text-white">
            <span className="text-[14px] font-bold tracking-[0.4em] uppercase mb-4 block text-white/90">
              Chapter 2
            </span>
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none">
              Understanding <br/>Sri Lanka
            </h2>
          </div>
        </div>

        {/* Chapter Content Area (Horizontal Layout) */}
        <div className="p-8 md:p-14">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-12">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
                <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.yellow }}>2.1</span> 
                What Sri Lanka is like
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                From my experience, Sri Lanka is one of those trips that feels easy to enjoy because so much variety fits into one small country. What I really liked about it is that it feels budget-friendly, easygoing, and welcoming, with kind people, good food, beaches, tea hills, and nature all fitting into one trip without complicated planning.
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
                <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.yellow }}>2.2</span> 
                Best time to travel
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Sri Lanka does not have one single best season for the whole country, so the weather depends on which side of the island you are focusing on. This matters because season affects beach quality, sea conditions, visibility, and road comfort more than just temperature.
              </p>
            </div>
          </div>

          <div className="bg-[#FAFAFA] border border-gray-100 rounded-[2.5rem] p-8 md:p-12 w-full">
            <h4 className="text-xl font-extrabold mb-10 flex items-center gap-3">
              <Sun size={24} className="text-amber-500" />
              Weather across the year
            </h4>
            
            <div className="grid md:grid-cols-3 gap-10">
              {/* South & West */}
              <div className="relative pl-10 border-l-2 border-gray-200">
                <div style={{ backgroundColor: colors.green }} className="absolute -left-[11px] top-0 w-5 h-5 rounded-full border-4 border-[#FAFAFA] shadow-md"></div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                  <span className="font-extrabold text-xl">South and West</span>
                  <span className="px-3 py-1 bg-green-50 text-green-700 text-[14px] font-black rounded-full uppercase tracking-widest border border-green-100">Best Season</span>
                </div>
                <div className="text-gray-400 font-bold text-base mb-4 italic">December — April</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-white border border-gray-200 text-[14px] font-bold text-gray-500 rounded-lg uppercase tracking-wider">Calm Seas</span>
                  <span className="px-3 py-1.5 bg-white border border-gray-200 text-[14px] font-bold text-gray-500 rounded-lg uppercase tracking-wider">Blue Skies</span>
                </div>
              </div>

              {/* North & East */}
              <div className="relative pl-10 border-l-2 border-gray-200">
                <div style={{ backgroundColor: colors.terracotta }} className="absolute -left-[11px] top-0 w-5 h-5 rounded-full border-4 border-[#FAFAFA] shadow-md"></div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                  <span className="font-extrabold text-xl">North and East</span>
                  <span className="px-3 py-1 bg-orange-50 text-orange-700 text-[14px] font-black rounded-full uppercase tracking-widest border border-orange-100">Strong Season</span>
                </div>
                <div className="text-gray-400 font-bold text-base mb-4 italic">May — September</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-white border border-gray-200 text-[14px] font-bold text-gray-500 rounded-lg uppercase tracking-wider">Surfing East</span>
                  <span className="px-3 py-1.5 bg-white border border-gray-200 text-[14px] font-bold text-gray-500 rounded-lg uppercase tracking-wider">Dry Weather</span>
                </div>
              </div>

              {/* Mixed */}
              <div className="relative pl-10 border-l-2 border-gray-200">
                <div style={{ backgroundColor: colors.yellow }} className="absolute -left-[11px] top-0 w-5 h-5 rounded-full border-4 border-[#FAFAFA] shadow-md"></div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                  <span className="font-extrabold text-xl">Inter-monsoon</span>
                  <span className="px-3 py-1 bg-yellow-50 text-yellow-700 text-[14px] font-black rounded-full uppercase tracking-widest border border-yellow-100">Transition</span>
                </div>
                <div className="text-gray-400 font-bold text-base mb-4 italic">October — November</div>
                <div className="text-base text-gray-500 font-medium">More mixed and less predictable across the country</div>
              </div>
            </div>

            <div style={{ backgroundColor: colors.beige + '60' }} className="mt-12 p-6 rounded-3xl flex gap-5 items-start border border-white">
              <div style={{ backgroundColor: colors.terracotta }} className="p-3 rounded-xl text-white shrink-0">
                <Info size={20} />
              </div>
              <div>
                <span className="block font-black text-[14px] mb-1 uppercase tracking-[0.1em]" style={{ color: colors.charcoal }}>Important Note</span>
                <p className="text-base text-gray-700 leading-relaxed font-bold m-0">
                  This exact itinerary is best timed for <strong>November to April</strong>, especially because it includes the south coast at the end.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CHAPTER 3: ROUTE SUMMARY --- */}
      <section style={{ boxShadow: customShadow }} className="bg-white border border-gray-50 rounded-[2.5rem] overflow-hidden mb-8 p-8 md:p-14">
        <div className="mb-10">
          <span className="text-[14px] font-bold tracking-[0.4em] uppercase mb-4 block text-gray-600">
            Chapter 3
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
            Route summary
          </h2>
          <span className="text-xl md:text-2xl font-bold text-gray-400 block">[quick overview of the trip]</span>
        </div>

        <div className="text-lg text-gray-600 leading-relaxed mb-16">
          <p className="mb-8">
            I designed this route so the trip gets easier as it goes on. You start in Colombo with the busiest city energy, move into the highlands and the countryside for the more active middle of the trip, then finish with a slower beach ending before returning to Colombo.
          </p>
          <div style={{ backgroundColor: colors.green + '15', borderColor: colors.green + '30' }} className="p-6 rounded-3xl border flex gap-4 items-start">
            <CheckCircle2 size={24} style={{ color: colors.green }} className="shrink-0 mt-0.5" />
            <p className="m-0 text-[#292926]">
              <strong>Transport efficiency:</strong> each stop sits naturally on the way to the next, so the route keeps moving forward instead of forcing extra detours
            </p>
          </div>
        </div>

        {/* 3.1 Full trip route overview */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.yellow }}>3.1</span> 
            Full trip route overview
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            I built this itinerary in two different versions: one 10-day route and one 14-day route, with the trip length counted from arrival day to departure day. You can choose the route that fits your plan best. Both are great and both include city, nature, and beach, but the 14-day version gives you a slower pace, more beach time, more adventure, and more recovery time between travel days.
          </p>

          <h4 className="text-xl font-extrabold mb-6">Main routes</h4>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div style={{ backgroundColor: colors.green, boxShadow: customShadow }} className="p-8 rounded-[2rem] text-white flex flex-col justify-center transition-transform hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <CalendarDays size={24} className="opacity-80" />
                <span className="font-black tracking-widest uppercase text-[14px] opacity-95">10-day Route</span>
              </div>
              <p className="font-bold text-lg md:text-xl leading-snug m-0">
                Colombo → Kandy → Ella → Weligama → Colombo.
              </p>
            </div>
            <div style={{ backgroundColor: colors.terracotta, boxShadow: customShadow }} className="p-8 rounded-[2rem] text-white flex flex-col justify-center transition-transform hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <CalendarDays size={24} className="opacity-80" />
                <span className="font-black tracking-widest uppercase text-[14px] opacity-95">14-day Route</span>
              </div>
              <p className="font-bold text-lg md:text-xl leading-snug m-0">
                Colombo → Sigiriya → Kandy → Ella → Hirikiteya → Weligama → Colombo
              </p>
            </div>
          </div>

          <h4 className="text-xl font-extrabold mb-6">Route strip</h4>
          <div className="bg-[#FAFAFA] border border-gray-100 rounded-[2.5rem] p-8 md:p-12 mb-8">
            <ul className="space-y-10 relative before:absolute before:inset-0 before:ml-[11px] md:before:ml-[13px] before:-translate-x-px before:h-full before:w-[2px] before:bg-gray-200">
              {[
                { city: "Colombo", desc: "arrival and departure base, plus your busiest city stop (usually best kept short)", color: colors.charcoal },
                { city: "Sigiriya", desc: "quieter countryside stop with a nature-and-adventure feel, slower mornings, and a more open, laid-back pace", color: colors.green },
                { city: "Kandy", desc: "cultural stop with temple atmosphere, lake views, and a softer hill-country transition", color: colors.yellow },
                { city: "Ella", desc: "scenic hill-country stop for hikes, café time, waterfalls, viewpoints", color: colors.green },
                { city: "Hirikiteya", desc: "easy beach stop with a slow surf-town feel, and a more relaxed rhythm", color: colors.terracotta },
                { city: "Weligama", desc: "south-coast beach finish for surf, rest, beach cafés, and a soft finish", color: colors.terracotta },
                { city: "Departure city", desc: "Colombo", color: colors.charcoal }
              ].map((stop, idx) => (
                <li key={idx} className="relative pl-10 md:pl-14">
                  <div style={{ backgroundColor: stop.color }} className="absolute left-0 top-1.5 w-6 h-6 md:w-7 md:h-7 rounded-full border-4 border-[#FAFAFA] shadow-sm z-10"></div>
                  <p className="text-lg text-gray-600 leading-relaxed m-0">
                    <strong className="text-[#292926] text-xl">{stop.city}:</strong> <span className="block sm:inline">{stop.desc}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ backgroundColor: colors.yellow + '15', borderColor: colors.yellow + '30' }} className="p-6 md:p-8 rounded-3xl border flex gap-5 items-start">
            <Info size={24} style={{ color: colors.yellow }} className="shrink-0 mt-0.5" />
            <div>
              <span className="block font-black text-[14px] mb-2 uppercase tracking-[0.1em]" style={{ color: colors.yellow }}>Quick note</span>
              <p className="text-[#292926] font-medium text-lg m-0">
                You can do the route in reverse, but this direction usually feels better in practice: city first, active middle, beach last.
              </p>
            </div>
          </div>
        </div>

        {/* 3.2 Weather fit */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.yellow }}>3.2</span> 
            Weather fit
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            This route works best from <strong>November to April</strong>, when the <strong>south and west coast</strong> usually have the best weather and the trip makes the most sense with Weligama at the end. It also suits the hill-country portion well, since clearer conditions make viewpoints, hikes, and nature stops easier to enjoy.
          </p>

          <h4 className="text-xl font-extrabold mb-6">What to know</h4>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "Best season for this route", desc: "December to March", icon: Sun, color: colors.yellow },
              { title: "Why this timing works", desc: "best part of the trip in this season", icon: Check, color: colors.green },
              { title: "What improves most", desc: "beach days, sea conditions and less rain", icon: MapPin, color: colors.terracotta },
              { title: "Peak-season trade-off", desc: "this is one of the busier travel periods, so hotels can sell out earlier", icon: AlertCircle, color: colors.charcoal },
              { title: "Outside this window", desc: "the route still works, but the north and east can be wetter and beach time becomes less predictable", icon: Info, color: colors.beige }
            ].map((item, idx) => (
              <div key={idx} className={`p-6 rounded-2xl border flex items-start gap-4 ${idx === 4 ? 'md:col-span-2' : ''}`} style={{ borderColor: item.color === colors.beige ? colors.charcoal + '20' : item.color + '30', backgroundColor: item.color === colors.beige ? colors.beige + '20' : item.color + '10' }}>
                 <item.icon size={24} style={{ color: item.color === colors.beige ? colors.charcoal : item.color }} className="shrink-0 mt-0.5" />
                 <div>
                   <strong className="block text-[#292926] text-lg mb-1">{item.title}:</strong>
                   <span className="text-gray-600 text-lg">{item.desc}</span>
                 </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3.3 Estimated total cost by travel style */}
        <div className="mb-4">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.yellow }}>3.3</span> 
            Estimated total cost by travel style
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            As of April 2026, these are broad planning ranges for <strong>10 and 14 days per person, excluding international flights</strong>. Use them to set your trip budget early, then refine the details later in the hotel, transport, and activity sections.
          </p>

          <h4 className="text-xl font-extrabold mb-4 flex items-center gap-3">
            <Plane size={24} style={{ color: colors.terracotta }} />
            Flights from Egypt
          </h4>
          <div className="bg-[#FAFAFA] border border-gray-100 rounded-3xl p-6 md:p-8 mb-12">
            <p className="text-lg text-gray-700 m-0">
              <strong>Round-trip flights from Cairo to Colombo:</strong> usually around <strong>$430 to $720</strong> in economy when booked at a reasonable time
            </p>
          </div>

          <h4 className="text-xl font-extrabold mb-4 flex items-center gap-3">
            <Wallet size={24} style={{ color: colors.green }} />
            Estimated trip cost without international flights and without transportation
          </h4>
          <p className="text-gray-600 mb-8 text-lg">
            These estimates are based on the hotel, food, and activity prices already listed in this guide.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* Card 1: 10 Days Budget */}
            <div style={{ backgroundColor: colors.green, boxShadow: customShadow }} className="p-8 md:p-10 rounded-[2rem] text-white flex flex-col justify-between min-h-[200px] transition-transform hover:-translate-y-1">
              <div>
                <span className="font-bold uppercase tracking-widest text-[14px] text-white/90 mb-1 block">10 Days</span>
                <span className="text-3xl font-extrabold block">Budget <span className="text-sm font-medium text-white/70 tracking-normal normal-case ml-1">(minimum spend)</span></span>
              </div>
              <div className="mt-8 flex items-baseline gap-2">
                <span className="text-sm font-medium text-white/70">around</span>
                <span className="text-4xl font-bold tracking-tight">$220 - $320</span>
              </div>
            </div>
            
            {/* Card 2: 10 Days Mid-range */}
            <div style={{ backgroundColor: colors.charcoal, boxShadow: customShadow }} className="p-8 md:p-10 rounded-[2rem] text-white flex flex-col justify-between min-h-[200px] transition-transform hover:-translate-y-1">
              <div>
                <span className="font-bold uppercase tracking-widest text-[14px] text-white/90 mb-1 block">10 Days</span>
                <span className="text-3xl font-extrabold block">Mid-range</span>
              </div>
              <div className="mt-8 flex items-baseline gap-2">
                <span className="text-sm font-medium text-white/70">around</span>
                <span className="text-4xl font-bold tracking-tight">$420 - $650</span>
              </div>
            </div>

            {/* Card 3: 14 Days Budget */}
            <div style={{ backgroundColor: colors.terracotta, boxShadow: customShadow }} className="p-8 md:p-10 rounded-[2rem] text-white flex flex-col justify-between min-h-[200px] transition-transform hover:-translate-y-1">
              <div>
                <span className="font-bold uppercase tracking-widest text-[14px] text-white/95 mb-1 block">14 Days</span>
                <span className="text-3xl font-extrabold block">Budget <span className="text-sm font-medium text-white/80 tracking-normal normal-case ml-1">(minimum spend)</span></span>
              </div>
              <div className="mt-8 flex items-baseline gap-2">
                <span className="text-sm font-medium text-white/80">around</span>
                <span className="text-4xl font-bold tracking-tight">$320 - $450</span>
              </div>
            </div>

            {/* Card 4: 14 Days Mid-range */}
            <div style={{ backgroundColor: colors.yellow, boxShadow: customShadow }} className="p-8 md:p-10 rounded-[2rem] text-[#292926] flex flex-col justify-between min-h-[200px] transition-transform hover:-translate-y-1">
              <div>
                <span className="font-bold uppercase tracking-widest text-[14px] text-[#292926]/90 mb-1 block">14 Days</span>
                <span className="text-3xl font-extrabold block">Mid-range</span>
              </div>
              <div className="mt-8 flex items-baseline gap-2">
                <span className="text-sm font-medium text-[#292926]/70">around</span>
                <span className="text-4xl font-bold tracking-tight">$650 - $950</span>
              </div>
            </div>
          </div>

          <h4 className="text-xl font-extrabold mb-6">What these ranges assume</h4>
          <ul className="space-y-6 mb-12 bg-[#FAFAFA] border border-gray-100 rounded-[2.5rem] p-8 md:p-10">
            <li className="flex gap-4 items-start">
              <CheckCircle2 size={24} style={{ color: colors.green }} className="shrink-0 mt-0.5" />
              <p className="m-0 text-lg text-gray-600 leading-relaxed">
                <strong className="text-[#292926]">Budget:</strong> cheapest reasonable stays from the guide, simple local meals, and the main lower-cost activities
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <CheckCircle2 size={24} style={{ color: colors.yellow }} className="shrink-0 mt-0.5" />
              <p className="m-0 text-lg text-gray-600 leading-relaxed">
                <strong className="text-[#292926]">Mid-range:</strong> the average comfort version, with comfortable stays, a mix of local and nicer meals, and some paid activities
              </p>
            </li>
          </ul>

          <div style={{ backgroundColor: colors.beige + '40' }} className="rounded-[2.5rem] p-8 md:p-12 mb-12 border border-white">
            <h4 className="text-xl font-extrabold mb-8 flex items-center gap-3">
              <Car size={24} style={{ color: colors.charcoal }} />
              Side note: transportation cost ideas
            </h4>
            <ul className="space-y-8">
              <li className="flex gap-5 items-start">
                <Car size={24} style={{ color: colors.charcoal }} className="shrink-0 mt-0.5 opacity-70" />
                <p className="m-0 text-lg text-gray-700 leading-relaxed">
                  <strong>Private car for the whole trip:</strong> about <strong>$500 to $600 total for 10 days</strong>, or about <strong>$700 to $840 total for 14 days</strong> for the whole car, so if you are 3 people you pay about one third each
                </p>
              </li>
              <li className="flex gap-5 items-start">
                <Train size={24} style={{ color: colors.charcoal }} className="shrink-0 mt-0.5 opacity-70" />
                <p className="m-0 text-lg text-gray-700 leading-relaxed">
                  <strong>Train until Ella, then car to Weligama, then train back to Colombo:</strong> roughly <strong>$30 to $50 per person</strong> on the 10-day route if <strong>2 people share the Ella to Weligama car leg</strong>, depending on train class
                </p>
              </li>
            </ul>
          </div>

          <div style={{ backgroundColor: colors.charcoal, boxShadow: customShadow }} className="rounded-[2.5rem] p-8 md:p-12 mb-8 text-white">
            <span className="block font-black text-[14px] mb-3 uppercase tracking-[0.2em] text-white/80">Recommendation</span>
            <p className="text-xl md:text-2xl leading-relaxed m-0 font-medium text-white/90">
              For most travelers, the mid-range version is the best overall fit. It gives you comfortable stays, manageable transport, and enough room in the budget for the main experiences without making the trip feel expensive. It is also the style I traveled and showed in my videos.
            </p>
          </div>

        </div>
      </section>

      {/* --- NEXT STEP SECTION --- */}
      <NextStepCard 
        title="Ready to prepare?"
        description="Before you fly, there are a few essentials you need to handle. From visas to packing, let's get you ready."
        nextPage="pretrip"
        buttonText="Pre-Trip Planning"
        setCurrentPage={setCurrentPage}
        scrollToTop={scrollToTop}
        colors={colors}
      />
    </div>
  );
};

export default RoutePage;
