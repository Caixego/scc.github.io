import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Associado } from 'src/app/models/associado';
import { AssociadoService } from 'src/app/servicos/associado.service';

@Component({
  selector: 'app-associado-delete',
  templateUrl: './associado-delete.component.html',
  styleUrls: ['./associado-delete.component.css']
})
export class AssociadoDeleteComponent implements OnInit {

  id_associado = '';
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

  constructor(
    private router : Router,
    private service : AssociadoService,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id_associado = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.id_associado).subscribe(resposta => {
       this.associado = resposta;
    })
  }

  cancel(): void {
    this.router.navigate(['associado']);
  }

  delete(): void {
    this.service.delete(this.id_associado).subscribe(reposta => {
      this.router.navigate(['associado']);
      this.service.message('Associado inativado com sucesso.');
    }, err => {
      this.service.message(err.error.error);
    })
  }

}
