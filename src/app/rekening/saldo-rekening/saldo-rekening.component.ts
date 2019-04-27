import { Component, OnInit } from '@angular/core';
import { Rekening } from '../rekening.model';

@Component({
  selector: 'app-saldo-rekening',
  templateUrl: './saldo-rekening.component.html',
  styleUrls: ['./saldo-rekening.component.scss']
})
export class SaldoRekeningComponent implements OnInit {
  rekeningDipilih:Rekening;
  constructor() { }

  ngOnInit() {
  }

  pilihRekening(r : Rekening){
    this.rekeningDipilih = r;
  }

}
