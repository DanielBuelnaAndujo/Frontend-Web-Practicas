[--------------]
   PREGUNTAS
[--------------]

--------------------------------------------------
Responder: ¿por qué el Layout no necesita saber que es una tienda?

Porque funciona independientemente de quien lo use. No conoce quien o para que es usado, esa no es su responsabilidad.

--------------------------------------------------
Responder: ¿qué pasa si escribes onClick={onAgregar(producto)} sin la flecha?

La función se ejecuta cuando el componente se renderiza en lugar de hacerlo cuando el usuario haga click.

--------------------------------------------------
Responder: ¿por qué con carrito.push(...) el contador no se mueve y no sale ningún error?

Porque como sigue siendo la misma referencia en memoria React no lo toma como que hubo un cambio. Y no emite errores porque la acción es valida dentro de JavaScript.