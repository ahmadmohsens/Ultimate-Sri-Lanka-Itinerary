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

interface WeligamaPageArProps {
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

const WeligamaPageAr: React.FC<WeligamaPageArProps> = ({ colors, openMap, weligamaMapLocations }) => {
  const customShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.03)";

  return (
    <div className="animate-in slide-in-from-right duration-700" dir="rtl">
      
      {/* Chapter Image Banner */}
      <section style={{ boxShadow: customShadow }} className="bg-white border border-gray-50 rounded-[2.5rem] overflow-hidden mb-8">
        <div className="relative h-[450px] w-full">
          <img 
            src="https://images.pexels.com/photos/7953000/pexels-photo-7953000.jpeg" 
            alt="ساحل ويليجاما" 
            className="absolute inset-0 w-full h-full object-cover" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#292926]/90 via-[#292926]/30 to-transparent"></div>
          <div className="absolute bottom-12 right-12 md:bottom-16 md:right-14 text-white">
            <span className="text-[14px] font-bold tracking-[0.4em] uppercase mb-4 block text-white/90">
              الفصل ١٢
            </span>
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none">
              ويليجاما
            </h2>
          </div>
        </div>
      </section>

      <section style={{ boxShadow: customShadow }} className="bg-white border border-gray-50 rounded-[2.5rem] overflow-hidden mb-8 p-8 md:p-14">
        
        {/* 12.1 City overview */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>12.1</span> 
            نظرة عامة على المدينة
          </h3>
          <div className="text-lg text-gray-600 leading-relaxed max-w-4xl space-y-4">
            <p>
              ويليجاما من أحسن الطرق اللي بحب أختم بيها رحلة سريلانكا لإنها المكان اللي بحب أهدي فيه الرتم بعد زحمة المدن، لفة التلال، والأيام اللي كلها حركة في أول الرحلة. هي مدينة ساحلية هادية على الساحل الجنوبي فيها سيرف، كافيهات حلوة، خليج رملي طويل، وسهل توصل منها لتجارب السلاحف والحياة البرية من غير ما تحتاج تقعد في منتجع كامل.
            </p>
            <p>
              لو إنت ماشي على مسار الـ 14 يوم وجاي من هيريكيتيا، فتوقع مدينة حيوية وفيها حركة أكتر بكتير، بس لسه هتقدر تريح على البحر، تستمتع بالمناظر، وتتحرك شوية لآخر مرة في الرحلة قبل ما تخلص.
            </p>
            <p className="font-medium text-[#292926]">
              للرحلة دي، ويليجاما بتمشي حلو جداً في <strong>3 ليالي</strong>، بس الأفضل تديها <strong>4 ليالي</strong> لو عايز يوم بحر بجد، رحلة أوداوالاوي، ويوم زيادة هادي من غير استعجال.
            </p>
          </div>
        </div>

        {/* 12.2 How to get here */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>12.2</span> 
            توصل هنا إزاي
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            وإنت جاي من إيلا، ويليجاما هي النقلة من التلال لجزء الساحل الجنوبي في الرحلة. أنضف طريقة غالباً بتكون عربية خاصة محجوزة من فندقك في إيلا أو شركة توصيل معروفة، خصوصاً لإن <strong>مفيش قطارات مباشرة</strong> من إيلا لويليجاما. وده برضه أحسن اختيار لو عايز تقف عند بيت عبور الفيلة (Elephant Transit Home) في السكة، واللي هشرحه بالتفصيل في خطة اليوم بيومه تحت.
            <br/><br/>
            وإنت جاي من هيريكيتيا (مسار الـ 14 يوم)، دي مشوار <strong>ساعة لساعة ونص</strong> بالتوك توك أو التاكسي.
          </p>

          <h4 className="text-xl font-extrabold mb-6">أهم طرق الوصول</h4>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
               <div className="flex items-center gap-3 mb-4">
                 <div className="p-3 rounded-xl shrink-0" style={{ backgroundColor: colors.terracotta + '15', color: colors.terracotta }}>
                   <Car size={24} />
                 </div>
                 <h5 className="font-extrabold text-lg leading-tight">عربية خاصة أو تاكسي طول الطريق من إيلا</h5>
               </div>
               <div className="space-y-3 mt-auto">
                 <p className="text-gray-600 m-0 text-sm">غالباً حوالي <strong className="text-[#292926]">3.5 لـ 4.5 ساعات</strong> وده أحسن اختيار عموماً للمسار ده.</p>
                 <p className="text-gray-600 m-0 text-sm"><strong className="text-[#292926]">السعر:</strong> أسعار العربيات الصغيرة حالياً تقريباً <strong className="text-[#292926]">43 لـ 67 دولار</strong> للعربية كلها.</p>
                 <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-2">
                    <span className="text-[14px] font-bold text-gray-600 uppercase tracking-widest">خيارات الحجز</span>
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
                 <h5 className="font-extrabold text-lg leading-tight">عربية خاصة أو تاكسي من هيريكيتيا</h5>
               </div>
               <div className="space-y-3 mt-auto">
                 <p className="text-gray-600 m-0 text-sm">أسهل اختيار للجزء ده لو عايز توصيلة مباشرة. اسأل فندقك الأول.</p>
                 <p className="text-gray-600 m-0 text-sm"><strong className="text-[#292926]">الوقت:</strong> غالباً حوالي <strong className="text-[#292926]">ساعة لساعة ونص</strong>.</p>
                 <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-2">
                    <span className="text-[14px] font-bold text-gray-600 uppercase tracking-widest">أرقام تواصل</span>
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
                 <h5 className="font-extrabold text-lg leading-tight">لو معاك سواق أصلاً</h5>
               </div>
               <div className="space-y-3 mt-auto">
                 <p className="text-gray-600 m-0 text-sm">كمل معاه طول الطريق بالعربية لويليجاما وفكك من تخطيط المواصلات الزيادة.</p>
               </div>
            </div>
          </div>
        </div>

        {/* 12.3 Where to stay */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>12.3</span> 
            تبات فين
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            للمحطة دي، أنا هبات في أي مكان على <strong>خط ويليجاما لأهانجاما</strong>، حسب إنت عايز تبقى أقرب للشاطئ الرئيسي، شارع جانبي هادي، أو واحدة من مناطق السيرف القريبة. الأوض اللي على البحر ممكن تبقى دوشة لإن الطريق الرئيسي غالباً بيكون وراها على طول.
          </p>

          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <BedDouble size={24} style={{ color: colors.green }} />
            ترشيحات اقتصادية
          </h4>
          <div className="flex flex-col gap-4 mb-10">
            {[
              { name: "Weligama Bay Eco Villa", rating: "8.7", price: "9 دولار", note: "جو جنينة هادي، ناس ذوق", url: "https://www.booking.com/hotel/lk/weligama-bay-eco-villa.html" },
              { name: "Plantation Inn", rating: "8.8", price: "18 لـ 19 دولار", note: "على البحر، أوض واسعة", url: "https://www.booking.com/hotel/lk/plantation-inn.html" },
              { name: "Whitegates Lodge", rating: "9.7", price: "21 دولار", note: "مكان هادي في جنينة، فطار بيتي", url: "https://www.booking.com/hotel/lk/whitegates-lodge.html" },
              { name: "Kusuma's Lazy Left", rating: "9.6", price: "23 دولار", note: "على البحر، إدارة عائلية، فطار قوي", url: "https://www.booking.com/hotel/lk/kusuma-39-s-lazy-left.html" },
              { name: "Naia Beach House Midigama", rating: "9.5", price: "24 دولار", note: "تراس على المحيط، قريب من مكان السيرف", url: "https://www.booking.com/hotel/lk/naia-beach-house-midigama.html" }
            ].map((hotel, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between bg-white border border-gray-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow gap-4">
                <div>
                  <span className="font-extrabold text-lg text-[#292926] block sm:inline">{hotel.name}</span>
                  <span className="text-gray-500 text-sm sm:mr-2 block sm:inline">| التقييم <strong className="text-amber-600">{hotel.rating}</strong> | حوالي <strong>{hotel.price}</strong> لليلة واحدة</span>
                  {hotel.note && <p className="text-sm text-gray-500 mt-1 mb-0 italic"><strong>ملاحظة:</strong> {hotel.note}</p>}
                </div>
                <a href={hotel.url} target="_blank" rel="noopener noreferrer" className="shrink-0 px-5 py-2 bg-gray-50 hover:bg-gray-100 text-[#292926] text-sm font-bold rounded-xl border border-gray-200 transition-colors flex items-center gap-2 justify-center mt-2 sm:mt-0">
                  احجز <ExternalLink size={14}/>
                </a>
              </div>
            ))}
          </div>

          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <Building2 size={24} style={{ color: colors.charcoal }} />
            ترشيحات متوسطة
          </h4>
          <div className="flex flex-col gap-4 mb-10">
            {[
              { name: "Villa Polwatta", rating: "9.0", price: "25 دولار", note: "هادي، واسع، أصحاب المكان ذوق", url: "https://www.booking.com/hotel/lk/villa-polwatta-weligama.html" },
              { name: "Ahangama Beach Resort", rating: "8.9", price: "27 دولار", note: "قيمة حلوة، قريب من البحر", url: "https://www.booking.com/hotel/lk/ahangama-beach-resort.html" },
              { name: "Weligama Watergate Resort", rating: "8.4", price: "28 دولار", note: "قريب من البحر، أوض واسعة بتكييف", url: "https://www.booking.com/hotel/lk/weligama-watergate-resort-weligama.html" },
              { name: "Skywalker Guest House Weligama", rating: "9.2", price: "29 دولار", note: "منظر على النهر، مكان هادي، مشية قصيرة للبحر", url: "https://www.booking.com/hotel/lk/skywalker-guest-house-weligama.html" },
              { name: "Temple Tree", rating: "9.3", price: "30 دولار", note: "فطار كبير", url: "https://www.booking.com/hotel/lk/temple-tree.html" },
              { name: "Sky Mountain", rating: "9.1", price: "32 دولار", note: "مناظر للبحر، تراس خاص", url: "https://www.booking.com/hotel/lk/sky-mountain.html" },
              { name: "Rise", rating: "9.0", price: "33 دولار", note: "مشية قصيرة للبحر", url: "https://www.booking.com/hotel/lk/rise.html" },
              { name: "Lime & Co Midi", rating: "9.0", price: "37 دولار", note: "مناسب للسيرف", url: "https://www.booking.com/hotel/lk/lime-amp-co-midi.html" },
              { name: "Komorebi Weligama", rating: "9.6", price: "42 دولار", note: "على البحر، أوض شيك، تقييم عالي", url: "https://www.booking.com/hotel/lk/komorebi-weligama.html" }
            ].map((hotel, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between bg-white border border-gray-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow gap-4">
                <div>
                  <span className="font-extrabold text-lg text-[#292926] block sm:inline">{hotel.name}</span>
                  <span className="text-gray-500 text-sm sm:mr-2 block sm:inline">| التقييم <strong className="text-amber-600">{hotel.rating}</strong> | حوالي <strong>{hotel.price}</strong> لليلة واحدة</span>
                  {hotel.note && <p className="text-sm text-gray-500 mt-1 mb-0 italic"><strong>ملاحظة:</strong> {hotel.note}</p>}
                </div>
                <a href={hotel.url} target="_blank" rel="noopener noreferrer" className="shrink-0 px-5 py-2 bg-gray-50 hover:bg-gray-100 text-[#292926] text-sm font-bold rounded-xl border border-gray-200 transition-colors flex items-center gap-2 justify-center mt-2 sm:mt-0">
                  احجز <ExternalLink size={14}/>
                </a>
              </div>
            ))}
          </div>

          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <Star size={24} style={{ color: colors.terracotta }} />
            ترشيح لمناسبة خاصة
          </h4>
          <div className="flex flex-col gap-4 mb-10">
            {[
              { name: "Villa Naomi Beach", rating: "9.0", price: "68 دولار", note: "على البحر، حمام سباحة، أوض بتطل على البحر", url: "https://www.booking.com/hotel/lk/villa-naomi-beach.html" }
            ].map((hotel, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between bg-white border border-gray-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow gap-4">
                <div>
                  <span className="font-extrabold text-lg text-[#292926] block sm:inline">{hotel.name}</span>
                  <span className="text-gray-500 text-sm sm:mr-2 block sm:inline">| التقييم <strong className="text-amber-600">{hotel.rating}</strong> | حوالي <strong>{hotel.price}</strong> لليلة واحدة</span>
                  {hotel.note && <p className="text-sm text-gray-500 mt-1 mb-0 italic"><strong>ملاحظة:</strong> {hotel.note}</p>}
                </div>
                <a href={hotel.url} target="_blank" rel="noopener noreferrer" className="shrink-0 px-5 py-2 bg-gray-50 hover:bg-gray-100 text-[#292926] text-sm font-bold rounded-xl border border-gray-200 transition-colors flex items-center gap-2 justify-center mt-2 sm:mt-0">
                  احجز <ExternalLink size={14}/>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* 12.4 Where and what to eat */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>12.4</span> 
            تاكل فين وإيه
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            ويليجاما من الأماكن اللي صعب تلبس فيها في الأكل. أغلب الناس على الخط ده بيعملوا أكل حلو جداً، بس دي الترشيحات اللي هخليها في بالي شخصياً.
          </p>

          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <Sun size={24} style={{ color: colors.yellow }} />
            ترشيح لنادي شاطئ وخروجة بالنهار
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { name: "Kai Beach Pool Club", desc: "أحسن مكان تقضي فيه اليوم للأكل والشرب لو عايز حمام سباحة، بحر، مزيكا، ومكان ينفع تقعد فيه بالساعات بجد", price: "الدخول ببلاش", icon: Waves, bgColor: colors.yellow, map: "https://www.google.com/maps/search/?api=1&query=Kai+Beach+Pool+Club+Weligama" }
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
                    <span className="text-[#292926] font-bold text-sm bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100 w-fit">السعر: {place.price}</span>
                    <button onClick={() => openMap(place.map)} className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors text-right w-fit">
                      <MapPin size={16}/> شوف على الخريطة
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <Utensils size={24} style={{ color: colors.green }} />
            ترشيحات محلية واقتصادية سهلة
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { name: "Rice and Spoon, Ahangama", desc: "من أحسن محطات الأكل السريلانكي البسيطة في الناحية دي لو عايز طبق محلي بجد من غير تفكير كتير", price: "حوالي 3 لـ 5 دولار للفرد", icon: Soup, bgColor: colors.green, map: "https://www.google.com/maps/search/?api=1&query=Rice+and+Spoon+Ahangama" },
              { name: "Curry Gedara House, Mirissa", desc: "محطة أكل سريلانكي بنظام البوفيه فيها كاري كتير، أرز، وبابادوم، ومن أحسن الوجبات المحلية الرخيصة في الناحية دي", price: "حوالي 4.77 دولار للفرد", icon: Utensils, bgColor: colors.terracotta, map: "https://www.google.com/maps/search/?api=1&query=Curry+Gedara+Mirissa" }
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
            كافيهات ومطاعم
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { name: "NOMAD Café", desc: "من أحلى محطات الكافيهات في ويليجاما للبرانش، القهوة، ووجبة رايقة في المدينة", icon: Coffee, bgColor: colors.charcoal, map: "https://www.google.com/maps/search/?api=1&query=Nomad+Cafe+Weligama" },
              { name: "PLAN B Weligama", desc: "محطة قوية للقهوة والبرانش في السنتر لو عايز كافيه مودرن بقهوة بجد وجو ينفع للشغل", price: "القهوة حالياً بتعمل تقريباً 2.40 لـ 4.80 دولار", icon: Coffee, bgColor: colors.yellow, map: "https://www.google.com/maps/search/?api=1&query=PLAN+B+Weligama" },
              { name: "Cactus Ahangama", desc: "محطة شيك قريبة للبرانش أو مشروبات الغروب لو عايز إحساس كافيه بحر مختلف بره ويليجاما", icon: Utensils, bgColor: colors.terracotta, map: "https://www.google.com/maps/search/?api=1&query=Cactus+Ahangama" },
              { name: "Moochies Cafe & Restaurant", desc: "محطة كاجوال سهلة تخليها في بالك حوالين ويليجاما لو عايز اختيار أكل مضمون كمان", icon: Coffee, bgColor: colors.green, map: "https://www.google.com/maps/search/?api=1&query=Moochies+Cafe+%26+Restaurant+Weligama" },
              { name: "Dulnetha Restaurant", desc: "محطة رايقة فيها أكل، بلياردو، ونظام كلاس طبخ لو عايز حاجة مختلفة شوية عن الكافيهات العادية", icon: Flame, bgColor: colors.charcoal, map: "https://www.google.com/maps/search/?api=1&query=Dulnetha+Restaurant+Weligama" },
              { name: "Thileni's", desc: "محطة أكل سهلة كمان تخليها في بالك على الخط ده", icon: Soup, bgColor: colors.yellow, map: "https://www.google.com/maps/search/?api=1&query=Thileni%27s+Weligama" }
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
                    {place.price && <span className="text-[#292926] font-bold text-sm bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100 w-fit">{place.price}</span>}
                    <button onClick={() => openMap(place.map)} className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors text-right w-fit">
                      <MapPin size={16}/> شوف على الخريطة
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <Fish size={24} style={{ color: colors.terracotta }} />
            مطاعم على البحر
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { name: "Sea Soul, Ahangama", desc: "محطة قوية على البحر ناحية كابالانا لو عايز أكل، شرب، وختام حلو للغروب بعد وقت البحر", note: "من أسهل محطات الأكل اللي تظبطها مع يوم بحر في كابالانا", icon: Fish, bgColor: colors.terracotta, map: "https://www.google.com/maps/search/?api=1&query=Sea+Soul+Ahangama" },
              { name: "Wijaya Beach Restaurant", desc: "أسهل مطعم تظبطه مع ناحية دالاويلا لو عايز سمك، بيتزا، وقعدة غروب رايقة", icon: Flame, bgColor: colors.charcoal, map: "https://www.google.com/maps/search/?api=1&query=Wijaya+Beach+Restaurant" },
              { name: "Hakuna Matata, Ahangama", desc: "محطة كاجوال قريبة وسهلة لو عايز وجبة رايقة كمان بره ويليجاما", icon: Utensils, bgColor: colors.yellow, map: "https://www.google.com/maps/search/?api=1&query=Hakuna+Matata+Ahangama" },
              { name: "Petti Petti Mirissa", desc: "من أحلى اختيارات المطاعم اللي على البحر لو عايز منيو حلو، مناظر حلوة، حمام سباحة، وكوكتيلات معقولة", icon: Star, bgColor: colors.green, map: "https://www.google.com/maps/search/?api=1&query=Petti+Petti+Mirissa" },
              { name: "CRUST AHANGAMA", desc: "من أسهل اختيارات بالليل القريبة لو عايز بيتزا، مزيكا، وزحمة بالليل حيوية أكتر", icon: Flame, bgColor: colors.terracotta, map: "https://www.google.com/maps/search/?api=1&query=CRUST+AHANGAMA" },
              { name: "Hotel de Uncles", desc: "محطة تانية حلوة بالليل جنب CRUST على طول، بنفس جو أهانجاما السهل بالليل", icon: Coffee, bgColor: colors.charcoal, map: "https://www.google.com/maps/search/?api=1&query=Hotel+de+Uncles+Ahangama" }
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
                    {place.note && <span className="text-xs text-gray-500 italic"><strong>ملاحظة:</strong> {place.note}</span>}
                    <button onClick={() => openMap(place.map)} className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors text-right w-fit">
                      <MapPin size={16}/> شوف على الخريطة
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <Moon size={24} style={{ color: colors.charcoal }} />
            أماكن بالليل في أهانجاما
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { name: "Isle of Gelato", desc: "أسهل محطة حلويات تظبطها مع لفة أهانجاما بالليل", icon: ShoppingBag, bgColor: colors.charcoal, map: "https://www.google.com/maps/search/?api=1&query=Isle+of+Gelato+Ahangama" },
              { name: "Lamana", desc: "أحسن لخروجة بالليل عن عشاء عادي، خصوصاً لو وقتك ظبط مع يوم خميس", icon: Moon, bgColor: colors.terracotta, map: "https://www.google.com/maps/search/?api=1&query=Lamana+Ahangama" },
              { name: "The Doctor's House", desc: "مكان حلو للحفلات، خصوصاً أيام الأربعاء والسبت. بيبعد حوالي 30 دقيقة بالتوك توك.", link: { text: "@the_doctors_house", url: "https://www.instagram.com/the_doctors_house/" }, icon: Flame, bgColor: colors.yellow, map: "https://www.google.com/maps/search/?api=1&query=The+Doctor%27s+House+Madiha" }
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
                    {place.link && (
                      <a href={place.link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-bold text-gray-500 hover:text-[#292926] w-fit">
                        <ExternalLink size={16}/> {place.link.text}
                      </a>
                    )}
                    <button onClick={() => openMap(place.map)} className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors text-right w-fit">
                      <MapPin size={16}/> شوف على الخريطة
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
            أحسن ترشيحات الشواطئ المجانية
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            ويليجاما بتشتغل أحسن حاجة لما تستخدمها كمدينة ساحلية وقاعدة تتنقل منها بين الشواطئ القريبة. اعتبر القائمة اللي تحت دي بنك شواطئ ترجعله، وبعدين اختار الشواطئ الأقرب ليك أو اللي لسه مرحتهاش.
          </p>

          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <Waves size={24} style={{ color: colors.charcoal }} />
            بنك الشواطئ
          </h4>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: "شاطئ ويليجاما", desc: "أسهل شاطئ لكل يوم والاختيار العملي الأكتر ليوم بحر بسيط في المدينة، سيرف للمبتدئين، وتمشية وقت الغروب", map: "https://www.google.com/maps/search/?api=1&query=Weligama+Beach" },
              { name: "شاطئ الغابة (Jungle Beach)، ناحية ويليجاما", desc: "محطة شاطئ أصغر وأهدى لو عايز إحساس شاطئ مستخبي أكتر من غير ما تروح بعيد", map: "https://www.google.com/maps/search/?api=1&query=Jungle+Beach+Weligama" },
              { name: "شاطئ كابالانا", desc: "اختيار يوم البحر الأوسع لو عايز مساحة أكبر، شاطئ سهل للعيلة، وإحساس شاطئ سيرف أقوى", note: "سراير البحر متوفرة هنا كتير، وSea Soul من أسهل محطات الأكل القريبة للغروب", map: "https://www.google.com/maps/search/?api=1&query=Kabalana+Beach" },
              { name: "شاطئ دالاويلا", desc: "من أحسن الأماكن على الساحل ده عشان تلحق وتشوف سلاحف بحرية برية", note: "الوصول ممكن تحسه مستخبي شوية لإنك غالباً بتدخل من فنادق أو ممرات ضيقة من الطريق", map: "https://www.google.com/maps/search/?api=1&query=Dalawella+Beach" },
              { name: "شاطئ السلاحف (Turtle Beach)", desc: "محطة سلاحف قوية تانية في الناحية دي وحلوة تظبطها مع ميريسا وتل شجرة جوز الهند (Coconut Tree Hill)", map: "https://www.google.com/maps/search/?api=1&query=Turtle+Beach+Mirissa" },
              { name: "الشاطئ السري (Secret Beach)، أهانجاما", desc: "الشاطئ المجاني الأهدى لو عايز محطة شاطئ مش واضحة أوي من ويليجاما", map: "https://www.google.com/maps/search/?api=1&query=Secret+Beach+Ahangama" },
              { name: "الشاطئ السري (Secret Beach)، ميريسا", desc: "اختيار الشاطئ الأنعم لو عايز نظام بحيرة أصغر بينفع حلو جداً مع الأطفال الصغيرين كمان", map: "https://www.google.com/maps/search/?api=1&query=Secret+Beach+Mirissa" }
            ].map((beach, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-start justify-between bg-[#FAFAFA] border border-gray-100 p-5 rounded-2xl shadow-sm gap-4">
                <div>
                  <span className="font-extrabold text-lg text-[#292926] block">{beach.name}</span>
                  <span className="text-gray-600 text-sm leading-snug block mt-1">{beach.desc}</span>
                  {beach.note && <span className="text-gray-500 text-xs italic block mt-2"><strong>ملاحظة:</strong> {beach.note}</span>}
                </div>
                <button onClick={() => openMap(beach.map)} className="shrink-0 px-4 py-2 bg-white hover:bg-gray-50 text-blue-600 text-sm font-bold rounded-xl border border-gray-200 transition-colors flex items-center gap-2 justify-center mt-2 sm:mt-0">
                  <MapPin size={14}/> خريطة
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 12.6 Turtle hatchery list */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>12.6</span> 
            قائمة مفرخات السلاحف
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            في مفرخات كتير على الساحل ده، فمش هقفل على واحد من غير ما أتأكد. الحركة الذكية إنك تبعتلهم رسالة على <strong>واتساب قبلها بيوم أو يومين</strong>، تسأل على السعر هناك الأول، وبعدين لسه ممكن تفاصل تاني لما توصل. هي مسافة <strong>20 دقيقة سواقة</strong> من ويليجاما للخط ده، وأحسن وقت تخططله تقريباً من <strong>4:30 العصر للغروب</strong>. في مرة روحت، أخدت <strong>خصم 50%</strong> لما وصلت لإن مكنش عندهم غير كام سلحفاة اليوم ده، فاعمل حسابك تفاصل بعد ما توصل.
          </p>

          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <Camera size={24} style={{ color: colors.green }} />
            بنك مفرخات السلاحف
          </h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Sea Turtle Farm & Hatchery Koggala", note: "فيه كمان متحف صغير", location: "Koggala", phone: "+94 77 311 1365", map: "https://www.google.com/maps/search/?api=1&query=Sea+Turtle+Farm+and+Hatchery+Koggala" },
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
                  <div className="flex items-center gap-2 text-gray-600 text-sm font-medium" dir="ltr">
                    <Smartphone size={14} className="text-green-600"/> {hatchery.phone}
                  </div>
                </div>
                <button onClick={() => openMap(hatchery.map)} className="w-full px-4 py-2.5 bg-white hover:bg-gray-50 text-blue-600 text-sm font-bold rounded-xl border border-gray-200 transition-colors flex items-center gap-2 justify-center mt-2">
                  <MapPin size={14}/> شوف على الخريطة
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
              اليوم الأول - يوم الوصول
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
              وإنت جاي من إيلا، خلي أول يوم خفيف. لو الوقت ظبط معاك، أنضف محطة زيادة في الطريق هي بيت عبور الفيلة (Elephant Transit Home)، وبعدين خلي باقي اليوم خفيف بمحطة بحر سهلة.
              <br/><br/>
              وإنت جاي من شاطئ هيريكيتيا، غالباً هيكون معاك وقت أكتر تستكشف.
            </p>

            <h4 className="text-xl font-extrabold mb-8 flex items-center gap-3">
              <Compass size={24} style={{ color: colors.green }} />
              ترشيح
            </h4>
            <div className="bg-[#FAFAFA] border border-gray-100 rounded-[2.5rem] p-8 md:p-12">
              <ul className="space-y-10 relative before:absolute before:inset-0 before:mr-[11px] md:before:mr-[13px] before:translate-x-px before:h-full before:w-[2px] before:bg-gray-200">
                {[
                  { name: "بيت عبور الفيلة في السكة من إيلا", desc: "محطة الفيلة الأسهل والأرخص لو عايز تكسر الطريق من غير ما تقلب اليوم لسفاري كامل", effort: "سهل جداً / وقفة سريعة", price: "حوالي 5 دولار زائد الضريبة للبالغ الأجنبي وحوالي 3 دولار زائد الضريبة للطفل", note: "مواعيد الفرجة على الأكل العامة غالباً بتبقى مكتوبة 10:30 الصبح، 2:30 العصر، و 6:00 مساءً، فظبط خروجك من إيلا على الأساس ده", color: colors.green, map: "https://www.google.com/maps/search/?api=1&query=Elephant+Transit+Home+Udawalawe", img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweomWM2NSSkvOI_A2B3mhVwJNS9iNukvGSf3fWupp_lXn6qDDilQ6Z-e_TkZNP6At_1Sv3v1LlTgKS7ssUoO0ELZzDvWgssD_IkOK5GeZwlWDaC1c5V1UGRXTScS7rp_SxuUcZqc=w800-h800-k-no" },
                  { name: "مساء أول سهل على البحر", desc: "اختار شاطئ من بنك الشواطئ قريب منك واستمتع بأول غروب ليك على البحر", color: colors.yellow, img: "https://images.pexels.com/photos/35877451/pexels-photo-35877451.jpeg" },
                  { name: "خروجة اختيارية بالليل لو لسه فيك حيل", desc: "لو يوم خميس، روح Lamana؛ غير كده خليك في CRUST، Hotel de Uncles، و Isle of Gelato، واستغلها فرصة حلوة تقف في هايبر ماركت Cargills تجيب سناكس", color: colors.charcoal, img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweq2Pxk6MMfxnnAU63B3FGRP806CbITifGTgiK3NQQZZHwMq8fv3GsH1siE6w-Bp1aGTOesxJ1Oxreu3iOmJZRnMDtow6_7_4o28IHjHczNdXXl7S4SFie5YmdXdHytW5leqY0m4pQRzgdI=w800-h800-k-no" }
                ].map((stop, idx) => (
                  <li key={idx} className="relative pr-10 md:pr-14">
                    <div style={{ backgroundColor: stop.color }} className="absolute right-0 top-1.5 w-6 h-6 md:w-7 md:h-7 rounded-full border-4 border-[#FAFAFA] shadow-sm z-10"></div>
                    <div className="bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row overflow-hidden items-stretch">
                      
                      <div className="flex-1 flex flex-col p-6 md:p-8">
                        <h5 className="font-extrabold text-xl md:text-2xl mb-3">{stop.name}</h5>
                        {stop.desc && <p className="text-gray-600 text-lg mb-5">{stop.desc}</p>}
                        
                        <div className="space-y-3 mb-6 flex-grow">
                          {stop.effort && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">المجهود:</strong> {stop.effort}</p>}
                          {stop.price && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">السعر:</strong> {stop.price}</p>}
                          {stop.note && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">ملاحظة:</strong> {stop.note}</p>}
                        </div>
                        
                        {stop.map && (
                          <div className="flex flex-wrap gap-4 border-t border-gray-100 pt-5 mt-auto">
                            <button onClick={() => openMap(stop.map)} className="flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 text-right">
                              <MapPin size={16}/> شوف على الخريطة
                            </button>
                          </div>
                        )}
                      </div>

                      <div className="md:w-2/5 lg:w-1/3 shrink-0 flex flex-col bg-gray-50 border-t md:border-t-0 md:border-r border-gray-100">
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
              <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>12.7.2</span> 
              اليوم التاني - يوم Kai
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
              ده اليوم اللي تدلع فيه نفسك شوية بعد الأجزاء الطويلة واللي فيها حركة أكتر في الرحلة، لو وصلت من إيلا على طول. خليها بسيطة، اقضي اليوم في <strong>Kai Beach Pool Club</strong>، واستمتع بجزء البحر الهادي من المسار بجد.
            </p>

            <h4 className="text-xl font-extrabold mb-8 flex items-center gap-3">
              <Compass size={24} style={{ color: colors.green }} />
              أحسن طريقة تعملها بيها
            </h4>
            <div className="bg-[#FAFAFA] border border-gray-100 rounded-[2.5rem] p-8 md:p-12">
              <ul className="space-y-10 relative before:absolute before:inset-0 before:mr-[11px] md:before:mr-[13px] before:translate-x-px before:h-full before:w-[2px] before:bg-gray-200">
                {[
                  { name: "Kai Beach Pool Club", desc: "أحسن نظام ليوم كامل هنا لو عايز حمام سباحة، بحر، أكل، مزيكا، ومكان مريح تقعد فيه بالساعات", price: "الدخول ببلاش", color: colors.yellow, map: "https://www.google.com/maps/search/?api=1&query=Kai+Beach+Pool+Club+Weligama", img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqecUYgYLcy1llqAytnmfDo3pu0Q3iebYy37UVP9SO6mYjQ6kWk2VxUoS_LTLKs0AT-vIg7O19bmsAsv5jDk00jS9LiGIl29Szu_0mW8pDVTpG3A2F_O6ExKFAWmWnZJRTOpPbG=w800-h800-k-no" },
                  { name: "درس سيرف متأخر في شاطئ ويليجاما أو في Kai Beach Pool Club", desc: "إضافة حلوة لو لسه عايز حاجة فيها حركة بعد جزء نادي حمام السباحة الهادي من اليوم", effort: "سهل لمتوسط", price: "حوالي 12 لـ 27 دولار للفرد حسب نظام الدرس", note: "في مدارس سيرف كتير على البحر على طول، وصعب تلبس في شاطئ ويليجاما. Kai Beach Pool Club كمان عندهم دروس سيرف لو عايز، بس غالباً هيكون الاختيار الأغلى", color: colors.green, map: "https://www.google.com/maps/search/?api=1&query=Weligama+Beach", img: "https://images.pexels.com/photos/34714750/pexels-photo-34714750.jpeg" },
                  { name: "خروجة تانية اختيارية بالليل", desc: "حلوة تخليها لليلة دي لو فوت الخروجة اللي قبلها أو عايز ليلة حيوية تانية على الناحية دي من الساحل", note: "Lamana بيشتغل أحسن حاجة أيام الخميس. The Doctor's House اختيار حلو أيام الأربعاء والسبت. غير كده، خليها بسيطة مع CRUST، Hotel de Uncles، و Isle of Gelato. دي كمان فرصة حلوة تقف في Cargills هناك تجيب طلبات.", color: colors.charcoal, img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqPgN2Kj6AEjr8fWH8B_4SpKfl1irPqYA3nHXb8PWkXL9pLpxY-_kVtpw6BavhxyQ_tE7sbPjhqwfUoo0HS1SSI7gaOisgmUdok1-K-CveLz7YjjtC3CJG_ZqvE5MNBtYKBtHbn=w800-h800-k-no" }
                ].map((stop, idx) => (
                  <li key={idx} className="relative pr-10 md:pr-14">
                    <div style={{ backgroundColor: stop.color }} className="absolute right-0 top-1.5 w-6 h-6 md:w-7 md:h-7 rounded-full border-4 border-[#FAFAFA] shadow-sm z-10"></div>
                    <div className="bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row overflow-hidden items-stretch">
                      
                      <div className="flex-1 flex flex-col p-6 md:p-8">
                        <h5 className="font-extrabold text-xl md:text-2xl mb-3">{stop.name}</h5>
                        {stop.desc && <p className="text-gray-600 text-lg mb-5">{stop.desc}</p>}
                        
                        <div className="space-y-3 mb-6 flex-grow">
                          {stop.effort && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">المجهود:</strong> {stop.effort}</p>}
                          {stop.price && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">السعر:</strong> {stop.price}</p>}
                          {stop.note && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">ملاحظة:</strong> {stop.note}</p>}
                        </div>
                        
                        {stop.map && (
                          <div className="flex flex-wrap gap-4 border-t border-gray-100 pt-5 mt-auto">
                            <button onClick={() => openMap(stop.map)} className="flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 text-right">
                              <MapPin size={16}/> شوف على الخريطة
                            </button>
                          </div>
                        )}
                      </div>

                      <div className="md:w-2/5 lg:w-1/3 shrink-0 flex flex-col bg-gray-50 border-t md:border-t-0 md:border-r border-gray-100">
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

          {/* Day 3 */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
              <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>12.7.3</span> 
              اليوم التالت - ناحية جالي وكوجالا
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
              ده يوم الفرجة الأكبر على الساحل الجنوبي واللي هعمله بعربية أحسن من توك توك. دي أنضف طريقة تظبط بيها جزء التراث، جزء البحيرة، وواحدة من الإضافات الساحلية القوية من غير ما تضيع وقت كتير بينهم.
            </p>

            <h4 className="text-xl font-extrabold mb-8 flex items-center gap-3">
              <Compass size={24} style={{ color: colors.green }} />
              أحسن طريقة تعملها بيها
            </h4>
            <div className="bg-[#FAFAFA] border border-gray-100 rounded-[2.5rem] p-8 md:p-12">
              <ul className="space-y-10 relative before:absolute before:inset-0 before:mr-[11px] md:before:mr-[13px] before:translate-x-px before:h-full before:w-[2px] before:bg-gray-200">
                {[
                  { name: "حصن جالي (Galle Fort)", desc: "خروجة التراث الأساسية من ويليجاما ومن أسهل أنصاف الأيام اللي مش على البحر في الجزء ده من الساحل", effort: "سهل / قليل", price: "ببلاش", note: "من ويليجاما، المسافة حوالي 29 كم وغالباً بتاخد من 30 لـ 50 دقيقة بالعربية؛ أحسن تتعمل مع سواق أو عربية PickMe بدل التوك توك", color: colors.yellow, map: "https://www.google.com/maps/search/?api=1&query=Galle+Fort", img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepd2_02k19biPNPcrCsihqTR46MAh4JlOuYHcwGhjoGCkIVI2Q_8BcSKfcMQbC3P_muL_zZfQyPe7A-JYPLtT4VRYogxeQoNq9Ho8Hds307j3eKCpys-NiTLZixX-e2sVtoatj9zMEx2wA=w800-h800-k-no" },
                  { name: "سفاري قارب بحيرة كوجالا", desc: "أحسن إضافة طبيعة في الناحية دي لو عايز أشجار مانجروف، طيور، ومحطة جزيرة القرفة المعتادة", effort: "سهل / قليل", price: "غالباً حوالي 12 لـ 28 دولار حسب نوع القارب واللي مشمول فيه", note: "بعض الشركات بتخليها بسيطة، وشركات تانية بتزود محطة قرفة أو تجربة محلية، فاسأل إيه اللي مشمول بجد قبل ما تحجز", color: colors.green, map: "https://www.google.com/maps/search/?api=1&query=Koggala+Lake", img: "https://lakpura.com/cdn/shop/products/LK76030100-08-E.jpg?v=1745305299" },
                  { name: "تجديف كاياك أو كانو في بحيرة كوجالا", desc: "الإضافة الأحسن لو عايز نسخة التجديف الأهدى بدل ما تعمل القارب الموتور بس", effort: "سهل لمتوسط", price: "غالباً حوالي 14 لـ 20 دولار حسب لو بمرشد أو لوحدك", note: "ده نشاط التجديف الضيق بكرسي أو كرسيين اللي الناس غالباً بتقصده لما تتكلم عن استكشاف البحيرة بهدوء أكتر. أحسن تتواصل معاهم الأول قبل ما توصل.", options: [ { text: "Koggala Lake Boat Safari & Adventure Kayaking No:09", url: "https://maps.app.goo.gl/ecAMDqaAVxkHwLns9" }, { text: "Koggala Lake Boat Safari & Kayak Adventure with Malish", url: "https://maps.app.goo.gl/uF4TzfvQLuiLHh4L7" }, { text: "Thilan's Kayaking and Boat Experience at Koggala Lagoon", url: "https://maps.app.goo.gl/S2ktVbHewG5NjZTk6" } ], color: colors.charcoal, map: "https://www.google.com/maps/search/?api=1&query=Koggala+Lake+Kayaking", img: "https://lh3.googleusercontent.com/p/AF1QipNG90mT558l14n3h_UN3BHEpEQsExr6q-L9luuK=w800-h800-k-no" },
                  { name: "اختياري: The Doctor's House لخروجة بالليل", desc: "مكان حلو للحفلات لو عايز خروجة بجد كمان على الناحية دي من الساحل أيام الأربعاء والسبت", link: { text: "@the_doctors_house", url: "https://www.instagram.com/the_doctors_house/" }, color: colors.terracotta, map: "https://www.google.com/maps/search/?api=1&query=The+Doctor%27s+House+Madiha", img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweo1ugr8SPbZwNB4T2vVj-l-BnA3wL5gPf5tIkjUsEoW2tItWOGRXPtYArrAIkaWS7CeatbT1WZyemyK88VLoggh1jzn7s3BX3ntKX3Z3hIonfNINU0QczQf4g_WTSgdd5pUtLNz=w800-h800-k-no" }
                ].map((stop, idx) => (
                  <li key={idx} className="relative pr-10 md:pr-14">
                    <div style={{ backgroundColor: stop.color }} className="absolute right-0 top-1.5 w-6 h-6 md:w-7 md:h-7 rounded-full border-4 border-[#FAFAFA] shadow-sm z-10"></div>
                    <div className="bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row overflow-hidden items-stretch">
                      
                      <div className="flex-1 flex flex-col p-6 md:p-8">
                        <h5 className="font-extrabold text-xl md:text-2xl mb-3">{stop.name}</h5>
                        {stop.desc && <p className="text-gray-600 text-lg mb-5">{stop.desc}</p>}
                        
                        <div className="space-y-3 mb-6 flex-grow">
                          {stop.effort && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">المجهود:</strong> {stop.effort}</p>}
                          {stop.price && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">السعر:</strong> {stop.price}</p>}
                          {stop.note && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">ملاحظة:</strong> {stop.note}</p>}
                        </div>
                        
                        <div className="flex flex-col gap-3 border-t border-gray-100 pt-5 mt-auto">
                          {stop.options && (
                            <>
                              <span className="font-bold text-[#292926] text-sm">خيارات خريطة زيادة:</span>
                              {stop.options.map((opt, oIdx) => (
                                <a key={oIdx} href={opt.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 text-right leading-tight">
                                  <MapPin size={14} className="shrink-0"/> {opt.text}
                                </a>
                              ))}
                            </>
                          )}
                          {stop.link && (
                            <a href={stop.link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-bold text-gray-500 hover:text-[#292926] w-fit">
                              <ExternalLink size={16}/> {stop.link.text}
                            </a>
                          )}
                          {stop.map && !stop.options && (
                            <button onClick={() => openMap(stop.map)} className="flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 text-right w-fit">
                              <MapPin size={16}/> شوف على الخريطة
                            </button>
                          )}
                        </div>
                      </div>

                      <div className="md:w-2/5 lg:w-1/3 shrink-0 flex flex-col bg-gray-50 border-t md:border-t-0 md:border-r border-gray-100">
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

          {/* Day 4 */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
              <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>12.7.4</span> 
              اليوم الرابع - ميريسا وساحل السلاحف
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
              ده يوم السلاحف والبحر، وهبنيه حوالين ميريسا الأول، وبعدين ناحية السلاحف متأخر في اليوم لما تكون عرفت أي مفرخ هتستخدمه بجد.
            </p>

            <h4 className="text-xl font-extrabold mb-8 flex items-center gap-3">
              <Compass size={24} style={{ color: colors.green }} />
              خيارات حلوة
            </h4>
            <div className="bg-[#FAFAFA] border border-gray-100 rounded-[2.5rem] p-8 md:p-12">
              <ul className="space-y-10 relative before:absolute before:inset-0 before:mr-[11px] md:before:mr-[13px] before:translate-x-px before:h-full before:w-[2px] before:bg-gray-200">
                {[
                  { name: "شاطئ ميريسا", desc: "نص أول حلو على البحر لو عايز نظام شاطئ كلاسيكي أحلى قبل ما تنقل لناحية السلاحف بعدين. خليها بسيطة هنا واستخدم بنك الشواطئ لو بتفضل شاطئ تاني.", color: colors.yellow, map: "https://www.google.com/maps/search/?api=1&query=Mirissa+Beach", img: "https://images.pexels.com/photos/35511613/pexels-photo-35511613.jpeg" },
                  { name: "تل شجرة جوز الهند (Coconut Tree Hill)", desc: "محطة تصوير سهلة جداً في ميريسا قريبة من شاطئ ميريسا ومن أحلى نقط الفرجة السريعة على الناحية دي من الساحل", color: colors.green, map: "https://www.google.com/maps/search/?api=1&query=Coconut+Tree+Hill+Mirissa", img: "https://images.pexels.com/photos/1005417/pexels-photo-1005417.jpeg" },
                  { name: "اختياري: صخرة البغبغان (Parrot Rock)", desc: "إضافة سريعة في ميريسا لو عايز محطة تصوير كمان ومنظر أعلى على البحر", effort: "سهل / وقفة قصيرة", price: "ببلاش", note: "أحسن وقت الجزر لما التعدية بتكون أسهل؛ وقت المد الماية بتعلى والصخور ممكن تزحلق أكتر", color: colors.charcoal, map: "https://www.google.com/maps/search/?api=1&query=Parrot+Rock+Mirissa", img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqJWbQhIO4ydD0ERgfZlmxPeTBuXIY46mFp4L2JgdpPNg8R09Ln-y3HQDvui-Wmz80D8R2CSWDX3laNb88uO0RGJlcMDKp4L7akviBtTmvO62xbazIGBSHuEvhhF0Hd7gYm9rvu=w800-h800-k-no" },
                  { name: "مفرخ السلاحف قريب من الغروب", desc: "الوقت الأحسن بيكون متأخر في اليوم، بعد ما تكون اتواصلت مع المفرخات من بدري عشان تشوف مين فيهم عنده سلاحف صغيرة أو بيعمل إطلاق", note: "استخدم بنك مفرخات السلاحف اللي فوق وخطط لدي تقريباً من 4:30 العصر للغروب", color: colors.terracotta, img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoeXhOlBqXfQMWIHvvrplwv0qasjBilaitBkMnLqPMqEfwBqoKa1YEiBa2lscGrK1yrA2jcBLHgwtaPAytDWHYEIsinIlLBIE8jr-ycJns0i_ee7-vPZJ34LzC6T4PV1atrC0Yp=w800-h800-k-no" },
                  { name: "شاطئ السلاحف ناحية دالاويلا ومطعم Wijaya Beach", desc: "ختام رايق لو عايز محطة أخيرة على ساحل السلاحف وبعدين عشاء سهل على الماية", note: "خليك في الجنب من السلاحف الكبيرة، مش قدامهم على طول، لإن موجة ممكن تخبطهم في رجلك", options: [ { text: "شاطئ دالاويلا", url: "https://www.google.com/maps/search/?api=1&query=Dalawella+Beach" }, { text: "مطعم Wijaya Beach", url: "https://www.google.com/maps/search/?api=1&query=Wijaya+Beach+Restaurant" } ], color: colors.green, img: "https://images.unsplash.com/photo-1526344966-89049886b28d?q=80&w=800" }
                ].map((stop, idx) => (
                  <li key={idx} className="relative pr-10 md:pr-14">
                    <div style={{ backgroundColor: stop.color }} className="absolute right-0 top-1.5 w-6 h-6 md:w-7 md:h-7 rounded-full border-4 border-[#FAFAFA] shadow-sm z-10"></div>
                    <div className="bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row overflow-hidden items-stretch">
                      
                      <div className="flex-1 flex flex-col p-6 md:p-8">
                        <h5 className="font-extrabold text-xl md:text-2xl mb-3">{stop.name}</h5>
                        {stop.desc && <p className="text-gray-600 text-lg mb-5">{stop.desc}</p>}
                        
                        <div className="space-y-3 mb-6 flex-grow">
                          {stop.effort && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">المجهود:</strong> {stop.effort}</p>}
                          {stop.price && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">السعر:</strong> {stop.price}</p>}
                          {stop.note && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">ملاحظة:</strong> {stop.note}</p>}
                        </div>
                        
                        <div className="flex flex-col gap-3 border-t border-gray-100 pt-5 mt-auto">
                          {stop.options && (
                            <>
                              {stop.options.map((opt, oIdx) => (
                                <button key={oIdx} onClick={() => openMap(opt.url)} className="flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 text-right leading-tight w-fit">
                                  <MapPin size={14} className="shrink-0"/> شوف {opt.text} على الخريطة
                                </button>
                              ))}
                            </>
                          )}
                          {stop.map && !stop.options && (
                            <button onClick={() => openMap(stop.map)} className="flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 text-right w-fit">
                              <MapPin size={16}/> شوف على الخريطة
                            </button>
                          )}
                        </div>
                      </div>

                      <div className="md:w-2/5 lg:w-1/3 shrink-0 flex flex-col bg-gray-50 border-t md:border-t-0 md:border-r border-gray-100">
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

        {/* 12.7.5 Optional higher-cost swap - Udawalawe safari */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>12.7.5</span> 
            تبديل اختياري بتكلفة أعلى - سفاري أوداوالاوي
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            لو الحياة البرية تهمك أكتر من يوم كمان على البحر، ده أنضف تبديل ليوم كامل من ويليجاما. أنا هعتبره اليوم الاختياري الأغلى بدل ما يكون الخطة الأساسية.
          </p>

          <h4 className="text-xl font-extrabold mb-8 flex items-center gap-3">
            <Compass size={24} style={{ color: colors.green }} />
            ترشيح
          </h4>
          <div className="bg-[#FAFAFA] border border-gray-100 rounded-[2.5rem] p-8 md:p-12">
            <ul className="space-y-10 relative before:absolute before:inset-0 before:mr-[11px] md:before:mr-[13px] before:translate-x-px before:h-full before:w-[2px] before:bg-gray-200">
              {[
                { name: "سفاري حديقة أوداوالاوي الوطنية من ويليجاما والرجوع", desc: "أحسن خيار سفاري بيركز على الفيلة من القاعدة دي لو عايز تجربة الحديقة الكاملة بدل بيت العبور بس", effort: "مجهود بدني قليل / يوم طويل", price: "الرحلات المتنظمة غالباً بتبدأ من حوالي 105 لـ 147 دولار للفرد", note: "السواقة غالباً بتاخد حوالي ساعتين لساعتين ونص في كل اتجاه، فاعمل حسابك على بداية بدري جداً ويوم رجوع طويل", options: [ { text: "Asia Someday", url: "https://asiasomeday.com/" }, { text: "India Someday", url: "https://indiasomeday.com/" } ], color: colors.terracotta, map: "https://www.google.com/maps/search/?api=1&query=Udawalawe+National+Park", img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerEacIdmJqg8JsdRw_6bhsCGqb7y4Z0-ljcocOf5mYBmyAWcfcdPrJqj-Q9fMNdNKX4qJdtnFTU6hOzvA3VnkGglAXQEdKUyn2E2_4GnEIPcvXtO7c00eZL7YNoepgnXEdGX-di_w=w800-h800-k-no" }
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
                        {stop.note && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">ملاحظة:</strong> {stop.note}</p>}
                      </div>
                      
                      <div className="flex flex-col gap-3 border-t border-gray-100 pt-5 mt-auto">
                        {stop.options && (
                          <>
                            <span className="font-bold text-[#292926] text-sm">الحجز:</span>
                            {stop.options.map((opt, oIdx) => (
                              <a key={oIdx} href={opt.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-bold text-gray-500 hover:text-[#292926] text-right leading-tight w-fit">
                                <ExternalLink size={14} className="shrink-0"/> {opt.text}
                              </a>
                            ))}
                          </>
                        )}
                        {stop.map && (
                          <button onClick={() => openMap(stop.map)} className="flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 text-right mt-2 w-fit">
                            <MapPin size={16}/> شوف على الخريطة
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="md:w-2/5 lg:w-1/3 shrink-0 flex flex-col bg-gray-50 border-t md:border-t-0 md:border-r border-gray-100">
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

        {/* 12.7.6 Quick notes */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>12.7.6</span> 
            ملاحظات سريعة لويليجاما
          </h3>
          <div className="bg-yellow-50 border border-yellow-100 p-8 rounded-[2rem]">
            <h4 className="text-xl font-extrabold mb-5 flex items-center gap-3" style={{ color: colors.yellow }}>
              <Info size={24} />
              خلي في بالك
            </h4>
            <ul className="space-y-4">
              {[
                { text: "PickMe مش دايماً بيشتغل بسهولة مع التكاتك هنا، فغالباً أحسن توقف واحد في الشارع، تتفق على الأجرة الأول، وتحفظ كام رقم سواق من الفندق بتاعك", label: "المواصلات:" },
                { text: "للمناطق القريبة، توك توك الشارع غالباً بيكون حوالي 500 لـ 1000 روبية، وللمشاوير الأطول العربية ممكن تكلف نفس السعر تقريباً، فالأحسن تحجز عربية على PickMe", label: "ملاحظة العربية:" },
                { text: "منصحش تأجر سكوتر هنا إلا لو إنت سواق واثق جداً من نفسك؛ القوانين للسواقين الأجانب بقت أشد، والطرق دي سريعة ومفيهاش هزار", label: "ملاحظة السكوتر:" },
                { text: "متأكلش أو تلمس السلاحف البرية", label: "ملاحظة السلاحف:" },
                { text: "أنا هفوت رحلة الحيتان هنا. غالية، بتبدأ بدري جداً، وبالنسبة لمسافرين كتير بتحس إنها فخ سياحي عشان فرجة قصيرة جداً ومن بعيد", label: "ملاحظة الحيتان:" }
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

        {/* 12.8 Estimated activity and stay cost */}
        <div className="mb-16 mt-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>12.8</span> 
            التكلفة التقديرية للأنشطة والإقامة
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            ده مرجع تقريبي <strong>للفرد</strong>، بافتراض <strong>شخصين بيشاركوا أوضة لمدة 3 ليالي</strong>، من غير مواصلات بين المدن.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div style={{ backgroundColor: colors.green, boxShadow: customShadow }} className="p-8 rounded-[2rem] text-white flex flex-col transition-transform hover:-translate-y-1">
              <span className="font-bold uppercase tracking-widest text-[14px] text-white/90 mb-4 block">نسخة اقتصادية</span>
              <span className="text-3xl lg:text-4xl font-extrabold mb-6">حوالي 45 لـ 75 دولار<span className="text-sm font-medium text-white/70 block mt-2 tracking-normal normal-case">إجمالي للفرد</span></span>
              <p className="text-sm text-white/90 leading-relaxed mt-auto pt-6 border-t border-white/20">
                <strong>شامل:</strong> إقامة اقتصادية + أكل محلي + أيام بحر ببلاش + حصن جالي
              </p>
            </div>

            <div style={{ backgroundColor: colors.charcoal, boxShadow: customShadow }} className="p-8 rounded-[2rem] text-white flex flex-col transition-transform hover:-translate-y-1">
              <span className="font-bold uppercase tracking-widest text-[14px] text-white/90 mb-4 block">نسخة متوسطة</span>
              <span className="text-3xl lg:text-4xl font-extrabold mb-6">حوالي 65 لـ 110 دولار<span className="text-sm font-medium text-white/70 block mt-2 tracking-normal normal-case">إجمالي للفرد</span></span>
              <p className="text-sm text-white/90 leading-relaxed mt-auto pt-6 border-t border-white/20">
                <strong>شامل:</strong> إقامة اقتصادية + يوم Kai + عشاء أقوى + المعالم الأساسية اللي ببلاش
              </p>
            </div>

            <div className="md:col-span-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-50 border border-gray-100 rounded-[2rem] flex flex-col">
                <span className="font-bold text-[#292926] block mb-2">إضافة بيت عبور الفيلة:</span>
                <span className="text-terracotta-600 font-extrabold">زود حوالي 5 دولار زائد الضريبة<span className="text-xs font-normal text-gray-500 mr-1">/ للبالغ</span></span>
              </div>
              <div className="p-6 bg-gray-50 border border-gray-100 rounded-[2rem] flex flex-col">
                <span className="font-bold text-[#292926] block mb-2">إضافة درس سيرف:</span>
                <span className="text-blue-600 font-extrabold">زود حوالي 12 لـ 25 دولار<span className="text-xs font-normal text-gray-500 mr-1">/ للفرد</span></span>
              </div>
              <div className="p-6 bg-gray-50 border border-gray-100 rounded-[2rem] flex flex-col">
                <span className="font-bold text-[#292926] block mb-2">إضافة سفاري قارب بحيرة كوجالا:</span>
                <span className="text-yellow-600 font-extrabold">زود حوالي 12 لـ 28 دولار<span className="text-xs font-normal text-gray-500 mr-1">/ للفرد</span></span>
              </div>
              <div className="p-6 bg-gray-50 border border-gray-100 rounded-[2rem] flex flex-col">
                <span className="font-bold text-[#292926] block mb-2">إضافة تجديف كاياك بحيرة كوجالا:</span>
                <span className="text-green-600 font-extrabold">زود حوالي 14 لـ 20 دولار<span className="text-xs font-normal text-gray-500 mr-1">حسب النظام</span></span>
              </div>
              <div className="p-6 bg-gray-50 border border-gray-100 rounded-[2rem] flex flex-col">
                <span className="font-bold text-[#292926] block mb-2">إضافة سفاري أوداوالاوي:</span>
                <span className="text-charcoal-600 font-extrabold">زود حوالي 105 لـ 147 دولار<span className="text-xs font-normal text-gray-500 mr-1">/ للفرد</span></span>
              </div>
            </div>
          </div>
        </div>

        {/* 12.9 Last day */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>12.9</span> 
            اليوم الأخير - من ويليجاما للمطار على طول
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            لمعظم المسافرين، أنضف ختام هو إنك تخلي ويليجاما المحطة الأخيرة وتطلع على المطار على طول يوم الطيارة. ده بيخلي المسار بسيط، بيوفر عليك نقلة فندق كمان، وبيخليك تستخدم الساحل الجنوبي صح قبل ما ترجع بلدك.
          </p>

          <h4 className="text-xl font-extrabold mb-8 flex items-center gap-3">
            <Compass size={24} style={{ color: colors.green }} />
            أحسن طريقة تعملها بيها
          </h4>
          <div className="bg-[#FAFAFA] border border-gray-100 rounded-[2.5rem] p-8 md:p-12">
            <ul className="space-y-10 relative before:absolute before:inset-0 before:mr-[11px] md:before:mr-[13px] before:translate-x-px before:h-full before:w-[2px] before:bg-gray-200">
              {[
                { name: "عربية خاصة للمطار الدولي (Bandaranaike) على طول", desc: "أحسن خيار عموماً للمغادرة في نفس اليوم لإنه الأبسط والأقل في الضغط", effort: "سهل جداً / قليل", timing: "غالباً اعمل حسابك على 3 لـ 3.5 ساعات على الطريق مع وقت احتياطي، حتى لو السواقة ممكن تكون أسرع لو الطريق سالك", bookingNote: "اطلب من فندقك في ويليجاما يظبط العربية اليوم اللي قبله، أو احجز توصيلة معروفة مقدماً", bestFor: "مغادرة دولية الصبح، الضهر، أو بالليل لما تكون عايز الخيار الأضمن", color: colors.terracotta },
                { name: "خيار القطر لكولومبو", desc: "الخيار الأرخص", route: "من ويليجاما لمحطة كولومبو فورت بالقطر، وبعدين كمل لمنطقة المطار بتاكسي أو مواصلة مطار", timing: "غالباً حوالي ساعتين ونص لـ 3 ساعات بالقطر، وبعدين حوالي 30 دقيقة لساعة كمان لمنطقة المطار حسب الزحمة", price: "بين 1 لـ 5 دولار", options: [ { text: "بحث جدول قطارات سريلانكا", url: "https://eservices.railway.gov.lk/schedule/searchTrain.action?lang=en" }, { text: "نظام حجز كراسي قطارات سريلانكا", url: "https://seatreservation.railway.gov.lk/" } ], color: colors.green }
              ].map((stop, idx) => (
                <li key={idx} className="relative pr-10 md:pr-14">
                  <div style={{ backgroundColor: stop.color }} className="absolute right-0 top-1.5 w-6 h-6 md:w-7 md:h-7 rounded-full border-4 border-[#FAFAFA] shadow-sm z-10"></div>
                  <div className="bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row overflow-hidden items-stretch">
                    
                    <div className="flex-1 flex flex-col p-6 md:p-8">
                      <h5 className="font-extrabold text-xl md:text-2xl mb-3">{stop.name}</h5>
                      {stop.desc && <p className="text-gray-600 text-lg mb-5">{stop.desc}</p>}
                      
                      <div className="space-y-3 mb-6 flex-grow">
                        {stop.route && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">المسار:</strong> {stop.route}</p>}
                        {stop.effort && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">المجهود:</strong> {stop.effort}</p>}
                        {stop.timing && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">الوقت:</strong> {stop.timing}</p>}
                        {stop.price && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">السعر:</strong> {stop.price}</p>}
                        {stop.bookingNote && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">ملاحظة الحجز:</strong> {stop.bookingNote}</p>}
                        {stop.bestFor && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">أحسن لـ:</strong> {stop.bestFor}</p>}
                      </div>
                      
                      {stop.options && (
                        <div className="flex flex-col gap-3 border-t border-gray-100 pt-5 mt-auto">
                          <span className="font-bold text-[#292926] text-sm">مواقع رسمية:</span>
                          {stop.options.map((opt, oIdx) => (
                            <a key={oIdx} href={opt.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-bold text-gray-500 hover:text-[#292926] text-right leading-tight w-fit">
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
              <span className="block font-black text-[14px] mb-2 uppercase tracking-[0.1em]" style={{ color: colors.yellow }}>نصيحة ذكية</span>
              <p className="text-[#292926] font-medium text-lg m-0">
                خلي الليلة الأخيرة في ويليجاما سهلة. اتعشى قريب من فندقك، حاسب على الأوضة بالليل لو أمكن، ولم شنطك كلها قبل ما تنام عشان صبحية السفر تبقى بسيطة.
              </p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};
       

export default WeligamaPageAr;