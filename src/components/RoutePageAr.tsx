import React from 'react';
import { 
  Sun,
  Info,
  CheckCircle2,
  CalendarDays,
  Check,
  MapPin,
  AlertCircle,
  Plane,
  Wallet,
  Car,
  Train
} from 'lucide-react';

interface RoutePageProps {
  colors: {
    green: string;
    yellow: string;
    terracotta: string;
    beige: string;
    charcoal: string;
  };
}

const RoutePageAr: React.FC<RoutePageProps> = ({ colors }) => {
  const customShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.03)";

  return (
    <div className="animate-in slide-in-from-right duration-700" dir="rtl">
      <section style={{ boxShadow: customShadow }} className="bg-white border border-gray-50 rounded-[2.5rem] overflow-hidden mb-8 min-h-[80vh]">
        
        {/* Chapter Image Banner */}
        <div className="relative h-[450px] w-full">
          <img 
            src="https://images.unsplash.com/photo-1649856092355-eee498b1d0f2?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="منظر ريف سيجيريا" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#292926]/90 via-[#292926]/30 to-transparent"></div>
          <div className="absolute bottom-12 right-12 md:bottom-16 md:right-14 text-white">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block text-white/70">
              الفصل 2
            </span>
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none">
              فهم <br/>سريلانكا
            </h2>
          </div>
        </div>

        {/* Chapter Content Area (Horizontal Layout) */}
        <div className="p-8 md:p-14">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-12">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
                <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.yellow }}>2.1</span> 
                سريلانكا عاملة إزاي
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                من تجربتي، سريلانكا من الرحلات اللي سهل تستمتع بيها لأن فيها تنوع كبير جداً في بلد صغيرة. اللي عجبني فيها بجد إنها مناسبة للميزانية، مريحة، ومرحبة، بشعب طيب، أكل حلو، شواطئ، جبال شاي، وطبيعة، كل ده في رحلة واحدة من غير تخطيط معقد.
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
                <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.yellow }}>2.2</span> 
                أحسن وقت للسفر
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                سريلانكا مفهاش موسم واحد مثالي للبلد كلها، فالجو بيعتمد على أي ناحية من الجزيرة هتركز عليها. ده مهم لأن الموسم بيأثر على جودة الشواطئ، حالة البحر، الرؤية، وراحة الطرق أكتر من مجرد درجة الحرارة.
              </p>
            </div>
          </div>

          <div className="bg-[#FAFAFA] border border-gray-100 rounded-[2.5rem] p-8 md:p-12 w-full">
            <h4 className="text-xl font-extrabold mb-10 flex items-center gap-3">
              <Sun size={24} className="text-amber-500" />
              الجو على مدار السنة
            </h4>
            
            <div className="grid md:grid-cols-3 gap-10">
              {/* South & West */}
              <div className="relative pr-10 border-r-2 border-gray-200">
                <div style={{ backgroundColor: colors.green }} className="absolute -right-[11px] top-0 w-5 h-5 rounded-full border-4 border-[#FAFAFA] shadow-md"></div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                  <span className="font-extrabold text-xl">الجنوب والغرب</span>
                  <span className="px-3 py-1 bg-green-50 text-green-700 text-[9px] font-black rounded-full uppercase tracking-widest border border-green-100">أحسن موسم</span>
                </div>
                <div className="text-gray-400 font-bold text-base mb-4 italic">ديسمبر — أبريل</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-white border border-gray-200 text-[10px] font-bold text-gray-500 rounded-lg uppercase tracking-wider">بحر هادي</span>
                  <span className="px-3 py-1.5 bg-white border border-gray-200 text-[10px] font-bold text-gray-500 rounded-lg uppercase tracking-wider">سما صافية</span>
                </div>
              </div>

              {/* North & East */}
              <div className="relative pr-10 border-r-2 border-gray-200">
                <div style={{ backgroundColor: colors.terracotta }} className="absolute -right-[11px] top-0 w-5 h-5 rounded-full border-4 border-[#FAFAFA] shadow-md"></div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                  <span className="font-extrabold text-xl">الشمال والشرق</span>
                  <span className="px-3 py-1 bg-orange-50 text-orange-700 text-[9px] font-black rounded-full uppercase tracking-widest border border-orange-100">موسم قوي</span>
                </div>
                <div className="text-gray-400 font-bold text-base mb-4 italic">مايو — سبتمبر</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-white border border-gray-200 text-[10px] font-bold text-gray-500 rounded-lg uppercase tracking-wider">ركوب أمواج في الشرق</span>
                  <span className="px-3 py-1.5 bg-white border border-gray-200 text-[10px] font-bold text-gray-500 rounded-lg uppercase tracking-wider">جو جاف</span>
                </div>
              </div>

              {/* Mixed */}
              <div className="relative pr-10 border-r-2 border-gray-200">
                <div style={{ backgroundColor: colors.yellow }} className="absolute -right-[11px] top-0 w-5 h-5 rounded-full border-4 border-[#FAFAFA] shadow-md"></div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                  <span className="font-extrabold text-xl">بين المواسم</span>
                  <span className="px-3 py-1 bg-yellow-50 text-yellow-700 text-[9px] font-black rounded-full uppercase tracking-widest border border-yellow-100">انتقالي</span>
                </div>
                <div className="text-gray-400 font-bold text-base mb-4 italic">أكتوبر — نوفمبر</div>
                <div className="text-base text-gray-500 font-medium">متقلب أكتر وصعب تتوقعه في البلد كلها</div>
              </div>
            </div>

            <div style={{ backgroundColor: colors.beige + '60' }} className="mt-12 p-6 rounded-3xl flex gap-5 items-start border border-white">
              <div style={{ backgroundColor: colors.terracotta }} className="p-3 rounded-xl text-white shrink-0">
                <Info size={20} />
              </div>
              <div>
                <span className="block font-black text-[10px] mb-1 uppercase tracking-[0.1em]" style={{ color: colors.charcoal }}>ملاحظة مهمة</span>
                <p className="text-base text-gray-700 leading-relaxed font-bold m-0">
                  المسار ده بالظبط أحسن وقت ليه من <strong>نوفمبر لأبريل</strong>، خصوصاً إنه بيشمل الساحل الجنوبي في الآخر.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CHAPTER 3: ROUTE SUMMARY --- */}
      <section style={{ boxShadow: customShadow }} className="bg-white border border-gray-50 rounded-[2.5rem] overflow-hidden mb-8 p-8 md:p-14">
        <div className="mb-10">
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block text-gray-400">
            الفصل 3
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
            ملخص المسار
          </h2>
          <span className="text-xl md:text-2xl font-bold text-gray-400 block">[نظرة سريعة على الرحلة]</span>
        </div>

        <div className="text-lg text-gray-600 leading-relaxed mb-16">
          <p className="mb-8">
            أنا صممت المسار ده بحيث إن الرحلة تبقى أسهل كل ما تمشي فيها. بتبدأ في كولومبو بطاقة المدينة الزحمة، وبعدين بتتحرك للجبال والريف في نص الرحلة اللي بيكون فيه حركة أكتر، وبتخلص بنهاية أهدى على البحر قبل ما ترجع كولومبو.
          </p>
          <div style={{ backgroundColor: colors.green + '15', borderColor: colors.green + '30' }} className="p-6 rounded-3xl border flex gap-4 items-start">
            <CheckCircle2 size={24} style={{ color: colors.green }} className="shrink-0 mt-0.5" />
            <p className="m-0 text-[#292926]">
              <strong>كفاءة المواصلات:</strong> كل محطة موجودة بشكل طبيعي في طريقك للمحطة اللي بعدها، فالمسار بيفضل يتحرك لقدام بدل ما تضطر تلف مسافات زيادة
            </p>
          </div>
        </div>

        {/* 3.1 Full trip route overview */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.yellow }}>3.1</span> 
            نظرة عامة على مسار الرحلة بالكامل
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            أنا عملت المسار ده بنسختين مختلفين: مسار 10 أيام ومسار 14 يوم، ومدة الرحلة محسوبة من يوم الوصول ليوم المغادرة. تقدر تختار المسار اللي يناسب خطتك أكتر. الاتنين ممتازين والاتنين فيهم مدينة، طبيعة، وبحر، بس نسخة الـ 14 يوم بتديك إيقاع أهدى، وقت أكتر على البحر، مغامرة أكتر، ووقت أكتر للراحة بين أيام السفر.
          </p>

          <h4 className="text-xl font-extrabold mb-6">المسارات الأساسية</h4>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div style={{ backgroundColor: colors.green, boxShadow: customShadow }} className="p-8 rounded-[2rem] text-white flex flex-col justify-center transition-transform hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <CalendarDays size={24} className="opacity-80" />
                <span className="font-black tracking-widest uppercase text-xs opacity-90">مسار 10 أيام</span>
              </div>
              <p className="font-bold text-lg md:text-xl leading-snug m-0" dir="ltr">
                Colombo → Kandy → Ella → Weligama → Colombo.
              </p>
            </div>
            <div style={{ backgroundColor: colors.terracotta, boxShadow: customShadow }} className="p-8 rounded-[2rem] text-white flex flex-col justify-center transition-transform hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <CalendarDays size={24} className="opacity-80" />
                <span className="font-black tracking-widest uppercase text-xs opacity-90">مسار 14 يوم</span>
              </div>
              <p className="font-bold text-lg md:text-xl leading-snug m-0" dir="ltr">
                Colombo → Sigiriya → Kandy → Ella → Hirikiteya → Weligama → Colombo
              </p>
            </div>
          </div>

          <h4 className="text-xl font-extrabold mb-6">شريط المسار</h4>
          <div className="bg-[#FAFAFA] border border-gray-100 rounded-[2.5rem] p-8 md:p-12 mb-8">
            <ul className="space-y-10 relative before:absolute before:inset-0 before:mr-[11px] md:before:mr-[13px] before:translate-x-px before:h-full before:w-[2px] before:bg-gray-200">
              {[
                { city: "كولومبو", desc: "محطة الوصول والمغادرة، وأكتر مدينة زحمة (يفضل تقعد فيها وقت قصير)", color: colors.charcoal },
                { city: "سيجيريا", desc: "محطة ريفية أهدى بجو طبيعة ومغامرة، صباحات أهدى، وإيقاع مفتوح ومريح أكتر", color: colors.green },
                { city: "كاندي", desc: "محطة ثقافية بجو المعابد، إطلالات على البحيرة، وانتقال أهدى لمنطقة الجبال", color: colors.yellow },
                { city: "إيلا", desc: "محطة جبلية مناظرها حلوة للهايكنج، قعدة الكافيهات، الشلالات، وأماكن التصوير", color: colors.green },
                { city: "هيريكيتيا", desc: "محطة بحر سهلة بجو مدينة ركوب أمواج هادية، وإيقاع مريح أكتر", color: colors.terracotta },
                { city: "ويليجاما", desc: "نهاية على شاطئ الساحل الجنوبي لركوب الأمواج، الراحة، كافيهات البحر، ونهاية هادية", color: colors.terracotta },
                { city: "مدينة المغادرة", desc: "كولومبو", color: colors.charcoal }
              ].map((stop, idx) => (
                <li key={idx} className="relative pr-10 md:pr-14">
                  <div style={{ backgroundColor: stop.color }} className="absolute right-0 top-1.5 w-6 h-6 md:w-7 md:h-7 rounded-full border-4 border-[#FAFAFA] shadow-sm z-10"></div>
                  <p className="text-lg text-gray-600 leading-relaxed m-0">
                    <strong className="text-[#292926] text-xl">{stop.city}:</strong> <span className="block sm:inline">{stop.desc}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ backgroundColor: colors.yellow + '15', borderColor: colors.yellow + '30' }} className="p-6 md:p-8 rounded-3xl border flex gap-5 items-start">
            <Info size={24} style={{ color: colors.yellow }} className="shrink-0 mt-0.5" />
            <div>
              <span className="block font-black text-[10px] mb-2 uppercase tracking-[0.1em]" style={{ color: colors.yellow }}>ملاحظة سريعة</span>
              <p className="text-[#292926] font-medium text-lg m-0">
                تقدر تعمل المسار بالعكس، بس الاتجاه ده غالباً بيكون أحسن في الواقع: المدينة الأول، النص فيه حركة، والبحر في الآخر.
              </p>
            </div>
          </div>
        </div>

        {/* 3.2 Weather fit */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.yellow }}>3.2</span> 
            مناسبة الجو
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            المسار ده بيكون أحسن من <strong>نوفمبر لأبريل</strong>، لما <strong>الساحل الجنوبي والغربي</strong> بيكون جوهم أحسن حاجة والرحلة بتكون منطقية أكتر لما ويليجاما تكون في الآخر. كمان بيناسب جزء الجبال كويس، لأن الجو الصافي بيخلي الاستمتاع بأماكن التصوير، الهايكنج، ومحطات الطبيعة أسهل.
          </p>

          <h4 className="text-xl font-extrabold mb-6">إيه اللي لازم تعرفه</h4>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "أحسن موسم للمسار ده", desc: "ديسمبر لمارس", icon: Sun, color: colors.yellow },
              { title: "ليه التوقيت ده مناسب", desc: "أحسن جزء من الرحلة في الموسم ده", icon: Check, color: colors.green },
              { title: "إيه اللي بيتحسن أكتر حاجة", desc: "أيام البحر، حالة البحر والمطر بيكون أقل", icon: MapPin, color: colors.terracotta },
              { title: "ضريبة موسم الزحمة", desc: "دي واحدة من أزحم فترات السفر، فالفنادق ممكن تخلص بدري", icon: AlertCircle, color: colors.charcoal },
              { title: "بره الفترة دي", desc: "المسار لسه شغال، بس الشمال والشرق ممكن يكون فيهم مطر أكتر ووقت البحر بيكون صعب تتوقعه", icon: Info, color: colors.beige }
            ].map((item, idx) => (
              <div key={idx} className={`p-6 rounded-2xl border flex items-start gap-4 ${idx === 4 ? 'md:col-span-2' : ''}`} style={{ borderColor: item.color === colors.beige ? colors.charcoal + '20' : item.color + '30', backgroundColor: item.color === colors.beige ? colors.beige + '20' : item.color + '10' }}>
                 <item.icon size={24} style={{ color: item.color === colors.beige ? colors.charcoal : item.color }} className="shrink-0 mt-0.5" />
                 <div>
                   <strong className="block text-[#292926] text-lg mb-1">{item.title}:</strong>
                   <span className="text-gray-600 text-lg">{item.desc}</span>
                 </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3.3 Estimated total cost by travel style */}
        <div className="mb-4">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.yellow }}>3.3</span> 
            التكلفة الإجمالية التقريبية حسب أسلوب السفر
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            لحد أبريل 2026، دي تقديرات عامة لـ <strong>10 و 14 يوم للشخص الواحد، من غير الطيران الدولي</strong>. استخدمهم عشان تحدد ميزانية رحلتك بدري، وبعدين ظبط التفاصيل بعدين في أقسام الفنادق، المواصلات، والأنشطة.
          </p>

          <h4 className="text-xl font-extrabold mb-4 flex items-center gap-3">
            <Plane size={24} style={{ color: colors.terracotta }} />
            الطيران من مصر
          </h4>
          <div className="bg-[#FAFAFA] border border-gray-100 rounded-3xl p-6 md:p-8 mb-12">
            <p className="text-lg text-gray-700 m-0">
              <strong>طيران ذهاب وعودة من القاهرة لكولومبو:</strong> غالباً بيكون حوالي <strong>430 لـ 720 دولار</strong> على الدرجة الاقتصادية لو حجزت في وقت معقول
            </p>
          </div>

          <h4 className="text-xl font-extrabold mb-4 flex items-center gap-3">
            <Wallet size={24} style={{ color: colors.green }} />
            التكلفة التقريبية للرحلة من غير الطيران الدولي ومن غير المواصلات
          </h4>
          <p className="text-gray-600 mb-8 text-lg">
            التقديرات دي مبنية على أسعار الفنادق، الأكل، والأنشطة اللي مكتوبة في الدليل ده.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* Card 1: 10 Days Budget */}
            <div style={{ backgroundColor: colors.green, boxShadow: customShadow }} className="p-8 md:p-10 rounded-[2rem] text-white flex flex-col justify-between min-h-[200px] transition-transform hover:-translate-y-1">
              <div>
                <span className="font-bold uppercase tracking-widest text-xs text-white/70 mb-1 block">10 أيام</span>
                <span className="text-3xl font-extrabold block">اقتصادي <span className="text-sm font-medium text-white/70 tracking-normal normal-case mr-1">(أقل صرف)</span></span>
              </div>
              <div className="mt-8 flex items-baseline gap-2" dir="ltr">
                <span className="text-sm font-medium text-white/70">حوالي</span>
                <span className="text-4xl font-bold tracking-tight">$220 - $320</span>
              </div>
            </div>
            
            {/* Card 2: 10 Days Mid-range */}
            <div style={{ backgroundColor: colors.charcoal, boxShadow: customShadow }} className="p-8 md:p-10 rounded-[2rem] text-white flex flex-col justify-between min-h-[200px] transition-transform hover:-translate-y-1">
              <div>
                <span className="font-bold uppercase tracking-widest text-xs text-white/70 mb-1 block">10 أيام</span>
                <span className="text-3xl font-extrabold block">متوسط</span>
              </div>
              <div className="mt-8 flex items-baseline gap-2" dir="ltr">
                <span className="text-sm font-medium text-white/70">حوالي</span>
                <span className="text-4xl font-bold tracking-tight">$420 - $650</span>
              </div>
            </div>

            {/* Card 3: 14 Days Budget */}
            <div style={{ backgroundColor: colors.terracotta, boxShadow: customShadow }} className="p-8 md:p-10 rounded-[2rem] text-white flex flex-col justify-between min-h-[200px] transition-transform hover:-translate-y-1">
              <div>
                <span className="font-bold uppercase tracking-widest text-xs text-white/80 mb-1 block">14 يوم</span>
                <span className="text-3xl font-extrabold block">اقتصادي <span className="text-sm font-medium text-white/80 tracking-normal normal-case mr-1">(أقل صرف)</span></span>
              </div>
              <div className="mt-8 flex items-baseline gap-2" dir="ltr">
                <span className="text-sm font-medium text-white/80">حوالي</span>
                <span className="text-4xl font-bold tracking-tight">$320 - $450</span>
              </div>
            </div>

            {/* Card 4: 14 Days Mid-range */}
            <div style={{ backgroundColor: colors.yellow, boxShadow: customShadow }} className="p-8 md:p-10 rounded-[2rem] text-[#292926] flex flex-col justify-between min-h-[200px] transition-transform hover:-translate-y-1">
              <div>
                <span className="font-bold uppercase tracking-widest text-xs text-[#292926]/70 mb-1 block">14 يوم</span>
                <span className="text-3xl font-extrabold block">متوسط</span>
              </div>
              <div className="mt-8 flex items-baseline gap-2" dir="ltr">
                <span className="text-sm font-medium text-[#292926]/70">حوالي</span>
                <span className="text-4xl font-bold tracking-tight">$650 - $950</span>
              </div>
            </div>
          </div>

          <h4 className="text-xl font-extrabold mb-6">التقديرات دي بتفترض إيه</h4>
          <ul className="space-y-6 mb-12 bg-[#FAFAFA] border border-gray-100 rounded-[2.5rem] p-8 md:p-10">
            <li className="flex gap-4 items-start">
              <CheckCircle2 size={24} style={{ color: colors.green }} className="shrink-0 mt-0.5" />
              <p className="m-0 text-lg text-gray-600 leading-relaxed">
                <strong className="text-[#292926]">اقتصادي:</strong> أرخص إقامات معقولة من الدليل، وجبات محلية بسيطة، والأنشطة الأساسية اللي تكلفتها أقل
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <CheckCircle2 size={24} style={{ color: colors.yellow }} className="shrink-0 mt-0.5" />
              <p className="m-0 text-lg text-gray-600 leading-relaxed">
                <strong className="text-[#292926]">متوسط:</strong> مستوى الراحة العادي، مع إقامات مريحة، ميكس بين الأكل المحلي والأكل الأحسن شوية، وشوية أنشطة بفلوس
              </p>
            </li>
          </ul>

          <div style={{ backgroundColor: colors.beige + '40' }} className="rounded-[2.5rem] p-8 md:p-12 mb-12 border border-white">
            <h4 className="text-xl font-extrabold mb-8 flex items-center gap-3">
              <Car size={24} style={{ color: colors.charcoal }} />
              ملاحظة جانبية: أفكار عن تكلفة المواصلات
            </h4>
            <ul className="space-y-8">
              <li className="flex gap-5 items-start">
                <Car size={24} style={{ color: colors.charcoal }} className="shrink-0 mt-0.5 opacity-70" />
                <p className="m-0 text-lg text-gray-700 leading-relaxed">
                  <strong>عربية خاصة للرحلة كلها:</strong> حوالي <strong>500 لـ 600 دولار في التوتال لـ 10 أيام</strong>، أو حوالي <strong>700 لـ 840 دولار في التوتال لـ 14 يوم</strong> للعربية كلها، فلو أنتوا 3 أشخاص هتدفعوا حوالي التلت كل واحد
                </p>
              </li>
              <li className="flex gap-5 items-start">
                <Train size={24} style={{ color: colors.charcoal }} className="shrink-0 mt-0.5 opacity-70" />
                <p className="m-0 text-lg text-gray-700 leading-relaxed">
                  <strong>قطر لحد إيلا، وبعدين عربية لويليجاما، وبعدين قطر يرجعك كولومبو:</strong> تقريباً <strong>30 لـ 50 دولار للشخص</strong> في مسار الـ 10 أيام لو <strong>شخصين هيقسموا مشوار العربية من إيلا لويليجاما</strong>، وده بيعتمد على درجة القطر
                </p>
              </li>
            </ul>
          </div>

          <div style={{ backgroundColor: colors.charcoal, boxShadow: customShadow }} className="rounded-[2.5rem] p-8 md:p-12 mb-8 text-white">
            <span className="block font-black text-[10px] mb-3 uppercase tracking-[0.2em] text-white/50">توصية</span>
            <p className="text-xl md:text-2xl leading-relaxed m-0 font-medium text-white/90">
              لمعظم المسافرين، المستوى المتوسط هو الأنسب بشكل عام. بيديك إقامات مريحة، مواصلات معقولة، ومساحة كفاية في الميزانية للتجارب الأساسية من غير ما تحس إن الرحلة غالية. وده نفس الأسلوب اللي أنا سافرت بيه وصورته في فيديوهاتي.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default RoutePageAr;
