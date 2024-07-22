import { HibeatResponseModel } from '../hibeat/hibeat-response-model';
import { UserResponseSummaryModel } from './user-response-summary-model';

export class UserResponseDtoModel {
    identifier: string;
    role: UserResponseGenericDtoModel;
    gender: UserResponseGenericDtoModel;
    typeIdentification: UserResponseGenericDtoModel;
    state: UserResponseGenericDtoModel;
    email: string;
    name: string;
    lastName: string;
    identification: string;
    phone: string;
    address: string;
    deviceToken: string;

    constructor() {
        this.identifier = '';
        this.role = new UserResponseGenericDtoModel();
        this.gender = new UserResponseGenericDtoModel();
        this.typeIdentification = new UserResponseGenericDtoModel();
        this.state = new UserResponseGenericDtoModel();
        this.email = '';
        this.name = '';
        this.lastName = '';
        this.email = '';
        this.identification = '';
        this.phone = '';
        this.address = '';
        this.deviceToken = '';
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

