import { Component, OnInit } from '@angular/core';
import { RekeningService } from '../rekening.service';
import { Rekening } from '../rekening.model';

@Component({
  selector: 'app-daftar-rekening',
  templateUrl: './daftar-rekening.component.html',
  styleUrls: ['./daftar-rekening.component.scss'],
  providers:[RekeningService]
})
export class DaftarRekeningComponent implements OnInit {
  headElements=["id","nama","action"];
  daftarRekening:Rekening[];

  constructor(private rekeningService: RekeningService) { 
    this.daftarRekening = rekeningService.getDataRekening();
    console.log(this.daftarRekening);
  }

  ngOnInit() {
    
  }

  showDetail(rek: Rekening){
    console.log(rek);
  }

}
