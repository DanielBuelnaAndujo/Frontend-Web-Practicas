[------------]
   PREGUNTAS
[------------]

-----------------------------------------------------
Responder: ¿en qué se convirtió cada etiqueta del JSX?

En el modo clásico se crean llamadas a 'React.createElement' y en el modo automático se importa y usa funciones auxiliares directamente de 'react/jsx-runtime'.

-----------------------------------------------------
Responder: si React es «sólo una biblioteca», ¿quién traduce el JSX?

El encargado de orquestar la traducción es Vite 8 quien utiliza un transpilador para traducir el código. Por defecto se utiliza el transpilador Babel.

-----------------------------------------------------
Responder: ¿qué hace createRoot y qué hace render?

'createRoot' toma un elemento existente de la página HTML y la usa como referencia para construir y montar la aplicación. 'render' es el encargado de dibujar el contenido que le asignamos y actualizar la pantalla mostrando los cambios.

-----------------------------------------------------
Responder: ¿por qué el nombre de un componente empieza con mayúscula?

Porque así se evita que React confunda las anotaciones estándar de HTML con las hechas por el usuario.