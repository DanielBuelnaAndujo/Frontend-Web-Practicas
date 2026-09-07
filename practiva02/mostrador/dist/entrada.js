import promts from "prompts";
export async function pedirTexto(mensaje) {
    const respuesta = await promts({
        type: 'text',
        name: 'valor',
        message: mensaje
    });
    const valor = respuesta.valor;
    if (typeof valor !== 'string') {
        return undefined;
    }
    const limpio = valor.trim();
    return (limpio === '') ? undefined : limpio;
}
export async function pedirOpcion(mensaje, opciones) {
    const respuesta = await promts({
        type: 'select',
        name: 'valor',
        message: mensaje,
        choices: opciones.map((o) => ({ title: o.etiqueta, value: o.valor }))
    });
    const valor = respuesta.valor;
    return (typeof valor === 'string') ? valor : undefined;
}
