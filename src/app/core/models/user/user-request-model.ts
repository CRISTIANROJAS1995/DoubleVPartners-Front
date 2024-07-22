export class UserRequestModel {
    email: string;
    password: string;
    nombre: string;
    numeroIdentificacion: string;
    telefono: string;

    constructor() {
        this.email = '';
        this.password = '';
        this.nombre = '';
        this.numeroIdentificacion = '';
        this.telefono = ''
    }
}