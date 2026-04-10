// Download 버튼: 실제 스토어 URL로 교체
const ANDROID_URL = "#";
const IOS_URL = "#";

const LANG_KEY = "blen-lang";

const I18N = {
  en: {
    docTitleHome: "Blen | Date, Chat & Meet New People",
    docTitleAbout: "About | Blen",
    navAria: "Main",
    navHome: "Home",
    navAbout: "About",
    langAria: "Language",
    heroAria: "Blen introduction",
    heroSubtitle:
      "AI understands your personality in depth, <br />and helps you find your most compatible match.",
    btnAndroid: "Android Download",
    btnIos: "iOS Download",
    downloadAria: "Download",
    heroImgAlt: "Blen illustration",
    aboutTitle: "About Blen",
    aboutLead:
      "Blen is a modern dating platform designed to help people build meaningful and genuine connections through thoughtful matching and communication.",
    aboutP2:
      "Our mission is to create a safe and engaging space where individuals can express themselves authentically and discover compatible partners based on values, lifestyle, and personality.",
    aboutApproach: "Our Approach",
    aboutApproachP1:
      "Blen focuses on quality over quantity. By leveraging intelligent matching systems and user-centered design, we aim to reduce superficial interactions and encourage deeper, more meaningful conversations.",
    aboutApproachP2:
      "We continuously improve our platform to ensure a positive user experience, prioritizing trust, safety, and authenticity.",
    aboutCompany: "Company Information",
    aboutCompanyHtml:
      "Blen is operated and managed by <strong>Aether Global LLC</strong>, a company dedicated to building innovative digital platforms that enhance human connection and everyday experiences.",
    aboutContact: "Contact",
    aboutContactHtml:
      'For inquiries or support, please contact us at: <a class="about__link" href="mailto:support@blenmatch.com">support@blenmatch.com</a>',
  },
  ko: {
    docTitleHome: "Blen | 데이트, 채팅, 새로운 만남",
    docTitleAbout: "소개 | Blen",
    navAria: "주 메뉴",
    navHome: "홈",
    navAbout: "소개",
    langAria: "언어",
    heroAria: "Blen 소개",
    heroSubtitle:
      "AI가 당신의 성향을 깊이 이해하고, <br />가장 잘 맞는 상대를 찾아드립니다.",
    btnAndroid: "안드로이드 다운로드",
    btnIos: "iOS 다운로드",
    downloadAria: "다운로드",
    heroImgAlt: "Blen 커플 일러스트 이미지",
    aboutTitle: "Blen 소개",
    aboutLead:
      "Blen은 신중한 매칭과 소통을 바탕으로 의미 있고 진정성 있는 인연을 만들 수 있도록 돕는 현대적인 데이팅 플랫폼입니다.",
    aboutP2:
      "우리의 미션은 사용자가 진솔하게 자신을 표현하고, 가치관·라이프스타일·성격을 바탕으로 잘 맞는 파트너를 발견할 수 있는 안전하고 매력적인 공간을 만드는 것입니다.",
    aboutApproach: "우리의 접근",
    aboutApproachP1:
      "Blen은 양보다 질을 중시합니다. 지능형 매칭과 사용자 중심의 디자인을 통해 피상적인 만남을 줄이고, 보다 깊고 의미 있는 대화를 이끌고자 합니다.",
    aboutApproachP2:
      "믿음, 안전, 진정성을 우선하며 긍정적인 사용자 경험을 위해 플랫폼을 지속적으로 개선합니다.",
    aboutCompany: "회사 정보",
    aboutCompanyHtml:
      "Blen은 <strong>Aether Global LLC</strong>가 운영·관리하며, 사람과 사람의 연결과 일상 경험을 풍부하게 하는 혁신적인 디지털 플랫폼을 만드는 데 전념하는 회사입니다.",
    aboutContact: "문의",
    aboutContactHtml:
      '문의나 지원이 필요하시면 다음으로 연락해 주세요: <a class="about__link" href="mailto:support@blenmatch.com">support@blenmatch.com</a>',
  },
};

function getLang() {
  const saved = localStorage.getItem(LANG_KEY);
  if (saved === "en" || saved === "ko") return saved;
  return "en";
}

function setDocumentTitle(lang) {
  const page = document.body.getAttribute("data-page");
  if (page === "about") {
    document.title = I18N[lang].docTitleAbout;
  } else {
    document.title = I18N[lang].docTitleHome;
  }
}

function applyI18n(lang) {
  const t = I18N[lang];
  if (!t) return;

  document.documentElement.lang = lang === "ko" ? "ko" : "en";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key && t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (key && t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    const attr = el.getAttribute("data-i18n-attr");
    const key = el.getAttribute("data-i18n-key");
    if (attr && key && t[key] !== undefined) {
      el.setAttribute(attr, t[key]);
    }
  });

  setDocumentTitle(lang);

  document.querySelectorAll(".site-lang__btn").forEach((btn) => {
    const isActive = btn.getAttribute("data-set-lang") === lang;
    btn.classList.toggle("site-lang__btn--active", isActive);
    btn.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
}

function bindLangSwitcher() {
  document.querySelectorAll(".site-lang__btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-set-lang");
      if (lang === "en" || lang === "ko") {
        localStorage.setItem(LANG_KEY, lang);
        applyI18n(lang);
      }
    });
  });
}

function bindStoreLinks() {
  document.querySelectorAll(".store-link").forEach((link) => {
    const store = link.getAttribute("data-store");
    if (store === "android") link.href = ANDROID_URL;
    if (store === "ios") link.href = IOS_URL;
  });
}

function init() {
  const lang = getLang();
  applyI18n(lang);
  bindLangSwitcher();
  bindStoreLinks();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
