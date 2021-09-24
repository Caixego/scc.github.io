import { LocationChangeEvent } from "@angular/common";

export interface Endereco {
    id?: any;
    cep: String;
	rua: String;
	numero: String;
	quadra: String;
	lote: String;
	complemento: String;
	setor: String;
	cidade: String;
	estado: String;
}