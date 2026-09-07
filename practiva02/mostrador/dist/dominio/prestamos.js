import { LibroNoEncontradoError, SinEjemplaresError } from './tipos.js';
export const DIAS_DE_PRESTAMO = 14;
export const MULTA_POR_DIA = 5;
const UN_DIA = 86_400_000; // Milisegundos en un día
export function disponiblesDe(m, libro) {
    const prestados = m.prestamos.filter((p) => p.libroId === libro.id && p.devueltoEn === undefined).length;
    return Math.max(0, libro.ejemplares - prestados);
}
export function prestar(m, libroId, socio, hoy) {
    const libro = m.libros.find((l) => l.id === libroId);
    if (libro === undefined) {
        throw new LibroNoEncontradoError(`No se encontró el libro con id ${libroId}`);
    }
    if (disponiblesDe(m, libro) === 0) {
        throw new SinEjemplaresError(`No hay ejemplares disponibles del libro ${libro.titulo}`);
    }
    const prestamo = {
        folio: `P-${String(m.prestamos.length + 1).padStart(4, '0')}`,
        libroId: libro.id,
        socio,
        venceEn: new Date(hoy.getTime() + DIAS_DE_PRESTAMO * UN_DIA)
    };
    m.prestamos.push(prestamo);
    return prestamo;
}
export function estadoDe(p, hoy) {
    if (p.devueltoEn !== undefined)
        return 'devuelto';
    return hoy > p.venceEn ? 'vencido' : 'activo';
}
export function multaDe(p, estado, hoy) {
    const referencia = p.devueltoEn ?? hoy;
    const dias = Math.max(0, Math.ceil((referencia.getTime() - p.venceEn.getTime()) / UN_DIA));
    switch (estado) {
        case 'activo':
            return 0;
        case 'vencido':
            return dias * MULTA_POR_DIA;
        case 'devuelto':
            return dias * MULTA_POR_DIA;
        default:
            const _exhaustivo = estado;
            return _exhaustivo;
    }
}
export function pagar(prestamo, multa, pago) {
    if (prestamo === undefined) {
        throw new LibroNoEncontradoError(``);
    }
    if (pago > multa) {
        prestamo.devueltoEn = new Date();
    }
    return pago - multa;
}
