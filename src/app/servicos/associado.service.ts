import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Associado } from '../models/associado';

@Injectable({
  providedIn: 'root'
})
export class AssociadoService {
  baseUrl: String = environment.baseUrl;

  constructor(
    private http : HttpClient,
    private snack: MatSnackBar
    ) { }

  findById(id : any): Observable<Associado> {
    const url = this.baseUrl + "/associado/"+id;
    return this.http.get<Associado>(url);
  }

  findAll():Observable<Associado[]> {
    const url = this.baseUrl + "/associado";
    return this.http.get<Associado[]>(url);
  }

  create(associado: Associado): Observable<Associado> {
    const url = this.baseUrl + "/associado";
    return this.http.post<Associado>(url, associado);
  }

  update(associado: Associado): Observable<Associado> {
    const url = `${this.baseUrl}/associado/${associado.id}`;
    return this.http.put<Associado>(url, associado);
  }

  delete(id : any): Observable<void> {
    const url = `${this.baseUrl}/associado/${id}`;
    return this.http.delete<void>(url);
  }

  message(msg: String): void {
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    });
  }
}
