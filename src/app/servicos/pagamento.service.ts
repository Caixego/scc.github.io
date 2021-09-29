import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CadastrarPagamento } from '../models/cadastrarPagamento';
import { FiltroPagamento } from '../models/filtroPagamento';
import { Pagamento } from '../models/pagamento';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {
  baseUrl: String = environment.baseUrl;

  constructor(
    private http : HttpClient,
    private snack: MatSnackBar
    ) { }

    findByFiltroPagamento(filtroPagamento : FiltroPagamento): Observable<Pagamento[]> {
      const url = this.baseUrl + "/pagamento/filtro";
      return this.http.post<Pagamento[]>(url, filtroPagamento);
    }

    create (pagamentoCadastro : CadastrarPagamento):Observable<Pagamento[]> {
      const url = this.baseUrl + "/pagamento";
      return this.http.post<Pagamento[]>(url, pagamentoCadastro);
    }

    message(msg: String): void {
      this.snack.open(`${msg}`, 'OK', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 4000
      });
    }
}
