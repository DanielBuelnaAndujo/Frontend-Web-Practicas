[---------------------------------]
       Preguntas de reflexión
[---------------------------------]

Respondan en el README con sus propias palabras: sin investigar, como en una entrevista técnica.

------------------------------------------------------------------------------------------------

1. Express manda los rechazos de un handler async directo al middleware de errores, sin try/catch en cada ruta. ¿Qué tendrían que agregar en cada ruta si esto no fuera así?

En cada ruta se tendría que agregar un try/catch y llamar a next(error) para evitar que la petición quede "colgada" o esperando. Esto hace el código un poco menos legible o limpio.

------------------------------------------------------------------------------------------------

2. ¿Por qué el servicio no lanza directamente un 409 en vez de EjemplarPrestadoError?

Porque separa la responsabilidad y desacopla el servicio y el servidor. El servidor no debería de conocer sobre los errores del HTML, esto por si la manera de enviar y recibir las cosas cambia a otro entorno diferente al HTML el servidor puedo ser reutilizable.

------------------------------------------------------------------------------------------------

3. Si mañana agregaran una app móvil que también consume esta API, ¿qué archivos de esta práctica tendrían que tocar?

Ninguno. Las rutas reciben y devuelven JSON estándar con contratos definidos que cualquier consumidor puede entender. Y pues obviamente el servidor tendría que ser diferente del localhost.
