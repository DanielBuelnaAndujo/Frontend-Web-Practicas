[----------------]
    PREGUNTAS
[----------------]

----------------------------------------------------------------
Parte 2

Responder: ¿por qué una unión de valores y no una enumeración?

Es preferible la unión de valores porque typescript los "maneja" mejor y no generan código JavaScript extra. Por regla general es preferible las uniones literarias a enum a menos que se aprovechen las ventajas de los enum.

-----------------------------------------------------------------
Parte 3

Responder: ¿qué se gana con el tipo desconocido en lugar del que acepta todo?

Con el tipo 'unknown' obliga a comprobar el tipo de los dato. A diferencia del 'any' que acepta todo y no comprueba nada, lo que podría ocasionar errores de tipos en tiempo de ejecución.

-----------------------------------------------------------------
Parte 4

Responder: ¿por qué la fecha entra como parámetro?

Para facilitar las pruebas al solo cambiar el valor de la variable. También separa la responsabilidad, quita dependencia y se usa la misma durante toda la prueba.




