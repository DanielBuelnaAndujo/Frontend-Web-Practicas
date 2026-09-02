type EstadoPrestamo = 'activo' | 'devuelto' | 'vencido';

interface Prestamo {
  multa: number;
  ejemplar: number;
  estado: EstadoPrestamo;
  nombreSocio?: string;
}

function calcularMulta(prestamo: Prestamo): number {
  const cargoFijo = 50;
  return prestamo.multa + cargoFijo;
}

function armarRecibo(prestamo: Prestamo): string {
  const socio = prestamo.nombreSocio ?? 'Socio no registrado';
  const total = calcularMulta(prestamo);

  return `Recibo: Socio: ${socio} | Ejemplar: ${prestamo.ejemplar} | Estado: ${prestamo.estado} | Total a pagar: $${total}`;
}

const prestamo: Prestamo = {
   multa: 350, 
   ejemplar: 14,
   estado: 'activo',
   nombreSocio: 'Daniel'
  };

console.log(armarRecibo(prestamo));

