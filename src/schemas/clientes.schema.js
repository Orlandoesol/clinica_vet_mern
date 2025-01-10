import { z } from "zod";

export const createClientesSchema = z.object({
    documento: z
    .number({
        required_error: 'El documento es requerido',
    }),
    nombre: z
    .string({
        required_error: 'Nombre es requerido',
    }),
    primerApellido: z
    .string({
        required_error: 'El primer apellido es requerido',
    }),
    segundoApellido: z
    .string({
        required_error: 'El segundo apellido es requerido',
    }),
    telefono_1: z
    .number({
        required_error: 'El telefono 1 es requerido',
    }),
    telefono_2: z
    .number({
        required_error: 'El telefono 2 es requerido',
    }),
    email: z
    .string({
        required_error: 'El email es requerido',
    })
});