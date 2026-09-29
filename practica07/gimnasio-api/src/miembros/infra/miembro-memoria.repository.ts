import { Injectable } from '@nestjs/common';
import type { MiembroRepository } from '../dominio/miembro.repository.js';
import type { Miembro } from '../dominio/entidades.js';
import type { CrearMiembroDto } from '../dto/crear-miembro.dto.js';
import type { ActualizarMiembroDto } from '../dto/actualizar-miembro.dto.js';

@Injectable()
export class MiembroMemoriaRepository implements MiembroRepository {
  private miembros: Miembro[] = [
    { id: 1, nombre: 'Joaquin', correo: 'joaquin@test.com', membresia: 'Mensual', activo: true },
    { id: 2, nombre: 'Ana', correo: 'ana@test.com', membresia: 'Anual', activo: true },
    { id: 3, nombre: 'Luis', correo: 'luis@test.com', membresia: 'Diaria', activo: false }
  ];
  private siguienteId = 4;

  async listar(): Promise<Miembro[]> { 
    return this.miembros; 
  }

  async buscarPorId(id: number): Promise<Miembro | null> {
    const miembro = this.miembros.find((m) => m.id === id);
    return miembro || null;
  }

  async crear(datos: CrearMiembroDto): Promise<Miembro> {
    const nuevoMiembro: Miembro = {
      id: this.siguienteId++,
      nombre: datos.nombre,
      correo: datos.correo,
      membresia: datos.membresia,
      activo: true
    };
    
    this.miembros.push(nuevoMiembro);
    return nuevoMiembro;
  }

  async actualizar(id: number, datos: ActualizarMiembroDto): Promise<Miembro | null> {
    const indice = this.miembros.findIndex((m) => m.id === id);
    
    if (indice === -1) {
      return null;
    }

    this.miembros[indice] = {
      ...this.miembros[indice],
      ...datos
    };

    return this.miembros[indice];
  }

  async eliminar(id: number): Promise<boolean> {
    const indice = this.miembros.findIndex((m) => m.id === id);
    
    if (indice === -1) {
      return false;
    }

    this.miembros.splice(indice, 1);
    return true;
  }
}