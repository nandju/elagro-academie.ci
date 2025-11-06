export type Language = "fr" | "en" | "es";

export interface Translations {
  // Navigation
  signIn: string;
  
  // Hero Section
  headline: string;
  subheadline: string;
  description: string;
  emailPlaceholder: string;
  cta: string;
  success: string;
  error: string;
  invalidEmail: string;
  sending: string;
  
  // Features Section
  featuresTitle: string;
  featuresSubtitle: string;
  features: {
    title: string;
    description: string;
  }[];
  startNow: string;
  
  // Specialties Section
  specialtiesTitle: string;
  specialtiesSubtitle: string;
  learnMore: string;
  startTraining: string;
  
  // FAQ Section
  faqTitle: string;
  faqs: {
    question: string;
    answer: string;
  }[];
  
  // Footer
  footerCta: string;
  footerDescription: string;
  contactUs: string;
  footerLinks: {
    column1: { label: string; href: string }[];
    column2: { label: string; href: string }[];
    column3: { label: string; href: string }[];
    column4: { label: string; href: string }[];
  };
  companyInfo: string;
  reCAPTCHA: string;
  learnMoreLink: string;
  
  // Pricing Section
  pricingTitle: string;
  pricingSubtitle: string;
  pricingPlans: {
    free: {
      name: string;
      price: string;
      period: string;
      description: string;
      features: string[];
      cta: string;
    };
    pro: {
      name: string;
      price: string;
      period: string;
      description: string;
      features: string[];
      cta: string;
      badge?: string;
      trial?: string;
    };
    enterprise: {
      name: string;
      price: string;
      period: string;
      description: string;
      features: string[];
      cta: string;
    };
  };
  comparePlansTitle: string;
  comparePlansSubtitle: string;
  compareFeaturesLabel: string;
  compareFeatures: {
    label: string;
    free: string | boolean;
    pro: string | boolean;
    enterprise: string | boolean;
  }[];
  complianceTitle: string;
  complianceSubtitle: string;
  complianceCards: {
    title: string;
    badge: string;
    description: string;
    cta: string;
  }[];
}

export const translations: Record<Language, Translations> = {
  fr: {
    // Navigation
    signIn: "Se connecter",
    
    // Hero Section
    headline: "Formation et conseil en élevage",
    subheadline: "J’apprend, je comprend, j’applique, je préserve",
    description: "Rejoignez ELAGRO ACADEMY pour développer vos compétences en élevage et maîtriser les meilleures pratiques pour le bien-être et la productivité animale.",
    emailPlaceholder: "Adresse e-mail",
    cta: "Rejoins nous",
    success: "Merci ! Nous vous contacterons bientôt.",
    error: "Une erreur s'est produite. Veuillez réessayer.",
    invalidEmail: "Veuillez entrer une adresse e-mail valide.",
    sending: "Envoi en cours...",
    
    // Features Section
    featuresTitle: "Encore plus de raisons de vous abonner",
    featuresSubtitle: "ELAGRO ACADEMY - Votre plateforme d'apprentissage agricole",
    features: [
      {
        title: "Formation en Ligne",
        description: "Accédez à des formations agricoles de qualité depuis votre smartphone, tablette ou ordinateur, où que vous soyez."
      },
      {
        title: "Contenus Téléchargeables",
        description: "Téléchargez vos cours et guides pratiques pour les consulter hors connexion, à tout moment dans vos champs."
      },
      {
        title: "Expertise Locale",
        description: "Bénéficiez de conseils adaptés à votre région et de solutions agricoles durables et rentables."
      },
      {
        title: "Certification Professionnelle",
        description: "Obtenez des certifications reconnues et rejoignez une communauté d'agriculteurs innovants."
      }
    ],
    startNow: "Commencer maintenant",
    
    // Specialties Section
    specialtiesTitle: "Tendances actuelles",
    specialtiesSubtitle: "Découvrez nos formations spécialisées en agriculture et élevage",
    learnMore: "En savoir plus",
    startTraining: "Commencer la formation",
    
    // FAQ Section
    faqTitle: "Foire aux questions",
    faqs: [
      {
        question: "Qu'est-ce qu'ELAGRO ACADEMY ?",
        answer: "ELAGRO ACADEMY est une plateforme numérique d'apprentissage, de conseil et de certification dédiée aux acteurs du monde agricole et de l'élevage. Elle combine savoir scientifique, expertise locale et technologies innovantes pour accompagner les producteurs vers une agriculture durable, rentable et respectueuse de la santé."
      },
      {
        question: "Combien coûte l'abonnement à ELAGRO ACADEMY ?",
        answer: "Nous proposons plusieurs formules d'abonnement adaptées à vos besoins : un plan mensuel, un plan trimestriel avec réduction, et un plan annuel offrant le meilleur rapport qualité-prix. Contactez-nous pour découvrir l'offre qui correspond à votre exploitation."
      },
      {
        question: "Où puis-je accéder aux formations ?",
        answer: "Vous pouvez accéder à ELAGRO ACADEMY depuis n'importe quel appareil connecté à Internet : smartphone, tablette ou ordinateur. Téléchargez également nos contenus pour les consulter hors connexion directement depuis vos champs."
      },
      {
        question: "Comment puis-je annuler mon abonnement ?",
        answer: "Vous pouvez annuler votre abonnement à tout moment depuis votre espace personnel dans les paramètres de compte. Aucun frais de résiliation n'est appliqué, et vous conservez l'accès jusqu'à la fin de votre période d'abonnement payée."
      },
      {
        question: "Quelles formations puis-je suivre sur ELAGRO ACADEMY ?",
        answer: "Notre catalogue propose des formations en agriculture durable, techniques d'élevage, gestion d'exploitation, agroécologie, utilisation de fertilisants naturels, santé animale, transformation des produits agricoles, et bien plus encore. De nouveaux contenus sont ajoutés régulièrement."
      },
      {
        question: "Les certifications sont-elles reconnues officiellement ?",
        answer: "Oui, nos certifications sont reconnues par les organisations agricoles partenaires et valorisent votre expertise professionnelle. Elles attestent de vos compétences acquises et peuvent améliorer votre crédibilité auprès des acheteurs et institutions."
      }
    ],
    
    // Footer
    footerCta: "Commencer",
    footerDescription: "Prêt à développer vos compétences en élevage ? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre abonnement.",
    contactUs: "Des questions ? Contactez-nous.",
    footerLinks: {
      column1: [
        { label: 'FAQ', href: '#faq' },
        { label: 'Relations Partenaires', href: '#partners' },
        { label: 'Confidentialité', href: '#privacy' },
        { label: 'Test de connexion', href: '/auth/login' }
      ],
      column2: [
        { label: "Centre d'aide", href: '/help' },
        { label: 'Recrutement', href: '/careers' },
        { label: 'Préférences de cookies', href: '#cookies' },
        { label: 'Informations légales', href: '#legal' }
      ],
      column3: [
        { label: 'Compte', href: '/auth/login' },
        { label: "Modes d'apprentissage", href: '#learning' },
        { label: 'Mentions légales', href: '#terms' },
        { label: 'Seulement sur ELAGRO ACADEMY', href: '#exclusive' }
      ],
      column4: [
        { label: 'Presse', href: '/press' },
        { label: "Conditions d'utilisation", href: '#terms' },
        { label: 'Nous contacter', href: '/contact' }
      ]
    },
    companyInfo: "ELAGRO ACADEMY Côte d'Ivoire",
    reCAPTCHA: "Cette page est protégée par Google reCAPTCHA pour nous assurer que vous n'êtes pas un robot.",
    learnMoreLink: "En savoir plus.",
    
    // Pricing Section
    pricingTitle: "Tarifs",
    pricingSubtitle: "Choisissez le plan qui correspond à vos besoins et développez vos compétences en élevage",
    pricingPlans: {
      free: {
        name: "Gratuit",
        price: "0",
        period: "par mois",
        description: "Découvrez la plateforme et explorez les formations de base",
        features: [
          "Accès à 3 formations gratuites",
          "Contenus téléchargeables limités",
          "Support communautaire",
          "Certification non incluse"
        ],
        cta: "Commencer gratuitement"
      },
      pro: {
        name: "Professionnel",
        price: "15 000",
        period: "par mois",
        description: "Accès complet à toutes les formations et certifications",
        features: [
          "Accès illimité à toutes les formations",
          "Tous les contenus téléchargeables",
          "Certifications professionnelles incluses",
          "Support email prioritaire",
          "Consultations mensuelles avec experts"
        ],
        cta: "Démarrer l'essai gratuit",
        badge: "Populaire",
        trial: "Essai gratuit de 30 jours"
      },
      enterprise: {
        name: "Entreprise",
        price: "Sur mesure",
        period: "",
        description: "Solution complète pour équipes et organisations agricoles",
        features: [
          "Tout du plan Professionnel",
          "Gestion multi-utilisateurs",
          "Formations personnalisées",
          "Support dédié 24/7",
          "Intégration et onboarding",
          "Rapports et analytics avancés"
        ],
        cta: "Contacter les ventes"
      }
    },
    comparePlansTitle: "Comparer les plans",
    comparePlansSubtitle: "Trouvez celui qui vous convient",
    compareFeaturesLabel: "Fonctionnalités",
    compareFeatures: [
      { label: "Formations incluses", free: "3 formations", pro: "Illimité", enterprise: "Illimité + personnalisées" },
      { label: "Contenus téléchargeables", free: "Limité", pro: "Illimité", enterprise: "Illimité" },
      { label: "Certifications", free: false, pro: true, enterprise: true },
      { label: "Support email", free: false, pro: true, enterprise: true },
      { label: "Support prioritaire", free: false, pro: false, enterprise: true },
      { label: "Consultations experts", free: false, pro: "1/mois", enterprise: "Illimité" },
      { label: "Multi-utilisateurs", free: false, pro: false, enterprise: true },
      { label: "Formations personnalisées", free: false, pro: false, enterprise: true },
      { label: "Onboarding dédié", free: false, pro: false, enterprise: true },
      { label: "Analytics et rapports", free: false, pro: false, enterprise: true }
    ],
    complianceTitle: "Conformité et Certifications",
    complianceSubtitle: "Des standards reconnus pour votre développement professionnel",
    complianceCards: [
      {
        title: "Certifications Professionnelles",
        badge: "Tous les plans",
        description: "Obtenez des certifications reconnues par les organisations agricoles partenaires. Ces certifications attestent de vos compétences acquises et améliorent votre crédibilité professionnelle.",
        cta: "En savoir plus"
      },
      {
        title: "Standards de Qualité",
        badge: "Entreprise",
        description: "Conformité aux normes agricoles internationales et locales. Support pour la certification de vos exploitations selon les standards de qualité et de durabilité.",
        cta: "Contacter les ventes"
      }
    ]
  },
  en: {
    // Navigation
    signIn: "Sign In",
    
    // Hero Section
    headline: "Livestock training and consulting",
    subheadline: "I learn, I understand, I apply, I preserve",
    description: "Join ELAGRO ACADEMY to enhance your livestock management skills and master best practices for animal welfare and productivity.",
    emailPlaceholder: "Email address",
    cta: "Join us",
    success: "Thank you! We'll contact you soon.",
    error: "An error occurred. Please try again.",
    invalidEmail: "Please enter a valid email address.",
    sending: "Sending...",
    
    // Features Section
    featuresTitle: "Even more reasons to subscribe",
    featuresSubtitle: "ELAGRO ACADEMY - Your agricultural learning platform",
    features: [
      {
        title: "Online Training",
        description: "Access quality agricultural training from your smartphone, tablet or computer, wherever you are."
      },
      {
        title: "Downloadable Content",
        description: "Download your courses and practical guides to consult them offline, anytime in your fields."
      },
      {
        title: "Local Expertise",
        description: "Benefit from advice adapted to your region and sustainable and profitable agricultural solutions."
      },
      {
        title: "Professional Certification",
        description: "Get recognized certifications and join a community of innovative farmers."
      }
    ],
    startNow: "Start now",
    
    // Specialties Section
    specialtiesTitle: "Current Trends",
    specialtiesSubtitle: "Discover our specialized training in agriculture and livestock",
    learnMore: "Learn more",
    startTraining: "Start Training",
    
    // FAQ Section
    faqTitle: "Frequently Asked Questions",
    faqs: [
      {
        question: "What is ELAGRO ACADEMY?",
        answer: "ELAGRO ACADEMY is a digital learning, consulting and certification platform dedicated to agricultural and livestock actors. It combines scientific knowledge, local expertise and innovative technologies to support producers towards sustainable, profitable and health-respectful agriculture."
      },
      {
        question: "How much does ELAGRO ACADEMY subscription cost?",
        answer: "We offer several subscription plans adapted to your needs: a monthly plan, a quarterly plan with discount, and an annual plan offering the best value for money. Contact us to discover the offer that matches your operation."
      },
      {
        question: "Where can I access the training?",
        answer: "You can access ELAGRO ACADEMY from any device connected to the Internet: smartphone, tablet or computer. Also download our content to consult them offline directly from your fields."
      },
      {
        question: "How can I cancel my subscription?",
        answer: "You can cancel your subscription at any time from your personal space in the account settings. No termination fees are applied, and you keep access until the end of your paid subscription period."
      },
      {
        question: "What training can I follow on ELAGRO ACADEMY?",
        answer: "Our catalog offers training in sustainable agriculture, livestock techniques, farm management, agroecology, use of natural fertilizers, animal health, transformation of agricultural products, and much more. New content is added regularly."
      },
      {
        question: "Are the certifications officially recognized?",
        answer: "Yes, our certifications are recognized by partner agricultural organizations and enhance your professional expertise. They attest to your acquired skills and can improve your credibility with buyers and institutions."
      }
    ],
    
    // Footer
    footerCta: "Get Started",
    footerDescription: "Ready to develop your livestock skills? Enter your email address to subscribe or reactivate your subscription.",
    contactUs: "Questions? Contact us.",
    footerLinks: {
      column1: [
        { label: 'FAQ', href: '#faq' },
        { label: 'Partner Relations', href: '#partners' },
        { label: 'Privacy', href: '#privacy' },
        { label: 'Connection Test', href: '/auth/login' }
      ],
      column2: [
        { label: "Help Center", href: '/help' },
        { label: 'Careers', href: '/careers' },
        { label: 'Cookie Preferences', href: '#cookies' },
        { label: 'Legal Information', href: '#legal' }
      ],
      column3: [
        { label: 'Account', href: '/auth/login' },
        { label: "Learning Modes", href: '#learning' },
        { label: 'Legal Mentions', href: '#terms' },
        { label: 'Only on ELAGRO ACADEMY', href: '#exclusive' }
      ],
      column4: [
        { label: 'Press', href: '/press' },
        { label: "Terms of Use", href: '#terms' },
        { label: 'Contact Us', href: '/contact' }
      ]
    },
    companyInfo: "ELAGRO ACADEMY Côte d'Ivoire",
    reCAPTCHA: "This page is protected by Google reCAPTCHA to ensure you are not a robot.",
    learnMoreLink: "Learn more.",
    
    // Pricing Section
    pricingTitle: "Pricing",
    pricingSubtitle: "Choose the plan that fits your needs and develop your livestock skills",
    pricingPlans: {
      free: {
        name: "Free",
        price: "0",
        period: "per month",
        description: "Explore the platform and access basic training courses",
        features: [
          "Access to 3 free courses",
          "Limited downloadable content",
          "Community support",
          "Certification not included"
        ],
        cta: "Get Started"
      },
      pro: {
        name: "Pro",
        price: "15,000",
        period: "per month",
        description: "Full access to all training courses and certifications",
        features: [
          "Unlimited access to all courses",
          "All downloadable content",
          "Professional certifications included",
          "Priority email support",
          "Monthly expert consultations"
        ],
        cta: "Start Free Trial",
        badge: "Popular",
        trial: "Try Pro free for 30 days"
      },
      enterprise: {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description: "Complete solution for teams and agricultural organizations",
        features: [
          "Everything in Pro plan",
          "Multi-user management",
          "Customized training",
          "24/7 dedicated support",
          "Integration and onboarding",
          "Advanced reports and analytics"
        ],
        cta: "Contact Sales"
      }
    },
    comparePlansTitle: "Compare plans",
    comparePlansSubtitle: "Find one that's right for you",
    compareFeaturesLabel: "Features",
    compareFeatures: [
      { label: "Courses included", free: "3 courses", pro: "Unlimited", enterprise: "Unlimited + Custom" },
      { label: "Downloadable content", free: "Limited", pro: "Unlimited", enterprise: "Unlimited" },
      { label: "Certifications", free: false, pro: true, enterprise: true },
      { label: "Email support", free: false, pro: true, enterprise: true },
      { label: "Priority support", free: false, pro: false, enterprise: true },
      { label: "Expert consultations", free: false, pro: "1/month", enterprise: "Unlimited" },
      { label: "Multi-users", free: false, pro: false, enterprise: true },
      { label: "Customized training", free: false, pro: false, enterprise: true },
      { label: "Dedicated onboarding", free: false, pro: false, enterprise: true },
      { label: "Analytics and reports", free: false, pro: false, enterprise: true }
    ],
    complianceTitle: "Compliance & Certifications",
    complianceSubtitle: "Recognized standards for your professional development",
    complianceCards: [
      {
        title: "Professional Certifications",
        badge: "All plans",
        description: "Get certifications recognized by partner agricultural organizations. These certifications attest to your acquired skills and enhance your professional credibility.",
        cta: "Learn more"
      },
      {
        title: "Quality Standards",
        badge: "Enterprise",
        description: "Compliance with international and local agricultural standards. Support for certifying your operations according to quality and sustainability standards.",
        cta: "Contact Sales"
      }
    ]
  },
  es: {
    // Navigation
    signIn: "Iniciar sesión",
    
    // Hero Section
    headline: "Formación y consultoría en ganadería",
    subheadline: "Aprendo, comprendo, aplico, preservo",
    description: "Únete a ELAGRO ACADEMY para desarrollar tus habilidades en ganadería y dominar las mejores prácticas para el bienestar y la productividad animal.",
    emailPlaceholder: "Correo electrónico",
    cta: "Únete a nosotros",
    success: "¡Gracias! Nos pondremos en contacto contigo pronto.",
    error: "Ha ocurrido un error. Por favor, inténtalo de nuevo.",
    invalidEmail: "Por favor, introduce un correo electrónico válido.",
    sending: "Enviando...",
    
    // Features Section
    featuresTitle: "Aún más razones para suscribirte",
    featuresSubtitle: "ELAGRO ACADEMY - Tu plataforma de aprendizaje agrícola",
    features: [
      {
        title: "Formación en línea",
        description: "Accede a formación agrícola de calidad desde tu smartphone, tablet u ordenador, dondequiera que estés."
      },
      {
        title: "Contenido descargable",
        description: "Descarga tus cursos y guías prácticas para consultarlos sin conexión, en cualquier momento en tus campos."
      },
      {
        title: "Experiencia local",
        description: "Benefíciate de consejos adaptados a tu región y soluciones agrícolas sostenibles y rentables."
      },
      {
        title: "Certificación profesional",
        description: "Obtén certificaciones reconocidas y únete a una comunidad de agricultores innovadores."
      }
    ],
    startNow: "Empezar ahora",
    
    // Specialties Section
    specialtiesTitle: "Tendencias actuales",
    specialtiesSubtitle: "Descubre nuestras formaciones especializadas en agricultura y ganadería",
    learnMore: "Saber más",
    startTraining: "Empezar la formación",
    
    // FAQ Section
    faqTitle: "Preguntas frecuentes",
    faqs: [
      {
        question: "¿Qué es ELAGRO ACADEMY?",
        answer: "ELAGRO ACADEMY es una plataforma digital de aprendizaje, consultoría y certificación dedicada a los actores del sector agrícola y ganadero. Combina conocimiento científico, experiencia local y tecnologías innovadoras para acompañar a los productores hacia una agricultura sostenible, rentable y respetuosa de la salud."
      },
      {
        question: "¿Cuánto cuesta la suscripción a ELAGRO ACADEMY?",
        answer: "Ofrecemos varios planes de suscripción adaptados a tus necesidades: un plan mensual, un plan trimestral con descuento y un plan anual con la mejor relación calidad-precio. Contáctanos para descubrir la oferta que se adapta a tu explotación."
      },
      {
        question: "¿Dónde puedo acceder a las formaciones?",
        answer: "Puedes acceder a ELAGRO ACADEMY desde cualquier dispositivo con conexión a Internet: smartphone, tablet u ordenador. También descarga nuestros contenidos para consultarlos sin conexión directamente desde tus campos."
      },
      {
        question: "¿Cómo puedo cancelar mi suscripción?",
        answer: "Puedes cancelar tu suscripción en cualquier momento desde tu espacio personal en la configuración de la cuenta. No se aplican cargos por cancelación y mantienes el acceso hasta el final del período pagado."
      },
      {
        question: "¿Qué formaciones puedo seguir en ELAGRO ACADEMY?",
        answer: "Nuestro catálogo ofrece formaciones en agricultura sostenible, técnicas de ganadería, gestión de explotaciones, agroecología, uso de fertilizantes naturales, salud animal, transformación de productos agrícolas y mucho más. Se añaden nuevos contenidos regularmente."
      },
      {
        question: "¿Las certificaciones están reconocidas oficialmente?",
        answer: "Sí, nuestras certificaciones están reconocidas por organizaciones agrícolas asociadas y valoran tu experiencia profesional. Atestiguan tus competencias adquiridas y pueden mejorar tu credibilidad ante compradores e instituciones."
      }
    ],
    
    // Footer
    footerCta: "Comenzar",
    footerDescription: "¿Listo para desarrollar tus habilidades en ganadería? Introduce tu correo electrónico para suscribirte o reactivar tu suscripción.",
    contactUs: "¿Preguntas? Contáctanos.",
    footerLinks: {
      column1: [
        { label: 'Preguntas frecuentes', href: '#faq' },
        { label: 'Relaciones con socios', href: '#partners' },
        { label: 'Privacidad', href: '#privacy' },
        { label: 'Prueba de conexión', href: '/auth/login' }
      ],
      column2: [
        { label: 'Centro de ayuda', href: '/help' },
        { label: 'Empleo', href: '/careers' },
        { label: 'Preferencias de cookies', href: '#cookies' },
        { label: 'Información legal', href: '#legal' }
      ],
      column3: [
        { label: 'Cuenta', href: '/auth/login' },
        { label: 'Modalidades de aprendizaje', href: '#learning' },
        { label: 'Avisos legales', href: '#terms' },
        { label: 'Solo en ELAGRO ACADEMY', href: '#exclusive' }
      ],
      column4: [
        { label: 'Prensa', href: '/press' },
        { label: 'Términos de uso', href: '#terms' },
        { label: 'Contacta con nosotros', href: '/contact' }
      ]
    },
    companyInfo: "ELAGRO ACADEMY Costa de Marfil",
    reCAPTCHA: "Esta página está protegida por Google reCAPTCHA para asegurarnos de que no eres un robot.",
    learnMoreLink: "Saber más.",
    
    // Pricing Section
    pricingTitle: "Precios",
    pricingSubtitle: "Elige el plan que se adapte a tus necesidades y desarrolla tus habilidades en ganadería",
    pricingPlans: {
      free: {
        name: "Gratis",
        price: "0",
        period: "por mes",
        description: "Explora la plataforma y accede a cursos de formación básicos",
        features: [
          "Acceso a 3 cursos gratuitos",
          "Contenido descargable limitado",
          "Soporte comunitario",
          "Certificación no incluida"
        ],
        cta: "Comenzar"
      },
      pro: {
        name: "Profesional",
        price: "15,000",
        period: "por mes",
        description: "Acceso completo a todos los cursos de formación y certificaciones",
        features: [
          "Acceso ilimitado a todos los cursos",
          "Todo el contenido descargable",
          "Certificaciones profesionales incluidas",
          "Soporte por email prioritario",
          "Consultas mensuales con expertos"
        ],
        cta: "Iniciar prueba gratuita",
        badge: "Popular",
        trial: "Prueba Pro gratis durante 30 días"
      },
      enterprise: {
        name: "Empresa",
        price: "Personalizado",
        period: "",
        description: "Solución completa para equipos y organizaciones agrícolas",
        features: [
          "Todo del plan Profesional",
          "Gestión multi-usuario",
          "Formación personalizada",
          "Soporte dedicado 24/7",
          "Integración y onboarding",
          "Informes y análisis avanzados"
        ],
        cta: "Contactar ventas"
      }
    },
    comparePlansTitle: "Comparar planes",
    comparePlansSubtitle: "Encuentra el que sea adecuado para ti",
    compareFeaturesLabel: "Características",
    compareFeatures: [
      { label: "Cursos incluidos", free: "3 cursos", pro: "Ilimitado", enterprise: "Ilimitado + Personalizado" },
      { label: "Contenido descargable", free: "Limitado", pro: "Ilimitado", enterprise: "Ilimitado" },
      { label: "Certificaciones", free: false, pro: true, enterprise: true },
      { label: "Soporte por email", free: false, pro: true, enterprise: true },
      { label: "Soporte prioritario", free: false, pro: false, enterprise: true },
      { label: "Consultas con expertos", free: false, pro: "1/mes", enterprise: "Ilimitado" },
      { label: "Multi-usuarios", free: false, pro: false, enterprise: true },
      { label: "Formación personalizada", free: false, pro: false, enterprise: true },
      { label: "Onboarding dedicado", free: false, pro: false, enterprise: true },
      { label: "Análisis e informes", free: false, pro: false, enterprise: true }
    ],
    complianceTitle: "Cumplimiento y Certificaciones",
    complianceSubtitle: "Estándares reconocidos para tu desarrollo profesional",
    complianceCards: [
      {
        title: "Certificaciones Profesionales",
        badge: "Todos los planes",
        description: "Obtén certificaciones reconocidas por organizaciones agrícolas asociadas. Estas certificaciones atestiguan tus competencias adquiridas y mejoran tu credibilidad profesional.",
        cta: "Saber más"
      },
      {
        title: "Estándares de Calidad",
        badge: "Empresa",
        description: "Cumplimiento con estándares agrícolas internacionales y locales. Soporte para certificar tus operaciones según estándares de calidad y sostenibilidad.",
        cta: "Contactar ventas"
      }
    ]
  }
};
