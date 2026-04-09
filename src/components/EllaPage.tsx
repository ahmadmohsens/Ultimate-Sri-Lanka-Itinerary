import React from 'react';
import { 
  Train,
  Car,
  Route,
  ExternalLink,
  Backpack,
  BedDouble,
  Building2,
  Utensils,
  Flame,
  Leaf,
  Coffee,
  Soup,
  ShoppingBag,
  Star,
  Compass,
  MapPin,
  Info,
  CheckCircle2
} from 'lucide-react';

import LocationMap from './LocationMap';

interface EllaPageProps {
  colors: {
    green: string;
    yellow: string;
    terracotta: string;
    beige: string;
    charcoal: string;
  };
  openMap: (query: string) => void;
  ellaMapLocations: any[];
}

const EllaPage: React.FC<EllaPageProps> = ({ colors, openMap, ellaMapLocations }) => {
  const customShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.03)";

  return (
    <div className="animate-in slide-in-from-right duration-700">
      
      {/* Chapter Image Banner */}
      <section style={{ boxShadow: customShadow }} className="bg-white border border-gray-50 rounded-[2.5rem] overflow-hidden mb-8">
        <div className="relative h-[450px] w-full">
          <img 
            src="https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Ella Nine Arch Bridge" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#292926]/90 via-[#292926]/30 to-transparent"></div>
          <div className="absolute bottom-12 left-12 md:bottom-16 md:left-14 text-white">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block text-white/70">
              Chapter 10
            </span>
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none">
              Ella
            </h2>
          </div>
        </div>
      </section>

      <section style={{ boxShadow: customShadow }} className="bg-white border border-gray-50 rounded-[2.5rem] overflow-hidden mb-8 p-8 md:p-14">
        
        {/* 10.1 City overview */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>10.1</span> 
            City overview
          </h3>
          <div className="text-lg text-gray-600 leading-relaxed max-w-4xl space-y-4">
            <p>
              Ella is one of my personal favorite stops in Sri Lanka because it gives you both sides of the trip in one place. It has a lively little town with good food, coffee, smoothie bowls, shops, and a bit of a Bali feel, but it is also surrounded by big trees, viewpoints, temples, and scenic walks.
            </p>
            <p className="font-medium text-[#292926]">
              For this trip, Ella is very doable in <strong>2 nights</strong>, but ideally give it <strong>3 nights</strong> if you want to do most of the hikes, one temple stop, and a few extra activities without rushing.
            </p>
          </div>
        </div>

        {/* 10.2 How to get here */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>10.2</span> 
            How to get here
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            Coming from Kandy, Ella is one of the prettiest transfers in the route. The full train is the classic option if you book early, while the drive-to-Ambewela-and-train plan is a very common workaround for travelers who already have a driver and still want the scenic last stretch into Ella.
          </p>

          <h4 className="text-xl font-extrabold mb-6">Main ways to arrive</h4>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
               <div className="flex items-center gap-3 mb-4">
                 <div className="p-3 rounded-xl shrink-0" style={{ backgroundColor: colors.green + '15', color: colors.green }}>
                   <Train size={24} />
                 </div>
                 <h5 className="font-extrabold text-lg leading-tight">Train from Kandy</h5>
               </div>
               <div className="space-y-3 mt-auto">
                 <p className="text-gray-600 m-0 text-sm">usually about <strong className="text-[#292926]">6 to 7 hours</strong> and still the best choice if you want the classic hill-country ride.</p>
                 <p className="text-gray-600 m-0 text-sm"><strong className="text-[#292926]">Booking note:</strong> reserve early if you want reserved seats; tickets on the Kandy to Ella route can sell out quickly.</p>
                 <p className="text-gray-600 m-0 text-sm"><strong className="text-[#292926]">Seat note:</strong> many travelers prefer the <strong>left side</strong> for the later scenic stretches into Ella.</p>
                 <p className="text-terracotta-600 m-0 text-sm"><strong className="text-terracotta-700">Safety note:</strong> enjoy the train, but do not lean out of the door for photos; there have been serious tourist accidents on this route.</p>
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
                 <h5 className="font-extrabold text-lg leading-tight">Private car or taxi all the way</h5>
               </div>
               <div className="space-y-3 mt-auto">
                 <p className="text-gray-600 m-0 text-sm">usually about <strong className="text-[#292926]">4.5 to 5 hours</strong>, depending on traffic and stops.</p>
                 <p className="text-gray-600 m-0 text-sm"><strong className="text-[#292926]">Note:</strong> easiest door-to-door option, but you miss the train section people usually come here for.</p>
               </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
               <div className="flex items-center gap-3 mb-4">
                 <div className="p-3 rounded-xl shrink-0" style={{ backgroundColor: colors.charcoal + '15', color: colors.charcoal }}>
                   <Route size={24} />
                 </div>
                 <h5 className="font-extrabold text-lg leading-tight">Drive to Ambewela, then train</h5>
               </div>
               <div className="space-y-3 mt-auto">
                 <p className="text-gray-600 m-0 text-sm">usually about <strong className="text-[#292926]">1.5 to 3.5 hours by road</strong> to Ambewela, then about <strong className="text-[#292926]">1 hour 50 minutes by train</strong> to Ella.</p>
                 <p className="text-gray-600 m-0 text-sm"><strong className="text-[#292926]">Note:</strong> this is a common plan when you already have a driver; the driver drops you at Ambewela, you take the scenic train into Ella, then get picked up again in Ella.</p>
                 <div className="mt-4 pt-4 border-t border-gray-100">
                    <a href="https://seatreservation.railway.gov.lk/" target="_blank" rel="noopener noreferrer" className="text-sm font-bold flex items-center gap-1.5 hover:opacity-70 transition-opacity" style={{ color: colors.charcoal }}>
                      Sri Lanka Railways <ExternalLink size={14} />
                    </a>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* 10.3 Where to stay */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>10.3</span> 
            Where to stay
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            For Ella, I would stay close enough to town that meals and the station stay easy, but I would happily stay a few minutes farther from the center if that gets you one of the beautiful hill views that make sleeping in Ella worth it. The picks below are the ones I would personally consider staying in with my family.
          </p>

          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <Backpack size={24} style={{ color: colors.charcoal }} />
            Hostel pick (if I’m solo)
          </h4>
          <div className="flex flex-col gap-4 mb-10">
            {[
              { name: "Wild Bee Hostel", rating: "9.2", price: "dorms from about $7 per bed", url: "https://www.booking.com/hotel/lk/wild-bee-hostel.html" }
            ].map((hotel, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between bg-white border border-gray-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow gap-4">
                <div>
                  <span className="font-extrabold text-lg text-[#292926] block sm:inline">{hotel.name}</span>
                  <span className="text-gray-500 text-sm sm:ml-2 block sm:inline">| rating <strong className="text-amber-600">{hotel.rating}</strong> | <strong>{hotel.price}</strong></span>
                </div>
                <a href={hotel.url} target="_blank" rel="noopener noreferrer" className="shrink-0 px-5 py-2 bg-gray-50 hover:bg-gray-100 text-[#292926] text-sm font-bold rounded-xl border border-gray-200 transition-colors flex items-center gap-2 justify-center mt-2 sm:mt-0">
                  Booking <ExternalLink size={14}/>
                </a>
              </div>
            ))}
          </div>

          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <BedDouble size={24} style={{ color: colors.green }} />
            Comfortable hotel picks
          </h4>
          <div className="flex flex-col gap-4 mb-10">
            {[
              { name: "Ollie Resort Ella", rating: "8.4", price: "$22", url: "https://www.booking.com/hotel/lk/ollie-resort-ella.html" },
              { name: "The Ella Walkers Nest", rating: "8.7", price: "$22", url: "https://www.booking.com/hotel/lk/the-ella-walkers-nest.html" },
              { name: "Ella Green Stay", rating: "8.9", price: "$23", url: "https://www.booking.com/hotel/lk/ella-green-stay.html" },
              { name: "Hidden Slope Cottage", rating: "9.0", price: "$25", url: "https://www.booking.com/hotel/lk/hidden-slope-cottage.html" },
              { name: "Every View Homestay", rating: "9.0", price: "$29", url: "https://www.booking.com/hotel/lk/every-view-homestay.html" },
              { name: "Minthu Homestay", rating: "9.0", price: "$30", url: "https://www.booking.com/hotel/lk/minthu-homestay.html" },
              { name: "Green Village", rating: "9.1", price: "$30", url: "https://www.booking.com/hotel/lk/green-village.html" },
              { name: "7th Hill Guesthouse", rating: "9.4", price: "$31", url: "https://www.booking.com/hotel/lk/7th-hill-guesthouse.html" },
              { name: "Solace Ella", rating: "8.7", price: "$32", url: "https://www.booking.com/hotel/lk/solace.html" },
              { name: "Ella Relax Inn", rating: "9.3", price: "$33", url: "https://www.booking.com/hotel/lk/ella-relax-inn-with-beautiful-mountain-view.html" }
            ].map((hotel, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between bg-white border border-gray-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow gap-4">
                <div>
                  <span className="font-extrabold text-lg text-[#292926] block sm:inline">{hotel.name}</span>
                  <span className="text-gray-500 text-sm sm:ml-2 block sm:inline">| rating <strong className="text-amber-600">{hotel.rating}</strong> | about <strong>{hotel.price}</strong> for 1 night</span>
                </div>
                <a href={hotel.url} target="_blank" rel="noopener noreferrer" className="shrink-0 px-5 py-2 bg-gray-50 hover:bg-gray-100 text-[#292926] text-sm font-bold rounded-xl border border-gray-200 transition-colors flex items-center gap-2 justify-center mt-2 sm:mt-0">
                  Booking <ExternalLink size={14}/>
                </a>
              </div>
            ))}
          </div>

          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <Building2 size={24} style={{ color: colors.terracotta }} />
            Mid-high range hotel picks
          </h4>
          <div className="flex flex-col gap-4 mb-10">
            {[
              { name: "Pearl View Guesthouse", rating: "8.6", price: "$38", url: "https://www.booking.com/hotel/lk/purl-view-guesthouse.html" },
              { name: "Namara Green Ella", rating: "8.4", price: "$94", url: "https://www.booking.com/hotel/lk/namara-green-ella.html" }
            ].map((hotel, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between bg-white border border-gray-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow gap-4">
                <div>
                  <span className="font-extrabold text-lg text-[#292926] block sm:inline">{hotel.name}</span>
                  <span className="text-gray-500 text-sm sm:ml-2 block sm:inline">| rating <strong className="text-amber-600">{hotel.rating}</strong> | about <strong>{hotel.price}</strong> for 1 night</span>
                </div>
                <a href={hotel.url} target="_blank" rel="noopener noreferrer" className="shrink-0 px-5 py-2 bg-gray-50 hover:bg-gray-100 text-[#292926] text-sm font-bold rounded-xl border border-gray-200 transition-colors flex items-center gap-2 justify-center mt-2 sm:mt-0">
                  Booking <ExternalLink size={14}/>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* 10.4 Where and what to eat */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>10.4</span> 
            Where and what to eat
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            Ella has one of the nicer food scenes on the route. You get local curry places, colorful cafés, smoothie bowls, good coffee, dessert stops, and a few prettier dinner places, so it is an easy town to eat well without planning too much.
          </p>

          {/* Local food favorites */}
          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <Utensils size={24} style={{ color: colors.green }} />
            Local food favorites
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { name: "Matey Hut", desc: "a must-try in Ella for rice and curry, kottu, and the option to try more than one curry at once", price: "about $3 to $6 per person", icon: Utensils, bgColor: colors.terracotta, map: "Matey Hut Ella" },
              { name: "Down Town Rotti Hut", desc: "easy casual stop for rotis and a cheap quick meal in town", price: "about $3 to $6 per person", icon: Flame, bgColor: colors.yellow, map: "Down Town Rotti Hut Ella" },
              { name: "Sintha Bara Lonthe - Konich", desc: "jungle-vibe Sri Lankan food stop if you want something more hidden from the main strip", price: "about $5 to $10 per person", icon: Leaf, bgColor: colors.green, map: "Sintha Bara Lonthe Konich Ella" }
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

          {/* Cafés, restaurants, and views */}
          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <Coffee size={24} style={{ color: colors.charcoal }} />
            Cafés, restaurants, and views
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { name: "The Clay Pot Ella", desc: "good local-style Sri Lankan meal stop with generous portions and strong value", price: "about $4 to $8 per person", icon: Soup, bgColor: colors.charcoal, map: "The Clay Pot Ella" },
              { name: "Cafe Eden", desc: "good local-and-international mix and one of the places people mention for lamprais", price: "about $4 to $8 per person", icon: Utensils, bgColor: colors.terracotta, map: "Cafe Eden Ella" },
              { name: "Rainbow Cafe", desc: "colorful café for lighter plates, smoothie bowls, and a more Bali-feel breakfast or lunch", price: "about $5 to $10 per person", icon: Coffee, bgColor: colors.yellow, map: "Rainbow Cafe Ella" },
              { name: "Cafe Chill", desc: "the busy central all-rounder and still one of the easiest safe choices in Ella", price: "about $6 to $12 per person", icon: Coffee, bgColor: colors.green, map: "Cafe Chill Ella" },
              { name: "The Barn by Starbeans", desc: "one of the better picks for coffee, breakfast, and what many people rate as one of the better pizza stops in Ella", price: "about $6 to $14 per person", icon: Flame, bgColor: colors.terracotta, map: "The Barn by Starbeans Ella" },
              { name: "Cafe One Love", desc: "better for views, drinks, and a livelier sunset or evening stop", price: "about $6 to $12 per person", icon: Coffee, bgColor: colors.charcoal, map: "Cafe One Love Ella" },
              { name: "Cafe Soul", desc: "one of the better cheap stops if you want train-passing views over Nine Arch Bridge with a drink or light snack", price: "about $3 to $7 per person", icon: Coffee, bgColor: colors.yellow, note: "there are steps up to it, so it is not hard, but it is not a flat walk either", map: "Cafe Soul Ella" },
              { name: "The White Rabbit - Ella", desc: "a prettier stop for a slower meal, drinks, or a nicer evening setting", price: "about $10 to $18 per person", icon: Star, bgColor: colors.green, map: "The White Rabbit Ella" }
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
                    <span className="text-[#292926] font-bold text-sm bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{place.price}</span>
                    <button onClick={() => openMap(place.map)} className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors text-left">
                      <MapPin size={16}/> View on Map
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dessert */}
          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <ShoppingBag size={24} style={{ color: colors.terracotta }} />
            Dessert
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { name: "Isle Of Gelato", desc: "easy dessert stop if you want gelato after dinner or in the afternoon", price: "about $2 to $5 per person", icon: ShoppingBag, bgColor: colors.terracotta, map: "Isle Of Gelato Ella" }
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
        </div>

        {/* 10.5 Day-by-day plan inside this city */}
        <div className="mb-16">
          {/* Day 1 */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
              <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>10.5.1</span> 
              Day one - Arrival day
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
              Keep the first day easy after the transfer from Kandy. The cleanest arrival plan is the scenic walk from Ella town to <strong>Nine Arch Bridge</strong>, then one cultural stop if timing still works.
            </p>

            <h4 className="text-xl font-extrabold mb-8 flex items-center gap-3">
              <Compass size={24} style={{ color: colors.green }} />
              Recommendation
            </h4>
            <div className="bg-[#FAFAFA] border border-gray-100 rounded-[2.5rem] p-8 md:p-12">
              <ul className="space-y-10 relative before:absolute before:inset-0 before:ml-[11px] md:before:ml-[13px] before:-translate-x-px before:h-full before:w-[2px] before:bg-gray-200">
                {[
                  { name: "Nine Arch Bridge via the walking path from town", desc: "Ella's famous old stone railway bridge and one of the easiest first outings here, with a pleasant nature walk through trees and greenery before you reach it", effort: "easy / low", price: "Free", note: "the walk from town usually takes about 30 to 40 minutes and works well even as a lighter family outing", color: colors.green, map: "Nine Arch Bridge Ella", img: "https://images.unsplash.com/photo-1586008481877-7dd7c8236d00?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                  { name: "Mahamevnawa Buddhist Monastery", desc: "the calmer and more cultural side of Ella, set high on the mountain with a large stupa and wide views over the hills", effort: "easy / low", price: "Free", note: "best if your arrival timing still allows it; the drive up usually takes about 20 minutes and the last stretch feels steep and bumpy; the official day-visit schedule includes guided tours at 9:00 to 9:45 AM and 3:30 to 4:30 PM, meditation and Q&A at 9:45 to 10:45 AM and 5:00 to 6:00 PM, and evening chanting at 6:00 PM", color: colors.yellow, map: "Mahamevnawa Buddhist Monastery Ella", img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoIg6ZIowFHqHid4lf8HOjkORP0Axfce-W4qnOICN6lej6QaUy_NzdopI0Un4PSa9u_NApKt1tR1Ii3T4JkGd-ykQLK3CUTdl1BwdtPWjtauIC4qK_TfaEg9PDc7XzLIm72sgwH=w800-h800-k-no" }
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
              <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>10.5.2</span> 
              Day two - Exploring Ella
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
              This is the fuller Ella day and I would keep it centered on the Little Adam's Peak side first, then add only the extra stops that still make sense for your energy and timing.
            </p>

            <h4 className="text-xl font-extrabold mb-8 flex items-center gap-3">
              <Compass size={24} style={{ color: colors.green }} />
              Best way to do it
            </h4>
            <div className="bg-[#FAFAFA] border border-gray-100 rounded-[2.5rem] p-8 md:p-12">
              <ul className="space-y-10 relative before:absolute before:inset-0 before:ml-[11px] md:before:ml-[13px] before:-translate-x-px before:h-full before:w-[2px] before:bg-gray-200">
                {[
                  { name: "Little Adam's Peak", desc: "the best easy scenic hike in Ella, with wide hill views and a very photogenic finish", effort: "easy to moderate", price: "Free", note: "follow the signed path past 98 Acres; best in the morning or later afternoon", color: colors.green, map: "Little Adam's Peak Ella", img: "https://images.unsplash.com/photo-1580635849305-4399d586ac5c?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                  { name: "Flying Ravana Mega Zipline", desc: "the adventure add-on on the same side as Little Adam's Peak, so it fits well here without extra backtracking", effort: "low physical / high thrill", price: "about $32 per adult", note: "up to 80 km/h and easiest to pair right after Little Adam's Peak", booking: { text: "Flying Ravana official bookings", url: "https://bookings.flyingravana.com/" }, color: colors.terracotta, map: "Flying Ravana Ella", img: "https://lh3.googleusercontent.com/p/AF1QipOVY4i6KfvSe945qrsuwdutnamSMT4l19lvRj8=w800-h800-k-no" },
                  { name: "Optional: Ella Rock", desc: "the stronger alternative if you want a longer and more physical hike instead of Little Adam's Peak", effort: "moderate to high / physical", price: "about $2.80 per person", note: "best early in the morning; skip it in heavy rain because the trail can get muddy and slippery", color: colors.charcoal, map: "Ella Rock", img: "https://images.unsplash.com/photo-1704797389202-7910a4f002ce?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                  { name: "Optional: Uva Halpewatte Tea Factory Tour", desc: "a good add-on if you did not already do a tea factory around Kandy and still want one tea-country stop in Ella", effort: "easy / low", price: "about $10 per person", note: "tours usually run from 8:00 AM to 4:30 PM", color: colors.yellow, map: "Uva Halpewatte Tea Factory Tour Ella", img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerTYxSF_rh6vsQnMtV_ele6SuDosV_-g7gWkGbDy95z360JCXmeCz3u2rLYdmeuFn8Q3FGiyQaozdtIO113HCsM2HnxQ7Rielkvu6HxQ69PEvPk3jkcCXX6Tos1aZ7TqVMt3dQ=w800-h800-k-no" },
                  { name: "Ravana Falls", desc: "best treated as a practical roadside stop rather than part of your core Ella time", effort: "very easy / quick stop", price: "Free", note: "easiest to see on the way south if you have a car; if you are going by train, do it as a quick tuk-tuk stop and keep it short", color: colors.charcoal, map: "Ravana Falls Ella", img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepqrw_LbE3s-6CI1sbET9n6mwjcfk96psvT-qOIVj-7OK0g-4bFY26mhhGkYLr6AMtf4NGvRxNOLl_F2jDdWZFSyQ85ksETcftWCxVyxD358WS9_LEFqpp0yDlz1QjA3FFLXjmD=w800-h800-k-no" },
                  { name: "Optional: Pallewela Waterfall", desc: "better as the quieter waterfall add-on if you want something more hidden and more nature-heavy than Ravana Falls", effort: "easy to moderate", price: "usually free at the waterfall itself", note: "best reached by tuk-tuk, scooter, or car off the Ella-Wellawaya road, then a short walk through fields and forest; wear proper shoes and avoid it right after heavy rain", color: colors.green, map: "Pallewela Waterfall Ella", img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwer-XNz11yg61O1maoc32twy9Cit3_Er9VF8WFczVQ41NhU91O9QXYC45bZ7C6gVJrQe0fgKLpDZ77clRMVniEjKhpsh_WEGUf8RkRbaumo5Ym4UTeBwpgF3RNQnvk1PnbGmCPBs=w800-h800-k-no" }
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
                          {stop.booking && (
                            <a href={stop.booking.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-bold text-gray-500 hover:text-[#292926]">
                              <ExternalLink size={16}/> {stop.booking.text}
                            </a>
                          )}
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

          {/* 10.5.3 Quick notes */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
              <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>10.5.3</span> 
              Quick notes for Ella
            </h3>
            <div className="bg-yellow-50 border border-yellow-100 p-8 rounded-[2rem]">
              <h4 className="text-xl font-extrabold mb-5 flex items-center gap-3" style={{ color: colors.yellow }}>
                <Info size={24} />
                Keep in mind
              </h4>
              <ul className="space-y-4">
                {[
                  { text: "Ella town is walkable, but you will still want tuk-tuks for uphill hotels, getting back at night, the monastery, and some trail starts", label: "Getting around:" },
                  { text: "scooters are easy to rent here and often run around $8 to $12 a day if you are comfortable on steep hill roads and tight bends", label: "Scooter note:" },
                  { text: "keep balcony doors and windows shut when you go out; monkeys can get into rooms", label: "Monkey note:" },
                  { text: "views can change fast with cloud, mist, and rain, so keep the timing a little flexible", label: "Weather note:" },
                  { text: "after rain, paths can get slippery and leeches can show up on greener trails; they are unpleasant but not poisonous", label: "Trail note:" }
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

        {/* 10.6 Estimated activity and stay cost */}
        <div className="mb-4">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>10.6</span> 
            Estimated activity and stay cost
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            This is a rough reference <strong>per person</strong>, assuming <strong>2 people sharing a room for 2 nights</strong>, with intercity transport left out.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div style={{ backgroundColor: colors.green, boxShadow: customShadow }} className="p-8 rounded-[2rem] text-white flex flex-col transition-transform hover:-translate-y-1">
              <span className="font-bold uppercase tracking-widest text-xs text-white/70 mb-4 block">Budget Version</span>
              <span className="text-3xl lg:text-4xl font-extrabold mb-6">about $40 to $60<span className="text-sm font-medium text-white/70 block mt-2 tracking-normal normal-case">per person total</span></span>
              <p className="text-sm text-white/90 leading-relaxed mt-auto pt-6 border-t border-white/20">
                <strong>Includes:</strong> Budget stay + local meals + main free sights
              </p>
            </div>

            <div style={{ backgroundColor: colors.charcoal, boxShadow: customShadow }} className="p-8 rounded-[2rem] text-white flex flex-col transition-transform hover:-translate-y-1">
              <span className="font-bold uppercase tracking-widest text-xs text-white/70 mb-4 block">Mid-range Version</span>
              <span className="text-3xl lg:text-4xl font-extrabold mb-6">about $55 to $80<span className="text-sm font-medium text-white/70 block mt-2 tracking-normal normal-case">per person total</span></span>
              <p className="text-sm text-white/90 leading-relaxed mt-auto pt-6 border-t border-white/20">
                <strong>Includes:</strong> Budget stay + one café meal + one nicer meal + main free sights
              </p>
            </div>

            <div className="md:col-span-2 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 bg-gray-50 border border-gray-100 rounded-[2rem] flex flex-col">
                <span className="font-bold text-[#292926] block mb-2">Add Flying Ravana:</span>
                <span className="text-terracotta-600 font-extrabold">add about $32<span className="text-xs font-normal text-gray-500 ml-1">/ person</span></span>
              </div>
              <div className="p-6 bg-gray-50 border border-gray-100 rounded-[2rem] flex flex-col">
                <span className="font-bold text-[#292926] block mb-2">Add tea factory:</span>
                <span className="text-yellow-600 font-extrabold">add about $10<span className="text-xs font-normal text-gray-500 ml-1">/ person</span></span>
              </div>
              <div className="p-6 bg-gray-50 border border-gray-100 rounded-[2rem] flex flex-col">
                <span className="font-bold text-[#292926] block mb-2">Add scooter rental:</span>
                <span className="text-green-600 font-extrabold">add about $4 to $6<span className="text-xs font-normal text-gray-500 ml-1">/ person/day (if shared)</span></span>
              </div>
              <div className="p-6 bg-gray-50 border border-gray-100 rounded-[2rem] flex flex-col">
                <span className="font-bold text-[#292926] block mb-2">Tuk-tuk for Pallewela:</span>
                <span className="text-charcoal-600 font-bold text-sm text-gray-600">price varies by negotiation and waiting time</span>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default EllaPage;
