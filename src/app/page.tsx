"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const translations = {
  uz: {
    navFeatures: "XUSUSIYATLAR",
    navAbout: "BIZ HAQIMIZDA",
    navContact: "BOG'LANISH",
    heroTitle: "YUQORI SIFAT",
    heroSubtitle: "ICHKI DIZAYN VA PLITKA QOPLAMA ISHLARI",
    introTitle: "Tajriba va Mahorat.",
    introText: "Xush kelibsiz AQK kompaniyasiga. Biz sizning eksklyuziv plitka ishlari, devor panellari va to'liq ta'mirlar bo'yicha ishonchli hamkoringizmiz.",
    introSpan: "O'zbekistondagi 5.000 dan ortiq mamnun mijozlarimiz bilan biz doimo yuqori sifat va aniqlikni kafolatlaymiz.",
    yearLabel: "YIL",
    yearValue: "2015 O'ZBEKISTON",
    cityValue: "ANDIJON",
    servicesSub: "EXPERTISE & HANDWERK",
    servicesTitle: "BIZNING XIZMATLAR",
    s1Title: "PLITKA ISHLARI",
    s1Sub: "DEVOR & POL",
    s1Desc: "Sifatli keramik va tabiiy toshlarni yotqizish. Biz vanna, oshxona va yashash xonalari uchun uzoq muddat xizmat qiluvchi estetik qoplamalar yaratamiz.",
    s2Title: "DEVOR PANELLARI",
    s2Sub: "DIZAYN & AKUSTIKA",
    s2Desc: "Yuqori sifatli devor qoplamalari va dekorativ panellar. Xonalaringizga xarakter va iliqlik bag'ishlovchi individual yechimlar.",
    s3Title: "RENOVIATSIYA",
    s3Sub: "TO'LIQ TA'MIRLASH",
    s3Desc: "Rejalashtirishdan tortib kalit topshirishgacha. Biz sizning butun ichki dizayn qurilish jarayonini samarali va toza tarzda amalga oshiramiz.",
    viewProject: "LOYIHANI KO'RISH",
    partnerTitle: "Sizning ishonchli hamkoringiz",
    partnerDesc: "Asosiy maqsadimiz sizning vizyoningizni reallikka aylantirishdir. Vaqtida topshirish va aniqlikka qaratilgan e'tibor tufayli biz shu kunga qadar ",
    partnerStrong: "5.000 ta loyihani",
    partnerEnd: " muvaffaqiyatli yakunladik.",
    ctaSub: "O'ZGARISHGA TAYYORMISIZ?",
    ctaTitle: "TAKLIF OLISH",
    ctaAddress: "ANDIJON SH, KAMSAMOL KO'LI 45",
    footerCopy: "© 2025 AQK O'ZBEKISTON",
    langSelectTitle: "TILNI TANLASH"
  },
  ru: {
    navFeatures: "УСЛУГИ",
    navAbout: "О НАС",
    navContact: "КОНТАКТЫ",
    heroTitle: "ВЫСШЕЕ КАЧЕСТВО",
    heroSubtitle: "ДИЗАЙН ИНТЕРЬЕРА И УКЛАДКА ПЛИТКИ",
    introTitle: "Опыт и Мастерство.",
    introText: "Добро пожаловать в компанию AQK. Мы ваш надежный партнер по эксклюзивной укладке плитки, стеновым панелям и полному ремонту.",
    introSpan: "С более чем 5000 довольных клиентов в Узбекистане, мы всегда гарантируем высокое качество и точность.",
    yearLabel: "ГОД",
    yearValue: "2015 УЗБЕКИСТАН",
    cityValue: "АНДИЖАН",
    servicesSub: "ЭКСПЕРТИЗА И МАСТЕРСТВО",
    servicesTitle: "НАШИ УСЛУГИ",
    s1Title: "УКЛАДКА ПЛИТКИ",
    s1Sub: "СТЕНЫ И ПОЛ",
    s1Desc: "Качественная укладка керамики и натурального камня. Мы создаем долговечные эстетичные покрытия для ванных комнат, кухонь и жилых помещений.",
    s2Title: "СТЕНОВЫЕ ПАНЕЛИ",
    s2Sub: "ДИЗАЙН И АКУСТИКА",
    s2Desc: "Высококачественные настенные покрытия и декоративные панели. Индивидуальные решения, придающие вашим комнатам характер и теплоту.",
    s3Title: "РЕНОВАЦИЯ",
    s3Sub: "ПОЛНЫЙ РЕМОНТ",
    s3Desc: "От планирования до сдачи под ключ. Мы реализуем весь процесс проектирования вашего интерьера эффективно и чисто.",
    viewProject: "СМОТРЕТЬ ПРОЕКТ",
    partnerTitle: "Ваш надежный партнер",
    partnerDesc: "Наша главная цель — воплотить ваше видение в реальность. Благодаря вниманию к срокам и точности, на сегодняшний день мы ",
    partnerStrong: "успешно завершили 5 000 проектов.",
    partnerEnd: "",
    ctaSub: "ГОТОВЫ К ПЕРЕМЕНАМ?",
    ctaTitle: "ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ",
    ctaAddress: "Г. АНДИЖАН, УЛ. КОМСОМОЛЬСКОЕ ОЗЕРО 45",
    footerCopy: "© 2025 AQK УЗБЕКИСТАН",
    langSelectTitle: "ВЫБОР ЯЗЫКА"
  },
  en: {
    navFeatures: "FEATURES",
    navAbout: "ABOUT US",
    navContact: "CONTACT",
    heroTitle: "HIGH QUALITY",
    heroSubtitle: "INTERIOR DESIGN & TILING WORKS",
    introTitle: "Experience and Skill.",
    introText: "Welcome to AQK company. We are your reliable partner for exclusive tiling, wall panels, and full renovation services.",
    introSpan: "With over 5,000 satisfied customers in Uzbekistan, we always guarantee high quality and precision.",
    yearLabel: "YEAR",
    yearValue: "2015 UZBEKISTAN",
    cityValue: "ANDIJAN",
    servicesSub: "EXPERTISE & CRAFTSMANSHIP",
    servicesTitle: "OUR SERVICES",
    s1Title: "TILING WORKS",
    s1Sub: "WALL & FLOOR",
    s1Desc: "Quality ceramic and natural stone laying. We create long-lasting aesthetic finishes for bathrooms, kitchens, and living rooms.",
    s2Title: "WALL PANELS",
    s2Sub: "DESIGN & ACOUSTICS",
    s2Desc: "High-quality wall coverings and decorative panels. Individual solutions that bring character and warmth to your rooms.",
    s3Title: "RENOVATION",
    s3Sub: "FULL REMODELING",
    s3Desc: "From planning to turnkey delivery. We implement your entire interior design construction process efficiently and cleanly.",
    viewProject: "VIEW PROJECT",
    partnerTitle: "Your reliable partner",
    partnerDesc: "Our primary goal is to turn your vision into reality. Thanks to our focus on deadlines and precision, we have ",
    partnerStrong: "successfully completed 5,000 projects",
    partnerEnd: " to date.",
    ctaSub: "READY FOR CHANGE?",
    ctaTitle: "GET AN OFFER",
    ctaAddress: "ANDIJAN CITY, KAMSAMOL LAKE 45",
    footerCopy: "© 2025 AQK UZBEKISTON",
    langSelectTitle: "SELECT LANGUAGE"
  }
};

export default function Home() {
  const [langOpen, setLangOpen] = useState(true);
  const [currentLang, setCurrentLang] = useState('uz');

  const t = translations[currentLang as keyof typeof translations];

  return (
    <main>

      {/* LANGUAGE SELECTOR PANEL */}
      <AnimatePresence>
        {langOpen && (
          <motion.div
            className="lang-panel"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50, transition: { duration: 0.2 } }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          >
            <div className="lang-header">
              <span className="lang-title">{t.langSelectTitle}</span>
              <button className="lang-close" onClick={() => setLangOpen(false)}>×</button>
            </div>

            <div className="lang-list">
              <button
                className={`lang-btn ${currentLang === 'uz' ? 'active' : ''}`}
                onClick={() => setCurrentLang('uz')}
              >
                {currentLang === 'uz' && <span className="lang-dot"></span>}
                <span style={currentLang !== 'uz' ? { paddingLeft: '18px' } : {}}>O'zbek (UZ)</span>
              </button>
              <button
                className={`lang-btn ${currentLang === 'ru' ? 'active' : ''}`}
                onClick={() => setCurrentLang('ru')}
              >
                {currentLang === 'ru' && <span className="lang-dot"></span>}
                <span style={currentLang !== 'ru' ? { paddingLeft: '18px' } : {}}>Русский</span>
              </button>
              <button
                className={`lang-btn ${currentLang === 'en' ? 'active' : ''}`}
                onClick={() => setCurrentLang('en')}
              >
                {currentLang === 'en' && <span className="lang-dot"></span>}
                <span style={currentLang !== 'en' ? { paddingLeft: '18px' } : {}}>English</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-brand">AQK.</div>
        <div className="nav-links">
          <a href="#xizmatlar">{t.navFeatures}</a>
          <a href="#biz-haqimizda">{t.navAbout}</a>
          <a href="#boglanish">{t.navContact}</a>
        </div>
      </nav>

      {/* SECTION 1: HERO */}
      <section className="hero">
        <div className="hero-content">
          <motion.h1
            key={`${currentLang}-title`}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="hero-title"
          >
            {t.heroTitle}
          </motion.h1>
          <motion.p
            key={`${currentLang}-subtitle`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hero-subtitle"
          >
            {t.heroSubtitle}
          </motion.p>
        </div>
      </section>

      {/* SECTION 2: TAJRIBA */}
      <section id="biz-haqimizda" className="sec-intro">
        <div className="intro-grid">
          <motion.h2
            key={`${currentLang}-introTitle`}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="intro-title"
          >
            {t.introTitle}
          </motion.h2>
          <motion.p
            key={`${currentLang}-introText`}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="intro-text"
          >
            {t.introText} <span>{t.introSpan}</span>
          </motion.p>
        </div>

        <div className="intro-bottom">
          <div style={{ display: 'flex', gap: '2rem' }}>
            <div className="intro-label">{t.yearLabel}</div>
            <div className="intro-value">{t.yearValue}</div>
          </div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <div className="intro-label">/</div>
            <div className="intro-value">{t.cityValue}</div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICES */}
      <section id="xizmatlar" className="sec-services">
        <div className="services-header">
          <div className="sh-sub">{t.servicesSub}</div>
          <motion.h2
            key={`${currentLang}-servicesTitle`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="sh-title"
          >
            {t.servicesTitle}
          </motion.h2>
        </div>

        <div className="cards-container">
          {/* Card 01 */}
          <motion.div
            className="s-card"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="sc-content">
              <div className="sc-num num-01">01</div>
              <div className="sc-title">{t.s1Title}</div>
              <div className="sc-sub">{t.s1Sub}</div>
              <div className="sc-desc">{t.s1Desc}</div>
              <a href="#" className="sc-link">{t.viewProject}</a>
            </div>
            <div className="sc-image">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1500&auto=format&fit=crop" alt="Tiling" />
            </div>
          </motion.div>

          {/* Card 02 */}
          <motion.div
            className="s-card"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="sc-content">
              <div className="sc-num num-02">02</div>
              <div className="sc-title">{t.s2Title}</div>
              <div className="sc-sub">{t.s2Sub}</div>
              <div className="sc-desc">{t.s2Desc}</div>
              <a href="#" className="sc-link">{t.viewProject}</a>
            </div>
            <div className="sc-image">
              <img src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=2000&auto=format&fit=crop" alt="Premium Panels" />
            </div>
          </motion.div>

          {/* Card 03 */}
          <motion.div
            className="s-card"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="sc-content">
              <div className="sc-num num-03">03</div>
              <div className="sc-title">{t.s3Title}</div>
              <div className="sc-sub">{t.s3Sub}</div>
              <div className="sc-desc">{t.s3Desc}</div>
              <a href="#" className="sc-link">{t.viewProject}</a>
            </div>
            <div className="sc-image">
              <img src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=1500&auto=format&fit=crop" alt="Renovation" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: PARTNER */}
      <section className="sec-partner">
        <motion.h2
          key={`${currentLang}-partnerTitle`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="partner-title"
        >
          {t.partnerTitle}
        </motion.h2>
        <motion.p
          key={`${currentLang}-partnerDesc`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="partner-desc"
        >
          {t.partnerDesc} <strong>{t.partnerStrong}</strong> {t.partnerEnd}
        </motion.p>
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: 100 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="partner-line"
        />
      </section>

      {/* SECTION 5: CTA / FOOTER */}
      <section id="boglanish" className="sec-cta">
        <div className="cta-content">
          <div className="cta-sub">{t.ctaSub}</div>
          <motion.h2
            key={`${currentLang}-ctaTitle`}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="cta-title"
          >
            {t.ctaTitle}
          </motion.h2>
          <div className="cta-contact">
            <a href="tel:+998952645664">+998 95 264 56 64</a>
            <a href="#">{t.ctaAddress}</a>
          </div>
          <div className="footer-bottom">
            {t.footerCopy}
          </div>
        </div>
      </section>

    </main>
  );
}
