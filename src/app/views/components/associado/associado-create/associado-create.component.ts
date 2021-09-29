import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Associado } from 'src/app/models/associado';
import { AssociadoService } from 'src/app/servicos/associado.service';

@Component({
  selector: 'app-associado-create',
  templateUrl: './associado-create.component.html',
  styleUrls: ['./associado-create.component.css']
})
export class AssociadoCreateComponent implements OnInit {

  associado: Associado = {
    id: '',
    numero: 0,
    nome: '',
    sexo: 0,
    dataNascimento: '',
    idade2011: '',
    nomeMae: '',
    rg: '',
    situacao: 0,
    cpf: '',
    pisPasep: '',
    cargo: '',
    funcao: '',
    isentos: '',
    orgaoOrigem: '',
    dataAdmissaoOrgaoOrigem: '',
    falecidos: '',
    dataAdmissao: '',
    dataDemissao: '',
    dataAtualizacao: '',
    tipoMoeda: 0,
    salarioBruto: 0,
    salarioPadrao: 0,
    anuenio: 0,
    adi: 0,
    ap: 0,
    vp: 0,
    gb: 0,
    taxaDeProdutividade: 0,
    alteracaoSalarial: 0,
    total:0,
    dataCadastramento:'',
    email:'',
    associadoAtivo: true,
    endereco: {
      id: '',
      cep:  '',
      rua:  '',
      numero:  '',
      quadra:  '',
      lote:  '',
      complemento:  '',
      setor:  '',
      cidade:  '',
      estado:  ''
    },
    telefoneFixo: '',
    telefoneCelular: '',
    pagamento: {
      id: '',
      dataPagamento: '',
      dataVencimento: '',
      valorPago: 0,
      nomeAssociado: '',
      idAssociado: ''
    }
  }

  nome = new FormControl('', [Validators.minLength(3)]);
  cpf = new FormControl('', [Validators.minLength(11)]);
  telefone = new FormControl('', [Validators.minLength(11)]);

  constructor(
    private router : Router,
    private service : AssociadoService  ) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.router.navigate(['associado']);
  }

  create(): void {
    this.formatarCPF();
    this.service.create(this.associado).subscribe((resposta) => {
      this.router.navigate(['associado']);
      this.service.message('Associado criado com sucesso.');
    }, err => {
      if(err.error.error.match('já cadastrado')) {
        this.service.message(err.error.error);
      } else if (err.error.message.includes("número do registro de contribuinte individual brasileiro (CPF) inválido")) {
        this.service.message("CPF inválido");
      }
    })
  }

  errorValidNome() {
    if (this.nome.invalid) {
      return 'O nome deve ter entre 5 e 100 caracteres!';
    }
    return false;
  }

  errorValidCpf() {
    if (this.cpf.invalid) {
      return 'O cpf deve ter entre 11 e 15 caracteres!';
    }
    return false;
  }

  formatarCPF(): void {
    this.associado.cpf = this.associado.cpf.replace(/[^\d]/g, "");
    this.associado.cpf = this.associado.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }
}