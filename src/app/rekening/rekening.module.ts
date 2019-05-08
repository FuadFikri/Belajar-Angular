import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RekeningComponent } from './rekening.component';
import { DaftarRekeningComponent } from './daftar-rekening/daftar-rekening.component';
import { SaldoRekeningComponent } from './saldo-rekening/saldo-rekening.component';
import { RouterModule, Routes } from '@angular/router';
import { MutasiRekeningComponent } from './mutasi-rekening/mutasi-rekening.component';
import { PilihanRekeningComponent } from './pilihan-rekening/pilihan-rekening.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DetailRekeningComponent } from './detail-rekening/detail-rekening.component';
import { AuthGuard } from '../ceklogin-service';
import { AuthService } from '../auth.service';

const routingRekening: Routes = [
  {path: 'rekening/list', component: DaftarRekeningComponent, canActivate:[AuthGuard] },
  {path: 'rekening/saldo', component: SaldoRekeningComponent, canActivate:[AuthGuard] },
  {path: 'rekening/mutasi', component: MutasiRekeningComponent, canActivate:[AuthGuard] },
  {path: 'rekening/**', component: RekeningComponent}
];
@NgModule({
  declarations: [DaftarRekeningComponent, SaldoRekeningComponent, MutasiRekeningComponent, PilihanRekeningComponent, DetailRekeningComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routingRekening),
    MDBBootstrapModule.forRoot()
  ],
  exports: [
    PilihanRekeningComponent
  ],
  providers: [AuthGuard, AuthService]
  // REUSABLE COMPONENT
  // export pilihanrekeningcomponent biar bisa dipake dimodule lain. dalam hal ini dipake di transfer.
  // karena beda module, maka harus di export
})
export class RekeningModule { }
