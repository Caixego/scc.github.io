import { LocationChangeEvent } from "@angular/common";
import { Endereco } from "./endereco";
import { Pagamento } from "./pagamento";
import { Telefone } from "./telefone";

export interface Associado {
    id?: any;
    numero: Number;
    nome: String;
    sexo: any;
    dataNascimento: String;
    idade2011: String;
    nomeMae: String;
    rg: String;
    situacao: Number
    cpf: String;
    pisPasep: String;
    cargo: String;
    funcao: String;
    isentos: String;
    orgaoOrigem: String;
    dataAdmissaoOrgaoOrigem: String;
    falecidos: String;
    dataAdmissao: String;
    dataDemissao: String;
    dataAtualizacao: String;
    tipoMoeda: Number;
    salarioBruto: Number;
    salarioPadrao: Number;
    anuenio: Number;
    adi: Number;
    ap: Number;
    vp: Number;
    gb: Number;
    taxaDeProdutividade: Number;
    alteracaoSalarial: Number;
    total:Number;
    dataCadastramento:String;
    email:String;
    associadoAtivo: Boolean;
    endereco: Endereco;
    telefoneFixo: String;
    telefoneCelular: String;
    pagamento: Pagamento;
}