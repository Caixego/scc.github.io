export interface Pagamento {
    id?: any;
    dataPagamento: String;
	dataVencimento: String;
	valorPago: Number;
	nomeAssociado: String;
	idAssociado?: any;
}