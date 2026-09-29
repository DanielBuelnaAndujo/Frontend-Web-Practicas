[-------------]
   PREGUNTAS
[-------------]

-----------------------------------------------------------------------
Responder: ¿qué pasaría si el módulo no quedara registrado en la raíz?

Si no quedara registrado en la raíz entonces NetJS no podrá inyectar las dependencias, provocando que todos los servicios y rutas regresen un error '404 Not Found'. 

-----------------------------------------------------------------------
Responder: ¿por qué los métodos del repositorio devuelven promesas si los datos van a estar en memoria?

Esto garantiza que se puede cambiar a una base de datos o manera de guardar las cosas diferente. Ahora mismo es instantáneo pero más adelante podría ser algo tardado que necesite de las promesas.

-----------------------------------------------------------------------
Responder: ¿qué error apareció al cambiar a la interfaz, y por qué la clase sí se había resuelto sola?

Si se utiliza la clase en concreto entonces NetJS si tiene manera de referenciar esta clase ya que si existe en tiempo de ejecución no como la interfaz.

-----------------------------------------------------------------------
Responder: ¿por qué el servicio necesita un token para el repositorio, pero el controlador no lo necesita para el servicio?

Porque el controlador depende de una clase que si existe en tiempo de ejecución. En cambio, el servicio depende de una interfaz que desaparece en tiempo de ejecución por lo que se usa un token para identificar la implementación concreta a usar.

-----------------------------------------------------------------------
Responder: ¿cuál es la diferencia entre un 400 y un 409?

El 400 Bad Request significa que la petición esta mal hecha (por ejemplo que 'miembroId' es un texto en lugar de un número) y 409 Conflict es que la petición esta bien hecha pero algo viola alguna regla de negocio.

-----------------------------------------------------------------------
Responder: ¿por qué cambió el código de estado de esa última petición?

Antes daba 409 porque ya estaba lleno el horario, al modificar el estado se libero un espacio por lo que ahora es valido que haya una nueva inscripción y se regresa un 201.