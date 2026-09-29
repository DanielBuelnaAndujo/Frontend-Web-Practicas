import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { MIEMBRO_REPOSITORY } from './miembros.tokens.js';
import type { MiembroRepository } from './dominio/miembro.repository.js';
import type { CrearMiembroDto } from './dto/crear-miembro.dto.js';
import type { ActualizarMiembroDto } from './dto/actualizar-miembro.dto.js';

@Injectable()
export class MiembrosService {
  constructor(
    @Inject(MIEMBRO_REPOSITORY)
    private readonly miembroRepository: MiembroRepository,
  ) {}

  async listar() { 
    return await this.miembroRepository.listar(); 
  }

  async buscar(id: number) {
    const miembro = await this.miembroRepository.buscarPorId(id);
    
    if (!miembro) {
      throw new NotFoundException(`El miembro con ID ${id} no existe`);
    }
    
    return miembro;
  }

  async crear(datos: CrearMiembroDto) {
    return await this.miembroRepository.crear(datos);
  }

  async actualizar(id: number, datos: ActualizarMiembroDto) {
    const miembroActualizado = await this.miembroRepository.actualizar(id, datos);
    
    if (!miembroActualizado) {
      throw new NotFoundException(`No se puede actualizar: el miembro con ID ${id} no existe`);
    }
    
    return miembroActualizado;
  }

  async eliminar(id: number) {
    const fueEliminado = await this.miembroRepository.eliminar(id);
    
    if (!fueEliminado) {
      throw new NotFoundException(`No se puede eliminar: el miembro con ID ${id} no existe`);
    }
    
    return fueEliminado;
  }
}