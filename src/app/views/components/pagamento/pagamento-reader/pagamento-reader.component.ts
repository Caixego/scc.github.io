import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { FiltroPagamento } from 'src/app/models/filtroPagamento';
import { Pagamento } from 'src/app/models/pagamento';
import { PagamentoService } from 'src/app/servicos/pagamento.service';

@Component({
  selector: 'app-pagamento-reader',
  templateUrl: './pagamento-reader.component.html',
  styleUrls: ['./pagamento-reader.component.css']
})
export class PagamentoReaderComponent implements OnInit {

  cpf: String = '';
  pagamentos: Pagamento[] = [];

  filtroPagamento: FiltroPagamento = {
    cpf: '',
    dataPagamento: ''
  }

  displayedColumns: string[] = ['id', 'dataPagamento', 'valorPago', 'nomeAssociado'];
  dataSource = new MatTableDataSource<Pagamento>(this.pagamentos);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private service : PagamentoService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.cpf = '0';
    this.buscarPagamentos();
  }

  buscarPagamentos():void {
    this.formatarCPF();
    console.log(this.filtroPagamento.cpf);
    this.service.findByFiltroPagamento(this.filtroPagamento).subscribe((resposta) => {
      this.pagamentos = resposta;
      this.dataSource = new MatTableDataSource<Pagamento>(this.pagamentos);
      this.dataSource.paginator = this.paginator;
    });
  }

  incluirPagamento():void {
    this.router.navigate(['pagamento/create']);
  }

  formatarCPF(): void {
    this.filtroPagamento.cpf = this.filtroPagamento.cpf.replace(/[^\d]/g, "");
    this.filtroPagamento.cpf = this.filtroPagamento.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

}
