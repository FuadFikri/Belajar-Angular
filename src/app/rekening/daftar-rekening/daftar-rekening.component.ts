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
    rekeningService.getDataRekening()
    .then(hasil => 
      this.daftarRekening = hasil);
  }

  ngOnInit() {
    
  }

  showDetail(rek: Rekening){
    console.log(rek);
  }

}
