[-----------]
  PREGUNTAS
[-----------]

-----------------------------------------------------
Responder: ¿por qué el 404 sí tiene encabezado y pie?

Porque la ruta * está anidada dentro del <Route element={<Layout />}>, por lo que se carga
primero el encabezado y después el componente de NoEncontrado.

-----------------------------------------------------
Responder: ¿qué cambia en la pestaña Red si usas <a href> en lugar de Link?

Se recarga toda la página en lugar de solo cambiar los datos de la pantalla, por lo que se hacen
otra vez las peticiones del HTML, CSS y todo lo demás.

-----------------------------------------------------
Responder: ¿en qué tipo de dato llega el id de la URL y qué pasa si no lo conviertes?

El dato siempre llega como texto (string) por lo que si no lo conviertes al tipo especifico que
necesitas, pueden ocurrir errores de tipado.

-----------------------------------------------------
Responder: ¿qué pasa al ir de /clases/1 a /clases/2 si el id no está en las dependencias del efecto?

No cambiarían los datos aunque se tenga un id diferente en la URL; React no lo interpretaría como que hubo un cambio, solo se actualizarían los datos si "intento" cambia, por ejemplo, actualizando la página.
-----------------------------------------------------
