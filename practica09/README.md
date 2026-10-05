[-------------]
   PREGUNTAS
[-------------]

------------------------------------------------------------------------------------
Responder: ¿qué línea del Service o del Controller tuvo que cambiar para que Clases hablara con MySQL?

Ninguna línea. Como el controlador solo depende del servicio entonces no se cambia nada y como el servicio depende de la abstracción del repositorio entonces tampoco cambia nada.

------------------------------------------------------------------------------------
Responder: ¿por qué InscripcionesService no tuvo que cambiar ni una línea de las reglas de cupo y duplicados?

Porque 'InscripcionesService' no es responsable de hacer esas validaciones, por lo que el código queda igual.

------------------------------------------------------------------------------------
Responder: ¿por qué una interfaz no puede validar nada en tiempo de ejecución?

Porque las interfaces en typescript desaparecen o no existen en tiempo de ejecución.

------------------------------------------------------------------------------------
Responder: ¿qué código de estado responde y qué trae en el cuerpo?

Responde un código de estado 400 y trae en el cuerpo la lista de mensajes (errores) provocados por la petición.

------------------------------------------------------------------------------------
Responder: ¿cuántas líneas quedó más corto el controlador?

Quedo bastante más corto al eliminar todas las validaciones "manuales" que se hacían con los 'try-catch' y los 'if' que verificaban el tipo de error.

------------------------------------------------------------------------------------
Responder: si la respuesta llega en los dos casos, ¿quién bloquea realmente y a quién protege?

Protege al usuario para decirle al navegador de un usuario legitimo que ciertos sitios tienen permisos para leer las respuesta de una api.
