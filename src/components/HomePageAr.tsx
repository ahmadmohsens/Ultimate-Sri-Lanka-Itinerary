import React from 'react';
import { 
  Calendar, 
  MapPin, 
  BedDouble, 
  Utensils, 
  Camera, 
  Route, 
  Compass, 
  Globe, 
  FileText,
  Sparkles,
  CheckCircle2,
  Palmtree,
  Heart
} from 'lucide-react';

interface HomePageProps {
  colors: {
    green: string;
    yellow: string;
    terracotta: string;
    beige: string;
    charcoal: string;
  };
  isAtTop: boolean;
  setCurrentPage: (page: string) => void;
  scrollToTop: () => void;
  cities: { name: string; id: string }[];
}

const HomePageAr: React.FC<HomePageProps> = ({ colors, isAtTop, setCurrentPage, scrollToTop, cities }) => {
  const customShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.03)";

  return (
    <div className="animate-in fade-in duration-700" dir="rtl">
      {/* --- HERO SECTION --- */}
      <section className={`grid lg:grid-cols-2 gap-12 items-center mb-16 transition-all duration-1000 ${isAtTop ? 'scale-100 opacity-100' : 'scale-[0.98] opacity-90'}`}>
        <div className="flex flex-col items-start pt-8 lg:pl-8">
          <span className="text-xs font-bold tracking-widest text-gray-500 uppercase border border-gray-200 rounded-md px-3 py-1 mb-6">
            دليل سفر متكامل
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6">
            دليل <br/> رحلتك <br/>
            <span style={{ color: '#fa820c' }}>لسريلانكا</span> <br/>
            من للألف للياء.
          </h1>
          <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-md leading-relaxed">
            دليلك الشامل خطوة بخطوة من أول ما توصل لحد ما تمشي، متصمم عشان يسهل عليك الرحلة ويوفر ميزانيتك.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <button 
              onClick={() => document.getElementById('planning')?.scrollIntoView({ behavior: 'smooth' })}
              style={{ backgroundColor: colors.charcoal }}
              className="text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition-all hover:scale-105 active:scale-95"
            >
              ابدأ التخطيط
            </button>
            <button 
              onClick={() => setCurrentPage('route')}
              className="px-8 py-4 rounded-full font-bold border border-gray-200 hover:bg-gray-50 transition-all hover:scale-105 active:scale-95"
            >
              شوف المسار
            </button>
          </div>
        </div>
        
        <div className="relative h-[400px] lg:h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl group">
          <img 
            src="https://images.unsplash.com/photo-1619531103472-7cc0d6479b59?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="طبيعة ساحل سريلانكا" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          <div className="absolute bottom-8 right-8 text-white">
            <div className="flex items-center gap-2 mb-1">
              <MapPin size={14} />
              <span className="text-xs font-bold uppercase tracking-widest">الساحل الجنوبي</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- GUIDE SECTION (1.1 What this guide includes) --- */}
      <section id="planning" className="bg-[#FAFAFA] border border-gray-100 rounded-[2.5rem] p-8 md:p-14 mb-8">
        <span className="text-[10px] font-bold tracking-widest uppercase mb-4 block" style={{ color: colors.terracotta }}>
          الجزء الأول. التخطيط قبل الرحلة
        </span>
        <h2 className="text-4xl font-extrabold mb-6 tracking-tight">إزاي تستخدم الدليل ده</h2>
        
        <div className="prose text-gray-600 mb-12 max-w-4xl space-y-4 text-lg leading-relaxed">
          <p>
            أنا عملت الدليل ده عشان أخلي رحلتك لسريلانكا <strong>أسهل وأوفر</strong>. بنيت الدليل ده بناءً على تجربتي الشخصية وبحث أخد مني وقت طويل جداً. أنا سافرت سريلانكا كلها مع بنتي، وبعدين جمعت تجربتي الشخصية مع أشهر التوصيات من عشرات الفيديوهات والمدونات ومصادر التخطيط عشان أعملك البرنامج ده وأوفر عليك ساعات من البحث.
          </p>
          <p>
            <strong>هدفي كان إني أعمل دليل واحد يساعدك:</strong>
          </p>
          <ul className="list-disc pr-5 space-y-2">
            <li><strong>تتجنب ضغط التخطيط اللي ملوش لازمة</strong></li>
            <li><strong>تتحرك في رحلتك بثقة أكبر</strong></li>
            <li><strong>توفر فلوسك وتتجنب الغلطات المكلفة</strong></li>
            <li><strong>تستمتع بالرحلة من غير ما تضطر تخطط لكل خطوة وأنت في نص الرحلة</strong></li>
          </ul>
          <p>
            المفروض تقدر تستخدم الدليل ده كمرجعك الأساسي للسفر، من أول مراحل التخطيط لحد رحلة رجوعك لبلدك، عشان يخلي كل التفاصيل المهمة في مكان واحد بدل ما تكون متطورة في لينكات وملاحظات وسكرين شوتس كتير.
          </p>
        </div>

        <h3 className="text-3xl font-bold mb-8">1.1 الدليل ده فيه إيه</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {/* ROW 1 */}
          <div style={{ backgroundColor: colors.green, boxShadow: customShadow }} className="text-white rounded-[1.8rem] p-7 flex flex-col justify-between min-h-[200px] hover:-translate-y-2 transition-transform duration-300">
            <FileText size={24} className="opacity-70 mb-4" />
            <div>
              <div className="text-5xl font-bold mb-1">67</div>
              <div className="text-sm opacity-90 leading-tight font-medium">صفحة من التخطيط المفصل للرحلة</div>
            </div>
          </div>
          <div style={{ boxShadow: customShadow }} className="bg-white rounded-[1.8rem] p-7 flex flex-col justify-between min-h-[200px] hover:-translate-y-2 transition-transform duration-300">
            <Calendar size={24} className="text-gray-400 mb-4" />
            <div>
              <div className="text-5xl font-bold mb-1 text-gray-800">12</div>
              <div className="text-sm text-gray-500 leading-tight font-medium">فصل سهل تمشي عليهم</div>
            </div>
          </div>
          <div style={{ backgroundColor: colors.terracotta, boxShadow: customShadow }} className="text-white rounded-[1.8rem] p-7 flex flex-col justify-between min-h-[200px] hover:-translate-y-2 transition-transform duration-300">
            <Route size={24} className="opacity-70 mb-4" />
            <div>
              <div className="text-5xl font-bold mb-1">2</div>
              <div className="text-sm opacity-90 leading-tight font-medium">خيارات كاملة لمسار الرحلة في سريلانكا</div>
            </div>
          </div>
          <div style={{ boxShadow: customShadow }} className="bg-white rounded-[1.8rem] p-7 flex flex-col justify-between min-h-[200px] hover:-translate-y-2 transition-transform duration-300">
            <BedDouble size={24} className="text-gray-400 mb-4" />
            <div>
              <div className="text-5xl font-bold mb-1 text-gray-800">80+</div>
              <div className="text-sm text-gray-500 leading-tight font-medium">ترشيح لفنادق</div>
            </div>
          </div>
          <div style={{ boxShadow: customShadow }} className="bg-white rounded-[1.8rem] p-7 flex flex-col justify-between min-h-[200px] hover:-translate-y-2 transition-transform duration-300">
            <Utensils size={24} className="text-gray-400 mb-4" />
            <div>
              <div className="text-5xl font-bold mb-1 text-gray-800">80+</div>
              <div className="text-sm text-gray-500 leading-tight font-medium">ترشيح لأكل ومطاعم</div>
            </div>
          </div>
          
          {/* ROW 2 */}
          <div style={{ boxShadow: customShadow }} className="bg-white rounded-[1.8rem] p-7 flex flex-col justify-between min-h-[200px] hover:-translate-y-2 transition-transform duration-300">
            <Camera size={24} className="text-gray-400 mb-4" />
            <div>
              <div className="text-5xl font-bold mb-1 text-gray-800">50+</div>
              <div className="text-sm text-gray-500 leading-tight font-medium">فكرة لأماكن وأنشطة</div>
            </div>
          </div>
          <div style={{ backgroundColor: colors.charcoal, boxShadow: customShadow }} className="text-white rounded-[1.8rem] p-7 flex flex-col justify-between min-h-[200px] hover:-translate-y-2 transition-transform duration-300">
            <Sparkles size={24} className="opacity-70 mb-4" />
            <div>
              <div className="text-2xl font-extrabold mb-1 tracking-tight">البداية</div>
              <div className="text-sm opacity-90 leading-tight font-medium">توجيه خطوة بخطوة</div>
            </div>
          </div>
          <div style={{ backgroundColor: colors.green, boxShadow: customShadow }} className="text-white rounded-[1.8rem] p-7 flex flex-col justify-between min-h-[200px] hover:-translate-y-2 transition-transform duration-300">
            <MapPin size={24} className="opacity-70 mb-4" />
            <div>
              <div className="text-5xl font-bold mb-1">6</div>
              <div className="text-sm opacity-90 leading-tight font-medium">خطط مفصلة للمدن</div>
            </div>
          </div>
          <div style={{ backgroundColor: colors.terracotta, boxShadow: customShadow }} className="text-white rounded-[1.8rem] p-7 flex flex-col justify-between min-h-[200px] hover:-translate-y-2 transition-transform duration-300">
            <Compass size={24} className="opacity-70 mb-4" />
            <div>
              <div className="text-2xl font-extrabold mb-1 tracking-tight">سهولة</div>
              <div className="text-sm opacity-90 leading-tight font-medium">دليل التنقل والمواصلات</div>
            </div>
          </div>
          <div style={{ backgroundColor: colors.charcoal, boxShadow: customShadow }} className="text-white rounded-[1.8rem] p-7 flex flex-col justify-between min-h-[200px] hover:-translate-y-2 transition-transform duration-300">
            <Globe size={24} className="opacity-70 mb-4" />
            <div>
              <div className="text-2xl font-extrabold mb-1 tracking-tight">خرايط</div>
              <div className="text-sm opacity-90 leading-tight font-medium">لينكات خرايط للطرق</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CHAPTERS OVERVIEW --- */}
      <section className="bg-[#FAFAFA] border border-gray-100 rounded-[2.5rem] p-8 md:p-14 mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10 tracking-tight">نظرة عامة على الفصول</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
             <span className="text-[10px] font-bold tracking-widest uppercase mb-6 block" style={{ color: colors.terracotta }}>
              الجزء الأول. التخطيط قبل الرحلة
            </span>
            <ul className="space-y-4">
              {[
                "الفصل 1. إزاي تستخدم الدليل ده",
                "الفصل 2. فهم سريلانكا",
                "الفصل 3. ملخص المسار",
                "الفصل 4. معلومات سفر مهمة لسريلانكا",
                "الفصل 5. التجهيز للرحلة وتعبئة الشنط"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium group cursor-pointer">
                  <span className="w-1.5 h-1.5 rounded-full transition-all group-hover:scale-150" style={{ backgroundColor: colors.terracotta }}></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
             <span className="text-[10px] font-bold tracking-widest uppercase mb-6 block" style={{ color: colors.green }}>
              الجزء التاني. الوصول والرحلة مدينة بمدينة
            </span>
            <ul className="space-y-4">
              {cities.map((city, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium group cursor-pointer" onClick={() => { setCurrentPage(city.id); scrollToTop(); }}>
                  <span className="w-1.5 h-1.5 rounded-full transition-all group-hover:scale-150" style={{ backgroundColor: colors.green }}></span>
                  الفصل {i + 6}. {city.name}
                </li>
              ))}
              <li className="flex items-center gap-3 text-gray-700 font-medium group cursor-pointer">
                  <span className="w-1.5 h-1.5 rounded-full transition-all group-hover:scale-150" style={{ backgroundColor: colors.green }}></span>
                  الفصل 12. المغادرة
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- 1.2 WHO THIS GUIDE IS FOR --- */}
      <section style={{ boxShadow: customShadow }} className="bg-white rounded-[2.5rem] p-8 md:p-12 mb-8 border border-gray-50">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <h3 className="text-3xl font-extrabold mb-4 tracking-tight">1.2 الدليل ده لمين</h3>
            <p className="text-gray-500 leading-relaxed mb-6">
              الدليل ده للمسافرين اللي عايزين مسار واضح ومنظم لسريلانكا يقدروا يمشوا عليه من غير ما يعملوا أبحاث ملهاش نهاية.
            </p>
            <div style={{ backgroundColor: colors.beige }} className="p-5 rounded-2xl border border-white/50">
              <p className="text-sm font-bold text-gray-700 italic">
                "مثالي لو عايز الرحلة متخططة بطريقة تحس إنها بسيطة، سلسة، موفرة للميزانية، وقيمتها ممتازة مقابل الفلوس."
              </p>
            </div>
          </div>
          
          <div className="lg:w-2/3 grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-2">
                <div style={{ backgroundColor: colors.green }} className="p-1.5 rounded-lg text-white">
                  <Palmtree size={18} />
                </div>
                <h4 className="font-bold text-xl">مناسب جداً لـ</h4>
              </div>
              <ul className="space-y-3">
                {[
                  { title: "عشاق الطبيعة", desc: "جبال، شلالات، ومحطات مناظرها حلوة" },
                  { title: "عشاق البحر", desc: "مسار بينتهي بأيام هادية على الساحل" },
                  { title: "عشاق الأكل", desc: "كافيهات محلية ووجبات سريلانكية يومية" }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <CheckCircle2 size={18} style={{ color: colors.green }} className="shrink-0 mt-1" />
                    <div>
                      <span className="font-bold block text-[#292926]">{item.title}</span>
                      <span className="text-sm text-gray-500">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-2">
                <div style={{ backgroundColor: colors.terracotta }} className="p-1.5 rounded-lg text-white">
                  <Heart size={18} />
                </div>
                <h4 className="font-bold text-xl">أفضل لـ</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "الكابلز", "المسافرين لوحدهم", "العائلات", 
                  "الأصحاب", "اللي بيسافروا لأول مرة"
                ].map((tag, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-full text-xs font-bold text-gray-600">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePageAr;
