import { Saludo } from "./Saludo.tsx"
import { TarjetaPerfil } from "./TarjetaPerfil.tsx";

export default function App() {
  return (
    <main className="App">
      <Saludo nombre="ISW" />

      <section className="equipo">
        <TarjetaPerfil nombre="Juan Perez" carrera="Ingeniería en Sistemas" semestre={5} />
        <TarjetaPerfil nombre="Maria García" carrera="Ingeniería en Computación" semestre={4} />
        <TarjetaPerfil nombre="Carlos López" carrera="Ingeniería en Electrónica" semestre={3} />
      </section>
    </main>
  );
}