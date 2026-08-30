(() => {
  const translations = {
    ru: {
      code: "RU",
      locale: "ru-RU",
      currency: "RUB",
      region: "Россия",
      rate: 1,
      pricePrefix: "от ",
      menu_about: "О нас",
      menu_process: "Как делаем",
      menu_catalog: "Каталог",
      menu_works: "Работы",
      menu_contact: "Связаться",
      header_cta: "Обсудить комплект ↗",
      hero_kicker: "FORGED WHEELS / CUSTOM FITMENT",
      hero_title_1: "КОВАНЫЕ",
      hero_title_2: "ДИСКИ",
      hero_text: "Под конкретную машину, посадку и стиль<br>без универсальных решений",
      hero_button: "Работы",
      about_label: "О НАС",
      about_title_1: "НЕ ПРОСТО",
      about_title_2: "ДИСКИ",
      about_title_3: "ПОД МАШИНУ",
      about_p1: "Подбираем геометрию, вылет, ширину и визуальный баланс так, чтобы комплект выглядел частью автомобиля, а не случайной деталью",
      about_p2: "Работа начинается с машины и задачи клиента. Уже потом — форма спиц, поверхность, цвет и финальный характер комплекта",
      about_link: "Как проходит работа",
      process_label: "КАК ДЕЛАЕМ",
      works_label: "РАБОТЫ",
      contact_label: "СВЯЗАТЬСЯ",
      catalog_link: "Каталог и цены",
      telegram: "Telegram",
      catalog_main: "Главная",
      catalog_title: "КАТАЛОГ",
      catalog_title_2: "ДИСКОВ",
      catalog_intro: "Здесь не готовые универсальные размеры, а направления дизайна. Цена зависит от диаметра, ширины, сложности обработки и покрытия",
      catalog_scroll: "Смотреть модели ↓",
      categories: "КАТЕГОРИИ",
      choose_direction_1: "ВЫБЕРИ",
      choose_direction_2: "НАПРАВЛЕНИЕ",
      category_help: "Фильтры нужны скорее для ориентира. Финальные параметры считаются под конкретный автомобиль",
      all: "Все",
      request_quote: "Запросить расчёт ↗",
      prices: "ЦЕНЫ",
      price_title_1: "ИЗ ЧЕГО",
      price_title_2: "СКЛАДЫВАЕТСЯ ЦЕНА",
      price_help: "Цены ниже — ориентир, а не публичная оферта. Итог зависит от автомобиля и задачи",
      size: "Размер",
      base_set: "Базовый комплект",
      complex_design: "Сложный дизайн",
      calculation: "по расчёту",
      quote_label: "РАСЧЁТ",
      quote_title_1: "НУЖНА",
      quote_title_2: "ТОЧНАЯ ЦЕНА?",
      quote_text: "Напиши модель машины, год, желаемый диаметр и что нравится по дизайну. Этого достаточно для первого расчёта",
      footer_home: "На главную ↑",
      region_label: "Регион"
    },
    en: {
      code: "EN",
      locale: "en-US",
      currency: "USD",
      region: "Global",
      rate: 0.012,
      pricePrefix: "from ",
      menu_about: "About",
      menu_process: "Process",
      menu_catalog: "Catalog",
      menu_works: "Projects",
      menu_contact: "Contact",
      header_cta: "Build your set ↗",
      hero_kicker: "FORGED WHEELS / CUSTOM FITMENT",
      hero_title_1: "FORGED",
      hero_title_2: "WHEELS",
      hero_text: "Built around your car, fitment and style<br>not a universal catalog solution",
      hero_button: "Projects",
      about_label: "ABOUT",
      about_title_1: "MORE THAN",
      about_title_2: "WHEELS",
      about_title_3: "FOR YOUR CAR",
      about_p1: "We tune geometry, offset, width and visual balance so the set feels like part of the car rather than an added accessory",
      about_p2: "The process starts with the car and the goal. Spoke design, finish, color and character come after that",
      about_link: "How it works",
      process_label: "PROCESS",
      works_label: "PROJECTS",
      contact_label: "CONTACT",
      catalog_link: "Catalog & pricing",
      telegram: "Telegram",
      catalog_main: "Home",
      catalog_title: "WHEEL",
      catalog_title_2: "CATALOG",
      catalog_intro: "These are design directions rather than universal off-the-shelf sizes. Final pricing depends on diameter, width, machining complexity and finish",
      catalog_scroll: "Browse models ↓",
      categories: "CATEGORIES",
      choose_direction_1: "CHOOSE",
      choose_direction_2: "A DIRECTION",
      category_help: "Filters are for orientation. Final specifications are calculated for the exact vehicle",
      all: "All",
      request_quote: "Request a quote ↗",
      prices: "PRICING",
      price_title_1: "WHAT",
      price_title_2: "SETS THE PRICE",
      price_help: "The prices below are estimates, not a public offer. Final cost depends on the vehicle and specification",
      size: "Size",
      base_set: "Base set",
      complex_design: "Complex design",
      calculation: "on request",
      quote_label: "QUOTE",
      quote_title_1: "NEED AN",
      quote_title_2: "EXACT PRICE?",
      quote_text: "Send the car model, year, preferred diameter and a few references you like. That is enough for a first estimate",
      footer_home: "Back home ↑",
      region_label: "Region"
    },
    ja: {
      code: "日本語",
      locale: "ja-JP",
      currency: "JPY",
      region: "日本",
      rate: 1.75,
      pricePrefix: "¥",
      menu_about: "ブランド",
      menu_process: "製作工程",
      menu_catalog: "カタログ",
      menu_works: "実績",
      menu_contact: "お問い合わせ",
      header_cta: "見積もり相談 ↗",
      hero_kicker: "FORGED WHEELS / CUSTOM FITMENT",
      hero_title_1: "鍛造",
      hero_title_2: "ホイール",
      hero_text: "車両・フィットメント・スタイルに合わせて設計<br>汎用品ではない一台ごとのセット",
      hero_button: "実績",
      about_label: "ブランド",
      about_title_1: "ただの",
      about_title_2: "ホイール",
      about_title_3: "ではない",
      about_p1: "オフセット、幅、ジオメトリー、見た目のバランスまで車両に合わせて設計し、後付け感のない仕上がりを目指します",
      about_p2: "最初に見るのは車両と目的です。その後にスポーク形状、表面仕上げ、カラー、全体のキャラクターを決めます",
      about_link: "製作工程を見る",
      process_label: "製作工程",
      works_label: "実績",
      contact_label: "お問い合わせ",
      catalog_link: "カタログ・価格",
      telegram: "Telegram",
      catalog_main: "ホーム",
      catalog_title: "ホイール",
      catalog_title_2: "カタログ",
      catalog_intro: "掲載しているのは汎用サイズではなくデザインの方向性です。価格は径、幅、加工難易度、仕上げによって変わります",
      catalog_scroll: "モデルを見る ↓",
      categories: "カテゴリー",
      choose_direction_1: "スタイルを",
      choose_direction_2: "選ぶ",
      category_help: "フィルターは参考用です。最終仕様は車両ごとに算出します",
      all: "すべて",
      request_quote: "見積もりを依頼 ↗",
      prices: "価格",
      price_title_1: "価格を",
      price_title_2: "決める要素",
      price_help: "下記は目安価格です。最終価格は車両と仕様によって変わります",
      size: "サイズ",
      base_set: "ベースセット",
      complex_design: "複雑なデザイン",
      calculation: "要見積もり",
      quote_label: "見積もり",
      quote_title_1: "正確な価格が",
      quote_title_2: "必要ですか？",
      quote_text: "車種、年式、希望サイズ、好みの参考画像を送ってください。初回見積もりにはそれで十分です",
      footer_home: "ホームへ ↑",
      region_label: "地域"
    },
    zh: {
      code: "中文",
      locale: "zh-CN",
      currency: "CNY",
      region: "中国",
      rate: 0.086,
      pricePrefix: "¥",
      menu_about: "关于我们",
      menu_process: "制造流程",
      menu_catalog: "产品目录",
      menu_works: "案例",
      menu_contact: "联系我们",
      header_cta: "咨询定制 ↗",
      hero_kicker: "FORGED WHEELS / CUSTOM FITMENT",
      hero_title_1: "锻造",
      hero_title_2: "轮毂",
      hero_text: "针对具体车型、姿态与风格进行设计<br>不是通用目录里的标准方案",
      hero_button: "案例",
      about_label: "关于我们",
      about_title_1: "不只是",
      about_title_2: "一套轮毂",
      about_title_3: "而是整车的一部分",
      about_p1: "我们会根据车辆调整几何、ET值、宽度与视觉比例，让轮毂真正融入整车，而不是像后加上的配件",
      about_p2: "设计从车辆与目标开始，之后才确定辐条造型、表面处理、颜色与最终风格",
      about_link: "了解制造流程",
      process_label: "制造流程",
      works_label: "案例",
      contact_label: "联系我们",
      catalog_link: "产品目录与价格",
      telegram: "Telegram",
      catalog_main: "首页",
      catalog_title: "轮毂",
      catalog_title_2: "产品目录",
      catalog_intro: "这里展示的是设计方向，而不是通用现货尺寸。最终价格会根据直径、宽度、加工复杂度与表面处理而变化",
      catalog_scroll: "查看款式 ↓",
      categories: "分类",
      choose_direction_1: "选择",
      choose_direction_2: "你的风格",
      category_help: "筛选仅用于快速浏览，最终参数会根据具体车辆单独计算",
      all: "全部",
      request_quote: "获取报价 ↗",
      prices: "价格",
      price_title_1: "价格",
      price_title_2: "由什么决定",
      price_help: "以下价格仅供参考，并非最终报价。最终价格取决于车型与具体配置",
      size: "尺寸",
      base_set: "基础套装",
      complex_design: "复杂设计",
      calculation: "单独报价",
      quote_label: "报价",
      quote_title_1: "需要",
      quote_title_2: "准确价格？",
      quote_text: "告诉我们车型、年份、期望尺寸以及喜欢的设计参考，就足够进行第一次报价",
      footer_home: "返回首页 ↑",
      region_label: "地区"
    }
  };

  const regionPricing = {
    ru: { locale: "ru-RU", currency: "RUB", rate: 1, rounding: 1000 },
    en: { locale: "en-US", currency: "USD", rate: 0.012, rounding: 10 },
    ja: { locale: "ja-JP", currency: "JPY", rate: 1.75, rounding: 1000 },
    zh: { locale: "zh-CN", currency: "CNY", rate: 0.086, rounding: 10 }
  };

  function detectLanguage() {
    const saved = localStorage.getItem("forged-lang");
    if (saved && translations[saved]) return saved;
    const lang = (navigator.language || "ru").toLowerCase();
    if (lang.startsWith("ja")) return "ja";
    if (lang.startsWith("zh")) return "zh";
    if (lang.startsWith("en")) return "en";
    return "ru";
  }

  function formatPrice(rub, lang, from=true) {
    if (rub === null || rub === undefined) return "";
    const cfg = regionPricing[lang];
    const raw = rub * cfg.rate;
    const rounded = Math.round(raw / cfg.rounding) * cfg.rounding;
    const formatted = new Intl.NumberFormat(cfg.locale, {
      style: "currency",
      currency: cfg.currency,
      maximumFractionDigits: 0
    }).format(rounded);

    if (lang === "ja" || lang === "zh") {
      return (from ? "¥" : "") + formatted.replace("￥","").replace("¥","");
    }
    return (from ? translations[lang].pricePrefix : "") + formatted;
  }

  function applyLanguage(lang) {
    const t = translations[lang] || translations.ru;
    document.documentElement.lang = lang === "ja" ? "ja" : (lang === "zh" ? "zh-CN" : lang);

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (t[key] !== undefined) el.textContent = t[key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach(el => {
      const key = el.dataset.i18nHtml;
      if (t[key] !== undefined) el.innerHTML = t[key];
    });

    document.querySelectorAll("[data-price-rub]").forEach(el => {
      const rub = Number(el.dataset.priceRub);
      el.textContent = formatPrice(rub, lang, true);
    });

    document.querySelectorAll("[data-price-rub-plain]").forEach(el => {
      const rub = Number(el.dataset.priceRubPlain);
      el.textContent = formatPrice(rub, lang, false);
    });

    document.querySelectorAll("[data-locale-label]").forEach(el => {
      el.textContent = `${t.code} · ${regionPricing[lang].currency}`;
    });

    document.querySelectorAll(".locale-option").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    localStorage.setItem("forged-lang", lang);
    window.dispatchEvent(new CustomEvent("forged-language-change", { detail: { lang } }));
  }

  function setupSwitchers() {
    document.querySelectorAll(".locale-switcher").forEach(sw => {
      const button = sw.querySelector(".locale-button");
      button?.addEventListener("click", e => {
        e.stopPropagation();
        document.querySelectorAll(".locale-switcher").forEach(other => {
          if (other !== sw) other.classList.remove("open");
        });
        sw.classList.toggle("open");
      });
    });

    document.querySelectorAll(".locale-option").forEach(btn => {
      btn.addEventListener("click", () => {
        applyLanguage(btn.dataset.lang);
        document.querySelectorAll(".locale-switcher").forEach(sw => sw.classList.remove("open"));
      });
    });

    document.addEventListener("click", () => {
      document.querySelectorAll(".locale-switcher").forEach(sw => sw.classList.remove("open"));
    });
  }

  window.ForgedI18n = { applyLanguage, formatPrice, detectLanguage };

  document.addEventListener("DOMContentLoaded", () => {
    setupSwitchers();
    applyLanguage(detectLanguage());
  });
})();
