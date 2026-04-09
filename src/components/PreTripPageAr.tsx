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

interface PreTripPageProps {
  colors: {
    green: string;
    yellow: string;
    terracotta: string;
    beige: string;
    charcoal: string;
  };
}

const PreTripPageAr: React.FC<PreTripPageProps> = ({ colors }) => {
  const customShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.03)";

  return (
    <div className="animate-in slide-in-from-right duration-700" dir="rtl">
      <section style={{ boxShadow: customShadow }} className="bg-white border border-gray-50 rounded-[2.5rem] overflow-hidden mb-8 min-h-[80vh]">
        
        {/* Chapter Image Banner */}
        <div className="relative h-[450px] w-full">
          <img 
            src="https://images.pexels.com/photos/16508230/pexels-photo-16508230.jpeg" 
            alt="منظر ساحل سريلانكا" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#292926]/90 via-[#292926]/30 to-transparent"></div>
          <div className="absolute bottom-12 right-12 md:bottom-16 md:right-14 text-white">
            <span className="text-[14px] font-bold tracking-[0.4em] uppercase mb-4 block text-white/90">
              الفصل 4
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none max-w-4xl">
              معلومات سفر مهمة <br/>لسريلانكا
            </h2>
          </div>
        </div>

        {/* Chapter Content Area */}
        <div className="p-8 md:p-14">
          
          {/* 4.1 Visa and entry requirements */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
              <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.yellow }}>4.1</span> 
              الفيزا ومتطلبات الدخول
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
              سريلانكا مفتوحة للمسافرين من كل أنحاء العالم، وإجراءات الفيزا غالباً بتكون سهلة جداً. للرحلات العادية، معظم المسافرين بيقدموا أونلاين على تصريح السفر الإلكتروني (ETA) السياحي قبل ما يسافروا، وبعدين بيوصلوا بباسبور ساري وموافقتهم جاهزة. المعلومات الرسمية عن الـ ETA والتقديم الأونلاين موجودة على <a href="https://eta.gov.lk" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:opacity-80 transition-opacity" style={{ color: colors.terracotta }}>eta.gov.lk</a>.
            </p>

            {/* Horizontal Full Width Visa Steps */}
            <div className="bg-[#FAFAFA] border border-gray-100 rounded-[2.5rem] p-8 md:p-12 mb-10">
              <h4 className="text-xl font-extrabold mb-10 flex items-center gap-3">
                <FileCheck size={24} style={{ color: colors.green }} />
                خطوات الفيزا
              </h4>
              <div className="grid md:grid-cols-4 gap-8 relative">
                <div className="hidden md:block absolute top-5 right-12 left-12 border-t-2 border-dashed" style={{ borderColor: colors.green + '40', zIndex: 0 }}></div>
                {[
                  "ادخل على الموقع الرسمي للـ ETA: eta.gov.lk",
                  "قدم على الـ ETA السياحي",
                  "ادفع رسوم الفيزا، واللي غالباً بتكون حوالي 50 دولار أمريكي لمعظم المسافرين لفيزا سياحية دخول مزدوج لمدة 30 يوم",
                  "استنى إيميل الموافقة، واللي غالباً بيوصل خلال 24 ساعة"
                ].map((step, idx) => (
                  <div key={idx} className="relative z-10 flex flex-col items-center text-center md:items-start md:text-right gap-4">
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
                <h4 className="text-xl font-extrabold mb-8">إيه اللي تتأكد منه قبل ما تسافر</h4>
                <ul className="space-y-6">
                  {[
                    { title: "صلاحية الباسبور", desc: "باسبورك لازم يكون ساري لمدة 6 شهور على الأقل من تاريخ الوصول" },
                    { title: "نوع الفيزا", desc: "اتأكد إنك قدمت على الـ ETA السياحي الصح" },
                    { title: "تذكرة عودة أو تذكرة لبلد تانية", desc: "الموقع الرسمي كاتب ده كمتطلب، حتى لو مش دايماً بيطلبوه في الواقع" }
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
                  عند الوصول
                </h4>
                <ul className="space-y-6">
                  {[
                    "الجوازات غالباً بتكون سريعة وبسيطة جداً لما يكون الـ ETA بتاعك متوافق عليه",
                    "الدخول ممكن ياخد ثواني. ده كان واحد من أسرع إجراءات الوصول اللي شفتها",
                    "عشان تكون في الأمان: جهز تأمين السفر، حجوزات الفنادق، حجوزات الطيران، وأرقام الطوارئ",
                    "غالباً مش هتحتاج تطبع كل حاجة لسريلانكا. ممكن تخلي الحاجات دي على موبايلك."
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
                <span className="block font-black text-[14px] mb-2 uppercase tracking-[0.1em]" style={{ color: colors.terracotta }}>تذكير مهم</span>
                <p className="text-[#292926] font-bold text-lg m-0 leading-relaxed">
                  قواعد الدخول والرسوم ممكن تتغير، عشان كده دايماً راجع الموقع الرسمي للـ ETA تاني قبل السفر بوقت قصير.
                </p>
              </div>
            </div>
          </div>

          {/* 4.2 Currency and payment basics */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
              <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.yellow }}>4.2</span> 
              أساسيات العملة والدفع
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-4xl">
              سريلانكا بتكون أسهل لما تستخدم مزيج عملي من الكاش والكروت. العملة المحلية هي الروبية السريلانكية (LKR)، ورغم إن الكروت منتشرة في فنادق ومطاعم وكافيهات سياحية كتير، الكاش لسه مهم للمصاريف اليومية.
            </p>

            <div style={{ boxShadow: customShadow }} className="bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-12">
              <h4 className="text-xl font-extrabold mb-8 flex items-center gap-3">
                <CreditCard size={24} style={{ color: colors.green }} />
                نصايح عملية للفلوس
              </h4>
              <ul className="grid md:grid-cols-3 gap-6">
                {[
                  "استخدم مكن الـ ATM في المدن الكبيرة والمناطق السياحية",
                  "شيل معاك كاش كفاية للسواقين، الكافيهات، السناكس، والمدفوعات المحلية السريعة",
                  "لو المكنة سألتك عايز تدفع بعملة بلدك ولا بالروبية السريلانكية LKR، اختار LKR"
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
              آداب المعابد والثقافة وقواعد اللبس
            </h3>
            <div className="bg-[#FAFAFA] border-r-4 p-8 md:p-10 rounded-l-[2rem]" style={{ borderRightColor: colors.terracotta }}>
              <div className="flex gap-5 items-start">
                <Landmark size={32} style={{ color: colors.terracotta }} className="shrink-0 mt-1" />
                <p className="text-xl text-gray-700 leading-relaxed m-0 font-semibold">
                  سريلانكا عموماً بلد متساهلة، بس لازم تلبس لبس محتشم في المعابد، وتغطي كتافك وركبك. اقلع جزمتك قبل ما تدخل، وطي صوتك، وتجنب إنك تدي ضهرك لتماثيل بوذا أو الأبراج عشان تتصور.
                </p>
              </div>
            </div>
          </div>

          {/* 4.4 Sri Lankan food at a glance */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
              <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.yellow }}>4.4</span> 
              نظرة سريعة على الأكل السريلانكي
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
              الأكل السريلانكي بيعتمد بشكل أساسي على الرز والكاري، بس اللي بيخليه مميز هو ميكس جوز الهند، التوابل، العيش، السامبول، الشاي، والأكل البحري على السواحل. الأكل مليان نكهات، متنوع، وغالباً بيكون حراق أكتر من اللي المسافرين بيتوقعوه، فخليك حذر جداً مع الشطة في الأماكن اللي بتقدم أكل للمحليين.
            </p>

            <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
              <Utensils size={24} style={{ color: colors.charcoal }} />
              إيه اللي هتشوفه كتير
            </h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { title: "الرز والكاري", desc: "الوجبة السريلانكية الكلاسيكية اللي فيها رز، كذا نوع كاري، سامبول، وأطباق جانبية", color: colors.green, img: "https://images.unsplash.com/photo-1743674453123-93356ade2891?q=80&w=1334&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                { title: "الهوبرز والسترينج هوبرز", desc: "أكلات أساسية للفطار أو في أي وقت بتتقدم مع الكاري والسامبول", color: colors.yellow, img: "https://www.foodrepublic.com/img/gallery/how-to-make-a-sri-lankan-egg-hopper/intro-import.webp" },
                { title: "كوتو روتي", desc: "عيش متقطع ومتقلب مع خضار، بيض، أو لحمة", color: colors.terracotta, img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80" },
                { title: "كاري العدس (دال)", desc: "واحد من أكتر أنواع الكاري المنتشرة في البلد كلها", color: colors.charcoal, img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=600&q=80" },
                { title: "بول سامبول", desc: "سامبول جوز هند حراق بيتقدم مع وجبات كتير", color: colors.terracotta, img: "https://media-cdn2.greatbritishchefs.com/media/etbpfsnk/img86979.whqc_1800x1200q90.webp" },
                { title: "روتي وسناكس سريعة", desc: "عيش يومي وسناكس صغيرة مالحة", color: colors.green, img: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&q=80" },
                { title: "أكل بحري", desc: "منتشر أكتر ويستاهل التجربة في المدن الساحلية", color: colors.charcoal, img: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=600&q=80" },
                { title: "شاي سيلان", desc: "جزء من تجربة الأكل اليومية، خصوصاً في مناطق الجبال", color: colors.yellow, img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80" }
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
              <div className="absolute top-0 right-0 w-2 h-full" style={{ backgroundColor: colors.yellow }}></div>
              <div style={{ backgroundColor: colors.yellow }} className="p-3 rounded-2xl text-white shrink-0 shadow-md">
                <Info size={28} />
              </div>
              <div>
                <span className="block font-black text-[14px] mb-3 uppercase tracking-[0.2em]" style={{ color: colors.yellow }}>ملاحظة سريعة</span>
                <p className="text-white/90 leading-relaxed font-medium m-0 text-lg">
                  معظم الأكل السريلانكي حراق، حتى لو مكنش باين إنه حراق في المنيو، عشان كده يستاهل إنك تتأكد من الويتر قبل ما تطلب. لو مش عايز أكل حراق، سهل جداً تلاقي خيارات غربية زي البيتزا، المكرونة، والبرجر في مناطق سياحية كتير.
                </p>
              </div>
            </div>
          </div>

          {/* 4.5 Getting around Sri Lanka */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
              <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.yellow }}>4.5</span> 
              التنقل في سريلانكا
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">
              المواصلات في سريلانكا مش فكرة إنك تلاقي طريقة واحدة مثالية، قد ما هي إنك تستخدم الطريقة الصح في الوقت الصح. للمسار ده، أسهل طريقة تفكر فيها هي على مستويين: مواصلات محلية جوه المدن ومناطق الشواطئ، ومواصلات بين المدن للمحطات الرئيسية.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { 
                  name: "توك توك عادي", 
                  best: "المشاوير المحلية القصيرة والتنقل السريع جوه المدينة", 
                  note: "دايماً اتفق على السعر قبل ما تركب. الطريقة المحلية الشائعة لحسابها هي حوالي 100 روبية للكيلومتر، فممكن تستخدم ده كدليل تقريبي قبل ما تتفق على الأجرة",
                  icon: Car, color: colors.green 
                },
                { 
                  name: "تطبيق PickMe للتوك توك", 
                  best: "المشاوير المحلية القصيرة لما تكون عايز سعر واضح من غير فصال", 
                  note: "دي غالباً أسهل طريقة عشان تتجنب الفصال في الأجرة",
                  links: [
                    { text: "PickMe على Apple Store", url: "https://apps.apple.com/us/app/pickme-sri-lanka/id1000163961" },
                    { text: "PickMe على Google Play", url: "https://play.google.com/store/apps/details?hl=en&id=com.pickme.passenger" }
                  ],
                  icon: Smartphone, color: colors.yellow 
                },
                { 
                  name: "تطبيق PickMe للعربيات", 
                  best: "الشنط، المشاوير المحلية الأطول، والأيام اللي الراحة فيها بتكون أهم", 
                  note: "ساعات عربية PickMe وتوك توك PickMe بيكونوا قريبين جداً في السعر، ففي الحالة دي ممكن تفضل العربية للراحة أو التوك توك للسرعة",
                  icon: Smartphone, color: colors.charcoal 
                },
                { 
                  name: "سواق خاص", 
                  best: "أسهل وأسلس طريقة للمسار ده", 
                  links: [
                    { text: "وكالة مرشحة: Asia Someday", url: "https://asiasomeday.com/" }
                  ],
                  icon: Car, color: colors.terracotta 
                },
                { 
                  name: "القطر", 
                  best: "مسافات معينة مناظرها حلوة وتجنب السفر على طرق كلها منحنيات", 
                  note: "القطر جزء من التجربة، بس هو غالباً مش أسرع من العربية",
                  links: [
                    { text: "الموقع: Sri Lanka Railways", url: "https://seatreservation.railway.gov.lk/" }
                  ],
                  icon: Train, color: colors.green 
                },
                { 
                  name: "12Go", 
                  best: "حجز انتقالات خاصة، أتوبيسات، وخيارات مسارات في مكان واحد.", 
                  note: "مفيد لو عايز تحجز أونلاين مسبقاً، بس دايماً راجع نقطة الركوب، نقطة النزول، وشروط الإلغاء قبل الحجز",
                  links: [
                    { text: "الموقع: موقع 12Go", url: "https://12go.asia/en" }
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
                      <strong className="text-[#292926]">أفضل لـ:</strong> {method.best}
                    </p>
                    {method.note && (
                      <p className="m-0 text-lg text-gray-600">
                        <strong className="text-[#292926]">ملاحظة:</strong> {method.note}
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
              فيش الكهربا والمشتركات <span className="text-gray-400 font-medium text-lg mr-2 hidden sm:inline">[عشان تشحن أجهزتك]</span>
            </h3>
            <div className="bg-[#FAFAFA] border border-gray-100 rounded-[2rem] p-8 flex items-start gap-5">
               <Zap size={28} style={{ color: colors.yellow }} className="shrink-0 mt-1" />
               <p className="text-lg text-gray-700 leading-relaxed m-0 font-medium">
                 سريلانكا بتستخدم كهربا 230V، وفيش نوع G منتشرة في الأماكن الجديدة وفيش نوع D لسه موجودة في المباني القديمة. يستاهل إنك تجيب معاك مشترك عالمي وشاحن فيه كذا مخرج USB.
               </p>
            </div>
          </div>

        </div>
      </section>

      {/* --- CHAPTER 5: PACKING AND TRIP PREPARATION --- */}
      <section style={{ boxShadow: customShadow }} className="bg-white border border-gray-50 rounded-[2.5rem] overflow-hidden mb-8 p-8 md:p-14">
        <div className="mb-10">
          <span className="text-[14px] font-bold tracking-[0.4em] uppercase mb-4 block text-gray-600">
            الفصل 5
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
            التجهيز للرحلة وتعبئة الشنط
          </h2>
        </div>

        {/* 5.1 Main packing checklist */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.yellow }}>5.1</span> 
            قائمة تعبئة الشنط الأساسية
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-4xl">
            استخدم قائمة تعبئة الشنط المرفقة كمرجعك الأساسي قبل الرحلة. هي متقسمة لفئات واضحة وبتنفع سواء كنت مسافر لوحدك، أو كابل، أو كعيلة، وفيها أفكار عملية لحاجات الكبار والأطفال لو احتجت:
          </p>
          <a href="https://gamma.app/docs/-mfcqmwki4jxc493" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: colors.green }} className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-bold shadow-lg hover:-translate-y-1 transition-transform">
            <FileText size={20} /> افتح قائمة تعبئة الشنط <ExternalLink size={16} className="opacity-70" />
          </a>
        </div>

        {/* 5.2 What to wear on this route */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.yellow }}>5.2</span> 
            تلبس إيه في المسار ده
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-4xl">
            جهز شنطتك لجانبين من الرحلة: أيام دافية على الساحل وأيام أبرد الصبح وبالليل في مناطق الجبال. معظم المسار بيحتاج لبس خفيف، بس أماكن زي إيلا، سيجيريا، وكاندي ممكن تكون ممطرة وتحس إنها أبرد بكتير، فزود طبقة أو طبقتين أتقل.
          </p>
          
          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <CheckCircle2 size={24} style={{ color: colors.charcoal }} />
            الأساسيات
          </h4>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "لبس خفيف للأيام الدافية ومحطات الساحل",
              "طبقة أتقل وجاكيت مطر",
              "جزمة مريحة للمشي والهايكنج القصير",
              "صندل أو جزمة سهلة للبحر",
              "طقم محتشم أو حاجة سهلة تغطي بيها للمعابد والمناطق المحلية"
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
            أساسيات شنطة اليوم
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-4xl">
            خلي شنطة صغيرة جاهزة لليوم عشان متضطرش ترتبها كل يوم الصبح. عدلها حسب الخطة، بس دي الحاجات اللي غالباً بتعمل أكبر فرق في المسار ده.
          </p>
          
          <h4 className="text-xl font-extrabold mb-6 flex items-center gap-3">
            <Backpack size={24} style={{ color: colors.terracotta }} />
            خليها في شنطتك اليومية
          </h4>
          <div className="flex flex-wrap gap-3">
            {[
              "الموبايل",
              "المحفظة وكاش قليل",
              "الباسبور في أيام السفر، أو صورة منه للخروجات العادية",
              "مية وسناكس",
              "صن بلوك وكاب",
              "جاكيت مطر خفيف أو شمسية صغيرة",
              "باور بانك",
              "أي أدوية شخصية",
              "لبس بحر لو رايح الشط",
              "حاجة خفيفة تغطي بيها أو غطا مطر لشنطتك لو احتجت",
              "جاكيت مطر خفيف"
            ].map((item, idx) => (
              <span key={idx} className="px-5 py-3 bg-white border border-gray-200 rounded-full text-sm md:text-base font-bold text-gray-600 shadow-sm flex items-center gap-3">
                <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: colors.terracotta }}></span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PreTripPageAr;
