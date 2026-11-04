document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    en: {
      tagline: "Everyday style. Made to feel like you.",
      currency: "CURRENCY", language: "LANGUAGE", help: "HELP",
      home: "Home", shop: "Shop", collections: "Collections",
      blog: "Blog", about: "About", contact: "Contact",
      shipping: "Shipping", returns: "Returns",
      faq: "Frequently Asked Questions",
      newCollection: "NEW COLLECTION",
      heroDescription: "Discover standout pieces designed for comfort, confidence, and everyday style.",
      getTheLook: "GET THE LOOK", chooseSize: "Choose your size:",
      viewProduct: "VIEW PRODUCT →",
      explore: "EXPLORE", shopByCategory: "Shop by Category",
      categoryOne: "CATEGORY ONE", categoryTwo: "CATEGORY TWO",
      categoryThree: "CATEGORY THREE", featured: "FEATURED",
      ourProducts: "Our Products", promoEyebrow: "YOUR PROMO TEXT",
      promoMessage: "Your Promotional<br>Message", discoverMore: "DISCOVER MORE",
      fromJournal: "FROM OUR JOURNAL", latestArticles: "Latest Articles",
      categoryDate: "CATEGORY · DATE",
      articleOne: "Blog Article Title One", articleTwo: "Blog Article Title Two",
      articleThree: "Blog Article Title Three",
      articleDescription: "Replace this text with your article description.",
      readMore: "READ MORE →", subscribe: "Subscribe to Our Newsletter",
      newsletterMessage: "Replace this with your newsletter message.",
      emailPlaceholder: "Your email address", subscribeButton: "SUBSCRIBE",
      brandDescription: "Replace this with your brand description.",
      information: "INFORMATION", yourAddress: "Your address",
      copyright: "© 2026 YOUR BRAND. All Rights Reserved.",
      searchPlaceholder: "Search your store..."
    },
    tn: {
      tagline: "Mokgwa wa letsatsi le letsatsi. O diretswe go ikutlwa jaaka wena.",
      currency: "MADI", language: "PUO", help: "THUSO",
      home: "Gae", shop: "Lebenkele", collections: "Dikgobokanyo",
      blog: "Maboko", about: "Ka ga rona", contact: "Ikgolaganye le rona",
      shipping: "Thomelo", returns: "Dithoto tse di busediwang",
      faq: "Dipotso tse di bodiwang gantsi",
      newCollection: "DIKUNO TSE DISHA",
      heroDescription: "Bona diaparo tse dintle tse di diretsweng boiketlo, boitshepo le mokgwa wa letsatsi le letsatsi.",
      getTheLook: "LEBEGA SENTLE", chooseSize: "Tlhopha bogolo jwa gago:",
      viewProduct: "BONA SEHELO →",
      explore: "TLHOTLHOMISA", shopByCategory: "Reka ka Setlhopha",
      categoryOne: "SETLHOPHA SA NTLHA", categoryTwo: "SETLHOPHA SA BOBEDI",
      categoryThree: "SETLHOPHA SA BORARO", featured: "TSE DI TLHOPHILWENG",
      ourProducts: "Dithoto tsa Rona", promoEyebrow: "MOLAETSA WA PHATLALATSO",
      promoMessage: "Molaetsa wa Gago<br>wa Phatlhalatso",
      discoverMore: "ITHUTE GO LE GONTsi",
      fromJournal: "GO TSWA MO DIKGANG TSA RONA",
      latestArticles: "Ditlhogo tsa Bosheng",
      categoryDate: "SETLHOPHA · LETSATSI",
      articleOne: "Setlhogo sa Ntlha", articleTwo: "Setlhogo sa Bobedi",
      articleThree: "Setlhogo sa Boraro",
      articleDescription: "Tsenya tlhaloso ya setlhogo sa gago fano.",
      readMore: "BALA GO YA PELE →",
      subscribe: "Ikwadise go Dikgang tsa Rona",
      newsletterMessage: "Tsenya molaetsa wa dikgang tsa gago fano.",
      emailPlaceholder: "Aterese ya gago ya imeile",
      subscribeButton: "IKWADISE",
      brandDescription: "Tsenya tlhaloso ya letshwao la gago fano.",
      information: "TSHEDIMOSETSO", yourAddress: "Aterese ya gago",
      copyright: "© 2026 LETSHWAO LA RONA. Ditshwanelo tsotlhe di sireleditswe.",
      searchPlaceholder: "Batla mo lebenkeleng..."
    },
    fr: {
      tagline: "Le style au quotidien. Pour vous ressembler.",
      currency: "DEVISE", language: "LANGUE", help: "AIDE",
      home: "Accueil", shop: "Boutique", collections: "Collections",
      blog: "Blog", about: "À propos", contact: "Contact",
      shipping: "Livraison", returns: "Retours",
      faq: "Questions fréquentes",
      newCollection: "NOUVELLE COLLECTION",
      heroDescription: "Découvrez des pièces remarquables, conçues pour le confort, la confiance et le style au quotidien.",
      getTheLook: "ADOPTEZ LE STYLE", chooseSize: "Choisissez votre taille :",
      viewProduct: "VOIR LE PRODUIT →",
      explore: "DÉCOUVRIR", shopByCategory: "Acheter par catégorie",
      categoryOne: "CATÉGORIE UN", categoryTwo: "CATÉGORIE DEUX",
      categoryThree: "CATÉGORIE TROIS", featured: "À LA UNE",
      ourProducts: "Nos produits", promoEyebrow: "VOTRE PROMOTION",
      promoMessage: "Votre message<br>promotionnel",
      discoverMore: "DÉCOUVRIR",
      fromJournal: "DE NOTRE JOURNAL", latestArticles: "Derniers articles",
      categoryDate: "CATÉGORIE · DATE",
      articleOne: "Titre du premier article",
      articleTwo: "Titre du deuxième article",
      articleThree: "Titre du troisième article",
      articleDescription: "Remplacez ce texte par la description de votre article.",
      readMore: "LIRE LA SUITE →",
      subscribe: "Abonnez-vous à notre newsletter",
      newsletterMessage: "Remplacez ce texte par votre message.",
      emailPlaceholder: "Votre adresse e-mail",
      subscribeButton: "S’ABONNER",
      brandDescription: "Remplacez ce texte par la description de votre marque.",
      information: "INFORMATIONS", yourAddress: "Votre adresse",
      copyright: "© 2026 VOTRE MARQUE. Tous droits réservés.",
      searchPlaceholder: "Rechercher dans la boutique..."
    }
  };

  const languageKey = "siteLanguage";

  function applyLanguage(language) {
    const dictionary = translations[language] || translations.en;

    document.documentElement.lang = language === "tn" ? "tn" : language;

    document.querySelectorAll("[data-i18n]").forEach(element => {
      const translation = dictionary[element.dataset.i18n];
      if (translation) element.innerHTML = translation;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
      const translation = dictionary[element.dataset.i18nPlaceholder];
      if (translation) element.placeholder = translation;
    });

    localStorage.setItem(languageKey, language);
  }

  document.querySelectorAll("[data-language]").forEach(button => {
    button.addEventListener("click", () => applyLanguage(button.dataset.language));
  });

  applyLanguage(localStorage.getItem(languageKey) || "en");
});