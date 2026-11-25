# Práctica 21 - El panel del gimnasio: rutas, la API y eliminar

## Preguntas

### 1. ¿Qué pieza de React Router corresponde a `router-outlet`, a `routerLink` y a `routerLinkActive`?

* **`router-outlet`** sería `<Outlet />`, ya que es donde se renderiza el componente correspondiente a la ruta activa.
* **`routerLink`** sería `<Link>`, ya que permite navegar entre rutas sin recargar la página completa.
* **`routerLinkActive`** sería `<NavLink>`, ya que aplica clases o estilos automáticamente al enlace cuando su ruta coincide con la URL actual.

---

### 2. ¿Por qué la ruta comodín (`**`) va al final y la ruta vacía necesita `pathMatch: 'full'`?

* **Ruta comodín (`**`):** Angular evalúa las rutas de arriba hacia abajo. Como `**` coincide con todo, se coloca al final para que no afecte a las demás rutas.
* **Ruta vacía (`''`):** Angular utiliza por defecto `pathMatch: 'prefix'`. Como `""` es prefijo de todas las rutas, se cambia a `'full'` para que solo coincida si la ruta está completamente vacía.

---

### 3. ¿Dónde vive el valor de un campo en un formulario reactivo y en qué se diferencia del `useState` de React?

Vive en el modelo de TypeScript dentro de una instancia de `FormControl` (agrupada en un `FormGroup`) en la clase del componente, no en el DOM de la plantilla.

Su diferencia con `useState` es que `FormControl` no requiere *handlers* manuales por campo ni re-renderizar todo el componente en cada pulsación.

---

### 4. ¿Qué regresa un validador propio cuando el valor es válido y cuando no, y cómo se relaciona con `hasError`?

Cuando es válido regresa `null` y cuando no es válido regresa un objeto de error `ValidationErrors`, cuya clave identifica el tipo de fallo y su valor suele ser `true` o un objeto con detalles.

Se relaciona con `hasError` porque el método `control.hasError('nombreDelError')` revisa la propiedad `.errors` del `FormControl` (donde se almacenan los objetos devueltos por los validadores) y verifica si existe la clave exacta que retornó el validador al fallar.

---

### 5. ¿Qué cambió en el servicio del catálogo y por qué ningún componente se enteró?

Se sustituyó el arreglo/origen de datos estáticos locales por un `httpResource` conectado al endpoint `GET /clases` de la API, incorporando también la gestión de estados de carga y error.

Ningún componente se enteró porque se mantuvo intacta la interfaz pública del servicio.

---

### 6. ¿Por qué no hizo falta iniciar sesión para leer el catálogo?

Porque en el backend el endpoint `GET /clases` está configurado como una ruta pública.
