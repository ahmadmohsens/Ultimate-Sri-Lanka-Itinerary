import React from 'react';
import { 
  Train,
  Car,
  Route,
  ExternalLink,
  Backpack,
  BedDouble,
  Building2,
  Utensils,
  Flame,
  Leaf,
  Coffee,
  Soup,
  ShoppingBag,
  Star,
  Compass,
  MapPin,
  Info,
  CheckCircle2
} from 'lucide-react';

import LocationMap from './LocationMap';

interface EllaPageProps {
  colors: {
    green: string;
    yellow: string;
    terracotta: string;
    beige: string;
    charcoal: string;
  };
  openMap: (query: string) => void;
  ellaMapLocations: any[];
}

const EllaPageAr: React.FC<EllaPageProps> = ({ colors, openMap, ellaMapLocations }) => {
  const customShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.03)";

  return (
    <div className="animate-in slide-in-from-right duration-700" dir="rtl">
      
      {/* Chapter Image Banner */}
      <section style={{ boxShadow: customShadow }} className="bg-white border border-gray-50 rounded-[2.5rem] overflow-hidden mb-8">
        <div className="relative h-[450px] w-full">
          <img 
            src="https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="كوبري التسع أقواس في إيلا" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#292926]/90 via-[#292926]/30 to-transparent"></div>
          <div className="absolute bottom-12 right-12 md:bottom-16 md:right-14 text-white">
            <span className="text-[14px] font-bold tracking-[0.4em] uppercase mb-4 block text-white/90">
              الفصل 10
            </span>
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none">
              إيلا
            </h2>
          </div>
        </div>
      </section>

      <section style={{ boxShadow: customShadow }} className="bg-white border border-gray-50 rounded-[2.5rem] overflow-hidden mb-8 p-8 md:p-14">
        
        {/* 10.1 City overview */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>10.1</span> 
            نظرة عامة على المدينة
          </h3>
          <div className="text-lg text-gray-600 leading-relaxed max-w-4xl space-y-4">
            <p>
              إيلا من أكتر المحطات اللي بحبها شخصياً في سريلانكا لأنها بتديك الناحيتين بتوع الرحلة في مكان واحد. فيها مدينة صغيرة حيوية بأكل حلو، قهوة، سموثي بولز، محلات، وشوية من جو بالي، بس في نفس الوقت متحوطة بشجر كبير، نقط مشاهدة، معابد، وتمشيات بمنظر يجنن.
            </p>
            <p className="font-medium text-[#292926]">
              بالنسبة للرحلة دي، إيلا ممكن جداً تخلصها في <strong>ليلتين</strong>، بس الأفضل تديها <strong>3 ليالي</strong> لو عايز تعمل معظم الهايكس، زيارة لمعبد، وشوية أنشطة زيادة من غير ما تكون مستعجل.
            </p>
          </div>
        </div>

        {/* 10.2 How to get here */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>10.2</span> 
            إزاي توصل هنا
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            لو جاي من كاندي، إيلا تعتبر من أحلى التوصيلات في الطريق من ناحية المنظر. القطر بالكامل هو الاختيار الكلاسيكي لو حجزت بدري، في حين إن خطة السواقة لحد أمبولوواوا وبعدين القطر دي لفة مشهورة جداً للمسافرين اللي معاهم سواق ولسه عايزين ياخدوا آخر حتة في الطريق لإيلا عشان منظرها.
          </p>

          <h4 className="text-xl font-extrabold mb-6">الطرق الأساسية للوصول</h4>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
               <div className="flex items-center gap-3 mb-4">
                 <div className="p-3 rounded-xl shrink-0" style={{ backgroundColor: colors.green + '15', color: colors.green }}>
                   <Train size={24} />
                 </div>
                 <h5 className="font-extrabold text-lg leading-tight">القطر من كاندي</h5>
               </div>
               <div className="space-y-3 mt-auto">
                 <p className="text-gray-600 m-0 text-sm">غالباً بياخد حوالي <strong className="text-[#292926]">6 لـ 7 ساعات</strong> ولسه هو أحسن اختيار لو عايز رحلة التلال الكلاسيكية.</p>
                 <p className="text-gray-600 m-0 text-sm"><strong className="text-[#292926]">ملاحظة الحجز:</strong> احجز بدري لو عايز كراسي محجوزة؛ التذاكر على طريق كاندي لإيلا بتخلص بسرعة.</p>
                 <p className="text-gray-600 m-0 text-sm"><strong className="text-[#292926]">ملاحظة الكراسي:</strong> مسافرين كتير بيفضلوا <strong>الناحية الشمال</strong> عشان المناظر في الأجزاء الأخيرة قبل إيلا.</p>
                 <p className="text-terracotta-600 m-0 text-sm"><strong className="text-terracotta-700">ملاحظة أمان:</strong> استمتع بالقطر، بس بلاش تطلع بره الباب عشان تتصور؛ حصلت حوادث خطيرة لسياح على الطريق ده.</p>
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
                 <h5 className="font-extrabold text-lg leading-tight">عربية خاصة أو تاكسي طول الطريق</h5>
               </div>
               <div className="space-y-3 mt-auto">
                 <p className="text-gray-600 m-0 text-sm">غالباً بياخد حوالي <strong className="text-[#292926]">4.5 لـ 5 ساعات</strong>، حسب الزحمة والوقفات.</p>
                 <p className="text-gray-600 m-0 text-sm"><strong className="text-[#292926]">ملاحظة:</strong> أسهل خيار من الباب للباب، بس هتفوتك حتة القطر اللي الناس بتيجي عشانها.</p>
               </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
               <div className="flex items-center gap-3 mb-4">
                 <div className="p-3 rounded-xl shrink-0" style={{ backgroundColor: colors.charcoal + '15', color: colors.charcoal }}>
                   <Route size={24} />
                 </div>
                 <h5 className="font-extrabold text-lg leading-tight">سواقة لحد أمبولوواوا، وبعدين قطر</h5>
               </div>
               <div className="space-y-3 mt-auto">
                 <p className="text-gray-600 m-0 text-sm">غالباً بياخد حوالي <strong className="text-[#292926]">1.5 لـ 3.5 ساعات بالعربية</strong> لحد أمبولوواوا، وبعدين حوالي <strong className="text-[#292926]">ساعة و 50 دقيقة بالقطر</strong> لإيلا.</p>
                 <p className="text-gray-600 m-0 text-sm"><strong className="text-[#292926]">ملاحظة:</strong> دي خطة مشهورة لو معاك سواق؛ السواق بينزلك في أمبولوواوا، تاخد القطر اللي منظره حلو لإيلا، وبعدين ياخدك تاني من إيلا.</p>
                 <div className="mt-4 pt-4 border-t border-gray-100">
                    <a href="https://seatreservation.railway.gov.lk/" target="_blank" rel="noopener noreferrer" className="text-sm font-bold flex items-center gap-1.5 hover:opacity-70 transition-opacity" style={{ color: colors.charcoal }}>
                      Sri Lanka Railways <ExternalLink size={14} />
                    </a>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* 10.3 Where to stay */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>10.3</span> 
            تسكن فين
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            بالنسبة لإيلا، أنا هسكن قريب كفاية من المدينة عشان الأكل والمحطة يبقوا سهلين، بس معنديش مشكلة أسكن أبعد كام دقيقة من المركز لو ده هيديني منظر التلال الحلو اللي يخلي النوم في إيلا يستاهل. الاختيارات اللي تحت دي هي اللي هفكر أسكن فيها شخصياً مع عيلتي.
          </p>

          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <Backpack size={24} style={{ color: colors.charcoal }} />
            ترشيح هوستل (لو مسافر لوحدي)
          </h4>
          <div className="flex flex-col gap-4 mb-10">
            {[
              { name: "Wild Bee Hostel", rating: "9.2", price: "سراير في غرف مشتركة بتبدأ من حوالي 7 دولار للسرير", url: "https://www.booking.com/hotel/lk/wild-bee-hostel.html" }
            ].map((hotel, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between bg-white border border-gray-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow gap-4">
                <div>
                  <span className="font-extrabold text-lg text-[#292926] block sm:inline">{hotel.name}</span>
                  <span className="text-gray-500 text-sm sm:mr-2 block sm:inline">| تقييم <strong className="text-amber-600">{hotel.rating}</strong> | <strong>{hotel.price}</strong></span>
                </div>
                <a href={hotel.url} target="_blank" rel="noopener noreferrer" className="shrink-0 px-5 py-2 bg-gray-50 hover:bg-gray-100 text-[#292926] text-sm font-bold rounded-xl border border-gray-200 transition-colors flex items-center gap-2 justify-center mt-2 sm:mt-0">
                  بوكينج <ExternalLink size={14}/>
                </a>
              </div>
            ))}
          </div>

          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <BedDouble size={24} style={{ color: colors.green }} />
            ترشيحات فنادق مريحة
          </h4>
          <div className="flex flex-col gap-4 mb-10">
            {[
              { name: "Ollie Resort Ella", rating: "8.4", price: "$22", url: "https://www.booking.com/hotel/lk/ollie-resort-ella.html" },
              { name: "The Ella Walkers Nest", rating: "8.7", price: "$22", url: "https://www.booking.com/hotel/lk/the-ella-walkers-nest.html" },
              { name: "Ella Green Stay", rating: "8.9", price: "$23", url: "https://www.booking.com/hotel/lk/ella-green-stay.html" },
              { name: "Hidden Slope Cottage", rating: "9.0", price: "$25", url: "https://www.booking.com/hotel/lk/hidden-slope-cottage.html" },
              { name: "Every View Homestay", rating: "9.0", price: "$29", url: "https://www.booking.com/hotel/lk/every-view-homestay.html" },
              { name: "Minthu Homestay", rating: "9.0", price: "$30", url: "https://www.booking.com/hotel/lk/minthu-homestay.html" },
              { name: "Green Village", rating: "9.1", price: "$30", url: "https://www.booking.com/hotel/lk/green-village.html" },
              { name: "7th Hill Guesthouse", rating: "9.4", price: "$31", url: "https://www.booking.com/hotel/lk/7th-hill-guesthouse.html" },
              { name: "Solace Ella", rating: "8.7", price: "$32", url: "https://www.booking.com/hotel/lk/solace.html" },
              { name: "Ella Relax Inn", rating: "9.3", price: "$33", url: "https://www.booking.com/hotel/lk/ella-relax-inn-with-beautiful-mountain-view.html" }
            ].map((hotel, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between bg-white border border-gray-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow gap-4">
                <div>
                  <span className="font-extrabold text-lg text-[#292926] block sm:inline">{hotel.name}</span>
                  <span className="text-gray-500 text-sm sm:mr-2 block sm:inline">| تقييم <strong className="text-amber-600">{hotel.rating}</strong> | حوالي <strong>{hotel.price}</strong> لليلة الواحدة</span>
                </div>
                <a href={hotel.url} target="_blank" rel="noopener noreferrer" className="shrink-0 px-5 py-2 bg-gray-50 hover:bg-gray-100 text-[#292926] text-sm font-bold rounded-xl border border-gray-200 transition-colors flex items-center gap-2 justify-center mt-2 sm:mt-0">
                  بوكينج <ExternalLink size={14}/>
                </a>
              </div>
            ))}
          </div>

          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <Building2 size={24} style={{ color: colors.terracotta }} />
            ترشيحات فنادق متوسطة لراقية
          </h4>
          <div className="flex flex-col gap-4 mb-10">
            {[
              { name: "Pearl View Guesthouse", rating: "8.6", price: "$38", url: "https://www.booking.com/hotel/lk/purl-view-guesthouse.html" },
              { name: "Namara Green Ella", rating: "8.4", price: "$94", url: "https://www.booking.com/hotel/lk/namara-green-ella.html" }
            ].map((hotel, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between bg-white border border-gray-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow gap-4">
                <div>
                  <span className="font-extrabold text-lg text-[#292926] block sm:inline">{hotel.name}</span>
                  <span className="text-gray-500 text-sm sm:mr-2 block sm:inline">| تقييم <strong className="text-amber-600">{hotel.rating}</strong> | حوالي <strong>{hotel.price}</strong> لليلة الواحدة</span>
                </div>
                <a href={hotel.url} target="_blank" rel="noopener noreferrer" className="shrink-0 px-5 py-2 bg-gray-50 hover:bg-gray-100 text-[#292926] text-sm font-bold rounded-xl border border-gray-200 transition-colors flex items-center gap-2 justify-center mt-2 sm:mt-0">
                  بوكينج <ExternalLink size={14}/>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* 10.4 Where and what to eat */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>10.4</span> 
            تاكل فين وإيه
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            إيلا فيها من أحلى مشاهد الأكل على الطريق. هتلاقي أماكن كاري محلية، كافيهات ملونة، سموثي بولز، قهوة حلوة، أماكن للحلويات، وكام مكان أشيك للعشاء، فسهل جداً تاكل كويس في المدينة دي من غير تخطيط كتير.
          </p>

          {/* Local food favorites */}
          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <Utensils size={24} style={{ color: colors.green }} />
            أماكن أكل محلي مفضلة
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { name: "Matey Hut", desc: "لازم تجربه في إيلا للأرز والكاري، الكوتو، وتقدر تجرب أكتر من نوع كاري في نفس الوقت", price: "حوالي 3 لـ 6 دولار للفرد", icon: Utensils, bgColor: colors.terracotta, map: "Matey Hut Ella" },
              { name: "Down Town Rotti Hut", desc: "مكان كاجوال سهل للروتي ووجبة سريعة ورخيصة في المدينة", price: "حوالي 3 لـ 6 دولار للفرد", icon: Flame, bgColor: colors.yellow, map: "Down Town Rotti Hut Ella" },
              { name: "Sintha Bara Lonthe - Konich", desc: "مكان أكل سريلانكي بجو الغابة لو عايز حاجة مستخبية أكتر بعيد عن الشارع الرئيسي", price: "حوالي 5 لـ 10 دولار للفرد", icon: Leaf, bgColor: colors.green, map: "Sintha Bara Lonthe Konich Ella" }
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

          {/* Cafés, restaurants, and views */}
          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <Coffee size={24} style={{ color: colors.charcoal }} />
            كافيهات، مطاعم، ومناظر
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { name: "The Clay Pot Ella", desc: "مكان حلو لوجبة سريلانكية محلية بكميات كبيرة وقيمة ممتازة", price: "حوالي 4 لـ 8 دولار للفرد", icon: Soup, bgColor: colors.charcoal, map: "The Clay Pot Ella" },
              { name: "Cafe Eden", desc: "ميكس حلو بين المحلي والعالمي وواحد من الأماكن اللي الناس بتجيب سيرتها في اللامبرايس", price: "حوالي 4 لـ 8 دولار للفرد", icon: Utensils, bgColor: colors.terracotta, map: "Cafe Eden Ella" },
              { name: "Rainbow Cafe", desc: "كافيه ملون لأطباق خفيفة، سموثي بولز، وإحساس فطار أو غداء قريب من جو بالي", price: "حوالي 5 لـ 10 دولار للفرد", icon: Coffee, bgColor: colors.yellow, map: "Rainbow Cafe Ella" },
              { name: "Cafe Chill", desc: "المكان المركزي الزحمة اللي بيقدم كل حاجة ولسه من أسهل الاختيارات المضمونة في إيلا", price: "حوالي 6 لـ 12 دولار للفرد", icon: Coffee, bgColor: colors.green, map: "Cafe Chill Ella" },
              { name: "The Barn by Starbeans", desc: "من أحسن الاختيارات للقهوة، الفطار، واللي ناس كتير بتعتبره من أحسن أماكن البيتزا في إيلا", price: "حوالي 6 لـ 14 دولار للفرد", icon: Flame, bgColor: colors.terracotta, map: "The Barn by Starbeans Ella" },
              { name: "Cafe One Love", desc: "أحسن للمناظر، المشروبات، وقعدة غروب أو سهرة حيوية أكتر", price: "حوالي 6 لـ 12 دولار للفرد", icon: Coffee, bgColor: colors.charcoal, map: "Cafe One Love Ella" },
              { name: "Cafe Soul", desc: "من أحسن الأماكن الرخيصة لو عايز تتفرج على القطر وهو بيعدي على كوبري التسع أقواس مع مشروب أو سناك خفيف", price: "حوالي 3 لـ 7 دولار للفرد", icon: Coffee, bgColor: colors.yellow, note: "في سلالم بتطلع لها، فالموضوع مش صعب بس مش مشية مستوية برضه", map: "Cafe Soul Ella" },
              { name: "The White Rabbit - Ella", desc: "مكان أشيك لوجبة هادية، مشروبات، أو قعدة عشاء راقية أكتر", price: "حوالي 10 لـ 18 دولار للفرد", icon: Star, bgColor: colors.green, map: "The White Rabbit Ella" }
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
                    <span className="text-[#292926] font-bold text-sm bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100 w-fit">{place.price}</span>
                    <button onClick={() => openMap(place.map)} className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors text-right w-fit">
                      <MapPin size={16}/> شوف على الخريطة
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dessert */}
          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <ShoppingBag size={24} style={{ color: colors.terracotta }} />
            حلويات
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { name: "Isle Of Gelato", desc: "مكان حلويات سهل لو عايز جيلاتو بعد العشاء أو بعد الضهر", price: "حوالي 2 لـ 5 دولار للفرد", icon: ShoppingBag, bgColor: colors.terracotta, map: "Isle Of Gelato Ella" }
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
        </div>

        {/* 10.5 Day-by-day plan inside this city */}
        <div className="mb-16">
          {/* Day 1 */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
              <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>10.5.1</span> 
              اليوم الأول - يوم الوصول
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
              خلي اليوم الأول خفيف بعد التوصيلة من كاندي. أنضف خطة للوصول هي التمشية اللي منظرها حلو من مدينة إيلا لحد <strong>كوبري التسع أقواس</strong>، وبعدين محطة ثقافية واحدة لو الوقت لسه بيسمح.
            </p>

            <h4 className="text-xl font-extrabold mb-8 flex items-center gap-3">
              <Compass size={24} style={{ color: colors.green }} />
              ترشيح
            </h4>
            <div className="bg-[#FAFAFA] border border-gray-100 rounded-[2.5rem] p-8 md:p-12">
              <ul className="space-y-10 relative before:absolute before:inset-0 before:mr-[11px] md:before:mr-[13px] before:translate-x-px before:h-full before:w-[2px] before:bg-gray-200">
                {[
                  { name: "كوبري التسع أقواس من طريق المشي من المدينة", desc: "كوبري السكة الحديد القديم المشهور في إيلا ومن أسهل الخروجات الأولى هنا، مع تمشية لطيفة في الطبيعة بين الشجر والخضرة قبل ما توصله", effort: "سهل / قليل", price: "ببلاش", note: "المشي من المدينة غالباً بياخد حوالي 30 لـ 40 دقيقة ومناسب جداً كخروجة عائلية خفيفة", color: colors.green, map: "Nine Arch Bridge Ella", img: "https://images.unsplash.com/photo-1586008481877-7dd7c8236d00?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                  { name: "دير Mahamevnawa البوذي", desc: "الجانب الأهدى والأكتر ثقافة في إيلا، موجود عالي على الجبل مع ستوبا كبيرة ومناظر واسعة على التلال", effort: "سهل / قليل", price: "ببلاش", note: "أحسن حاجة لو وقت وصولك لسه بيسمح؛ السواقة لفوق غالباً بتاخد حوالي 20 دقيقة وآخر حتة بتحس إنها منحدرة ومكسرة؛ جدول الزيارات اليومية الرسمي فيه جولات إرشادية من 9:00 لـ 9:45 الصبح ومن 3:30 لـ 4:30 العصر، تأمل وأسئلة وأجوبة من 9:45 لـ 10:45 الصبح ومن 5:00 لـ 6:00 مساءً، وترانيم مسائية الساعة 6:00 مساءً", color: colors.yellow, map: "Mahamevnawa Buddhist Monastery Ella", img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoIg6ZIowFHqHid4lf8HOjkORP0Axfce-W4qnOICN6lej6QaUy_NzdopI0Un4PSa9u_NApKt1tR1Ii3T4JkGd-ykQLK3CUTdl1BwdtPWjtauIC4qK_TfaEg9PDc7XzLIm72sgwH=w800-h800-k-no" }
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
              <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>10.5.2</span> 
              اليوم التاني - استكشاف إيلا
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
              ده يوم إيلا الأطول وأنا هخليه مركز على ناحية قمة آدم الصغيرة الأول، وبعدين أضيف بس المحطات الزيادة اللي لسه منطقية لطاقتك ووقتك.
            </p>

            <h4 className="text-xl font-extrabold mb-8 flex items-center gap-3">
              <Compass size={24} style={{ color: colors.green }} />
              أحسن طريقة تعملها بيها
            </h4>
            <div className="bg-[#FAFAFA] border border-gray-100 rounded-[2.5rem] p-8 md:p-12">
              <ul className="space-y-10 relative before:absolute before:inset-0 before:mr-[11px] md:before:mr-[13px] before:translate-x-px before:h-full before:w-[2px] before:bg-gray-200">
                {[
                  { name: "قمة آدم الصغيرة", desc: "أحسن هايك سهل بمنظر حلو في إيلا، مع مناظر تلال واسعة ونهاية حلوة جداً للتصوير", effort: "سهل لمتوسط", price: "ببلاش", note: "امشي ورا المسار المتحدد بعد 98 Acres؛ أحسن وقت الصبح أو أواخر فترة بعد الضهر", color: colors.green, map: "Little Adam's Peak Ella", img: "https://images.unsplash.com/photo-1580635849305-4399d586ac5c?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                  { name: "زيبلاين Flying Ravana Mega", desc: "إضافة المغامرة في نفس ناحية قمة آدم الصغيرة، فبتمشي كويس هنا من غير ما ترجع في طريقك تاني", effort: "مجهود بدني قليل / إثارة عالية", price: "حوالي 32 دولار للبالغين", note: "سرعة بتوصل لـ 80 كم/س وأسهل حاجة تعملها بعد قمة آدم الصغيرة على طول", booking: { text: "حجوزات Flying Ravana الرسمية", url: "https://bookings.flyingravana.com/" }, color: colors.terracotta, map: "Flying Ravana Ella", img: "https://lh3.googleusercontent.com/p/AF1QipOVY4i6KfvSe945qrsuwdutnamSMT4l19lvRj8=w800-h800-k-no" },
                  { name: "اختياري: صخرة إيلا", desc: "البديل الأقوى لو عايز هايك أطول وبمجهود بدني أكبر بدل قمة آدم الصغيرة", effort: "متوسط لعالي / مجهود بدني", price: "حوالي 2.80 دولار للفرد", note: "أحسن وقت بدري الصبح؛ بلاش تروح في المطر الجامد لأن المسار ممكن يبقى طين ومزحلق", color: colors.charcoal, map: "Ella Rock", img: "https://images.unsplash.com/photo-1704797389202-7910a4f002ce?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                  { name: "اختياري: جولة في مصنع شاي Uva Halpewatte", desc: "إضافة حلوة لو معملتش مصنع شاي حوالين كاندي ولسه عايز محطة شاي في إيلا", effort: "سهل / قليل", price: "حوالي 10 دولار للفرد", note: "الجولات غالباً شغالة من 8:00 الصبح لـ 4:30 العصر", color: colors.yellow, map: "Uva Halpewatte Tea Factory Tour Ella", img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerTYxSF_rh6vsQnMtV_ele6SuDosV_-g7gWkGbDy95z360JCXmeCz3u2rLYdmeuFn8Q3FGiyQaozdtIO113HCsM2HnxQ7Rielkvu6HxQ69PEvPk3jkcCXX6Tos1aZ7TqVMt3dQ=w800-h800-k-no" },
                  { name: "شلالات رافانا", desc: "أحسن حاجة تتعامل معاها كمحطة عملية على الطريق بدل ما تكون جزء أساسي من وقتك في إيلا", effort: "سهل جداً / وقفة سريعة", price: "ببلاش", note: "أسهل حاجة تشوفها وإنت نازل جنوب لو معاك عربية؛ لو رايح بالقطر، اعملها كوقفة سريعة بالتوك توك وخليها قصيرة", color: colors.charcoal, map: "Ravana Falls Ella", img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepqrw_LbE3s-6CI1sbET9n6mwjcfk96psvT-qOIVj-7OK0g-4bFY26mhhGkYLr6AMtf4NGvRxNOLl_F2jDdWZFSyQ85ksETcftWCxVyxD358WS9_LEFqpp0yDlz1QjA3FFLXjmD=w800-h800-k-no" },
                  { name: "اختياري: شلال Pallewela", desc: "أحسن كإضافة شلال أهدى لو عايز حاجة مستخبية أكتر وفيها طبيعة أكتر من شلالات رافانا", effort: "سهل لمتوسط", price: "غالباً ببلاش عند الشلال نفسه", note: "أحسن طريقة توصله بالتوك توك، سكوتر، أو عربية من طريق إيلا-ويلاوايا، وبعدين مشية قصيرة بين الحقول والغابة؛ البس جزمة مناسبة وبلاش تروحه بعد مطر جامد", color: colors.green, map: "Pallewela Waterfall Ella", img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwer-XNz11yg61O1maoc32twy9Cit3_Er9VF8WFczVQ41NhU91O9QXYC45bZ7C6gVJrQe0fgKLpDZ77clRMVniEjKhpsh_WEGUf8RkRbaumo5Ym4UTeBwpgF3RNQnvk1PnbGmCPBs=w800-h800-k-no" }
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
                          {stop.booking && (
                            <a href={stop.booking.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-bold text-gray-500 hover:text-[#292926]">
                              <ExternalLink size={16}/> {stop.booking.text}
                            </a>
                          )}
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

          {/* 10.5.3 Quick notes */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
              <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>10.5.3</span> 
              ملاحظات سريعة لإيلا
            </h3>
            <div className="bg-yellow-50 border border-yellow-100 p-8 rounded-[2rem]">
              <h4 className="text-xl font-extrabold mb-5 flex items-center gap-3" style={{ color: colors.yellow }}>
                <Info size={24} />
                خلي بالك
              </h4>
              <ul className="space-y-4">
                {[
                  { text: "مدينة إيلا ينفع تمشي فيها، بس هتحتاج توك توك للفنادق اللي على التل، الرجوع بالليل، الدير، وبدايات بعض المسارات", label: "الحركة:" },
                  { text: "تأجير السكوتر سهل هنا وغالباً بيكون بحوالي 8 لـ 12 دولار في اليوم لو إنت متعود على طرق التلال المنحدرة والملفات الضيقة", label: "ملاحظة السكوتر:" },
                  { text: "خلي بيبان البلكونات والشبابيك مقفولة وإنت خارج؛ القرود ممكن تدخل الأوض", label: "ملاحظة القرود:" },
                  { text: "المناظر ممكن تتغير بسرعة مع الغيوم، الشبورة، والمطر، فخلي المواعيد مرنة شوية", label: "ملاحظة الجو:" },
                  { text: "بعد المطر، المسارات ممكن تبقى بتزحلق والعلق ممكن يظهر في المسارات الخضراء؛ هما مزعجين بس مش سامين", label: "ملاحظة المسارات:" }
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

        {/* 10.6 Estimated activity and stay cost */}
        <div className="mb-4">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.terracotta }}>10.6</span> 
            تكلفة الأنشطة والإقامة التقريبية
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
            ده مرجع تقريبي <strong>للفرد</strong>، بافتراض <strong>شخصين بيشاركوا أوضة لليلتين</strong>، من غير حساب مواصلات بين المدن.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div style={{ backgroundColor: colors.green, boxShadow: customShadow }} className="p-8 rounded-[2rem] text-white flex flex-col transition-transform hover:-translate-y-1">
              <span className="font-bold uppercase tracking-widest text-[14px] text-white/90 mb-4 block">نسخة اقتصادية</span>
              <span className="text-3xl lg:text-4xl font-extrabold mb-6">حوالي 40 لـ 60 دولار<span className="text-sm font-medium text-white/70 block mt-2 tracking-normal normal-case">إجمالي للفرد</span></span>
              <p className="text-sm text-white/90 leading-relaxed mt-auto pt-6 border-t border-white/20">
                <strong>شامل:</strong> إقامة اقتصادية + أكل محلي + أهم المعالم المجانية
              </p>
            </div>

            <div style={{ backgroundColor: colors.charcoal, boxShadow: customShadow }} className="p-8 rounded-[2rem] text-white flex flex-col transition-transform hover:-translate-y-1">
              <span className="font-bold uppercase tracking-widest text-[14px] text-white/90 mb-4 block">نسخة متوسطة</span>
              <span className="text-3xl lg:text-4xl font-extrabold mb-6">حوالي 55 لـ 80 دولار<span className="text-sm font-medium text-white/70 block mt-2 tracking-normal normal-case">إجمالي للفرد</span></span>
              <p className="text-sm text-white/90 leading-relaxed mt-auto pt-6 border-t border-white/20">
                <strong>شامل:</strong> إقامة اقتصادية + وجبة في كافيه + وجبة أشيك شوية + أهم المعالم المجانية
              </p>
            </div>

            <div className="md:col-span-2 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 bg-gray-50 border border-gray-100 rounded-[2rem] flex flex-col">
                <span className="font-bold text-[#292926] block mb-2">إضافة Flying Ravana:</span>
                <span className="text-terracotta-600 font-extrabold">زود حوالي 32 دولار<span className="text-xs font-normal text-gray-500 mr-1">/ للفرد</span></span>
              </div>
              <div className="p-6 bg-gray-50 border border-gray-100 rounded-[2rem] flex flex-col">
                <span className="font-bold text-[#292926] block mb-2">إضافة مصنع الشاي:</span>
                <span className="text-yellow-600 font-extrabold">زود حوالي 10 دولار<span className="text-xs font-normal text-gray-500 mr-1">/ للفرد</span></span>
              </div>
              <div className="p-6 bg-gray-50 border border-gray-100 rounded-[2rem] flex flex-col">
                <span className="font-bold text-[#292926] block mb-2">إضافة تأجير سكوتر:</span>
                <span className="text-green-600 font-extrabold">زود حوالي 4 لـ 6 دولار<span className="text-xs font-normal text-gray-500 mr-1">/ للفرد/في اليوم (لو مشترك)</span></span>
              </div>
              <div className="p-6 bg-gray-50 border border-gray-100 rounded-[2rem] flex flex-col">
                <span className="font-bold text-[#292926] block mb-2">توك توك لشلال Pallewela:</span>
                <span className="text-charcoal-600 font-bold text-sm text-gray-600">السعر بيختلف حسب الفصال ووقت الانتظار</span>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default EllaPageAr;
