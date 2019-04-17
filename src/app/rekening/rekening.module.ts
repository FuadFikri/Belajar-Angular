import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RekeningComponent } from './rekening.component';
import { DaftarRekeningComponent } from './daftar-rekening/daftar-rekening.component';
import { SaldoRekeningComponent } from './saldo-rekening/saldo-rekening.component';
import { RouterModule, Routes } from '@angular/router';
import { MutasiRekeningComponent } from './mutasi-rekening/mutasi-rekening.component';
import { PilihanRekeningComponent } from './pilihan-rekening/pilihan-rekening.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

const routingRekening: Routes = [
  {path: 'rekening/list', component: DaftarRekeningComponent},
  {path: 'rekening/saldo', component: SaldoRekeningComponent},
  {path: 'rekening/mutasi', component: MutasiRekeningComponent},
  {path: 'rekening/**', component: RekeningComponent}
];
@NgModule({
  declarations: [DaftarRekeningComponent, SaldoRekeningComponent, MutasiRekeningComponent, PilihanRekeningComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routingRekening),
    MDBBootstrapModule.forRoot()
  ],
  exports:[
    PilihanRekeningComponent
  ] 
  // REUSABLE COMPONENT
  //export pilihanrekeningcomponent biar bisa dipake dimodule lain. dalam hal ini dipake di transfer.
  // karena beda module, maka harus di export
})
export class RekeningModule { }
