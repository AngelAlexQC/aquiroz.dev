// Utilidades para manejo dinámico de fechas
// Calcula automáticamente duraciones y formatea fechas

// Fecha de inicio de la carrera profesional
const CAREER_START_DATE = new Date('2018-03-01');

// Datos de experiencia con fechas como objetos Date
export const experienceDates = {
  // Fecha de inicio de carrera
  careerStart: CAREER_START_DATE,
  
  // Experiencias laborales actualizadas según LinkedIn
  libelulaStart: new Date('2024-02-01'),
  libelulaBackendStart: new Date('2023-11-01'),
  libelulaBackendEnd: new Date('2024-01-31'),
  freelanceStart: new Date('2019-05-01'),
  edgeboundTechLeadStart: new Date('2022-10-01'),
  edgeboundTechLeadEnd: new Date('2023-04-30'),
  edgeboundFullStackStart: new Date('2022-07-01'),
  edgeboundFullStackEnd: new Date('2022-10-31'),
  apsStart: new Date('2021-11-01'),
  apsEnd: new Date('2022-07-31'),
  portoviejoInstStart: new Date('2019-04-01'),
  portoviejoInstEnd: new Date('2021-12-31'),
  portoviejoGadStart: new Date('2020-02-01'),
  portoviejoGadEnd: new Date('2021-09-30'),
  clubSocialStart: new Date('2018-03-01'),
  clubSocialEnd: new Date('2019-02-28'),
};

// Agregar fechas dinámicas para proyectos
export const projectDates = {
  urbanRecolectorStart: new Date('2020-02-01'),
  urbanRecolectorEnd: new Date('2021-09-30'),
  itsupStart: new Date('2019-04-01'),
  itsupEnd: new Date('2021-12-31'),
};

// Calcula años de experiencia desde el inicio de la carrera
export function calculateYearsOfExperience(): number {
  const now = new Date();
  const diffInMs = now.getTime() - CAREER_START_DATE.getTime();
  const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25);
  return Math.floor(diffInYears);
}

// Formatea un periodo entre dos fechas
export function formatPeriod(startDate: Date, endDate: Date | null, lang: 'es' | 'en'): string {
  const startStr = formatDate(startDate, lang);
  const endStr = endDate ? formatDate(endDate, lang) : (lang === 'es' ? 'Presente' : 'Present');
  return `${startStr} – ${endStr}`;
}

// Formatea una fecha individual
export function formatDate(date: Date, lang: 'es' | 'en'): string {
  const months = {
    es: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  };
  
  const month = months[lang][date.getMonth()];
  const year = date.getFullYear();
  
  return `${month} ${year}`;
}

// Calcula la duración entre dos fechas en años y meses
export function calculateDuration(startDate: Date, endDate: Date | null): { years: number; months: number } {
  const end = endDate || new Date();
  
  let years = end.getFullYear() - startDate.getFullYear();
  let months = end.getMonth() - startDate.getMonth();
  
  if (months < 0) {
    years--;
    months += 12;
  }
  
  return { years, months };
}

// Formatea la duración en texto legible
export function formatDuration(duration: { years: number; months: number }, lang: 'es' | 'en'): string {
  const { years, months } = duration;
  
  if (years === 0) {
    return lang === 'es' ? `${months} ${months === 1 ? 'mes' : 'meses'}` : `${months} ${months === 1 ? 'month' : 'months'}`;
  }
  
  if (months === 0) {
    return lang === 'es' ? `${years} ${years === 1 ? 'año' : 'años'}` : `${years} ${years === 1 ? 'year' : 'years'}`;
  }
  
  const yearText = lang === 'es' ? `${years} ${years === 1 ? 'año' : 'años'}` : `${years} ${years === 1 ? 'year' : 'years'}`;
  const monthText = lang === 'es' ? `${months} ${months === 1 ? 'mes' : 'meses'}` : `${months} ${months === 1 ? 'month' : 'months'}`;
  
  return `${yearText}, ${monthText}`;
}
