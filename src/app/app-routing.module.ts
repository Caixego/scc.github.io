import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssociadoCreateComponent } from './views/components/associado/associado-create/associado-create.component';
import { AssociadoDeleteComponent } from './views/components/associado/associado-delete/associado-delete.component';
import { AssociadoInativoComponent } from './views/components/associado/associado-inativo/associado-inativo.component';
import { AssociadoReaderComponent } from './views/components/associado/associado-reader/associado-reader.component';
import { AssociadoUpdateComponent } from './views/components/associado/associado-update/associado-update.component';
import { HomeComponent } from './views/components/home/home.component';
import { PagamentoReaderComponent } from './views/components/pagamento/pagamento-reader/pagamento-reader.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'associado',
    component: AssociadoReaderComponent
  },
  {
    path: 'associado/inativos',
    component: AssociadoInativoComponent
  },
  {
    path: 'associado/create',
    component: AssociadoCreateComponent
  },
  {
    path: 'associado/update/:id',
    component: AssociadoUpdateComponent
  },
  {
    path: 'associado/delete/:id',
    component: AssociadoDeleteComponent
  },
  {
    path: 'pagamento',
    component: PagamentoReaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
