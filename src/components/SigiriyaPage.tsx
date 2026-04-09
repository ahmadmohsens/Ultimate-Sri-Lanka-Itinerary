import React from 'react';
import { 
  Car,
  Train,
  Globe,
  ExternalLink,
  Map,
  BedDouble,
  Utensils,
  Soup,
  Leaf,
  Flame,
  Coffee,
  Star,
  Compass,
  MapPin,
  Info
} from 'lucide-react';
import LocationMap from './LocationMap';

interface SigiriyaPageProps {
  colors: {
    green: string;
    yellow: string;
    terracotta: string;
    beige: string;
    charcoal: string;
  };
  openMap: (query: string) => void;
  sigiriyaMapLocations: any[];
}

const SigiriyaPage: React.FC<SigiriyaPageProps> = ({ colors, openMap, sigiriyaMapLocations }) => {
  const customShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.03)";

  return (
    <div className="animate-in slide-in-from-right duration-700">
      

     {/* Chapter Image Banner */}
      <section style={{ boxShadow: customShadow }} className="bg-white border border-gray-50 rounded-[2.5rem] overflow-hidden mb-8">
        <div className="relative h-[450px] w-full">
          <img 
            src="https://plus.unsplash.com/premium_photo-1764187003767-7d00abf2267c?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Sigiriya Rock Fortress" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#292926]/90 via-[#292926]/30 to-transparent"></div>
          <div className="absolute bottom-12 left-12 md:bottom-16 md:left-14 text-white">
            <span className="text-[14px] font-bold tracking-[0.4em] uppercase mb-4 block text-white/90">
              Chapter 8
            </span>
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none">
              Sigiriya
            </h2>
          </div>
        </div>
      </section>

      <section style={{ boxShadow: customShadow }} className="bg-white border border-gray-50 rounded-[2.5rem] overflow-hidden mb-8 p-8 md:p-14">
        
        {/* 8.1 City overview */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>8.1</span> 
            City overview
          </h3>
          <div className="text-lg text-gray-600 leading-relaxed max-w-4xl space-y-4">
            <p>
              This stop is built for the <strong>14-day route</strong>; skip it if you are doing the <strong>10-day route</strong>. For the longer version of the trip, it adds a good mix of <strong>nature, soft adventure, and big landmark sights</strong>.
            </p>
            <p className="font-medium text-[#292926]">
              I would use these <strong>2 nights</strong> as a quieter countryside break to spread out and do <strong>Sigiriya Rock, Pidurangala, an elephant safari, and one slower local activity</strong> without rushing.
            </p>
          </div>
        </div>

        {/* 8.2 How to get here from Colombo */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>8.2</span> 
            How to get here from Colombo
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            Coming from Colombo, I would choose between a <strong>direct private car</strong>, the <strong>train to Habarana</strong>, or checking <a href="https://12go.asia/en/travel/colombo/sigiriya" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:opacity-80 transition-opacity" style={{ color: colors.terracotta }}>12Go</a> if you want to compare buses and private transfers in one place, depending on budget and how much flexibility you want on arrival.
          </p>

          <h4 className="text-xl font-extrabold mb-6">Main ways to arrive</h4>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
               <div className="flex items-center gap-3 mb-4">
                 <div className="p-3 rounded-xl shrink-0" style={{ backgroundColor: colors.terracotta + '15', color: colors.terracotta }}>
                   <Car size={24} />
                 </div>
                 <h5 className="font-extrabold text-lg">Private car or taxi</h5>
               </div>
               <div className="space-y-2 mt-auto">
                 <p className="text-gray-600 m-0"><strong className="text-[#292926]">Duration:</strong> about 3.5 to 4.5 hours</p>
                 <p className="text-gray-600 m-0"><strong className="text-[#292926]">Price:</strong> about $70 to $100 one way</p>
                 <p className="text-gray-600 m-0"><strong className="text-[#292926]">Best for:</strong> the easiest door-to-door transfer</p>
                 <p className="text-gray-600 m-0"><strong className="text-[#292926]">Booking:</strong> best arranged through your hotel or accommodation</p>
               </div>
            </div>
            
            <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
               <div className="flex items-center gap-3 mb-4">
                 <div className="p-3 rounded-xl shrink-0" style={{ backgroundColor: colors.green + '15', color: colors.green }}>
                   <Train size={24} />
                 </div>
                 <h5 className="font-extrabold text-lg leading-tight">Train (Colombo Fort to Habarana)</h5>
               </div>
               <div className="space-y-2 mt-auto">
                 <p className="text-gray-600 m-0"><strong className="text-[#292926]">Duration:</strong> about 3.5 to 4.75 hours by train, then about 25 minutes by tuk-tuk</p>
                 <p className="text-gray-600 m-0"><strong className="text-[#292926]">Price:</strong> about $1.14 (3rd class), $2.38 (2nd class), $4.60 (1st class)</p>
                 <div className="mt-4 pt-4 border-t border-gray-100">
                    <a href="https://seatreservation.railway.gov.lk/" target="_blank" rel="noopener noreferrer" className="text-sm font-bold flex items-center gap-1.5 hover:opacity-70 transition-opacity" style={{ color: colors.green }}>
                      Sri Lanka Railways <ExternalLink size={14} />
                    </a>
                 </div>
               </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
               <div className="flex items-center gap-3 mb-4">
                 <div className="p-3 rounded-xl shrink-0" style={{ backgroundColor: colors.charcoal + '15', color: colors.charcoal }}>
                   <Globe size={24} />
                 </div>
                 <h5 className="font-extrabold text-lg leading-tight">Private buses or transfers</h5>
               </div>
               <div className="space-y-2 mt-auto">
                 <p className="text-gray-600 m-0"><strong className="text-[#292926]">Best for:</strong> comparing routes, timings, buses, and private cars in one place</p>
                 <div className="mt-4 pt-4 border-t border-gray-100">
                    <a href="https://12go.asia/en/travel/colombo/sigiriya" target="_blank" rel="noopener noreferrer" className="text-sm font-bold flex items-center gap-1.5 hover:opacity-70 transition-opacity" style={{ color: colors.charcoal }}>
                      12Go Colombo to Sigiriya <ExternalLink size={14} />
                    </a>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* 8.3 Where to stay */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>8.3</span> 
            Where to stay
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            For a short <strong>2-night</strong> stay, I would choose <strong>Sigiriya</strong> if your focus is <strong>Sigiriya Rock and Pidurangala</strong>. Choose <strong>Habarana</strong> instead if you want <strong>lower prices, easier transport, and better safari access</strong>.
          </p>

          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <Map size={24} style={{ color: colors.charcoal }} />
            Overlooking Sigiriya
          </h4>
          <div className="flex flex-col gap-4 mb-10">
            {[
              { name: "Sigiri Rock Side Home Stay", rating: "9.1", price: "$28", url: "https://www.booking.com/hotel/lk/sigiri-rock-side-home-stay-sigiriya.html" },
              { name: "Sigiri Close-up View Guest", rating: "9.1", price: "$32", url: "https://www.booking.com/hotel/lk/seegiri-close-up-view-guest.html" },
              { name: "Kashyapa Kingdom View Home", rating: "8.7", price: "$32", url: "https://www.booking.com/hotel/lk/kashyapa-kingdom-view-home.html" },
              { name: "Lion Wood Treehouse", highlight: "one of the more memorable budget stays if you want the treehouse feel", rating: "9.7", price: "$37", url: "https://www.booking.com/hotel/lk/lion-wood-treehouse-thalkote3.html" }
            ].map((hotel, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between bg-white border border-gray-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow gap-4">
                <div>
                  <span className="font-extrabold text-lg text-[#292926] block sm:inline">{hotel.name}</span>
                  <span className="text-gray-500 text-sm sm:ml-2 block sm:inline">| rating <strong className="text-amber-600">{hotel.rating}</strong> | about <strong>{hotel.price}</strong> for 1 night</span>
                  {hotel.highlight && <p className="text-sm text-gray-500 mt-1 mb-0 italic"><strong>Highlight:</strong> {hotel.highlight}</p>}
                </div>
                <a href={hotel.url} target="_blank" rel="noopener noreferrer" className="shrink-0 px-5 py-2 bg-gray-50 hover:bg-gray-100 text-[#292926] text-sm font-bold rounded-xl border border-gray-200 transition-colors flex items-center gap-2 justify-center mt-2 sm:mt-0">
                  Booking <ExternalLink size={14}/>
                </a>
              </div>
            ))}
          </div>

          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <BedDouble size={24} style={{ color: colors.green }} />
            Other great hotel picks
          </h4>
          <div className="flex flex-col gap-4 mb-10">
            {[
              { name: "Sigiri Lion Lodge", highlight: "one of the cheapest solid stays near Sigiriya, simple and practical", rating: "9.1", price: "$18", url: "https://www.booking.com/hotel/lk/sigiri-lion-lodge.html" },
              { name: "Freedom Home Stay", highlight: "budget homestay feel, good if you want a simple local stay", rating: "9.1", price: "$18", url: "https://www.booking.com/hotel/lk/freedom-home-stay.html" },
              { name: "Sigiri Saman Home Stay", rating: "9.1", price: "$24", url: "https://www.booking.com/hotel/lk/sigiri-saman-home-stay.html" },
              { name: "Levona Garden Resort", highlight: "good-value Habarana option if you want easier safari access", rating: "9.2", price: "$29", url: "https://www.booking.com/hotel/lk/levona-garden-resort.html" },
              { name: "Lotus Eco Villa", rating: "9.0", price: "$32", url: "https://www.booking.com/hotel/lk/lotus-eco-villa-sigiriya.html" },
              { name: "Shady Mango Villa", rating: "9.6", price: "$34", url: "https://www.booking.com/hotel/lk/shady-mango-villa.html" },
              { name: "Shan Mango Homestay", highlight: "one of the nicest lower-cost stays if you want a homestay feel with a pool and strong reviews", rating: "9.9", price: "$40", url: "https://www.booking.com/hotel/lk/shan-mango-home-stay-eco-rooms.html" },
              { name: "Sigiriya Sun Shine Villa", rating: "9.0", price: "$41", url: "https://www.booking.com/hotel/lk/sigiriya-sun-shine-villa.html" },
              { name: "La Dolce Vita", highlight: "a prettier boutique-style option if you want something a bit more design-led", rating: "9.0", price: "$62", url: "https://www.booking.com/hotel/lk/la-dolce-vita.html" }
            ].map((hotel, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between bg-white border border-gray-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow gap-4">
                <div>
                  <span className="font-extrabold text-lg text-[#292926] block sm:inline">{hotel.name}</span>
                  <span className="text-gray-500 text-sm sm:ml-2 block sm:inline">| rating <strong className="text-amber-600">{hotel.rating}</strong> | about <strong>{hotel.price}</strong> for 1 night</span>
                  {hotel.highlight && <p className="text-sm text-gray-500 mt-1 mb-0 italic"><strong>Highlight:</strong> {hotel.highlight}</p>}
                </div>
                <a href={hotel.url} target="_blank" rel="noopener noreferrer" className="shrink-0 px-5 py-2 bg-gray-50 hover:bg-gray-100 text-[#292926] text-sm font-bold rounded-xl border border-gray-200 transition-colors flex items-center gap-2 justify-center mt-2 sm:mt-0">
                  Booking <ExternalLink size={14}/>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* 8.4 Where and what to eat */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>8.4</span> 
            Where and what to eat
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-6 max-w-4xl">
            The food here is more about <strong>good local meals and easy scenic stops</strong> than a huge restaurant scene. Expect a mix of <strong>family-run curry spots, casual cafés, and a few relaxed places with rock or garden views</strong>, and I would absolutely lean into the Sri Lankan food here because it is usually the best value.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            The dishes I would actually look for here are <strong>rice and curry, kottu, rotis, dhal, egg hoppers, coconut sambal, and fresh mango juice</strong>.
          </p>

          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <Utensils size={24} style={{ color: colors.green }} />
            Local food favorites
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { name: "Pradeep Restaurant", desc: "one of the most repeated traveler favorites in Sigiriya for curry and especially roti", try: "vegetable and cheese roti, rice and curry", price: "$3 to $8 per person", icon: Soup, bgColor: colors.terracotta, map: "https://www.google.com/maps/search/?api=1&query=Pradeep+Restaurant+Sigiriya" },
              { name: "Chooti Restaurant", desc: "a very common post-hike lunch stop for rice and curry, with big portions and an easy central location", try: "rice and curry, mango lassi", price: "$4 to $8 per person", icon: Utensils, bgColor: colors.charcoal, map: "https://www.google.com/maps/search/?api=1&query=Chooti+Restaurant+Sigiriya" },
              { name: "Kenoli Restaurant", desc: "one of the better family-run picks for home-style curries", try: "rice and curry, kottu, roti", price: "$3 to $6 per person", icon: Leaf, bgColor: colors.yellow, map: "https://www.google.com/maps/search/?api=1&query=Kenoli+Restaurant+Sigiriya" },
              { name: "Liya Restaurant", desc: "another easy local option if you want a simple meal without overthinking it", try: "string hoppers, kottu, vegetarian dishes", price: "$3 to $6 per person", icon: Flame, bgColor: colors.green, map: "https://www.google.com/maps/search/?api=1&query=Liya+Restaurant+Sigiriya" },
              { name: "SLK Café", desc: "a popular casual stop that travelers mention for fresh local food and big portions", try: "curry or vegetable kottu", price: "$4 to $8 per person", icon: Soup, bgColor: colors.terracotta, map: "https://www.google.com/maps/search/?api=1&query=S.L.Kafe+Sigiriya" }
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
                    <span className="text-sm text-gray-500"><strong>Try:</strong> {place.try}</span>
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
            Coffee, views, and evening stops
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { name: "Soul Food", desc: "best if you want a lighter vegan or vegetarian meal with a view", try: "smoothie bowls, wraps, coffee", price: "$10 to $13 per person", icon: Leaf, bgColor: colors.yellow, map: "https://www.google.com/maps/search/?api=1&query=Soul+Food+Sigiriya" },
              { name: "Mr. Caffeine Cafe & Eatery", desc: "one of the better coffee-and-breakfast stops", try: "paratha, curry, coffee", price: "$4 to $8 per person", icon: Coffee, bgColor: colors.charcoal, map: "https://www.google.com/maps/search/?api=1&query=Mr+Caffeine+Cafe+Eatery+Sigiriya" },
              { name: "Rasta Rant", desc: "better for drinks, evening atmosphere, and a slower night than for the food alone", try: "drinks and a casual dinner", price: "$5 to $10 per person", icon: Flame, bgColor: colors.terracotta, map: "https://www.google.com/maps/search/?api=1&query=Rasta+Rant+Sigiriya" },
              { name: "Sigiri Rock View Point - The Restaurant", desc: "one of the classic dinner-with-a-view places if you want that setting", try: "curry, fresh juices, seafood or chicken dishes", price: "$5 to $10 per person", icon: Utensils, bgColor: colors.green, map: "https://www.google.com/maps/search/?api=1&query=Sigiri+Rock+View+Point+The+Restaurant+Sigiriya" }
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
                    <span className="text-sm text-gray-500"><strong>Try:</strong> {place.try}</span>
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

        {/* 8.5 Day-by-day plan inside this city */}
        <div className="mb-16">
          {/* Day 1 */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
              <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>8.5.1</span> 
              Day one - Arrival day
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
              After the Colombo transfer, I would keep this first day light and use it for <strong>one main outing</strong> rather than trying to pack too much in. The best use of the afternoon is usually <strong>Pidurangala for sunset</strong>, and if you left Colombo early or simply want a cultural stop instead, <strong>Dambulla Cave Temple</strong> is the cleanest add-on.
            </p>

            <h4 className="text-xl font-extrabold mb-8 flex items-center gap-3">
              <Compass size={24} style={{ color: colors.green }} />
              Recommendation
            </h4>
            <div className="bg-[#FAFAFA] border border-gray-100 rounded-[2.5rem] p-8 md:p-12">
              <ul className="space-y-10 relative before:absolute before:inset-0 before:ml-[11px] md:before:ml-[13px] before:-translate-x-px before:h-full before:w-[2px] before:bg-gray-200">
                {[
                  { name: "Pidurangala Rock for sunset", desc: "this is still the best-value viewpoint here and, for a lot of people, the better overall view because you actually get to look back at Sigiriya Rock", effort: "easy to moderate, with a short scramble over boulders near the top", price: "about $3.20 per person", timing: "allow about 25 to 40 minutes up; sunset is the nicest time if you are doing it on arrival day", note: "cover shoulders and knees for the temple section, bring proper shoes, and take a phone light or torch for the way down", color: colors.yellow, img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoHvFoRqoLWMU4EeIagC653oPcKGqWI9t2qvt6NaTCfbXFKYXAUBkAaPQqEd8Kf25XcpZbtAnoHYB1b1mioXP0898P8tZaXA0HODkb4r2JXuM0btbYhbWuQJhY1sOwuy-KbNoqlKQ=w800-h800-k-no", map: "https://www.google.com/maps/search/?api=1&query=Pidurangala+Rock+Sigiriya" },
                  { name: "Optional: Dambulla Cave Temple", desc: "the best cultural add-on if your timing works, especially if you did not stop there on the way from Colombo", effort: "easy to moderate because of the long staircase", price: "about $6.35 per person", timing: "around 1 to 1.5 hours for the visit, plus transport time", note: "buy the ticket at the bottom, dress modestly, and expect monkeys around the steps", color: colors.terracotta, img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerEdB6ad5xFNWZaO4Dx5mQ5dQaMyjc4Em_hBLDXTqR97M7UCb3TkhD22wT9Wjc02ytUoOtEK2jfvBblyRyJCSm_MmIygaydWegasA-sSlZfSFkWu32ii2-roEivllPZKQVzMhKmg_eOVnmQ=w800-h800-k-no", map: "https://www.google.com/maps/search/?api=1&query=Dambulla+Cave+Temple+Sri+Lanka" },
                  { name: "Optional night add-on: slow loris walk", desc: "one of the more unusual wildlife activities around Sigiriya if you still have energy after dinner", best: "wildlife lovers who want something different from the usual rock-and-safari plan", note: "this is a short night activity, usually around 1 to 2 hours", color: colors.charcoal, img: "https://lh3.googleusercontent.com/p/AF1QipMrPhQyScNoB2mOQXSGRW6E2YcPoC3uhB_8LE5H=w800-h800-k-no", map: "https://www.google.com/maps/search/?api=1&query=Slow+Loris+Walk+Sigiriya" }
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
                          {stop.timing && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">Timing:</strong> {stop.timing}</p>}
                          {stop.note && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">Note:</strong> {stop.note}</p>}
                          {stop.best && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">Best for:</strong> {stop.best}</p>}
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
              <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>8.5.2</span> 
              Day two - Main Sigiriya day
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
              This is the full sightseeing day and I would start early. Do <strong>Sigiriya Rock first</strong>, then have a proper lunch and short rest, and use the afternoon for either <strong>an elephant safari</strong> or <strong>a slower village-and-lake experience</strong> depending on your energy.
            </p>

            <h4 className="text-xl font-extrabold mb-8 flex items-center gap-3">
              <Compass size={24} style={{ color: colors.green }} />
              Best way to do it
            </h4>
            <div className="bg-[#FAFAFA] border border-gray-100 rounded-[2.5rem] p-8 md:p-12">
              <ul className="space-y-10 relative before:absolute before:inset-0 before:ml-[11px] md:before:ml-[13px] before:-translate-x-px before:h-full before:w-[2px] before:bg-gray-200">
                {[
                  { name: "Sigiriya Rock Fortress", desc: "this is the main reason most people come here, and even with the high ticket price I still think it is worth doing on the 14-day route", effort: "moderate; lots of stairs, heat, and some waiting if you start late", price: "about $35 per adult, including the museum", timing: "get there as early as possible and allow about 2 to 3.5 hours", note: "the better photo of Sigiriya is from Pidurangala, but the actual historical site is here", color: colors.terracotta, img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerXqOs1WZbt__Axv5B12duyLs2YtlJia9NJhhHBHZ1kcACBf6y57V5CQX7UHYFr7MLfmC6kvVK3H0ZJSqox47r-lcbrheAGVzokdhJ33kGRejSEofiznholWx9uT00Ik-ijKSkq=w800-h800-k-no", map: "https://www.google.com/maps/search/?api=1&query=Sigiriya+Rock+Fortress+Sri+Lanka" },
                  { name: "Elephant safari in Minneriya, Kaudulla, and Hurulu National Parks", desc: "this is the best second activity if wildlife matters to you", effort: "low physical effort", timing: "afternoon safaris usually start around 1:00 to 2:00 PM, and the 3:00 to 5:00 PM window is often a good one", price: "about $35 per person for park entry, plus about $40 total per jeep/car. For 2 people, that works out to about $55 per person total.", tip: "Ask your accommodation which park is best that day and have them book it for you, since elephants move between the parks.", color: colors.green, img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqPfKCXEXCsX9qtTw4YGaf-1aImZbQ14Q36TKaIRg2P1EFAhmhtWGBKQBAEP6Oc7RaAdAPaovojJeLdXSkOXmb1tFm5tZPodsOEfsNiCtv8qZJG1PBfpq-YszhjMo5_cZS6TzAUlLFzGuM=w800-h800-k-no", map: "https://www.google.com/maps/search/?api=1&query=Minneriya+National+Park+Sri+Lanka" },
                  { name: "Optional instead of safari: Hiriwadunna village tour", desc: "the better softer alternative if you want a more local countryside experience", effort: "easy", price: "about $40 per person with lunch on a typical village tour", includes: "usually some mix of boat ride, village walk, and local meal", color: colors.charcoal, img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweo4FkFYkJCG8wYm1UKqaf_1GeXiF_jhrI-Nwn8YrpiXGSsMEFmFJHaEQh0kVNQcIe0ksZCRgS2HTxP87JsFbfVwvDrnqHsoOyhBazcehuFXL3itarfWeRsqkUVNi_alCu5qsoYJyg=w800-h800-k-no", map: "https://www.google.com/maps/search/?api=1&query=Hiriwadunna+Village+Sri+Lanka" },
                  { name: "Optional lighter version: Hiriwadunna Lake boat ride only", desc: "a good low-effort option if you do not want the full village tour", effort: "very easy", price: "about $1.60 per person, plus tip", timing: "about 1 hour", note: "bring a hat and sunglasses because it gets hot quickly", color: colors.yellow, img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqNyhWrweUwVbgU0pAbaFeilVnk_c2QrhF8ty44nNWcWGpZfH_GCOvL5QzpWeRLOfzXc4UlxlmkZZ4CxXecK7Zc7Ib_cHAHS-81kltP0gXFWNeme4qb5JK1xrqa9OSvI9YYlcOsvfBkUkKc=w800-h800-k-no", map: "https://www.google.com/maps/search/?api=1&query=Hiriwadunna+Lake+Sri+Lanka" }
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
                          {stop.timing && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">Timing:</strong> {stop.timing}</p>}
                          {stop.note && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">Keep in mind:</strong> {stop.note}</p>}
                          {stop.tip && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">Tip:</strong> {stop.tip}</p>}
                          {stop.includes && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">What it includes:</strong> {stop.includes}</p>}
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
                        />
                      </div>

                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 8.5.3 Quick notes */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
              <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>8.5.3</span> 
              Quick notes for Sigiriya
            </h3>
            <div className="bg-yellow-50 border border-yellow-100 p-8 rounded-[2rem]">
              <h4 className="text-xl font-extrabold mb-5 flex items-center gap-3" style={{ color: colors.yellow }}>
                <Info size={24} />
                Keep in mind
              </h4>
              <ul className="space-y-4">
                {[
                  { text: "Pidurangala is strongest at sunrise or sunset, and Sigiriya Rock is best as early as possible before the heat and crowds build", label: "Do the rocks at the right hour:" },
                  { text: "the final part is a real rock scramble, especially if you go down after dark", label: "Wear proper shoes for Pidurangala:" },
                  { text: "this matters for early or sunset Pidurangala hikes", label: "Bring a torch or use your phone light:" },
                  { text: "especially for Pidurangala, because getting back after dark can be annoying and that road is also known for wild elephant crossings", label: "Arrange your tuk-tuk return in advance:" },
                  { text: "for Pidurangala and Dambulla, cover shoulders and knees and be ready to remove shoes in the sacred part", label: "Dress for temple sections:" }
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
        {/* 8.6 Estimated destination cost */}
        <div className="mb-4">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>8.6</span> 
            Estimated destination cost
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            This is a rough reference <strong>per person</strong>, assuming <strong>2 people sharing a room for 2 nights</strong>, with intercity transport left out.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div style={{ backgroundColor: colors.green, boxShadow: customShadow }} className="p-8 rounded-[2rem] text-white flex flex-col transition-transform hover:-translate-y-1">
              <span className="font-bold uppercase tracking-widest text-[14px] text-white/90 mb-4 block">Base 2-night Sigiriya stay</span>
              <span className="text-3xl lg:text-4xl font-extrabold mb-6">about $75 to $105<span className="text-sm font-medium text-white/70 block mt-2 tracking-normal normal-case">per person total</span></span>
              <p className="text-sm text-white/90 leading-relaxed mt-auto pt-6 border-t border-white/20">
                <strong>Includes:</strong> budget to lower-mid stay for <strong>2 nights</strong>, local meals, <strong>Sigiriya Rock</strong>, and <strong>Pidurangala</strong>
              </p>
            </div>

            <div style={{ backgroundColor: colors.charcoal, boxShadow: customShadow }} className="p-8 rounded-[2rem] text-white flex flex-col transition-transform hover:-translate-y-1">
              <span className="font-bold uppercase tracking-widest text-[14px] text-white/90 mb-4 block">Add Dambulla Cave Temple</span>
              <span className="text-3xl lg:text-4xl font-extrabold mb-6">about $82 to $112<span className="text-sm font-medium text-white/70 block mt-2 tracking-normal normal-case">per person total</span></span>
            </div>

            <div style={{ backgroundColor: colors.terracotta, boxShadow: customShadow }} className="p-8 rounded-[2rem] text-white flex flex-col transition-transform hover:-translate-y-1">
              <span className="font-bold uppercase tracking-widest text-[14px] text-white/95 mb-4 block">Add elephant safari</span>
              <span className="text-3xl lg:text-4xl font-extrabold mb-6">about $130 to $160<span className="text-sm font-medium text-white/80 block mt-2 tracking-normal normal-case">per person total</span></span>
            </div>

            <div style={{ backgroundColor: colors.yellow, boxShadow: customShadow }} className="p-8 rounded-[2rem] text-[#292926] flex flex-col transition-transform hover:-translate-y-1">
              <span className="font-bold uppercase tracking-widest text-[14px] text-[#292926]/90 mb-4 block">Add Hiriwadunna village tour</span>
              <span className="text-3xl lg:text-4xl font-extrabold mb-6">about $115 to $145<span className="text-sm font-medium text-[#292926]/70 block mt-2 tracking-normal normal-case">per person total</span></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SigiriyaPage;
