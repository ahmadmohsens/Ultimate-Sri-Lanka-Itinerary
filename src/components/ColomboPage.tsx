import React from 'react';
import { 
  CheckCircle2,
  Smartphone,
  Car,
  Train,
  BedDouble,
  Building2,
  Utensils,
  Fish,
  Flame,
  Soup,
  Leaf,
  ShoppingBag,
  Coffee,
  MapPin,
  ExternalLink,
  Moon,
  Compass,
  Star,
  Info,
  Map
} from 'lucide-react';

import NextStepCard from './NextStepCard';

interface ColomboPageProps {
  colors: {
    green: string;
    yellow: string;
    terracotta: string;
    beige: string;
    charcoal: string;
  };
  openMap: (query: string) => void;
  colomboMapLocations: any[];
  setCurrentPage: (page: string) => void;
  scrollToTop: () => void;
}

const ColomboPage: React.FC<ColomboPageProps> = ({ colors, openMap, colomboMapLocations, setCurrentPage, scrollToTop }) => {
  const customShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.03)";

  return (
    <div className="animate-in slide-in-from-right duration-700">
      
      {/* Chapter Image Banner */}
      <section style={{ boxShadow: customShadow }} className="bg-white border border-gray-50 rounded-[2.5rem] overflow-hidden mb-8">
        <div className="relative h-[450px] w-full">
          <img 
            src="https://images.unsplash.com/photo-1704797390767-de3e63fa939f?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Colombo Lotus Tower Skyline" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#292926]/90 via-[#292926]/30 to-transparent"></div>
          <div className="absolute bottom-12 left-12 md:bottom-16 md:left-14 text-white">
            <span className="text-[14px] font-bold tracking-[0.4em] uppercase mb-4 block text-white/90">
              Chapter 6 & 7
            </span>
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none">
              Arrival & <br/>Colombo
            </h2>
          </div>
        </div>
      </section>

      {/* --- CHAPTER 6: ARRIVAL IN COLOMBO --- */}
      <section style={{ boxShadow: customShadow }} className="bg-white border border-gray-50 rounded-[2.5rem] overflow-hidden mb-8 p-8 md:p-14">
        <div className="mb-10">
          <span className="text-[14px] font-bold tracking-[0.4em] uppercase mb-4 block text-gray-600">
            Part 2. Arrival and the Trip Step by Step
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
            Chapter 6. Arrival in Colombo, Sri Lanka
          </h2>
        </div>

        {/* 6.1 What to do after landing */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>6.1</span> 
            What to do after landing
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            Arrival in Sri Lanka is usually much easier than people expect. The goal is to follow the order calmly, so you leave connected, with a little cash, and with your hotel transfer sorted.
          </p>

          <div className="bg-[#FAFAFA] border border-gray-100 rounded-[2.5rem] p-8 md:p-12 mb-10">
            <h4 className="text-xl font-extrabold mb-10 flex items-center gap-3">
              <CheckCircle2 size={24} style={{ color: colors.green }} />
              Arrival order
            </h4>
            <div className="grid md:grid-cols-5 gap-8 relative">
              <div className="hidden md:block absolute top-5 left-10 right-10 border-t-2 border-dashed" style={{ borderColor: colors.green + '40', zIndex: 0 }}></div>
              {[
                "Go through immigration: it is very fast and usually takes around 10 seconds",
                "Collect your baggage",
                "Withdraw enough for the first day or two, then get more later in the city",
                "Buy and set up your SIM card",
                "Leave the airport and head to your hotel"
              ].map((step, idx) => (
                <div key={idx} className="relative z-10 flex flex-col items-center text-center md:items-start md:text-left gap-4">
                  <div className="w-10 h-10 rounded-full border-4 border-[#FAFAFA] shadow-md flex items-center justify-center text-white text-sm font-black shrink-0 mx-auto md:mx-0" style={{ backgroundColor: colors.green }}>
                    {idx + 1}
                  </div>
                  <p className="text-sm md:text-base text-gray-700 m-0 leading-relaxed font-bold">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 6.2 SIM purchase */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>6.2</span> 
            SIM purchase and internet setup
          </h3>
          <div className="flex gap-5 items-start p-6 md:p-8 rounded-3xl border border-gray-100 bg-[#FAFAFA]">
            <Smartphone size={28} style={{ color: colors.terracotta }} className="shrink-0 mt-1" />
            <p className="text-lg text-gray-700 leading-relaxed m-0 font-medium max-w-4xl">
              Buy your SIM card at the airport. It is very easy, very important, and usually better value than an eSIM because it is so cheap. At Dialog, it usually costs around <strong>US$4 to US$6</strong> for about <strong>20GB</strong> valid for around a month, and setup normally takes only a few minutes.
            </p>
          </div>
        </div>

        {/* 6.3 Airport transfer options */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>6.3</span> 
            Airport transfer options and the best way to reach your first hotel
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            For the first ride from the airport, the main choices are <strong>PickMe</strong>, a <strong>pre-booked private driver</strong>, the <strong>airport 187 Airport–Colombo Fort luxury bus</strong>, or a <strong>hotel transfer</strong>. The best option depends on your budget, luggage, and how easy you want arrival day to feel.
          </p>

          <h4 className="text-xl font-extrabold mb-6">Main options</h4>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
               <div className="p-3 rounded-xl shrink-0" style={{ backgroundColor: colors.yellow + '15', color: colors.yellow }}>
                 <Smartphone size={24} />
               </div>
               <div>
                 <h5 className="font-extrabold text-lg mb-1">PickMe</h5>
                 <p className="text-gray-600">usually the best-value option for most travelers, often around <strong>$7–15</strong></p>
               </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
               <div className="p-3 rounded-xl shrink-0" style={{ backgroundColor: colors.terracotta + '15', color: colors.terracotta }}>
                 <Car size={24} />
               </div>
               <div>
                 <h5 className="font-extrabold text-lg mb-1">Private driver</h5>
                 <p className="text-gray-600">best if you are booking a driver for the whole trip, usually around <strong>$50–60 per day (contact <a href="https://indiasomeday.com" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80">indiasomeday.com</a>)</strong></p>
               </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
               <div className="p-3 rounded-xl shrink-0" style={{ backgroundColor: colors.charcoal + '15', color: colors.charcoal }}>
                 <Train size={24} />
               </div>
               <div>
                 <h5 className="font-extrabold text-lg mb-1">Bus 187 to Colombo Fort</h5>
                 <p className="text-gray-600">the cheapest option, usually <strong>under $1. You’ll need another ride from bus stop to the hotel</strong></p>
               </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
               <div className="p-3 rounded-xl shrink-0" style={{ backgroundColor: colors.green + '15', color: colors.green }}>
                 <BedDouble size={24} />
               </div>
               <div>
                 <h5 className="font-extrabold text-lg mb-1">Airport taxi or hotel transfer</h5>
                 <p className="text-gray-600">the easiest pre-arranged option, but often more expensive, usually around $10–$20. It is about <strong>45 to 90 minutes by car</strong>, depending on traffic and hotel area.</p>
               </div>
            </div>
          </div>

          <div style={{ backgroundColor: colors.charcoal, boxShadow: customShadow }} className="rounded-[2.5rem] p-8 md:p-12 mb-8 text-white">
            <span className="block font-black text-[14px] mb-3 uppercase tracking-[0.2em] text-white/80">My recommendation</span>
            <p className="text-xl leading-relaxed m-0 font-medium text-white/90">
              If you want the smoothest arrival, book a private driver or hotel pickup in advance. If you want the best balance of ease and price, use PickMe. I would leave the airport bus for budget travelers arriving light. I personally used a private driver for the whole trip, and for arrival day it was easily the smoothest option.
            </p>
          </div>
        </div>

        {/* 6.4 What to do on the first evening */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>6.4</span> 
            What to do on the first evening
          </h3>
          <div className="bg-gray-50 border border-gray-100 p-8 rounded-[2rem] flex items-start gap-5">
            <Moon size={28} style={{ color: colors.charcoal }} className="shrink-0 mt-1 opacity-70" />
            <div className="text-lg text-gray-700 leading-relaxed">
              <p className="mb-4">
                Keep the first evening easy. Check in, freshen up, eat something simple, and rest after the flight.
              </p>
              <p className="m-0 font-medium">
                If you arrive late, there is no need to do anything except settle in, get food from your hotel, and sleep. If you arrive early, save your energy and keep the first night light anyway.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CHAPTER 7: COLOMBO --- */}
      <section style={{ boxShadow: customShadow }} className="bg-white border border-gray-50 rounded-[2.5rem] overflow-hidden mb-8 p-8 md:p-14">
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
            Chapter 7. Colombo
          </h2>
        </div>

        {/* 7.1 City overview */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>7.1</span> 
            City overview
          </h3>
          <div className="text-lg text-gray-600 leading-relaxed max-w-4xl space-y-4">
            <p>
              Colombo works best as the soft landing at the start of the trip. Use it to recover from the flight, eat well, and settle in before the hills and coast rather than trying to cover every major sight.
            </p>
            <p className="font-medium text-[#292926]">
              For most trips, <strong>1 to 2 nights</strong> is enough. Stay <strong>2 nights</strong> if you want enough time to discover Colombo properly over one full day without rushing.
            </p>
          </div>
        </div>

        {/* MAP INSERTION REMOVED */}

        {/* 7.2 Where to stay */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>7.2</span> 
            Where to stay
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            For Colombo, nice budget hotels are the sweet spot. The goal is a clean, easy, well-rated base that feels comfortable for a short city stay without paying for a full luxury stop.
          </p>

          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <Map size={24} style={{ color: colors.charcoal }} />
            Best areas to stay
          </h4>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { area: "Cinnamon Gardens", desc: "calmer, greener, and one of the nicest areas for a polished first stay" },
              { area: "Havelock Town / Colombo 5", desc: "practical, well-connected, and good for cafés, restaurants, and day-to-day movement" },
              { area: "Malabe / Hokandara side", desc: "quieter and often better value, but farther from the main Colombo sights" }
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
              { name: "Heritage Villa colombo7", area: "Cinnamon Gardens", rating: "8.1", price: "$19", url: "https://www.booking.com/hotel/lk/heritage-villa-colombo7.html" },
              { name: "COLOMBO Eco Lodge & Wellness Centre", area: "Malabe", rating: "9.6", price: "$25", url: "https://www.booking.com/hotel/lk/colombo-eco-lodge-amp-wellness-retreat.html" },
              { name: "Rai Villa Colombo", area: "Hokandara / Malabe side", rating: "9.1", price: "$25", url: "https://www.booking.com/hotel/lk/highbury-colombo-cottage.html" },
              { name: "Greenscape Colombo", area: "Havelock Town", rating: "8.5", price: "$32", url: "https://www.booking.com/hotel/lk/evergreen-colombo-colombo.html" },
              { name: "Lost & Found - Colombo", area: "Kollupitiya", rating: "8.2", price: "$22.50", url: "https://www.booking.com/hotel/lk/stay-lost-amp-found-colombo.html" },
              { name: "Four Petals Inn", area: "Wellawatte", rating: "8.5", price: "$27", url: "https://www.booking.com/hotel/lk/four-petals-inn.html" }
            ].map((hotel, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between bg-white border border-gray-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow gap-4">
                <div>
                  <span className="font-extrabold text-lg text-[#292926] block sm:inline">{hotel.name}</span>
                  <span className="text-gray-500 text-sm sm:ml-2 block sm:inline">| {hotel.area} | rating <strong className="text-amber-600">{hotel.rating}</strong> | about <strong>{hotel.price}</strong></span>
                </div>
                <a href={hotel.url} target="_blank" rel="noopener noreferrer" className="shrink-0 px-5 py-2 bg-gray-50 hover:bg-gray-100 text-[#292926] text-sm font-bold rounded-xl border border-gray-200 transition-colors flex items-center gap-2 justify-center">
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
              { name: "Havelock Bungalow", area: "Havelock Town", rating: "8.8", price: "$41", url: "https://www.booking.com/hotel/lk/gini-bungalow.html" },
              { name: "C 1 Colombo Fort", area: "Fort", rating: "8.1", price: "$37.80", url: "https://www.booking.com/hotel/lk/c-1-colombo-fort.html" },
              { name: "Marine Suites", area: "Kollupitiya", rating: "8.5", price: "$47.76", url: "https://www.booking.com/hotel/lk/marine-suites.html" },
              { name: "Alma Boutique Hostel", area: "Bambalapitiya", rating: "9.1", price: "$49.50", url: "https://www.booking.com/hotel/lk/alma-hostel-and-garden-cafe-colombo.html" },
              { name: "Dolce Italia Rooms", area: "Havelock Town", rating: "8.8", price: "$40.50", url: "https://www.booking.com/hotel/lk/dolce-casa.html" },
              { name: "Granbell Hotel Colombo", area: "Kollupitiya", rating: "8.7", price: "$54.19", url: "https://www.booking.com/hotel/lk/granbell-colombo.html" }
            ].map((hotel, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between bg-white border border-gray-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow gap-4">
                <div>
                  <span className="font-extrabold text-lg text-[#292926] block sm:inline">{hotel.name}</span>
                  <span className="text-gray-500 text-sm sm:ml-2 block sm:inline">| {hotel.area} | rating <strong className="text-amber-600">{hotel.rating}</strong> | about <strong>{hotel.price}</strong></span>
                </div>
                <a href={hotel.url} target="_blank" rel="noopener noreferrer" className="shrink-0 px-5 py-2 bg-gray-50 hover:bg-gray-100 text-[#292926] text-sm font-bold rounded-xl border border-gray-200 transition-colors flex items-center gap-2 justify-center">
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
                These prices are strong for Colombo, but they can move a lot depending on dates and room type. If you find one you like, book it early and keep a free-cancellation option if possible.
              </p>
            </div>
          </div>
        </div>

        {/* 7.3 Where and what to eat */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>7.3</span> 
            Where and what to eat
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            Colombo is a strong first food stop because it gives you both very local rice-and-curry meals and a few polished sit-down options.
          </p>

          {/* Budget Places */}
          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <Utensils size={24} style={{ color: colors.green }} />
            Budget places
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { name: "Mayura Hotel / Restaurant", desc: "Sri Lankan / Tamil-style rice and curry, especially crab or mutton", price: "about $1 to $2 for standard plates, crab higher", icon: Fish, bgColor: colors.green, map: "Mayura Hotel Mayura Restaurant Colombo" },
              { name: "Abdul Hameed Street", desc: "Famous evening street-food stretch for shawarma, kebabs, falooda", price: "about $1 to $6 depending on what you try", icon: Flame, bgColor: colors.terracotta, map: "Abdul Hameed Street Colombo" },
              { name: "Curry Pot", desc: "casual Sri Lankan rice and curry", price: "about $2 to $5", icon: Soup, bgColor: colors.charcoal, map: "Curry Pot Colombo" },
              { name: "Ranbath Organic Food", desc: "vegetarian / vegan rice and curry", price: "about $3 to $5", icon: Leaf, bgColor: colors.yellow, map: "Ranbath Organic Food Colombo" },
              { name: "Beruwala Eating House", desc: "Muslim Sri Lankan rice dishes, good for kidu rice", price: "about $1 to $3 for usual dishes", icon: Utensils, bgColor: colors.green, map: "Beruwala Eating House Colombo" },
              { name: "Praneetha Foods", desc: "generous rice-and-curry buffet style meal", price: "about $2+ depending on what you add", icon: Utensils, bgColor: colors.terracotta, map: "Praneetha Foods Colombo" },
              { name: "Good Market, Racecourse", desc: "food market with variety instead of one restaurant", price: "price varies by stall", icon: ShoppingBag, bgColor: colors.charcoal, map: "Good Market Racecourse Colombo" },
              { name: "Galle Face Green food stalls", desc: "street snacks and casual evening bites by the sea", price: "very cheap to low-cost snacks", icon: Coffee, bgColor: colors.yellow, map: "Galle Face Green food stalls Colombo" }
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
              { name: "New Banana Leaf", desc: "biryani and Sri Lankan Muslim-style rice dishes", price: "about $3 to $7 per person", icon: Utensils, bgColor: colors.terracotta, map: "New Banana Leaf Colombo" },
              { name: "Dutch Burgher Union / VOC Cafe", desc: "heritage-style sit-down meal, good for lamprais", price: "about $6 to $8 for mains", icon: Utensils, bgColor: colors.charcoal, map: "Dutch Burgher Union VOC Cafe Colombo" },
              { name: "Shoulders by Harpo’s", desc: "polished casual dinner", price: "Mid-high", icon: Utensils, bgColor: colors.yellow, map: "Shoulders by Harpo's Colombo" },
              { name: "Palmyrah Restaurant", desc: "refined Jaffna / Northern Sri Lankan food and seafood", price: "about $9 to $17+", icon: Fish, bgColor: colors.green, map: "Palmyrah Restaurant Colombo" },
              { name: "Thai Boulevard", desc: "good break from local food", price: "about $8+ for mains", icon: Soup, bgColor: colors.charcoal, map: "Thai Boulevard Colombo" },
              { name: "The Gallery Cafe", desc: "stylish meal, dessert, or coffee stop", price: "about $7 to $18+ for standard mains", icon: Coffee, bgColor: colors.terracotta, map: "The Gallery Cafe Colombo" }
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
              { name: "Nihonbashi by Dharshan", desc: "Japanese fine dining", price: "High-end — about $40+ per person", icon: Fish, bgColor: colors.yellow, map: "Nihonbashi by Dharshan Colombo" },
              { name: "Paradise Road Tintagel", desc: "elegant hotel dining", price: "about $6 to $22+", icon: Utensils, bgColor: colors.green, map: "Paradise Road Tintagel Colombo" },
              { name: "Avartana", desc: "South Indian fine dining", price: "High-end", icon: Utensils, bgColor: colors.terracotta, map: "Avartana Colombo" },
              { name: "Ministry of Crab", desc: "Colombo’s best-known seafood splurge", price: "smaller dishes about $10 to $20, crab higher", icon: Fish, bgColor: colors.charcoal, map: "Ministry of Crab Colombo" }
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

        {/* 7.4 Itinerary Timelines */}
        <div className="mb-16">
          {/* Day 1 */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
              <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>7.4.1</span> 
              Day one — Arrival day
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
              Keep the first day light and central so you are not dealing with too much traffic after landing. The easiest shape is <strong>Gangaramaya Temple → optional Lotus Tower → Galle Face Green at sunset</strong>.
            </p>

            <h4 className="text-xl font-extrabold mb-8 flex items-center gap-3">
              <Compass size={24} style={{ color: colors.green }} />
              Recommendation
            </h4>
            <div className="bg-[#FAFAFA] border border-gray-100 rounded-[2.5rem] p-8 md:p-12">
              <ul className="space-y-10 relative before:absolute before:inset-0 before:ml-[11px] md:before:ml-[13px] before:-translate-x-px before:h-full before:w-[2px] before:bg-gray-200">
                {[
                  { name: "Gangaramaya Temple", desc: "best first cultural stop in central Colombo", price: "about $1 to $2 per person", note: "dress modestly, cover shoulders and knees, and remove shoes before entering", color: colors.yellow, img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerp041nf40p7WIZbxNAJrsMiToY6Tyg4RvDwxZTxm7fkl68iUrZ3d1ssYQwnU7HVURQH2j_IXtjcDMz1tMaCCJFuxy3KQnXPWNBGEddESijsdS6E9aMWMCtme56VifXfQdVndXiAQ=w800-h800-k-no", map: "Gangaramaya Temple Colombo" },
                  { name: "Optional: Colombo Lotus Tower", desc: "add this only if you still have energy and want skyline views", price: "about $20 tourist pass", link: {text: "Colombo Lotus Tower official site", url: "https://colombolotustower.lk/"}, color: colors.charcoal, img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqqRVIjwfRsVE6v6mf5wUtHVymL3o8DauMA2d3gdJJ8aSeV9ayo1ActkGyq34eA9SifmVevC_wNkaR8bNHYLcbXT5hjuyFLnA4IzRjaompr9OtObNKFcwP0O7wNGZ_thbMKtyVuOQ=w800-h800-k-no", map: "Colombo Lotus Tower" },
                  { name: "Galle Face Green at sunset", desc: "easiest end to the day for sea breeze, open space, and casual snacks", price: "free", best: "families, kids, and a relaxed evening walk", color: colors.terracotta, img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweq589jRPpLd_EQwHaqk3Qwvllva0ZWCbDuhqGKIVcmhiVRFaQyl3VC-e68u2suxACMj2EL_IT0CH-InRRdwg6DfT9_RQa6dG415NXwXHALgZksXSWqrdwH5Lko-WDj5n3avsR759Q=w800-h800-k-no", map: "Galle Face Green Colombo" }
                ].map((stop, idx) => (
                  <li key={idx} className="relative pl-10 md:pl-14">
                    <div style={{ backgroundColor: stop.color }} className="absolute left-0 top-1.5 w-6 h-6 md:w-7 md:h-7 rounded-full border-4 border-[#FAFAFA] shadow-sm z-10"></div>
                    <div className="bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row overflow-hidden items-stretch">
                      
                      <div className="flex-1 flex flex-col p-6 md:p-8">
                        <h5 className="font-extrabold text-xl md:text-2xl mb-3">{stop.name}</h5>
                        <p className="text-gray-600 text-lg mb-5">{stop.desc}</p>
                        
                        <div className="space-y-3 mb-6 flex-grow">
                          {stop.price && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">Price:</strong> {stop.price}</p>}
                          {stop.note && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">Keep in mind:</strong> {stop.note}</p>}
                          {stop.best && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">Best for:</strong> {stop.best}</p>}
                        </div>
                        
                        <div className="flex flex-wrap gap-4 border-t border-gray-100 pt-5 mt-auto">
                          {stop.link && (
                            <a href={stop.link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-bold text-gray-500 hover:text-[#292926]">
                              <ExternalLink size={16}/> {stop.link.text}
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

          {/* Day 2 */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
              <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>7.4.2</span> 
              Day two — Exploring Colombo
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
              This is the more active Colombo day and gives you the strongest street-level side of the city. The cleanest route is <strong>Red Mosque → Pettah Market → optional Floating Market or Colombo National Museum</strong>, then <strong>Abdul Hameed Street</strong> if you want a more local food stop in the evening.
            </p>

            <h4 className="text-xl font-extrabold mb-8 flex items-center gap-3">
              <Compass size={24} style={{ color: colors.green }} />
              Best way to do it
            </h4>
            <div className="bg-[#FAFAFA] border border-gray-100 rounded-[2.5rem] p-8 md:p-12">
              <ul className="space-y-10 relative before:absolute before:inset-0 before:ml-[11px] md:before:ml-[13px] before:-translate-x-px before:h-full before:w-[2px] before:bg-gray-200">
                {[
                  { name: "Red Mosque", desc: "quick, high-impact stop and one of Colombo’s most memorable buildings", price: "free", note: "wear clothing that covers shoulders and knees", color: colors.terracotta, img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweppteU-tyAjrlO60GyMdPApOYkjBzN3N-DRkdSWXcwBwpuaWmW1o0msEqMAetU7fmtSw2_1Pey48HUCUN-6FJhgRDX0qjtmHXvJ3PdZA7f8yGveFAihrFqhIQtmnwOV_tSYvmI=w800-h800-k-no", map: "Red Mosque Colombo" },
                  { name: "Pettah Market", desc: "best place to feel Colombo at street level", price: "free", timing: "go earlier for less heat", color: colors.green, img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwer3lEuWD1qDRZHxOZmp7A6Yw9UreJDBCXPMf2Esa8Y9G3hr9vhVrxdeKFmSGa_-Hgc6n1aFHEItNbJ3Xvw_5L5EegpBVYQe9ZjjL5Fag31H1Hqba1P8Dl0SWK3WYZdtLPs9y-oWsxwv9VqD=w800-h800-k-no", map: "Pettah Market Colombo" },
                  { name: "Abdul Hameed Street", desc: "lively street-food stop in Colombo 12", effort: "moderate", price: "about $1 to $4", timing: "best in the evening", color: colors.charcoal, img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwernydGY4iar2ZjhFZkr2ftDo6vxpcmq8AvbV8Ncj3JN8kln59UQRv8-f0F0JpoN0sjosODnhrIIJmjavSoYjMpbKKR2ZgWse6B6EYYXVcLFAPFdtupaw5dOfV4PIzG3wkect2Ym=w800-h800-k-no", map: "Abdul Hameed Street Colombo" },
                  { name: "Optional: Pettah Floating Market", desc: "light extra stop", price: "free", color: colors.yellow, img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqfAH1vHx0E4jTfILw93DQzaB6JjzEi4plunsHnCRK-vtdgEzJ46pJWONw1UPuqzE7Lh_kJr0Voi3T4F73xqgqUmdpu5-BTdUMClsn2222gTme9CygjfcxydZ328Tm0Jw20v5cllL0Dq5HQ=w800-h800-k-no", map: "Pettah Floating Market Colombo" },
                  { name: "Optional alternative: Colombo National Museum", desc: "better choice if you want history", price: "about $5", color: colors.charcoal, img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepqWnIPMJvLlZOw6KMB9OekIVy1gXtYDrRdcv099ocuvrEHEttMHcPyYBj5jnCxyyxwGERW3KOY54IrvHgQy5CWnknD-4GDa6PC7yqBbA4KRrcURCNl2J4ZGXBoMQlX7-X-MW1YNg=w800-h800-k-no", map: "Colombo National Museum" }
                ].map((stop, idx) => (
                  <li key={idx} className="relative pl-10 md:pl-14">
                    <div style={{ backgroundColor: stop.color }} className="absolute left-0 top-1.5 w-6 h-6 md:w-7 md:h-7 rounded-full border-4 border-[#FAFAFA] shadow-sm z-10"></div>
                    <div className="bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row overflow-hidden items-stretch">
                      
                      <div className="flex-1 flex flex-col p-6 md:p-8">
                        <h5 className="font-extrabold text-xl md:text-2xl mb-3">{stop.name}</h5>
                        <p className="text-gray-600 text-lg mb-5">{stop.desc}</p>
                        
                        <div className="space-y-3 mb-6 flex-grow">
                          {stop.price && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">Price:</strong> {stop.price}</p>}
                          {stop.effort && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">Effort:</strong> {stop.effort}</p>}
                          {stop.timing && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">Timing:</strong> {stop.timing}</p>}
                          {stop.note && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">Keep in mind:</strong> {stop.note}</p>}
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

          {/* 7.4.3 General notes */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
              <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>7.4.3</span> 
              General notes for Colombo
            </h3>
            <div className="bg-yellow-50 border border-yellow-100 p-8 rounded-[2rem]">
              <h4 className="text-xl font-extrabold mb-5 flex items-center gap-3" style={{ color: colors.yellow }}>
                <Info size={24} />
                Keep in mind
              </h4>
              <ul className="space-y-4">
                <li className="flex gap-4 items-start">
                  <div className="w-2 h-2 rounded-full mt-2.5 shrink-0" style={{ backgroundColor: colors.yellow }}></div>
                  <p className="text-lg text-gray-700 leading-relaxed m-0 font-medium">
                    <strong>Recommended transport:</strong> PickMe is the easiest option for day-to-day movement between areas
                  </p>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-2 h-2 rounded-full mt-2.5 shrink-0" style={{ backgroundColor: colors.yellow }}></div>
                  <p className="text-lg text-gray-700 leading-relaxed m-0 font-medium">
                    <strong>Dress code:</strong> cover shoulders and knees for religious sites
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 7.5 Day-by-day plan inside this city */}
        <div className="mb-16">
          {/* Day 1 */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
              <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>7.5.1</span> 
              Day one - Arrival day
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
              Keep the first day central and easy so you are not forcing too much after the flight. You can walk the central Fort area and use short tuk-tuk rides where needed. The cleanest first-evening plan in Colombo is <strong>Galle Face Green → optional sunset drinks at a rooftop → dinner in the Fort or Pettah area</strong>.
            </p>

            <h4 className="text-xl font-extrabold mb-8 flex items-center gap-3">
              <Compass size={24} style={{ color: colors.green }} />
              Recommendation
            </h4>
            <div className="bg-[#FAFAFA] border border-gray-100 rounded-[2.5rem] p-8 md:p-12">
              <ul className="space-y-10 relative before:absolute before:inset-0 before:ml-[11px] md:before:ml-[13px] before:-translate-x-px before:h-full before:w-[2px] before:bg-gray-200">
                {[
                  { name: "Galle Face Green", desc: "the easiest first walk in the city and a good way to settle in before the evening starts", effort: "very easy / low", price: "Free", note: "best in the late afternoon when the food stalls start opening and the heat drops", color: colors.yellow, map: "Galle Face Green", img: "https://images.unsplash.com/photo-1586008481877-7dd7c8236d00?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                  { name: "Optional: Sunset drinks at a rooftop (e.g., Granbell or Galle Face Hotel)", desc: "a light add-on if you want a quieter view back over the city from the water", effort: "very easy / low", price: "pay for drinks", color: colors.charcoal, map: "Granbell Hotel Colombo", img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                  { name: "Dinner in the Fort or Pettah area", desc: "finish the first day with a good local-style meal within walking distance of the central area", effort: "very easy / low", price: "about $3 to $8 per person", color: colors.terracotta, map: "Pettah Market", img: "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
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
              <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>7.5.2</span> 
              Day two - Exploring Colombo
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
              This is the fuller Colombo day and I would start with the temples and museums, then finish with a nicer dinner. PickMe is the easiest way to move between these areas.
            </p>

            <h4 className="text-xl font-extrabold mb-8 flex items-center gap-3">
              <Compass size={24} style={{ color: colors.green }} />
              Best way to do it
            </h4>
            <div className="bg-[#FAFAFA] border border-gray-100 rounded-[2.5rem] p-8 md:p-12">
              <ul className="space-y-10 relative before:absolute before:inset-0 before:ml-[11px] md:before:ml-[13px] before:-translate-x-px before:h-full before:w-[2px] before:bg-gray-200">
                {[
                  { name: "Gangaramaya Temple", desc: "the most famous temple in Colombo, known for its eclectic architecture and collection of artifacts", effort: "easy / low", price: "about $1.50 per person", note: "dress modestly; shoulders and knees must be covered", color: colors.green, map: "Gangaramaya Temple", img: "https://images.unsplash.com/photo-1661928684586-eab4463502be?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                  { name: "Red Mosque (Jami Ul-Alfar Mosque)", desc: "the iconic red-and-white striped mosque in Pettah, one of the most photographed buildings in the city", effort: "easy / low", price: "Free", note: "best viewed from the outside; dress modestly if entering", color: colors.terracotta, map: "Red Mosque Colombo", img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                  { name: "Colombo National Museum", desc: "the largest museum in Sri Lanka, perfect for a deeper dive into the island's history and art", effort: "easy / low", price: "about $3 to $5 per person", color: colors.yellow, map: "Colombo National Museum", img: "https://images.unsplash.com/photo-1586008481877-7dd7c8236d00?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                  { name: "Dinner at Ministry of Crab or The Gallery Cafe", desc: "finish your Colombo stay with one of the city's most famous dining experiences", effort: "very easy / low", price: "about $20 to $50+ per person", color: colors.charcoal, map: "Ministry of Crab Colombo", img: "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
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
        </div>

        {/* 7.6 Estimated destination cost */}
        <div className="mb-4">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>7.6</span> 
            Estimated destination cost
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            This is a rough reference <strong>per person</strong>, assuming <strong>2 people sharing a room for 2 nights</strong>, with intercity transport left out.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div style={{ backgroundColor: colors.green, boxShadow: customShadow }} className="p-8 rounded-[2rem] text-white flex flex-col transition-transform hover:-translate-y-1">
              <span className="font-bold uppercase tracking-widest text-[14px] text-white/90 mb-4 block">Base 2-night Colombo stay</span>
              <span className="text-3xl lg:text-4xl font-extrabold mb-6">about $35 to $60<span className="text-sm font-medium text-white/70 block mt-2 tracking-normal normal-case">per person total</span></span>
              <p className="text-sm text-white/90 leading-relaxed mt-auto pt-6 border-t border-white/20">
                <strong>Includes:</strong> budget to lower-mid stay for <strong>2 nights</strong>, local meals, <strong>Gangaramaya Temple</strong>, and a mostly free sightseeing day
              </p>
            </div>

            <div style={{ backgroundColor: colors.charcoal, boxShadow: customShadow }} className="p-8 rounded-[2rem] text-white flex flex-col transition-transform hover:-translate-y-1">
              <span className="font-bold uppercase tracking-widest text-[14px] text-white/90 mb-4 block">Add Lotus Tower version</span>
              <span className="text-3xl lg:text-4xl font-extrabold mb-6">about $55 to $80<span className="text-sm font-medium text-white/70 block mt-2 tracking-normal normal-case">per person total</span></span>
            </div>

            <div style={{ backgroundColor: colors.terracotta, boxShadow: customShadow }} className="p-8 rounded-[2rem] text-white flex flex-col transition-transform hover:-translate-y-1">
              <span className="font-bold uppercase tracking-widest text-[14px] text-white/95 mb-4 block">Add Colombo National Museum</span>
              <span className="text-3xl lg:text-4xl font-extrabold mb-6">about $40 to $65<span className="text-sm font-medium text-white/80 block mt-2 tracking-normal normal-case">per person total</span></span>
            </div>
          </div>
        </div>
      </section>

      {/* --- NEXT STEP SECTION --- */}
      <NextStepCard 
        title="Heading to the Cultural Triangle"
        description="Next stop: Sigiriya. Get ready for ancient rock fortresses, stunning views, and a touch of adventure."
        nextPage="sigiriya"
        buttonText="Explore Sigiriya"
        setCurrentPage={setCurrentPage}
        scrollToTop={scrollToTop}
        colors={colors}
      />
    </div>
  );
};

export default ColomboPage;
