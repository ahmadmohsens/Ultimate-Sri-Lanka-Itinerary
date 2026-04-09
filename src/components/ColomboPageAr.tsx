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
}

const ColomboPageAr: React.FC<ColomboPageProps> = ({ colors, openMap, colomboMapLocations }) => {
  const customShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.03)";

  return (
    <div className="animate-in slide-in-from-right duration-700" dir="rtl">
      
      {/* Chapter Image Banner */}
      <section style={{ boxShadow: customShadow }} className="bg-white border border-gray-50 rounded-[2.5rem] overflow-hidden mb-8">
        <div className="relative h-[450px] w-full">
          <img 
            src="https://images.unsplash.com/photo-1704797390767-de3e63fa939f?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="أفق برج لوتس في كولومبو" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#292926]/90 via-[#292926]/30 to-transparent"></div>
          <div className="absolute bottom-12 right-12 md:bottom-16 md:right-14 text-white">
            <span className="text-[14px] font-bold tracking-[0.4em] uppercase mb-4 block text-white/90">
              الفصل 6 و 7
            </span>
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none">
              الوصول و <br/>كولومبو
            </h2>
          </div>
        </div>
      </section>

      {/* --- CHAPTER 6: ARRIVAL IN COLOMBO --- */}
      <section style={{ boxShadow: customShadow }} className="bg-white border border-gray-50 rounded-[2.5rem] overflow-hidden mb-8 p-8 md:p-14">
        <div className="mb-10">
          <span className="text-[14px] font-bold tracking-[0.4em] uppercase mb-4 block text-gray-600">
            الجزء 2. الوصول والرحلة خطوة بخطوة
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
            الفصل 6. الوصول لكولومبو، سريلانكا
          </h2>
        </div>

        {/* 6.1 What to do after landing */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>6.1</span> 
            تعمل إيه بعد ما توصل
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            الوصول لسريلانكا غالباً بيكون أسهل بكتير من ما الناس متوقعة. الهدف إنك تمشي على الخطوات بهدوء، عشان تطلع من المطار معاك نت، شوية كاش، ومواصلتك للفندق جاهزة.
          </p>

          <div className="bg-[#FAFAFA] border border-gray-100 rounded-[2.5rem] p-8 md:p-12 mb-10">
            <h4 className="text-xl font-extrabold mb-10 flex items-center gap-3">
              <CheckCircle2 size={24} style={{ color: colors.green }} />
              ترتيب الوصول
            </h4>
            <div className="grid md:grid-cols-5 gap-8 relative">
              <div className="hidden md:block absolute top-5 right-10 left-10 border-t-2 border-dashed" style={{ borderColor: colors.green + '40', zIndex: 0 }}></div>
              {[
                "عدي من الجوازات: سريعة جداً وغالباً بتاخد حوالي 10 ثواني",
                "استلم شنطك",
                "اسحب كاش يكفي أول يوم أو يومين، وبعدين اسحب تاني من المدينة",
                "اشتري وشغل خط الموبايل",
                "اطلع من المطار وروح على فندقك"
              ].map((step, idx) => (
                <div key={idx} className="relative z-10 flex flex-col items-center text-center md:items-start md:text-right gap-4">
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
            شراء الخط وتشغيل النت
          </h3>
          <div className="flex gap-5 items-start p-6 md:p-8 rounded-3xl border border-gray-100 bg-[#FAFAFA]">
            <Smartphone size={28} style={{ color: colors.terracotta }} className="shrink-0 mt-1" />
            <p className="text-lg text-gray-700 leading-relaxed m-0 font-medium max-w-4xl">
              اشتري خطك من المطار. الموضوع سهل جداً، ومهم جداً، وغالباً أوفر من الـ eSIM لأنه رخيص جداً. في شركة Dialog، غالباً بيكلف حوالي <strong>4 لـ 6 دولار</strong> لباقة <strong>20 جيجا</strong> صالحة لمدة شهر تقريباً، وتشغيله بياخد دقايق بس.
            </p>
          </div>
        </div>

        {/* 6.3 Airport transfer options */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>6.3</span> 
            خيارات المواصلات من المطار وأحسن طريقة توصل بيها لأول فندق
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            لأول مشوار من المطار، الخيارات الأساسية هي <strong>PickMe</strong>، أو <strong>سواق خاص تحجزه مسبقاً</strong>، أو <strong>أتوبيس المطار 187 الفاخر لمحطة كولومبو فورت</strong>، أو <strong>توصيلة من الفندق</strong>. أحسن خيار بيعتمد على ميزانيتك، شنطك، وعايز يوم الوصول يكون سهل إزاي.
          </p>

          <h4 className="text-xl font-extrabold mb-6">الخيارات الأساسية</h4>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
               <div className="p-3 rounded-xl shrink-0" style={{ backgroundColor: colors.yellow + '15', color: colors.yellow }}>
                 <Smartphone size={24} />
               </div>
               <div>
                 <h5 className="font-extrabold text-lg mb-1">PickMe</h5>
                 <p className="text-gray-600">غالباً أحسن قيمة لمعظم المسافرين، بيكلف حوالي <strong>7 لـ 15 دولار</strong></p>
               </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
               <div className="p-3 rounded-xl shrink-0" style={{ backgroundColor: colors.terracotta + '15', color: colors.terracotta }}>
                 <Car size={24} />
               </div>
               <div>
                 <h5 className="font-extrabold text-lg mb-1">سواق خاص</h5>
                 <p className="text-gray-600">أحسن لو هتحجز سواق للرحلة كلها، غالباً بيكلف حوالي <strong>50 لـ 60 دولار في اليوم (تواصل مع <a href="https://indiasomeday.com" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80">indiasomeday.com</a>)</strong></p>
               </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
               <div className="p-3 rounded-xl shrink-0" style={{ backgroundColor: colors.charcoal + '15', color: colors.charcoal }}>
                 <Train size={24} />
               </div>
               <div>
                 <h5 className="font-extrabold text-lg mb-1">أتوبيس 187 لكولومبو فورت</h5>
                 <p className="text-gray-600">أرخص خيار، غالباً <strong>أقل من 1 دولار. هتحتاج مواصلة تانية من محطة الأتوبيس للفندق</strong></p>
               </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
               <div className="p-3 rounded-xl shrink-0" style={{ backgroundColor: colors.green + '15', color: colors.green }}>
                 <BedDouble size={24} />
               </div>
               <div>
                 <h5 className="font-extrabold text-lg mb-1">تاكسي المطار أو توصيلة الفندق</h5>
                 <p className="text-gray-600">أسهل خيار مترتبله مسبقاً، بس غالباً أغلى، بيكلف حوالي 10 لـ 20 دولار. المشوار بياخد حوالي <strong>45 لـ 90 دقيقة بالعربية</strong>، حسب الزحمة ومنطقة الفندق.</p>
               </div>
            </div>
          </div>

          <div style={{ backgroundColor: colors.charcoal, boxShadow: customShadow }} className="rounded-[2.5rem] p-8 md:p-12 mb-8 text-white">
            <span className="block font-black text-[14px] mb-3 uppercase tracking-[0.2em] text-white/80">توصيتي</span>
            <p className="text-xl leading-relaxed m-0 font-medium text-white/90">
              لو عايز أسهل وصول، احجز سواق خاص أو توصيلة من الفندق مسبقاً. لو عايز أحسن توازن بين السهولة والسعر، استخدم PickMe. أنا برشح إنك تسيب أتوبيس المطار للمسافرين اللي ميزانيتهم محدودة ومعاهم شنط خفيفة. أنا شخصياً استخدمت سواق خاص للرحلة كلها، وفي يوم الوصول ده كان أسهل خيار بكتير.
            </p>
          </div>
        </div>

        {/* 6.4 What to do on the first evening */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>6.4</span> 
            تعمل إيه في أول مساء
          </h3>
          <div className="bg-gray-50 border border-gray-100 p-8 rounded-[2rem] flex items-start gap-5">
            <Moon size={28} style={{ color: colors.charcoal }} className="shrink-0 mt-1 opacity-70" />
            <div className="text-lg text-gray-700 leading-relaxed">
              <p className="mb-4">
                خلي أول مساء خفيف. اعمل تشيك إن، خد دش، كل حاجة بسيطة، وارتاح بعد الطيران.
              </p>
              <p className="m-0 font-medium">
                لو وصلت متأخر، مفيش داعي تعمل أي حاجة غير إنك تستقر، تطلب أكل من الفندق، وتنام. لو وصلت بدري، وفر طاقتك وخلي أول ليلة خفيفة برضه.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CHAPTER 7: COLOMBO --- */}
      <section style={{ boxShadow: customShadow }} className="bg-white border border-gray-50 rounded-[2.5rem] overflow-hidden mb-8 p-8 md:p-14">
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
            الفصل 7. كولومبو
          </h2>
        </div>

        {/* 7.1 City overview */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>7.1</span> 
            نظرة عامة على المدينة
          </h3>
          <div className="text-lg text-gray-600 leading-relaxed max-w-4xl space-y-4">
            <p>
              كولومبو أحسن بداية هادية للرحلة. استخدمها عشان ترتاح من الطيران، تاكل كويس، وتستقر قبل ما تروح الجبال والساحل بدل ما تحاول تلف على كل المعالم السياحية.
            </p>
            <p className="font-medium text-[#292926]">
              لمعظم الرحلات، <strong>ليلة أو ليلتين</strong> كفاية. اقعد <strong>ليلتين</strong> لو عايز وقت كفاية تكتشف كولومبو براحتك على مدار يوم كامل من غير استعجال.
            </p>
          </div>
        </div>

        {/* 7.2 Where to stay */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>7.2</span> 
            تسكن فين
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            في كولومبو، الفنادق الاقتصادية الحلوة هي أحسن اختيار. الهدف هو مكان نظيف، سهل، تقييمه عالي، ومريح لإقامة قصيرة في المدينة من غير ما تدفع كتير في فندق فخم.
          </p>

          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <Map size={24} style={{ color: colors.charcoal }} />
            أحسن مناطق للسكن
          </h4>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { area: "Cinnamon Gardens", desc: "أهدى، خضرة أكتر، وواحدة من أرقى المناطق لإقامة أولى ممتازة" },
              { area: "Havelock Town / Colombo 5", desc: "عملية، مواصلاتها سهلة، وحلوة للكافيهات، المطاعم، والحركة اليومية" },
              { area: "Malabe / Hokandara side", desc: "أهدى وغالباً قيمتها أحسن، بس أبعد عن معالم كولومبو الأساسية" }
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
                  <span className="text-gray-500 text-sm sm:mr-2 block sm:inline">| {hotel.area} | تقييم <strong className="text-amber-600">{hotel.rating}</strong> | حوالي <strong>{hotel.price}</strong></span>
                </div>
                <a href={hotel.url} target="_blank" rel="noopener noreferrer" className="shrink-0 px-5 py-2 bg-gray-50 hover:bg-gray-100 text-[#292926] text-sm font-bold rounded-xl border border-gray-200 transition-colors flex items-center gap-2 justify-center">
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
                  <span className="text-gray-500 text-sm sm:mr-2 block sm:inline">| {hotel.area} | تقييم <strong className="text-amber-600">{hotel.rating}</strong> | حوالي <strong>{hotel.price}</strong></span>
                </div>
                <a href={hotel.url} target="_blank" rel="noopener noreferrer" className="shrink-0 px-5 py-2 bg-gray-50 hover:bg-gray-100 text-[#292926] text-sm font-bold rounded-xl border border-gray-200 transition-colors flex items-center gap-2 justify-center">
                  بوكينج <ExternalLink size={14}/>
                </a>
              </div>
            ))}
          </div>

          <div style={{ backgroundColor: colors.beige + '40' }} className="rounded-[2.5rem] p-6 md:p-8 flex gap-5 items-start border border-white">
            <Info size={24} style={{ color: colors.charcoal }} className="shrink-0 mt-0.5" />
            <div>
              <span className="block font-black text-[14px] mb-2 uppercase tracking-[0.1em]" style={{ color: colors.charcoal }}>ملاحظة على الحجز</span>
              <p className="text-gray-700 leading-relaxed font-medium m-0 text-lg">
                الأسعار دي ممتازة لكولومبو، بس ممكن تتغير كتير حسب التواريخ ونوع الأوضة. لو لقيت حاجة عجبتك، احجزها بدري وخلي عندك خيار الإلغاء المجاني لو أمكن.
              </p>
            </div>
          </div>
        </div>

        {/* 7.3 Where and what to eat */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>7.3</span> 
            تاكل إيه ومنين
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            كولومبو محطة أكل قوية في البداية لأنها بتديك وجبات رز وكاري محلية جداً، وكمان شوية خيارات لمطاعم قعدة شيك.
          </p>

          {/* Budget Places */}
          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <Utensils size={24} style={{ color: colors.green }} />
            أماكن اقتصادية
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { name: "Mayura Hotel / Restaurant", desc: "رز وكاري سريلانكي / على طريقة التاميل، خصوصاً الكابوريا أو الضاني", price: "حوالي 1 لـ 2 دولار للأطباق العادية، الكابوريا أغلى", icon: Fish, bgColor: colors.green, map: "Mayura Hotel Mayura Restaurant Colombo" },
              { name: "Abdul Hameed Street", desc: "شارع أكل شعبي مشهور بالليل للشاورما، الكباب، والفالودة", price: "حوالي 1 لـ 6 دولار حسب هتجرب إيه", icon: Flame, bgColor: colors.terracotta, map: "Abdul Hameed Street Colombo" },
              { name: "Curry Pot", desc: "رز وكاري سريلانكي كاجوال", price: "حوالي 2 لـ 5 دولار", icon: Soup, bgColor: colors.charcoal, map: "Curry Pot Colombo" },
              { name: "Ranbath Organic Food", desc: "رز وكاري نباتي / فيجان", price: "حوالي 3 لـ 5 دولار", icon: Leaf, bgColor: colors.yellow, map: "Ranbath Organic Food Colombo" },
              { name: "Beruwala Eating House", desc: "أطباق رز سريلانكية إسلامية، حلو في أكلة الـ kidu", price: "حوالي 1 لـ 3 دولار للأطباق العادية", icon: Utensils, bgColor: colors.green, map: "Beruwala Eating House Colombo" },
              { name: "Praneetha Foods", desc: "وجبة رز وكاري كبيرة بنظام البوفيه", price: "حوالي 2 دولار أو أكتر حسب الإضافات", icon: Utensils, bgColor: colors.terracotta, map: "Praneetha Foods Colombo" },
              { name: "Good Market, Racecourse", desc: "سوق أكل فيه تنوع بدل مطعم واحد", price: "السعر بيختلف حسب الكشك", icon: ShoppingBag, bgColor: colors.charcoal, map: "Good Market Racecourse Colombo" },
              { name: "Galle Face Green food stalls", desc: "سناكس في الشارع وأكلات خفيفة بالليل على البحر", price: "سناكس رخيصة جداً", icon: Coffee, bgColor: colors.yellow, map: "Galle Face Green food stalls Colombo" }
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
                    <span className="text-[#292926] font-bold text-sm bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{place.price}</span>
                    <button onClick={() => openMap(place.map)} className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors text-right">
                      <MapPin size={16}/> شوفها على الخريطة
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mid Range */}
          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <Coffee size={24} style={{ color: colors.charcoal }} />
            أماكن متوسطة وقعدات أحسن
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { name: "New Banana Leaf", desc: "برياني وأطباق رز سريلانكية على الطريقة الإسلامية", price: "حوالي 3 لـ 7 دولار للشخص", icon: Utensils, bgColor: colors.terracotta, map: "New Banana Leaf Colombo" },
              { name: "Dutch Burgher Union / VOC Cafe", desc: "وجبة قعدة بطابع تراثي، حلوة في أكلة الـ lamprais", price: "حوالي 6 لـ 8 دولار للأطباق الرئيسية", icon: Utensils, bgColor: colors.charcoal, map: "Dutch Burgher Union VOC Cafe Colombo" },
              { name: "Shoulders by Harpo’s", desc: "عشاء كاجوال شيك", price: "متوسط لغالي", icon: Utensils, bgColor: colors.yellow, map: "Shoulders by Harpo's Colombo" },
              { name: "Palmyrah Restaurant", desc: "أكل من جافنا / شمال سريلانكا وأكل بحري راقي", price: "حوالي 9 لـ 17 دولار أو أكتر", icon: Fish, bgColor: colors.green, map: "Palmyrah Restaurant Colombo" },
              { name: "Thai Boulevard", desc: "فاصل حلو من الأكل المحلي", price: "حوالي 8 دولار أو أكتر للأطباق الرئيسية", icon: Soup, bgColor: colors.charcoal, map: "Thai Boulevard Colombo" },
              { name: "The Gallery Cafe", desc: "وجبة شيك، حلويات، أو محطة قهوة", price: "حوالي 7 لـ 18 دولار أو أكتر للأطباق الأساسية", icon: Coffee, bgColor: colors.terracotta, map: "The Gallery Cafe Colombo" }
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
                    <span className="text-[#292926] font-bold text-sm bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{place.price}</span>
                    <button onClick={() => openMap(place.map)} className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors text-right">
                      <MapPin size={16}/> شوفها على الخريطة
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* High End */}
          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <Star size={24} style={{ color: colors.terracotta }} />
            مطاعم غالية وللمناسبات الخاصة
          </h4>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { name: "Nihonbashi by Dharshan", desc: "أكل ياباني فاخر", price: "غالي — حوالي 40 دولار أو أكتر للشخص", icon: Fish, bgColor: colors.yellow, map: "Nihonbashi by Dharshan Colombo" },
              { name: "Paradise Road Tintagel", desc: "عشاء فندق أنيق", price: "حوالي 6 لـ 22 دولار أو أكتر", icon: Utensils, bgColor: colors.green, map: "Paradise Road Tintagel Colombo" },
              { name: "Avartana", desc: "أكل جنوب هندي فاخر", price: "غالي", icon: Utensils, bgColor: colors.terracotta, map: "Avartana Colombo" },
              { name: "Ministry of Crab", desc: "أشهر أكلة بحرية غالية في كولومبو", price: "الأطباق الصغيرة حوالي 10 لـ 20 دولار، الكابوريا أغلى", icon: Fish, bgColor: colors.charcoal, map: "Ministry of Crab Colombo" }
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
                    <button onClick={() => openMap(place.map)} className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors text-right">
                      <MapPin size={16}/> شوفها على الخريطة
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
              اليوم الأول — يوم الوصول
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
              خلي أول يوم خفيف وفي المركز عشان متتعاملش مع زحمة كتير بعد الطيران. أسهل شكل هو <strong>معبد جانجارامايا → اختياري برج لوتس → جالي فيس جرين وقت الغروب</strong>.
            </p>

            <h4 className="text-xl font-extrabold mb-8 flex items-center gap-3">
              <Compass size={24} style={{ color: colors.green }} />
              توصية
            </h4>
            <div className="bg-[#FAFAFA] border border-gray-100 rounded-[2.5rem] p-8 md:p-12">
              <ul className="space-y-10 relative before:absolute before:inset-0 before:mr-[11px] md:before:mr-[13px] before:translate-x-px before:h-full before:w-[2px] before:bg-gray-200">
                {[
                  { name: "معبد جانجارامايا", desc: "أحسن محطة ثقافية تبدأ بيها في وسط كولومبو", price: "حوالي 1 لـ 2 دولار للشخص", note: "البس لبس محتشم، غطي الكتاف والركب، واقلع الجزمة قبل ما تدخل", color: colors.yellow, img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerp041nf40p7WIZbxNAJrsMiToY6Tyg4RvDwxZTxm7fkl68iUrZ3d1ssYQwnU7HVURQH2j_IXtjcDMz1tMaCCJFuxy3KQnXPWNBGEddESijsdS6E9aMWMCtme56VifXfQdVndXiAQ=w800-h800-k-no", map: "Gangaramaya Temple Colombo" },
                  { name: "اختياري: برج لوتس كولومبو", desc: "ضيف ده بس لو لسه فيك طاقة وعايز تشوف أفق المدينة", price: "حوالي 20 دولار لتذكرة السياح", link: {text: "الموقع الرسمي لبرج لوتس كولومبو", url: "https://colombolotustower.lk/"}, color: colors.charcoal, img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqqRVIjwfRsVE6v6mf5wUtHVymL3o8DauMA2d3gdJJ8aSeV9ayo1ActkGyq34eA9SifmVevC_wNkaR8bNHYLcbXT5hjuyFLnA4IzRjaompr9OtObNKFcwP0O7wNGZ_thbMKtyVuOQ=w800-h800-k-no", map: "Colombo Lotus Tower" },
                  { name: "جالي فيس جرين وقت الغروب", desc: "أسهل نهاية لليوم عشان هوا البحر، المساحة المفتوحة، والسناكس الخفيفة", price: "ببلاش", best: "العائلات، الأطفال، وتمشية هادية بالليل", color: colors.terracotta, img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweq589jRPpLd_EQwHaqk3Qwvllva0ZWCbDuhqGKIVcmhiVRFaQyl3VC-e68u2suxACMj2EL_IT0CH-InRRdwg6DfT9_RQa6dG415NXwXHALgZksXSWqrdwH5Lko-WDj5n3avsR759Q=w800-h800-k-no", map: "Galle Face Green Colombo" }
                ].map((stop, idx) => (
                  <li key={idx} className="relative pr-10 md:pr-14">
                    <div style={{ backgroundColor: stop.color }} className="absolute right-0 top-1.5 w-6 h-6 md:w-7 md:h-7 rounded-full border-4 border-[#FAFAFA] shadow-sm z-10"></div>
                    <div className="bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row overflow-hidden items-stretch">
                      
                      <div className="flex-1 flex flex-col p-6 md:p-8">
                        <h5 className="font-extrabold text-xl md:text-2xl mb-3">{stop.name}</h5>
                        <p className="text-gray-600 text-lg mb-5">{stop.desc}</p>
                        
                        <div className="space-y-3 mb-6 flex-grow">
                          {stop.price && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">السعر:</strong> {stop.price}</p>}
                          {stop.note && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">خلي بالك:</strong> {stop.note}</p>}
                          {stop.best && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">أحسن حاجة لـ:</strong> {stop.best}</p>}
                        </div>
                        
                        <div className="flex flex-wrap gap-4 border-t border-gray-100 pt-5 mt-auto">
                          {stop.link && (
                            <a href={stop.link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-bold text-gray-500 hover:text-[#292926]">
                              <ExternalLink size={16}/> {stop.link.text}
                            </a>
                          )}
                          <button onClick={() => openMap(stop.map)} className="flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 text-right">
                            <MapPin size={16}/> شوفها على الخريطة
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
              <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>7.4.2</span> 
              اليوم التاني — استكشاف كولومبو
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
              ده اليوم اللي فيه حركة أكتر في كولومبو وبيديك أقوى إحساس بالمدينة من الشارع. أنظف مسار هو <strong>الجامع الأحمر → سوق بيتاه → اختياري السوق العائم أو متحف كولومبو الوطني</strong>، وبعدين <strong>شارع عبد الحميد</strong> لو عايز محطة أكل شعبي أكتر بالليل.
            </p>

            <h4 className="text-xl font-extrabold mb-8 flex items-center gap-3">
              <Compass size={24} style={{ color: colors.green }} />
              أحسن طريقة تعمله بيها
            </h4>
            <div className="bg-[#FAFAFA] border border-gray-100 rounded-[2.5rem] p-8 md:p-12">
              <ul className="space-y-10 relative before:absolute before:inset-0 before:mr-[11px] md:before:mr-[13px] before:translate-x-px before:h-full before:w-[2px] before:bg-gray-200">
                {[
                  { name: "الجامع الأحمر", desc: "محطة سريعة، تأثيرها قوي وواحد من أكتر المباني اللي بتعلق في الذاكرة في كولومبو", price: "ببلاش", note: "البس لبس يغطي الكتاف والركب", color: colors.terracotta, img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweppteU-tyAjrlO60GyMdPApOYkjBzN3N-DRkdSWXcwBwpuaWmW1o0msEqMAetU7fmtSw2_1Pey48HUCUN-6FJhgRDX0qjtmHXvJ3PdZA7f8yGveFAihrFqhIQtmnwOV_tSYvmI=w800-h800-k-no", map: "Red Mosque Colombo" },
                  { name: "سوق بيتاه", desc: "أحسن مكان تحس فيه بكولومبو على مستوى الشارع", price: "ببلاش", timing: "روح بدري عشان الحر يكون أقل", color: colors.green, img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwer3lEuWD1qDRZHxOZmp7A6Yw9UreJDBCXPMf2Esa8Y9G3hr9vhVrxdeKFmSGa_-Hgc6n1aFHEItNbJ3Xvw_5L5EegpBVYQe9ZjjL5Fag31H1Hqba1P8Dl0SWK3WYZdtLPs9y-oWsxwv9VqD=w800-h800-k-no", map: "Pettah Market Colombo" },
                  { name: "شارع عبد الحميد", desc: "محطة أكل شارع حيوية في كولومبو 12", effort: "متوسط", price: "حوالي 1 لـ 4 دولار", timing: "أحسن وقت بالليل", color: colors.charcoal, img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwernydGY4iar2ZjhFZkr2ftDo6vxpcmq8AvbV8Ncj3JN8kln59UQRv8-f0F0JpoN0sjosODnhrIIJmjavSoYjMpbKKR2ZgWse6B6EYYXVcLFAPFdtupaw5dOfV4PIzG3wkect2Ym=w800-h800-k-no", map: "Abdul Hameed Street Colombo" },
                  { name: "اختياري: سوق بيتاه العائم", desc: "محطة زيادة خفيفة", price: "ببلاش", color: colors.yellow, img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqfAH1vHx0E4jTfILw93DQzaB6JjzEi4plunsHnCRK-vtdgEzJ46pJWONw1UPuqzE7Lh_kJr0Voi3T4F73xqgqUmdpu5-BTdUMClsn2222gTme9CygjfcxydZ328Tm0Jw20v5cllL0Dq5HQ=w800-h800-k-no", map: "Pettah Floating Market Colombo" },
                  { name: "بديل اختياري: متحف كولومبو الوطني", desc: "اختيار أحسن لو عايز تاريخ", price: "حوالي 5 دولار", color: colors.charcoal, img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepqWnIPMJvLlZOw6KMB9OekIVy1gXtYDrRdcv099ocuvrEHEttMHcPyYBj5jnCxyyxwGERW3KOY54IrvHgQy5CWnknD-4GDa6PC7yqBbA4KRrcURCNl2J4ZGXBoMQlX7-X-MW1YNg=w800-h800-k-no", map: "Colombo National Museum" }
                ].map((stop, idx) => (
                  <li key={idx} className="relative pr-10 md:pr-14">
                    <div style={{ backgroundColor: stop.color }} className="absolute right-0 top-1.5 w-6 h-6 md:w-7 md:h-7 rounded-full border-4 border-[#FAFAFA] shadow-sm z-10"></div>
                    <div className="bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row overflow-hidden items-stretch">
                      
                      <div className="flex-1 flex flex-col p-6 md:p-8">
                        <h5 className="font-extrabold text-xl md:text-2xl mb-3">{stop.name}</h5>
                        <p className="text-gray-600 text-lg mb-5">{stop.desc}</p>
                        
                        <div className="space-y-3 mb-6 flex-grow">
                          {stop.price && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">السعر:</strong> {stop.price}</p>}
                          {stop.effort && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">المجهود:</strong> {stop.effort}</p>}
                          {stop.timing && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">التوقيت:</strong> {stop.timing}</p>}
                          {stop.note && <p className="m-0 text-base text-gray-700"><strong className="text-[#292926]">خلي بالك:</strong> {stop.note}</p>}
                        </div>
                        
                        <div className="flex flex-wrap gap-4 border-t border-gray-100 pt-5 mt-auto">
                          <button onClick={() => openMap(stop.map)} className="flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 text-right">
                            <MapPin size={16}/> شوفها على الخريطة
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

          {/* 7.4.3 General notes */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
              <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>7.4.3</span> 
              ملاحظات عامة لكولومبو
            </h3>
            <div className="bg-yellow-50 border border-yellow-100 p-8 rounded-[2rem]">
              <h4 className="text-xl font-extrabold mb-5 flex items-center gap-3" style={{ color: colors.yellow }}>
                <Info size={24} />
                خلي بالك
              </h4>
              <ul className="space-y-4">
                <li className="flex gap-4 items-start">
                  <div className="w-2 h-2 rounded-full mt-2.5 shrink-0" style={{ backgroundColor: colors.yellow }}></div>
                  <p className="text-lg text-gray-700 leading-relaxed m-0 font-medium">
                    <strong>المواصلات المرشحة:</strong> PickMe هو أسهل خيار للحركة اليومية بين المناطق
                  </p>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-2 h-2 rounded-full mt-2.5 shrink-0" style={{ backgroundColor: colors.yellow }}></div>
                  <p className="text-lg text-gray-700 leading-relaxed m-0 font-medium">
                    <strong>اللبس:</strong> غطي الكتاف والركب في الأماكن الدينية
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
              اليوم الأول - يوم الوصول
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
              خلي أول يوم مركزي وخفيف عشان متضغطش على نفسك بعد الطيران. تقدر تمشي في منطقة فورت المركزية وتستخدم توك توك لمسافات قصيرة لو احتجت. أنظف خطة لأول مساء في كولومبو هي <strong>جالي فيس جرين → اختياري مشروبات وقت الغروب على روف → عشاء في منطقة فورت أو بيتاه</strong>.
            </p>

            <h4 className="text-xl font-extrabold mb-8 flex items-center gap-3">
              <Compass size={24} style={{ color: colors.green }} />
              توصية
            </h4>
            <div className="bg-[#FAFAFA] border border-gray-100 rounded-[2.5rem] p-8 md:p-12">
              <ul className="space-y-10 relative before:absolute before:inset-0 before:mr-[11px] md:before:mr-[13px] before:translate-x-px before:h-full before:w-[2px] before:bg-gray-200">
                {[
                  { name: "جالي فيس جرين", desc: "أسهل أول تمشية في المدينة وطريقة حلوة تستقر بيها قبل ما الليل يبدأ", effort: "سهل جداً / قليل", price: "ببلاش", note: "أحسن وقت بعد العصر لما أكشاك الأكل تبدأ تفتح والحر يقل", color: colors.yellow, map: "Galle Face Green", img: "https://images.unsplash.com/photo-1586008481877-7dd7c8236d00?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                  { name: "اختياري: مشروبات وقت الغروب على روف (زي Granbell أو Galle Face Hotel)", desc: "إضافة خفيفة لو عايز منظر أهدى للمدينة من ناحية الماية", effort: "سهل جداً / قليل", price: "هتدفع تمن المشروبات", color: colors.charcoal, map: "Granbell Hotel Colombo", img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                  { name: "عشاء في منطقة فورت أو بيتاه", desc: "خلص أول يوم بوجبة حلوة على الطريقة المحلية على مسافة مشي من المنطقة المركزية", effort: "سهل جداً / قليل", price: "حوالي 3 لـ 8 دولار للشخص", color: colors.terracotta, map: "Pettah Market", img: "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
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
                            <MapPin size={16}/> شوفها على الخريطة
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
              <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>7.5.2</span> 
              اليوم التاني - استكشاف كولومبو
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
              ده يوم كولومبو المليان وأنا أفضل أبدأ بالمعابد والمتاحف، وبعدين أخلص بعشاء أحسن شوية. PickMe هو أسهل طريقة تتحرك بيها بين المناطق دي.
            </p>

            <h4 className="text-xl font-extrabold mb-8 flex items-center gap-3">
              <Compass size={24} style={{ color: colors.green }} />
              أحسن طريقة تعمله بيها
            </h4>
            <div className="bg-[#FAFAFA] border border-gray-100 rounded-[2.5rem] p-8 md:p-12">
              <ul className="space-y-10 relative before:absolute before:inset-0 before:mr-[11px] md:before:mr-[13px] before:translate-x-px before:h-full before:w-[2px] before:bg-gray-200">
                {[
                  { name: "معبد جانجارامايا", desc: "أشهر معبد في كولومبو، معروف بتصميمه المعماري المتنوع ومجموعته من التحف", effort: "سهل / قليل", price: "حوالي 1.50 دولار للشخص", note: "البس لبس محتشم؛ الكتاف والركب لازم يكونوا متغطيين", color: colors.green, map: "Gangaramaya Temple", img: "https://images.unsplash.com/photo-1661928684586-eab4463502be?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                  { name: "الجامع الأحمر (مسجد جامع الفار)", desc: "الجامع الأيقوني المخطط أحمر في أبيض في بيتاه، واحد من أكتر المباني اللي بتتصور في المدينة", effort: "سهل / قليل", price: "ببلاش", note: "أحسن حاجة تشوفه من بره؛ البس لبس محتشم لو هتدخل", color: colors.terracotta, map: "Red Mosque Colombo", img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                  { name: "متحف كولومبو الوطني", desc: "أكبر متحف في سريلانكا، ممتاز لو عايز تتعمق في تاريخ وفن الجزيرة", effort: "سهل / قليل", price: "حوالي 3 لـ 5 دولار للشخص", color: colors.yellow, map: "Colombo National Museum", img: "https://images.unsplash.com/photo-1586008481877-7dd7c8236d00?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                  { name: "عشاء في Ministry of Crab أو The Gallery Cafe", desc: "خلص إقامتك في كولومبو بواحدة من أشهر تجارب الأكل في المدينة", effort: "سهل جداً / قليل", price: "حوالي 20 لـ 50 دولار أو أكتر للشخص", color: colors.charcoal, map: "Ministry of Crab Colombo", img: "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
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
                            <MapPin size={16}/> شوفها على الخريطة
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
        </div>

        {/* 7.6 Estimated destination cost */}
        <div className="mb-4">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>7.6</span> 
            التكلفة التقريبية للوجهة
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            ده مرجع تقريبي <strong>للشخص الواحد</strong>، بافتراض إن <strong>شخصين هيقسموا أوضة لليلتين</strong>، من غير مواصلات بين المدن.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div style={{ backgroundColor: colors.green, boxShadow: customShadow }} className="p-8 rounded-[2rem] text-white flex flex-col transition-transform hover:-translate-y-1">
              <span className="font-bold uppercase tracking-widest text-[14px] text-white/90 mb-4 block">إقامة أساسية لليلتين في كولومبو</span>
              <span className="text-3xl lg:text-4xl font-extrabold mb-6" dir="ltr">حوالي $35 لـ $60<span className="text-sm font-medium text-white/70 block mt-2 tracking-normal normal-case">للشخص في التوتال</span></span>
              <p className="text-sm text-white/90 leading-relaxed mt-auto pt-6 border-t border-white/20">
                <strong>شامل:</strong> إقامة اقتصادية لمتوسطة لمدة <strong>ليلتين</strong>، وجبات محلية، <strong>معبد جانجارامايا</strong>، ويوم سياحي أغلبه ببلاش
              </p>
            </div>

            <div style={{ backgroundColor: colors.charcoal, boxShadow: customShadow }} className="p-8 rounded-[2rem] text-white flex flex-col transition-transform hover:-translate-y-1">
              <span className="font-bold uppercase tracking-widest text-[14px] text-white/90 mb-4 block">نسخة ببرج لوتس</span>
              <span className="text-3xl lg:text-4xl font-extrabold mb-6" dir="ltr">حوالي $55 لـ $80<span className="text-sm font-medium text-white/70 block mt-2 tracking-normal normal-case">للشخص في التوتال</span></span>
            </div>

            <div style={{ backgroundColor: colors.terracotta, boxShadow: customShadow }} className="p-8 rounded-[2rem] text-white flex flex-col transition-transform hover:-translate-y-1">
              <span className="font-bold uppercase tracking-widest text-[14px] text-white/95 mb-4 block">نسخة بمتحف كولومبو الوطني</span>
              <span className="text-3xl lg:text-4xl font-extrabold mb-6" dir="ltr">حوالي $40 لـ $65<span className="text-sm font-medium text-white/80 block mt-2 tracking-normal normal-case">للشخص في التوتال</span></span>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default ColomboPageAr;
