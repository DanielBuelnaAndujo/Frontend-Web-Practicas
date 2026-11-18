\## Preguntas



\### 1. ¿Qué archivo de Angular hace el papel de `main.tsx`, de `App.tsx` y de `vite.config.ts`?



Los equivalentes a cada uno son:



\* \*\*`main.tsx` → `main.ts`\*\*: El punto de entrada de la aplicación.

\* \*\*`App.tsx` → `app.ts`\*\*: El componente raíz de toda la aplicación.

\* \*\*`vite.config.ts` → `angular.json`\*\*: El archivo de configuración principal del proyecto.



\---



\### 2. ¿Por qué `clase()` lleva paréntesis y para qué sirve `track`?



\* \*\*`clase()`\*\*: Lleva paréntesis porque llama a la función (\*Signal\*) que `input.required()` crea para rastrear las lecturas del objeto en la tarjeta. De esta forma, Angular sabe a quién avisar si los valores del objeto cambian, además de que así se obliga a que la tarjeta tenga obligatoriamente una instancia de `Clase`.

\* \*\*`track`\*\*: Sirve para darle a Angular un identificador único por cada elemento de la lista dentro del ciclo `@for`. Esto hace que Angular sepa exactamente qué movimientos se hicieron, evitando destruir y volver a renderizar tarjetas que no cambiaron y optimizando así el rendimiento.

