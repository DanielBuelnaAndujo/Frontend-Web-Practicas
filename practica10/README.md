[-----------------]
     PREGUNTAS
[-----------------]

---------------------------------------------------------------------
Responder: ¿por qué el filtro atrapa la clase base y no cada error por separado?

Por que así atrapa a todas las clases que parten de 'ErrorDeDominio' y las maneja en un solo lugar. Además de que deja seguir el flujo normal de los errores ajenos a esta clase.

---------------------------------------------------------------------
Comentar un momento la línea next(), mandar una petición y anotar qué pasa. Después regresarla

La petición se queda colgada indefinidamente y no arroja ningún error porque nunca pasa al siguiente 'paso' de ejecución.

---------------------------------------------------------------------
Responder: ¿por qué este middleware no podría decidir si un usuario tiene permiso para una ruta?

Porque se ejecuta antes que todo sin saber que el controlador atenderá la petición.

---------------------------------------------------------------------
Responder: ¿por qué la petición que responde 409 no aparece en ese registro?

Porque 'tap' solo corre si el controlador respondió bien. Si regresa un '409' se salta directo al filtro.

---------------------------------------------------------------------
Responder: ¿por qué este cambio rompe a cualquier cliente que ya estuviera usando la API?

Porque modifica la estructura de la respuesta exitosa (el JSON), rompiendo el contrato con la API.

---------------------------------------------------------------------
Responder: si el servidor respondió en los dos casos, ¿quién bloquea y a quién protege?

Bloquea al navegador. El servidor procesa y responde en ambos casos, pero solo incluye el encabezado de permiso cuando el origen es http://localhost:5173

Protege al usuario final para que un sitio web malicioso abierto en otra pestaña no pueda hacer peticiones en su nombre y leer respuestas privadas desde un origen no autorizado.

---------------------------------------------------------------------
Responder: ¿por qué el campo se llama passwordHash y no password?

Porque así deja claro que se guarda el HASH y no el texto de la contraseña.

---------------------------------------------------------------------
Responder: ¿por qué los dos errores del inicio de sesión dicen exactamente lo mismo?

Para evitar que un atacante vayan probando distintas formar de ingresar con una cuenta ajena, si regresara un error 'contraseña incorrecta' o 'usuario inexistente' lo haría más fácil para el.

---------------------------------------------------------------------
Responder: si el contenido se puede leer, ¿qué es lo que protege la firma?

Protege la integridad y autenticidad del token. Garantiza que fue emitido por el servidor y que ningún dato fue alterado en el camino.

---------------------------------------------------------------------
Responder: ¿por qué es más seguro proteger todo y abrir a mano, que al revés?

Por que olvidar proteger un endpoint es más peligroso que olvidar dar acceso publico. Si se olvida usar '@Publico()' se devuelve un '401 Unauthorized' y no pasa a mayores como pasaría si se olvidara poner un '@UseGuards()'.

---------------------------------------------------------------------
Responder: ¿cuál es la diferencia entre un 401 y un 403?

401 es no autenticado, el servidor no sabe quien eres. 403 es no autorizado, el servidor no permite realizar la acción.

---------------------------------------------------------------------
Responder: ¿cuántas líneas del AuthService tuvieron que cambiar para pasar de memoria a MySQL? ¿Por qué?

Ninguna, porque el AuthService depende de una abstracción y no de la clase en concreto (la que puede cambiar).

---------------------------------------------------------------------
Responder: ¿por qué es importante tomar al usuario de los claims del token y no de un parámetro de la URL o del cuerpo?

Porque el cliente tiene todo el control de la URL, sería confiar en datos de dudosa procedencia.

Si Karla inicia sesión pero llama a un GET /miembros/3/inscripciones, y el servidor usara el 3 sin contrastarlo contra el token, Karla podría ver las clases de Sofía o llenarle su agenda y agotarle sus cupos sin su consentimiento.

Se utilizan los claims sub, rol y miembroId extraídos del payload verificado. El cliente no puede falsificarlos porque entonces no coincidirá la firma.






