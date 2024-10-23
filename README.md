[Visita la web](https://carsapp1.netlify.app/)
# Proyecto para Reto del Ciclo de DAW Usando React, TypeScript y Sass

## Introducción

En el marco de un reto para el ciclo formativo de **Desarrollo de Aplicaciones Web (DAW)**, me embarqué en el desarrollo de un proyecto con una arquitectura moderna que incluye **React** como librería de front-end, **TypeScript** para la escritura tipada de JavaScript, y **Sass** como preprocesador CSS. Este proyecto ha sido una gran oportunidad para aplicar conocimientos adquiridos durante el ciclo, además de enfrentarme a nuevos desafíos técnicos y lógicos que me han permitido crecer como desarrollador.

A continuación, detallo los principales problemas a los que me enfrenté, las soluciones implementadas y las lecciones aprendidas.

---

## Principales Problemas Encontrados

### 1. Estructura del Proyecto con React y TypeScript

El primer desafío fue definir una estructura de proyecto sólida que facilitara la escalabilidad y el mantenimiento del código. Al trabajar con **React**, normalmente es sencillo dividir el proyecto en componentes, pero la adición de **TypeScript** añade una capa adicional de complejidad.

**Problemas concretos:**

- **Definir interfaces para componentes:** Inicialmente, encontré dificultades al definir correctamente los tipos e interfaces para los props de los componentes en TypeScript.
- **Modularidad y reutilización de código:** Tuve que equilibrar la modularización de los componentes para evitar duplicación de código, sin hacer que los componentes fueran demasiado complejos.

### 2. CSS Escalable Usando Sass

Aunque **Sass** facilita la escritura de estilos más organizados, también me encontré con problemas, como el **anidamiento excesivo** y la falta de flexibilidad en los **mixins**.

**Problemas concretos:**

- **Anidamiento excesivo:** El uso excesivo de anidamientos causaba una especificidad innecesariamente alta, dificultando la sobrescritura de estilos.
- **Mixins y funciones:** Al principio, creé mixins demasiado específicos, lo que no fomentaba la reutilización.

### 3. Integración de TypeScript y React con APIs Externas

El uso de **TypeScript** en combinación con React al consumir **APIs externas** presentó dificultades adicionales.

**Problemas concretos:**

- **Tipado de datos dinámicos:** La API que utilicé devolvía una estructura de datos inconsistente, lo que requería ajustar los tipos.
- **Manejo de promesas y estados asincrónicos:** Tipar correctamente las promesas y manejar los estados asincrónicos dentro de `useEffect` fue todo un desafío.

### 4. Estado Global y Manejo de Contextos

La **gestión del estado global** usando **Context API** y **TypeScript** resultó ser más complicado de lo que esperaba.

**Problemas concretos:**

- **Tipado de los contextos:** Definir los tipos y estados globales correctamente en TypeScript me llevó más tiempo de lo anticipado.
- **Rendimiento y renders innecesarios:** El uso incorrecto del contexto resultaba en renders innecesarios y afectaba el rendimiento.

---

## Soluciones e Implementaciones

### 1. Organización del Código con React y TypeScript

Una vez que identifiqué los desafíos, decidí:

- **Centralizar los tipos en un archivo `types.ts`** para mejorar la reutilización y reducir errores tipográficos.
- Dividir los componentes en carpetas como `components`, `containers`, `hooks` y `utils`, facilitando la separación de responsabilidades.

### 2. Optimización de Sass

Para evitar el **anidamiento excesivo** y hacer que los estilos sean más escalables:

- **Limité la profundidad de anidamiento** a tres niveles, asegurando que cada componente gestionara sus propios estilos.
- Creé **mixins genéricos y reutilizables** para cosas como **media queries** y estilos comunes.

### 3. Tipado Robusto al Consumir APIs

Para lidiar con datos dinámicos de la API:

- Usé **tipos opcionales** y el modificador `Partial<>` para hacer el tipado más flexible.
- Implementé **guards** para validar los datos antes de procesarlos, evitando errores de tipado en tiempo de ejecución.

### 4. Gestión de Estado Global con Context API

Para mejorar la gestión de estado global:

- Implementé **custom hooks** para encapsular la lógica del contexto, haciendo que los componentes fueran más simples.
- Utilicé `useMemo` para evitar renders innecesarios, mejorando el rendimiento general de la aplicación.

---

## Lecciones Aprendidas

Este proyecto fue una gran oportunidad de aprendizaje, y me llevo varias lecciones importantes:

1. **Modularidad y Reutilización de Código:** Separar componentes y estilos en módulos facilita el mantenimiento a largo plazo.
   
2. **Mejora Continua con TypeScript:** El uso de **TypeScript** es fundamental para evitar errores, pero requiere una planificación cuidadosa de los tipos.

3. **Eficiencia con Sass:** **Sass** es extremadamente poderoso, pero su mal uso puede complicar el mantenimiento. Es crucial hacer un uso moderado del anidamiento y crear **mixins reutilizables** para estilos comunes.

4. **Gestión Asincrónica con React:** El manejo de datos asíncronos con React y TypeScript puede ser complicado, pero con las herramientas adecuadas (como hooks personalizados), se puede construir una lógica robusta.

---

## Conclusión

El desarrollo de este proyecto me permitió aplicar tecnologías modernas como **React**, **TypeScript**, y **Sass** mientras resolvía problemas complejos. Me siento mucho más cómodo con la creación de aplicaciones web escalables y mantenibles, y con una mejor comprensión de cómo utilizar estas herramientas de manera efectiva. 

Este proyecto me ha desafiado a pensar de manera más crítica sobre la arquitectura del código, la optimización de rendimiento y la reutilización de componentes, todo lo cual es fundamental para el desarrollo profesional en el ámbito de la programación.
