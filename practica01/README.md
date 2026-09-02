\[----------]

&#x20; PREGUNTAS

\[----------]



\---------------------------------------------------------------------------------------

Paso 2



Responder: ¿hubo algún error, alguna advertencia o algo en la consola que avisara?

No, JavaScript lo tomo como algo totalmente valido y sin errores.



\---------------------------------------------------------------------------------------

Paso 3



Responder: si el archivo tiene un error de tipos, ¿por qué node lo ejecuta? ¿Cuál comando revisa y cuál ejecuta?

Node "ignora" la sintaxis de TypeScript recortando o despejando toda esa sintaxis, dejando solo código JavaScript. Es por eso que corre bien aunque typescript diga que esta mal, porque JavaScript lo toma como código valido.



\---------------------------------------------------------------------------------------

Paso 4



Responder: de las dos líneas que usan const, ¿por qué sólo una falla?

TypeScript protege la referencia de la variable en memoria pero como es un objeto este puede cambiar sus valores internos sin cambiar su referencia como objeto en memoria.



Responder: al asignarle un texto a la variable con let, nadie escribió que fuera un número. ¿De dónde salió ese tipo?

TypeScript infiere el tipo por el primer valor que se le asigna. En este caso, un número.

\----------------------------------------------------------------------------------------





\[--------------------------]

&#x20;PROVOCAR ERRORES DISTINTOS

\[--------------------------]



\-------------------------------------------------------------------------------------

multas.ts:31:1 - error TS2588: Cannot assign to 'prestamo' because it is a constant.

31 prestamo = {

&#x20;  \~\~\~\~\~\~\~\~

Found 1 error in multas.ts:31



En este error se vuelve a reasignar la variable "prestamo" pero como es una constante marca error de que no puede cambiar.

\--------------------------------------------------------------------------------------



multas.ts:25:11 - error TS1312: Did you mean to use a ':'? An '=' can only follow a property name when the containing object literal is part of a destructuring pattern.



25    estado = 'activo',



Found 1 error in multas.ts:25



En este error se usa "=" en lugar de ":" para asignarle valor a un atributo de un objeto.

\--------------------------------------------------------------------------------------



multas.ts:25:4 - error TS2820: Type '"ACTIVO"' is not assignable to type 'EstadoPrestamo'. Did you mean '"activo"'?

25    estado: 'ACTIVO',

&#x20;     \~\~\~\~\~\~

&#x20; multas.ts:6:3

&#x20;   6   estado: EstadoPrestamo;

&#x20;       \~\~\~\~\~\~

&#x20;   The expected type comes from property 'estado' which is declared here on type 'Prestamo'





Found 1 error in multas.ts:25



En este error se usa "ACTIVO" como estado del préstamo en lugar de su versión en minúsculas "activo", por lo que typescript no lo permite al considerarse un texto diferente.

