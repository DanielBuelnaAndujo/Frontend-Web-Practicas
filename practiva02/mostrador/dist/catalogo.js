import { readFileSync } from 'node:fs';
import path from 'node:path';
function esLibro(valor) {
    if (typeof valor !== 'object' || valor === null) {
        return false;
    }
    const o = valor;
    if (typeof o.id !== 'string' || typeof o.titulo !== 'string' || typeof o.autor !== 'string' || typeof o.ejemplares !== 'number') {
        return false;
    }
    if ('anio' in o && o.anio !== undefined && typeof o.anio !== 'number') {
        return false;
    }
    return true;
}
export function cargarCatalogo(ruta) {
    const rutaAbsoluta = path.resolve(import.meta.dirname, '..', ruta);
    const texto = readFileSync(rutaAbsoluta, 'utf-8');
    const crudo = JSON.parse(texto);
    if (typeof crudo !== 'object' || crudo === null) {
        throw new Error('El archivo no contiene un JSON válido');
    }
    const posibles = crudo.libros;
    if (!Array.isArray(posibles)) {
        throw new Error('El archivo no contiene un catálogo válido');
    }
    const libros = posibles.filter(esLibro);
    return { libros, descartados: posibles.length - libros.length };
}
