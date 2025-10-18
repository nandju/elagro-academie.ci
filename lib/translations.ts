export type Language = "fr" | "en";

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
    learnMoreLink: "En savoir plus."
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
    learnMoreLink: "Learn more."
  }
};
