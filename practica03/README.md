[---------------------------------]
       Preguntas de reflexión
[---------------------------------]

Respondan en el README con sus propias palabras: sin investigar, como en una entrevista técnica.

------------------------------------------------------------------------------------------------

1. ¿Hizo falta una base de datos real para probar la regla de negocio? ¿Qué dice eso sobre para qué sirve el patrón Repository?

No hace falta una base de datos real para probar las reglas de negocio porque podemos usar los datos guardados en memoria. Justamente para eso sirve el patrón Repository, para que el sistema no dependa de una implementación en concreto, si no de una abstracción (en este caso una interfaz).

------------------------------------------------------------------------------------------------

2. El Service recibe el repositorio como Repository<Prestamo>, no InMemoryPrestamoRepository. ¿Qué se rompía si usaban la clase concreta?

No se rompe nada si usa la clase en concreta pero se pierde la función del patrón Repository de desacoplar el Service de todas las posibles implementaciones de PrestamoRepository en lugar de solo una generalización.

------------------------------------------------------------------------------------------------

3. Si cambiaran el Map en memoria por una base de datos real, ¿cuántos archivos tocarían? ¿Por qué tan pocos?

Solo cambiaríamos una línea de código en el 'main'. Solo es una debido a que el sistema esta hecho para funcionar con cualquier implementación de la interfaz PrestamoRepository. Solo tendríamos que crear una nueva implementación con esta interfaz y que esta sea el repositorio del sistema.
