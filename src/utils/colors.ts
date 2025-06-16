// Configuración centralizada de colores para aquiroz.dev
// Mantiene consistencia visual en toda la aplicación

export const colors = {
  // Colores primarios de marca
  primary: {
    50: "bg-blue-50",
    100: "bg-blue-100",
    500: "bg-blue-500",
    600: "bg-blue-600",
    700: "bg-blue-700",
    800: "bg-blue-800",
  },

  // Colores de texto primarios
  text: {
    primary: "text-blue-600",
    primaryHover: "text-blue-700",
    secondary: "text-purple-600",
    success: "text-green-600",
    muted: "text-gray-500",
    dark: "text-gray-900",
    light: "text-gray-700",
    white: "text-white",
  },

  // Backgrounds
  bg: {
    primary: "bg-blue-600",
    primaryHover: "bg-blue-700",
    secondary: "bg-purple-600",
    success: "bg-green-500",
    light: "bg-gray-50",
    white: "bg-white",
    // Backgrounds para tags/badges
    primaryLight: "bg-blue-100",
    secondaryLight: "bg-purple-100",
    successLight: "bg-green-100",
    warningLight: "bg-orange-100",
    infoLight: "bg-cyan-100",
    dangerLight: "bg-red-100",
  },

  // Gradientes principales
  gradients: {
    primary: "bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700",
    primaryReverse:
      "bg-gradient-to-l from-blue-600 via-purple-600 to-indigo-700",
    hero: "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50",
    section: "bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50",
    card: "bg-gradient-to-br from-white to-gray-50",
    // Gradientes específicos para elementos
    avatar: "bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700",
    button: "bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700",
    buttonSecondary: "bg-gradient-to-r from-blue-500 to-purple-600",
    skill: "bg-gradient-to-br from-blue-500 to-purple-600",
    // Gradientes para diferentes categorías de skills
    skillFrontend: "bg-gradient-to-r from-blue-400 to-purple-500",
    skillBackend: "bg-gradient-to-r from-green-400 to-blue-500",
    skillDevops: "bg-gradient-to-r from-yellow-400 to-orange-500",
    skillLeadership: "bg-gradient-to-r from-purple-400 to-pink-500",
    skillArchitecture: "bg-gradient-to-r from-blue-400 to-purple-500",
    skillFullstack: "bg-gradient-to-r from-green-500 to-teal-600",
  },

  // Estados y feedback
  states: {
    success: {
      bg: "bg-green-100",
      text: "text-green-800",
      border: "border-green-200",
    },
    warning: {
      bg: "bg-orange-100",
      text: "text-orange-800",
      border: "border-orange-200",
    },
    info: {
      bg: "bg-cyan-100",
      text: "text-cyan-800",
      border: "border-cyan-200",
    },
    error: {
      bg: "bg-red-100",
      text: "text-red-800",
      border: "border-red-200",
    },
    primary: {
      bg: "bg-blue-100",
      text: "text-blue-800",
      border: "border-blue-200",
    },
    secondary: {
      bg: "bg-purple-100",
      text: "text-purple-800",
      border: "border-purple-200",
    },
    indigo: {
      bg: "bg-indigo-100",
      text: "text-indigo-800",
      border: "border-indigo-200",
    },
  },

  // Hover states
  hover: {
    primaryBg: "hover:bg-blue-700",
    primaryText: "hover:text-blue-700",
    secondaryText: "hover:text-purple-600",
    lightBg: "hover:bg-blue-200",
    scale: "hover:scale-105",
    shadow: "hover:shadow-lg",
    shadowXl: "hover:shadow-xl",
    shadow2xl: "hover:shadow-2xl",
  },

  // Borders
  border: {
    primary: "border-blue-200",
    light: "border-gray-200",
    white: "border-white",
  },
} as const;

// Clases CSS personalizadas que se usan en múltiples componentes
export const customClasses = {
  gradientText:
    "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent",
  glassEffect: "bg-white/20 backdrop-blur-sm",
  cardBase:
    "bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300",
  buttonPrimary:
    "bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300",
  buttonSecondary:
    "bg-white text-gray-700 px-8 py-4 rounded-full font-semibold border border-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300",
  tag: "px-3 py-1 rounded-full text-sm font-medium",
  navLink: "text-gray-700 hover:text-blue-600 transition-colors",
} as const;

// Helper function para obtener colores de manera type-safe
export const getColor = (path: string) => {
  const keys = path.split(".");
  let current: any = colors;

  for (const key of keys) {
    if (current[key]) {
      current = current[key];
    } else {
      console.warn(`Color path "${path}" not found`);
      return "";
    }
  }

  return current;
};

// Funciones helper para generar clases comunes
export const createTagClasses = (variant: keyof typeof colors.states) => {
  const state = colors.states[variant];
  return `${state.bg} ${state.text} ${customClasses.tag}`;
};

export const createCardClasses = (withHover = true) => {
  return withHover
    ? `${customClasses.cardBase} ${colors.hover.shadowXl}`
    : customClasses.cardBase;
};
