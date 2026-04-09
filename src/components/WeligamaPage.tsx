import React from 'react';
import { 
  Car,
  Route,
  ExternalLink,
  BedDouble,
  Building2,
  Star,
  Sun,
  Utensils,
  Soup,
  Coffee,
  Fish,
  Flame,
  ShoppingBag,
  Moon,
  Waves,
  MapPin,
  Camera,
  Smartphone,
  Compass,
  Info,
  Train,
  ArrowUp,
  Globe,
  Instagram,
  Leaf
} from 'lucide-react';

import LocationMap from './LocationMap';

interface WeligamaPageProps {
  colors: {
    green: string;
    yellow: string;
    terracotta: string;
    beige: string;
    charcoal: string;
  };
  openMap: (query: string) => void;
  weligamaMapLocations: any[];
}

const WeligamaPage: React.FC<WeligamaPageProps> = ({ colors, openMap, weligamaMapLocations }) => {
  const customShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.03)";

  return (
    <div className="animate-in slide-in-from-right duration-700">
      
      {/* Chapter Image Banner */}
      <section style={{ boxShadow: customShadow }} className="bg-white border border-gray-50 rounded-[2.5rem] overflow-hidden mb-8">
        <div className="relative h-[450px] w-full">
          <img 
            src="https://images.pexels.com/photos/7953000/pexels-photo-7953000.jpeg" 
            alt="Weligama Coastline" 
            className="absolute inset-0 w-full h-full object-cover" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#292926]/90 via-[#292926]/30 to-transparent"></div>
          <div className="absolute bottom-12 left-12 md:bottom-16 md:left-14 text-white">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block text-white/70">
              Chapter 12
            </span>
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none">
              Weligama
            </h2>
          </div>
        </div>
      </section>

      {/* MAP INSERTION */}
      <LocationMap title="Explore Weligama" locations={weligamaMapLocations} colors={colors} onOpenMap={openMap} />

      <section style={{ boxShadow: customShadow }} className="bg-white border border-gray-50 rounded-[2.5rem] overflow-hidden mb-8 p-8 md:p-14">
        
        {/* 12.1 City overview */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>12.1</span> 
            City overview
          </h3>
          <div className="text-lg text-gray-600 leading-relaxed max-w-4xl space-y-4">
            <p>
              Weligama is one of my favorite ways to end a Sri Lanka trip because it is where I like to slow things down after the busier city stops, the hill-country stretch, and the more active days earlier in the route. It is a relaxed south-coast beach town with surf, good cafés, a long sandy bay, and easy access to turtle and wildlife experiences without needing a full resort stay.
            </p>
            <p>
              If you are following the 14-day route and coming from Hiriketiya, then expect a much more vibrant and active town where you can still relax by the beach, enjoy the sceneries, and be a little active one last time on the trip before it ends.
            </p>
            <p className="font-medium text-[#292926]">
              For this trip, Weligama works very well in <strong>3 nights</strong>, but ideally give it <strong>4 nights</strong> if you want one proper beach day, the Udawalawe day trip, and one extra slow day without rushing.
            </p>
          </div>
        </div>

        {/* 12.2 How to get here */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>12.2</span> 
            How to get here
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            Coming from Ella, Weligama is the shift from the hill country into the south-coast part of the trip. The cleanest move is usually a pre-booked private car through your Ella hotel or a known transfer company, especially because there are <strong>no direct trains</strong> from Ella to Weligama. It is also the best option if you want to stop at the Elephant Transit Home on the way, which I explain further in the day-to-day plan below.
            <br/><br/>
            Coming from Hirikiteya (the 14-day route), this is a <strong>1 to 1.5 hours</strong> ride by tuk-tuk or taxi.
          </p>

          <h4 className="text-xl font-extrabold mb-6">Main ways to arrive</h4>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
               <div className="flex items-center gap-3 mb-4">
                 <div className="p-3 rounded-xl shrink-0" style={{ backgroundColor: colors.terracotta + '15', color: colors.terracotta }}>
                   <Car size={24} />
                 </div>
                 <h5 className="font-extrabold text-lg leading-tight">Private car or taxi all the way from Ella</h5>
               </div>
               <div className="space-y-3 mt-auto">
                 <p className="text-gray-600 m-0 text-sm">usually about <strong className="text-[#292926]">3.5 to 4.5 hours</strong> and the best overall choice for this route.</p>
                 <p className="text-gray-600 m-0 text-sm"><strong className="text-[#292926]">Price:</strong> current small-car quotes are roughly <strong className="text-[#292926]">$43 to $67</strong> for the whole car.</p>
                 <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-2">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Booking options</span>
                    <a href="https://www.ellabudgettaxi.com/taxi/23/ella-to-from-weligama" target="_blank" rel="noopener noreferrer" className="text-sm font-bold flex items-center gap-1.5 hover:opacity-70 transition-opacity" style={{ color: colors.terracotta }}>
                      Ella Budget Taxi <ExternalLink size={14} />
                    </a>
                    <a href="https://www.tripadvisor.com/Attraction_Review-g616035-d19280930-Reviews-Ceylon_Ella_Taxi-Ella_Uva_Province.html" target="_blank" rel="noopener noreferrer" className="text-sm font-bold flex items-center gap-1.5 hover:opacity-70 transition-opacity" style={{ color: colors.terracotta }}>
                      Ceylon Ella Taxi <ExternalLink size={14} />
                    </a>
                    <a href="https://www.tripadvisor.com/Attraction_Review-g616035-d32897652-Reviews-Ella_Taxi_Buddy-Ella_Uva_Province.html" target="_blank" rel="noopener noreferrer" className="text-sm font-bold flex items-center gap-1.5 hover:opacity-70 transition-opacity" style={{ color: colors.terracotta }}>
                      Ella Taxi Buddy <ExternalLink size={14} />
                    </a>
                 </div>
               </div>
            </div>
            
            <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
               <div className="flex items-center gap-3 mb-4">
                 <div className="p-3 rounded-xl shrink-0" style={{ backgroundColor: colors.green + '15', color: colors.green }}>
                   <Car size={24} />
                 </div>
                 <h5 className="font-extrabold text-lg leading-tight">Private car or taxi from Hiriketiya</h5>
               </div>
               <div className="space-y-3 mt-auto">
                 <p className="text-gray-600 m-0 text-sm">the easiest option for this stretch if you want a direct transfer. Check with your hotel first.</p>
                 <p className="text-gray-600 m-0 text-sm"><strong className="text-[#292926]">Timing:</strong> usually about <strong className="text-[#292926]">1 to 1.5 hours</strong>.</p>
                 <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-2">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Contacts</span>
                    <span className="text-sm font-bold flex items-center gap-1.5" style={{ color: colors.green }}>Senu Cabs (+94 77 05 28 583)</span>
                    <span className="text-sm font-bold flex items-center gap-1.5" style={{ color: colors.green }}>Mr.Taxi.lk (+94 76 88 79 009)</span>
                    <span className="text-sm font-bold flex items-center gap-1.5" style={{ color: colors.green }}>Visit Sri Lanka Taxi (+94 76 322 2239)</span>
                 </div>
               </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
               <div className="flex items-center gap-3 mb-4">
                 <div className="p-3 rounded-xl shrink-0" style={{ backgroundColor: colors.charcoal + '15', color: colors.charcoal }}>
                   <Route size={24} />
                 </div>
                 <h5 className="font-extrabold text-lg leading-tight">If you already have a driver</h5>
               </div>
               <div className="space-y-3 mt-auto">
                 <p className="text-gray-600 m-0 text-sm">just continue all the way by road to Weligama and skip the extra transport planning.</p>
               </div>
            </div>
          </div>
        </div>

        {/* 12.3 Where to stay */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>12.3</span> 
            Where to stay
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            For this stop, I would stay anywhere on the <strong>Weligama to Ahangama stretch</strong>, depending on whether you want to be closer to the main beach, a quieter side street, or one of the surfier nearby areas. Beachfront rooms can be noisy because the main road often sits right behind them.
          </p>

          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <BedDouble size={24} style={{ color: colors.green }} />
            Budget picks
          </h4>
          <div className="flex flex-col gap-4 mb-10">
            {[
              { name: "Weligama Bay Eco Villa", rating: "8.7", price: "$9", note: "quiet garden feel, kind staff", url: "https://www.booking.com/hotel/lk/weligama-bay-eco-villa.html" },
              { name: "Plantation Inn", rating: "8.8", price: "$18 to $19", note: "beachfront, spacious rooms", url: "https://www.booking.com/hotel/lk/plantation-inn.html" },
              { name: "Whitegates Lodge", rating: "9.7", price: "$21", note: "quiet garden setting, homemade breakfast", url: "https://www.booking.com/hotel/lk/whitegates-lodge.html" },
              { name: "Kusuma's Lazy Left", rating: "9.6", price: "$23", note: "beachfront, family-run, strong breakfast", url: "https://www.booking.com/hotel/lk/kusuma-39-s-lazy-left.html" },
              { name: "Naia Beach House Midigama", rating: "9.5", price: "$24", note: "oceanfront terrace, near surf break", url: "https://www.booking.com/hotel/lk/naia-beach-house-midigama.html" }
            ].map((hotel, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between bg-white border border-gray-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow gap-4">
                <div>
                  <span className="font-extrabold text-lg text-[#292926] block sm:inline">{hotel.name}</span>
                  <span className="text-gray-500 text-sm sm:ml-2 block sm:inline">| rating <strong className="text-amber-600">{hotel.rating}</strong> | about <strong>{hotel.price}</strong> for 1 night</span>
                  {hotel.note && <p className="text-sm text-gray-500 mt-1 mb-0 italic"><strong>Note:</strong> {hotel.note}</p>}
                </div>
                <a href={hotel.url} target="_blank" rel="noopener noreferrer" className="shrink-0 px-5 py-2 bg-gray-50 hover:bg-gray-100 text-[#292926] text-sm font-bold rounded-xl border border-gray-200 transition-colors flex items-center gap-2 justify-center mt-2 sm:mt-0">
                  Booking <ExternalLink size={14}/>
                </a>
              </div>
            ))}
          </div>

          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <Building2 size={24} style={{ color: colors.charcoal }} />
            Mid-range picks
          </h4>
          <div className="flex flex-col gap-4 mb-10">
            {[
              { name: "Villa Polwatta", rating: "9.0", price: "$25", note: "quiet, spacious, friendly hosts", url: "https://www.booking.com/hotel/lk/villa-polwatta-weligama.html" },
              { name: "Ahangama Beach Resort", rating: "8.9", price: "$27", note: "good value, close to beach", url: "https://www.booking.com/hotel/lk/ahangama-beach-resort.html" },
              { name: "Weligama Watergate Resort", rating: "8.4", price: "$28", note: "close to beach, spacious AC rooms", url: "https://www.booking.com/hotel/lk/weligama-watergate-resort-weligama.html" },
              { name: "Skywalker Guest House Weligama", rating: "9.2", price: "$29", note: "river view, calm setting, short beach walk", url: "https://www.booking.com/hotel/lk/skywalker-guest-house-weligama.html" },
              { name: "Temple Tree", rating: "9.3", price: "$30", note: "big breakfasts", url: "https://www.booking.com/hotel/lk/temple-tree.html" },
              { name: "Sky Mountain", rating: "9.1", price: "$32", note: "sea views, private terrace", url: "https://www.booking.com/hotel/lk/sky-mountain.html" },
              { name: "Rise", rating: "9.0", price: "$33", note: "short beach walk", url: "https://www.booking.com/hotel/lk/rise.html" },
              { name: "Lime & Co Midi", rating: "9.0", price: "$37", note: "surf-friendly", url: "https://www.booking.com/hotel/lk/lime-amp-co-midi.html" },
              { name: "Komorebi Weligama", rating: "9.6", price: "$42", note: "beachfront, stylish rooms, high review score", url: "https://www.booking.com/hotel/lk/komorebi-weligama.html" }
            ].map((hotel, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between bg-white border border-gray-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow gap-4">
                <div>
                  <span className="font-extrabold text-lg text-[#292926] block sm:inline">{hotel.name}</span>
                  <span className="text-gray-500 text-sm sm:ml-2 block sm:inline">| rating <strong className="text-amber-600">{hotel.rating}</strong> | about <strong>{hotel.price}</strong> for 1 night</span>
                  {hotel.note && <p className="text-sm text-gray-500 mt-1 mb-0 italic"><strong>Note:</strong> {hotel.note}</p>}
                </div>
                <a href={hotel.url} target="_blank" rel="noopener noreferrer" className="shrink-0 px-5 py-2 bg-gray-50 hover:bg-gray-100 text-[#292926] text-sm font-bold rounded-xl border border-gray-200 transition-colors flex items-center gap-2 justify-center mt-2 sm:mt-0">
                  Booking <ExternalLink size={14}/>
                </a>
              </div>
            ))}
          </div>

          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <Star size={24} style={{ color: colors.terracotta }} />
            Special occasion pick
          </h4>
          <div className="flex flex-col gap-4 mb-10">
            {[
              { name: "Villa Naomi Beach", rating: "9.0", price: "$68", note: "beachfront, pool, sea-view rooms", url: "https://www.booking.com/hotel/lk/villa-naomi-beach.html" }
            ].map((hotel, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between bg-white border border-gray-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow gap-4">
                <div>
                  <span className="font-extrabold text-lg text-[#292926] block sm:inline">{hotel.name}</span>
                  <span className="text-gray-500 text-sm sm:ml-2 block sm:inline">| rating <strong className="text-amber-600">{hotel.rating}</strong> | about <strong>{hotel.price}</strong> for 1 night</span>
                  {hotel.note && <p className="text-sm text-gray-500 mt-1 mb-0 italic"><strong>Note:</strong> {hotel.note}</p>}
                </div>
                <a href={hotel.url} target="_blank" rel="noopener noreferrer" className="shrink-0 px-5 py-2 bg-gray-50 hover:bg-gray-100 text-[#292926] text-sm font-bold rounded-xl border border-gray-200 transition-colors flex items-center gap-2 justify-center mt-2 sm:mt-0">
                  Booking <ExternalLink size={14}/>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* 12.4 Where and what to eat */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>12.4</span> 
            Where and what to eat
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            Weligama is one of those places where you can rarely go wrong with food. Most people on this stretch make really good food, but these are the picks I would personally keep in mind.
          </p>

          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <Sun size={24} style={{ color: colors.yellow }} />
            Beach club and daytime pick
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { name: "Kai Beach Pool Club", desc: "the best day-use food-and-drinks pick if you want a pool, beach, music, and a place you can actually stay for hours", price: "free entry", icon: Waves, bgColor: colors.yellow, map: "https://www.google.com/maps/search/?api=1&query=Kai+Beach+Pool+Club+Weligama" }
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
                    <span className="text-[#292926] font-bold text-sm bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">Price: {place.price}</span>
                    <button onClick={() => openMap(place.map)} className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors text-left">
                      <MapPin size={16}/> View on Map
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <Utensils size={24} style={{ color: colors.green }} />
            Local and easy value pick
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { name: "Rice and Spoon, Ahangama", desc: "one of the better simple Sri Lankan meal stops on this side if you want a proper local-style plate without overthinking it", price: "about $3 to $5 per person", icon: Soup, bgColor: colors.green, map: "https://www.google.com/maps/search/?api=1&query=Rice+and+Spoon+Ahangama" },
              { name: "Curry Gedara House, Mirissa", desc: "a buffet-style Sri Lankan meal stop with many curries, rice, and papadums, and one of the better cheap local meals on this side", price: "about $4.77 per person", icon: Utensils, bgColor: colors.terracotta, map: "https://www.google.com/maps/search/?api=1&query=Curry+Gedara+Mirissa" }
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

          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <Coffee size={24} style={{ color: colors.charcoal }} />
            Cafés and restaurants
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { name: "NOMAD Café", desc: "one of the nicest Weligama café stops for brunch, coffee, and a slower meal in town", icon: Coffee, bgColor: colors.charcoal, map: "https://www.google.com/maps/search/?api=1&query=Nomad+Cafe+Weligama" },
              { name: "PLAN B Weligama", desc: "a strong coffee-and-brunch stop in the center if you want a modern café with proper coffee and a coworking feel", price: "coffee currently runs roughly $2.40 to $4.80", icon: Coffee, bgColor: colors.yellow, map: "https://www.google.com/maps/search/?api=1&query=PLAN+B+Weligama" },
              { name: "Cactus Ahangama", desc: "a stylish nearby brunch or sunset-drinks stop if you want a different beach-café feel outside Weligama", icon: Utensils, bgColor: colors.terracotta, map: "https://www.google.com/maps/search/?api=1&query=Cactus+Ahangama" },
              { name: "Moochies Cafe & Restaurant", desc: "an easy casual stop to keep in mind around Weligama if you want another reliable meal option", icon: Coffee, bgColor: colors.green, map: "https://www.google.com/maps/search/?api=1&query=Moochies+Cafe+%26+Restaurant+Weligama" },
              { name: "Dulnetha Restaurant", desc: "a relaxed stop with food, pool, and cooking-class setup if you want something a little different from a standard café stop", icon: Flame, bgColor: colors.charcoal, map: "https://www.google.com/maps/search/?api=1&query=Dulnetha+Restaurant+Weligama" },
              { name: "Thileni's", desc: "another easy food stop to keep in mind on this stretch", icon: Soup, bgColor: colors.yellow, map: "https://www.google.com/maps/search/?api=1&query=Thileni%27s+Weligama" }
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
                    {place.price && <span className="text-[#292926] font-bold text-sm bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{place.price}</span>}
                    <button onClick={() => openMap(place.map)} className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors text-left">
                      <MapPin size={16}/> View on Map
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <Fish size={24} style={{ color: colors.terracotta }} />
            Beach restaurants
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { name: "Sea Soul, Ahangama", desc: "a strong beachside stop around the Kabalana side if you want food, drinks, and a good sunset finish after beach time", note: "one of the easiest food stops to pair with a Kabalana beach day", icon: Fish, bgColor: colors.terracotta, map: "https://www.google.com/maps/search/?api=1&query=Sea+Soul+Ahangama" },
              { name: "Wijaya Beach Restaurant", desc: "the easiest restaurant pairing with the Dalawella side if you want fish, pizza, and a relaxed sunset setting", icon: Flame, bgColor: colors.charcoal, map: "https://www.google.com/maps/search/?api=1&query=Wijaya+Beach+Restaurant" },
              { name: "Hakuna Matata, Ahangama", desc: "an easy casual nearby stop if you want one more relaxed meal outside Weligama", icon: Utensils, bgColor: colors.yellow, map: "https://www.google.com/maps/search/?api=1&query=Hakuna+Matata+Ahangama" },
              { name: "Petti Petti Mirissa", desc: "one of the nicer beachfront restaurant picks if you want a good menu, good views, a pool, and decent cocktails", icon: Star, bgColor: colors.green, map: "https://www.google.com/maps/search/?api=1&query=Petti+Petti+Mirissa" },
              { name: "CRUST AHANGAMA", desc: "one of the easier night picks nearby if you want pizza, music, and a livelier evening crowd", icon: Flame, bgColor: colors.terracotta, map: "https://www.google.com/maps/search/?api=1&query=CRUST+AHANGAMA" },
              { name: "Hotel de Uncles", desc: "another good evening stop right next to CRUST, with the same easy Ahangama-night feel", icon: Coffee, bgColor: colors.charcoal, map: "https://www.google.com/maps/search/?api=1&query=Hotel+de+Uncles+Ahangama" }
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
                    {place.note && <span className="text-xs text-gray-500 italic"><strong>Note:</strong> {place.note}</span>}
                    <button onClick={() => openMap(place.map)} className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors text-left">
                      <MapPin size={16}/> View on Map
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <Moon size={24} style={{ color: colors.charcoal }} />
            Evening spots in Ahangama
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { name: "Isle of Gelato", desc: "the easiest dessert stop to pair with the Ahangama evening stretch", icon: ShoppingBag, bgColor: colors.charcoal, map: "https://www.google.com/maps/search/?api=1&query=Isle+of+Gelato+Ahangama" },
              { name: "Lamana", desc: "better for a nightlife night than for a regular dinner, especially if your timing lines up with a Thursday", icon: Moon, bgColor: colors.terracotta, map: "https://www.google.com/maps/search/?api=1&query=Lamana+Ahangama" },
              { name: "The Doctor's House", desc: "a good place to party, especially on Wednesdays and Saturdays. It is about a 30-minute tuk-tuk ride away.", link: { text: "@the_doctors_house", url: "https://www.instagram.com/the_doctors_house/" }, icon: Flame, bgColor: colors.yellow, map: "https://www.google.com/maps/search/?api=1&query=The+Doctor%27s+House+Madiha" }
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
                    {place.link && (
                      <a href={place.link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-bold text-gray-500 hover:text-[#292926]">
                        <ExternalLink size={16}/> {place.link.text}
                      </a>
                    )}
                    <button onClick={() => openMap(place.map)} className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors text-left">
                      <MapPin size={16}/> View on Map
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 12.5 Best free beach picks */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>12.5</span> 
            Best free beach picks
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            Weligama works best when you use it as both a beach town and a base for nearby beach hopping. Treat the list below as a beach bank reference, then pick the beaches closest to you or the ones you have not done yet.
          </p>

          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <Waves size={24} style={{ color: colors.charcoal }} />
            Beach bank
          </h4>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: "Weligama Beach", desc: "the easiest everyday beach and the most practical choice for a simple town-beach day, beginner surf, and sunset walks", map: "https://www.google.com/maps/search/?api=1&query=Weligama+Beach" },
              { name: "Jungle Beach, Weligama side", desc: "a smaller and quieter beach stop if you want a more tucked-away beach feel without going too far", map: "https://www.google.com/maps/search/?api=1&query=Jungle+Beach+Weligama" },
              { name: "Kabalana Beach", desc: "the wider beach day option if you want more space, an easy family beach, and a stronger surf-beach feel", note: "beach beds are commonly available here, and Sea Soul is one of the easiest nearby food stops for sunset", map: "https://www.google.com/maps/search/?api=1&query=Kabalana+Beach" },
              { name: "Dalawella Beach", desc: "one of the best places on this coast to catch and see wild sea turtles", note: "access can feel a little hidden because you usually enter through hotels or narrow corridors from the road", map: "https://www.google.com/maps/search/?api=1&query=Dalawella+Beach" },
              { name: "Turtle Beach", desc: "another strong turtle stop on this side and a good one to pair with Mirissa and Coconut Tree Hill", map: "https://www.google.com/maps/search/?api=1&query=Turtle+Beach+Mirissa" },
              { name: "Secret Beach, Ahangama", desc: "the quieter free beach if you want one less obvious beach stop from Weligama", map: "https://www.google.com/maps/search/?api=1&query=Secret+Beach+Ahangama" },
              { name: "Secret Beach, Mirissa", desc: "the softer beach choice if you want a smaller lagoon-style setup that works well for younger kids too", map: "https://www.google.com/maps/search/?api=1&query=Secret+Beach+Mirissa" }
            ].map((beach, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-start justify-between bg-[#FAFAFA] border border-gray-100 p-5 rounded-2xl shadow-sm gap-4">
                <div>
                  <span className="font-extrabold text-lg text-[#292926] block">{beach.name}</span>
                  <span className="text-gray-600 text-sm leading-snug block mt-1">{beach.desc}</span>
                  {beach.note && <span className="text-gray-500 text-xs italic block mt-2"><strong>Note:</strong> {beach.note}</span>}
                </div>
                <button onClick={() => openMap(beach.map)} className="shrink-0 px-4 py-2 bg-white hover:bg-gray-50 text-blue-600 text-sm font-bold rounded-xl border border-gray-200 transition-colors flex items-center gap-2 justify-center mt-2 sm:mt-0">
                  <MapPin size={14}/> Map
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 12.6 Turtle hatchery list */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>12.6</span> 
            Turtle hatchery list
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            There are several hatcheries on this coast, so I would not lock in one blindly. The smart move is to message them on <strong>WhatsApp 1 to 2 days ahead</strong>, ask the price there first, and then you can still negotiate again when you arrive. It is about a <strong>20-minute drive</strong> from Weligama to this stretch, and it is best planned roughly around <strong>4:30 PM to sunset</strong>. On one visit, I got a <strong>50% discount</strong> when I arrived because they only had a few turtles that day, so plan to negotiate after your arrive.
          </p>

          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <Camera size={24} style={{ color: colors.green }} />
            Turtle hatchery bank
          </h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Sea Turtle Farm & Hatchery Koggala", note: "also has a small museum", location: "Koggala", phone: "+94 77 311 1365", map: "https://www.google.com/maps/search/?api=1&query=Sea+Turtle+Farm+and+Hatchery+Koggala" },
              { name: "Sea Turtle Hatchery Habaraduwa", location: "Habaraduwa", phone: "+94 77 783 6115", map: "https://www.google.com/maps/search/?api=1&query=Sea+Turtle+Hatchery+Habaraduwa" },
              { name: "Sea Turtle Hatchery & Conservation Center Habaraduwa", location: "Habaraduwa", phone: "+94 777 905 772", map: "https://www.google.com/maps/search/?api=1&query=Sea+Turtle+Hatchery+Conservation+Center+Habaraduwa" }
            ].map((hatchery, idx) => (
              <div key={idx} className="flex flex-col bg-[#FAFAFA] border border-gray-100 p-6 rounded-3xl shadow-sm gap-4 transition-transform hover:-translate-y-1">
                <div>
                  <span className="font-extrabold text-lg text-[#292926] block leading-tight mb-1">{hatchery.name}</span>
                  {hatchery.note && <span className="text-gray-500 text-xs italic block mb-3">({hatchery.note})</span>}
                </div>
                <div className="flex flex-col gap-2 mb-2 mt-auto">
                  <div className="flex items-center gap-2 text-gray-600 text-sm font-medium">
                    <MapPin size={14} className="text-terracotta-600"/> {hatchery.location}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm font-medium">
                    <Smartphone size={14} className="text-green-600"/> {hatchery.phone}
                  </div>
                </div>
                <button onClick={() => openMap(hatchery.map)} className="w-full px-4 py-2.5 bg-white hover:bg-gray-50 text-blue-600 text-sm font-bold rounded-xl border border-gray-200 transition-colors flex items-center gap-2 justify-center mt-2">
                  <MapPin size={14}/> View on Map
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 12.7 Day-by-day plan inside this city */}
        <div className="mb-16">
          {/* Day 1 */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
              <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>12.7.1</span> 
              Day one - Arrival day
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
              Coming from Ella, keep the first day easy. If the timing lines up well, the cleanest extra stop on the drive is the Elephant Transit Home, then the rest of the day should stay light with one easy beach stop.
              <br/><br/>
              Coming from Hiriketiya Beach, you will probably have more time to explore.
            </p>

            <h4 className="text-xl font-extrabold mb-8 flex items-center gap-3">
              <Compass size={24} style={{ color: colors.green }} />
              Recommendation
            </h4>
            <div className="bg-[#FAFAFA] border border-gray-100 rounded-[2.5rem] p-8 md:p-12">
              <ul className="space-y-10 relative before:absolute before:inset-0 before:ml-[11px] md:before:ml-[13px] before:-translate-x-px before:h-full before:w-[2px] before:bg-gray-200">
                {[
                  { name: "Elephant Transit Home on the way from Ella", desc: "the easier and cheaper elephant stop if you want to break the drive without turning the day into a full safari", effort: "very easy / quick stop", price: "about $5 plus tax per foreign adult and about $3 plus tax per child", note: "public feeding-viewing times are commonly listed at 10:30 AM, 2:30 PM, and 6:00 PM, so time your departure from Ella around that", color: colors.green, map: "https://www.google.com/maps/search/?api=1&query=Elephant+Transit+Home+Udawalawe", img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweomWM2NSSkvOI_A2B3mhVwJNS9iNukvGSf3fWupp_lXn6qDDilQ6Z-e_TkZNP6At_1Sv3v1LlTgKS7ssUoO0ELZzDvWgssD_IkOK5GeZwlWDaC1c5V1UGRXTScS7rp_SxuUcZqc=w800-h800-k-no" },
                  { name: "Easy first beach evening", desc: "choose one beach from the beach bank close to you and enjoy your first sunset by the beach", color: colors.yellow, img: "https://images.pexels.com/photos/35877451/pexels-photo-35877451.jpeg" },
                  { name: "Optional evening out if you still have energy", desc: "if it is Thursday, go to Lamana; otherwise do CRUST, Hotel de Uncles, and Isle of Gelato, and use it as a good chance to stop at Cargills hypermarket for snacks", color: colors.charcoal, img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweq2Pxk6MMfxnnAU63B3FGRP806CbITifGTgiK3NQQZZHwMq8fv3GsH1siE6w-Bp1aGTOesxJ1Oxreu3iOmJZRnMDtow6_7_4o28IHjHczNdXXl7S4SFie5YmdXdHytW5leqY0m4pQRzgdI=w800-h800-k-no" }
                ].map((stop, idx) => (
                  <li key={idx} className="relative pl-10 md:pl-14">
                    <div style={{ backgroundColor: stop.color }} className="absolute left-0 top-1.5 w-6 h-6 md:w-7 md:h-7 rounded-full border-4 border-[#FAFAFA] shadow-sm z-10"></div>
                    <div className="bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row overflow-hidden items-stretch">
                      
                      <div className="flex-1 flex flex-col p-6 md:p-8">
                        <h5 className="font-extrabold text-xl md:text-2xl mb-3">{stop.name}</h5>
                        {stop.desc && <p className="text-gray-600 text-lg mb-5">{stop.desc}</p>}
                        
                        <div className="space-y-3 mb-6 flex-grow">
                          {stop.effort && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">Effort:</strong> {stop.effort}</p>}
                          {stop.price && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">Price:</strong> {stop.price}</p>}
                          {stop.note && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">Note:</strong> {stop.note}</p>}
                        </div>
                        
                        {stop.map && (
                          <div className="flex flex-wrap gap-4 border-t border-gray-100 pt-5 mt-auto">
                            <button onClick={() => openMap(stop.map)} className="flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 text-left">
                              <MapPin size={16}/> View on Map
                            </button>
                          </div>
                        )}
                      </div>

                      <div className="md:w-2/5 lg:w-1/3 shrink-0 flex flex-col bg-gray-50 border-t md:border-t-0 md:border-l border-gray-100">
                        <img 
                          src={stop.img || "https://placehold.co/400x600/f8fafc/a1a1aa?text=Photo+Placeholder"} 
                          alt={stop.name} 
                          className="w-full h-48 md:h-full min-h-[200px] object-cover flex-1" 
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
              <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>12.7.2</span> 
              Day two - Kai day
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
              This is the day to pamper yourself a little after the longer and more active parts of the trip, if you arrived directly from Ella . Keep it simple, spend the day at <strong>Kai Beach Pool Club</strong>, and actually enjoy the slower beach part of the route properly.
            </p>

            <h4 className="text-xl font-extrabold mb-8 flex items-center gap-3">
              <Compass size={24} style={{ color: colors.green }} />
              Best way to do it
            </h4>
            <div className="bg-[#FAFAFA] border border-gray-100 rounded-[2.5rem] p-8 md:p-12">
              <ul className="space-y-10 relative before:absolute before:inset-0 before:ml-[11px] md:before:ml-[13px] before:-translate-x-px before:h-full before:w-[2px] before:bg-gray-200">
                {[
                  { name: "Kai Beach Pool Club", desc: "the best full daytime setup here if you want pool, beach, food, music, and a comfortable place to stay for hours", price: "free entry", color: colors.yellow, map: "https://www.google.com/maps/search/?api=1&query=Kai+Beach+Pool+Club+Weligama", img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqecUYgYLcy1llqAytnmfDo3pu0Q3iebYy37UVP9SO6mYjQ6kWk2VxUoS_LTLKs0AT-vIg7O19bmsAsv5jDk00jS9LiGIl29Szu_0mW8pDVTpG3A2F_O6ExKFAWmWnZJRTOpPbG=w800-h800-k-no" },
                  { name: "Late surf lesson at Weligama Beach or at Kai Beach Pool Club", desc: "a good add-on if you still want one active thing after the slower pool-club part of the day", effort: "easy to moderate", price: "about $12 to $27 per person depending on lesson style", note: "there are many surf schools right on the beach, and you really cannot go wrong on Weligama Beach. Kai Beach Pool Club also has surf lessons if you want, but it will usually be the more expensive option", color: colors.green, map: "https://www.google.com/maps/search/?api=1&query=Weligama+Beach", img: "https://images.pexels.com/photos/34714750/pexels-photo-34714750.jpeg" },
                  { name: "Optional second evening out", desc: "a good one to keep for this night if you skipped the earlier outing or want another livelier evening on this side of the coast", note: "Lamana works best on Thursdays. The Doctor's House is a good option on Wednesdays and Saturdays. Otherwise, keep it simple with CRUST, Hotel de Uncles, and Isle of Gelato. It is also a good chance to stop at Cargills there for groceries.", color: colors.charcoal, img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqPgN2Kj6AEjr8fWH8B_4SpKfl1irPqYA3nHXb8PWkXL9pLpxY-_kVtpw6BavhxyQ_tE7sbPjhqwfUoo0HS1SSI7gaOisgmUdok1-K-CveLz7YjjtC3CJG_ZqvE5MNBtYKBtHbn=w800-h800-k-no" }
                ].map((stop, idx) => (
                  <li key={idx} className="relative pl-10 md:pl-14">
                    <div style={{ backgroundColor: stop.color }} className="absolute left-0 top-1.5 w-6 h-6 md:w-7 md:h-7 rounded-full border-4 border-[#FAFAFA] shadow-sm z-10"></div>
                    <div className="bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row overflow-hidden items-stretch">
                      
                      <div className="flex-1 flex flex-col p-6 md:p-8">
                        <h5 className="font-extrabold text-xl md:text-2xl mb-3">{stop.name}</h5>
                        {stop.desc && <p className="text-gray-600 text-lg mb-5">{stop.desc}</p>}
                        
                        <div className="space-y-3 mb-6 flex-grow">
                          {stop.effort && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">Effort:</strong> {stop.effort}</p>}
                          {stop.price && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">Price:</strong> {stop.price}</p>}
                          {stop.note && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">Note:</strong> {stop.note}</p>}
                        </div>
                        
                        {stop.map && (
                          <div className="flex flex-wrap gap-4 border-t border-gray-100 pt-5 mt-auto">
                            <button onClick={() => openMap(stop.map)} className="flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 text-left">
                              <MapPin size={16}/> View on Map
                            </button>
                          </div>
                        )}
                      </div>

                      <div className="md:w-2/5 lg:w-1/3 shrink-0 flex flex-col bg-gray-50 border-t md:border-t-0 md:border-l border-gray-100">
                        <img 
                          src={stop.img || "https://placehold.co/400x600/f8fafc/a1a1aa?text=Photo+Placeholder"} 
                          alt={stop.name} 
                          className="w-full h-48 md:h-full min-h-[200px] object-cover flex-1" 
                        />
                      </div>

                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Day 3 */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
              <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>12.7.3</span> 
              Day three - Galle and Koggala side
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
              This is the fuller south-coast sightseeing day and the one I would do by car rather than by tuk-tuk. It is the cleanest way to fit the heritage side, the lake side, and one of the stronger coastal add-ons without wasting too much time between them.
            </p>

            <h4 className="text-xl font-extrabold mb-8 flex items-center gap-3">
              <Compass size={24} style={{ color: colors.green }} />
              Best way to do it
            </h4>
            <div className="bg-[#FAFAFA] border border-gray-100 rounded-[2.5rem] p-8 md:p-12">
              <ul className="space-y-10 relative before:absolute before:inset-0 before:ml-[11px] md:before:ml-[13px] before:-translate-x-px before:h-full before:w-[2px] before:bg-gray-200">
                {[
                  { name: "Galle Fort", desc: "the main heritage outing from Weligama and one of the easiest non-beach half-days on this stretch of the coast", effort: "easy / low", price: "Free", note: "from Weligama, it is about 29 km and usually about 30 to 50 minutes by road; best done with a driver or PickMe car rather than a tuk-tuk", color: colors.yellow, map: "https://www.google.com/maps/search/?api=1&query=Galle+Fort", img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepd2_02k19biPNPcrCsihqTR46MAh4JlOuYHcwGhjoGCkIVI2Q_8BcSKfcMQbC3P_muL_zZfQyPe7A-JYPLtT4VRYogxeQoNq9Ho8Hds307j3eKCpys-NiTLZixX-e2sVtoatj9zMEx2wA=w800-h800-k-no" },
                  { name: "Koggala Lake boat safari", desc: "the best nature add-on on this side if you want mangroves, birdlife, and the usual Cinnamon Island stop", effort: "easy / low", price: "usually about $12 to $28 depending on the style of boat and inclusions", note: "some operators keep it simple, while others also add a cinnamon stop or local-experience element, so ask what is actually included before booking", color: colors.green, map: "https://www.google.com/maps/search/?api=1&query=Koggala+Lake", img: "https://lakpura.com/cdn/shop/products/LK76030100-08-E.jpg?v=1745305299" },
                  { name: "Koggala Lake kayaking or canoe-style paddle", desc: "the better add-on if you want the quieter paddle version instead of only doing the motorboat", effort: "easy to moderate", price: "usually about $14 to $20 depending on guided or self-guided setup", note: "this is the narrow one- or two-seat paddle activity people often mean when they talk about exploring the lake more quietly. Best to contact them first before arriving.", options: [ { text: "Koggala Lake Boat Safari & Adventure Kayaking No:09", url: "https://maps.app.goo.gl/ecAMDqaAVxkHwLns9" }, { text: "Koggala Lake Boat Safari & Kayak Adventure with Malish", url: "https://maps.app.goo.gl/uF4TzfvQLuiLHh4L7" }, { text: "Thilan's Kayaking and Boat Experience at Koggala Lagoon", url: "https://maps.app.goo.gl/S2ktVbHewG5NjZTk6" } ], color: colors.charcoal, map: "https://www.google.com/maps/search/?api=1&query=Koggala+Lake+Kayaking", img: "https://lh3.googleusercontent.com/p/AF1QipNG90mT558l14n3h_UN3BHEpEQsExr6q-L9luuK=w800-h800-k-no" },
                  { name: "Optional: The Doctor's House for an evening out", desc: "a good place to party if you want one more proper outing on this side of the coast on Wednesdays and Saturdays", link: { text: "@the_doctors_house", url: "https://www.instagram.com/the_doctors_house/" }, color: colors.terracotta, map: "https://www.google.com/maps/search/?api=1&query=The+Doctor%27s+House+Madiha", img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweo1ugr8SPbZwNB4T2vVj-l-BnA3wL5gPf5tIkjUsEoW2tItWOGRXPtYArrAIkaWS7CeatbT1WZyemyK88VLoggh1jzn7s3BX3ntKX3Z3hIonfNINU0QczQf4g_WTSgdd5pUtLNz=w800-h800-k-no" }
                ].map((stop, idx) => (
                  <li key={idx} className="relative pl-10 md:pl-14">
                    <div style={{ backgroundColor: stop.color }} className="absolute left-0 top-1.5 w-6 h-6 md:w-7 md:h-7 rounded-full border-4 border-[#FAFAFA] shadow-sm z-10"></div>
                    <div className="bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row overflow-hidden items-stretch">
                      
                      <div className="flex-1 flex flex-col p-6 md:p-8">
                        <h5 className="font-extrabold text-xl md:text-2xl mb-3">{stop.name}</h5>
                        {stop.desc && <p className="text-gray-600 text-lg mb-5">{stop.desc}</p>}
                        
                        <div className="space-y-3 mb-6 flex-grow">
                          {stop.effort && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">Effort:</strong> {stop.effort}</p>}
                          {stop.price && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">Price:</strong> {stop.price}</p>}
                          {stop.note && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">Note:</strong> {stop.note}</p>}
                        </div>
                        
                        <div className="flex flex-col gap-3 border-t border-gray-100 pt-5 mt-auto">
                          {stop.options && (
                            <>
                              <span className="font-bold text-[#292926] text-sm">Extra map options:</span>
                              {stop.options.map((opt, oIdx) => (
                                <a key={oIdx} href={opt.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 text-left leading-tight">
                                  <MapPin size={14} className="shrink-0"/> {opt.text}
                                </a>
                              ))}
                            </>
                          )}
                          {stop.link && (
                            <a href={stop.link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-bold text-gray-500 hover:text-[#292926]">
                              <ExternalLink size={16}/> {stop.link.text}
                            </a>
                          )}
                          {stop.map && !stop.options && (
                            <button onClick={() => openMap(stop.map)} className="flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 text-left">
                              <MapPin size={16}/> View on Map
                            </button>
                          )}
                        </div>
                      </div>

                      <div className="md:w-2/5 lg:w-1/3 shrink-0 flex flex-col bg-gray-50 border-t md:border-t-0 md:border-l border-gray-100">
                        <img 
                          src={stop.img || "https://placehold.co/400x600/f8fafc/a1a1aa?text=Photo+Placeholder"} 
                          alt={stop.name} 
                          className="w-full h-48 md:h-full min-h-[200px] object-cover flex-1" 
                        />
                      </div>

                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Day 4 */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
              <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>12.7.4</span> 
              Day four - Mirissa and turtle coast day
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
              This is the turtle-and-beach day, and I would build it around Mirissa first, then the turtle side later in the day once you already know which hatchery you are actually using.
            </p>

            <h4 className="text-xl font-extrabold mb-8 flex items-center gap-3">
              <Compass size={24} style={{ color: colors.green }} />
              Good options
            </h4>
            <div className="bg-[#FAFAFA] border border-gray-100 rounded-[2.5rem] p-8 md:p-12">
              <ul className="space-y-10 relative before:absolute before:inset-0 before:ml-[11px] md:before:ml-[13px] before:-translate-x-px before:h-full before:w-[2px] before:bg-gray-200">
                {[
                  { name: "Mirissa Beach", desc: "a good beach first half if you want a prettier classic beach setup before moving on to the turtle side later. Keep it simple here and use the beach bank if you prefer a different beach.", color: colors.yellow, map: "https://www.google.com/maps/search/?api=1&query=Mirissa+Beach", img: "https://images.pexels.com/photos/35511613/pexels-photo-35511613.jpeg" },
                  { name: "Coconut Tree Hill", desc: "a very easy Mirissa photo stop close to Mirissa Beach and one of the nicest quick viewpoints on this side of the coast", color: colors.green, map: "https://www.google.com/maps/search/?api=1&query=Coconut+Tree+Hill+Mirissa", img: "https://images.pexels.com/photos/1005417/pexels-photo-1005417.jpeg" },
                  { name: "Optional: Parrot Rock", desc: "a quick Mirissa add-on if you want one more photo stop and a higher view over the beach", effort: "easy / short stop", price: "Free", note: "best at low tide when the crossing is easier; at high tide the water gets deeper and the rocks can be more slippery", color: colors.charcoal, map: "https://www.google.com/maps/search/?api=1&query=Parrot+Rock+Mirissa", img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqJWbQhIO4ydD0ERgfZlmxPeTBuXIY46mFp4L2JgdpPNg8R09Ln-y3HQDvui-Wmz80D8R2CSWDX3laNb88uO0RGJlcMDKp4L7akviBtTmvO62xbazIGBSHuEvhhF0Hd7gYm9rvu=w800-h800-k-no" },
                  { name: "Turtle hatchery near sunset", desc: "the better timing is later in the day, after you have already contacted the hatcheries ahead of time to see which one actually has hatchlings or releases happening", note: "use the turtle hatchery bank above and plan this roughly around 4:30 PM to sunset", color: colors.terracotta, img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoeXhOlBqXfQMWIHvvrplwv0qasjBilaitBkMnLqPMqEfwBqoKa1YEiBa2lscGrK1yrA2jcBLHgwtaPAytDWHYEIsinIlLBIE8jr-ycJns0i_ee7-vPZJ34LzC6T4PV1atrC0Yp=w800-h800-k-no" },
                  { name: "Dalawella turtle side beach and Wijaya Beach Restaurant", desc: "a relaxed finish if you want one last turtle-coast stop and then an easy dinner by the water", note: "stay to the side of large turtles, not directly in front of them, because a wave can push them into your legs", options: [ { text: "Dalawella Beach", url: "https://www.google.com/maps/search/?api=1&query=Dalawella+Beach" }, { text: "Wijaya Beach Restaurant", url: "https://www.google.com/maps/search/?api=1&query=Wijaya+Beach+Restaurant" } ], color: colors.green, img: "https://images.unsplash.com/photo-1526344966-89049886b28d?q=80&w=800" }
                ].map((stop, idx) => (
                  <li key={idx} className="relative pl-10 md:pl-14">
                    <div style={{ backgroundColor: stop.color }} className="absolute left-0 top-1.5 w-6 h-6 md:w-7 md:h-7 rounded-full border-4 border-[#FAFAFA] shadow-sm z-10"></div>
                    <div className="bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row overflow-hidden items-stretch">
                      
                      <div className="flex-1 flex flex-col p-6 md:p-8">
                        <h5 className="font-extrabold text-xl md:text-2xl mb-3">{stop.name}</h5>
                        {stop.desc && <p className="text-gray-600 text-lg mb-5">{stop.desc}</p>}
                        
                        <div className="space-y-3 mb-6 flex-grow">
                          {stop.effort && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">Effort:</strong> {stop.effort}</p>}
                          {stop.price && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">Price:</strong> {stop.price}</p>}
                          {stop.note && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">Note:</strong> {stop.note}</p>}
                        </div>
                        
                        <div className="flex flex-col gap-3 border-t border-gray-100 pt-5 mt-auto">
                          {stop.options && (
                            <>
                              {stop.options.map((opt, oIdx) => (
                                <button key={oIdx} onClick={() => openMap(opt.url)} className="flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 text-left leading-tight">
                                  <MapPin size={14} className="shrink-0"/> View {opt.text} on Map
                                </button>
                              ))}
                            </>
                          )}
                          {stop.map && !stop.options && (
                            <button onClick={() => openMap(stop.map)} className="flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 text-left">
                              <MapPin size={16}/> View on Map
                            </button>
                          )}
                        </div>
                      </div>

                      <div className="md:w-2/5 lg:w-1/3 shrink-0 flex flex-col bg-gray-50 border-t md:border-t-0 md:border-l border-gray-100">
                        <img 
                          src={stop.img || "https://placehold.co/400x600/f8fafc/a1a1aa?text=Photo+Placeholder"} 
                          alt={stop.name} 
                          className="w-full h-48 md:h-full min-h-[200px] object-cover flex-1" 
                        />
                      </div>

                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 12.7.5 Optional higher-cost swap - Udawalawe safari */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
              <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>12.7.5</span> 
              Optional higher-cost swap - Udawalawe safari
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
              If wildlife matters more to you than another beach day, this is the cleanest full-day swap from Weligama. I would treat it as the pricier optional day rather than the default plan.
            </p>

            <h4 className="text-xl font-extrabold mb-8 flex items-center gap-3">
              <Compass size={24} style={{ color: colors.green }} />
              Recommendation
            </h4>
            <div className="bg-[#FAFAFA] border border-gray-100 rounded-[2.5rem] p-8 md:p-12">
              <ul className="space-y-10 relative before:absolute before:inset-0 before:ml-[11px] md:before:ml-[13px] before:-translate-x-px before:h-full before:w-[2px] before:bg-gray-200">
                {[
                  { name: "Udawalawe National Park safari from Weligama and back", desc: "the best elephant-focused safari option from this base if you want the full park experience rather than only the transit home", effort: "low physical / long day", price: "organized trips usually start around $105 to $147 per person", note: "the drive is usually about 2 to 2.5 hours each way, so expect a very early start and a long return day", options: [ { text: "Asia Someday", url: "https://asiasomeday.com/" }, { text: "India Someday", url: "https://indiasomeday.com/" } ], color: colors.terracotta, map: "https://www.google.com/maps/search/?api=1&query=Udawalawe+National+Park", img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerEacIdmJqg8JsdRw_6bhsCGqb7y4Z0-ljcocOf5mYBmyAWcfcdPrJqj-Q9fMNdNKX4qJdtnFTU6hOzvA3VnkGglAXQEdKUyn2E2_4GnEIPcvXtO7c00eZL7YNoepgnXEdGX-di_w=w800-h800-k-no" }
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
                        
                        <div className="flex flex-col gap-3 border-t border-gray-100 pt-5 mt-auto">
                          {stop.options && (
                            <>
                              <span className="font-bold text-[#292926] text-sm">Booking:</span>
                              {stop.options.map((opt, oIdx) => (
                                <a key={oIdx} href={opt.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-bold text-gray-500 hover:text-[#292926] text-left leading-tight">
                                  <ExternalLink size={14} className="shrink-0"/> {opt.text}
                                </a>
                              ))}
                            </>
                          )}
                          {stop.map && (
                            <button onClick={() => openMap(stop.map)} className="flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 text-left mt-2">
                              <MapPin size={16}/> View on Map
                            </button>
                          )}
                        </div>
                      </div>

                      <div className="md:w-2/5 lg:w-1/3 shrink-0 flex flex-col bg-gray-50 border-t md:border-t-0 md:border-l border-gray-100">
                        <img 
                          src={stop.img || "https://placehold.co/400x600/f8fafc/a1a1aa?text=Photo+Placeholder"} 
                          alt={stop.name} 
                          className="w-full h-48 md:h-full min-h-[200px] object-cover flex-1" 
                        />
                      </div>

                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 12.7.6 Quick notes */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
              <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>12.7.6</span> 
              Quick notes for Weligama
            </h3>
            <div className="bg-yellow-50 border border-yellow-100 p-8 rounded-[2rem]">
              <h4 className="text-xl font-extrabold mb-5 flex items-center gap-3" style={{ color: colors.yellow }}>
                <Info size={24} />
                Keep in mind
              </h4>
              <ul className="space-y-4">
                {[
                  { text: "PickMe does not always work easily with tuk-tuks here, so it is often better to stop one on the street, agree the fee first, and save a few driver numbers from your hotel", label: "Getting around:" },
                  { text: "for nearby areas, a street tuk-tuk is often around 500 to 1,000 LKR, and for longer hops a car can cost about the same, so it is better to book a car on PickMe", label: "Car note:" },
                  { text: "I would not recommend renting a scooter here unless you are already a very confident rider; rules for foreign drivers have tightened, and these roads are fast and not forgiving", label: "Scooter note:" },
                  { text: "do not feed or touch wild turtles", label: "Turtle note:" },
                  { text: "I would skip the whale cruise here. It is expensive, starts very early, and for many travelers it feels like a tourist trap for a very brief and distant sighting", label: "Whale note:" }
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

        {/* 12.8 Estimated activity and stay cost */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>12.8</span> 
            Estimated activity and stay cost
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            This is a rough reference <strong>per person</strong>, assuming <strong>2 people sharing a room for 3 nights</strong>, with intercity transport left out.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div style={{ backgroundColor: colors.green, boxShadow: customShadow }} className="p-8 rounded-[2rem] text-white flex flex-col transition-transform hover:-translate-y-1">
              <span className="font-bold uppercase tracking-widest text-xs text-white/70 mb-4 block">Budget Version</span>
              <span className="text-3xl lg:text-4xl font-extrabold mb-6">about $45 to $75<span className="text-sm font-medium text-white/70 block mt-2 tracking-normal normal-case">per person total</span></span>
              <p className="text-sm text-white/90 leading-relaxed mt-auto pt-6 border-t border-white/20">
                <strong>Includes:</strong> Budget stay + local meals + free beach days + Galle Fort
              </p>
            </div>

            <div style={{ backgroundColor: colors.charcoal, boxShadow: customShadow }} className="p-8 rounded-[2rem] text-white flex flex-col transition-transform hover:-translate-y-1">
              <span className="font-bold uppercase tracking-widest text-xs text-white/70 mb-4 block">Mid-range Version</span>
              <span className="text-3xl lg:text-4xl font-extrabold mb-6">about $65 to $110<span className="text-sm font-medium text-white/70 block mt-2 tracking-normal normal-case">per person total</span></span>
              <p className="text-sm text-white/90 leading-relaxed mt-auto pt-6 border-t border-white/20">
                <strong>Includes:</strong> Budget stay + one Kai day + one stronger dinner + main free sights
              </p>
            </div>

            <div className="md:col-span-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-50 border border-gray-100 rounded-[2rem] flex flex-col">
                <span className="font-bold text-[#292926] block mb-2">Add Elephant Transit Home:</span>
                <span className="text-terracotta-600 font-extrabold">add about $5 plus tax<span className="text-xs font-normal text-gray-500 ml-1">/ per adult</span></span>
              </div>
              <div className="p-6 bg-gray-50 border border-gray-100 rounded-[2rem] flex flex-col">
                <span className="font-bold text-[#292926] block mb-2">Add surf lesson:</span>
                <span className="text-blue-600 font-extrabold">add about $12 to $25<span className="text-xs font-normal text-gray-500 ml-1">/ person</span></span>
              </div>
              <div className="p-6 bg-gray-50 border border-gray-100 rounded-[2rem] flex flex-col">
                <span className="font-bold text-[#292926] block mb-2">Add Koggala Lake boat safari:</span>
                <span className="text-yellow-600 font-extrabold">add about $12 to $28<span className="text-xs font-normal text-gray-500 ml-1">/ person</span></span>
              </div>
              <div className="p-6 bg-gray-50 border border-gray-100 rounded-[2rem] flex flex-col">
                <span className="font-bold text-[#292926] block mb-2">Add Koggala Lake kayaking:</span>
                <span className="text-green-600 font-extrabold">add about $14 to $20<span className="text-xs font-normal text-gray-500 ml-1">depending on setup</span></span>
              </div>
              <div className="p-6 bg-gray-50 border border-gray-100 rounded-[2rem] flex flex-col">
                <span className="font-bold text-[#292926] block mb-2">Add Udawalawe safari:</span>
                <span className="text-charcoal-600 font-extrabold">add about $105 to $147<span className="text-xs font-normal text-gray-500 ml-1">/ person</span></span>
              </div>
            </div>
          </div>
        </div>

        {/* 12.9 Last day */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>12.9</span> 
            Last day - Weligama to the airport direct
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            For most travelers, the cleanest finish is to make Weligama the final stop and go straight to the airport on flight day. It keeps the route simple, avoids one more hotel change, and lets you use the south coast properly before heading home.
          </p>

          <h4 className="text-xl font-extrabold mb-8 flex items-center gap-3">
            <Compass size={24} style={{ color: colors.green }} />
            Best way to do it
          </h4>
          <div className="bg-[#FAFAFA] border border-gray-100 rounded-[2.5rem] p-8 md:p-12">
            <ul className="space-y-10 relative before:absolute before:inset-0 before:ml-[11px] md:before:ml-[13px] before:-translate-x-px before:h-full before:w-[2px] before:bg-gray-200">
              {[
                { name: "Private car straight to Bandaranaike International Airport", desc: "the best overall option for a same-day departure because it is the simplest and least stressful", effort: "very easy / low", timing: "usually allow about 3 to 3.5 hours on the road with buffer, even if the drive can be quicker on a clear run", bookingNote: "ask your Weligama hotel to arrange the car the day before, or book a known transfer in advance", bestFor: "morning, midday, or evening international departures when you want the most reliable option", color: colors.terracotta },
                { name: "Train option to Colombo", desc: "the cheapest option", route: "Weligama to Colombo Fort by train, then continue to the airport area by taxi or airport connection", timing: "usually about 2.5 to 3 hours by train, then about 30 minutes to 1 hour more to the airport area depending on traffic", price: "between $1 and $5", options: [ { text: "Sri Lanka Railways schedule search", url: "https://eservices.railway.gov.lk/schedule/searchTrain.action?lang=en" }, { text: "Sri Lanka Railways seat reservation system", url: "https://seatreservation.railway.gov.lk/" } ], color: colors.green }
              ].map((stop, idx) => (
                <li key={idx} className="relative pl-10 md:pl-14">
                  <div style={{ backgroundColor: stop.color }} className="absolute left-0 top-1.5 w-6 h-6 md:w-7 md:h-7 rounded-full border-4 border-[#FAFAFA] shadow-sm z-10"></div>
                  <div className="bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row overflow-hidden items-stretch">
                    
                    <div className="flex-1 flex flex-col p-6 md:p-8">
                      <h5 className="font-extrabold text-xl md:text-2xl mb-3">{stop.name}</h5>
                      {stop.desc && <p className="text-gray-600 text-lg mb-5">{stop.desc}</p>}
                      
                      <div className="space-y-3 mb-6 flex-grow">
                        {stop.route && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">Route:</strong> {stop.route}</p>}
                        {stop.effort && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">Effort:</strong> {stop.effort}</p>}
                        {stop.timing && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">Timing:</strong> {stop.timing}</p>}
                        {stop.price && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">Price:</strong> {stop.price}</p>}
                        {stop.bookingNote && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">Booking note:</strong> {stop.bookingNote}</p>}
                        {stop.bestFor && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">Best for:</strong> {stop.bestFor}</p>}
                      </div>
                      
                      {stop.options && (
                        <div className="flex flex-col gap-3 border-t border-gray-100 pt-5 mt-auto">
                          <span className="font-bold text-[#292926] text-sm">Official websites:</span>
                          {stop.options.map((opt, oIdx) => (
                            <a key={oIdx} href={opt.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-bold text-gray-500 hover:text-[#292926] text-left leading-tight">
                              <ExternalLink size={14} className="shrink-0"/> {opt.text}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ backgroundColor: colors.yellow + '15', borderColor: colors.yellow + '30' }} className="p-6 md:p-8 rounded-3xl border flex gap-5 items-start mt-8">
            <Info size={24} style={{ color: colors.yellow }} className="shrink-0 mt-0.5" />
            <div>
              <span className="block font-black text-[10px] mb-2 uppercase tracking-[0.1em]" style={{ color: colors.yellow }}>Smart tip</span>
              <p className="text-[#292926] font-medium text-lg m-0">
                Keep the final Weligama night easy. Have dinner near your hotel, settle the room bill the night before when possible, and pack fully before sleeping so departure morning stays simple.
              </p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};
       

export default WeligamaPage;
