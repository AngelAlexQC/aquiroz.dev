# Sistema de Colores - aquiroz.dev

Este documento describe el sistema centralizado de colores para mantener consistencia visual en toda la aplicación.

## 📁 Ubicación

El sistema de colores se encuentra en `/src/utils/colors.ts`

## 🎨 Paleta de Colores Principal

### Colores Primarios

- **Azul**: Color principal de marca (#2563eb - blue-600)
- **Púrpura**: Color secundario (#7c3aed - purple-600)
- **Índigo**: Color de acento (#4338ca - indigo-700)
- **Verde**: Color de éxito (#10b981 - green-500)

### Gradientes Principales

- **Primario**: `from-blue-600 via-purple-600 to-indigo-700`
- **Hero**: `from-blue-50 via-indigo-50 to-purple-50`
- **Secciones**: `from-gray-50 via-blue-50 to-indigo-50`

## 🛠️ Uso del Sistema

### Importar el sistema

```typescript
import { colors, customClasses, createTagClasses } from "../utils/colors";
```

### Ejemplos de uso

#### En componentes Astro

```astro
<!-- Texto primario -->
<h1 class={colors.text.primary}>Título</h1>

<!-- Botón primario -->
<button class={customClasses.buttonPrimary}>Click me</button>

<!-- Avatar con gradiente -->
<div class={colors.gradients.avatar}>AQ</div>

<!-- Tag/Badge -->
<span class={createTagClasses('primary')}>PHP</span>
```

#### En clases dinámicas

```astro
<div class={`${colors.bg.primary} ${colors.text.white} ${colors.hover.primaryBg}`}>
  Elemento con colores dinámicos
</div>
```

## 📋 Estructura del Sistema

### `colors`

- `primary`: Variantes del color azul principal
- `text`: Colores de texto (primary, secondary, muted, etc.)
- `bg`: Colores de fondo
- `gradients`: Gradientes predefinidos
- `states`: Colores para estados (success, warning, info, error)
- `hover`: Estados hover
- `border`: Colores de borde

### `customClasses`

- Clases CSS reutilizables como `gradientText`, `buttonPrimary`, etc.

### Funciones Helper

#### `getColor(path: string)`

Obtiene un color usando notación de punto:

```typescript
const primaryColor = getColor("text.primary"); // 'text-blue-600'
```

#### `createTagClasses(variant)`

Crea clases para tags/badges:

```typescript
const tagClasses = createTagClasses("success"); // 'bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium'
```

#### `createCardClasses(withHover?)`

Crea clases para tarjetas:

```typescript
const cardClasses = createCardClasses(true); // Con efectos hover
```

## 🎯 Componentes Actualizados

### ✅ Navigation.astro

- Sistema de colores completamente implementado
- Usa `colors.gradients.avatar` para el avatar
- Links con `customClasses.navLink`
- Botones con colores centralizados

### 🔄 Próximos a actualizar

- [ ] Hero.astro
- [ ] About.astro
- [ ] Experience.astro
- [ ] Skills.astro
- [ ] Projects.astro
- [ ] Contact.astro

## 🚀 Beneficios

1. **Consistencia**: Todos los componentes usan la misma paleta
2. **Mantenibilidad**: Cambios centralizados en un solo archivo
3. **Type Safety**: IntelliSense y autocompletado
4. **Escalabilidad**: Fácil agregar nuevos colores o variantes
5. **Documentación**: Sistema autodocumentado

## 🔧 Extensión del Sistema

### Agregar un nuevo color

```typescript
// En colors.ts
export const colors = {
  // ...existente
  tertiary: {
    50: "bg-teal-50",
    500: "bg-teal-500",
    600: "bg-teal-600",
  },
};
```

### Agregar un nuevo gradiente

```typescript
gradients: {
  // ...existente
  newGradient: 'bg-gradient-to-r from-teal-400 to-blue-500',
}
```

### Agregar una nueva clase personalizada

```typescript
customClasses: {
  // ...existente
  specialButton: 'bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition-colors',
}
```

## 📝 Buenas Prácticas

1. **Siempre usa el sistema**: Evita colores hardcodeados
2. **Usa funciones helper**: Para generación dinámica de clases
3. **Mantén consistencia**: Usa los gradientes predefinidos
4. **Documenta cambios**: Actualiza este README al agregar colores
5. **Testea**: Verifica que los cambios no rompan otros componentes

---

_Sistema implementado por Ángel Quiroz - aquiroz.dev_
