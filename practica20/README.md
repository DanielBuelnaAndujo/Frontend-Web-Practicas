\## Preguntas



\### 1. ¿Qué diferencia hay entre un `signal` y un `computed`, y cuál se parece a `useState` y cuál a `useMemo`?



\* \*\*Diferencia:\*\* `signal` permite leer y modificar un dato directamente, mientras que `computed` calcula un resultado de solo lectura a partir de otros signals y se actualiza automáticamente cuando cambian los datos de los que depende.

\* \*\*`signal` se parece a `useState`:\*\* Ambos guardan un dato base que se puede leer y modificar directamente cuando ocurre una acción.

\* \*\*`computed` se parece a `useMemo`:\*\* Ambos sirven para calcular y guardar en memoria un valor derivado a partir de otros estados, evitando hacer el cálculo de nuevo si los datos originales no han cambiado.



\---



\### 2. ¿Qué pasa si el filtro hace `new Catalogo()` en lugar de `inject(Catalogo)`?



Se crea un objeto completamente nuevo y aislado en memoria, distinto al que está usando el tablero principal. De esta forma se rompe la comunicación y el estado compartido, pues solo se estará modificando la copia local del filtro.

