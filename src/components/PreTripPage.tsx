import React from 'react';
import { 
  FileText,
  CheckCircle2,
  Plane,
  AlertCircle,
  CreditCard,
  Landmark,
  Utensils,
  Fish,
  Soup,
  Leaf,
  Coffee,
  ShoppingBag,
  Flame,
  Info,
  Car,
  Smartphone,
  Train,
  ExternalLink,
  Zap,
  Backpack,
  FileCheck
} from 'lucide-react';

import NextStepCard from './NextStepCard';

interface PreTripPageProps {
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

const PreTripPage: React.FC<PreTripPageProps> = ({ colors, setCurrentPage, scrollToTop }) => {
  const customShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.03)";

  return (
    <div className="animate-in slide-in-from-right duration-700">
      <section style={{ boxShadow: customShadow }} className="bg-white border border-gray-50 rounded-[2.5rem] overflow-hidden mb-8 min-h-[80vh]">
        
        {/* Chapter Image Banner */}
        <div className="relative h-[450px] w-full">
          <img 
            src="https://images.pexels.com/photos/16508230/pexels-photo-16508230.jpeg" 
            alt="Sri Lanka Coastline View" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#292926]/90 via-[#292926]/30 to-transparent"></div>
          <div className="absolute bottom-12 left-12 md:bottom-16 md:left-14 text-white">
            <span className="text-[14px] font-bold tracking-[0.4em] uppercase mb-4 block text-white/90">
              Chapter 4
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none max-w-4xl">
              Key Travel Information <br/>for Sri Lanka
            </h2>
          </div>
        </div>

        {/* Chapter Content Area */}
        <div className="p-8 md:p-14">
          
          {/* 4.1 Visa and entry requirements */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
              <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.yellow }}>4.1</span> 
              Visa and entry requirements
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
              Sri Lanka is open to travelers from around the world, and the visa process is usually very easy. For a normal trip, most travelers just apply online for the tourist ETA before flying, then arrive with a valid passport and their approval ready. Official ETA information and the online application are on <a href="https://eta.gov.lk" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:opacity-80 transition-opacity" style={{ color: colors.terracotta }}>eta.gov.lk</a>.
            </p>

            {/* Horizontal Full Width Visa Steps */}
            <div className="bg-[#FAFAFA] border border-gray-100 rounded-[2.5rem] p-8 md:p-12 mb-10">
              <h4 className="text-xl font-extrabold mb-10 flex items-center gap-3">
                <FileCheck size={24} style={{ color: colors.green }} />
                Visa steps
              </h4>
              <div className="grid md:grid-cols-4 gap-8 relative">
                <div className="hidden md:block absolute top-5 left-12 right-12 border-t-2 border-dashed" style={{ borderColor: colors.green + '40', zIndex: 0 }}></div>
                {[
                  "Go to the official ETA website: eta.gov.lk",
                  "Apply for the tourist ETA",
                  "Pay the visa fee, which is usually around US$50 for most travelers for a 30-day double-entry tourist visa",
                  "Wait for the approval email, which usually arrives within 24 hours"
                ].map((step, idx) => (
                  <div key={idx} className="relative z-10 flex flex-col items-center text-center md:items-start md:text-left gap-4">
                    <div className="w-10 h-10 rounded-full border-4 border-[#FAFAFA] shadow-md flex items-center justify-center text-white text-sm font-black shrink-0 mx-auto md:mx-0" style={{ backgroundColor: colors.green }}>
                      {idx + 1}
                    </div>
                    <p className="text-base text-gray-700 m-0 leading-relaxed font-bold">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Horizontal Full Width Verify & Arrival Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              <div style={{ boxShadow: customShadow }} className="bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-10 h-full">
                <h4 className="text-xl font-extrabold mb-8">What to verify before you fly</h4>
                <ul className="space-y-6">
                  {[
                    { title: "Passport validity", desc: "your passport should be valid for at least 6 months from the date of arrival" },
                    { title: "Visa type", desc: "make sure you applied for the correct tourist ETA" },
                    { title: "Return or onward ticket", desc: "the official site lists this as a requirement, even if it is not always asked for in practice" }
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-4 items-start">
                      <div className="mt-1 bg-yellow-50 p-1.5 rounded-full shrink-0">
                        <CheckCircle2 size={18} style={{ color: colors.yellow }} />
                      </div>
                      <span className="text-lg text-gray-600 leading-relaxed">
                        <strong className="text-[#292926] block mb-1">{item.title}</strong> {item.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ boxShadow: customShadow }} className="bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-10 h-full">
                <h4 className="text-xl font-extrabold mb-8 flex items-center gap-3">
                  <Plane size={24} style={{ color: colors.charcoal }} />
                  On arrival
                </h4>
                <ul className="space-y-6">
                  {[
                    "Immigration is usually very fast and simple when your ETA is already approved",
                    "Entry can take seconds. It was one of the fastest arrivals I have seen",
                    "Just in case: prepare travel insurance, hotel reservations, flight bookings, emergency contacts",
                    "You usually do not need to print everything for Sri Lanka. You can keep these on your phone."
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-4 items-start">
                      <div className="w-2 h-2 rounded-full mt-2.5 shrink-0" style={{ backgroundColor: colors.charcoal }}></div>
                      <p className="text-lg text-gray-600 leading-relaxed m-0 font-medium">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div style={{ backgroundColor: colors.terracotta + '15', borderColor: colors.terracotta + '30' }} className="p-6 md:p-8 rounded-[2rem] border flex gap-5 items-start mt-10">
              <AlertCircle size={28} style={{ color: colors.terracotta }} className="shrink-0 mt-0.5" />
              <div>
                <span className="block font-black text-[14px] mb-2 uppercase tracking-[0.1em]" style={{ color: colors.terracotta }}>Important reminder</span>
                <p className="text-[#292926] font-bold text-lg m-0 leading-relaxed">
                  Entry rules and fees can change, so always check the official ETA website again shortly before travel.
                </p>
              </div>
            </div>
          </div>

          {/* 4.2 Currency and payment basics */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
              <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.yellow }}>4.2</span> 
              Currency and payment basics
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-4xl">
              Sri Lanka works best when you use a practical mix of cash and card. The local currency is the Sri Lankan rupee (LKR), and while cards are common in many hotels, restaurants, and tourist cafés, cash is still important for everyday spending.
            </p>

            <div style={{ boxShadow: customShadow }} className="bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-12">
              <h4 className="text-xl font-extrabold mb-8 flex items-center gap-3">
                <CreditCard size={24} style={{ color: colors.green }} />
                Practical money tips
              </h4>
              <ul className="grid md:grid-cols-3 gap-6">
                {[
                  "Use ATMs in bigger towns, cities, and tourist areas",
                  "Carry enough cash with you for drivers, cafés, snacks, and quick local payments",
                  "If a machine asks whether to charge you in your home currency or in LKR, choose LKR"
                ].map((item, idx) => (
                  <li key={idx} className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 flex flex-col gap-4">
                    <span className="text-3xl font-black opacity-20" style={{ color: colors.green }}>0{idx + 1}</span>
                    <p className="text-lg text-gray-700 m-0 leading-relaxed font-bold">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 4.3 Temple, cultural etiquette and dress code */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
              <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.yellow }}>4.3</span> 
              Temple, cultural etiquette and dress code
            </h3>
            <div className="bg-[#FAFAFA] border-l-4 p-8 md:p-10 rounded-r-[2rem]" style={{ borderLeftColor: colors.terracotta }}>
              <div className="flex gap-5 items-start">
                <Landmark size={32} style={{ color: colors.terracotta }} className="shrink-0 mt-1" />
                <p className="text-xl text-gray-700 leading-relaxed m-0 font-semibold">
                  Sri Lanka is generally easygoing, but dress modestly at temples, with shoulders and knees covered. Remove your shoes before entering, keep your voice low, and avoid turning your back to Buddha statues or stupas for photos.
                </p>
              </div>
            </div>
          </div>

          {/* 4.4 Sri Lankan food at a glance */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
              <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.yellow }}>4.4</span> 
              Sri Lankan food at a glance
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
              Sri Lankan food is centered around rice and curry, but what makes it memorable is the mix of coconut, spice, breads, sambols, tea, and coastal seafood. It is flavorful, varied, and often spicier than travelers expect, so be extra cautious with spice in places that mainly serve locals.
            </p>

            <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
              <Utensils size={24} style={{ color: colors.charcoal }} />
              What you will keep seeing
            </h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { title: "Rice and curry", desc: "the classic Sri Lankan meal with rice, several curries, sambol, and sides", color: colors.green, img: "https://images.unsplash.com/photo-1743674453123-93356ade2891?q=80&w=1334&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                { title: "Hoppers and string hoppers", desc: "common breakfast or anytime staples served with curry and sambol", color: colors.yellow, img: "https://www.foodrepublic.com/img/gallery/how-to-make-a-sri-lankan-egg-hopper/intro-import.webp" },
                { title: "Kottu roti", desc: "chopped flatbread stir-fried with vegetables, egg, or meat", color: colors.terracotta, img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80" },
                { title: "Dhal curry", desc: "one of the most common curries across the country", color: colors.charcoal, img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=600&q=80" },
                { title: "Pol sambol", desc: "spicy coconut sambol served with many meals", color: colors.terracotta, img: "https://media-cdn2.greatbritishchefs.com/media/etbpfsnk/img86979.whqc_1800x1200q90.webp" },
                { title: "Roti and short eats", desc: "everyday breads and small savory snacks", color: colors.green, img: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&q=80" },
                { title: "Seafood", desc: "more common and more worth trying in coastal towns", color: colors.charcoal, img: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=600&q=80" },
                { title: "Ceylon tea", desc: "part of the everyday food experience, especially in the hill country", color: colors.yellow, img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-gray-100 rounded-[1.5rem] flex flex-col overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-40 w-full relative">
                    <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="p-6 flex flex-col grow">
                    <span className="font-extrabold text-lg mb-2 block" style={{ color: item.color }}>{item.title}</span>
                    <span className="text-gray-500 leading-snug font-medium">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ backgroundColor: colors.charcoal, boxShadow: customShadow }} className="rounded-[2.5rem] p-8 md:p-10 flex flex-col sm:flex-row gap-6 items-start relative overflow-hidden mt-12">
              <div className="absolute top-0 left-0 w-2 h-full" style={{ backgroundColor: colors.yellow }}></div>
              <div style={{ backgroundColor: colors.yellow }} className="p-3 rounded-2xl text-white shrink-0 shadow-md">
                <Info size={28} />
              </div>
              <div>
                <span className="block font-black text-[14px] mb-3 uppercase tracking-[0.2em]" style={{ color: colors.yellow }}>Quick note</span>
                <p className="text-white/90 leading-relaxed font-medium m-0 text-lg">
                  Most Sri Lankan food is spicy, even when it does not sound spicy on the menu, so it is worth double-checking with the waiter before you order. If you do not want spicy food, it is also very easy to find Western options like pizza, pasta, and burgers in many tourist areas.
                </p>
              </div>
            </div>
          </div>

          {/* 4.5 Getting around Sri Lanka */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
              <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.yellow }}>4.5</span> 
              Getting around Sri Lanka
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
              Transport in Sri Lanka is less about finding one perfect method and more about using the right one at the right time. For this route, the easiest way to think about it is in two layers: local transport inside towns and beach areas, and intercity transport between the main stops.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { 
                  name: "Regular tuk-tuk", 
                  best: "short local rides and quick hops around town", 
                  note: "always confirm the price before you get in. A common local way to estimate it is around LKR 100 per kilometer, so you can use that as a rough guide before agreeing on the fare",
                  icon: Car, color: colors.green 
                },
                { 
                  name: "PickMe app for tuk-tuks", 
                  best: "short local rides when you want a clearer price without negotiating", 
                  note: "this is usually the easiest way to avoid back-and-forth on the fare",
                  links: [
                    { text: "PickMe on Apple Store", url: "https://apps.apple.com/us/app/pickme-sri-lanka/id1000163961" },
                    { text: "PickMe on Google Play", url: "https://play.google.com/store/apps/details?hl=en&id=com.pickme.passenger" }
                  ],
                  icon: Smartphone, color: colors.yellow 
                },
                { 
                  name: "PickMe app for cars", 
                  best: "luggage, longer local rides, and days when comfort matters more", 
                  note: "sometimes the PickMe car and PickMe tuk-tuk can be very close in price, so in that case you may prefer the car for comfort or the tuk-tuk for speed",
                  icon: Smartphone, color: colors.charcoal 
                },
                { 
                  name: "Private driver", 
                  best: "the smoothest and easiest version of this itinerary", 
                  links: [
                    { text: "Recommended agency: Asia Someday", url: "https://asiasomeday.com/" }
                  ],
                  icon: Car, color: colors.terracotta 
                },
                { 
                  name: "Train", 
                  best: "selected scenic stretches and avoiding curvy road journeys", 
                  note: "the train is part of the experience, but it is not usually faster than going by car",
                  links: [
                    { text: "Website: Sri Lanka Railways", url: "https://seatreservation.railway.gov.lk/" }
                  ],
                  icon: Train, color: colors.green 
                },
                { 
                  name: "12Go", 
                  best: "pre-booked private transfers, buses, and route options in one place.", 
                  note: "useful if you want a pre-booked option online, but always double-check the pickup point, drop-off location, and cancellation terms before booking",
                  links: [
                    { text: "Website: 12Go website", url: "https://12go.asia/en" }
                  ],
                  icon: ExternalLink, color: colors.charcoal 
                }
              ].map((method, idx) => (
                <div key={idx} style={{ boxShadow: customShadow }} className="bg-white border border-gray-100 rounded-[2rem] p-8 transition-transform hover:-translate-y-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl" style={{ backgroundColor: method.color + '15', color: method.color }}>
                      <method.icon size={24} />
                    </div>
                    <h4 className="text-xl font-extrabold">{method.name}</h4>
                  </div>
                  <div className="space-y-4 flex-grow">
                    <p className="m-0 text-lg text-gray-600">
                      <strong className="text-[#292926]">Best for:</strong> {method.best}
                    </p>
                    {method.note && (
                      <p className="m-0 text-lg text-gray-600">
                        <strong className="text-[#292926]">Note:</strong> {method.note}
                      </p>
                    )}
                  </div>
                  {method.links && (
                    <div className="flex flex-col gap-3 mt-6 pt-5 border-t border-gray-100">
                      {method.links.map((link, lIdx) => (
                        <a key={lIdx} href={link.url} target="_blank" rel="noopener noreferrer" className="text-sm font-bold flex items-center gap-1.5 hover:opacity-70 transition-opacity" style={{ color: method.color }}>
                          {link.text} <ExternalLink size={14} />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 4.6 Power plugs and adapters */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
              <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.yellow }}>4.6</span> 
              Power plugs and adapters <span className="text-gray-400 font-medium text-lg ml-2 hidden sm:inline">[charging your devices]</span>
            </h3>
            <div className="bg-[#FAFAFA] border border-gray-100 rounded-[2rem] p-8 flex items-start gap-5">
               <Zap size={28} style={{ color: colors.yellow }} className="shrink-0 mt-1" />
               <p className="text-lg text-gray-700 leading-relaxed m-0 font-medium">
                 Sri Lanka uses 230V power, with Type G plugs common in newer places and Type D sockets still found in older buildings. A universal adapter and a charger with multiple USB ports are both worth bringing.
               </p>
            </div>
          </div>

        </div>
      </section>

      {/* --- CHAPTER 5: PACKING AND TRIP PREPARATION --- */}
      <section style={{ boxShadow: customShadow }} className="bg-white border border-gray-50 rounded-[2.5rem] overflow-hidden mb-8 p-8 md:p-14">
        <div className="mb-10">
          <span className="text-[14px] font-bold tracking-[0.4em] uppercase mb-4 block text-gray-600">
            Chapter 5
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
            Packing and trip preparation
          </h2>
        </div>

        {/* 5.1 Main packing checklist */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.yellow }}>5.1</span> 
            Main packing checklist
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-4xl">
            Use the attached packing checklist as your main pre-trip reference. It is already grouped into clear categories and works whether you are traveling solo, as a couple, or as a family, including practical ideas for both adult and child packing where needed:
          </p>
          <a href="https://gamma.app/docs/-mfcqmwki4jxc493" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: colors.green }} className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-bold shadow-lg hover:-translate-y-1 transition-transform">
            <FileText size={20} /> Open Packing Checklist <ExternalLink size={16} className="opacity-70" />
          </a>
        </div>

        {/* 5.2 What to wear on this route */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.yellow }}>5.2</span> 
            What to wear on this route
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-4xl">
            Pack for two sides of the trip: warmer coastal days and cooler hill-country mornings and evenings. Most of the route calls for light clothes, but places like Ella, Sigiriya, and Kandy can be rainy and feel much cooler, so add one or two warmer layers.
          </p>
          
          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <CheckCircle2 size={24} style={{ color: colors.charcoal }} />
            Main essentials
          </h4>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Light clothes for warm days and coastal stops",
              "One warmer layer and one rain jacket",
              "Comfortable shoes for walking and short hikes",
              "Sandals or easy shoes for the beach",
              "One modest outfit or easy cover-up for temples and local areas"
            ].map((item, idx) => (
               <div key={idx} className="flex items-start gap-4 p-6 bg-[#FAFAFA] rounded-2xl border border-gray-100">
                 <div className="mt-1 bg-yellow-50 p-1.5 rounded-full shrink-0">
                   <CheckCircle2 size={18} style={{ color: colors.yellow }} />
                 </div>
                 <span className="text-lg text-gray-700 font-medium leading-relaxed">{item}</span>
               </div>
            ))}
          </div>
        </div>

        {/* 5.3 Daily bag essentials */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.yellow }}>5.3</span> 
            Daily bag essentials
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-4xl">
            Keep one small day bag ready so you do not rebuild it every morning. Adjust it depending on the plan, but these are the items that usually make the biggest difference on this route.
          </p>
          
          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <Backpack size={24} style={{ color: colors.terracotta }} />
            Keep in your daily bag
          </h4>
          <div className="flex flex-wrap gap-3">
            {[
              "Phone",
              "Wallet and small cash",
              "Passport on travel days, or a passport copy for normal outings",
              "Water and snacks",
              "Sunscreen and a hat",
              "Light rain jacket or a small umbrella",
              "Power bank",
              "Any personal medication",
              "Swimwear if you are heading to the beach",
              "A light cover-up or a rain cover for your bag when needed",
              "Light rain jacket"
            ].map((item, idx) => (
              <span key={idx} className="px-5 py-3 bg-white border border-gray-200 rounded-full text-sm md:text-base font-bold text-gray-600 shadow-sm flex items-center gap-3">
                <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: colors.terracotta }}></span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* --- NEXT STEP SECTION --- */}
      <NextStepCard 
        title="Welcome to Sri Lanka!"
        description="Your journey starts in the vibrant capital. Here's how to handle your first days in Colombo."
        nextPage="colombo"
        buttonText="Explore Colombo"
        setCurrentPage={setCurrentPage}
        scrollToTop={scrollToTop}
        colors={colors}
      />
    </div>
  );
};

export default PreTripPage;
