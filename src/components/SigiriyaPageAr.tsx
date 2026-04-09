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

const SigiriyaPageAr: React.FC<SigiriyaPageProps> = ({ colors, openMap, sigiriyaMapLocations }) => {
  const customShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.03)";

  return (
    <div className="animate-in slide-in-from-right duration-700" dir="rtl">
      
      {/* Chapter Image Banner */}
      <section style={{ boxShadow: customShadow }} className="bg-white border border-gray-50 rounded-[2.5rem] overflow-hidden mb-8">
        <div className="relative h-[450px] w-full">
          <img 
            src="https://plus.unsplash.com/premium_photo-1764187003767-7d00abf2267c?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="قلعة صخرة سيجيريا" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#292926]/90 via-[#292926]/30 to-transparent"></div>
          <div className="absolute bottom-12 right-12 md:bottom-16 md:right-14 text-white">
            <span className="text-[14px] font-bold tracking-[0.4em] uppercase mb-4 block text-white/90">
              الفصل 8
            </span>
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none">
              سيجيريا
            </h2>
          </div>
        </div>
      </section>

      <section style={{ boxShadow: customShadow }} className="bg-white border border-gray-50 rounded-[2.5rem] overflow-hidden mb-8 p-8 md:p-14">
        
        {/* 8.1 City overview */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>8.1</span> 
            نظرة عامة على المدينة
          </h3>
          <div className="text-lg text-gray-600 leading-relaxed max-w-4xl space-y-4">
            <p>
              المحطة دي معمولة <strong>لرحلة الـ 14 يوم</strong>؛ فوتها لو هتعمل <strong>رحلة الـ 10 أيام</strong>. بالنسبة للنسخة الأطول من الرحلة، هي بتضيف ميكس حلو من <strong>الطبيعة، المغامرة الخفيفة، والمعالم السياحية الكبيرة</strong>.
            </p>
            <p className="font-medium text-[#292926]">
              أنا هستخدم <strong>الليلتين</strong> دول كفاصل هادي في الريف عشان أريح وأعمل <strong>صخرة سيجيريا، بيدورانجالا، سفاري الأفيال، ونشاط محلي هادي</strong> من غير استعجال.
            </p>
          </div>
        </div>

        {/* 8.2 How to get here from Colombo */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>8.2</span> 
            إزاي توصل هنا من كولومبو
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            لو جاي من كولومبو، هختار بين <strong>عربية خاصة دايركت</strong>، أو <strong>القطر لهابارانا</strong>، أو أشيك على <a href="https://12go.asia/en/travel/colombo/sigiriya" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:opacity-80 transition-opacity" style={{ color: colors.terracotta }}>12Go</a> لو عايز أقارن الأتوبيسات والمواصلات الخاصة في مكان واحد، حسب الميزانية وعايز مرونة قد إيه وقت الوصول.
          </p>

          <h4 className="text-xl font-extrabold mb-6">الطرق الأساسية للوصول</h4>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
               <div className="flex items-center gap-3 mb-4">
                 <div className="p-3 rounded-xl shrink-0" style={{ backgroundColor: colors.terracotta + '15', color: colors.terracotta }}>
                   <Car size={24} />
                 </div>
                 <h5 className="font-extrabold text-lg">عربية خاصة أو تاكسي</h5>
               </div>
               <div className="space-y-2 mt-auto">
                 <p className="text-gray-600 m-0"><strong className="text-[#292926]">المدة:</strong> حوالي 3.5 لـ 4.5 ساعات</p>
                 <p className="text-gray-600 m-0"><strong className="text-[#292926]">السعر:</strong> حوالي 70 لـ 100 دولار للاتجاه الواحد</p>
                 <p className="text-gray-600 m-0"><strong className="text-[#292926]">أحسن حاجة لـ:</strong> أسهل توصيلة من الباب للباب</p>
                 <p className="text-gray-600 m-0"><strong className="text-[#292926]">الحجز:</strong> أحسن حاجة ترتبها عن طريق فندقك أو مكان إقامتك</p>
               </div>
            </div>
            
            <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
               <div className="flex items-center gap-3 mb-4">
                 <div className="p-3 rounded-xl shrink-0" style={{ backgroundColor: colors.green + '15', color: colors.green }}>
                   <Train size={24} />
                 </div>
                 <h5 className="font-extrabold text-lg leading-tight">القطر (من كولومبو فورت لهابارانا)</h5>
               </div>
               <div className="space-y-2 mt-auto">
                 <p className="text-gray-600 m-0"><strong className="text-[#292926]">المدة:</strong> حوالي 3.5 لـ 4.75 ساعات بالقطر، وبعدين حوالي 25 دقيقة بالتوك توك</p>
                 <p className="text-gray-600 m-0"><strong className="text-[#292926]">السعر:</strong> حوالي 1.14 دولار (درجة تالتة)، 2.38 دولار (درجة تانية)، 4.60 دولار (درجة أولى)</p>
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
                 <h5 className="font-extrabold text-lg leading-tight">أتوبيسات خاصة أو مواصلات</h5>
               </div>
               <div className="space-y-2 mt-auto">
                 <p className="text-gray-600 m-0"><strong className="text-[#292926]">أحسن حاجة لـ:</strong> مقارنة المسارات، المواعيد، الأتوبيسات، والعربيات الخاصة في مكان واحد</p>
                 <div className="mt-4 pt-4 border-t border-gray-100">
                    <a href="https://12go.asia/en/travel/colombo/sigiriya" target="_blank" rel="noopener noreferrer" className="text-sm font-bold flex items-center gap-1.5 hover:opacity-70 transition-opacity" style={{ color: colors.charcoal }}>
                      12Go من كولومبو لسيجيريا <ExternalLink size={14} />
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
            تسكن فين
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            لإقامة قصيرة لمدة <strong>ليلتين</strong>، هختار <strong>سيجيريا</strong> لو تركيزك على <strong>صخرة سيجيريا وبيدورانجالا</strong>. اختار <strong>هابارانا</strong> بدالها لو عايز <strong>أسعار أقل، مواصلات أسهل، ووصول أحسن للسفاري</strong>.
          </p>

          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <Map size={24} style={{ color: colors.charcoal }} />
            بتبص على سيجيريا
          </h4>
          <div className="flex flex-col gap-4 mb-10">
            {[
              { name: "فندق Sigiri Rock Side Home Stay", rating: "9.1", price: "$28", url: "https://www.booking.com/hotel/lk/sigiri-rock-side-home-stay-sigiriya.html" },
              { name: "فندق Sigiri Close-up View Guest", rating: "9.1", price: "$32", url: "https://www.booking.com/hotel/lk/seegiri-close-up-view-guest.html" },
              { name: "فندق Kashyapa Kingdom View Home", rating: "8.7", price: "$32", url: "https://www.booking.com/hotel/lk/kashyapa-kingdom-view-home.html" },
              { name: "فندق Lion Wood Treehouse", highlight: "واحد من أكتر الأماكن الاقتصادية اللي بتعلق في الذاكرة لو عايز إحساس بيت الشجرة", rating: "9.7", price: "$37", url: "https://www.booking.com/hotel/lk/lion-wood-treehouse-thalkote3.html" }
            ].map((hotel, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between bg-white border border-gray-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow gap-4">
                <div>
                  <span className="font-extrabold text-lg text-[#292926] block sm:inline">{hotel.name}</span>
                  <span className="text-gray-500 text-sm sm:mr-2 block sm:inline">| تقييم <strong className="text-amber-600">{hotel.rating}</strong> | حوالي <strong>{hotel.price}</strong> لليلة الواحدة</span>
                  {hotel.highlight && <p className="text-sm text-gray-500 mt-1 mb-0 italic"><strong>المميزات:</strong> {hotel.highlight}</p>}
                </div>
                <a href={hotel.url} target="_blank" rel="noopener noreferrer" className="shrink-0 px-5 py-2 bg-gray-50 hover:bg-gray-100 text-[#292926] text-sm font-bold rounded-xl border border-gray-200 transition-colors flex items-center gap-2 justify-center mt-2 sm:mt-0">
                  بوكينج <ExternalLink size={14}/>
                </a>
              </div>
            ))}
          </div>

          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <BedDouble size={24} style={{ color: colors.green }} />
            ترشيحات فنادق تانية ممتازة
          </h4>
          <div className="flex flex-col gap-4 mb-10">
            {[
              { name: "فندق Sigiri Lion Lodge", highlight: "واحد من أرخص الأماكن الكويسة القريبة من سيجيريا، بسيط وعملي", rating: "9.1", price: "$18", url: "https://www.booking.com/hotel/lk/sigiri-lion-lodge.html" },
              { name: "فندق Freedom Home Stay", highlight: "إحساس هوم ستاي اقتصادي، حلو لو عايز إقامة محلية بسيطة", rating: "9.1", price: "$18", url: "https://www.booking.com/hotel/lk/freedom-home-stay.html" },
              { name: "فندق Sigiri Saman Home Stay", rating: "9.1", price: "$24", url: "https://www.booking.com/hotel/lk/sigiri-saman-home-stay.html" },
              { name: "فندق Levona Garden Resort", highlight: "خيار قيمته حلوة في هابارانا لو عايز وصول أسهل للسفاري", rating: "9.2", price: "$29", url: "https://www.booking.com/hotel/lk/levona-garden-resort.html" },
              { name: "فندق Lotus Eco Villa", rating: "9.0", price: "$32", url: "https://www.booking.com/hotel/lk/lotus-eco-villa-sigiriya.html" },
              { name: "فندق Shady Mango Villa", rating: "9.6", price: "$34", url: "https://www.booking.com/hotel/lk/shady-mango-villa.html" },
              { name: "فندق Shan Mango Homestay", highlight: "واحد من أحلى الأماكن الأقل تكلفة لو عايز إحساس هوم ستاي مع حمام سباحة وتقييمات قوية", rating: "9.9", price: "$40", url: "https://www.booking.com/hotel/lk/shan-mango-home-stay-eco-rooms.html" },
              { name: "فندق Sigiriya Sun Shine Villa", rating: "9.0", price: "$41", url: "https://www.booking.com/hotel/lk/sigiriya-sun-shine-villa.html" },
              { name: "فندق La Dolce Vita", highlight: "خيار بوتيك شكله أحلى لو عايز حاجة تصميمها مميز شوية", rating: "9.0", price: "$62", url: "https://www.booking.com/hotel/lk/la-dolce-vita.html" }
            ].map((hotel, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between bg-white border border-gray-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow gap-4">
                <div>
                  <span className="font-extrabold text-lg text-[#292926] block sm:inline">{hotel.name}</span>
                  <span className="text-gray-500 text-sm sm:mr-2 block sm:inline">| تقييم <strong className="text-amber-600">{hotel.rating}</strong> | حوالي <strong>{hotel.price}</strong> لليلة الواحدة</span>
                  {hotel.highlight && <p className="text-sm text-gray-500 mt-1 mb-0 italic"><strong>المميزات:</strong> {hotel.highlight}</p>}
                </div>
                <a href={hotel.url} target="_blank" rel="noopener noreferrer" className="shrink-0 px-5 py-2 bg-gray-50 hover:bg-gray-100 text-[#292926] text-sm font-bold rounded-xl border border-gray-200 transition-colors flex items-center gap-2 justify-center mt-2 sm:mt-0">
                  بوكينج <ExternalLink size={14}/>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* 8.4 Where to eat */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>8.4</span> 
            تاكل فين
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            الأكل هنا معظمه <strong>مطاعم محلية صغيرة ومقاهي سياحية</strong> متوزعة على الطريق الرئيسي.
          </p>

          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <Soup size={24} style={{ color: colors.terracotta }} />
            أكل محلي وأسعار معقولة
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { name: "Pradeep Restaurant", desc: "واحد من أحسن الأماكن للكوتو والكاري الرخيص", try: "كوتو، كاري", price: "حوالي 2 لـ 5 دولار للفرد", icon: Utensils, bgColor: colors.green, map: "https://www.google.com/maps/search/?api=1&query=Pradeep+Restaurant+Sigiriya" },
              { name: "Mati Geda", desc: "بوفيه كاري سريلانكي ممتاز، حلو جداً للغداء بعد صخرة سيجيريا", try: "بوفيه الكاري", price: "حوالي 4 لـ 6 دولار للفرد", icon: Soup, bgColor: colors.terracotta, map: "https://www.google.com/maps/search/?api=1&query=Mati+Geda+Sigiriya" },
              { name: "Chooti Restaurant", desc: "مكان محلي تاني كويس للكوتو والأطباق السريلانكية الأساسية", try: "كوتو، أكل محلي", price: "حوالي 3 لـ 6 دولار للفرد", icon: Utensils, bgColor: colors.charcoal, map: "https://www.google.com/maps/search/?api=1&query=Chooti+Restaurant+Sigiriya" },
              { name: "Ahinsa Restaurant", desc: "مكان بسيط وموثوق للأكل المحلي", try: "أرز وكاري", price: "حوالي 3 لـ 6 دولار للفرد", icon: Soup, bgColor: colors.yellow, map: "https://www.google.com/maps/search/?api=1&query=Ahinsa+Restaurant+Sigiriya" }
            ].map((place, idx) => (
              <div key={idx} className="bg-white border border-gray-100 rounded-[1.5rem] flex flex-col overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-40 w-full relative flex items-center justify-center" style={{ backgroundColor: place.bgColor }}>
                  <place.icon size={64} color="white" className="opacity-50" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h5 className="absolute bottom-4 right-4 left-4 text-white font-extrabold text-xl leading-tight">{place.name}</h5>
                </div>
                <div className="p-6 flex flex-col grow">
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{place.desc}</p>
                  <div className="flex flex-col gap-3">
                    <span className="text-sm text-gray-500"><strong>جرب:</strong> {place.try}</span>
                    <span className="text-[#292926] font-bold text-sm bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100 w-fit">{place.price}</span>
                    <button onClick={() => openMap(place.map)} className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors text-right w-fit">
                      <MapPin size={16}/> شوف على الخريطة
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <Coffee size={24} style={{ color: colors.charcoal }} />
            قهوة، مناظر، وأماكن للسهرة
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { name: "Soul Food", desc: "أحسن حاجة لو عايز وجبة نباتية خفيفة مع منظر حلو", try: "سموثي بولز، راب، قهوة", price: "10 لـ 13 دولار للفرد", icon: Leaf, bgColor: colors.yellow, map: "https://www.google.com/maps/search/?api=1&query=Soul+Food+Sigiriya" },
              { name: "Mr. Caffeine Cafe & Eatery", desc: "واحد من أحسن أماكن القهوة والفطار", try: "باراثا، كاري، قهوة", price: "4 لـ 8 دولار للفرد", icon: Coffee, bgColor: colors.charcoal, map: "https://www.google.com/maps/search/?api=1&query=Mr+Caffeine+Cafe+Eatery+Sigiriya" },
              { name: "Rasta Rant", desc: "أحسن للمشروبات، جو السهرة، وقعدة رايقة بالليل أكتر من الأكل لوحده", try: "مشروبات وعشاء خفيف", price: "5 لـ 10 دولار للفرد", icon: Flame, bgColor: colors.terracotta, map: "https://www.google.com/maps/search/?api=1&query=Rasta+Rant+Sigiriya" },
              { name: "Sigiri Rock View Point - The Restaurant", desc: "واحد من الأماكن الكلاسيكية لعشاء مع منظر لو عايز الجو ده", try: "كاري، عصاير فريش، أطباق سي فود أو فراخ", price: "5 لـ 10 دولار للفرد", icon: Utensils, bgColor: colors.green, map: "https://www.google.com/maps/search/?api=1&query=Sigiri+Rock+View+Point+The+Restaurant+Sigiriya" }
            ].map((place, idx) => (
              <div key={idx} className="bg-white border border-gray-100 rounded-[1.5rem] flex flex-col overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-40 w-full relative flex items-center justify-center" style={{ backgroundColor: place.bgColor }}>
                  <place.icon size={64} color="white" className="opacity-50" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h5 className="absolute bottom-4 right-4 left-4 text-white font-extrabold text-xl leading-tight">{place.name}</h5>
                </div>
                <div className="p-6 flex flex-col grow">
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{place.desc}</p>
                  <div className="flex flex-col gap-3">
                    <span className="text-sm text-gray-500"><strong>جرب:</strong> {place.try}</span>
                    <span className="text-[#292926] font-bold text-sm bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100 w-fit">{place.price}</span>
                    <button onClick={() => openMap(place.map)} className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors text-right w-fit">
                      <MapPin size={16}/> شوف على الخريطة
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
              اليوم الأول - يوم الوصول
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
              بعد التوصيلة من كولومبو، هخلي اليوم الأول ده خفيف وأستغله في <strong>خروجة واحدة أساسية</strong> بدل ما أحاول أزحم اليوم. أحسن استغلال لفترة بعد الضهر غالباً بيكون <strong>بيدورانجالا وقت الغروب</strong>، ولو طلعت من كولومبو بدري أو ببساطة عايز محطة ثقافية بدالها، <strong>معبد كهف دامبولا</strong> هو أحسن إضافة.
            </p>

            <h4 className="text-xl font-extrabold mb-8 flex items-center gap-3">
              <Compass size={24} style={{ color: colors.green }} />
              ترشيح
            </h4>
            <div className="bg-[#FAFAFA] border border-gray-100 rounded-[2.5rem] p-8 md:p-12">
              <ul className="space-y-10 relative before:absolute before:inset-0 before:mr-[11px] md:before:mr-[13px] before:translate-x-px before:h-full before:w-[2px] before:bg-gray-200">
                {[
                  { name: "صخرة بيدورانجالا وقت الغروب", desc: "دي لسه أحسن نقطة مشاهدة من حيث القيمة هنا، وبالنسبة لناس كتير، هي المنظر الأحسن عموماً لأنك فعلاً بتشوف صخرة سيجيريا نفسها", effort: "سهل لمتوسط، مع تسلق خفيف على الصخور قريب من القمة", price: "حوالي 3.20 دولار للفرد", timing: "اعمل حسابك في حوالي 25 لـ 40 دقيقة طلوع؛ الغروب هو أحلى وقت لو هتعملها في يوم الوصول", note: "غطي كتافك وركبك عشان جزء المعبد، البس جزمة مناسبة، وخد معاك كشاف الموبايل أو كشاف عادي عشان النزول", color: colors.yellow, img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoHvFoRqoLWMU4EeIagC653oPcKGqWI9t2qvt6NaTCfbXFKYXAUBkAaPQqEd8Kf25XcpZbtAnoHYB1b1mioXP0898P8tZaXA0HODkb4r2JXuM0btbYhbWuQJhY1sOwuy-KbNoqlKQ=w800-h800-k-no", map: "https://www.google.com/maps/search/?api=1&query=Pidurangala+Rock+Sigiriya" },
                  { name: "اختياري: معبد كهف دامبولا", desc: "أحسن إضافة ثقافية لو وقتك يسمح، خصوصاً لو ما وقفتش هناك وأنت جاي من كولومبو", effort: "سهل لمتوسط بسبب السلم الطويل", price: "حوالي 6.35 دولار للفرد", timing: "حوالي ساعة لساعة ونص للزيارة، زائد وقت المواصلات", note: "اشتري التذكرة من تحت، البس لبس محتشم، واعمل حسابك إن في قرود حوالين السلالم", color: colors.terracotta, img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerEdB6ad5xFNWZaO4Dx5mQ5dQaMyjc4Em_hBLDXTqR97M7UCb3TkhD22wT9Wjc02ytUoOtEK2jfvBblyRyJCSm_MmIygaydWegasA-sSlZfSFkWu32ii2-roEivllPZKQVzMhKmg_eOVnmQ=w800-h800-k-no", map: "https://www.google.com/maps/search/?api=1&query=Dambulla+Cave+Temple+Sri+Lanka" },
                  { name: "إضافة ليلية اختيارية: جولة مشي لرؤية اللوريس البطيء", desc: "واحدة من أنشطة الحياة البرية غير العادية حوالين سيجيريا لو لسه عندك طاقة بعد العشاء", best: "عشاق الحياة البرية اللي عايزين حاجة مختلفة عن خطة الصخرة والسفاري المعتادة", note: "ده نشاط ليلي قصير، غالباً بياخد حوالي ساعة لساعتين", color: colors.charcoal, img: "https://lh3.googleusercontent.com/p/AF1QipMrPhQyScNoB2mOQXSGRW6E2YcPoC3uhB_8LE5H=w800-h800-k-no", map: "https://www.google.com/maps/search/?api=1&query=Slow+Loris+Walk+Sigiriya" }
                ].map((stop, idx) => (
                  <li key={idx} className="relative pr-10 md:pr-14">
                    <div style={{ backgroundColor: stop.color }} className="absolute right-0 top-1.5 w-6 h-6 md:w-7 md:h-7 rounded-full border-4 border-[#FAFAFA] shadow-sm z-10"></div>
                    <div className="bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row overflow-hidden items-stretch">
                      
                      <div className="flex-1 flex flex-col p-6 md:p-8">
                        <h5 className="font-extrabold text-xl md:text-2xl mb-3">{stop.name}</h5>
                        <p className="text-gray-600 text-lg mb-5">{stop.desc}</p>
                        
                        <div className="space-y-3 mb-6 flex-grow">
                          {stop.effort && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">المجهود:</strong> {stop.effort}</p>}
                          {stop.price && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">السعر:</strong> {stop.price}</p>}
                          {stop.timing && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">الوقت:</strong> {stop.timing}</p>}
                          {stop.note && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">ملاحظة:</strong> {stop.note}</p>}
                          {stop.best && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">أحسن حاجة لـ:</strong> {stop.best}</p>}
                        </div>
                        
                        <div className="flex flex-wrap gap-4 border-t border-gray-100 pt-5 mt-auto">
                          <button onClick={() => openMap(stop.map)} className="flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 text-right">
                            <MapPin size={16}/> شوف على الخريطة
                          </button>
                        </div>
                      </div>

                      <div className="md:w-2/5 lg:w-1/3 shrink-0 flex flex-col bg-gray-50 border-t md:border-t-0 md:border-r border-gray-100">
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
              اليوم التاني - يوم سيجيريا الأساسي
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
              ده يوم الفسحة الكامل وأنا هبدأ بدري. اعمل <strong>صخرة سيجيريا الأول</strong>، وبعدين اتغدى كويس وارتاح شوية، واستغل فترة بعد الضهر إما في <strong>سفاري أفيال</strong> أو <strong>تجربة قرية وبحيرة أهدى</strong> حسب طاقتك.
            </p>

            <h4 className="text-xl font-extrabold mb-8 flex items-center gap-3">
              <Compass size={24} style={{ color: colors.green }} />
              أحسن طريقة تعملها بيها
            </h4>
            <div className="bg-[#FAFAFA] border border-gray-100 rounded-[2.5rem] p-8 md:p-12">
              <ul className="space-y-10 relative before:absolute before:inset-0 before:mr-[11px] md:before:mr-[13px] before:translate-x-px before:h-full before:w-[2px] before:bg-gray-200">
                {[
                  { name: "قلعة صخرة سيجيريا", desc: "ده السبب الأساسي اللي بيخلي معظم الناس تيجي هنا، وحتى مع سعر التذكرة الغالي أنا لسه شايف إنها تستاهل تتعمل في رحلة الـ 14 يوم", effort: "متوسط؛ سلالم كتير، حر، وشوية انتظار لو بدأت متأخر", price: "حوالي 35 دولار للبالغين، شامل المتحف", timing: "روح هناك بدري على قد ما تقدر واعمل حسابك في حوالي ساعتين لـ 3.5 ساعات", note: "الصورة الأحلى لسيجيريا من بيدورانجالا، بس الموقع التاريخي الفعلي هنا", color: colors.terracotta, img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerXqOs1WZbt__Axv5B12duyLs2YtlJia9NJhhHBHZ1kcACBf6y57V5CQX7UHYFr7MLfmC6kvVK3H0ZJSqox47r-lcbrheAGVzokdhJ33kGRejSEofiznholWx9uT00Ik-ijKSkq=w800-h800-k-no", map: "https://www.google.com/maps/search/?api=1&query=Sigiriya+Rock+Fortress+Sri+Lanka" },
                  { name: "سفاري الأفيال في حدائق مينيريا، كاودولا، وهورولو الوطنية", desc: "ده أحسن نشاط تاني لو الحياة البرية تهمك", effort: "مجهود بدني قليل", timing: "سفاري بعد الضهر غالباً بيبدأ حوالي 1:00 لـ 2:00 الظهر، وفترة 3:00 لـ 5:00 العصر غالباً بتكون حلوة", price: "حوالي 35 دولار للفرد لدخول الحديقة، زائد حوالي 40 دولار في التوتال للعربية/الجيب. لشخصين، ده بيعمل حوالي 55 دولار للفرد في التوتال.", tip: "اسأل مكان إقامتك إيه أحسن حديقة في اليوم ده وخليهم يحجزوهالك، لأن الأفيال بتتحرك بين الحدائق.", color: colors.green, img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqPfKCXEXCsX9qtTw4YGaf-1aImZbQ14Q36TKaIRg2P1EFAhmhtWGBKQBAEP6Oc7RaAdAPaovojJeLdXSkOXmb1tFm5tZPodsOEfsNiCtv8qZJG1PBfpq-YszhjMo5_cZS6TzAUlLFzGuM=w800-h800-k-no", map: "https://www.google.com/maps/search/?api=1&query=Minneriya+National+Park+Sri+Lanka" },
                  { name: "اختياري بدل السفاري: جولة في قرية هيريوادونا", desc: "البديل الأهدى والأحسن لو عايز تجربة ريفية محلية أكتر", effort: "سهل", price: "حوالي 40 دولار للفرد مع الغداء في جولة قرية عادية", includes: "غالباً ميكس من لفة بالمركب، مشي في القرية، ووجبة محلية", color: colors.charcoal, img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweo4FkFYkJCG8wYm1UKqaf_1GeXiF_jhrI-Nwn8YrpiXGSsMEFmFJHaEQh0kVNQcIe0ksZCRgS2HTxP87JsFbfVwvDrnqHsoOyhBazcehuFXL3itarfWeRsqkUVNi_alCu5qsoYJyg=w800-h800-k-no", map: "https://www.google.com/maps/search/?api=1&query=Hiriwadunna+Village+Sri+Lanka" },
                  { name: "نسخة أخف اختيارية: لفة بمركب في بحيرة هيريوادونا بس", desc: "خيار مجهوده قليل وحلو لو مش عايز جولة القرية الكاملة", effort: "سهل جداً", price: "حوالي 1.60 دولار للفرد، زائد البقشيش", timing: "حوالي ساعة", note: "هات كاب ونظارة شمس لأن الجو بيحرر بسرعة", color: colors.yellow, img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqNyhWrweUwVbgU0pAbaFeilVnk_c2QrhF8ty44nNWcWGpZfH_GCOvL5QzpWeRLOfzXc4UlxlmkZZ4CxXecK7Zc7Ib_cHAHS-81kltP0gXFWNeme4qb5JK1xrqa9OSvI9YYlcOsvfBkUkKc=w800-h800-k-no", map: "https://www.google.com/maps/search/?api=1&query=Hiriwadunna+Lake+Sri+Lanka" }
                ].map((stop, idx) => (
                  <li key={idx} className="relative pr-10 md:pr-14">
                    <div style={{ backgroundColor: stop.color }} className="absolute right-0 top-1.5 w-6 h-6 md:w-7 md:h-7 rounded-full border-4 border-[#FAFAFA] shadow-sm z-10"></div>
                    <div className="bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row overflow-hidden items-stretch">
                      
                      <div className="flex-1 flex flex-col p-6 md:p-8">
                        <h5 className="font-extrabold text-xl md:text-2xl mb-3">{stop.name}</h5>
                        <p className="text-gray-600 text-lg mb-5">{stop.desc}</p>
                        
                        <div className="space-y-3 mb-6 flex-grow">
                          {stop.effort && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">المجهود:</strong> {stop.effort}</p>}
                          {stop.price && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">السعر:</strong> {stop.price}</p>}
                          {stop.timing && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">الوقت:</strong> {stop.timing}</p>}
                          {stop.note && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">خلي بالك:</strong> {stop.note}</p>}
                          {stop.tip && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">نصيحة:</strong> {stop.tip}</p>}
                          {stop.includes && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">بتشمل إيه:</strong> {stop.includes}</p>}
                        </div>
                        
                        <div className="flex flex-wrap gap-4 border-t border-gray-100 pt-5 mt-auto">
                          <button onClick={() => openMap(stop.map)} className="flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 text-right">
                            <MapPin size={16}/> شوف على الخريطة
                          </button>
                        </div>
                      </div>

                      <div className="md:w-2/5 lg:w-1/3 shrink-0 flex flex-col bg-gray-50 border-t md:border-t-0 md:border-r border-gray-100">
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
              ملاحظات سريعة لسيجيريا
            </h3>
            <div className="bg-yellow-50 border border-yellow-100 p-8 rounded-[2rem]">
              <h4 className="text-xl font-extrabold mb-5 flex items-center gap-3" style={{ color: colors.yellow }}>
                <Info size={24} />
                خلي بالك
              </h4>
              <ul className="space-y-4">
                {[
                  { text: "بيدورانجالا بتكون أحلى وقت الشروق أو الغروب، وصخرة سيجيريا أحسن حاجة بدري على قد ما تقدر قبل الحر والزحمة ما تزيد", label: "اطلع الصخور في الوقت الصح:" },
                  { text: "الجزء الأخير عبارة عن تسلق صخور بجد، خصوصاً لو نازل بعد ما الدنيا تضلم", label: "البس جزمة مناسبة لبيدورانجالا:" },
                  { text: "ده مهم لو طالع بيدورانجالا بدري أو وقت الغروب", label: "هات كشاف أو استخدم كشاف موبايلك:" },
                  { text: "خصوصاً لبيدورانجالا، لأن الرجوع بعد ما الدنيا تضلم ممكن يكون مزعج والطريق ده معروف كمان بعبور الأفيال البرية", label: "رتب رجوعك بالتوك توك من بدري:" },
                  { text: "لبيدورانجالا ودامبولا، غطي كتافك وركبك وخليك جاهز تقلع جزمتك في الجزء المقدس", label: "البس مناسب لأجزاء المعابد:" }
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
            التكلفة التقديرية للوجهة
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            ده مرجع تقريبي <strong>للفرد</strong>، بافتراض <strong>شخصين بيشاركوا أوضة لليلتين</strong>، من غير حساب مواصلات السفر بين المدن.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div style={{ backgroundColor: colors.green, boxShadow: customShadow }} className="p-8 rounded-[2rem] text-white flex flex-col transition-transform hover:-translate-y-1">
              <span className="font-bold uppercase tracking-widest text-[14px] text-white/90 mb-4 block">إقامة أساسية لليلتين في سيجيريا</span>
              <span className="text-3xl lg:text-4xl font-extrabold mb-6">حوالي 75 لـ 105 دولار<span className="text-sm font-medium text-white/70 block mt-2 tracking-normal normal-case">للفرد في التوتال</span></span>
              <p className="text-sm text-white/90 leading-relaxed mt-auto pt-6 border-t border-white/20">
                <strong>بتشمل:</strong> إقامة اقتصادية لمتوسطة لمدة <strong>ليلتين</strong>، وجبات محلية، <strong>صخرة سيجيريا</strong>، و<strong>بيدورانجالا</strong>
              </p>
            </div>

            <div style={{ backgroundColor: colors.charcoal, boxShadow: customShadow }} className="p-8 rounded-[2rem] text-white flex flex-col transition-transform hover:-translate-y-1">
              <span className="font-bold uppercase tracking-widest text-[14px] text-white/90 mb-4 block">إضافة معبد كهف دامبولا</span>
              <span className="text-3xl lg:text-4xl font-extrabold mb-6">حوالي 82 لـ 112 دولار<span className="text-sm font-medium text-white/70 block mt-2 tracking-normal normal-case">للفرد في التوتال</span></span>
            </div>

            <div style={{ backgroundColor: colors.terracotta, boxShadow: customShadow }} className="p-8 rounded-[2rem] text-white flex flex-col transition-transform hover:-translate-y-1">
              <span className="font-bold uppercase tracking-widest text-[14px] text-white/95 mb-4 block">إضافة سفاري الأفيال</span>
              <span className="text-3xl lg:text-4xl font-extrabold mb-6">حوالي 130 لـ 160 دولار<span className="text-sm font-medium text-white/80 block mt-2 tracking-normal normal-case">للفرد في التوتال</span></span>
            </div>

            <div style={{ backgroundColor: colors.yellow, boxShadow: customShadow }} className="p-8 rounded-[2rem] text-[#292926] flex flex-col transition-transform hover:-translate-y-1">
              <span className="font-bold uppercase tracking-widest text-[14px] text-[#292926]/90 mb-4 block">إضافة جولة قرية هيريوادونا</span>
              <span className="text-3xl lg:text-4xl font-extrabold mb-6">حوالي 115 لـ 145 دولار<span className="text-sm font-medium text-[#292926]/70 block mt-2 tracking-normal normal-case">للفرد في التوتال</span></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SigiriyaPageAr;
