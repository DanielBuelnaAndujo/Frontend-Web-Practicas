//  TODO: declarar la interfaz generica con estos cuatro metodos.
//     findById(id)      -> Promise<T | null>
//     findAll()         -> Promise<T[]>
//     save(entidad)     -> Promise<T>
//     delete(id)        -> Promise<void>

//import type { Repository } from './prestamo.repository.js';
import type { Prestamo } from './prestamo.entity.js';

export interface Repository<T, ID = string> {
  // TODO 1a: escribir aqui los cuatro metodos
  //findByLibro(libroId: string): Promise<Prestamo[] | null>;
  findAll(): Promise<T[]>;
  save(entity: T): Promise<T>;
  delete(id: ID): Promise<void>;
}
