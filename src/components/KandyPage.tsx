import React from 'react';
import { 
  Train,
  Car,
  Globe,
  ExternalLink,
  Map,
  BedDouble,
  Building2,
  Utensils,
  Soup,
  Flame,
  Coffee,
  Leaf,
  Star,
  Compass,
  MapPin,
  Info
} from 'lucide-react';

import LocationMap from './LocationMap';

import NextStepCard from './NextStepCard';

interface KandyPageProps {
  colors: {
    green: string;
    yellow: string;
    terracotta: string;
    beige: string;
    charcoal: string;
  };
  openMap: (query: string) => void;
  kandyMapLocations: any[];
  setCurrentPage: (page: string) => void;
  scrollToTop: () => void;
}

const KandyPage: React.FC<KandyPageProps> = ({ colors, openMap, kandyMapLocations, setCurrentPage, scrollToTop }) => {
  const customShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.03)";

  return (
    <div className="animate-in slide-in-from-right duration-700">
      
      {/* Chapter Image Banner */}
      <section style={{ boxShadow: customShadow }} className="bg-white border border-gray-50 rounded-[2.5rem] overflow-hidden mb-8">
        <div className="relative h-[450px] w-full">
          <img 
            src="https://images.unsplash.com/photo-1661928684586-eab4463502be?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Kandy City View" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#292926]/90 via-[#292926]/30 to-transparent"></div>
          <div className="absolute bottom-12 left-12 md:bottom-16 md:left-14 text-white">
            <span className="text-[14px] font-bold tracking-[0.4em] uppercase mb-4 block text-white/90">
              Chapter 9
            </span>
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none">
              Kandy
            </h2>
          </div>
        </div>
      </section>

      <section style={{ boxShadow: customShadow }} className="bg-white border border-gray-50 rounded-[2.5rem] overflow-hidden mb-8 p-8 md:p-14">
        
        {/* 9.1 City overview */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>9.1</span> 
            City overview
          </h3>
          <div className="text-lg text-gray-600 leading-relaxed max-w-4xl space-y-4">
            <p>
              Kandy works best as the cultural and hill-country stop in the middle of the trip. Use it for temple visits, lake walks, a little city life, and one slower cultural stop before moving on.
            </p>
            <p className="font-medium text-[#292926]">
              For this trip, <strong>2 nights</strong> is the right amount. It gives you one lighter arrival-style afternoon and one fuller sightseeing day without making Kandy feel rushed.
            </p>
          </div>
        </div>

        {/* 9.2 How to get here */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>9.2</span> 
            How to get here
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            Coming from Colombo, Kandy is one of the easiest next stops in the route. The train is the nicest option if you book ahead, a private car is the easiest door-to-door option.
          </p>

          <h4 className="text-xl font-extrabold mb-6">Main ways to arrive</h4>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
               <div className="flex items-center gap-3 mb-4">
                 <div className="p-3 rounded-xl shrink-0" style={{ backgroundColor: colors.green + '15', color: colors.green }}>
                   <Train size={24} />
                 </div>
                 <h5 className="font-extrabold text-lg leading-tight">Train from Colombo Fort</h5>
               </div>
               <div className="space-y-2 mt-auto">
                 <p className="text-gray-600 m-0 text-sm">usually about <strong className="text-[#292926]">2.5 to 3.5 hours</strong> and the best choice if you want the more scenic route. Colombo to Kandy is part of the experience, and first class is usually about <strong className="text-[#292926]">$4 to $5</strong>.</p>
                 <p className="text-gray-600 m-0 text-sm"><strong className="text-[#292926]">Booking note:</strong> reserve train seats early if you want a reserved class or observation carriage.</p>
                 <div className="mt-4 pt-4 border-t border-gray-100">
                    <a href="https://seatreservation.railway.gov.lk/" target="_blank" rel="noopener noreferrer" className="text-sm font-bold flex items-center gap-1.5 hover:opacity-70 transition-opacity" style={{ color: colors.green }}>
                      Sri Lanka Railways <ExternalLink size={14} />
                    </a>
                 </div>
               </div>
            </div>
            
            <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
               <div className="flex items-center gap-3 mb-4">
                 <div className="p-3 rounded-xl shrink-0" style={{ backgroundColor: colors.terracotta + '15', color: colors.terracotta }}>
                   <Car size={24} />
                 </div>
                 <h5 className="font-extrabold text-lg leading-tight">Private car or taxi</h5>
               </div>
               <div className="space-y-2 mt-auto">
                 <p className="text-gray-600 m-0 text-sm">usually about <strong className="text-[#292926]">3.5 to 4.5 hours</strong>, depending on traffic and stops.</p>
               </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
               <div className="flex items-center gap-3 mb-4">
                 <div className="p-3 rounded-xl shrink-0" style={{ backgroundColor: colors.charcoal + '15', color: colors.charcoal }}>
                   <Globe size={24} />
                 </div>
                 <h5 className="font-extrabold text-lg leading-tight">12Go</h5>
               </div>
               <div className="space-y-2 mt-auto">
                 <p className="text-gray-600 m-0 text-sm">useful if you want to use buses, minivans, and private transfers in one place.</p>
                 <div className="mt-4 pt-4 border-t border-gray-100">
                    <a href="https://12go.asia/en" target="_blank" rel="noopener noreferrer" className="text-sm font-bold flex items-center gap-1.5 hover:opacity-70 transition-opacity" style={{ color: colors.charcoal }}>
                      12Go <ExternalLink size={14} />
                    </a>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* 9.3 Where to stay */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>9.3</span> 
            Where to stay
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            For Kandy, I would still focus on a comfortable hotel rather than making this a hostel stop. The goal is a stay that feels calm and practical, with easy access to the lake, temple, and main city sights. These are my personal choices if I were staying here.
          </p>

          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <Map size={24} style={{ color: colors.charcoal }} />
            Best areas to stay
          </h4>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { area: "City Centre / around Kandy Lake", desc: "easiest for walking, temple visits, restaurants, and short stays" },
              { area: "Upper Lake Road / Rajapihilla Mawatha", desc: "quieter, slightly greener, and still close by tuk-tuk" },
              { area: "Hantana side", desc: "calmer hillside feel and better for a nicer stay, but less walkable" }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#FAFAFA] border border-gray-100 p-6 rounded-3xl">
                <span className="font-extrabold text-lg block mb-2 text-[#292926]">{item.area}</span>
                <span className="text-gray-600 leading-snug">{item.desc}</span>
              </div>
            ))}
          </div>

          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <BedDouble size={24} style={{ color: colors.green }} />
            Budget hotel picks
          </h4>
          <div className="flex flex-col gap-4 mb-10">
            {[
              { name: "Mount Palace", area: "Hantana", rating: "8.0", price: "$13.50", url: "https://www.booking.com/hotel/lk/mount-palace.html" },
              { name: "Green Citadel / Inside Out Nature Villa", area: "Sirimalwatta / Gunnepana side", rating: "9.4", price: "$16.20", url: "https://www.booking.com/hotel/lk/green-citadel.en-gb.html" },
              { name: "Homestay Garden Rest Kandy", area: "Sudumpola", rating: "8.8", price: "$17", url: "https://www.booking.com/hotel/lk/homestay-garden-rest-kandy.html" },
              { name: "Hanthana Jungle View Holiday Home", area: "Hanthana", rating: "9.1", price: "$17", url: "https://www.booking.com/hotel/lk/hanthana-jungle-view-holiday-home.html" },
              { name: "Nature Walk Resort", area: "near Kandy Lake", rating: "8.4", price: "$18", url: "https://www.booking.com/hotel/lk/nature-walk-resort.html" },
              { name: "Haven Upon Hills", area: "Hantana / Tea Museum side", rating: "9.4", price: "$19.13", url: "https://www.booking.com/hotel/lk/haven-upon-hills.html" },
              { name: "Mcleod-Inn", area: "City Centre", rating: "8.8", price: "$21.32", url: "https://www.booking.com/hotel/lk/mcleod-inn.html" },
              { name: "Queens Mount", area: "Rajapihilla Mawatha / lake side", rating: "8.1", price: "$21.59", url: "https://www.booking.com/hotel/lk/queens-mount.html" },
              { name: "Dream House Residence", area: "City Centre / museum side", rating: "9.3", price: "$22.50", url: "https://www.booking.com/hotel/lk/dream-house-residence-kandy1.html" },
              { name: "Kandy Living Homestay", area: "Nittawela side", rating: "9.4", price: "$25", url: "https://www.booking.com/hotel/lk/kandy-living-villa.html" },
              { name: "Sun Dove Suite", area: "Keerthi Sri Rajasinghe Mawatha / viewpoint side", rating: "9.2", price: "$33", url: "https://www.booking.com/hotel/lk/sun-dove-suite.html" }
            ].map((hotel, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between bg-white border border-gray-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow gap-4">
                <div>
                  <span className="font-extrabold text-lg text-[#292926] block sm:inline">{hotel.name}</span>
                  <span className="text-gray-500 text-sm sm:ml-2 block sm:inline">| {hotel.area} | rating <strong className="text-amber-600">{hotel.rating}</strong> | about <strong>{hotel.price}</strong> for 1 night</span>
                </div>
                <a href={hotel.url} target="_blank" rel="noopener noreferrer" className="shrink-0 px-5 py-2 bg-gray-50 hover:bg-gray-100 text-[#292926] text-sm font-bold rounded-xl border border-gray-200 transition-colors flex items-center gap-2 justify-center mt-2 sm:mt-0">
                  Booking <ExternalLink size={14}/>
                </a>
              </div>
            ))}
          </div>

          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <Building2 size={24} style={{ color: colors.charcoal }} />
            Mid-range hotel picks
          </h4>
          <div className="flex flex-col gap-4 mb-10">
            {[
              { name: "Veraima Kandy", area: "Sirimalwatta side", rating: "9.1", price: "$40.50", url: "https://www.booking.com/hotel/lk/veraima-kandy.html" },
              { name: "Mcleod-Inn", area: "City Centre", rating: "8.8", price: "$40.85", url: "https://www.booking.com/hotel/lk/mcleod-inn.html" },
              { name: "Vishwa Retreat Hotel", area: "City Centre", rating: "9.2", price: "$42.12", url: "https://www.booking.com/hotel/lk/vishwa-retreat.html" },
              { name: "Hotel Cassendra", area: "Rajapihilla Mawatha / lake side", rating: "8.2", price: "$42.53", url: "https://www.booking.com/hotel/lk/cassendra.html" },
              { name: "Kings Ridge Kandy", area: "City Centre / lake side", rating: "8.1", price: "$42.53", url: "https://www.booking.com/hotel/lk/kings-ridge-kandy.html" },
              { name: "Arambhaya Boutique Hotel", area: "Anniewatta", rating: "9.2", price: "$59.56", url: "https://www.booking.com/hotel/lk/arambhaya-boutique.html" },
              { name: "Lotus Lake Residence", area: "Rajapihilla Mawatha / lake side", rating: "8.7", price: "$60.75", url: "https://www.booking.com/hotel/lk/lotus-lake-residence.html" }
            ].map((hotel, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between bg-white border border-gray-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow gap-4">
                <div>
                  <span className="font-extrabold text-lg text-[#292926] block sm:inline">{hotel.name}</span>
                  <span className="text-gray-500 text-sm sm:ml-2 block sm:inline">| {hotel.area} | rating <strong className="text-amber-600">{hotel.rating}</strong> | about <strong>{hotel.price}</strong> for 1 night</span>
                </div>
                <a href={hotel.url} target="_blank" rel="noopener noreferrer" className="shrink-0 px-5 py-2 bg-gray-50 hover:bg-gray-100 text-[#292926] text-sm font-bold rounded-xl border border-gray-200 transition-colors flex items-center gap-2 justify-center mt-2 sm:mt-0">
                  Booking <ExternalLink size={14}/>
                </a>
              </div>
            ))}
          </div>

          <div style={{ backgroundColor: colors.beige + '40' }} className="rounded-[2.5rem] p-6 md:p-8 flex gap-5 items-start border border-white">
            <Info size={24} style={{ color: colors.charcoal }} className="shrink-0 mt-0.5" />
            <div>
              <span className="block font-black text-[14px] mb-2 uppercase tracking-[0.1em]" style={{ color: colors.charcoal }}>Booking note</span>
              <p className="text-gray-700 leading-relaxed font-medium m-0 text-lg">
                These prices can move a lot depending on dates and room type. If you find one you like, book it early and keep a free-cancellation option if possible.
              </p>
            </div>
          </div>
        </div>

        {/* 9.4 Where and what to eat */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>9.4</span> 
            Where and what to eat
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            Kandy is a good food stop for a mix of casual local meals and one nicer dinner.
          </p>

          {/* Budget Places */}
          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <Utensils size={24} style={{ color: colors.green }} />
            Budget places
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { name: "Balaji Dosai", desc: "South Indian vegetarian dosai and quick casual meals near the center", price: "about $1.25 to $2.50 for many dosa dishes", icon: Soup, bgColor: colors.yellow, map: "Balaji Dosai Kandy" },
              { name: "MANDIYA", desc: "Sri Lankan rice and curry and home-style local plates in the center; best to go before 4 PM", price: "about $2 to $3 per person", icon: Utensils, bgColor: colors.terracotta, map: "MANDIYA Kandy" },
              { name: "Hela Bojun Hala", desc: "very local Sri Lankan snack and breakfast stop run as a women-led food hall; best for a quick, cheap local stop", price: "about $1 per person", icon: Flame, bgColor: colors.charcoal, map: "Ahalepola Kumarihami Mawatha, Kandy 20000, Sri Lanka" },
              { name: "Devon Restaurant", desc: "classic local stop on Sri Dalada Veediya with a very local atmosphere", price: "about $3 to $6 per person", icon: Utensils, bgColor: colors.green, map: "No.11 Sri Dalada Veediya, Kandy 20000, Sri Lanka" },
              { name: "The Trees Cafe", desc: "best for breakfast and views, with coffee, pastries, and lighter cafe dishes", price: "about $2.50 to $5 per person", icon: Coffee, bgColor: colors.yellow, map: "The Trees Cafe Kandy" }
            ].map((place, idx) => (
              <div key={idx} className="bg-white border border-gray-100 rounded-[1.5rem] flex flex-col overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-40 w-full relative flex items-center justify-center" style={{ backgroundColor: place.bgColor }}>
                  <place.icon size={64} color="white" className="opacity-50" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h5 className="absolute bottom-4 left-4 right-4 text-white font-extrabold text-xl leading-tight">{place.name}</h5>
                </div>
                <div className="p-6 flex flex-col grow">
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{place.desc}</p>
                  <div className="flex flex-col gap-3">
                    <span className="text-[#292926] font-bold text-sm bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{place.price}</span>
                    <button onClick={() => openMap(place.map)} className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors text-left">
                      <MapPin size={16}/> View on Map
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mid Range */}
          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <Coffee size={24} style={{ color: colors.charcoal }} />
            Mid-range and nicer sit-down places
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { name: "Vito Wood Fired Pizza", desc: "one of the strongest casual dinner picks in Kandy for wood-fired pizza and pasta", price: "about $4 to $10 per dish", icon: Flame, bgColor: colors.terracotta, map: "Vito Wood Fired Pizza Kandy" },
              { name: "Los Amigos Locos", desc: "Mexican food with burritos, tacos, and a more casual out-of-the-center dinner feel", price: "about $5.50 to $7 per dish", icon: Flame, bgColor: colors.charcoal, map: "Los Amigos Locos Kandy" },
              { name: "Timber Cabin by Rivora", desc: "hillside restaurant with good views and a more polished dinner setting", price: "about $9 to $12+ per person", icon: Utensils, bgColor: colors.yellow, map: "Timber Cabin by Rivora Kandy" },
              { name: "Hideout Lounge", desc: "stylish lake-side hangout for cocktails, brunch, and more modern mains", price: "about $7 to $14+ per person", icon: Coffee, bgColor: colors.green, map: "Hideout Lounge Kandy" },
              { name: "Soul Food", desc: "plant-based cafe with bowls, wraps, and healthier lunch or dinner options", price: "about $5 to $8.50 per dish", icon: Leaf, bgColor: colors.charcoal, map: "Soul Food Kandy" },
              { name: "Organica Lounge Kandy", desc: "rooftop vegetarian-friendly spot with views and healthier brunch or dinner options", price: "about $6 to $8 per person", icon: Leaf, bgColor: colors.terracotta, map: "Organica Lounge Kandy" },
              { name: "Slightly Chilled Lounge", desc: "rooftop sunset stop for drinks, Chinese and international food, and a more social evening", price: "about $6 to $12+ per person, drinks extra", icon: Coffee, bgColor: colors.yellow, map: "Slightly Chilled Lounge, Sports Bar & Restaurant Kandy" }
            ].map((place, idx) => (
              <div key={idx} className="bg-white border border-gray-100 rounded-[1.5rem] flex flex-col overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-40 w-full relative flex items-center justify-center" style={{ backgroundColor: place.bgColor }}>
                  <place.icon size={64} color="white" className="opacity-50" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h5 className="absolute bottom-4 left-4 right-4 text-white font-extrabold text-xl leading-tight">{place.name}</h5>
                </div>
                <div className="p-6 flex flex-col grow">
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{place.desc}</p>
                  <div className="flex flex-col gap-3">
                    <span className="text-[#292926] font-bold text-sm bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{place.price}</span>
                    <button onClick={() => openMap(place.map)} className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors text-left">
                      <MapPin size={16}/> View on Map
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* High End */}
          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <Star size={24} style={{ color: colors.terracotta }} />
            High-end and special-occasion restaurants
          </h4>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { name: "Theva Cuisine", desc: "refined Sri Lankan and international fine dining with hill views", price: "about $11 to $16+ for many mains", icon: Star, bgColor: colors.yellow, map: "Theva Cuisine Kandy" }
            ].map((place, idx) => (
              <div key={idx} className="bg-white border border-gray-100 rounded-[1.5rem] flex flex-col sm:flex-row overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 sm:h-auto sm:w-2/5 relative shrink-0 flex items-center justify-center" style={{ backgroundColor: place.bgColor }}>
                  <place.icon size={64} color="white" className="opacity-50" />
                </div>
                <div className="p-6 flex flex-col grow justify-center">
                  <h5 className="text-[#292926] font-extrabold text-xl mb-2">{place.name}</h5>
                  <p className="text-gray-600 text-sm mb-4">{place.desc}</p>
                  <div className="flex flex-col gap-3">
                    <span className="text-terracotta-700 font-bold text-sm bg-orange-50 px-3 py-1.5 rounded-lg border border-orange-100">{place.price}</span>
                    <button onClick={() => openMap(place.map)} className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors text-left">
                      <MapPin size={16}/> View on Map
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 9.5 Day-by-day plan inside this city */}
        <div className="mb-16">
          {/* Day 1 */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
              <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>9.5.1</span> 
              Day one - Arrival day
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
              Keep the first day central and easy so you are not forcing too much after the transfer from Colombo. You can walk the central lake-side stops and use short tuk-tuk rides where needed. The cleanest first-evening plan in Kandy is <strong>Kandy Lake → optional private boat ride → Kandy View Point → Temple of the Sacred Tooth Relic → Kandy cultural show</strong>.
            </p>

            <h4 className="text-xl font-extrabold mb-8 flex items-center gap-3">
              <Compass size={24} style={{ color: colors.green }} />
              Recommendation
            </h4>
            <div className="bg-[#FAFAFA] border border-gray-100 rounded-[2.5rem] p-8 md:p-12">
              <ul className="space-y-10 relative before:absolute before:inset-0 before:ml-[11px] md:before:ml-[13px] before:-translate-x-px before:h-full before:w-[2px] before:bg-gray-200">
                {[
                  { name: "Kandy Lake", desc: "the easiest first walk in the city and a good way to settle in before the evening starts", effort: "very easy / low", price: "Free", note: "best in the late afternoon when the light softens and the center feels less rushed", color: colors.yellow, map: "Kandy Lake", img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerM_oRhziCoVm-VcQiMh5N30fQESpooORErNgphoVQZ1T2mTQCp2Ni2zkWyHSFEQVoGnC0TCT6o-_5rIQuTfHnAchU5NFSJMTFpb11unZPg5-v3SPrVsYC9KmM19_7Xsl23zcw=w800-h800-k-no" },
                  { name: "Optional: Private boat ride on Kandy Lake", desc: "a light add-on if you want a quieter view back over the city from the water", effort: "very easy / low", price: "about $8 to $14 for 30 to 45 minutes", color: colors.charcoal, map: "Joy Boat Kandy", img: "https://scontent.fbah1-1.fna.fbcdn.net/v/t1.6435-9/150397806_3916577501769602_7901222006711137566_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_ohc=xkRCr5fn7zgQ7kNvwEXFrFH&_nc_oc=AdplOZGL7e-UWLaH9vUsfWiyyT5RIQnKakJOBtDOTETESmoBuRvDmjjDUOA7SwNhEkDTTRfeEZGNY9f8GFaOzeCh&_nc_zt=23&_nc_ht=scontent.fbah1-1.fna&_nc_gid=ZcjdwJa5_Mwi9oBvfB-IvQ&_nc_ss=7a389&oh=00_Af09-aXi9yBjm9QbI6-svIoVq5eMeqiih7QS_UFHK8nk2g&oe=69FDD90A" },
                  { name: "Kandy View Point", desc: "quick add-on near the lake side if you want the classic elevated view back over the city", effort: "easy / low", price: "Free", note: "easiest around late afternoon or near sunset; it fits well after the lake area stops", color: colors.terracotta, map: "Kandy View Point", img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep7FgROyIfyj121fTDxnvmxgMQyktmFE9wjNRaSPqvMxMpQO3CWo9xSoRuTGWQ5yQ578-HZqs0w6CEpTUDyp6d6womoZTHiK4MEKgjWxI8xQbTPFdS6vkiJI_vVWxOC2xHbr1l74Q=w800-h800-k-no" },
                  { name: "Temple of the Sacred Tooth Relic", desc: "the most important cultural stop in Kandy and best visited before the evening gets too busy", effort: "easy / low", price: "about $6.35 per person", note: "dress modestly, remove your shoes, and expect crowds", color: colors.green, map: "Temple of the Sacred Tooth Relic Kandy", img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepS-qvNqXFosWIYgARbxpUg1HowTZNi87hIOnASZ8CLgxz5AW-yM60briBCK-dgtypmedhbBen5eQHqeIwIEvVS7Vc4G4oLrf8xpc8gQXRY-IXUrNxVPgw065TxsbsxXt67ulQr=w800-h800-k-no" },
                  { name: "Kandy Lake Club Cultural Show", desc: "the easiest evening stop if you want drumming and dance without turning the day into a full sightseeing push", effort: "very easy / low", price: "about $9 to $11 per person", note: "the official show runs daily from 5 PM to 6 PM (double check)", color: colors.terracotta, map: "Kandy Lake Club Cultural Show", img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqNpfVoqPJFZQmiPz4Il4HxmdOPFOpFYbA4k1bDUvSSElvaShNAxYSZRxwRBNa3ASTLSvJu-2o3smeRK4d1_OCWgCVgLPu9sF_FQKrb4JEZIFMTG0UfWnokIUdm2ZfGzwCUL8l2_4YG_Ez-=w800-h800-k-no" },
                  { name: "Optional: Ambuluwawa Tower", desc: "the dramatic add-on outside Kandy if you arrive early and want a bigger viewpoint stop instead of keeping the day fully central", effort: "moderate / stairs and heights", price: "about $8.75 for a foreign adult", note: "best on a clear day; the staircase gets narrow near the top, so skip it if heights are not your thing", color: colors.charcoal, map: "Ambuluwawa Tower", img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoZ-abOGq-mYKExyrJRph1BxenVt28YsAbw7m2RLuf8EHjFPVwUsyZzV2mIKQ1QzpuOauI5G7VWrKD3vqa2x1JZnJbStdq-rjPvtOpS2AaiLj3C8NsJ7EtHBammGwxeGmVJj3EZCiRY0aM=w800-h800-k-no" }
                ].map((stop, idx) => (
                  <li key={idx} className="relative pl-10 md:pl-14">
                    <div style={{ backgroundColor: stop.color }} className="absolute left-0 top-1.5 w-6 h-6 md:w-7 md:h-7 rounded-full border-4 border-[#FAFAFA] shadow-sm z-10"></div>
                    <div className="bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row overflow-hidden items-stretch">
                      
                      <div className="flex-1 flex flex-col p-6 md:p-8">
                        <h5 className="font-extrabold text-xl md:text-2xl mb-3">{stop.name}</h5>
                        <p className="text-gray-600 text-lg mb-5">{stop.desc}</p>
                        
                        <div className="space-y-3 mb-6 flex-grow">
                          {stop.effort && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">Effort:</strong> {stop.effort}</p>}
                          {stop.price && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">Price:</strong> {stop.price}</p>}
                          {stop.note && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">Note:</strong> {stop.note}</p>}
                        </div>
                        
                        <div className="flex flex-wrap gap-4 border-t border-gray-100 pt-5 mt-auto">
                          <button onClick={() => openMap(stop.map)} className="flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 text-left">
                            <MapPin size={16}/> View on Map
                          </button>
                        </div>
                      </div>

                      <div className="md:w-2/5 lg:w-1/3 shrink-0 flex flex-col bg-gray-50 border-t md:border-t-0 md:border-l border-gray-100">
                        <img 
                          src={stop.img || "https://placehold.co/400x600/f8fafc/a1a1aa?text=Photo+Placeholder"} 
                          alt={stop.name} 
                          className="w-full h-48 md:h-full min-h-[200px] object-cover flex-1" 
                          referrerPolicy="no-referrer"
                        />
                      </div>

                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Day 2 */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
              <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>9.5.2</span> 
              Day two - Exploring Kandy
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
              This is the fuller Kandy day and I would start with the gardens and tea stops outside the center, then finish back in the city. A tuk-tuk works fine for this route and is the easiest way to move between the stops without overthinking the logistics.
            </p>

            <h4 className="text-xl font-extrabold mb-8 flex items-center gap-3">
              <Compass size={24} style={{ color: colors.green }} />
              Best way to do it
            </h4>
            <div className="bg-[#FAFAFA] border border-gray-100 rounded-[2.5rem] p-8 md:p-12">
              <ul className="space-y-10 relative before:absolute before:inset-0 before:ml-[11px] md:before:ml-[13px] before:-translate-x-px before:h-full before:w-[2px] before:bg-gray-200">
                {[
                  { name: "Royal Botanic Gardens", desc: "the best half-day green stop near Kandy and the easiest way to slow the pace down a little", effort: "easy / low", price: "about $9.50 for a foreign adult", note: "officially open from 7:30 AM to 6 PM and best earlier in the day if you want softer weather", color: colors.green, map: "Royal Botanic Gardens Peradeniya", img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepSiG_ZHde95BT6ly5OU0K3FxDjuW1V9lusCnwfWayTmTByslAo3teyseAc598n60d90PM84ofL7AB9J8STOCRPOxJcSG5lDondzAG91OrY8TBeOVOEAe-Pm5gtcxF9sm_Yng1T62sgUGn3=w800-h800-k-no" },
                  { name: "Ceylon Tea Museum", desc: "the main tea-history stop in the Kandy area and the better pick if you want one tea-focused visit without doing a longer estate day", effort: "easy / low", price: "about $3.20 for a foreign adult", note: "usually closed on Mondays; easiest by tuk-tuk from central Kandy", color: colors.terracotta, map: "Ceylon Tea Museum Kandy", img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqo2g6IsDSUbzzuFygnSKksykfGpTzfc29jXEGr6WfLgyY6DMOZL85Pe1JoQwXIZphlRFDIeHIyKj70FoiexEDR4kz3EsBD3rH63anXKs4f3Y3hTYfr26yStKTS6nXU6jhZU_r5oXKU46j_=w800-h800-k-no" },
                  { name: "Bahirawakanda Vihara Buddha Statue / Sri Maha Bodhi Viharaya", desc: "the quick viewpoint stop with one of the best city views back over Kandy", effort: "easy / low", price: "about $1 per person", note: "easiest by tuk-tuk; dress modestly because it is still a religious site", color: colors.yellow, map: "Bahirawakanda Vihara Buddha Statue Kandy", img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoLPJTAtqi5G5u0kcn-DWkbeHy3cro5RNI789kXu-kTmkQcLCZBkx0iLy_QdBhHSBqlnPeYBu141rVM3DvWxI4dtXU1dAIHayS0u8fYBNp9U8_ctzqCmGKfcVZIg2hqFsbu1nD8O0153CbR=w800-h800-k-no" },
                  { name: "Kandy Market Hall", desc: "a maze of stalls and alleys with textiles, souvenirs, electronics, sunglasses, jewelry, and general market browsing.", effort: "very easy / low", price: "Free", note: "keep this short and practical; it works better as a walk-through than a major stop", color: colors.charcoal, map: "Kandy Market Hall", img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoBv6zbbv-8w2dQkzl84Rk7NEIS5f2zM2gtU7imkTPQgszdxGEaAYwMuHXL9W9miSz2_XywPEBEGBvN3sg_aH2m9Wf341Ut-HWIo3m4CK5iw4EDykRD6eyqBa7iMZ-o5FKmNfAxK9XkwKY=w800-h800-k-no" }
                ].map((stop, idx) => (
                  <li key={idx} className="relative pl-10 md:pl-14">
                    <div style={{ backgroundColor: stop.color }} className="absolute left-0 top-1.5 w-6 h-6 md:w-7 md:h-7 rounded-full border-4 border-[#FAFAFA] shadow-sm z-10"></div>
                    <div className="bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row overflow-hidden items-stretch">
                      
                      <div className="flex-1 flex flex-col p-6 md:p-8">
                        <h5 className="font-extrabold text-xl md:text-2xl mb-3">{stop.name}</h5>
                        <p className="text-gray-600 text-lg mb-5">{stop.desc}</p>
                        
                        <div className="space-y-3 mb-6 flex-grow">
                          {stop.effort && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">Effort:</strong> {stop.effort}</p>}
                          {stop.price && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">Price:</strong> {stop.price}</p>}
                          {stop.note && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">Note:</strong> {stop.note}</p>}
                        </div>
                        
                        <div className="flex flex-wrap gap-4 border-t border-gray-100 pt-5 mt-auto">
                          <button onClick={() => openMap(stop.map)} className="flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 text-left">
                            <MapPin size={16}/> View on Map
                          </button>
                        </div>
                      </div>

                      <div className="md:w-2/5 lg:w-1/3 shrink-0 flex flex-col bg-gray-50 border-t md:border-t-0 md:border-l border-gray-100">
                        <img 
                          src={stop.img || "https://placehold.co/400x600/f8fafc/a1a1aa?text=Photo+Placeholder"} 
                          alt={stop.name} 
                          className="w-full h-48 md:h-full min-h-[200px] object-cover flex-1" 
                          referrerPolicy="no-referrer"
                        />
                      </div>

                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 9.5.3 Quick notes */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
              <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>9.5.3</span> 
              Quick notes for Kandy
            </h3>
            <div className="bg-yellow-50 border border-yellow-100 p-8 rounded-[2rem]">
              <h4 className="text-xl font-extrabold mb-5 flex items-center gap-3" style={{ color: colors.yellow }}>
                <Info size={24} />
                Keep in mind
              </h4>
              <ul className="space-y-4">
                {[
                  { text: "Walk central Kandy when possible, then use tuk-tuks for hills, viewpoints, and garden visits", label: "Recommended transport:" },
                  { text: "the Temple of the Sacred Tooth Relic can get busy, so it is worth building in a little patience", label: "Crowd note:" },
                  { text: "cloud, haze, and rain can change the feel of Kandy quickly, so keep viewpoints a little flexible", label: "Viewpoint note:" },
                  { text: "Dress modestly for religious sites, covering shoulders and knees", label: "Dress code:" }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-start">
                    <div className="w-2 h-2 rounded-full mt-2.5 shrink-0" style={{ backgroundColor: colors.yellow }}></div>
                    <p className="text-lg text-gray-700 leading-relaxed m-0 font-medium">
                      <strong>{item.label}</strong> {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </section>

      {/* --- NEXT STEP SECTION --- */}
      <NextStepCard 
        title="The Most Scenic Train Ride"
        description="Next stop: Ella. Get ready for the famous blue train, misty mountains, and the Nine Arch Bridge."
        nextPage="ella"
        buttonText="Explore Ella"
        setCurrentPage={setCurrentPage}
        scrollToTop={scrollToTop}
        colors={colors}
      />
    </div>
  );
};

export default KandyPage;
