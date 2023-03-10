import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BitcodeService {

  private _url:string="./assets/data/courseData.json";
  private _advantageUrl:string="./assets/data/cardData.json";
  private _bannerImagesUrl:string="./assets/data/banner-images.json";
  constructor(private _http:HttpClient) { }

  getData():Observable<any>{
    return this._http.get<any>(this._url);
  }

  getCardData():Observable<any>{
    return this._http.get<any>(this._advantageUrl);
  }
  

  getBannerImages():Observable<any>{
    return this._http.get<any>(this._bannerImagesUrl);
  }


}
