[-------------]
   PREGUNTAS
[-------------]

--------------------------------------------------------------------------------
Responder: ¿por qué el paquete del adaptador se llama adapter-mariadb si usamos MySQL?

Porque ambos comparten el mismo protocolo de comunicación de red y la estructura del motor de base de datos.

--------------------------------------------------------------------------------
Responder: ¿editar schema.prisma cambió algo en la base de datos antes de migrar?

No, no cambia nada. Los cambios solo ocurren al ejecutar los comandos de migración, no al editar el schema.

--------------------------------------------------------------------------------
Responder: ¿la carpeta de migraciones es una foto del esquema o un historial?

Es un historial de las modificaciones del esquema y la base de datos. Funciona como un control de versiones con cada migración teniendo su archivo 'migration.sql'.

--------------------------------------------------------------------------------
Responder: ¿por qué Horario.clase sí crea columna y Clase.horarios no?

Porque el modelo 'Horario' declara explícitamente la relación entre 'Horario' y 'Clase' al usar '@relation'. En su lugar el modelo 'Clase' solo tiene 'horarios Horario[]', esto lo usa prisma para saber que tiene una relación con 'Horario'.

--------------------------------------------------------------------------------
Responder: ¿de dónde sale la relación de muchos a muchos entre Miembro y Horario, si nunca se declaró?
Prisma detecta que hay una relación para 'Miembro' y 'Horario' en 'Inscripcion' y que existe '@@unique([horarioId, miembroId])', el esquema resuelve la relación sin declararla directamente en 'Miembro' y 'Horario'.
