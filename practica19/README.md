\[-----------------]

&#x20;    PREGUNTAS

\[-----------------]



\-----------------------------------------------------------------------------

Responder: ¿qué archivo de Angular hace el papel de main.tsx, de App.tsx y de vite.config.ts?



Los equivalentes a cada uno son:

&#x20;main.tsx -> main.ts "El punto de entrada de la aplicación"

&#x20;App.tsx -> app.ts "El componente raíz de toda la aplicación"

&#x20;vite.config.ts -> angular.json "El archivo de configuración principal del proyecto"



\-----------------------------------------------------------------------------

Responder: ¿por qué clase() lleva paréntesis y para qué sirve track?



clase lleva paréntesis porque llama a la función que input.required() crea para

rastrear las lecturas del objeto en la tarjeta. De esta forma Angular sabe a quien

avisar si los valores del objeto cambian. Además de que así se obliga a que la 

tarjeta tenga obligatoriamente una instancia de Clase.



track sirve para darle a Angular un identificador único por cada elemento de la

lista dentro del ciclo @for. Esto hace que Angular sepa exactamente que movimientos

se hicieron evitando destruir y volver a renderizar tarjetas que no cambiaron,

de esta manera optimizando el rendimiento

