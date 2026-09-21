[-----------------]
     Preguntas
[-----------------]

--------------------------------------------------------------------
1. Generar el proyecto

Responder: ¿qué generó el comando nest new?

Genero dependencias, herramientas para el desarrollo y 5 archivos principales: main.ts, app.module.ts, app.controller.ts, app.service.ts y app.controller.spec.ts

--------------------------------------------------------------------
2. Recorrer la estructura generada

Responder: ¿qué hace el AppService que ya viene generado?

Expone el método 'getHello()' que devuelve el texto 'Hello World!'

--------------------------------------------------------------------
3. Exponer el catálogo de clases

Responder: ¿por qué la ruta funciona sin declarar nada en app.module.ts?

Porque AppController ya viene registrado por defecto en el arreglo controllers dentro de app.module.ts

--------------------------------------------------------------------
4. Agregar una clase nueva

Responder: ¿qué pasaría si el cuerpo de la petición viniera vacío?

Si se envía un '{}' en el body entonces se retornara un 201 junto con el id generado. Esto typescript solo valida en compilación y no en tiempo de ejecución donde se ejecuta código JavaScript que considera valido que no se envié un 'nombre'.

Si no se envía nada en el body se retorna un 500 "Internal server error" porque el cuerpo en el controller queda como 'undefined'.

--------------------------------------------------------------------
5. Probar las cuatro peticiones

Responder: ¿en qué archivo vive hoy toda la lógica de la práctica?

Vive en src/app.controller.ts aunque debería separarse en varias responsabilidades en servicios como clases.service.ts o app.service.ts

