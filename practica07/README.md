[-------------]
   PREGUNTAS
[-------------]

---------------------------------------------------------------------------
Responder: ¿por qué esta interfaz no menciona Express, NestJS ni memoria?

Porque esta dentro de la capa del dominio. Aquí solo hay reglas de negocio y no de cómo se van a comunicar las capas o dónde se van a guardar los datos específicamente.

---------------------------------------------------------------------------

Responder: ¿qué palabra de esa clase es la que promete cumplir la interfaz del paso anterior?

La palabra 'implements', funciona como un contrato en dónde cada implementación debe cumplir con todos los métodos.

---------------------------------------------------------------------------

Responder: ¿por qué este archivo no sabe qué es una petición HTTP?

Porque su única responsabilidad es ejecutar la lógica de negocio, no saber que se va a comunicar por medio de http ni saber nada de ese contexto.

---------------------------------------------------------------------------

Responder: ¿por qué el Service se inyecta sin token en el Controller, y el repositorio sí necesita uno?

Porque el controlador depende del servicio el cual es una clase que existe en tiempo de ejecución, por lo que si tiene una referencia de este. En cambio, el repositorio depende de una interfaz que no existe en ejecución y necesita una referencia para saber que inyectar.

---------------------------------------------------------------------------

Responder: ¿qué prueba, en los hechos, que agregar Miembros no rompió nada de Inscripciones?

Porque al ir a '/inscripciones' y probar los endpoint estos siguen funcionando igual.