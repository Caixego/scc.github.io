import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Associado } from 'src/app/models/associado';
import { AssociadoService } from 'src/app/servicos/associado.service';

@Component({
  selector: 'app-associado-update',
  templateUrl: './associado-update.component.html',
  styleUrls: ['./associado-update.component.css']
})
export class AssociadoUpdateComponent implements OnInit {

  id_associado = '';

  associado: Associado = {
    id: '',
    numero: 0,
    nome: '',
    sexo: '',
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
      cep:  '7777777',
      rua:  '777',
      numero:  '77',
      quadra:  '777',
      lote:  '777',
      complemento:  '777',
      setor:  '7777',
      cidade:  '7777',
      estado:  '777'
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

  constructor(
    private router : Router,
    private service : AssociadoService,
    private route : ActivatedRoute  ) { }

  ngOnInit(): void {
    this.id_associado = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.id_associado).subscribe((resposta) => {
      this.associado = resposta;
    })
  }

  cancel(): void {
    this.router.navigate(['associado']);
  }

  update(): void {
    this.formatarCPF();
    this.associado.associadoAtivo = true;
    this.service.update(this.associado).subscribe((resposta) => {
      this.router.navigate(['associado']);
      this.service.message('Associado atualizado com sucesso.');
    }, err => {
      if(err.error.error.match('já cadastrado')) {
        this.service.message(err.error.error);
      } else if (err.error.erros[0].message === "número do registro de contribuinte individual brasileiro (CPF) inválido") {
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

  conversor() :void {
    this.converteDadosSexo();
  }

  converteDadosSexo():void {
    if(this.associado.sexo == "MASCULINO"){
      this.associado.sexo = 0;
    } else if (this.associado.sexo == "FEMININO") {
      this.associado.sexo = 1;
    } else {
      this.associado.sexo = 0;
    }
   }

   formatarCPF(): void {
    this.associado.cpf = this.associado.cpf.replace(/[^\d]/g, "");
    this.associado.cpf = this.associado.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }
}