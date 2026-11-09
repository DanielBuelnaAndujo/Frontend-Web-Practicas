[-------------]
   PREGUNTAS
[-------------]

---------------------------------------------------------------------------------
Responder: ¿la ruta protegida hace segura la aplicación? ¿Qué es lo que de verdad protege los datos?

No, no la hace segura, solo mejora la experiencia del usuario al no preguntar o volver a
cargar cosas. Lo que de verdad protege y hace segura a la aplicación es el backend y todas 
las validaciones que este hace.

---------------------------------------------------------------------------------
Responder: ¿por qué no se manda el miembroId al inscribirse?

Porque ya viene en el token. Este se manda en cada petición junto con los demás datos
en el payload. Esto también protege de riesgos de suplantación.

---------------------------------------------------------------------------------
Responder: ¿qué diferencia hay entre un 401 y un 403?

Un 401 es no autorizado, es algo como "no se quien eres". Y el 403 es no tienes permiso,
es algo como "se quien eres pero no tienes permiso".
