[-------------]
   Preguntas
[-------------]

------------------------------------------------------------
¿Por qué el nombre de una etiqueta propia debe llevar guion?

Para distinguir las etiquetas estándar de las personalizadas. Además de que se usan en lugar de los espacios porque sino se detecta como varias etiquetas en lugar de una.

------------------------------------------------------------
¿Qué ocurre al cambiar la variante en el HTML sin tocar TypeScript?

El componente reacciona automáticamente gracias a observedAttributes y attributeChangedCallback, actualizando sus clases o estilos internos sin recompilar código.

------------------------------------------------------------
¿Qué ocurre si quitas composed: true del CustomEvent?

El listener de #rejilla no se entera del clic y el contador no aumenta porque el evento se queda confinado dentro del Shadow DOM de la tarjeta.