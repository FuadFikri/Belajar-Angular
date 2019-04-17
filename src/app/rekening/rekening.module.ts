import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RekeningComponent } from './rekening.component';
import { DaftarRekeningComponent } from './daftar-rekening/daftar-rekening.component';
import { SaldoRekeningComponent } from './saldo-rekening/saldo-rekening.component';
import { RouterModule, Routes } from '@angular/router';
import { MutasiRekeningComponent } from './mutasi-rekening/mutasi-rekening.component';

const routingRekening: Routes = [
  {path: 'rekening/list', component: DaftarRekeningComponent},
  {path: 'rekening/saldo', component: SaldoRekeningComponent},
  {path: 'rekening/mutasi', component: MutasiRekeningComponent},
  {path: 'rekening/**', component: RekeningComponent}
];
@NgModule({
  declarations: [DaftarRekeningComponent, SaldoRekeningComponent, MutasiRekeningComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routingRekening)
  ]
})
export class RekeningModule { }
