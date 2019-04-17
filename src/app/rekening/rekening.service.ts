import { Injectable } from '@angular/core';
import { Rekening } from './rekening.model';

@Injectable({
  providedIn: 'root'
})
export class RekeningService {

  constructor() { }

  getDataRekening(): Rekening[] {
   let hasil:Rekening[] = [
      new Rekening("r001","098765789","Tabungan Fuad Fikri S"),
      new Rekening("r002","21345545","giro")
    ];
    return hasil;
  }
}
