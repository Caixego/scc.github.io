import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { HeaderComponent } from './views/components/template/header/header.component';
import { FooterComponent } from './views/components/template/footer/footer.component';
import { NavComponent } from './views/components/template/nav/nav.component';
import { HomeComponent } from './views/components/home/home.component';
import { AssociadoCreateComponent } from './views/components/associado/associado-create/associado-create.component';
import { AssociadoReaderComponent } from './views/components/associado/associado-reader/associado-reader.component';
import { AssociadoUpdateComponent } from './views/components/associado/associado-update/associado-update.component';
import { AssociadoDeleteComponent } from './views/components/associado/associado-delete/associado-delete.component';
import { AssociadoInativoComponent } from './views/components/associado/associado-inativo/associado-inativo.component';
import { PagamentoReaderComponent } from './views/components/pagamento/pagamento-reader/pagamento-reader.component';
import { MatNativeDateModule } from '@angular/material/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { PagamentoCreateComponent } from './views/components/pagamento/pagamento-create/pagamento-create.component';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    AssociadoCreateComponent,
    AssociadoReaderComponent,
    AssociadoUpdateComponent,
    AssociadoDeleteComponent,
    AssociadoInativoComponent,
    PagamentoReaderComponent,
    PagamentoCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatNativeDateModule,
    MatAutocompleteModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'pt-BR' }  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
