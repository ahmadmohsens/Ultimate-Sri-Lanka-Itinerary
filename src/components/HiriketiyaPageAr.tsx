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

interface HiriketiyaPageArProps {
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

const HiriketiyaPageAr: React.FC<HiriketiyaPageArProps> = ({ colors, openMap, hiriketiyaMapLocations }) => {
  const customShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.03)";

  return (
    <div className="animate-in slide-in-from-right duration-700" dir="rtl">

      {/* Chapter Image Banner */}
      <section style={{ boxShadow: customShadow }} className="bg-white border border-gray-50 rounded-[2.5rem] overflow-hidden mb-8">
        <div className="relative h-[450px] w-full">
          <img
            src="https://kimasurfsrilanka.com/wp-content/uploads/2021/12/Kima-Surf-Camp-Hiriketiya-Header.jpg"
            alt="شاطئ هيريكيتيا والنخل"
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#292926]/90 via-[#292926]/30 to-transparent"></div>
          <div className="absolute bottom-12 right-12 md:bottom-16 md:right-14 text-white">
            <span className="text-[14px] font-bold tracking-[0.4em] uppercase mb-8 block text-white/90">
              الفصل ١١
            </span>
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none">
              شاطئ هيريكيتيا
            </h2>
          </div>
        </div>
      </section>

      <section style={{ boxShadow: customShadow }} className="bg-white border border-gray-50 rounded-[2.5rem] overflow-hidden mb-8 p-8 md:p-14">

        {/* 11.1 City overview */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>11.1</span>
            نظرة عامة على المدينة
          </h3>
          <div className="text-lg text-gray-600 leading-relaxed max-w-4xl space-y-4">
            <p>
              المحطة دي معمول حسابها في <strong>مسار الـ 14 يوم</strong>؛ فوتها لو إنت بتعمل <strong>مسار الـ 10 أيام</strong>.
            </p>
            <p>
              هيريكيتيا لسه هي المكان اللي بهدي فيه رتم الرحلة بعد محطات الأنشطة الكبيرة. ده المكان اللي بخلي فيه الرحلة تريح شوية وننقل على جو البحر، ركوب الأمواج، الصبح الهادي، الكافيهات، وإننا نعمل حاجات أقل. مش هخطط للمكان ده إنه يكون بتاع رحلات كبيرة أو أيام كلها حركة؛ هو بيشتغل أحسن بكتير كفاصل خفيف قبل المحطة اللي بعدها.
            </p>
            <p className="font-medium text-[#292926]">
              للمسار ده، هيريكيتيا لسه مريحة جداً في <strong>ليلتين</strong>. ممكن أطولها لـ <strong>3 ليالي</strong> بس لو عايز تزود يوجا، كلاس طبخ، أو كام خروجة قريبة من غير ما تخلي المحطة دي زحمة.
            </p>
          </div>
        </div>

        {/* 11.2 How to get here */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>11.2</span>
            توصل هنا إزاي
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            وإنت جاي من إيلا، أنا لسه هتعامل مع هيريكيتيا على إنها توصيلة سهلة ونازلة للساحل الجنوبي. أبسط طريقة هي عربية خاصة لحد فندقك على طول، خصوصاً لإن <strong>مفيش قطارات مباشرة</strong> من إيلا لهيريكيتيا. وده برضه أحسن اختيار لو عايز تقف عند بيت عبور الفيلة (Elephant Transit Home) في السكة، واللي هشرحه بالتفصيل في خطة اليوم بيومه تحت.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            في كمان اختيار توصيلة من <strong>12Go</strong> لو عايز حاجة محجوزة من قبلها من غير ما ترتبها عن طريق فندقك.
          </p>

          <h4 className="text-xl font-extrabold mb-6">أهم طرق الوصول</h4>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
               <div className="flex items-center gap-3 mb-4">
                 <div className="p-3 rounded-xl shrink-0" style={{ backgroundColor: colors.terracotta + '15', color: colors.terracotta }}>
                   <Car size={24} />
                 </div>
                 <h5 className="font-extrabold text-lg leading-tight">عربية خاصة أو تاكسي طول الطريق</h5>
               </div>
               <div className="space-y-3 mt-auto">
                 <p className="text-gray-600 m-0 text-sm">غالباً حوالي <strong className="text-[#292926]">50 لـ 75 دولار</strong> للعربية وحوالي <strong className="text-[#292926]">ساعتين ونص لـ 3 ساعات ونص</strong> حسب الطريق والوقفات.</p>
                 <p className="text-gray-600 m-0 text-sm"><strong className="text-[#292926]">نصيحة عملية:</strong> أحسن حاجة ترتبها مع فندقك في إيلا من بدري.</p>
                 <p className="text-gray-600 m-0 text-sm"><strong className="text-[#292926]">لو معاك سواق أصلاً:</strong> كمل معاه طول الطريق بالعربية لهيريكيتيا وفكك من تخطيط المواصلات الزيادة.</p>
               </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
               <div className="flex items-center gap-3 mb-4">
                 <div className="p-3 rounded-xl shrink-0" style={{ backgroundColor: colors.charcoal + '15', color: colors.charcoal }}>
                   <Globe size={24} />
                 </div>
                 <h5 className="font-extrabold text-lg leading-tight">اختيار توصيلة 12Go</h5>
               </div>
               <div className="space-y-3 mt-auto">
                 <p className="text-gray-600 m-0 text-sm">حل وسط مفيد لو عايز حاجة محجوزة أونلاين من قبلها.</p>
                 <p className="text-gray-600 m-0 text-sm"><strong className="text-[#292926]">ملاحظة:</strong> ده أحسن للقراء اللي عايزين اختيار حجز سهل بدل ما يظبطوها هناك.</p>
                 <p className="text-gray-600 m-0 text-sm"><strong className="text-[#292926]">نصيحة عملية:</strong> أنا برضه هتأكد من نقطة الركوب والنزول قبل ما أحجز، لإن التوصيلات دي بتستخدم أماكن ثابتة.</p>
                 <div className="mt-4 pt-4 border-t border-gray-100">
                    <a href="https://12go.asia/" target="_blank" rel="noopener noreferrer" className="text-sm font-bold flex items-center gap-1.5 hover:opacity-70 transition-opacity" style={{ color: colors.charcoal }}>
                      الموقع: 12Go لخيارات الحجز والمواصلات <ExternalLink size={14} />
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
            تبات فين
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            في هيريكيتيا، أنا لسه هفضل أبات في مكان على مسافة مشي من الخليج بدل ما أدور على حاجة عالية أوي على التل أو معزولة بزيادة. المحطة دي بتشتغل أحسن لما يكون البحر، الكافيهات، ومشاوير التوك توك القصيرة كلها سهلة.
          </p>

          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <BedDouble size={24} style={{ color: colors.green }} />
            ترشيحات الفنادق بالترتيب حسب السعر
          </h4>
          <div className="flex flex-col gap-4 mb-10">
            {[
              { name: "Abinu’s Place", rating: "8.7", price: "23 دولار", highlight: "إقامة على البحر مع جنينة، تراس، وواي فاي ببلاش", url: "https://www.booking.com/hotel/lk/abinu-quot-s-place.html" },
              { name: "Kawshan Home Stay", rating: "9.1", price: "24 دولار", highlight: "وصول للبحر، جنينة خضراء، تراس واسع", url: "https://www.booking.com/hotel/lk/kawshan-home-stay.html" },
              { name: "Sea Wawes Hiriketiya", rating: "9.2", price: "27 دولار", highlight: "متجدد قريب، أوض واسعة، بلكونة، مشية قصيرة للبحر", url: "https://www.booking.com/hotel/lk/sea-wawes-hiriketiya.html" },
              { name: "Mount Top", rating: "9.3", price: "29 دولار", highlight: "مكان على البحر، مناظر للبحر، موقع ممتاز بين هيريكيتيا وديكويلا", url: "https://www.booking.com/hotel/lk/mount-top-dikwella.html" },
              { name: "Gold Ocean House", rating: "8.3", price: "31 دولار", highlight: "إقامة على البحر، مطبخ مشترك", url: "https://www.booking.com/hotel/lk/gold-ocean-house.html" },
              { name: "White Lion Paradise Dikwella", rating: "9.1", price: "34 دولار", highlight: "على البحر على طول، منطقة شاطئ خاصة، تراس وركنة ببلاش", url: "https://www.booking.com/hotel/lk/white-lion-paradise.html" },
              { name: "The Nest - Near Hiriketiya Beach", rating: "9.8", price: "36 دولار", highlight: "إقامة في الناحية الأهدى، نظام فيلا، ركنة ببلاش", url: "https://www.booking.com/hotel/lk/the-nest-dikwella.html" },
              { name: "Jungle Escape Hiriketiya", rating: "9.0", price: "47 دولار", highlight: "مكان هادي في جنينة، قاعدة أهدى بره أكتر حتة زحمة في الخليج", url: "https://www.booking.com/hotel/lk/jungle-escape-hiriketiya.html" },
              { name: "The Yard Hiriketiya", rating: "9.1", price: "60 دولار", highlight: "أوض شيك، على بعد مشية قصيرة من شاطئ هيريكيتيا", url: "https://www.booking.com/hotel/lk/the-yard-hiriketiya.html" },
              { name: "Villa Hiriketiya", rating: "8.3", price: "60 دولار", highlight: "حمام سباحة في المكان، وصول سهل للبحر", url: "https://www.booking.com/hotel/lk/villa-hiriketiya.html" }
            ].map((hotel, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between bg-white border border-gray-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow gap-4">
                <div>
                  <span className="font-extrabold text-lg text-[#292926] block sm:inline">{hotel.name}</span>
                  <span className="text-gray-500 text-sm sm:mr-2 block sm:inline">| التقييم <strong className="text-amber-600">{hotel.rating}</strong> | حوالي <strong>{hotel.price}</strong> لليلة واحدة</span>
                  {hotel.highlight && <p className="text-sm text-gray-500 mt-1 mb-0 italic"><strong>أهم المميزات:</strong> {hotel.highlight}</p>}
                </div>
                <a href={hotel.url} target="_blank" rel="noopener noreferrer" className="shrink-0 px-5 py-2 bg-gray-50 hover:bg-gray-100 text-[#292926] text-sm font-bold rounded-xl border border-gray-200 transition-colors flex items-center gap-2 justify-center mt-2 sm:mt-0">
                  احجز <ExternalLink size={14}/>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* 11.4 Where and what to eat */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>11.4</span>
            تاكل فين وإيه
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            هيريكيتيا فيها ميكس بين أماكن الأرز والكاري المحلية الرخيصة، كافيهات البرانش، أماكن الغداء اللي على البحر، وكام مكان عشاء أشيك شوية.
          </p>

          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <Utensils size={24} style={{ color: colors.green }} />
            ترشيحات المطاعم والكافيهات
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { name: "Lemon Grass Café", desc: "من أحسن أماكن الأكل المحلي كقيمة مقابل سعر في هيريكيتيا للأرز والكاري وغداء سريلانكي سهل", try: "أرز وكاري نباتي، هوبرز، روتي جوز الهند", price: "3 لـ 5 دولار للفرد", icon: Leaf, bgColor: colors.green, map: "https://www.google.com/maps/search/?api=1&query=Lemon+Grass+Cafe+Hiriketiya" },
              { name: "Kingsley’s Kitchen", desc: "اختيار محلي رخيص للأرز والكاري اللي بطعم البيت", try: "أرز وكاري نباتي، حلويات", price: "2 لـ 4 دولار للفرد", icon: Soup, bgColor: colors.terracotta, keepInMind: "العشاء بالحجز المسبق بس", map: "https://www.google.com/maps/search/?api=1&query=Kingsleys+Kitchen+Hiriketiya" },
              { name: "Duni’s Hoppers", desc: "من أكتر أماكن الفطار اللي الناس بترشحها في هيريكيتيا للهوبرز، السموثي بولز، والقهوة", try: "هوبرز مسكر أو حادق، سموثي بولز، قهوة", price: "4 لـ 9 دولار للفرد", icon: Coffee, bgColor: colors.yellow, map: "https://www.google.com/maps/search/?api=1&query=Dunis+Hoppers+Hiriketiya" },
              { name: "Locos Cafe", desc: "كافيه حلو قبل أو بعد ركوب الأمواج للإسبريسو، البرانش، والمخبوزات", try: "قهوة، كرواسون باللوز، فطار مشروم وأفوكادو", price: "7 لـ 10 دولار للفرد", icon: Coffee, bgColor: colors.charcoal, map: "https://www.google.com/maps/search/?api=1&query=Locos+Cafe+Hiriketiya" },
              { name: "Bahia", desc: "مكان برانش أشيك لو عايز حاجة أرقى شوية من كافيهات مدن السيرف العادية", try: "تاكو الفطار، بيض بينديكت بالروستي، قهوة", price: "6 لـ 12 دولار للفرد", icon: Utensils, bgColor: colors.yellow, map: "https://www.google.com/maps/search/?api=1&query=Bahia+Hiriketiya" },
              { name: "Malu Poke", desc: "من أحسن أماكن الغداء بعد السيرف للبولز الصحية على البحر على طول", try: "بوكي بولز، سموثي بولز، جوز هند ساقع", price: "5 لـ 10 دولار للفرد", icon: Fish, bgColor: colors.green, map: "https://www.google.com/maps/search/?api=1&query=Malu+Poke+Hiriketiya" },
              { name: "MOND", desc: "من أقوى ترشيحات الكافيهات للقهوة، فطار رايق، وقعدة على اللابتوب شوية", try: "بان كيك بيني بول، كاري سمك بجوز الهند، فلات وايت، سيرينديبتي", price: "6 لـ 12 دولار للفرد", icon: Coffee, bgColor: colors.charcoal, map: "https://www.google.com/maps/search/?api=1&query=MOND+Hiriketiya" },
              { name: "Crust & Crumble", desc: "كافيه جديد بنظام مخبز للقهوة المختصة، الكرواسون، والمخبوزات", try: "كرواسون، مخبوزات الساور دو، قهوة مختصة", price: "4 لـ 10 دولار للفرد", icon: Flame, bgColor: colors.terracotta, map: "https://www.google.com/maps/search/?api=1&query=Crust+and+Crumble+Hiriketiya" },
              { name: "Garlic Cafe", desc: "مكان اقتصادي مضمون للأكل المحلي من غير تفكير كتير", try: "كوتو روتي، أرز وكاري", price: "3 لـ 6 دولار للفرد", icon: Utensils, bgColor: colors.green, map: "https://www.google.com/maps/search/?api=1&query=Garlic+Cafe+Hiriketiya" },
              { name: "Betaz Hiriketiya", desc: "اختيار غداء أو عشاء حلو مع مناظر للبحر وإحساس أشيك شوية", try: "كاري جمبري، كاري خضار", price: "6 لـ 15 دولار للفرد", icon: Fish, bgColor: colors.yellow, map: "https://www.google.com/maps/search/?api=1&query=Betaz+Hiriketiya" },
              { name: "Smoke & Bitters", desc: "مكان العشاء اللي لسه برشحه بقوة لو عايز وجبة واحدة تصرف فيها براحتك في هيريكيتيا", try: "كاليماري كورومبا، كاري سي فود كالو بول، ريش خنزير، كوكتيلات", price: "8 لـ 20 دولار للفرد", icon: Flame, bgColor: colors.terracotta, map: "https://www.google.com/maps/search/?api=1&query=Smoke+and+Bitters+Hiriketiya" },
              { name: "RAA", desc: "من أقوى اختيارات العشاء المميز للأكل السريلانكي اللي معمول بطريقة أرقى", try: "سي فود، كاري جاك فروت، كوكتيلات بمكونات محلية", price: "12 لـ 25 دولار للفرد", icon: Star, bgColor: colors.charcoal, keepInMind: "احجز من بدري لو عايز ترابيزة وقت الغروب", map: "https://www.google.com/maps/search/?api=1&query=RAA+Hiriketiya" },
              { name: "Crab Hiriketiya", desc: "مكان مركز على السي فود لو عايز كابوريا أو سمك محلي طازة من غير ما تعقد العشاء", try: "أطباق الكابوريا، سي فود طازة", price: "8 لـ 18 دولار للفرد", icon: Fish, bgColor: colors.terracotta, map: "https://www.google.com/maps/search/?api=1&query=Crab+Hiriketiya" }
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
                    {place.try && <span className="text-sm text-gray-500"><strong>جرب:</strong> {place.try}</span>}
                    {place.keepInMind && <span className="text-xs text-gray-500 italic"><strong>خلي بالك:</strong> {place.keepInMind}</span>}
                    <span className="text-[#292926] font-bold text-sm bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100 w-fit">السعر: {place.price}</span>
                    <button onClick={() => openMap(place.map)} className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors text-right w-fit">
                      <MapPin size={16}/> شوف على الخريطة
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Free Beaches Picks */}
          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <Waves size={24} style={{ color: colors.charcoal }} />
            ترشيحات الشواطئ المجانية
          </h4>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: "شاطئ ديكويلا", desc: "أسهل شاطئ قريب لمساحة رملة أوسع، مناظر غروب أحسن، وعوم أهدى من خليج هيريكيتيا", map: "https://www.google.com/maps/search/?api=1&query=Dikwella+Beach" },
              { name: "شاطئ نيلويلا / جزيرة الشاطئ الأزرق", desc: "أحسن إضافة قريبة عشان الشريط الرملي، الصور، وتمشية وقت الجزر للجزيرة", map: "https://www.google.com/maps/search/?api=1&query=Blue+Beach+Island+Nilwella" },
              { name: "شاطئ كوداويلا", desc: "أحسن كمحطة ساحلية محلية سريعة قريبة من هومانايا بدل ما تقضي يوم كامل على البحر، بس يستاهل تعرفه لو إنت بتستكشف الناحية دي أصلاً", map: "https://www.google.com/maps/search/?api=1&query=Kudawella+Beach" },
              { name: "شاطئ أوناكوروا", desc: "خليج أهدى شرق هيريكيتيا بينفع جداً لو عايز تهرب من الزحمة الأساسية بتاعت هيري", map: "https://www.google.com/maps/search/?api=1&query=Unakuruwa+Beach" },
              { name: "جزيرة الشاطئ الأزرق، نيلويلا", desc: "أحسن إضافة شاطئ وقت الجزر قريبة من هيريكيتيا عشان تمشية الشريط الرملي، الصور، ورحلة جانبية سريعة", map: "https://www.google.com/maps/search/?api=1&query=Blue+Beach+Island+Nilwella" }
            ].map((beach, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between bg-[#FAFAFA] border border-gray-100 p-5 rounded-2xl shadow-sm gap-4">
                <div>
                  <span className="font-extrabold text-lg text-[#292926] block">{beach.name}</span>
                  <span className="text-gray-600 text-sm leading-snug block mt-1">{beach.desc}</span>
                </div>
                <button onClick={() => openMap(beach.map)} className="shrink-0 px-4 py-2 bg-white hover:bg-gray-50 text-blue-600 text-sm font-bold rounded-xl border border-gray-200 transition-colors flex items-center gap-2 justify-center mt-2 sm:mt-0">
                  <MapPin size={14}/> خريطة
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
              اليوم الأول: يوم الوصول
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
              أنا لسه هخلي اليوم الأول خفيف بعد إيلا. هيريكيتيا بتشتغل أحسن لما تسيب المكان يطري الرحلة بدل ما تحاول تحشر كل محطة قريبة في أول فترة بعد الضهر.
            </p>

            <h4 className="text-xl font-extrabold mb-8 flex items-center gap-3">
              <Compass size={24} style={{ color: colors.green }} />
              ترشيح
            </h4>
            <div className="bg-[#FAFAFA] border border-gray-100 rounded-[2.5rem] p-8 md:p-12">
              <ul className="space-y-10 relative before:absolute before:inset-0 before:mr-[11px] md:before:mr-[13px] before:translate-x-px before:h-full before:w-[2px] before:bg-gray-200">
                {[
                  { name: "اختياري: بيت عبور الفيلة في السكة من إيلا", desc: "محطة الفيلة الأسهل والأرخص لو عايز تكسر الطريق من غير ما تقلب اليوم لسفاري كامل", effort: "سهل جداً / وقفة سريعة", price: "حوالي 5 دولار زائد الضريبة للبالغ الأجنبي وحوالي 3 دولار زائد الضريبة للطفل", note: "مواعيد الفرجة على الأكل العامة غالباً بتبقى مكتوبة 10:30 الصبح، 2:30 العصر، و 6:00 مساءً، فظبط خروجك من إيلا على الأساس ده", color: colors.green, map: "https://www.google.com/maps/search/?api=1&query=Elephant+Transit+Home+Udawalawe", img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweomWM2NSSkvOI_A2B3mhVwJNS9iNukvGSf3fWupp_lXn6qDDilQ6Z-e_TkZNP6At_1Sv3v1LlTgKS7ssUoO0ELZzDvWgssD_IkOK5GeZwlWDaC1c5V1UGRXTScS7rp_SxuUcZqc=w800-h800-k-no" },
                  { name: "شاطئ هيريكيتيا", desc: "لسه النزلة الخفيفة اللي هستخدمها الأول", price: "ببلاش، أو حوالي 3.20 دولار لسرير الشمس في الموسم الزحمة لو مش هتستخدم واحد مربوط بطلب أكل أو شرب", note: "حلو للعوم وتظبيط المود، بس الخليج بيزحم بسرعة؛ لو عايز البحر في أحسن حالاته، هقول للناس تروح بدري أحسن من متأخر", extraTip: "السلاحف أحياناً بتتشاف قريب من المنطقة الصخرية ناحية بار Sunset", color: colors.yellow, img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/a0/9a/0f/hiriketiya-beach.jpg?w=1400&h=-1&s=1" },
                  { name: "اختياري - شاطئ ديكويلا أو شاطئ بيهيمبيا للغروب", desc: "لسه حركتي المفضلة لأول مساء هنا", price: "ببلاش", note: "ده الغروب اللي أفقه مفتوح أحسن من القعدة جوه خليج هيريكيتيا، وهو على بعد 10 لـ 15 دقيقة مشي أو توك توك قصير جداً", localTip: "بيهيمبيا أهدى من هيريكيتيا وبينفع جداً لو عايز بحر أهدى قبل العشاء", color: colors.terracotta, img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoXeg_mBx-7mBiLX9G8WFLO7lmWEJ7cNlb0idJPw5dQOkWbIMsZWFIHwyPa5lXGHgWbXfM2iaWW0De2gNVciyXM0RC8JlLpo8DJZvp5qoaxOouu2DWOXo0TiBU92hjeY4Un-jxSAjr8cf0B=w800-h800-k-no" },
                  { name: "اختياري لو وصلت بدري: كلاس طبخ في مطبخ روزي", desc: "إضافة حلوة جداً لو عايز تجربة محلية شخصية واحدة هنا من غير ما تقلب اليوم لخروجة كاملة", effort: "سهل / قليل", price: "حوالي 19 دولار للفرد، احجز من بدري", timing: "حوالي 4 ساعات", color: colors.charcoal, map: "https://www.google.com/maps/search/?api=1&query=Rosies+Kitchen+Hiriketiya", img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoia5obYI7BZG2tU3VqR8q2azbCvpXuthOJmSRFuhW2sPDOhf8cQNHLafIfLzeZzCBhccoMue563XTvq-hKqn-26UAHnkMPqhqqp0LsayhC2YPQN7fGdoyy_EdJbAO0LKWVM-2QhEGo3ts=w800-h800-k-no" }
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
                          {stop.timing && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">الوقت:</strong> {stop.timing}</p>}
                          {stop.note && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">ملاحظة:</strong> {stop.note}</p>}
                          {stop.localTip && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">نصيحة محلية:</strong> {stop.localTip}</p>}
                          {stop.extraTip && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">نصيحة زيادة:</strong> {stop.extraTip}</p>}
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
              <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>11.6.2</span>
              اليوم التاني: استكشاف هيريكيتيا
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
              ده لسه يوم هيريكيتيا الأطول، وأنا لسه هبنيه حوالين حاجة واحدة فيها حركة الصبح وخروجة واحدة قريبة بعدين.
            </p>

            <h4 className="text-xl font-extrabold mb-8 flex items-center gap-3">
              <Compass size={24} style={{ color: colors.green }} />
              أحسن طريقة تعملها بيها
            </h4>
            <div className="bg-[#FAFAFA] border border-gray-100 rounded-[2.5rem] p-8 md:p-12">
              <ul className="space-y-10 relative before:absolute before:inset-0 before:mr-[11px] md:before:mr-[13px] before:translate-x-px before:h-full before:w-[2px] before:bg-gray-200">
                {[
                  { name: "جلسة سيرف بدري في خليج هيريكيتيا", desc: "لسه أكتر حاجة طبيعية تديها أولوية", effort: "سهل لمتوسط", price: "تأجير البورد غالباً حوالي 1.60 لـ 4 دولار في الساعة؛ الدروس الفردية بتبدأ من حوالي 8 دولار وممكن توصل لـ 20 دولار في الساعة حسب المدرسة والنظام", timing: "أحسن وقت الفجر أو الصبح بدري قبل ما الزحمة تزيد", color: colors.green, img: "https://kimasurfsrilanka.com/wp-content/uploads/2025/09/DSC06545.webp" },
                  { name: "فطار متأخر بعد السيرف", desc: "الحركة اللي هعملها بدل ما أجبر نفسي على نشاط تاني على طول", best: "Duni’s Hoppers Café، Bahia، أو Lemon Grass Café حسب إنت عايز برانش ولا أكل محلي", color: colors.terracotta, img: "https://www.starsurfcamps.com/wp-content/uploads/Surf-Camps-Surfing-Holiday-Yummy-Breakfast-Recipes.jpeg" },
                  { name: "جزيرة الشاطئ الأزرق، نيلويلا", desc: "أحسن رحلة جانبية بمنظر حلو لو عايز خروجة واحدة لسه تحس إنها ساحلية وسهلة", price: "غالباً الزيارة ببلاش؛ التوك توك بحوالي 1 دولار في المشوار، أو ممكن تمشي", timing: "الجزر هو التفصيلة الأهم لإن الشريط الرملي هو الفكرة كلها", note: "أنا بحب دي أكتر كتمشية، نقطة فرجة، ومحطة تصوير أكتر من إنها محطة عوم بجد؛ فوتها لو البحر شكله هايج ومتبهدل", color: colors.yellow, img: "https://www.attractionsinsrilanka.com/wp-content/uploads/2020/06/Blue-Beach-Island.jpg" },
                  { name: "اختياري متأخر في اليوم: يوجا", price: "حوالي 6.35 لـ 10 دولار للكلاس حسب الاستوديو", options: [ { text: "Salt House على خريطة جوجل", url: "https://www.google.com/maps/search/?api=1&query=Salt+House+Hiriketiya" }, { text: "Yoga Hiriketiya على خريطة جوجل", url: "https://www.google.com/maps/search/?api=1&query=Yoga+Hiriketiya" } ], note: "أنا هقول للقراء يتأكدوا من الجدول الأسبوعي قريب من وصولهم لإن المدرسين ومواعيد الكلاسات بتتغير", color: colors.charcoal, img: "https://images.pexels.com/photos/4534639/pexels-photo-4534639.jpeg" },
                  { name: "اختياري في آخر اليوم أو قبل ما تمشي تاني يوم الصبح: مساج", options: [ { text: "The Massage Shed: حوالي 22 دولار لـ 60 دقيقة", url: "https://www.google.com/maps/search/?api=1&query=The+Massage+Shed+Hiriketiya" }, { text: "Tonic Spa Hiriketiya: الجلسات بتبدأ من حوالي 11 دولار، و 60 دقيقة للجسم كله بحوالي 26 دولار بالخدمة", url: "https://www.google.com/maps/search/?api=1&query=Tonic+Spa+Hiriketiya" } ], color: colors.green, img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800" }
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
                          {stop.timing && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">الوقت:</strong> {stop.timing}</p>}
                          {stop.best && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">أحسن حاجة لـ:</strong> {stop.best}</p>}
                          {stop.note && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">ملاحظة:</strong> {stop.note}</p>}
                        </div>

                        {stop.options && (
                          <div className="flex flex-col gap-3 border-t border-gray-100 pt-5 mt-auto">
                            <span className="font-bold text-[#292926] text-sm">خيارات:</span>
                            {stop.options.map((opt, oIdx) => (
                              <a key={oIdx} href={opt.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 text-right leading-tight">
                                <MapPin size={14} className="shrink-0"/> {opt.text}
                              </a>
                            ))}
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

          {/* 11.6.3 Quick notes */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
              <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>11.6.3</span>
              ملاحظات سريعة لهيريكيتيا
            </h3>
            <div className="bg-yellow-50 border border-yellow-100 p-8 rounded-[2rem]">
              <h4 className="text-xl font-extrabold mb-5 flex items-center gap-3" style={{ color: colors.yellow }}>
                <Info size={24} />
                خلي بالك
              </h4>
              <ul className="space-y-4">
                {[
                  { text: "هيريكيتيا نفسها صغيرة وينفع تمشي فيها، بس الحر والتلال القصيرة بتخلي التوك توك مفيد لديكويلا، نيلويلا، وخطط العشاء بره الخليج", label: "الحركة:" }
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
            الميزانية التقريبية
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            أنا هعمل دي ميزانية <strong>ليلتين، للفرد</strong>، بافتراض <strong>شخصين بيشاركوا أوضة</strong>. هيريكيتيا ممكن تفضل معقولة جداً لو خليت الأكل محلي ومزودتش غير نشاط أو اتنين بفلوس.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div style={{ backgroundColor: colors.green, boxShadow: customShadow }} className="p-8 rounded-[2rem] text-white flex flex-col transition-transform hover:-translate-y-1">
              <span className="font-bold uppercase tracking-widest text-xs text-white/70 mb-4 block">الحد الأدنى للصرف</span>
              <span className="text-3xl lg:text-4xl font-extrabold mb-6">حوالي 45 لـ 55 دولار<span className="text-sm font-medium text-white/70 block mt-2 tracking-normal normal-case">إجمالي للفرد</span></span>
              <p className="text-sm text-white/90 leading-relaxed mt-auto pt-6 border-t border-white/20">
                <strong>شامل:</strong> إقامة اقتصادية، وجبات محلية بسيطة، وقت على البحر، ومشاوير توك توك محلية قصيرة
              </p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default HiriketiyaPageAr;
