import { calculateYearsOfExperience } from './dates';

// Obtener años dinámicamente
const getYearsOfExperience = () => calculateYearsOfExperience();

export const translations = {
  // Navigation
  'nav.aria_label': {
    es: 'Navegación principal',
    en: 'Main navigation'
  },
  'nav.software_engineer': {
    es: 'Ingeniero de Software',
    en: 'Software Engineer'
  },
  'nav.language_switch': {
    es: 'EN',
    en: 'ES'
  },
  'nav.about': {
    es: 'Acerca de',
    en: 'About'
  },
  'nav.experience': {
    es: 'Experiencia',
    en: 'Experience'
  },
  'nav.skills': {
    es: 'Aptitudes',
    en: 'Skills'
  },
  'nav.projects': {
    es: 'Proyectos',
    en: 'Projects'
  },
  'nav.contact': {
    es: 'Contacto',
    en: 'Contact'
  },

  // Hero
  'hero.title': {
    es: 'Ingeniero de Software Senior | Full Stack & Tech Lead | Backend, Frontend & Arquitectura',
    en: 'Senior Software Engineer | Full Stack & Tech Lead | Backend, Frontend & Architecture'
  },
  'hero.download_cv': {
    es: 'Descargar CV',
    en: 'Download CV'
  },
  'hero.contact_me': {
    es: 'Contactarme',
    en: 'Contact Me'
  },

  // About
  'about.title': {
    es: 'Acerca de Mí',
    en: 'About Me'
  },
  'about.description': {
    es: () => `Ingeniero de Software con más de ${getYearsOfExperience()} años de experiencia profesional construyendo sistemas robustos, modulares y escalables. Especializado en desarrollo full-stack (backend + frontend), arquitectura limpia, liderazgo técnico e integración de sistemas. Apuesto por la automatización DevOps, la mejora continua y la entrega de soluciones de alto impacto a nivel internacional.`,
    en: () => `Senior Software Engineer with over ${getYearsOfExperience()} years of experience building robust, modular, and scalable systems. Specialized in full-stack development (backend + frontend), clean architecture, technical leadership, and system integration. I embrace DevOps automation, continuous improvement, and delivering high-impact solutions on a global scale.`
  },

  // Experience
  'experience.title': {
    es: 'Experiencia Profesional',
    en: 'Professional Experience'
  },

  // Skills
  'skills.title': {
    es: 'Aptitudes Técnicas',
    en: 'Technical Skills'
  },
  'skills.subtitle': {
    es: 'Tecnologías y herramientas',
    en: 'Technologies & tools'
  },
  'skills.development': {
    es: 'Desarrollo & Arquitectura',
    en: 'Development & Architecture'
  },
  'skills.fullstack': {
    es: 'Desarrollo Full Stack',
    en: 'Full Stack Development'
  },
  'skills.architecture': {
    es: 'Arquitectura de Software',
    en: 'Software Architecture'
  },
  'skills.leadership': {
    es: 'Liderazgo Técnico',
    en: 'Technical Leadership'
  },

  // Projects
  'projects.title': {
    es: 'Proyectos Destacados',
    en: 'Featured Projects'
  },

  // Contact
  'contact.title': {
    es: 'Conectemos Juntos',
    en: 'Get in Touch'
  },
  'contact.subtitle': {
    es: 'Hablemos',
    en: "Let's talk"
  },
  'contact.description': {
    es: 'Estoy disponible para roles remotos senior y de liderazgo técnico a nivel mundial. ¿Tienes un proyecto interesante? ¡Hablemos!',
    en: "I'm currently open to full-time remote senior and technical leadership roles worldwide. Have an interesting project? Let's talk!"
  },

  // Hero specific
  'hero.aria_label': {
    es: 'Sección principal de presentación',
    en: 'Main hero presentation section'
  },
  'hero.senior_software_engineer': {
    es: 'Ingeniero de Software Senior',
    en: 'Senior Software Engineer'
  },
  'hero.fullstack_specialist': {
    es: 'Especialista en Full Stack & Arquitectura de Software',
    en: 'Full Stack & Software Architecture Specialist'
  },
  'hero.cv_aria_label': {
    es: 'Descargar currículum vitae en formato PDF',
    en: 'Download resume in PDF format'
  },
  'hero.contact_aria_label': {
    es: 'Ir a la sección de contacto',
    en: 'Go to contact section'
  },
  'hero.years_experience': {
    es: 'años de experiencia',
    en: 'years of experience'
  },

  // About specific
  'about.get_to_know': {
    es: 'Conóceme mejor',
    en: 'Get to know me'
  },
  'about.discover_journey': {
    es: 'Descubre mi trayectoria profesional y pasión por la tecnología',
    en: 'Discover my professional journey and passion for technology'
  },
  'about.technical_leadership': {
    es: 'Liderazgo Técnico',
    en: 'Technical Leadership'
  },
  'about.architecture': {
    es: 'Arquitectura',
    en: 'Architecture'
  },
  'about.lets_talk': {
    es: 'Conversemos',
    en: "Let's Talk"
  },

  // Contact specific
  'contact.lets_talk': {
    es: 'Hablemos',
    en: "Let's talk"
  },
  'contact.connect': {
    es: 'Conectemos',
    en: 'Get in '
  },
  'contact.together': {
    es: 'Juntos',
    en: 'Touch'
  },
  'contact.cta_description': {
    es: 'Siempre estoy buscando nuevos desafíos y oportunidades para crear soluciones innovadoras. ¡No dudes en contactarme!',
    en: "I'm always looking for new challenges and opportunities to create innovative solutions. Don't hesitate to reach out!"
  },
  'contact.response_24h': {
    es: 'Respuesta en 24h',
    en: '24h response'
  },
  'contact.professional_network': {
    es: 'Red profesional',
    en: 'Professional network'
  },
  'contact.ready_collaborate': {
    es: '¿Listo para colaborar?',
    en: 'Ready to collaborate?'
  },
  'contact.send_email': {
    es: 'Enviar Email',
    en: 'Send Email'
  },
  'contact.schedule_meeting': {
    es: 'Agendar Reunión',
    en: 'Schedule Meeting'
  },

  // Articles & Open Source
  'articles.title': {
    es: 'Artículos & Tutoriales',
    en: 'Articles & Tutorials'
  },
  'articles.description': {
    es: 'Comparto conocimiento y experiencias técnicas a través de artículos en dev.to',
    en: 'I share technical knowledge and experiences through articles on dev.to'
  },
  'articles.blog_name': {
    es: 'Blog de Ángel Quiroz',
    en: "Angel Quiroz's Blog"
  },
  'articles.min': {
    es: 'min',
    en: 'min'
  },
  'articles.read_full': {
    es: 'Leer artículo completo',
    en: 'Read full article'
  },
  'articles.view_all': {
    es: 'Ver todos mis artículos',
    en: 'View all my articles'
  },

  // Open Source
  'opensource.title': {
    es: 'Proyectos Open Source',
    en: 'Open Source Projects'
  },
  'opensource.description': {
    es: 'Contribuyo a la comunidad desarrollando herramientas útiles y bibliotecas de código abierto',
    en: 'I contribute to the community by developing useful tools and open source libraries'
  },
  'opensource.featured': {
    es: 'Destacado',
    en: 'Featured'
  },
  'opensource.weekly': {
    es: 'Semanal',
    en: 'Weekly'
  },
  'opensource.monthly': {
    es: 'Mensual',
    en: 'Monthly'
  },
  'opensource.yearly': {
    es: 'Anual',
    en: 'Yearly'
  },
  'opensource.total': {
    es: 'Total',
    en: 'Total'
  },
  'opensource.more_projects': {
    es: 'Más Proyectos',
    en: 'More Projects'
  },
  'opensource.github_description': {
    es: 'Explora todos mis repositorios y contribuciones open source en GitHub',
    en: 'Explore all my repositories and open source contributions on GitHub'
  },
  'opensource.view_github': {
    es: 'Ver GitHub',
    en: 'View GitHub'
  },

  // Footer/Layout
  'layout.site_description': {
    es: 'Ingeniero de Software Senior especializado en desarrollo full-stack, arquitectura y liderazgo técnico',
    en: 'Senior Software Engineer specialized in full-stack development, architecture and technical leadership'
  },
  'layout.keywords_es': {
    es: 'Ángel Quiroz, Ingeniero Software, Full Stack Developer, React, Node.js, TypeScript, Laravel, AWS, Angular, Vue.js, Arquitectura Software, DevOps, Ecuador',
    en: ''
  },
  'layout.keywords_en': {
    es: '',
    en: 'Angel Quiroz, Software Engineer, Full Stack Developer, React, Node.js, TypeScript, Laravel, AWS, Angular, Vue.js, Software Architecture, DevOps, Ecuador'
  },
  'layout.footer_contact': {
    es: 'Contacto',
    en: 'Contact'
  },
  'layout.footer_links': {
    es: 'Enlaces',
    en: 'Links'
  },
  'layout.footer_language': {
    es: 'Idioma',
    en: 'Language'
  },
  'layout.footer_switch_language': {
    es: 'English',
    en: 'Español'
  },
  'layout.footer_rights': {
    es: 'Todos los derechos reservados.',
    en: 'All rights reserved.'
  },
  'layout.job_title': {
    es: 'Ingeniero de Software Senior',
    en: 'Senior Software Engineer'
  },

  // Common
  'common.years_experience': {
    es: 'Años de Experiencia',
    en: 'Years of Experience'
  },
  'common.technologies': {
    es: 'Tecnologías Dominadas',
    en: 'Technologies Mastered'
  },
  'common.projects_completed': {
    es: 'Proyectos Completados',
    en: 'Projects Completed'
  },
  'common.years_of_experience': {
    es: () => `${getYearsOfExperience()} años`,
    en: () => `${getYearsOfExperience()} years`
  }
} as const;

export type TranslationKey = keyof typeof translations;
export type Language = 'es' | 'en';

export function t(key: TranslationKey, lang: Language): string {
  const value = translations[key][lang] || translations[key]['en'] || key;
  return typeof value === 'function' ? value() : value;
}
