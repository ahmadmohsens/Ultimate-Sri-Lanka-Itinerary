import React from 'react';
import { 
  Car,
  Globe,
  ExternalLink,
  BedDouble,
  Utensils,
  Leaf,
  Soup,
  Coffee,
  Flame,
  Fish,
  Star,
  Waves,
  Sun,
  MapPin,
  Compass,
  Info
} from 'lucide-react';

interface HiriketiyaPageProps {
  colors: {
    green: string;
    yellow: string;
    terracotta: string;
    beige: string;
    charcoal: string;
  };
  openMap: (query: string) => void;
  hiriketiyaMapLocations: any[];
}

const HiriketiyaPage: React.FC<HiriketiyaPageProps> = ({ colors, openMap, hiriketiyaMapLocations }) => {
  const customShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.03)";

  return (
    <div className="animate-in slide-in-from-right duration-700">


      {/* Chapter Image Banner */}
      <section style={{ boxShadow: customShadow }} className="bg-white border border-gray-50 rounded-[2.5rem] overflow-hidden mb-8">
        <div className="relative h-[450px] w-full">
          <img
            src="https://kimasurfsrilanka.com/wp-content/uploads/2021/12/Kima-Surf-Camp-Hiriketiya-Header.jpg"
            alt="Hiriketiya Beach and Palms"
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#292926]/90 via-[#292926]/30 to-transparent"></div>
          <div className="absolute bottom-12 left-12 md:bottom-16 md:left-14 text-white">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase mb-8 block text-white/70">
              CHAPTER 11
            </span>
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none">
              Hiriketiya Beach
            </h2>
          </div>
        </div>
      </section>

      <section style={{ boxShadow: customShadow }} className="bg-white border border-gray-50 rounded-[2.5rem] overflow-hidden mb-8 p-8 md:p-14">

        {/* 11.1 City overview */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>11.1</span>
            City overview
          </h3>
          <div className="text-lg text-gray-600 leading-relaxed max-w-4xl space-y-4">
            <p>
              This stop is built for the <strong>14-day route</strong>; skip it if you are doing the <strong>10-day route</strong>.
            </p>
            <p>
              Hiriketiya is still where I would slow the trip down after the bigger activity stops. This is where I would let the trip ease up a bit and shift into beach time, surf, slow mornings, cafés, and doing less. I would not plan this as the place for big excursions or high-energy days; it works much better as a lighter reset before the next stop.
            </p>
            <p className="font-medium text-[#292926]">
              For this route, Hiriketiya is still very comfortable in <strong>2 nights</strong>. I would stretch it to <strong>3 nights</strong> only if you want to add yoga, a cooking class, or a couple of nearby outings without turning it into a packed stop.
            </p>
          </div>
        </div>

        {/* 11.2 How to get here */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>11.2</span>
            How to get here
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            Coming from Ella, I would still treat Hiriketiya as a clean downhill transfer to the south coast. The simplest version is a private car straight to your hotel, especially because there are <strong>no direct trains</strong> from Ella to Hiriketiya. It is also the best option if you want to stop at the Elephant Transit Home on the way, which I explain further in the day-to-day plan below.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            There is also a <strong>12Go</strong> transfer option if you want something pre-booked without arranging it through your hotel.
          </p>

          <h4 className="text-xl font-extrabold mb-6">Main ways to arrive</h4>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
               <div className="flex items-center gap-3 mb-4">
                 <div className="p-3 rounded-xl shrink-0" style={{ backgroundColor: colors.terracotta + '15', color: colors.terracotta }}>
                   <Car size={24} />
                 </div>
                 <h5 className="font-extrabold text-lg leading-tight">Private car or taxi all the way</h5>
               </div>
               <div className="space-y-3 mt-auto">
                 <p className="text-gray-600 m-0 text-sm">usually about <strong className="text-[#292926]">$50 to $75</strong> per car and around <strong className="text-[#292926]">2.5 to 3.5 hours</strong> depending on route and stops.</p>
                 <p className="text-gray-600 m-0 text-sm"><strong className="text-[#292926]">Practical tip:</strong> best to organise it with your hotel in Ella in advance.</p>
                 <p className="text-gray-600 m-0 text-sm"><strong className="text-[#292926]">If you already have a driver:</strong> just continue all the way by road to Hiriketiya and skip the extra transport planning.</p>
               </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
               <div className="flex items-center gap-3 mb-4">
                 <div className="p-3 rounded-xl shrink-0" style={{ backgroundColor: colors.charcoal + '15', color: colors.charcoal }}>
                   <Globe size={24} />
                 </div>
                 <h5 className="font-extrabold text-lg leading-tight">12Go transfer option</h5>
               </div>
               <div className="space-y-3 mt-auto">
                 <p className="text-gray-600 m-0 text-sm">a useful middle-ground if you want something pre-booked online.</p>
                 <p className="text-gray-600 m-0 text-sm"><strong className="text-[#292926]">Note:</strong> this is better for readers who want an easy booking option instead of sorting it locally.</p>
                 <p className="text-gray-600 m-0 text-sm"><strong className="text-[#292926]">Practical tip:</strong> I would still check the pickup point and drop-off before booking, because these transfers use fixed locations.</p>
                 <div className="mt-4 pt-4 border-t border-gray-100">
                    <a href="https://12go.asia/" target="_blank" rel="noopener noreferrer" className="text-sm font-bold flex items-center gap-1.5 hover:opacity-70 transition-opacity" style={{ color: colors.charcoal }}>
                      Website: 12Go on Booking & Transport Options <ExternalLink size={14} />
                    </a>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* 11.3 Where to stay */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>11.3</span>
            Where to stay
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            For Hiriketiya, I would still stay walking distance to the bay rather than chasing something too far uphill or too isolated. This stop works best when the beach, cafés, and short tuk tuk rides are all easy.
          </p>

          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <BedDouble size={24} style={{ color: colors.green }} />
            Hotel picks in order of price
          </h4>
          <div className="flex flex-col gap-4 mb-10">
            {[
              { name: "Abinu’s Place", rating: "8.7", price: "$23", highlight: "beachfront stay with a garden, terrace, and free WiFi", url: "https://www.booking.com/hotel/lk/abinu-quot-s-place.html" },
              { name: "Kawshan Home Stay", rating: "9.1", price: "$24", highlight: "beachfront access, lush garden, spacious terrace", url: "https://www.booking.com/hotel/lk/kawshan-home-stay.html" },
              { name: "Sea Wawes Hiriketiya", rating: "9.2", price: "$27", highlight: "recently renovated, spacious rooms, balcony, short walk to the beach", url: "https://www.booking.com/hotel/lk/sea-wawes-hiriketiya.html" },
              { name: "Mount Top", rating: "9.3", price: "$29", highlight: "beachfront setting, sea views, excellent location between Hiriketiya and Dikwella", url: "https://www.booking.com/hotel/lk/mount-top-dikwella.html" },
              { name: "Gold Ocean House", rating: "8.3", price: "$31", highlight: "beachfront accommodation, shared kitchen", url: "https://www.booking.com/hotel/lk/gold-ocean-house.html" },
              { name: "White Lion Paradise Dikwella", rating: "9.1", price: "$34", highlight: "right by the beach, private beach area, terrace and free parking", url: "https://www.booking.com/hotel/lk/white-lion-paradise.html" },
              { name: "The Nest - Near Hiriketiya Beach", rating: "9.8", price: "$36", highlight: "quieter side stay, villa-style setup, free parking", url: "https://www.booking.com/hotel/lk/the-nest-dikwella.html" },
              { name: "Jungle Escape Hiriketiya", rating: "9.0", price: "$47", highlight: "peaceful garden setting, a quieter base just outside the busiest part of the bay", url: "https://www.booking.com/hotel/lk/jungle-escape-hiriketiya.html" },
              { name: "The Yard Hiriketiya", rating: "9.1", price: "$60", highlight: "stylish rooms, just a short walk from Hiriketiya Beach", url: "https://www.booking.com/hotel/lk/the-yard-hiriketiya.html" },
              { name: "Villa Hiriketiya", rating: "8.3", price: "$60", highlight: "pool on site, easy beach access", url: "https://www.booking.com/hotel/lk/villa-hiriketiya.html" }
            ].map((hotel, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between bg-white border border-gray-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow gap-4">
                <div>
                  <span className="font-extrabold text-lg text-[#292926] block sm:inline">{hotel.name}</span>
                  <span className="text-gray-500 text-sm sm:ml-2 block sm:inline">| rating <strong className="text-amber-600">{hotel.rating}</strong> | about <strong>{hotel.price}</strong> for 1 night</span>
                  {hotel.highlight && <p className="text-sm text-gray-500 mt-1 mb-0 italic"><strong>Highlights:</strong> {hotel.highlight}</p>}
                </div>
                <a href={hotel.url} target="_blank" rel="noopener noreferrer" className="shrink-0 px-5 py-2 bg-gray-50 hover:bg-gray-100 text-[#292926] text-sm font-bold rounded-xl border border-gray-200 transition-colors flex items-center gap-2 justify-center mt-2 sm:mt-0">
                  Booking <ExternalLink size={14}/>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* 11.4 Where and what to eat */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>11.4</span>
            Where and what to eat
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            Hiriketiya has a mix of cheap local rice and curry spots, brunch cafés, beachfront lunch stops, and a few more polished dinner places.
          </p>

          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <Utensils size={24} style={{ color: colors.green }} />
            Restaurants and cafe picks
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { name: "Lemon Grass Café", desc: "one of the best-value local meal stops in Hiriketiya for rice and curry and an easy Sri Lankan lunch", try: "veg rice and curry, hoppers, coconut roti", price: "$3 to $5 per person", icon: Leaf, bgColor: colors.green, map: "https://www.google.com/maps/search/?api=1&query=Lemon+Grass+Cafe+Hiriketiya" },
              { name: "Kingsley’s Kitchen", desc: "a cheap local pick for home-style rice and curry", try: "veg rice and curry, dessert", price: "$2 to $4 per person", icon: Soup, bgColor: colors.terracotta, keepInMind: "dinner is pre-order only", map: "https://www.google.com/maps/search/?api=1&query=Kingsleys+Kitchen+Hiriketiya" },
              { name: "Duni’s Hoppers", desc: "one of the most recommended breakfast spots in Hiriketiya for hoppers, smoothie bowls, and coffee", try: "sweet or savoury hoppers, smoothie bowls, coffee", price: "$4 to $9 per person", icon: Coffee, bgColor: colors.yellow, map: "https://www.google.com/maps/search/?api=1&query=Dunis+Hoppers+Hiriketiya" },
              { name: "Locos Cafe", desc: "a good pre-surf or post-surf café for espresso, brunch, and pastries", try: "coffee, almond croissant, mushroom and avocado breakfast", price: "$7 to $10 per person", icon: Coffee, bgColor: colors.charcoal, map: "https://www.google.com/maps/search/?api=1&query=Locos+Cafe+Hiriketiya" },
              { name: "Bahia", desc: "a more polished brunch stop if you want something a bit nicer than the usual surf-town café", try: "breakfast tacos, rösti eggs benedict, coffee", price: "$6 to $12 per person", icon: Utensils, bgColor: colors.yellow, map: "https://www.google.com/maps/search/?api=1&query=Bahia+Hiriketiya" },
              { name: "Malu Poke", desc: "one of the best post-surf lunch stops for healthy bowls right by the beach", try: "poke bowls, smoothie bowls, cold coconut", price: "$5 to $10 per person", icon: Fish, bgColor: colors.green, map: "https://www.google.com/maps/search/?api=1&query=Malu+Poke+Hiriketiya" },
              { name: "MOND", desc: "one of the strongest café picks for coffee, a slower breakfast, and getting some laptop time in", try: "peni pol pancake, coconut fish curry, flat white, Serendipity", price: "$6 to $12 per person", icon: Coffee, bgColor: colors.charcoal, map: "https://www.google.com/maps/search/?api=1&query=MOND+Hiriketiya" },
              { name: "Crust & Crumble", desc: "a newer bakery-style café for specialty coffee, croissants, and pastries", try: "croissants, sourdough bakes, specialty coffee", price: "$4 to $10 per person", icon: Flame, bgColor: colors.terracotta, map: "https://www.google.com/maps/search/?api=1&query=Crust+and+Crumble+Hiriketiya" },
              { name: "Garlic Cafe", desc: "a reliable budget stop for local food without overthinking it", try: "kottu roti, rice and curry", price: "$3 to $6 per person", icon: Utensils, bgColor: colors.green, map: "https://www.google.com/maps/search/?api=1&query=Garlic+Cafe+Hiriketiya" },
              { name: "Betaz Hiriketiya", desc: "a good lunch or dinner pick with sea views and a slightly more polished feel", try: "prawn curry, vegetable curry", price: "$6 to $15 per person", icon: Fish, bgColor: colors.yellow, map: "https://www.google.com/maps/search/?api=1&query=Betaz+Hiriketiya" },
              { name: "Smoke & Bitters", desc: "the dinner place I would still actively recommend if you want one proper splurge meal in Hiriketiya", try: "kurumba calamari, kalu pol seafood curry, pork ribs, cocktails", price: "$8 to $20 per person", icon: Flame, bgColor: colors.terracotta, map: "https://www.google.com/maps/search/?api=1&query=Smoke+and+Bitters+Hiriketiya" },
              { name: "RAA", desc: "one of the stronger special-dinner options for Sri Lankan food done in a more refined way", try: "seafood, jackfruit curry, local-ingredient cocktails", price: "$12 to $25 per person", icon: Star, bgColor: colors.charcoal, keepInMind: "reserve ahead if you want a sunset table", map: "https://www.google.com/maps/search/?api=1&query=RAA+Hiriketiya" },
              { name: "Crab Hiriketiya", desc: "a seafood-focused stop if you want crab or fresh local fish without overcomplicating dinner", try: "crab dishes, fresh seafood", price: "$8 to $18 per person", icon: Fish, bgColor: colors.terracotta, map: "https://www.google.com/maps/search/?api=1&query=Crab+Hiriketiya" }
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
                    {place.try && <span className="text-sm text-gray-500"><strong>Try:</strong> {place.try}</span>}
                    {place.keepInMind && <span className="text-xs text-gray-500 italic"><strong>Keep in mind:</strong> {place.keepInMind}</span>}
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

        {/* 11.5 Beach clubs and best free beach picks */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>11.5</span>
            Beach clubs and best free beach picks
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            Choose the nearby beaches depending on tide, sunset, and how much effort you want.
          </p>

          {/* Beach Clubs */}
          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <Sun size={24} style={{ color: colors.yellow }} />
            Beach clubs
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { name: "La Playa Beach Club", desc: "the main beach-club-style option in Hiriketiya for pool time, lunch, and sunset", try: "wood-fired pizzas, grilled seafood", price: "$5 to $12", icon: Waves, bgColor: colors.green, map: "https://www.google.com/maps/search/?api=1&query=La+Playa+Beach+Club+Hiriketiya" },
              { name: "Belika Beach Club", desc: "a quieter boutique-style option if you want a pool, brunch, and a more polished setting", price: "$6 to $12", icon: Waves, bgColor: colors.charcoal, map: "https://www.google.com/maps/search/?api=1&query=Belika+Beach+Club+Hiriketiya" },
              { name: "The Ruin", desc: "more of a design-heavy beach club stop for sunbeds and a lunch-to-sunset session", price: "$2 to $20", icon: Star, bgColor: colors.terracotta, map: "https://www.google.com/maps/search/?api=1&query=The+Ruin+Hiriketiya" }
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
                    {place.try && <span className="text-sm text-gray-500"><strong>Try:</strong> {place.try}</span>}
                    <span className="text-[#292926] font-bold text-sm bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">Price: {place.price}</span>
                    <button onClick={() => openMap(place.map)} className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors text-left">
                      <MapPin size={16}/> View on Map
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Free Beaches Picks */}
          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <Waves size={24} style={{ color: colors.charcoal }} />
            Free Beaches Picks
          </h4>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: "Dikwella Beach", desc: "the easiest nearby beach for a wider stretch of sand, better sunset views, and a quieter swim than Hiriketiya Bay", map: "https://www.google.com/maps/search/?api=1&query=Dikwella+Beach" },
              { name: "Nilwella Beach / Blue Beach Island", desc: "the best nearby add-on for the sandbar, photos, and a low-tide walk out to the island", map: "https://www.google.com/maps/search/?api=1&query=Blue+Beach+Island+Nilwella" },
              { name: "Kudawella Beach", desc: "better as a quick local coastal stop near Hummanaya than a full beach day, but worth knowing if you are already exploring that side", map: "https://www.google.com/maps/search/?api=1&query=Kudawella+Beach" },
              { name: "Unakuruwa Beach", desc: "a quieter cove east of Hiriketiya that works well if you want to escape the main Hiri crowd", map: "https://www.google.com/maps/search/?api=1&query=Unakuruwa+Beach" },
              { name: "Blue Beach Island, Nilwella", desc: "the best low-tide beach add-on near Hiriketiya for the sandbar walk, photos, and a quick side trip", map: "https://www.google.com/maps/search/?api=1&query=Blue+Beach+Island+Nilwella" }
            ].map((beach, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between bg-[#FAFAFA] border border-gray-100 p-5 rounded-2xl shadow-sm gap-4">
                <div>
                  <span className="font-extrabold text-lg text-[#292926] block">{beach.name}</span>
                  <span className="text-gray-600 text-sm leading-snug block mt-1">{beach.desc}</span>
                </div>
                <button onClick={() => openMap(beach.map)} className="shrink-0 px-4 py-2 bg-white hover:bg-gray-50 text-blue-600 text-sm font-bold rounded-xl border border-gray-200 transition-colors flex items-center gap-2 justify-center mt-2 sm:mt-0">
                  <MapPin size={14}/> Map
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 11.6 Day by day plan inside this city */}
        <div className="mb-16">
          {/* Day 1 */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
              <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>11.6.1</span>
              Day one: Arrival day
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
              I would still keep the first day light after Ella. Hiriketiya works best when you let the place soften the trip rather than trying to cram every nearby stop into the first afternoon.
            </p>

            <h4 className="text-xl font-extrabold mb-8 flex items-center gap-3">
              <Compass size={24} style={{ color: colors.green }} />
              Recommendation
            </h4>
            <div className="bg-[#FAFAFA] border border-gray-100 rounded-[2.5rem] p-8 md:p-12">
              <ul className="space-y-10 relative before:absolute before:inset-0 before:ml-[11px] md:before:ml-[13px] before:-translate-x-px before:h-full before:w-[2px] before:bg-gray-200">
                {[
                  { name: "Optional Elephant Transit Home on the way from Ella", desc: "the easier and cheaper elephant stop if you want to break the drive without turning the day into a full safari", effort: "very easy / quick stop", price: "about $5 plus tax per foreign adult and about $3 plus tax per child", note: "public feeding-viewing times are commonly listed at 10:30 AM, 2:30 PM, and 6:00 PM, so time your departure from Ella around that", color: colors.green, map: "https://www.google.com/maps/search/?api=1&query=Elephant+Transit+Home+Udawalawe", img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweomWM2NSSkvOI_A2B3mhVwJNS9iNukvGSf3fWupp_lXn6qDDilQ6Z-e_TkZNP6At_1Sv3v1LlTgKS7ssUoO0ELZzDvWgssD_IkOK5GeZwlWDaC1c5V1UGRXTScS7rp_SxuUcZqc=w800-h800-k-no" },
                  { name: "Hiriketiya Beach", desc: "still the soft landing I would use first", price: "Free, or around $3.20 for a sun bed in high season if you are not just using one tied to a food or drink order", note: "good for a swim and reset, but the bay gets busy fast; if you want the beach at its best, I would tell people to get there earlier rather than later", extraTip: "turtles are sometimes seen near the rocky area toward the Sunset Bar side", color: colors.yellow, img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/a0/9a/0f/hiriketiya-beach.jpg?w=1400&h=-1&s=1" },
                  { name: "Optional - Dikwella Beach or Pehembiya Beach for sunset", desc: "still my preferred first-evening move here", price: "Free", note: "this is the better open-horizon sunset than staying inside Hiriketiya Bay, and it is only about a 10 to 15 minute walk or a very short tuk tuk away", localTip: "Pehembiya is quieter than Hiriketiya and works especially well if you want a calmer beach before dinner", color: colors.terracotta, img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoXeg_mBx-7mBiLX9G8WFLO7lmWEJ7cNlb0idJPw5dQOkWbIMsZWFIHwyPa5lXGHgWbXfM2iaWW0De2gNVciyXM0RC8JlLpo8DJZvp5qoaxOouu2DWOXo0TiBU92hjeY4Un-jxSAjr8cf0B=w800-h800-k-no" },
                  { name: "Optional if you arrive early: Rosie’s Kitchen cooking class", desc: "this is a very good add-on if you want one personal local experience here without turning the day into a full outing", effort: "easy / low", price: "about $19 per person, book in advance", timing: "about 4 hours", color: colors.charcoal, map: "https://www.google.com/maps/search/?api=1&query=Rosies+Kitchen+Hiriketiya", img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoia5obYI7BZG2tU3VqR8q2azbCvpXuthOJmSRFuhW2sPDOhf8cQNHLafIfLzeZzCBhccoMue563XTvq-hKqn-26UAHnkMPqhqqp0LsayhC2YPQN7fGdoyy_EdJbAO0LKWVM-2QhEGo3ts=w800-h800-k-no" }
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
                          {stop.timing && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">Timing:</strong> {stop.timing}</p>}
                          {stop.note && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">Note:</strong> {stop.note}</p>}
                          {stop.localTip && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">Local tip:</strong> {stop.localTip}</p>}
                          {stop.extraTip && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">Extra tip:</strong> {stop.extraTip}</p>}
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
              <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>11.6.2</span>
              Day two: Exploring Hiriketiya
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
              This is still the fuller Hiriketiya day, and I would still build it around one active thing in the morning and one nearby outing later.
            </p>

            <h4 className="text-xl font-extrabold mb-8 flex items-center gap-3">
              <Compass size={24} style={{ color: colors.green }} />
              Best way to do it
            </h4>
            <div className="bg-[#FAFAFA] border border-gray-100 rounded-[2.5rem] p-8 md:p-12">
              <ul className="space-y-10 relative before:absolute before:inset-0 before:ml-[11px] md:before:ml-[13px] before:-translate-x-px before:h-full before:w-[2px] before:bg-gray-200">
                {[
                  { name: "Early surf session in Hiriketiya Bay", desc: "still the most natural thing to prioritise", effort: "easy to moderate", price: "board rental usually about $1.60 to $4 per hour; one-on-one lessons start around $8 and can go up to about $20 per hour depending on school and setup", timing: "best at dawn or early morning before the crowd builds", color: colors.green, img: "https://kimasurfsrilanka.com/wp-content/uploads/2025/09/DSC06545.webp" },
                  { name: "Late breakfast after surf", desc: "the move I would make rather than forcing another activity immediately", best: "Duni’s Hoppers Café, Bahia, or Lemon Grass Café depending on whether you want brunch or local food", color: colors.terracotta, img: "https://www.starsurfcamps.com/wp-content/uploads/Surf-Camps-Surfing-Holiday-Yummy-Breakfast-Recipes.jpeg" },
                  { name: "Blue Beach Island, Nilwella", desc: "the best scenic side trip if you want one outing that still feels coastal and easy", price: "usually free to visit; tuk tuk is about $1 each way, or you can walk", timing: "low tide is the key detail because the sandbar is the whole point", note: "I like this more as a walk, viewpoint, and photo stop than as a serious swim stop; skip it if the beach looks rough, messy", color: colors.yellow, img: "https://www.attractionsinsrilanka.com/wp-content/uploads/2020/06/Blue-Beach-Island.jpg" },
                  { name: "Optional later in the day: yoga", price: "about $6.35 to $10 per class depending on the studio", options: [ { text: "Salt House on Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Salt+House+Hiriketiya" }, { text: "Yoga Hiriketiya on Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Yoga+Hiriketiya" } ], note: "I would tell readers to check the weekly schedule close to arrival because teachers and class times move around", color: colors.charcoal, img: "https://images.pexels.com/photos/4534639/pexels-photo-4534639.jpeg" },
                  { name: "Optional at the end of the day or before leaving next morning: massage", options: [ { text: "The Massage Shed: about $22 for 60 minutes", url: "https://www.google.com/maps/search/?api=1&query=The+Massage+Shed+Hiriketiya" }, { text: "Tonic Spa Hiriketiya: treatments start from about $11, and 60-minute full-body for about $26 with service", url: "https://www.google.com/maps/search/?api=1&query=Tonic+Spa+Hiriketiya" } ], color: colors.green, img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800" }
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
                          {stop.timing && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">Timing:</strong> {stop.timing}</p>}
                          {stop.best && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">Best for:</strong> {stop.best}</p>}
                          {stop.note && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">Note:</strong> {stop.note}</p>}
                        </div>

                        {stop.options && (
                          <div className="flex flex-col gap-3 border-t border-gray-100 pt-5 mt-auto">
                            <span className="font-bold text-[#292926] text-sm">Options:</span>
                            {stop.options.map((opt, oIdx) => (
                              <a key={oIdx} href={opt.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 text-left leading-tight">
                                <MapPin size={14} className="shrink-0"/> {opt.text}
                              </a>
                            ))}
                          </div>
                        )}
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

          {/* 11.6.3 Quick notes */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
              <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>11.6.3</span>
              Quick notes for Hiriketiya
            </h3>
            <div className="bg-yellow-50 border border-yellow-100 p-8 rounded-[2rem]">
              <h4 className="text-xl font-extrabold mb-5 flex items-center gap-3" style={{ color: colors.yellow }}>
                <Info size={24} />
                Keep in mind
              </h4>
              <ul className="space-y-4">
                {[
                  { text: "Hiriketiya itself is small and walkable, but the heat and short hills make tuk tuks useful for Dikwella, Nilwella, and dinner plans outside the bay", label: "Getting around:" }
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

        {/* 11.6.4 Estimated budget */}
        <div className="mb-4">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>11.6.4</span>
            Estimated budget
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            I would make this a <strong>2-night, per person</strong> budget, assuming <strong>2 people sharing a room</strong>. Hiriketiya can stay fairly reasonable if you keep food local and only add one or two paid activities.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div style={{ backgroundColor: colors.green, boxShadow: customShadow }} className="p-8 rounded-[2rem] text-white flex flex-col transition-transform hover:-translate-y-1">
              <span className="font-bold uppercase tracking-widest text-xs text-white/70 mb-4 block">Minimum Spend</span>
              <span className="text-3xl lg:text-4xl font-extrabold mb-6">about $45 to $55<span className="text-sm font-medium text-white/70 block mt-2 tracking-normal normal-case">per person total</span></span>
              <p className="text-sm text-white/90 leading-relaxed mt-auto pt-6 border-t border-white/20">
                <strong>Includes:</strong> budget stay, simple local meals, beach time, and short local tuk tuk use
              </p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default HiriketiyaPage;
