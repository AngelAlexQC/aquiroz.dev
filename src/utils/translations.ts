import { calculateYearsOfExperience } from './dates';

// Obtener años dinámicamente
const getYearsOfExperience = () => calculateYearsOfExperience();

export const translations = {
  // Navigation
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
