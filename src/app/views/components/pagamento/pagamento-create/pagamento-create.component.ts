import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Associado } from 'src/app/models/associado';
import { CadastrarPagamento } from 'src/app/models/cadastrarPagamento';
import { FiltroPagamento } from 'src/app/models/filtroPagamento';
import { AssociadoService } from 'src/app/servicos/associado.service';
import { PagamentoService } from 'src/app/servicos/pagamento.service';

@Component({
  selector: 'app-pagamento-create',
  templateUrl: './pagamento-create.component.html',
  styleUrls: ['./pagamento-create.component.css']
})
export class PagamentoCreateComponent implements OnInit {

  visualiarFormulario: Boolean = false;

  filtroPagamento: FiltroPagamento = {
    cpf: '',
    dataPagamento: ''
  }
  pagamento: CadastrarPagamento = {
    cpf: '',
    nome: '',
    id: '',
    valor: '',
    dataPagamento: ''
  };

  nome = new FormControl('', [Validators.minLength(5)]);
  cpf = new FormControl('', [Validators.minLength(11)]);
  valor = new FormControl('', [Validators.minLength(2)]);
  dataPagamento = new FormControl(new Date().toISOString().slice(0, -1));

  constructor(
    private service : PagamentoService,
    private associadosServ: AssociadoService,
    private router: Router

  ) { }

  ngOnInit(): void {
  }

  create() : void {
    this.formatarCPF();
    if (this.pagamento.dataPagamento) {
      this.service.create(this.pagamento).subscribe(resposta => {
        this.router.navigate(['pagamento']);
      })
    } else {
      this.service.message('Data do pagamento é obrigatória.');
    }
  }

  cancel(): void {
    this.router.navigate(['pagamento']);
  }

  limpar(): void {
    this.pagamento = {
      cpf: '',
      nome: '',
      id: '',
      valor: '',
      dataPagamento: ''
    };
    this.filtroPagamento.cpf = '';
    this.visualiarFormulario = false;
  }

  buscarAssociado(): void {
    this.formatarCPF();
    this.associadosServ.buscarPeloCPF(this.filtroPagamento.cpf).subscribe(resposta => {
      this.pagamento = resposta;
      if (this.pagamento.nome != '') {
        this.visualiarFormulario = true;
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
  errorValidValor() {
    if (this.valor.invalid) {
      return 'O valor deve ter entre 4 e 15 caracteres!';
    }
    return false;
  }
  errorValidDataPagamento() {
    if (this.dataPagamento.invalid) {
      return 'O valor deve ter entre 8 e 10 caracteres!';
    }
    return false;
  }
  
  formatarCPF(): void {
    this.filtroPagamento.cpf = this.formatador(this.filtroPagamento.cpf);
    this.pagamento.cpf = this.formatador(this.pagamento.cpf);
  }

  formatador(campo:String):String {
    campo = campo.replace(/[^\d]/g, "");
    campo = campo.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    return campo;
  }
}
