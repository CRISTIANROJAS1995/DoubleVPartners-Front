import { UserResponseSummaryModel } from './user-response-summary-model';

export class UserResponseDtoModel {
    identificador: string;
    role: UserResponseGenericDtoModel;
    email: string;
    nombre: string;
    numeroIdentificacion: string;
    telefono: string;

    constructor() {
        this.identificador = '';
        this.role = new UserResponseGenericDtoModel();
        this.email = '';
        this.nombre = '';
        this.numeroIdentificacion = '';
        this.telefono = '';
    }
}

export class UserResponseGenericDtoModel{
    id: number;
    name: string;

    constructor() {
        this.id =  0;
        this.name = '';
    }
}

