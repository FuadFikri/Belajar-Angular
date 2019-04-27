import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Rekening } from '../rekening.model';
import { RekeningService } from '../rekening.service';

@Component({
  selector: 'pilihan-rekening',
  templateUrl: './pilihan-rekening.component.html',
  styleUrls: ['./pilihan-rekening.component.scss']
})
export class PilihanRekeningComponent implements OnInit {

  daftarRekening: Rekening[];
  errorMsg:String;
  @Output() pilihanRekening:EventEmitter<Rekening>  = new EventEmitter();

  constructor(private rekeningService: RekeningService) {
    this.rekeningService.getDataRekening().subscribe((data: Rekening[]) => {
        this.daftarRekening = data
      },
      error => {
        this.errorMsg=error.statusText;
      }
    );
  }

  ngOnInit() {
  }

  pilihRekening(r: Rekening){
    this.pilihanRekening.emit(r);
  }

}
