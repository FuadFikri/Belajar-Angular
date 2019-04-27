import { Injectable } from '@angular/core';
import { Rekening } from './rekening.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RekeningService {

  private serverUrl = 'api/rekening';
  constructor(private http: HttpClient) { }

  // webservice
  getDataRekening():Observable<Rekening[]>{
    return this.http.get<Rekening[]>(this.serverUrl);
  }

  //============ Hard code====================//
  // getDataRekening(): Promise<Rekening[]> {
  //  let hasil:Rekening[] = [
  //     new Rekening("r001","098765789","Tabungan Fuad Fikri S"),
  //     new Rekening("r002","21345545","giro")
  //   ];
  //   return Promise.resolve(hasil);
  // }
}
