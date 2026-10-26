[-------------]
   PREGUNTAS
[-------------]

-------------------------------------------------------------
Responder: ¿por qué en la pestaña Red salen dos peticiones al cargar?

Porque React ejecuta intencionalmente los efectos 2 veces al montarse para ayudar a detectar
efectos secundarios no deseados.

-------------------------------------------------------------
Responder: ¿qué pasa si quitas el arreglo de dependencias del efecto? Muéstralo en la pestaña Red?

Si se quita, entonces se ejecutará cada renderizado del componente. Al disparar las peticiones
se producen nuevos renderizados que vuelven a disparar la petición, creando un bucle de 
peticiones.

-------------------------------------------------------------
Responder: ¿qué hace e.preventDefault() y qué pasa si lo quitas?

Previene el comportamiento por defecto del navegador, que es recargar toda la página
perdiendo los datos. Si se quita, hace que no se pueda realizar el pago por lo mismo que
recarga la página y reinicia los estados. 