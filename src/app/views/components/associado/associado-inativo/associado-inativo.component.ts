import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Associado } from 'src/app/models/associado';
import { AssociadoService } from 'src/app/servicos/associado.service';

@Component({
  selector: 'app-associado-inativo',
  templateUrl: './associado-inativo.component.html',
  styleUrls: ['./associado-inativo.component.css']
})
export class AssociadoInativoComponent implements AfterViewInit {

  associados: Associado[] = [];

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'action'];
  dataSource = new MatTableDataSource<Associado>(this.associados);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
      private service : AssociadoService,
      private router : Router) {}

  ngAfterViewInit() {
    this.findAll();
  }

  findAll():void {
    this.service.findAll().subscribe((resposta) => {
      resposta.forEach(x => {
        if (x.associadoAtivo === false) {
          this.associados.push(x);
        }
      })
      this.dataSource = new MatTableDataSource<Associado>(this.associados);
      this.dataSource.paginator = this.paginator;
    })
  }
}