import React, { useState, useEffect } from 'react';
import { Language, Order } from './types';
import { translations } from './translations';

// Components
const Navbar: React.FC<{ lang: Language, setLang: (l: Language) => void }> = ({ lang, setLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[lang];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('home')}>
            <div className="w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center text-white text-2xl">
              <i className="fas fa-soap"></i>
            </div>
            <span className="text-2xl font-bold text-cyan-800 tracking-tight">КОВРОЛЮКС</span>
          </div>

          <div className="hidden md:flex items-center space-x-8 font-medium">
            <button onClick={() => scrollTo('home')} className="hover:text-cyan-600 transition-colors">{t.navHome}</button>
            <button onClick={() => scrollTo('services')} className="hover:text-cyan-600 transition-colors">{t.navServices}</button>
            <button onClick={() => scrollTo('prices')} className="hover:text-cyan-600 transition-colors">{t.navPrices}</button>
            <button onClick={() => scrollTo('order-status')} className="hover:text-cyan-600 transition-colors">{t.navOrderStatus}</button>
            <button onClick={() => scrollTo('contacts')} className="hover:text-cyan-600 transition-colors">{t.navContacts}</button>
            <div className="flex gap-2 ml-4">
              <button onClick={() => setLang('ru')} className={`px-2 py-1 rounded text-xs ${lang === 'ru' ? 'bg-cyan-600 text-white' : 'bg-slate-100'}`}>RU</button>
              <button onClick={() => setLang('kg')} className={`px-2 py-1 rounded text-xs ${lang === 'kg' ? 'bg-cyan-600 text-white' : 'bg-slate-100'}`}>KG</button>
            </div>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-600 p-2">
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-6 flex flex-col space-y-4">
          <button onClick={() => scrollTo('home')} className="text-left text-lg py-2">{t.navHome}</button>
          <button onClick={() => scrollTo('services')} className="text-left text-lg py-2">{t.navServices}</button>
          <button onClick={() => scrollTo('prices')} className="text-left text-lg py-2">{t.navPrices}</button>
          <button onClick={() => scrollTo('order-status')} className="text-left text-lg py-2">{t.navOrderStatus}</button>
          <button onClick={() => scrollTo('contacts')} className="text-left text-lg py-2">{t.navContacts}</button>
          <div className="flex gap-4 pt-2">
            <button onClick={() => setLang('ru')} className="text-cyan-600 font-bold">Русский</button>
            <button onClick={() => setLang('kg')} className="text-cyan-600 font-bold">Кыргызча</button>
          </div>
        </div>
      )}
    </nav>
  );
};

const WhyChooseUs: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang];
  const advantages = [
    {
      icon: "fa-shield-halved",
      title: lang === 'ru' ? "Безопасно" : "Коопсуз",
      desc: lang === 'ru' ? "Используем только гипоаллергенные и эко-средства." : "Биз гипоаллергендик жана эко-каражаттарды гана колдонобуз.",
      gradient: "from-blue-50 to-cyan-50"
    },
    {
      icon: "fa-bolt",
      title: lang === 'ru' ? "Быстро" : "Тез",
      desc: lang === 'ru' ? "Чистка и сушка занимают от 24 до 48 часов." : "Тазалоо жана кургатуу 24 сааттан 48 саатка чейин созулат.",
      gradient: "from-cyan-50 to-teal-50"
    },
    {
      icon: "fa-truck-fast",
      title: lang === 'ru' ? "Доставка" : "Жеткирүү",
      desc: lang === 'ru' ? "Бесплатная доставка от двери до двери." : "Эшиктен эшикке чейин акысыз жеткирүү.",
      gradient: "from-teal-50 to-emerald-50"
    }
  ];

  return (
    <section className="py-24 bg-white reveal">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-black text-center text-cyan-900 mb-16">{t.whyTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((adv, i) => (
            <div key={i} className={`p-10 rounded-[2.5rem] bg-gradient-to-br ${adv.gradient} border border-white shadow-lg hover:shadow-xl transition-all duration-300 group`}>
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-[2.4rem] text-cyan-600 mb-8 shadow-sm group-hover:scale-110 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-500">
                <i className={`fas ${adv.icon}`}></i>
              </div>
              <h3 className="text-2xl font-bold text-cyan-900 mb-4">{adv.title}</h3>
              <p className="text-slate-600 leading-relaxed">{adv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StatsSection: React.FC<{ lang: Language }> = ({ lang }) => {
  const stats = [
    { value: "5+", label: lang === 'ru' ? "лет на рынке" : "жыл рынокто", icon: "fa-history" },
    { value: "180 000 м²", label: lang === 'ru' ? "ковров почищено" : "килем жуулду", icon: "fa-rug" },
    { value: "10 000+", label: lang === 'ru' ? "довольных клиентов" : "ыраазы кардарлар", icon: "fa-smile" },
  ];

  return (
    <section className="py-12 bg-white reveal">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-cyan-100 rounded-full flex items-center justify-center text-2xl text-cyan-600 mx-auto mb-4">
                <i className={`fas ${stat.icon}`}></i>
              </div>
              <span className="text-4xl font-black text-cyan-900 mb-1 block">{stat.value}</span>
              <span className="text-slate-500 font-medium uppercase tracking-wider text-xs">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Calculator: React.FC<{ lang: Language }> = ({ lang }) => {
  const [width, setWidth] = useState<number>(0);
  const [length, setLength] = useState<number>(0);
  const pricePerMeter = 100;
  const area = (width * length).toFixed(2);
  const total = (width * length * pricePerMeter).toFixed(0);
  const t = translations[lang];

  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl border border-cyan-50 h-full">
      <h3 className="text-2xl font-bold mb-6 text-cyan-800 flex items-center justify-center gap-3">
        <i className="fas fa-calculator text-cyan-600 text-3xl"></i>
        {t.calcTitle}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-500 mb-2">{t.width}</label>
          <div className="relative">
             <input 
              type="number" 
              value={width || ''} 
              onChange={e => setWidth(Number(e.target.value))}
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-cyan-500 text-lg"
              placeholder="0"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">м</span>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-500 mb-2">{t.length}</label>
          <div className="relative">
            <input 
              type="number" 
              value={length || ''} 
              onChange={e => setLength(Number(e.target.value))}
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-cyan-500 text-lg"
              placeholder="0"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">м</span>
          </div>
        </div>
      </div>
      <div className="mt-8 p-6 bg-gradient-to-r from-cyan-600 to-cyan-500 rounded-2xl text-white shadow-lg shadow-cyan-200">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-cyan-100 text-sm mb-1">{t.result}:</p>
            <span className="text-4xl font-black">{total} сом</span>
          </div>
          <div className="text-right">
             <p className="text-xs text-cyan-100 mb-1 opacity-80 uppercase tracking-wider">Площадь</p>
             <p className="text-xl font-bold">{area} м²</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const OrderStatus: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang];
  const [phone, setPhone] = useState('');
  const [foundOrders, setFoundOrders] = useState<Order[]>([]);

  const searchOrder = () => {
    const orders: Order[] = JSON.parse(localStorage.getItem('kovrolux_orders') || '[]');
    const results = orders.filter(o => o.phone.includes(phone));
    setFoundOrders(results);
    if (results.length === 0 && phone) alert('Заказ не найден');
  };

  const deleteOrder = (id: string) => {
    if (window.confirm("Вы уверены, что хотите удалить этот заказ?")) {
      const orders: Order[] = JSON.parse(localStorage.getItem('kovrolux_orders') || '[]');
      const updated = orders.filter(o => o.id !== id);
      localStorage.setItem('kovrolux_orders', JSON.stringify(updated));
      setFoundOrders(updated.filter(o => o.phone.includes(phone)));
    }
  };

  return (
    <div id="order-status" className="py-20 bg-white reveal">
      <div className="max-w-4xl px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-cyan-800">{t.orderStatusTitle}</h2>
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <input 
            type="text" 
            placeholder="Введите номер телефона" 
            value={phone}
            onChange={e => setPhone(e.target.value)}
            className="flex-1 p-4 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <button onClick={searchOrder} className="bg-cyan-600 text-white px-8 py-4 rounded-xl font-bold">Найти</button>
        </div>
        <div className="space-y-4">
          {foundOrders.map(order => (
            <div key={order.id} className="p-6 border rounded-2xl relative bg-slate-50">
              <button onClick={() => deleteOrder(order.id)} className="absolute top-4 right-4 text-red-400 hover:text-red-600">
                <i className="fas fa-trash"></i>
              </button>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div><p className="text-xs text-slate-400">ID Заказа</p><p className="font-bold">#{order.id}</p></div>
                <div><p className="text-xs text-slate-400">Статус</p><span className="text-cyan-600 font-bold">{order.status}</span></div>
                <div><p className="text-xs text-slate-400">Дата</p><p>{order.date}</p></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const BookingSection: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang];
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: 'до обеда',
    address: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newOrder: Order = {
      id: Math.floor(1000 + Math.random() * 9000).toString(),
      phone: formData.phone,
      status: 'Принят',
      date: formData.date,
      pickupTime: formData.time,
      address: formData.address
    };
    const orders = JSON.parse(localStorage.getItem('kovrolux_orders') || '[]');
    localStorage.setItem('kovrolux_orders', JSON.stringify([...orders, newOrder]));
    
    const message = `Новый заказ!\nИмя: ${formData.name}\nТел: ${formData.phone}\nАдрес: ${formData.address}\nДата: ${formData.date}\nВремя: ${formData.time}`;
    window.open(`https://wa.me/996502542543?text=${encodeURIComponent(message)}`, '_blank');
    alert(`Заказ #${newOrder.id} принят!`);
  };

  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 h-full">
      <h3 className="text-2xl font-bold mb-6 text-cyan-800 text-center flex items-center justify-center gap-3">
        <i className="fas fa-calendar-alt text-cyan-600 text-3xl"></i>
        Забронировать дату
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input required type="text" placeholder="Ваше имя" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-cyan-500" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}/>
        <input required type="tel" placeholder="Телефон" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-cyan-500" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}/>
        <input required type="text" placeholder="Адрес" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-cyan-500" value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})}/>
        <div>
          <label className="block text-xs text-slate-500 mb-1 uppercase tracking-wider font-bold">Когда забрать ваш заказ?</label>
          <div className="grid grid-cols-2 gap-2">
            <input type="date" className="p-4 bg-slate-50 border rounded-xl" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})}/>
            <select className="p-4 bg-slate-50 border rounded-xl" value={formData.time} onChange={e => setFormData({...formData, time: e.target.value})}>
              <option value="до обеда">До обеда</option>
              <option value="после обеда">После обеда</option>
            </select>
          </div>
        </div>
        <button type="submit" className="w-full bg-green-600 text-white py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-3 shadow-lg hover:bg-green-700 transition-colors">
          <i className="fab fa-whatsapp text-2xl"></i>
          Отправить заявку
        </button>
      </form>
    </div>
  );
};

const ProcessSteps: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang];
  const steps = [
    { icon: "fa-truck-pickup", title: "Забор", desc: "Приезжаем в удобное время и забираем ваш ковер." },
    { icon: "fa-wind", title: "Обеспыливание", desc: "Удаляем глубокую пыль на специальном выбивальном станке." },
    { icon: "fa-soap", title: "Стирка", desc: "Стираем с использованием гипоаллергенных шампуней." },
    { icon: "fa-sync", title: "Центрифуга", desc: "Отжимаем ковер на высоких оборотах почти досуха." },
    { icon: "fa-thermometer-half", title: "Сушка", desc: "Досушиваем в камере с контролем влажности и температуры." },
    { icon: "fa-box-open", title: "Доставка", desc: "Привозим чистый и ароматный ковер прямо к вашей двери." }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white reveal">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-cyan-900 mb-4">{t.processTitle}</h2>
          <p className="text-slate-500 max-w-2xl mx-auto italic">Как мы превращаем грязный ковер в абсолютно новый за 6 простых шагов</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="group p-10 bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-cyan-200 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 text-6xl font-black text-slate-50 opacity-10 group-hover:text-cyan-100 transition-colors">
                0{i + 1}
              </div>
              <div className="w-20 h-20 bg-cyan-50 rounded-2xl flex items-center justify-center text-3xl text-cyan-600 mb-8 group-hover:scale-110 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-500">
                <i className={`fas ${step.icon}`}></i>
              </div>
              <h4 className="text-2xl font-bold text-cyan-900 mb-4">{step.title}</h4>
              <p className="text-slate-600 leading-relaxed text-lg">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ru');
  const t = translations[lang];

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const handleScroll = () => {
      reveals.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) el.classList.add('active');
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar lang={lang} setLang={setLang} />
      
      <header id="home" className="pt-32 pb-20 px-4 reveal">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-cyan-900 leading-tight mb-8">
            {t.heroTitle}
          </h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">24 часа — и никакой пыли! Профессиональный сервис по чистке ковров в Кара-Куле. Свежесть в каждом ворсе!</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => document.getElementById('calculator')?.scrollIntoView({behavior:'smooth'})} className="bg-cyan-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl hover:bg-cyan-700 transition-all">
              {t.heroBtn}
            </button>
            <a href="tel:+996502542543" className="flex items-center gap-3 bg-white border border-slate-200 px-10 py-5 rounded-2xl font-bold hover:bg-slate-50 transition-colors">
              <i className="fas fa-phone text-cyan-600"></i>
              +996(502)-542-543
            </a>
          </div>
        </div>
      </header>

      <StatsSection lang={lang} />

      <WhyChooseUs lang={lang} />

      <section id="services" className="py-24 bg-white reveal">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-cyan-900 mb-16">{t.navServices}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 bg-blue-50 rounded-3xl group hover:bg-blue-100 transition-colors">
              <i className="fas fa-rug text-4xl text-cyan-600 mb-6 block"></i>
              <h3 className="text-2xl font-bold mb-4">Чистка ковров</h3>
              <p className="text-cyan-700 font-bold text-xl">100 сом/м²</p>
            </div>
            <div className="p-10 bg-cyan-50 rounded-3xl group hover:bg-cyan-100 transition-colors">
              <i className="fas fa-couch text-4xl text-cyan-600 mb-6 block"></i>
              <h3 className="text-2xl font-bold mb-4">Химчистка мебели</h3>
              <p className="text-cyan-700 font-bold text-xl">250 сом/м²</p>
            </div>
            <div className="p-10 bg-teal-50 rounded-3xl group hover:bg-teal-100 transition-colors">
              <i className="fas fa-spray-can text-4xl text-cyan-600 mb-6 block"></i>
              <h3 className="text-2xl font-bold mb-4">Удаление пятен</h3>
              <p className="text-cyan-700 font-bold text-xl">150 сом/м²</p>
            </div>
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 bg-slate-50 reveal">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Calculator lang={lang} />
            <BookingSection lang={lang} />
          </div>
        </div>
      </section>

      <ProcessSteps lang={lang} />

      <section id="prices" className="py-24 bg-white reveal">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-cyan-900 mb-16">{t.pricesTitle}</h2>
          <div className="rounded-3xl border border-slate-100 overflow-hidden shadow-xl">
            <table className="w-full text-left">
              <thead className="bg-cyan-600 text-white">
                <tr><th className="p-6">Услуга</th><th className="p-6 text-right">Цена</th></tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50"><td className="p-6">Химчистка ковра</td><td className="p-6 text-right font-bold">100 сом/м²</td></tr>
                <tr className="hover:bg-slate-50"><td className="p-6">Химчистка дивана</td><td className="p-6 text-right font-bold">1200 сом</td></tr>
                <tr className="hover:bg-slate-50"><td className="p-6">Химчистка кресла</td><td className="p-6 text-right font-bold">200 сом</td></tr>
                <tr className="hover:bg-slate-50"><td className="p-6">Удаление пятен</td><td className="p-6 text-right font-bold">150 сом/м²</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <OrderStatus lang={lang} />

      <section id="contacts" className="py-24 bg-white reveal">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold text-cyan-900 mb-8">{t.footerTitle}</h2>
            <div className="space-y-6 mb-10 text-lg">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600">
                   <i className="fas fa-phone"></i>
                </div>
                <div>
                  <p className="font-bold">+996(502)-542-543</p>
                  <p className="font-bold">+996(773)-142-942</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600">
                   <i className="fas fa-map-marker-alt"></i>
                </div>
                <p>ул. Ысмаила Курманалиева, 43, Кара-Куль</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600">
                   <i className="fas fa-clock"></i>
                </div>
                <p>Пн-Вс: 08:00 – 21:00</p>
              </div>
            </div>
            <div className="w-full h-96 rounded-3xl overflow-hidden border border-slate-100 shadow-inner">
              <iframe 
                src="https://yandex.ru/map-widget/v1/?ll=72.668482%2C41.628863&z=17&pt=72.668482%2C41.628863,pm2rdm" 
                width="100%" 
                height="100%" 
                frameBorder="0"
                title="Yandex Map Кара-Куль"
              ></iframe>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="p-12 bg-cyan-50 rounded-[3rem] text-center border border-cyan-100">
              <i className="fas fa-comment-dots text-6xl text-cyan-600 mb-6 block"></i>
              <h4 className="text-3xl font-bold text-cyan-900 mb-4">Нужна консультация?</h4>
              <p className="text-slate-600 mb-8 text-lg">Мы перезвоним вам в течение 5 минут или ответим в WhatsApp!</p>
              <div className="flex flex-col gap-4">
                <a href="tel:+996502542543" className="bg-cyan-600 text-white px-10 py-5 rounded-2xl font-bold shadow-lg hover:bg-cyan-700 transition-all text-xl">
                   Позвонить
                </a>
                <a href="https://wa.me/996502542543" className="bg-green-600 text-white px-10 py-5 rounded-2xl font-bold shadow-lg hover:bg-green-700 transition-all text-xl">
                   Написать в WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="py-12 border-t border-slate-100 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-6 bg-cyan-600 rounded flex items-center justify-center text-white text-xs">
              <i className="fas fa-soap"></i>
            </div>
            <span className="font-bold text-cyan-800 tracking-tight">КОВРОЛЮКС</span>
          </div>
          <p className="text-slate-400">© 2026 «Ковролюкс». Кара-Куль. Профессиональная стирка ковров.</p>
          <div className="mt-4 text-xs text-slate-400">
            Разработчик: <a href="https://t.me/aes3746" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline">Абдырасулов Эмир @aes3746</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;