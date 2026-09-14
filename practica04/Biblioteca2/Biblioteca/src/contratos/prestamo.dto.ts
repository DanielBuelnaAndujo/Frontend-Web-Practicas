import type { Prestamo, EstadoPrestamo } from '../dominio/prestamo.entity.js';

export interface PrestamoResponseDto {
  // TODO 3b.1: declarar los campos publicos
  folio: string,
  libroId: string,
  ejemplares: number[],
  socioId: string,
  estado: EstadoPrestamo,
  creadoEn: string
}

export interface CrearPrestamoRequestDto {
    libroId: string,
    socioId: string,
    ejemplares: number[]
}

export interface ErrorResponseDto {
    error: string;
    mensaje: string;
    detalles?: string[];
}

export function aResponseDto(p: Prestamo): PrestamoResponseDto {
  // TODO 3b.2: construir y devolver el DTO
  return {
    folio: p.folio,
    libroId: p.libroId,
    ejemplares: p.ejemplares,
    socioId: p.socioId,
    estado: p.estado,
    creadoEn: p.creadoEn.toISOString(),
  }
}