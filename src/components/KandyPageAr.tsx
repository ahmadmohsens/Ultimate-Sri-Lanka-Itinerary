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

const KandyPageAr: React.FC<KandyPageProps> = ({ colors, openMap, kandyMapLocations, setCurrentPage, scrollToTop }) => {
  const customShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.03)";

  return (
    <div className="animate-in slide-in-from-right duration-700" dir="rtl">
      
      {/* Chapter Image Banner */}
      <section style={{ boxShadow: customShadow }} className="bg-white border border-gray-50 rounded-[2.5rem] overflow-hidden mb-8">
        <div className="relative h-[450px] w-full">
          <img 
            src="https://images.unsplash.com/photo-1661928684586-eab4463502be?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="منظر مدينة كاندي" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#292926]/90 via-[#292926]/30 to-transparent"></div>
          <div className="absolute bottom-12 right-12 md:bottom-16 md:right-14 text-white">
            <span className="text-[14px] font-bold tracking-[0.4em] uppercase mb-4 block text-white/90">
              الفصل 9
            </span>
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none">
              كاندي
            </h2>
          </div>
        </div>
      </section>

      <section style={{ boxShadow: customShadow }} className="bg-white border border-gray-50 rounded-[2.5rem] overflow-hidden mb-8 p-8 md:p-14">
        
        {/* 9.1 City overview */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>9.1</span> 
            نظرة عامة على المدينة
          </h3>
          <div className="text-lg text-gray-600 leading-relaxed max-w-4xl space-y-4">
            <p>
              كاندي بتعتبر أحسن محطة ثقافية وجبلية في نص الرحلة. استغلها لزيارة المعابد، التمشية حوالين البحيرة، شوية من حياة المدينة، ومحطة ثقافية هادية قبل ما تكمل طريقك.
            </p>
            <p className="font-medium text-[#292926]">
              بالنسبة للرحلة دي، <strong>ليلتين</strong> هو الوقت المناسب. ده بيديك فترة بعد الضهر خفيفة يوم الوصول، ويوم كامل للفسحة من غير ما تحس إن كاندي مزحومة أو مستعجل.
            </p>
          </div>
        </div>

        {/* 9.2 How to get here */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>9.2</span> 
            إزاي توصل هنا
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            لو جاي من كولومبو، كاندي تعتبر من أسهل المحطات اللي جاية في الطريق. القطر هو أحلى خيار لو حجزت بدري، والعربية الخاصة هي أسهل خيار من الباب للباب.
          </p>

          <h4 className="text-xl font-extrabold mb-6">الطرق الأساسية للوصول</h4>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
               <div className="flex items-center gap-3 mb-4">
                 <div className="p-3 rounded-xl shrink-0" style={{ backgroundColor: colors.green + '15', color: colors.green }}>
                   <Train size={24} />
                 </div>
                 <h5 className="font-extrabold text-lg leading-tight">القطر من كولومبو فورت</h5>
               </div>
               <div className="space-y-2 mt-auto">
                 <p className="text-gray-600 m-0 text-sm">غالباً بياخد حوالي <strong className="text-[#292926]">2.5 لـ 3.5 ساعات</strong> وده أحسن اختيار لو عايز الطريق اللي منظره أحلى. الطريق من كولومبو لكاندي جزء من التجربة نفسها، والدرجة الأولى غالباً بتكون بحوالي <strong className="text-[#292926]">4 لـ 5 دولار</strong>.</p>
                 <p className="text-gray-600 m-0 text-sm"><strong className="text-[#292926]">ملاحظة الحجز:</strong> احجز كراسي القطر بدري لو عايز درجة محجوزة أو عربية المشاهدة.</p>
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
                 <h5 className="font-extrabold text-lg leading-tight">عربية خاصة أو تاكسي</h5>
               </div>
               <div className="space-y-2 mt-auto">
                 <p className="text-gray-600 m-0 text-sm">غالباً بياخد حوالي <strong className="text-[#292926]">3.5 لـ 4.5 ساعات</strong>، حسب الزحمة والوقفات.</p>
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
                 <p className="text-gray-600 m-0 text-sm">مفيد لو عايز تقارن الأتوبيسات، الميكروباصات، والمواصلات الخاصة في مكان واحد.</p>
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
            تسكن فين
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            بالنسبة لكاندي، أنا لسه بفضل أركز على فندق مريح بدل ما أعتبرها محطة للهوستلز. الهدف هو إقامة تحسسك بالهدوء والعملية، مع سهولة الوصول للبحيرة، المعبد، وأهم معالم المدينة. دي اختياراتي الشخصية لو هسكن هنا.
          </p>

          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <Map size={24} style={{ color: colors.charcoal }} />
            أحسن مناطق للسكن
          </h4>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { area: "وسط البلد / حوالين بحيرة كاندي", desc: "أسهل حاجة للمشي، زيارات المعبد، المطاعم، والإقامات القصيرة" },
              { area: "طريق البحيرة العلوي / Rajapihilla Mawatha", desc: "أهدى، فيها خضرة أكتر شوية، ولسه قريبة بالتوك توك" },
              { area: "ناحية هانتانا", desc: "إحساس أهدى على التل وأحسن لإقامة راقية، بس المشي فيها أصعب" }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#FAFAFA] border border-gray-100 p-6 rounded-3xl">
                <span className="font-extrabold text-lg block mb-2 text-[#292926]">{item.area}</span>
                <span className="text-gray-600 leading-snug">{item.desc}</span>
              </div>
            ))}
          </div>

          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <BedDouble size={24} style={{ color: colors.green }} />
            ترشيحات فنادق اقتصادية
          </h4>
          <div className="flex flex-col gap-4 mb-10">
            {[
              { name: "فندق Mount Palace", area: "هانتانا", rating: "8.0", price: "$13.50", url: "https://www.booking.com/hotel/lk/mount-palace.html" },
              { name: "فندق Green Citadel / Inside Out Nature Villa", area: "ناحية سيريمالواتا / جونيپانا", rating: "9.4", price: "$16.20", url: "https://www.booking.com/hotel/lk/green-citadel.en-gb.html" },
              { name: "فندق Homestay Garden Rest Kandy", area: "سودومبولا", rating: "8.8", price: "$17", url: "https://www.booking.com/hotel/lk/homestay-garden-rest-kandy.html" },
              { name: "فندق Hanthana Jungle View Holiday Home", area: "هانتانا", rating: "9.1", price: "$17", url: "https://www.booking.com/hotel/lk/hanthana-jungle-view-holiday-home.html" },
              { name: "فندق Nature Walk Resort", area: "قريب من بحيرة كاندي", rating: "8.4", price: "$18", url: "https://www.booking.com/hotel/lk/nature-walk-resort.html" },
              { name: "فندق Haven Upon Hills", area: "ناحية هانتانا / متحف الشاي", rating: "9.4", price: "$19.13", url: "https://www.booking.com/hotel/lk/haven-upon-hills.html" },
              { name: "فندق Mcleod-Inn", area: "وسط البلد", rating: "8.8", price: "$21.32", url: "https://www.booking.com/hotel/lk/mcleod-inn.html" },
              { name: "فندق Queens Mount", area: "ناحية Rajapihilla Mawatha / البحيرة", rating: "8.1", price: "$21.59", url: "https://www.booking.com/hotel/lk/queens-mount.html" },
              { name: "فندق Dream House Residence", area: "ناحية وسط البلد / المتحف", rating: "9.3", price: "$22.50", url: "https://www.booking.com/hotel/lk/dream-house-residence-kandy1.html" },
              { name: "فندق Kandy Living Homestay", area: "ناحية نيتاويلا", rating: "9.4", price: "$25", url: "https://www.booking.com/hotel/lk/kandy-living-villa.html" },
              { name: "فندق Sun Dove Suite", area: "ناحية Keerthi Sri Rajasinghe Mawatha / نقطة المشاهدة", rating: "9.2", price: "$33", url: "https://www.booking.com/hotel/lk/sun-dove-suite.html" }
            ].map((hotel, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between bg-white border border-gray-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow gap-4">
                <div>
                  <span className="font-extrabold text-lg text-[#292926] block sm:inline">{hotel.name}</span>
                  <span className="text-gray-500 text-sm sm:mr-2 block sm:inline">| {hotel.area} | تقييم <strong className="text-amber-600">{hotel.rating}</strong> | حوالي <strong>{hotel.price}</strong> لليلة الواحدة</span>
                </div>
                <a href={hotel.url} target="_blank" rel="noopener noreferrer" className="shrink-0 px-5 py-2 bg-gray-50 hover:bg-gray-100 text-[#292926] text-sm font-bold rounded-xl border border-gray-200 transition-colors flex items-center gap-2 justify-center mt-2 sm:mt-0">
                  بوكينج <ExternalLink size={14}/>
                </a>
              </div>
            ))}
          </div>

          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <Building2 size={24} style={{ color: colors.charcoal }} />
            ترشيحات فنادق متوسطة
          </h4>
          <div className="flex flex-col gap-4 mb-10">
            {[
              { name: "فندق Veraima Kandy", area: "ناحية سيريمالواتا", rating: "9.1", price: "$40.50", url: "https://www.booking.com/hotel/lk/veraima-kandy.html" },
              { name: "فندق Mcleod-Inn", area: "وسط البلد", rating: "8.8", price: "$40.85", url: "https://www.booking.com/hotel/lk/mcleod-inn.html" },
              { name: "فندق Vishwa Retreat Hotel", area: "وسط البلد", rating: "9.2", price: "$42.12", url: "https://www.booking.com/hotel/lk/vishwa-retreat.html" },
              { name: "فندق Hotel Cassendra", area: "ناحية Rajapihilla Mawatha / البحيرة", rating: "8.2", price: "$42.53", url: "https://www.booking.com/hotel/lk/cassendra.html" },
              { name: "فندق Kings Ridge Kandy", area: "ناحية وسط البلد / البحيرة", rating: "8.1", price: "$42.53", url: "https://www.booking.com/hotel/lk/kings-ridge-kandy.html" },
              { name: "فندق Arambhaya Boutique Hotel", area: "أنيواتا", rating: "9.2", price: "$59.56", url: "https://www.booking.com/hotel/lk/arambhaya-boutique.html" },
              { name: "فندق Lotus Lake Residence", area: "ناحية Rajapihilla Mawatha / البحيرة", rating: "8.7", price: "$60.75", url: "https://www.booking.com/hotel/lk/lotus-lake-residence.html" }
            ].map((hotel, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between bg-white border border-gray-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow gap-4">
                <div>
                  <span className="font-extrabold text-lg text-[#292926] block sm:inline">{hotel.name}</span>
                  <span className="text-gray-500 text-sm sm:mr-2 block sm:inline">| {hotel.area} | تقييم <strong className="text-amber-600">{hotel.rating}</strong> | حوالي <strong>{hotel.price}</strong> لليلة الواحدة</span>
                </div>
                <a href={hotel.url} target="_blank" rel="noopener noreferrer" className="shrink-0 px-5 py-2 bg-gray-50 hover:bg-gray-100 text-[#292926] text-sm font-bold rounded-xl border border-gray-200 transition-colors flex items-center gap-2 justify-center mt-2 sm:mt-0">
                  بوكينج <ExternalLink size={14}/>
                </a>
              </div>
            ))}
          </div>

          <div style={{ backgroundColor: colors.beige + '40' }} className="rounded-[2.5rem] p-6 md:p-8 flex gap-5 items-start border border-white">
            <Info size={24} style={{ color: colors.charcoal }} className="shrink-0 mt-0.5" />
            <div>
              <span className="block font-black text-[14px] mb-2 uppercase tracking-[0.1em]" style={{ color: colors.charcoal }}>ملاحظة الحجز</span>
              <p className="text-gray-700 leading-relaxed font-medium m-0 text-lg">
                الأسعار دي ممكن تتغير كتير حسب التواريخ ونوع الأوضة. لو لقيت حاجة عجبتك، احجزها بدري وخلي عندك خيار الإلغاء المجاني لو أمكن.
              </p>
            </div>
          </div>
        </div>

        {/* 9.4 Where and what to eat */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>9.4</span> 
            تاكل فين وإيه
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            كاندي محطة أكل حلوة لميكس بين الوجبات المحلية البسيطة وعشاء واحد راقي شوية.
          </p>

          {/* Budget Places */}
          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <Utensils size={24} style={{ color: colors.green }} />
            أماكن اقتصادية
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { name: "Balaji Dosai", desc: "دوسا نباتي هندي جنوبي ووجبات سريعة قريبة من وسط البلد", price: "حوالي 1.25 لـ 2.50 دولار لأطباق دوسا كتير", icon: Soup, bgColor: colors.yellow, map: "Balaji Dosai Kandy" },
              { name: "MANDIYA", desc: "أرز وكاري سريلانكي وأطباق محلية بيتي في وسط البلد؛ أحسن حاجة تروح قبل الساعة 4 العصر", price: "حوالي 2 لـ 3 دولار للفرد", icon: Utensils, bgColor: colors.terracotta, map: "MANDIYA Kandy" },
              { name: "Hela Bojun Hala", desc: "مكان محلي جداً للسناكس والفطار بتديره ستات؛ أحسن حاجة لوقفة محلية سريعة ورخيصة", price: "حوالي 1 دولار للفرد", icon: Flame, bgColor: colors.charcoal, map: "Ahalepola Kumarihami Mawatha, Kandy 20000, Sri Lanka" },
              { name: "Devon Restaurant", desc: "مكان محلي كلاسيكي في شارع Sri Dalada Veediya بجو محلي جداً", price: "حوالي 3 لـ 6 دولار للفرد", icon: Utensils, bgColor: colors.green, map: "No.11 Sri Dalada Veediya, Kandy 20000, Sri Lanka" },
              { name: "The Trees Cafe", desc: "أحسن حاجة للفطار والمناظر، مع قهوة، معجنات، وأطباق كافيه خفيفة", price: "حوالي 2.50 لـ 5 دولار للفرد", icon: Coffee, bgColor: colors.yellow, map: "The Trees Cafe Kandy" }
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

          {/* Mid Range */}
          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <Coffee size={24} style={{ color: colors.charcoal }} />
            أماكن متوسطة وأماكن قعدة حلوة
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { name: "Vito Wood Fired Pizza", desc: "واحد من أقوى اختيارات العشاء الكاجوال في كاندي للبيتزا والمكرونة اللي بتتعمل على الحطب", price: "حوالي 4 لـ 10 دولار للطبق", icon: Flame, bgColor: colors.terracotta, map: "Vito Wood Fired Pizza Kandy" },
              { name: "Los Amigos Locos", desc: "أكل مكسيكي مع بوريتو، تاكوز، وإحساس عشاء كاجوال بره وسط البلد", price: "حوالي 5.50 لـ 7 دولار للطبق", icon: Flame, bgColor: colors.charcoal, map: "Los Amigos Locos Kandy" },
              { name: "Timber Cabin by Rivora", desc: "مطعم على التل بمنظر حلو وقعدة عشاء أشيك شوية", price: "حوالي 9 لـ 12+ دولار للفرد", icon: Utensils, bgColor: colors.yellow, map: "Timber Cabin by Rivora Kandy" },
              { name: "Hideout Lounge", desc: "مكان شيك على البحيرة للكوكتيلات، البرانش، وأطباق رئيسية مودرن أكتر", price: "حوالي 7 لـ 14+ دولار للفرد", icon: Coffee, bgColor: colors.green, map: "Hideout Lounge Kandy" },
              { name: "Soul Food", desc: "كافيه نباتي بيقدم بولز، راب، واختيارات غداء أو عشاء صحية أكتر", price: "حوالي 5 لـ 8.50 دولار للطبق", icon: Leaf, bgColor: colors.charcoal, map: "Soul Food Kandy" },
              { name: "Organica Lounge Kandy", desc: "مكان على الروف مناسب للنباتيين بمنظر حلو واختيارات برانش أو عشاء صحية أكتر", price: "حوالي 6 لـ 8 دولار للفرد", icon: Leaf, bgColor: colors.terracotta, map: "Organica Lounge Kandy" },
              { name: "Slightly Chilled Lounge", desc: "مكان على الروف وقت الغروب للمشروبات، أكل صيني وعالمي، وسهرة اجتماعية أكتر", price: "حوالي 6 لـ 12+ دولار للفرد، المشروبات بره الحسبة", icon: Coffee, bgColor: colors.yellow, map: "Slightly Chilled Lounge, Sports Bar & Restaurant Kandy" }
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

          {/* High End */}
          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <Star size={24} style={{ color: colors.terracotta }} />
            مطاعم راقية ولمناسبات خاصة
          </h4>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { name: "Theva Cuisine", desc: "أكل سريلانكي وعالمي راقي مع منظر التلال", price: "حوالي 11 لـ 16+ دولار لأطباق رئيسية كتير", icon: Star, bgColor: colors.yellow, map: "Theva Cuisine Kandy" }
            ].map((place, idx) => (
              <div key={idx} className="bg-white border border-gray-100 rounded-[1.5rem] flex flex-col sm:flex-row overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 sm:h-auto sm:w-2/5 relative shrink-0 flex items-center justify-center" style={{ backgroundColor: place.bgColor }}>
                  <place.icon size={64} color="white" className="opacity-50" />
                </div>
                <div className="p-6 flex flex-col grow justify-center">
                  <h5 className="text-[#292926] font-extrabold text-xl mb-2">{place.name}</h5>
                  <p className="text-gray-600 text-sm mb-4">{place.desc}</p>
                  <div className="flex flex-col gap-3">
                    <span className="text-terracotta-700 font-bold text-sm bg-orange-50 px-3 py-1.5 rounded-lg border border-orange-100 w-fit">{place.price}</span>
                    <button onClick={() => openMap(place.map)} className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors text-right w-fit">
                      <MapPin size={16}/> شوف على الخريطة
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
              اليوم الأول - يوم الوصول
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
              خلي اليوم الأول في وسط البلد وخفيف عشان ما تضغطش نفسك بعد التوصيلة من كولومبو. ممكن تمشي في المحطات المركزية اللي على البحيرة وتستخدم التوك توك للمشاوير القصيرة لو احتجت. أنضف خطة لأول مساء في كاندي هي <strong>بحيرة كاندي ← لفة بمركب خاص (اختياري) ← نقطة مشاهدة كاندي ← معبد السن المقدس ← عرض كاندي الثقافي</strong>.
            </p>

            <h4 className="text-xl font-extrabold mb-8 flex items-center gap-3">
              <Compass size={24} style={{ color: colors.green }} />
              ترشيح
            </h4>
            <div className="bg-[#FAFAFA] border border-gray-100 rounded-[2.5rem] p-8 md:p-12">
              <ul className="space-y-10 relative before:absolute before:inset-0 before:mr-[11px] md:before:mr-[13px] before:translate-x-px before:h-full before:w-[2px] before:bg-gray-200">
                {[
                  { name: "بحيرة كاندي", desc: "أسهل مشية في المدينة في الأول وطريقة حلوة عشان تريح قبل ما يبدأ المساء", effort: "سهل جداً / قليل", price: "ببلاش", note: "أحسن وقت في أواخر فترة بعد الضهر لما النور يهدى ووسط البلد يكون أهدى", color: colors.yellow, map: "Kandy Lake", img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerM_oRhziCoVm-VcQiMh5N30fQESpooORErNgphoVQZ1T2mTQCp2Ni2zkWyHSFEQVoGnC0TCT6o-_5rIQuTfHnAchU5NFSJMTFpb11unZPg5-v3SPrVsYC9KmM19_7Xsl23zcw=w800-h800-k-no" },
                  { name: "اختياري: لفة بمركب خاص في بحيرة كاندي", desc: "إضافة خفيفة لو عايز منظر أهدى للمدينة من الماية", effort: "سهل جداً / قليل", price: "حوالي 8 لـ 14 دولار لـ 30 لـ 45 دقيقة", color: colors.charcoal, map: "Joy Boat Kandy", img: "https://scontent.fbah1-1.fna.fbcdn.net/v/t1.6435-9/150397806_3916577501769602_7901222006711137566_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_ohc=xkRCr5fn7zgQ7kNvwEXFrFH&_nc_oc=AdplOZGL7e-UWLaH9vUsfWiyyT5RIQnKakJOBtDOTETESmoBuRvDmjjDUOA7SwNhEkDTTRfeEZGNY9f8GFaOzeCh&_nc_zt=23&_nc_ht=scontent.fbah1-1.fna&_nc_gid=ZcjdwJa5_Mwi9oBvfB-IvQ&_nc_ss=7a389&oh=00_Af09-aXi9yBjm9QbI6-svIoVq5eMeqiih7QS_UFHK8nk2g&oe=69FDD90A" },
                  { name: "نقطة مشاهدة كاندي", desc: "إضافة سريعة قريب من ناحية البحيرة لو عايز المنظر الكلاسيكي العالي للمدينة", effort: "سهل / قليل", price: "ببلاش", note: "أسهل وقت أواخر فترة بعد الضهر أو قريب من الغروب؛ مناسبة جداً بعد محطات منطقة البحيرة", color: colors.terracotta, map: "Kandy View Point", img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep7FgROyIfyj121fTDxnvmxgMQyktmFE9wjNRaSPqvMxMpQO3CWo9xSoRuTGWQ5yQ578-HZqs0w6CEpTUDyp6d6womoZTHiK4MEKgjWxI8xQbTPFdS6vkiJI_vVWxOC2xHbr1l74Q=w800-h800-k-no" },
                  { name: "معبد السن المقدس", desc: "أهم محطة ثقافية في كاندي وأحسن وقت تزوره قبل ما المساء يزحم", effort: "سهل / قليل", price: "حوالي 6.35 دولار للفرد", note: "البس لبس محتشم، اقلع جزمتك، واعمل حسابك على زحمة", color: colors.green, map: "Temple of the Sacred Tooth Relic Kandy", img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepS-qvNqXFosWIYgARbxpUg1HowTZNi87hIOnASZ8CLgxz5AW-yM60briBCK-dgtypmedhbBen5eQHqeIwIEvVS7Vc4G4oLrf8xpc8gQXRY-IXUrNxVPgw065TxsbsxXt67ulQr=w800-h800-k-no" },
                  { name: "عرض نادي بحيرة كاندي الثقافي", desc: "أسهل محطة مسائية لو عايز طبل ورقص من غير ما تقلب اليوم لفسحة كاملة متعبة", effort: "سهل جداً / قليل", price: "حوالي 9 لـ 11 دولار للفرد", note: "العرض الرسمي شغال كل يوم من 5 لـ 6 مساءً (اتأكد من المواعيد)", color: colors.terracotta, map: "Kandy Lake Club Cultural Show", img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqNpfVoqPJFZQmiPz4Il4HxmdOPFOpFYbA4k1bDUvSSElvaShNAxYSZRxwRBNa3ASTLSvJu-2o3smeRK4d1_OCWgCVgLPu9sF_FQKrb4JEZIFMTG0UfWnokIUdm2ZfGzwCUL8l2_4YG_Ez-=w800-h800-k-no" },
                  { name: "اختياري: برج أمبولوواوا", desc: "الإضافة الدرامية بره كاندي لو وصلت بدري وعايز محطة مشاهدة أكبر بدل ما تخلي اليوم كله في وسط البلد", effort: "متوسط / سلالم ومرتفعات", price: "حوالي 8.75 دولار للبالغين الأجانب", note: "أحسن وقت في يوم صافي؛ السلم بيضيق قريب من القمة، فبلاش لو بتخاف من المرتفعات", color: colors.charcoal, map: "Ambuluwawa Tower", img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoZ-abOGq-mYKExyrJRph1BxenVt28YsAbw7m2RLuf8EHjFPVwUsyZzV2mIKQ1QzpuOauI5G7VWrKD3vqa2x1JZnJbStdq-rjPvtOpS2AaiLj3C8NsJ7EtHBammGwxeGmVJj3EZCiRY0aM=w800-h800-k-no" }
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
              اليوم التاني - استكشاف كاندي
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
              ده يوم كاندي الأطول وأنا هبدأ بالحدائق ومحطات الشاي بره وسط البلد، وبعدين أخلص في المدينة تاني. التوك توك شغال كويس جداً في المسار ده وهو أسهل طريقة تتحرك بيها بين المحطات من غير ما تفكر كتير في اللوجستيات.
            </p>

            <h4 className="text-xl font-extrabold mb-8 flex items-center gap-3">
              <Compass size={24} style={{ color: colors.green }} />
              أحسن طريقة تعملها بيها
            </h4>
            <div className="bg-[#FAFAFA] border border-gray-100 rounded-[2.5rem] p-8 md:p-12">
              <ul className="space-y-10 relative before:absolute before:inset-0 before:mr-[11px] md:before:mr-[13px] before:translate-x-px before:h-full before:w-[2px] before:bg-gray-200">
                {[
                  { name: "الحدائق النباتية الملكية", desc: "أحسن محطة خضراء لنص يوم قريب من كاندي وأسهل طريقة تهدي بيها الرتم شوية", effort: "سهل / قليل", price: "حوالي 9.50 دولار للبالغين الأجانب", note: "بتفتح رسمياً من 7:30 الصبح لـ 6 بالليل وأحسن وقت بدري لو عايز جو ألطف", color: colors.green, map: "Royal Botanic Gardens Peradeniya", img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepSiG_ZHde95BT6ly5OU0K3FxDjuW1V9lusCnwfWayTmTByslAo3teyseAc598n60d90PM84ofL7AB9J8STOCRPOxJcSG5lDondzAG91OrY8TBeOVOEAe-Pm5gtcxF9sm_Yng1T62sgUGn3=w800-h800-k-no" },
                  { name: "متحف شاي سيلان", desc: "أهم محطة لتاريخ الشاي في منطقة كاندي والاختيار الأحسن لو عايز زيارة واحدة مركزة على الشاي من غير ما تعمل يوم كامل في مزرعة", effort: "سهل / قليل", price: "حوالي 3.20 دولار للبالغين الأجانب", note: "غالباً قافل يوم الإثنين؛ أسهل حاجة توصله بالتوك توك من وسط كاندي", color: colors.terracotta, map: "Ceylon Tea Museum Kandy", img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqo2g6IsDSUbzzuFygnSKksykfGpTzfc29jXEGr6WfLgyY6DMOZL85Pe1JoQwXIZphlRFDIeHIyKj70FoiexEDR4kz3EsBD3rH63anXKs4f3Y3hTYfr26yStKTS6nXU6jhZU_r5oXKU46j_=w800-h800-k-no" },
                  { name: "تمثال بوذا Bahirawakanda Vihara / Sri Maha Bodhi Viharaya", desc: "محطة مشاهدة سريعة بواحد من أحسن مناظر المدينة لكاندي", effort: "سهل / قليل", price: "حوالي 1 دولار للفرد", note: "أسهل حاجة بالتوك توك؛ البس محتشم لأنه لسه مكان ديني", color: colors.yellow, map: "Bahirawakanda Vihara Buddha Statue Kandy", img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoLPJTAtqi5G5u0kcn-DWkbeHy3cro5RNI789kXu-kTmkQcLCZBkx0iLy_QdBhHSBqlnPeYBu141rVM3DvWxI4dtXU1dAIHayS0u8fYBNp9U8_ctzqCmGKfcVZIg2hqFsbu1nD8O0153CbR=w800-h800-k-no" },
                  { name: "سوق كاندي", desc: "متاهة من الأكشاك والممرات فيها قماش، هدايا تذكارية، إلكترونيات، نظارات شمس، مجوهرات، وفرجة عامة على السوق.", effort: "سهل جداً / قليل", price: "ببلاش", note: "خليها قصيرة وعملية؛ بتنفع أكتر كتمشية سريعة مش محطة أساسية", color: colors.charcoal, map: "Kandy Market Hall", img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoBv6zbbv-8w2dQkzl84Rk7NEIS5f2zM2gtU7imkTPQgszdxGEaAYwMuHXL9W9miSz2_XywPEBEGBvN3sg_aH2m9Wf341Ut-HWIo3m4CK5iw4EDykRD6eyqBa7iMZ-o5FKmNfAxK9XkwKY=w800-h800-k-no" }
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
              ملاحظات سريعة لكاندي
            </h3>
            <div className="bg-yellow-50 border border-yellow-100 p-8 rounded-[2rem]">
              <h4 className="text-xl font-extrabold mb-5 flex items-center gap-3" style={{ color: colors.yellow }}>
                <Info size={24} />
                خلي بالك
              </h4>
              <ul className="space-y-4">
                {[
                  { text: "امشي في وسط كاندي لما تقدر، وبعدين استخدم التوك توك للتلال، نقط المشاهدة، وزيارات الحدائق", label: "المواصلات المرشحة:" },
                  { text: "معبد السن المقدس ممكن يكون زحمة، فمهم يكون عندك شوية صبر", label: "ملاحظة الزحمة:" },
                  { text: "الغيوم، الشبورة، والمطر ممكن يغيروا جو كاندي بسرعة، فخلي نقط المشاهدة مرنة شوية", label: "ملاحظة نقط المشاهدة:" },
                  { text: "البس محتشم للأماكن الدينية، وغطي كتافك وركبك", label: "قواعد اللبس:" }
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
        title="أجمل رحلة قطر في العالم"
        description="المحطة الجاية: إيلا. استعد لقطر إيلا الشهير، الجبال اللي وسط السحاب، وجسر الأقواس التسعة."
        nextPage="ella"
        buttonText="استكشف إيلا"
        setCurrentPage={setCurrentPage}
        scrollToTop={scrollToTop}
        colors={colors}
        isAr={true}
      />
    </div>
  );
};

export default KandyPageAr;
