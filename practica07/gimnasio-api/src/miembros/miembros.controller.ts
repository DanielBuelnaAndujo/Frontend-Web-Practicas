import { BadRequestException, Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Patch, Post, Res } from '@nestjs/common';
import { MiembrosService } from './miembros.service.js';
import type { CrearMiembroDto } from './dto/crear-miembro.dto.js';
import type { ActualizarMiembroDto } from './dto/actualizar-miembro.dto.js';
import type { Response } from 'express';

@Controller('miembros')
export class MiembrosController {
    constructor(private readonly servicio: MiembrosService) {}

    @Get()
    async listar() {
        return await this.servicio.listar();
    }

    @Get(':id')
    async buscar(@Param('id') id: string) {
        const miembro = await this.servicio.buscar(Number(id));
        if (!miembro) {
            throw new NotFoundException(`No se encontró el miembro con id ${id}`);
        }
        return miembro;
    }

    @Post()
    @HttpCode(201)
    async crear(
        @Body() dto: CrearMiembroDto,
        @Res({ passthrough: true }) res: Response
    ) {
        if (!dto.nombre || !dto.correo || !dto.membresia) {
            throw new BadRequestException('Los campos nombre, correo y membresia son obligatorios');
        }

        const miembro = await this.servicio.crear(dto);
        
        res.setHeader('Location', `/miembros/${miembro.id}`);
        return miembro;
    }

    @Patch(':id')
    async actualizar(
        @Param('id') id: string,
        @Body() dto: ActualizarMiembroDto
    ) {
        const miembroActualizado = await this.servicio.actualizar(Number(id), dto);
        if (!miembroActualizado) {
            throw new NotFoundException(`No se encontró el miembro con id ${id}`);
        }
        return miembroActualizado;
    }

    @Delete(':id')
    async eliminar(@Param('id') id: string) {
        const fueEliminado = await this.servicio.eliminar(Number(id));
        if (!fueEliminado) {
            throw new NotFoundException(`No se encontró el miembro con id ${id}`);
        }
        
        return { message: `Miembro con id ${id} eliminado correctamente` };
    }
}