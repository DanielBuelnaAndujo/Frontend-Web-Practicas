[-----------]
  PREGUNTAS
[-----------]

--------------------------------------------------------------------
Responder: ¿por qué se usa un contexto y no props para la sesión?

Porque así se evita estar pasando props manualmente por muchos intermediarios. Al usar
un contexto se puede acceder más fácil y directamente la sesión por cualquiera que
la necesite.

--------------------------------------------------------------------
Responder: ¿qué pasa si un componente usa la sesión fuera del proveedor?

Si se utiliza el hook propio o useContext fuera del Provider, este devolverá 
el valor predeterminado configurado en el createContext(), que normalmente es undefined 
o null.

--------------------------------------------------------------------
Responder: ¿dónde se guarda el token y qué riesgo tiene ese lugar?

El token se guarda en el localStorage del navegador. Probablemente el riesgo más grande
es que un código malicioso acceda al localStorage y robe el token fácilmente.
