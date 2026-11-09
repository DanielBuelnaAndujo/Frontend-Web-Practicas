[-----------]
  PREGUNTAS
[-----------]

-------------------------------------------------------------------------------
Responder: ¿cuánto se ahorró y por qué el ahorro es pequeño en esta aplicación?

Como en este caso se la aplicación es pequeña, se tiene apenas una diferencia de unos pocos kb.
Esto es porque no hay tantos componentes complejos, además de que se crean archivos para gestionar
la carga dinámica de las paginas, haciendo que la diferencia entre el bundle original sea aún más
pequeña.

-------------------------------------------------------------------------------
Responder: ¿por qué falla la API si el preview corre en el puerto 4173?

Falla debido a la política CORS del backend. Este rechaza toda petición cuya Origin no este en su
whitelist, al no estar el origen http://localhost:4173, este bloquea cualquier petición proveniente
de el.

-------------------------------------------------------------------------------
Responder: ¿cuándo conviene un contexto y cuándo un store?

Se usan contextos para estados globales que cambian poco o nada debido a su fácil o limpio y directo acceso. Su desventaja es que cualquier cambio en el valor del contexto re-renderiza a todos los componentes consumidores.

Se utiliza store para estados dinámicos que cambian frecuentemente. Permite la suscripción a selectores específicos, lo que evita re-renderizados innecesarios en componentes que no utilizan el fragmento de estado modificado.
